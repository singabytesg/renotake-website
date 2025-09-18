"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GuideError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Guide Error:", error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-4 text-2xl font-bold text-charcoal">Something went wrong</h2>
        <p className="mb-6 text-gray-600">
          We encountered an error while loading this guide. Please try again.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={reset} variant="outline">
            Try again
          </Button>
          <Link href="/guides">
            <Button>Back to Guides</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
