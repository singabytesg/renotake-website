// Common types used across the application

export interface NavItem {
  href: string
  label: string
  description?: string
  icon?: React.ReactNode
  badge?: string
  external?: boolean
}

export interface PageMeta {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
}

export interface Guide {
  slug: string
  title: string
  description: string
  readTime: number
  category: "bto" | "hdb" | "condo" | "landed" | "general"
  featured?: boolean
  publishedAt: string
  updatedAt?: string
}

export interface Tool {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  href: string
  category: "calculator" | "planner" | "checker" | "generator"
  comingSoon?: boolean
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  helpful?: number
  notHelpful?: number
}

export type PropertyType = "bto" | "resale-hdb" | "condo" | "landed"
export type RoomType = "living" | "bedroom" | "kitchen" | "bathroom" | "study" | "balcony"
