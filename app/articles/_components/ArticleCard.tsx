import Link from "next/link"
import { Clock, Calendar, ArrowRight, Star } from "lucide-react"
import { Article } from "../_lib/article-parser"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
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
    <Link href={`/articles/${article.slug}`}>
      <Card className="group h-full cursor-pointer transition-all hover:shadow-lg">
        {article.image && (
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="mb-2 flex items-center gap-2">
            {article.featured && (
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                <Star className="mr-1 h-3 w-3" />
                Featured
              </span>
            )}
            <span className={`rounded-full px-2 py-1 text-xs font-medium ${categoryStyle}`}>
              {article.category}
            </span>
            <span className="flex items-center text-xs text-gray-500">
              <Clock className="mr-1 h-3 w-3" />
              {article.readingTime}
            </span>
          </div>
          <h3 className="line-clamp-2 text-lg font-semibold text-charcoal transition-colors group-hover:text-green-600">
            {article.title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="mb-3 line-clamp-3 text-sm text-gray-600">{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="flex items-center text-xs text-gray-500">
              <Calendar className="mr-1 h-3 w-3" />
              {new Date(article.date).toLocaleDateString("en-SG", {
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center text-sm font-medium text-green-600 transition-all group-hover:gap-2">
              Read more
              <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
