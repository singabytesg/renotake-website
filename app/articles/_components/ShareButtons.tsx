"use client"

import { useState } from "react"
import { Twitter, Linkedin, Facebook, Link2, Check } from "lucide-react"

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-gray-700">Share this article</h3>
      <div className="flex items-center gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gray-100 p-2 transition-colors hover:bg-blue-100 hover:text-blue-600"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gray-100 p-2 transition-colors hover:bg-blue-100 hover:text-blue-600"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gray-100 p-2 transition-colors hover:bg-blue-100 hover:text-blue-600"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <button
          onClick={copyToClipboard}
          className="rounded-lg bg-gray-100 p-2 transition-colors hover:bg-green-100 hover:text-green-600"
          aria-label="Copy link"
        >
          {copied ? <Check className="h-5 w-5 text-green-600" /> : <Link2 className="h-5 w-5" />}
        </button>
      </div>
    </div>
  )
}
