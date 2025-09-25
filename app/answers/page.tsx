"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Script from "next/script"
import type { Metadata } from "next"
import {
  Search,
  HelpCircle,
  Building,
  DollarSign,
  Users,
  Package,
  Clock,
  AlertCircle,
  FileCheck,
  Palette,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  MessageSquare,
  ArrowRight,
} from "lucide-react"
import { questions, getFeaturedQuestions, searchQuestions, CATEGORIES } from "./_data/questions"
import type { QAItem, QACategory as QACategoryType } from "./_data/types"

// Icon mapping for categories
const iconMap: Record<string, any> = {
  Building,
  DollarSign,
  Users,
  Package,
  Clock,
  AlertCircle,
  FileCheck,
  Palette,
}

export default function AnswersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<QACategoryType | "all">("all")
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set())

  // Filter questions based on search and category
  const filteredQuestions = useMemo(() => {
    let filtered = questions

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((q) => q.category === selectedCategory)
    }

    // Apply search filter
    if (searchQuery) {
      filtered = searchQuestions(searchQuery)
    }

    // Sort by priority
    return filtered.sort((a, b) => (a.priority || 100) - (b.priority || 100))
  }, [searchQuery, selectedCategory])

  // Get featured questions
  const featuredQuestions = getFeaturedQuestions().slice(0, 6)

  // Toggle question expansion
  const toggleQuestion = (id: string) => {
    setExpandedQuestions((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  // Generate FAQ schema for SEO
  const generateFAQSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: filteredQuestions.slice(0, 20).map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.detailedAnswer,
        },
      })),
    }
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                <HelpCircle className="mr-1 h-4 w-4" />
                Quick Answers to Common Questions
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
                Singapore Renovation Q&A
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
                Get instant answers to your HDB and BTO renovation questions. From permits to
                pricing, we've got you covered with expert insights.
              </p>

              {/* Search Bar */}
              <div className="mx-auto mt-8 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search your renovation question..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Try: "hack walls BTO", "contractor deposit", "renovation timeline"
                </p>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span>
                    <strong>{questions.length}</strong> Questions Answered
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span>Updated Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Expert Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-y border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                All Categories
              </button>
              {Object.entries(CATEGORIES).map(([key, category]) => {
                const Icon = iconMap[category.icon]
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key as QACategoryType)}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === key
                        ? "bg-primary text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {category.title}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Featured Questions */}
          {!searchQuery && selectedCategory === "all" && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-charcoal">Most Popular Questions</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {featuredQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-primary hover:shadow-md"
                  >
                    <h3 className="mb-2 font-semibold text-charcoal">{q.question}</h3>
                    <p className="mb-3 line-clamp-2 text-sm text-gray-600">{q.shortAnswer}</p>
                    <button
                      onClick={() => toggleQuestion(q.id)}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Read full answer
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Main Q&A List */}
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-charcoal">
                {selectedCategory === "all"
                  ? "All Questions"
                  : CATEGORIES[selectedCategory as QACategoryType].title}
              </h2>
              <span className="text-sm text-gray-500">
                {filteredQuestions.length} questions found
              </span>
            </div>

            {filteredQuestions.length === 0 ? (
              <div className="rounded-lg bg-gray-50 p-12 text-center">
                <HelpCircle className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                <h3 className="mb-2 text-lg font-semibold text-charcoal">No questions found</h3>
                <p className="text-gray-600">Try adjusting your search or browse all categories</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredQuestions.map((q) => {
                  const Icon = iconMap[CATEGORIES[q.category].icon]
                  const isExpanded = expandedQuestions.has(q.id)

                  return (
                    <div
                      key={q.id}
                      className="rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300"
                    >
                      <button
                        onClick={() => toggleQuestion(q.id)}
                        className="flex w-full items-start justify-between p-6 text-left"
                      >
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            {Icon && (
                              <Icon
                                className={`h-4 w-4 text-${CATEGORIES[q.category].color}-600`}
                              />
                            )}
                            <span className="text-xs font-medium text-gray-500">
                              {CATEGORIES[q.category].title}
                            </span>
                          </div>
                          <h3 className="mb-2 text-lg font-semibold text-charcoal">{q.question}</h3>
                          <p className="text-gray-600">{q.shortAnswer}</p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="border-t border-gray-200 px-6 py-4">
                          <div className="prose prose-sm max-w-none">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: q.detailedAnswer
                                  .replace(/\n/g, "<br />")
                                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                              }}
                            />
                          </div>

                          {q.warningNote && (
                            <div className="mt-4 flex items-start rounded-lg bg-red-50 p-3">
                              <AlertCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                              <p className="text-sm text-red-800">{q.warningNote}</p>
                            </div>
                          )}

                          {q.proTip && (
                            <div className="mt-4 flex items-start rounded-lg bg-green-50 p-3">
                              <TrendingUp className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                              <p className="text-sm text-green-800">
                                <strong>Pro Tip:</strong> {q.proTip}
                              </p>
                            </div>
                          )}

                          {q.sources && q.sources.length > 0 && (
                            <div className="mt-4 text-xs text-gray-500">
                              <strong>Sources:</strong>{" "}
                              {q.sources.map((source, idx) => (
                                <span key={idx}>
                                  <a
                                    href={source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                  >
                                    {source.replace("https://", "").split("/")[0]}
                                  </a>
                                  {idx < q.sources!.length - 1 && ", "}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="mt-4 flex items-center justify-between border-t pt-4">
                            <span className="text-xs text-gray-500">
                              Last updated: {q.lastUpdated}
                            </span>
                            <div className="flex items-center gap-4">
                              <button className="text-sm text-gray-600 hover:text-primary">
                                Was this helpful?
                              </button>
                              {q.relatedQuestions && q.relatedQuestions.length > 0 && (
                                <span className="text-sm text-gray-600">
                                  {q.relatedQuestions.length} related questions
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="mt-16 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-charcoal">Can't Find Your Question?</h2>
            <p className="mb-6 text-gray-600">
              Get personalized answers from our AI renovation assistant or explore our comprehensive
              guides
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/ask-renoai"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90"
              >
                Ask RenoAI
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-charcoal transition-colors hover:bg-gray-50"
              >
                Browse Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Email Capture */}
          <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
            <h3 className="mb-2 text-lg font-semibold text-charcoal">Get Weekly Q&A Updates</h3>
            <p className="mb-4 text-sm text-gray-600">
              New questions answered every week based on what Singapore homeowners are asking
            </p>
            <form className="mx-auto flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-2 font-medium text-white transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}
