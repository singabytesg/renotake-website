"use client"

import { useState, useEffect } from "react"
import { Phase } from "../phases"
import { ChevronRight } from "lucide-react"

interface PhaseSidebarProps {
  phase: Phase
  currentSection: string | null
}

export default function PhaseSidebar({ phase, currentSection }: PhaseSidebarProps) {
  const [activeSection, setActiveSection] = useState<string | null>(currentSection)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let current = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100) {
          current = section.id
        }
      })

      if (current !== activeSection) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const handleSectionClick = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  // Demo sections for each phase
  const sections = getPhaseSection(phase.slug)

  return (
    <div className="sticky top-24">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
        In This Phase
      </h3>
      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors ${
              activeSection === section.id
                ? "bg-primary/10 font-medium text-primary"
                : "text-gray-600 hover:bg-gray-100 hover:text-charcoal"
            }`}
          >
            <span>{section.title}</span>
            <ChevronRight
              className={`h-3 w-3 transition-opacity ${
                activeSection === section.id ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        ))}
      </nav>
    </div>
  )
}

function getPhaseSection(phaseSlug: string) {
  // This would normally come from your content/data
  const sectionMap: Record<string, Array<{ id: string; title: string }>> = {
    "pre-collection-planning": [
      { id: "timeline", title: "6-Month Timeline" },
      { id: "budget", title: "Budget Planning" },
      { id: "contractor-research", title: "Contractor Research" },
      { id: "lifestyle-audit", title: "Lifestyle Audit" },
      { id: "documentation", title: "Documentation" },
    ],
    "key-collection": [
      { id: "collection-day", title: "Collection Day" },
      { id: "inspection", title: "First Inspection" },
      { id: "defects", title: "Defects Liability" },
      { id: "hidden-costs", title: "Hidden Costs" },
    ],
    "design-planning": [
      { id: "space-planning", title: "Space Planning" },
      { id: "room-design", title: "Room-by-Room" },
      { id: "materials", title: "Material Selection" },
      { id: "storage", title: "Storage Solutions" },
      { id: "mistakes", title: "Design Mistakes" },
    ],
    "contractor-selection": [
      { id: "types", title: "Types of Contractors" },
      { id: "vetting", title: "Vetting Process" },
      { id: "quotations", title: "Understanding Quotes" },
      { id: "negotiation", title: "Negotiation Tips" },
      { id: "contract", title: "Contract Review" },
    ],
    "permits-regulations": [
      { id: "guidelines", title: "HDB Guidelines" },
      { id: "permits", title: "Required Permits" },
      { id: "application", title: "Application Process" },
      { id: "dos-donts", title: "Do's and Don'ts" },
      { id: "penalties", title: "Penalties" },
    ],
    "renovation-process": [
      { id: "timeline", title: "8-Week Timeline" },
      { id: "management", title: "Remote Management" },
      { id: "checkpoints", title: "Quality Checkpoints" },
      { id: "issues", title: "Common Issues" },
      { id: "materials", title: "Material Delivery" },
    ],
    "quality-checks": [
      { id: "checklist", title: "Handover Checklist" },
      { id: "defects", title: "Documenting Defects" },
      { id: "payment", title: "Final Payment" },
      { id: "documents", title: "Important Documents" },
    ],
    "post-renovation": [
      { id: "settling", title: "First Month" },
      { id: "checks", title: "30-60-90 Day Checks" },
      { id: "maintenance", title: "Maintenance Schedule" },
      { id: "warranty", title: "Warranty Claims" },
    ],
  }

  return sectionMap[phaseSlug] || []
}
