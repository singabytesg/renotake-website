"use client"

import { useState } from "react"
import { Share2, Copy, Check, Twitter, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareToolbarProps {
  title: string
}

export default function ShareToolbar({ title }: ShareToolbarProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(window.location.href)}`
    window.open(url, "_blank")
  }

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      window.location.href
    )}`
    window.open(url, "_blank")
  }

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`
    window.open(url, "_blank")
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-charcoal">
        <Share2 className="h-4 w-4" />
        Share this guide
      </h3>
      <div className="flex flex-col gap-2">
        <Button variant="outline" size="sm" className="justify-start" onClick={copyToClipboard}>
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy link
            </>
          )}
        </Button>
        <Button variant="outline" size="sm" className="justify-start" onClick={shareOnTwitter}>
          <Twitter className="mr-2 h-4 w-4" />
          Twitter
        </Button>
        <Button variant="outline" size="sm" className="justify-start" onClick={shareOnLinkedIn}>
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </Button>
        <Button variant="outline" size="sm" className="justify-start" onClick={shareOnFacebook}>
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </Button>
      </div>
    </div>
  )
}
