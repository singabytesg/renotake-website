"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { MessageSquare, Sparkles, Clock, CheckCircle, Zap, Brain, Shield, Bell } from "lucide-react"

export default function AskRenoAIPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist/renoai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "renoai_landing",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        toast({
          title: "Unable to join waitlist",
          description: data.error || "Something went wrong. Please try again.",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }

      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when RenoAI launches in Q4 2025.",
      })
      setEmail("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to join waitlist. Please check your connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <MessageSquare className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Ask RenoAI</h1>
            <p className="mx-auto mb-2 max-w-2xl text-xl text-gray-600">
              Your 24/7 AI renovation assistant trained on Singapore regulations and real project
              data
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800">
              <Clock className="h-4 w-4" />
              Coming Q4 2025
            </div>
          </div>

          <div className="mb-16 rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-8 md:p-12">
            <div className="mb-6 text-center">
              <h2 className="mb-3 text-2xl font-bold">Join the Waitlist</h2>
              <p className="text-gray-700">
                Be the first to know when RenoAI launches. Get exclusive early access and special
                launch pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mx-auto max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white"
                  required
                />
                <Button
                  type="submit"
                  className="whitespace-nowrap bg-green-600 hover:bg-green-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
              <p className="mt-3 text-center text-sm text-gray-600">
                <CheckCircle className="inline h-4 w-4 text-green-600" /> No spam. Unsubscribe
                anytime.
              </p>
            </form>
          </div>

          <div className="mb-12">
            <h2 className="mb-8 text-center text-2xl font-bold">What RenoAI Will Do</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-3 text-green-600">
                    <Zap className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">Instant Answers</CardTitle>
                  <CardDescription>
                    Get immediate responses to any renovation question, 24/7. No more waiting for
                    forum replies.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 text-green-600">
                    <Brain className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">Singapore-Specific</CardTitle>
                  <CardDescription>
                    Trained on HDB/BCA regulations, local costs, and real Singapore renovation
                    projects.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 text-green-600">
                    <Shield className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">Accurate & Updated</CardTitle>
                  <CardDescription>
                    Always current with latest regulations, market prices, and best practices.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="mb-12 rounded-xl border-2 border-gray-200 p-8">
            <h2 className="mb-6 text-2xl font-bold">Example Questions RenoAI Can Answer</h2>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="font-medium text-gray-900">
                  "Can I hack the wall between my kitchen and living room in my BTO?"
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-medium text-green-600">RenoAI:</span> Yes, you can hack
                  non-structural partition walls. You'll need HDB permit (S$30, 3 days processing).
                  Check your floor plan for structural markings...
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="font-medium text-gray-900">
                  "How much does it cost to renovate a 4-room BTO in 2025?"
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-medium text-green-600">RenoAI:</span> Based on current
                  market rates: Basic (S$25-35k), Mid-range (S$40-55k), Premium (S$60-80k+). Here's
                  the breakdown by room...
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="font-medium text-gray-900">
                  "Should I get an ID or contractor for my renovation?"
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-medium text-green-600">RenoAI:</span> It depends on your
                  budget, complexity, and involvement level. ID: Full service, higher cost
                  (S$50-70k). Contractor: Execution only, moderate cost (S$30-45k)...
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-center text-2xl font-bold">Why Wait for RenoAI?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Save Hours of Research</h3>
                  <p className="text-sm text-gray-600">
                    Stop digging through forums and outdated blogs. Get answers in seconds.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Avoid Costly Mistakes</h3>
                  <p className="text-sm text-gray-600">
                    Learn from others' experiences and prevent expensive renovation errors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Current Pricing Data</h3>
                  <p className="text-sm text-gray-600">
                    Get 2025 market rates, not outdated prices from years ago.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">HDB Compliance</h3>
                  <p className="text-sm text-gray-600">
                    Know exactly what you can and can't do according to latest HDB rules.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-green-50 p-8 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Bell className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="mb-3 text-2xl font-bold">Want Early Access?</h2>
            <p className="mb-6 text-gray-700">
              Join our waitlist now and get notified the moment RenoAI launches. Plus, enjoy special
              launch pricing available only to waitlist members.
            </p>
            <form onSubmit={handleSubmit} className="mx-auto max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white"
                  required
                />
                <Button
                  type="submit"
                  className="whitespace-nowrap bg-green-600 hover:bg-green-700"
                  disabled={isSubmitting}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Joining..." : "Get Early Access"}
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600">
              While you wait, explore our comprehensive renovation guides:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/guides/ultimate-hdb-bto-guide">
                <Button variant="outline">BTO Guide</Button>
              </Link>
              <Link href="/guides/singapore-renovation-budgeting-bible">
                <Button variant="outline">Budget Guide</Button>
              </Link>
              <Link href="/tools">
                <Button variant="outline">Planning Tools</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="text-xl font-bold">
              Reno<span className="text-green-600">Take</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Singapore's trusted renovation guide for BTO owners and homeowners.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              © {new Date().getFullYear()} RenoTake. All rights reserved. Not affiliated with HDB
              or BCA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
