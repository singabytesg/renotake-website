"use client"

import { useState, useEffect } from "react"
import { X, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { trackEmailSignup, trackDownload } from "@/components/google-analytics"

export default function EmailCapturePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubscribed, setHasSubscribed] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Check if user has already subscribed or dismissed
    const hasSeenPopup = localStorage.getItem("renotake_popup_seen")
    const isSubscribed = localStorage.getItem("renotake_subscribed")

    if (hasSeenPopup || isSubscribed) {
      return
    }

    // Show popup after 30 seconds or when user scrolls 50% of page
    const showTimer = setTimeout(() => {
      setIsOpen(true)
      localStorage.setItem("renotake_popup_seen", "true")
    }, 30000)

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100
      if (scrollPercentage > 50) {
        setIsOpen(true)
        localStorage.setItem("renotake_popup_seen", "true")
        window.removeEventListener("scroll", handleScroll)
      }
    }

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSubscribed) {
        setIsOpen(true)
        localStorage.setItem("renotake_popup_seen", "true")
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearTimeout(showTimer)
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasSubscribed])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // TODO: Replace with actual API call to your email service
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Track successful signup
      trackEmailSignup("popup_lead_magnet")

      // Mark as subscribed
      localStorage.setItem("renotake_subscribed", "true")
      setHasSubscribed(true)

      toast({
        title: "Success! Check your email",
        description: "Your HDB Renovation Checklist is on its way to your inbox!",
      })

      // Trigger download
      const leadMagnetUrl =
        process.env.NEXT_PUBLIC_LEAD_MAGNET_URL || "/downloads/hdb-checklist.pdf"
      trackDownload("HDB Renovation Checklist 2024")

      // Create temporary link and trigger download
      const link = document.createElement("a")
      link.href = leadMagnetUrl
      link.download = "HDB-Renovation-Checklist-2024.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setIsOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDismiss = () => {
    setIsOpen(false)
    // Don't show again for 7 days
    const sevenDaysFromNow = new Date()
    sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7)
    localStorage.setItem("renotake_popup_dismissed", sevenDaysFromNow.toISOString())
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
        </button>

        <DialogHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <FileText className="h-6 w-6 text-green-600" />
          </div>
          <DialogTitle className="text-center text-2xl">Free HDB Renovation Checklist</DialogTitle>
          <DialogDescription className="text-center">
            <span className="font-semibold text-green-600">Save $5,000+</span> on your renovation
            with our comprehensive 47-point checklist
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Complete timeline from key collection to move-in</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>HDB permit requirements & approval checklist</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Cost breakdown for every renovation item</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Contractor red flags to watch out for</span>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
            <Button
              type="submit"
              className="h-12 w-full bg-green-600 hover:bg-green-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Get Free Checklist Now
                </>
              )}
            </Button>
          </form>

          <p className="text-center text-xs text-gray-500">
            Join 3,847+ Singapore homeowners. No spam, unsubscribe anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
