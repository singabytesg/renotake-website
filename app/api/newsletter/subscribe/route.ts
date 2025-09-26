import { NextRequest, NextResponse } from "next/server"
import { resend } from "@/lib/resend"
import { z } from "zod"
import WelcomeEmail from "@/emails/WelcomeEmail"

const subscribeSchema = z.object({
  email: z.string().email("Invalid email address"),
  source: z.string().optional().default("unknown"),
})

const RATE_LIMIT_MAP = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 3
const RATE_LIMIT_WINDOW = 60 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userLimit = RATE_LIMIT_MAP.get(ip)

  if (!userLimit || now > userLimit.resetAt) {
    RATE_LIMIT_MAP.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (userLimit.count >= RATE_LIMIT_MAX) {
    return false
  }

  userLimit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const validatedData = subscribeSchema.parse(body)
    const { email, source } = validatedData

    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (audienceId) {
      try {
        await resend.contacts.create({
          email,
          audienceId,
          unsubscribed: false,
        })
      } catch (error: any) {
        if (error?.message?.includes("already exists")) {
          return NextResponse.json(
            { error: "This email is already subscribed to our newsletter." },
            { status: 400 }
          )
        }
        throw error
      }
    }

    const leadMagnetUrl =
      process.env.NEXT_PUBLIC_LEAD_MAGNET_URL ||
      `${process.env.NEXT_PUBLIC_APP_URL || "https://renotake.sg"}/downloads/hdb-renovation-checklist-2024.pdf`

    await resend.emails.send({
      from: "RenoTake <hello@renotake.sg>",
      to: email,
      subject: "Welcome to RenoTake! Your Free HDB Checklist Inside",
      react: WelcomeEmail({ downloadUrl: leadMagnetUrl }),
    })

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed! Check your email for your free checklist.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Newsletter subscription error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid email address provided." }, { status: 400 })
    }

    return NextResponse.json(
      { error: "An error occurred. Please try again later." },
      { status: 500 }
    )
  }
}
