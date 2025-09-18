"use client"

import { useState } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { TocItem } from "../_lib/markdown-parser"

interface MobileNavigationProps {
  toc: TocItem[]
  activeSection: string
  isOpen: boolean
  onToggle: () => void
  onSectionClick: (id: string) => void
}

export default function MobileNavigation({
  toc,
  activeSection,
  isOpen,
  onToggle,
  onSectionClick,
}: MobileNavigationProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      onSectionClick(id)
    }
  }

  const renderTocItem = (item: TocItem, depth = 0) => {
    const isActive = activeSection === item.id
    const paddingLeft = `${depth * 16 + 16}px`

    return (
      <li key={item.id}>
        <a
          href={`#${item.id}`}
          onClick={(e) => handleClick(e, item.id)}
          className={cn(
            "flex items-center py-2 text-sm transition-colors",
            isActive ? "bg-primary/10 font-medium text-primary" : "text-gray-600 active:bg-gray-100"
          )}
          style={{ paddingLeft }}
        >
          {depth > 0 && <ChevronRight className={cn("mr-1 h-3 w-3", isActive && "text-primary")} />}
          <span className="line-clamp-2">{item.title}</span>
        </a>
        {item.children && item.children.length > 0 && (
          <ul>{item.children.map((child) => renderTocItem(child, depth + 1))}</ul>
        )}
      </li>
    )
  }

  return (
    <>
      {/* Mobile TOC Button */}
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg lg:hidden"
        aria-label="Toggle table of contents"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile TOC Overlay */}
      {isOpen && <div className="fixed inset-0 z-30 bg-black/20 lg:hidden" onClick={onToggle} />}

      {/* Mobile TOC Panel */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 max-h-[70vh] transform overflow-y-auto bg-white transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="border-t border-gray-200 px-4 py-4">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
            Table of Contents
          </h2>
          <ul className="space-y-1">{toc.map((item) => renderTocItem(item))}</ul>
        </div>
      </div>
    </>
  )
}
