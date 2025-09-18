import Link from "next/link"
import { Article } from "../_lib/article-parser"
import { ArrowRight } from "lucide-react"
import ArticleCard from "./ArticleCard"

interface RelatedArticlesProps {
  articles: Article[]
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-charcoal">Related Articles</h2>
        <Link
          href="/articles"
          className="flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700"
        >
          View all articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
