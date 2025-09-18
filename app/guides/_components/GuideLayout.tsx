"use client"

import { useEffect, useState } from "react"
import GuideHeader from "./GuideHeader"
import GuideContent from "./GuideContent"
import TableOfContents from "./TableOfContents"
import ProgressIndicator from "./ProgressIndicator"
import MobileNavigation from "./MobileNavigation"
import ShareToolbar from "./ShareToolbar"
import type { Guide } from "../_lib/markdown-parser"

interface GuideLayoutProps {
  guide: Guide
}

export default function GuideLayout({ guide }: GuideLayoutProps) {
  const [activeSection, setActiveSection] = useState("")
  const [progress, setProgress] = useState(0)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100
      setProgress(scrollProgress)

      // Update active section based on scroll position
      const sections = document.querySelectorAll("h2[id], h3[id]")
      let currentSection = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100) {
          currentSection = section.id
        }
      })

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  return (
    <div className="min-h-screen bg-white">
      {/* Progress indicator */}
      <ProgressIndicator progress={progress} />

      {/* Guide header */}
      <GuideHeader guide={guide} />

      {/* Main content area */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Desktop TOC */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <TableOfContents
              toc={guide.toc}
              activeSection={activeSection}
              onSectionClick={setActiveSection}
            />
          </aside>

          {/* Main content */}
          <main className="min-w-0 flex-1">
            <GuideContent content={guide.contentHtml} />
          </main>

          {/* Sidebar */}
          <aside className="hidden w-64 shrink-0 xl:block">
            <div className="sticky top-24 space-y-6">
              <ShareToolbar title={guide.title} />

              {/* Related tools */}
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="mb-3 text-sm font-semibold text-charcoal">Helpful Tools</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/tools/budget-calculator" className="text-primary hover:underline">
                      Budget Calculator
                    </a>
                  </li>
                  <li>
                    <a href="/tools/timeline-planner" className="text-primary hover:underline">
                      Timeline Planner
                    </a>
                  </li>
                  <li>
                    <a href="/tools/material-selector" className="text-primary hover:underline">
                      Material Selector
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick stats */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Reading time</span>
                    <span className="font-medium text-charcoal">{guide.readingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Word count</span>
                    <span className="font-medium text-charcoal">
                      {guide.wordCount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last updated</span>
                    <span className="font-medium text-charcoal">
                      {new Date(guide.modifiedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileNavigation
        toc={guide.toc}
        activeSection={activeSection}
        isOpen={isMobileNavOpen}
        onToggle={() => setIsMobileNavOpen(!isMobileNavOpen)}
        onSectionClick={(id) => {
          setActiveSection(id)
          setIsMobileNavOpen(false)
        }}
      />
    </div>
  )
}
