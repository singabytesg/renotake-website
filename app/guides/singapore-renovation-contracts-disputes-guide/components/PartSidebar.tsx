"use client"

import React, { useEffect, useState } from "react"
import { ContentSection } from "../content/part-content"
import { Part } from "../parts"
import { Shield, FileText, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PartSidebarProps {
  sections: ContentSection[]
  currentPart: Part
}

export default function PartSidebar({ sections, currentPart }: PartSidebarProps) {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((_, index) =>
        document.getElementById(`section-${index}`)
      )

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(i)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="space-y-6">
      {/* Section Navigation */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
          In This Part
        </h3>
        <nav className="space-y-1">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                activeSection === index
                  ? "border-l-2 border-red-600 bg-red-50 font-medium text-red-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
          Quick Actions
        </h3>
        <div className="space-y-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => window.print()}
          >
            <FileText className="mr-2 h-4 w-4" />
            Print This Part
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href)
              alert("Link copied to clipboard!")
            }}
          >
            <Shield className="mr-2 h-4 w-4" />
            Share Protection Tips
          </Button>
        </div>
      </div>

      {/* Protection Reminder */}
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <div className="flex items-start">
          <AlertTriangle className="mr-2 mt-0.5 h-5 w-5 text-red-600" />
          <div>
            <h4 className="mb-1 text-sm font-semibold text-red-900">Protection Reminder</h4>
            <p className="text-xs text-red-700">
              {currentPart.protection || "Document everything. Trust but verify."}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
