import { Calendar, Clock, User } from "lucide-react"
import type { Guide } from "../_lib/markdown-parser"

interface GuideHeaderProps {
  guide: Guide
}

export default function GuideHeader({ guide }: GuideHeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Category badge */}
        {guide.category && (
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {guide.category}
          </span>
        )}

        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
          {guide.title}
        </h1>

        {/* Excerpt */}
        {guide.excerpt && <p className="mb-6 text-lg text-gray-600 lg:text-xl">{guide.excerpt}</p>}

        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{guide.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(guide.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{guide.readingTime}</span>
          </div>
        </div>

        {/* Tags */}
        {guide.tags && guide.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {guide.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
