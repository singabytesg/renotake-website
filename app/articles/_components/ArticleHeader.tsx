import { Clock, Calendar, User } from "lucide-react"
import { Article } from "../_lib/article-parser"

interface ArticleHeaderProps {
  article: Article
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  const categoryColors: Record<string, string> = {
    "quick-tips": "bg-blue-100 text-blue-700",
    "cost-savers": "bg-green-100 text-green-700",
    "hdb-updates": "bg-purple-100 text-purple-700",
    "design-ideas": "bg-pink-100 text-pink-700",
    "contractor-insights": "bg-orange-100 text-orange-700",
    "common-mistakes": "bg-red-100 text-red-700",
    "case-studies": "bg-teal-100 text-teal-700",
  }

  const categorySlug = article.category.toLowerCase().replace(/\s+/g, "-")
  const categoryStyle = categoryColors[categorySlug] || "bg-gray-100 text-gray-700"

  return (
    <header className="bg-gradient-to-b from-gray-50 to-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          {/* Category */}
          <div className="mb-4 flex justify-center">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${categoryStyle}`}
            >
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold text-charcoal sm:text-4xl">{article.title}</h1>

          {/* Excerpt */}
          <p className="mx-auto mb-6 max-w-3xl text-lg text-gray-600">{article.excerpt}</p>

          {/* Meta */}
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <User className="mr-1 h-4 w-4" />
              {article.author}
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {new Date(article.date).toLocaleDateString("en-SG", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {article.readingTime}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {article.image && (
          <div className="mt-8 overflow-hidden rounded-xl shadow-lg">
            <img src={article.image} alt={article.title} className="h-auto w-full" />
          </div>
        )}
      </div>
    </header>
  )
}
