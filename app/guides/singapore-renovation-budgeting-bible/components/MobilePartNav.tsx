"use client"

import { useState } from "react"
import Link from "next/link"
import { parts } from "../parts"
import { Menu, X, ChevronRight } from "lucide-react"

interface MobilePartNavProps {
  currentSlug?: string
}

export default function MobilePartNav({ currentSlug }: MobilePartNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const currentPart = parts.find((p) => p.slug === currentSlug)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-white">
            <div className="sticky top-0 border-b border-gray-200 bg-white px-4 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-charcoal">Navigation</h3>
                  {currentPart && (
                    <p className="text-sm text-gray-500">Current: Part {currentPart.id} of 6</p>
                  )}
                </div>
                <button onClick={() => setIsOpen(false)} className="rounded-full bg-gray-100 p-2">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <nav className="p-4">
              <Link
                href="/guides/singapore-renovation-budgeting-bible"
                className="mb-4 flex items-center justify-between rounded-lg bg-gray-50 p-3 text-sm font-medium text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <span>Back to Overview</span>
                <ChevronRight className="h-4 w-4" />
              </Link>

              <div className="space-y-2">
                {parts.map((part) => {
                  const isActive = part.slug === currentSlug
                  return (
                    <Link
                      key={part.id}
                      href={`/guides/singapore-renovation-budgeting-bible/${part.slug}`}
                      className={`flex items-start gap-3 rounded-lg p-3 transition-colors ${
                        isActive ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-2xl">{part.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium">
                          Part {part.id}: {part.title}
                        </div>
                        <div className="text-xs text-gray-500">{part.subtitle}</div>
                        {part.potentialSavings && (
                          <div className="mt-1 text-xs font-medium text-green-600">
                            Save {part.potentialSavings}
                          </div>
                        )}
                      </div>
                      {isActive && <ChevronRight className="mt-1 h-5 w-5" />}
                    </Link>
                  )
                })}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
