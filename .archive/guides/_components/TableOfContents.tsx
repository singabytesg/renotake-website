"use client"

import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { TocItem } from "../_lib/markdown-parser"

interface TableOfContentsProps {
  toc: TocItem[]
  activeSection: string
  onSectionClick: (id: string) => void
}

export default function TableOfContents({
  toc,
  activeSection,
  onSectionClick,
}: TableOfContentsProps) {
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
    const paddingLeft = `${depth * 16 + 12}px`

    return (
      <li key={item.id}>
        <a
          href={`#${item.id}`}
          onClick={(e) => handleClick(e, item.id)}
          className={cn(
            "group flex items-center py-1.5 text-sm transition-colors",
            isActive ? "font-medium text-primary" : "text-gray-600 hover:text-charcoal"
          )}
          style={{ paddingLeft }}
        >
          {depth > 0 && (
            <ChevronRight
              className={cn("mr-1 h-3 w-3 transition-transform", isActive && "text-primary")}
            />
          )}
          <span className="line-clamp-2">{item.title}</span>
        </a>
        {item.children && item.children.length > 0 && (
          <ul>{item.children.map((child) => renderTocItem(child, depth + 1))}</ul>
        )}
      </li>
    )
  }

  return (
    <nav className="sticky top-24">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
        On this page
      </h2>
      <ul className="space-y-1 border-l-2 border-gray-200">
        {toc.map((item) => renderTocItem(item))}
      </ul>
    </nav>
  )
}
