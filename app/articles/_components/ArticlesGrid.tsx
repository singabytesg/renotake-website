"use client"

import { useState } from "react"
import { Article } from "../_lib/article-parser"
import ArticleCard from "./ArticleCard"

interface ArticlesGridProps {
  articles: Article[]
  initialLimit?: number
}

export default function ArticlesGrid({ articles, initialLimit = 9 }: ArticlesGridProps) {
  const [displayLimit, setDisplayLimit] = useState(initialLimit)
  const displayedArticles = articles.slice(0, displayLimit)
  const hasMore = displayLimit < articles.length

  const loadMore = () => {
    setDisplayLimit((prev) => Math.min(prev + 6, articles.length))
  }

  if (articles.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500">No articles found. Check back soon!</p>
      </div>
    )
  }

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={loadMore}
            className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  )
}
