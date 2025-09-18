import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface ContentSectionProps {
  section: {
    id: string
    title: string
    content: string
    subsections?: Array<{
      title: string
      content: string
    }>
    expandable?: boolean
  }
  index: number
}

export default function ContentSection({ section, index }: ContentSectionProps) {
  const [isExpanded, setIsExpanded] = useState(!section.expandable)

  return (
    <section id={section.id} className="scroll-mt-20">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {index + 1}
          </div>
          <h2 className="text-2xl font-bold text-charcoal">{section.title}</h2>
          {section.expandable && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-auto rounded-lg p-2 hover:bg-gray-100"
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Section Content */}
      {isExpanded && (
        <div className="space-y-6">
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />

          {/* Subsections */}
          {section.subsections && (
            <div className="space-y-6 border-l-2 border-gray-200 pl-6">
              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex}>
                  <h3 className="mb-3 text-lg font-semibold text-charcoal">{subsection.title}</h3>
                  <div
                    className="prose max-w-none text-gray-600"
                    dangerouslySetInnerHTML={{ __html: subsection.content }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
