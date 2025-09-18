import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Clock, Calendar, User, Tag } from "lucide-react"
import { getArticleBySlug, getAllArticleSlugs, getRelatedArticles } from "../_lib/article-parser"
import ArticleHeader from "../_components/ArticleHeader"
import ArticleContent from "../_components/ArticleContent"
import ShareButtons from "../_components/ShareButtons"
import AuthorBio from "../_components/AuthorBio"
import RelatedArticles from "../_components/RelatedArticles"

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const article = await getArticleBySlug(resolvedParams.slug)

  if (!article) {
    return {
      title: "Article Not Found | RenoTake",
    }
  }

  return {
    title: `${article.title} | RenoTake`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: article.image ? [article.image] : [],
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const article = await getArticleBySlug(resolvedParams.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getRelatedArticles(article.slug, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/articles" className="text-gray-500 hover:text-gray-700">
              Articles
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="truncate font-medium text-gray-900">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <ArticleHeader article={article} />

      {/* Main Content */}
      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Article Body */}
          <div className="lg:col-span-2">
            <ArticleContent content={article.contentHtml} />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-gray-500" />
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/articles?tag=${encodeURIComponent(tag)}`}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-200"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <ShareButtons
                url={`https://renotake.com/articles/${article.slug}`}
                title={article.title}
              />
            </div>

            {/* Author Bio */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <AuthorBio author={article.author} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-4 space-y-8">
              {/* Article Meta */}
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 font-semibold text-gray-900">Article Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{article.readingTime} read</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>
                      {new Date(article.date).toLocaleDateString("en-SG", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <User className="mr-2 h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                <h3 className="mb-2 font-semibold text-gray-900">Get More Tips</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Weekly renovation insights delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mx-auto max-w-6xl border-t border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
          <RelatedArticles articles={relatedArticles} />
        </section>
      )}
    </div>
  )
}
