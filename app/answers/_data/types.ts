// Q&A Data Types for Easy Management
// This structure is designed for Claude Code to easily add, modify, and organize Q&As

export type QACategoryType =
  | "hdb-bto-rules"
  | "renovation-costs"
  | "contractor-id"
  | "materials-finishes"
  | "timeline-process"
  | "common-problems"
  | "permits-legal"
  | "design-planning"

export interface QAItem {
  id: string // Unique identifier (e.g., "hdb-hack-walls")
  question: string // The question as users would ask it
  shortAnswer: string // Quick 1-2 sentence answer (50-100 words)
  detailedAnswer: string // Comprehensive answer (200-500 words)
  category: QACategoryType
  subcategory?: string // Optional subcategory for better organization
  keywords: string[] // SEO keywords this Q&A targets
  relatedQuestions?: string[] // IDs of related questions
  lastUpdated: string // ISO date string
  featured?: boolean // Show in featured/popular section
  sources?: string[] // Reference links (HDB website, BCA, etc.)
  priority?: number // Display order (lower = higher priority)

  // Optional enhanced content
  infographic?: string // Path to infographic image
  videoUrl?: string // YouTube embed URL
  warningNote?: string // Important warning/disclaimer
  proTip?: string // Expert tip or insider advice
  costRange?: { min: number; max: number; unit: string } // For cost-related questions
  timeEstimate?: string // For timeline questions

  // SEO metadata
  metaTitle?: string // Override default title for this Q&A page
  metaDescription?: string // Override default description

  // Analytics tracking
  views?: number // Track popularity (can be updated programmatically)
  helpful?: { yes: number; no: number } // User feedback tracking
}

export interface QACategoryInfo {
  id: QACategoryType
  title: string
  description: string
  icon?: string // Lucide icon name
  priority: number // Display order
  color?: string // Tailwind color class
}

// Category metadata for display
export const CATEGORIES: Record<
  QACategoryType,
  { title: string; description: string; icon: string; color: string }
> = {
  "hdb-bto-rules": {
    title: "HDB & BTO Rules",
    description: "Regulations, restrictions, and requirements for HDB/BTO renovations",
    icon: "Building",
    color: "blue",
  },
  "renovation-costs": {
    title: "Renovation Costs",
    description: "Pricing, budgets, payments, and cost breakdowns",
    icon: "DollarSign",
    color: "green",
  },
  "contractor-id": {
    title: "Contractors & IDs",
    description: "Hiring, contracts, disputes, and working with professionals",
    icon: "Users",
    color: "purple",
  },
  "materials-finishes": {
    title: "Materials & Finishes",
    description: "Flooring, tiles, countertops, and material selection",
    icon: "Package",
    color: "orange",
  },
  "timeline-process": {
    title: "Timeline & Process",
    description: "Duration, phases, scheduling, and project management",
    icon: "Clock",
    color: "indigo",
  },
  "common-problems": {
    title: "Common Problems",
    description: "Issues, defects, delays, and troubleshooting",
    icon: "AlertCircle",
    color: "red",
  },
  "permits-legal": {
    title: "Permits & Legal",
    description: "Applications, approvals, and legal requirements",
    icon: "FileCheck",
    color: "yellow",
  },
  "design-planning": {
    title: "Design & Planning",
    description: "Layout, space planning, and design decisions",
    icon: "Palette",
    color: "pink",
  },
}

// Helper function to generate SEO-friendly slug from question
export function generateSlug(question: string): string {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 60) // Limit length for URLs
}

// Template for Claude Code to easily add new Q&As
export const QA_TEMPLATE: Partial<QAItem> = {
  question: "",
  shortAnswer: "",
  detailedAnswer: "",
  category: "hdb-bto-rules",
  keywords: [],
  lastUpdated: new Date().toISOString().split("T")[0],
  priority: 100,
}

// Validation helper for Claude Code
export function validateQA(qa: Partial<QAItem>): string[] {
  const errors: string[] = []

  if (!qa.id) errors.push("ID is required")
  if (!qa.question) errors.push("Question is required")
  if (!qa.shortAnswer) errors.push("Short answer is required")
  if (!qa.detailedAnswer) errors.push("Detailed answer is required")
  if (!qa.category) errors.push("Category is required")
  if (!qa.keywords || qa.keywords.length === 0) errors.push("At least one keyword is required")
  if (!qa.lastUpdated) errors.push("Last updated date is required")

  if (qa.shortAnswer && qa.shortAnswer.length > 150) {
    errors.push("Short answer should be under 150 characters")
  }

  if (qa.detailedAnswer && qa.detailedAnswer.length < 100) {
    errors.push("Detailed answer should be at least 100 characters")
  }

  return errors
}
