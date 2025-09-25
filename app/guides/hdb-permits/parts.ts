export interface Part {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string
  color: string
  keyPoints: string[]
  estimatedReadTime: string
  criticalInfo?: string
}

export const parts: Part[] = [
  {
    id: 1,
    slug: "which-renovations-need-permits",
    title: "Which Renovations Need Permits",
    subtitle: "Complete Requirements Guide",
    description:
      "Comprehensive breakdown of every renovation type and its permit requirements. Know exactly what needs HDB approval before you start.",
    icon: "📋",
    color: "bg-blue-500",
    keyPoints: [
      "Room-by-room permit guide",
      "BTO vs resale differences",
      "3-year waterproofing rule",
      "Prohibited works list",
    ],
    estimatedReadTime: "15 min",
    criticalInfo: "35% of renovations require permits",
  },
  {
    id: 2,
    slug: "application-process",
    title: "The Application Process",
    subtitle: "Step-by-Step Submission Guide",
    description:
      "Navigate the HDB permit application from start to approval. Learn the exact documents needed and submission procedures.",
    icon: "✍️",
    color: "bg-green-500",
    keyPoints: [
      "Document preparation checklist",
      "APEX submission system",
      "Contractor requirements",
      "Timeline expectations",
    ],
    estimatedReadTime: "12 min",
    criticalInfo: "3 weeks average processing",
  },
  {
    id: 3,
    slug: "common-rejections",
    title: "Common Rejection Reasons",
    subtitle: "Avoid Costly Delays",
    description:
      "Learn from others' mistakes. Understand the top reasons for permit rejections and how to ensure first-time approval.",
    icon: "⚠️",
    color: "bg-red-500",
    keyPoints: [
      "Top 15 rejection causes",
      "Pre-submission checklist",
      "Documentation errors",
      "Technical violations",
    ],
    estimatedReadTime: "10 min",
    criticalInfo: "35% rejection rate",
  },
  {
    id: 4,
    slug: "costs-and-timelines",
    title: "Costs and Timelines",
    subtitle: "Budget and Schedule Planning",
    description:
      "Complete breakdown of permit fees, processing times, and hidden costs. Plan your renovation timeline accurately.",
    icon: "⏰",
    color: "bg-purple-500",
    keyPoints: [
      "Permit fee schedule",
      "Processing timeframes",
      "Peak vs off-peak periods",
      "Expediting options",
    ],
    estimatedReadTime: "8 min",
    criticalInfo: "S$200-500 typical fees",
  },
  {
    id: 5,
    slug: "working-with-contractors",
    title: "Working with Contractors",
    subtitle: "DRC Requirements & Management",
    description:
      "Everything about HDB-registered contractors, specialist requirements, and managing the contractor-owner relationship.",
    icon: "👷",
    color: "bg-teal-500",
    keyPoints: [
      "DRC verification process",
      "Demerit points system",
      "Specialist requirements",
      "Owner vs contractor liability",
    ],
    estimatedReadTime: "10 min",
    criticalInfo: "24 demerit points = suspension",
  },
  {
    id: 6,
    slug: "compliance-and-consequences",
    title: "Compliance and Consequences",
    subtitle: "Legal Requirements & Penalties",
    description:
      "Understand the serious implications of non-compliance, from fines to property sale issues. Ensure 100% legal renovation.",
    icon: "⚖️",
    color: "bg-orange-500",
    keyPoints: [
      "S$5,000 maximum fines",
      "Reinstatement orders",
      "Property sale impact",
      "Insurance implications",
    ],
    estimatedReadTime: "12 min",
    criticalInfo: "S$5,000 maximum penalty",
  },
]

export function getPartBySlug(slug: string): Part | undefined {
  return parts.find((part) => part.slug === slug)
}

export function getPartNavigation(slug: string) {
  const currentIndex = parts.findIndex((part) => part.slug === slug)

  if (currentIndex === -1) {
    return { previous: null, next: null }
  }

  const previous = currentIndex > 0 ? parts[currentIndex - 1] : null
  const next = currentIndex < parts.length - 1 ? parts[currentIndex + 1] : null

  return { previous, next }
}
