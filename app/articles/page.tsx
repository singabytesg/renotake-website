import { Suspense } from "react"
import { getAllArticles, articleCategories } from "./_lib/article-parser"
import ArticlesGrid from "./_components/ArticlesGrid"
import CategoryFilter from "./_components/CategoryFilter"
import { Newspaper } from "lucide-react"

export const metadata = {
  title: "Renovation Articles & Tips | RenoTake",
  description:
    "Quick reads on Singapore renovation tips, cost-saving strategies, HDB updates, and real homeowner experiences. 5-minute articles for busy homeowners.",
}

export default async function ArticlesPage() {
  const allArticles = await getAllArticles({ sortBy: "date" })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              <Newspaper className="mr-2 h-4 w-4" />
              Quick 5-minute reads
            </div>
            <h1 className="mb-4 text-4xl font-bold text-charcoal sm:text-5xl">
              Renovation Articles & Tips
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Bite-sized insights on Singapore renovation. From cost-saving tips to HDB updates, get
              the knowledge you need in just 5 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-y border-gray-200 bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Suspense fallback={<div className="h-10 animate-pulse rounded bg-gray-200" />}>
            <CategoryFilter categories={articleCategories} />
          </Suspense>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Suspense fallback={<ArticlesGridSkeleton />}>
            <ArticlesGrid articles={allArticles} />
          </Suspense>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-green-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-charcoal">Get Weekly Renovation Tips</h2>
          <p className="mb-8 text-lg text-gray-600">
            Join 10,000+ Singapore homeowners receiving practical renovation advice every week.
          </p>
          <div className="mx-auto max-w-md">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="rounded-lg bg-green-600 px-6 py-2 font-medium text-white transition-colors hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-sm text-gray-500">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

function ArticlesGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="mb-4 h-48 rounded-lg bg-gray-200" />
          <div className="mb-2 h-4 w-24 rounded bg-gray-200" />
          <div className="mb-2 h-6 rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  )
}
