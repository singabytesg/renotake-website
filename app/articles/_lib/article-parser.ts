import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import readingTime from "reading-time"

export interface ArticleMetadata {
  title: string
  slug: string
  category: string
  author: string
  date: string
  readingTime: string
  excerpt: string
  featured?: boolean
  tags?: string[]
  image?: string
}

export interface Article extends ArticleMetadata {
  content: string
  contentHtml: string
}

export interface ArticleCategory {
  slug: string
  name: string
  description: string
  icon?: string
  color?: string
}

// Define article categories
export const articleCategories: ArticleCategory[] = [
  {
    slug: "quick-tips",
    name: "Quick Tips",
    description: "Actionable renovation tips you can use today",
    color: "blue",
  },
  {
    slug: "cost-savers",
    name: "Cost Savers",
    description: "Money-saving strategies for your renovation",
    color: "green",
  },
  {
    slug: "hdb-updates",
    name: "HDB Updates",
    description: "Latest regulations, policies, and news",
    color: "purple",
  },
  {
    slug: "design-ideas",
    name: "Design Ideas",
    description: "Inspiration and trends for your home",
    color: "pink",
  },
  {
    slug: "contractor-insights",
    name: "Contractor Insights",
    description: "Industry knowledge and contractor tips",
    color: "orange",
  },
  {
    slug: "common-mistakes",
    name: "Common Mistakes",
    description: "What to avoid in your renovation",
    color: "red",
  },
  {
    slug: "case-studies",
    name: "Case Studies",
    description: "Real renovation stories and lessons",
    color: "teal",
  },
]

const articlesDirectory = path.join(process.cwd(), "content", "articles")

// Get all article slugs for static generation
export async function getAllArticleSlugs(): Promise<string[]> {
  const slugs: string[] = []

  // Check if articles directory exists
  if (!fs.existsSync(articlesDirectory)) {
    return slugs
  }

  // Read all category directories
  const categories = fs.readdirSync(articlesDirectory)

  for (const category of categories) {
    const categoryPath = path.join(articlesDirectory, category)

    // Skip if not a directory
    if (!fs.statSync(categoryPath).isDirectory()) {
      continue
    }

    // Read all markdown files in category
    const files = fs.readdirSync(categoryPath)

    for (const file of files) {
      if (file.endsWith(".md")) {
        const slug = file.replace(/\.md$/, "")
        slugs.push(slug)
      }
    }
  }

  return slugs
}

// Get article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // Check if articles directory exists
  if (!fs.existsSync(articlesDirectory)) {
    return null
  }

  // Search through all categories for the article
  const categories = fs.readdirSync(articlesDirectory)

  for (const category of categories) {
    const categoryPath = path.join(articlesDirectory, category)

    // Skip if not a directory
    if (!fs.statSync(categoryPath).isDirectory()) {
      continue
    }

    const filePath = path.join(categoryPath, `${slug}.md`)

    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContents)

      // Process markdown to HTML
      const processedContent = await remark().use(html).process(content)
      const contentHtml = processedContent.toString()

      // Calculate reading time
      const stats = readingTime(content)

      return {
        title: data.title || slug,
        slug: data.slug || slug,
        category: data.category || category,
        author: data.author || "RenoTake Team",
        date: data.date || new Date().toISOString().split("T")[0],
        readingTime: data.readingTime || stats.text,
        excerpt: data.excerpt || content.substring(0, 150) + "...",
        featured: data.featured || false,
        tags: data.tags || [],
        image: data.image,
        content,
        contentHtml,
      }
    }
  }

  return null
}

// Get all articles with optional filtering
export async function getAllArticles(options?: {
  category?: string
  featured?: boolean
  limit?: number
  sortBy?: "date" | "readingTime"
}): Promise<Article[]> {
  const articles: Article[] = []

  // Check if articles directory exists
  if (!fs.existsSync(articlesDirectory)) {
    return articles
  }

  // Read all category directories
  const categories = fs.readdirSync(articlesDirectory)

  for (const category of categories) {
    // Skip if filtering by category and doesn't match
    if (options?.category && category !== options.category) {
      continue
    }

    const categoryPath = path.join(articlesDirectory, category)

    // Skip if not a directory
    if (!fs.statSync(categoryPath).isDirectory()) {
      continue
    }

    // Read all markdown files in category
    const files = fs.readdirSync(categoryPath)

    for (const file of files) {
      if (file.endsWith(".md")) {
        const slug = file.replace(/\.md$/, "")
        const article = await getArticleBySlug(slug)

        if (article) {
          // Apply featured filter if specified
          if (options?.featured !== undefined && article.featured !== options.featured) {
            continue
          }

          articles.push(article)
        }
      }
    }
  }

  // Sort articles
  if (options?.sortBy === "date") {
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } else if (options?.sortBy === "readingTime") {
    articles.sort((a, b) => {
      const aTime = parseInt(a.readingTime.match(/\d+/)?.[0] || "0")
      const bTime = parseInt(b.readingTime.match(/\d+/)?.[0] || "0")
      return aTime - bTime
    })
  } else {
    // Default sort by date (newest first)
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  // Apply limit if specified
  if (options?.limit) {
    return articles.slice(0, options.limit)
  }

  return articles
}

// Get related articles based on tags and category
export async function getRelatedArticles(
  currentSlug: string,
  limit: number = 3
): Promise<Article[]> {
  const current = await getArticleBySlug(currentSlug)
  if (!current) return []

  const allArticles = await getAllArticles()

  // Score articles by relevance
  const scoredArticles = allArticles
    .filter((article) => article.slug !== currentSlug)
    .map((article) => {
      let score = 0

      // Same category = 3 points
      if (article.category === current.category) {
        score += 3
      }

      // Each matching tag = 1 point
      if (current.tags && article.tags) {
        const matchingTags = article.tags.filter((tag) => current.tags?.includes(tag))
        score += matchingTags.length
      }

      return { article, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  return scoredArticles.slice(0, limit).map((item) => item.article)
}

// Get articles by category
export async function getArticlesByCategory(category: string): Promise<Article[]> {
  return getAllArticles({ category, sortBy: "date" })
}

// Get featured articles
export async function getFeaturedArticles(limit: number = 3): Promise<Article[]> {
  return getAllArticles({ featured: true, limit, sortBy: "date" })
}
