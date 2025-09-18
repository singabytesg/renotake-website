"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { parts } from "../parts"
import { ChevronRight, BookOpen, Download } from "lucide-react"

interface PartSidebarProps {
  partSlug: string
}

export default function PartSidebar({ partSlug }: PartSidebarProps) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let current = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id || ""
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentPartIndex = parts.findIndex((p) => p.slug === partSlug)
  const currentPart = parts[currentPartIndex]

  if (!currentPart) return null

  return (
    <div className="space-y-6">
      {/* Quick Navigation */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="mb-3 flex items-center gap-2 font-semibold text-charcoal">
          <BookOpen className="h-4 w-4" />
          All Parts
        </h3>
        <nav className="space-y-1">
          {parts.map((part) => (
            <Link
              key={part.id}
              href={`/guides/singapore-renovation-budgeting-bible/${part.slug}`}
              className={`flex items-center gap-2 rounded px-3 py-2 text-sm transition-colors ${
                part.slug === partSlug
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="text-lg">{part.icon}</span>
              <span className="flex-1">Part {part.id}</span>
              {part.slug === partSlug && <ChevronRight className="h-3 w-3" />}
            </Link>
          ))}
        </nav>
      </div>

      {/* Quick Actions */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="mb-3 font-semibold text-charcoal">Quick Actions</h3>
        <div className="space-y-2">
          <button className="flex w-full items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
            <Download className="h-4 w-4" />
            Download Checklist
          </button>
          {partSlug === "budget-planning-templates" && (
            <button className="flex w-full items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100">
              <Download className="h-4 w-4" />
              Get Excel Template
            </button>
          )}
        </div>
      </div>

      {/* Key Highlights */}
      {currentPart.potentialSavings && (
        <div className="rounded-lg bg-green-50 p-4">
          <div className="mb-2 text-sm font-semibold text-green-800">Potential Savings</div>
          <div className="text-2xl font-bold text-green-600">{currentPart.potentialSavings}</div>
          <p className="mt-1 text-xs text-green-700">Following the strategies in this part</p>
        </div>
      )}
    </div>
  )
}
