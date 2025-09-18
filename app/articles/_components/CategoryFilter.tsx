"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { ArticleCategory } from "../_lib/article-parser"

interface CategoryFilterProps {
  categories: ArticleCategory[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams?.get("category") || "all"

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === "all") {
      params.delete("category")
    } else {
      params.set("category", category)
    }

    const queryString = params.toString()
    router.push(queryString ? `/articles?${queryString}` : "/articles")
  }

  const categoryColors: Record<string, string> = {
    "quick-tips": "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300",
    "cost-savers": "hover:bg-green-50 hover:text-green-700 hover:border-green-300",
    "hdb-updates": "hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300",
    "design-ideas": "hover:bg-pink-50 hover:text-pink-700 hover:border-pink-300",
    "contractor-insights": "hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300",
    "common-mistakes": "hover:bg-red-50 hover:text-red-700 hover:border-red-300",
    "case-studies": "hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300",
  }

  const activeColors: Record<string, string> = {
    "quick-tips": "bg-blue-50 text-blue-700 border-blue-300",
    "cost-savers": "bg-green-50 text-green-700 border-green-300",
    "hdb-updates": "bg-purple-50 text-purple-700 border-purple-300",
    "design-ideas": "bg-pink-50 text-pink-700 border-pink-300",
    "contractor-insights": "bg-orange-50 text-orange-700 border-orange-300",
    "common-mistakes": "bg-red-50 text-red-700 border-red-300",
    "case-studies": "bg-teal-50 text-teal-700 border-teal-300",
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-gray-700">Filter by:</span>

      <button
        onClick={() => handleCategoryChange("all")}
        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
          currentCategory === "all"
            ? "border-green-300 bg-green-50 text-green-700"
            : "border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
        }`}
      >
        All Articles
      </button>

      {categories.map((category) => {
        const isActive = currentCategory === category.slug
        return (
          <button
            key={category.slug}
            onClick={() => handleCategoryChange(category.slug)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              isActive
                ? activeColors[category.slug] || "border-gray-300 bg-gray-50 text-gray-700"
                : `border-gray-300 bg-white text-gray-600 ${categoryColors[category.slug] || "hover:bg-gray-50"}`
            }`}
            title={category.description}
          >
            {category.name}
          </button>
        )
      })}
    </div>
  )
}
