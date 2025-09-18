"use client"

import { useEffect, useRef } from "react"

interface GuideContentProps {
  content: string
}

export default function GuideContent({ content }: GuideContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add IDs to headers for anchor links
    if (contentRef.current) {
      const headers = contentRef.current.querySelectorAll("h2, h3, h4")
      headers.forEach((header) => {
        if (header.textContent && !header.id) {
          const id = header.textContent
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim()
          header.id = id
        }
      })

      // Make tables responsive
      const tables = contentRef.current.querySelectorAll("table")
      tables.forEach((table) => {
        const wrapper = document.createElement("div")
        wrapper.className = "overflow-x-auto"
        table.parentNode?.insertBefore(wrapper, table)
        wrapper.appendChild(table)
        table.className = "min-w-full divide-y divide-gray-200"
      })

      // Style code blocks
      const codeBlocks = contentRef.current.querySelectorAll("pre code")
      codeBlocks.forEach((block) => {
        const pre = block.parentElement
        if (pre) {
          pre.className = "overflow-x-auto rounded-lg bg-gray-100 p-4"
        }
      })

      // Add smooth scrolling for anchor links
      const links = contentRef.current.querySelectorAll('a[href^="#"]')
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault()
          const href = link.getAttribute("href")
          if (href) {
            const target = document.querySelector(href)
            if (target) {
              const yOffset = -80
              const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
              window.scrollTo({ top: y, behavior: "smooth" })
            }
          }
        })
      })
    }
  }, [content])

  return (
    <article
      ref={contentRef}
      className="guide-content prose prose-lg max-w-none prose-headings:scroll-mt-20 prose-headings:text-charcoal prose-h2:mb-4 prose-h2:mt-8 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-h2:text-2xl prose-h2:font-bold prose-h3:mb-3 prose-h3:mt-6 prose-h3:text-xl prose-h3:font-semibold prose-h4:mb-2 prose-h4:mt-4 prose-h4:text-lg prose-h4:font-medium prose-p:text-gray-700 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-blockquote:font-normal prose-blockquote:not-italic prose-strong:text-charcoal prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:text-charcoal prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-100 prose-ol:my-4 prose-ul:my-4 prose-li:text-gray-700 prose-table:my-6"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
