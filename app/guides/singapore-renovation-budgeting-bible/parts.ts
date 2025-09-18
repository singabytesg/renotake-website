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
  potentialSavings?: string
}

export const parts: Part[] = [
  {
    id: 1,
    slug: "complete-cost-breakdown",
    title: "Complete Cost Breakdown",
    subtitle: "Every Dollar Explained",
    description:
      "Detailed line-by-line costs for every aspect of renovation. From hacking to painting, carpentry to electrical works.",
    icon: "📊",
    color: "bg-blue-500",
    keyPoints: [
      "Room-by-room cost analysis",
      "Material vs labor breakdowns",
      "2025 market rates",
      "Price comparison tables",
    ],
    estimatedReadTime: "15 min",
  },
  {
    id: 2,
    slug: "hidden-costs-exposed",
    title: "Hidden Costs Exposed",
    subtitle: "The S$15,000 You Didn't Budget For",
    description:
      "The expenses contractors don't mention upfront. Avoid budget shock with our comprehensive list of often-forgotten costs.",
    icon: "⚠️",
    color: "bg-orange-500",
    keyPoints: [
      "Disposal & haulage fees",
      "Permits & applications",
      "Touch-up & rectification",
      "Temporary accommodation",
    ],
    estimatedReadTime: "12 min",
    potentialSavings: "S$15,000",
  },
  {
    id: 3,
    slug: "splurge-vs-save",
    title: "When to Splurge vs Save",
    subtitle: "Strategic Spending Guide",
    description:
      "Know exactly where to invest and where to cut costs. Maximize your renovation value with data-driven decisions.",
    icon: "💡",
    color: "bg-green-500",
    keyPoints: [
      "Worth the splurge items",
      "Smart saving opportunities",
      "ROI analysis by feature",
      "Quality vs price balance",
    ],
    estimatedReadTime: "10 min",
    potentialSavings: "S$8,000",
  },
  {
    id: 4,
    slug: "budget-planning-templates",
    title: "Budget Planning & Templates",
    subtitle: "Your Financial Toolkit",
    description:
      "Practical templates and calculators to plan your renovation budget. Track expenses and stay on target.",
    icon: "📋",
    color: "bg-purple-500",
    keyPoints: [
      "Budget calculator template",
      "Payment schedule planner",
      "Expense tracking sheets",
      "Contingency planning",
    ],
    estimatedReadTime: "8 min",
  },
  {
    id: 5,
    slug: "financing-renovation",
    title: "Financing Your Renovation",
    subtitle: "Loans, Payments & Strategies",
    description:
      "Complete guide to renovation loans, payment strategies, and financial planning for your home improvement.",
    icon: "💳",
    color: "bg-teal-500",
    keyPoints: [
      "Renovation loan comparison",
      "HDB vs bank loans",
      "Payment milestone strategy",
      "CPF usage guidelines",
    ],
    estimatedReadTime: "10 min",
  },
  {
    id: 6,
    slug: "50-ways-save-money",
    title: "50 Ways to Save Money",
    subtitle: "Cut S$20,000+ From Your Budget",
    description:
      "Proven strategies to reduce renovation costs without compromising quality. Save thousands with insider tips.",
    icon: "💰",
    color: "bg-yellow-500",
    keyPoints: [
      "Timing & seasonal savings",
      "Direct contractor benefits",
      "Material sourcing secrets",
      "Negotiation tactics",
    ],
    estimatedReadTime: "20 min",
    potentialSavings: "S$20,000+",
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
