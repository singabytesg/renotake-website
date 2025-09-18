import Link from "next/link"
import { Clock, Calendar, Star, ArrowRight } from "lucide-react"
import { Article } from "../_lib/article-parser"

interface FeaturedArticleProps {
  article: Article
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <div className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Image */}
          {article.image && (
            <div className="aspect-video overflow-hidden bg-gray-100 md:aspect-auto">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col justify-center p-6 md:p-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                <Star className="mr-1 h-3 w-3" />
                Featured
              </span>
              <span className="text-xs text-gray-500">{article.category}</span>
            </div>

            <h2 className="mb-3 text-2xl font-bold text-charcoal transition-colors group-hover:text-green-600 md:text-3xl">
              {article.title}
            </h2>

            <p className="mb-4 line-clamp-3 text-gray-600">{article.excerpt}</p>

            <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {article.readingTime}
              </span>
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(article.date).toLocaleDateString("en-SG", {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center font-medium text-green-600 transition-all group-hover:gap-3">
              Read Article
              <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
