"use client"

import { useState } from "react"
import Link from "next/link"
import { parts } from "../parts"
import { ChevronDown } from "lucide-react"

interface MobilePartNavProps {
  currentPart: number
}

export default function MobilePartNav({ currentPart }: MobilePartNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const currentPartData = parts.find((p) => p.id === currentPart)

  if (!currentPartData) return null

  return (
    <div className="border-b border-gray-200 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <div>
          <div className="text-xs text-gray-500">Part {currentPart} of 6</div>
          <div className="font-medium text-charcoal">{currentPartData.title}</div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="border-t border-gray-100">
          <nav className="px-4 py-2">
            {parts.map((part) => (
              <Link
                key={part.id}
                href={`/guides/hdb-permits/${part.slug}`}
                className={`block rounded px-3 py-2 text-sm ${
                  part.id === currentPart ? "bg-blue-50 font-medium text-blue-700" : "text-gray-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Part {part.id}: {part.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
