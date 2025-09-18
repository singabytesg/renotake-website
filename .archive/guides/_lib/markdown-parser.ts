import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"
import readingTime from "reading-time"

const guidesDirectory = path.join(process.cwd(), "content/guides")

export interface TocItem {
  id: string
  title: string
  level: number
  children?: TocItem[]
}

export interface Guide {
  slug: string
  title: string
  content: string
  contentHtml: string
  excerpt?: string
  description?: string
  author: string
  publishedAt: string
  modifiedAt: string
  readingTime: string
  wordCount: number
  toc: TocItem[]
  tags?: string[]
  category?: string
}

export async function getAllGuideSlugs() {
  // Check if directory exists
  if (!fs.existsSync(guidesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(guidesDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""))
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  try {
    const fullPath = path.join(guidesDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Calculate reading time
    const stats = readingTime(content)

    // Generate TOC from content
    const toc = extractTableOfContents(content)

    // Process markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(content)

    const contentHtml = processedContent.toString()

    // Extract excerpt if not provided
    const excerpt = data.excerpt || content.substring(0, 200).replace(/[#\*\n]/g, "") + "..."

    return {
      slug,
      title: data.title || slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      content,
      contentHtml,
      excerpt,
      description: data.description || excerpt,
      author: data.author || "RenoTake Team",
      publishedAt: data.publishedAt || new Date().toISOString(),
      modifiedAt: data.modifiedAt || data.publishedAt || new Date().toISOString(),
      readingTime: stats.text,
      wordCount: stats.words,
      toc,
      tags: data.tags || [],
      category: data.category || "Guide",
    }
  } catch (error) {
    console.error(`Error loading guide ${slug}:`, error)
    return null
  }
}

function extractTableOfContents(content: string): TocItem[] {
  const headingRegex = /^(#{2,4})\s+(.+?)(?:\s*\{#([\w-]+)\})?$/gm
  const toc: TocItem[] = []
  const stack: TocItem[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const title = match[2].trim()
    const customId = match[3]
    const id = customId || generateId(title)

    const item: TocItem = {
      id,
      title,
      level,
    }

    // Find the appropriate parent
    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop()
    }

    if (stack.length === 0) {
      // Top level item
      toc.push(item)
    } else {
      // Child item
      const parent = stack[stack.length - 1]
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(item)
    }

    stack.push(item)
  }

  return toc
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export async function getAllGuides(): Promise<Guide[]> {
  const slugs = await getAllGuideSlugs()
  const guides = await Promise.all(slugs.map((slug) => getGuideBySlug(slug)))
  return guides.filter((guide): guide is Guide => guide !== null)
}
