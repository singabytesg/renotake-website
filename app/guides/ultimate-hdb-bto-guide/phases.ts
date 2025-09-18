export interface Phase {
  id: string
  number: number
  title: string
  slug: string
  description: string
  duration: string
  icon: string
  keyPoints: string[]
  color: string
  sections?: Section[]
}

export interface Section {
  id: string
  title: string
  content?: string
  subsections?: Subsection[]
}

export interface Subsection {
  id: string
  title: string
  content: string
}

export const phases: Phase[] = [
  {
    id: "pre-collection",
    number: 1,
    title: "Pre-Collection Planning",
    slug: "pre-collection-planning",
    description:
      "Start your renovation journey 6 months before getting keys. Smart planning now saves stress and money later.",
    duration: "6 months before keys",
    icon: "📋",
    color: "bg-blue-500",
    keyPoints: [
      "Set realistic budget expectations",
      "Research contractors and designers",
      "Define your lifestyle needs",
      "Create inspiration boards",
    ],
  },
  {
    id: "key-collection",
    number: 2,
    title: "Key Collection & Initial Assessment",
    slug: "key-collection",
    description:
      "Your first official step into homeownership. Learn what to check and document during your initial inspection.",
    duration: "1-2 weeks",
    icon: "🔑",
    color: "bg-purple-500",
    keyPoints: [
      "Thorough defects inspection",
      "Document everything with photos",
      "Submit defects report within 7 days",
      "Understand your defects liability period",
    ],
  },
  {
    id: "design-planning",
    number: 3,
    title: "Design & Planning",
    slug: "design-planning",
    description:
      "Transform your vision into actionable plans. Make crucial decisions about layout, materials, and aesthetics.",
    duration: "2-4 weeks",
    icon: "🎨",
    color: "bg-pink-500",
    keyPoints: [
      "Space planning fundamentals",
      "Room-by-room design decisions",
      "Material selection guide",
      "Smart storage solutions",
    ],
  },
  {
    id: "contractor-selection",
    number: 4,
    title: "Contractor Selection & Quotations",
    slug: "contractor-selection",
    description:
      "Find the right contractor for your project. Learn how to evaluate quotes and negotiate effectively.",
    duration: "2-3 weeks",
    icon: "👷",
    color: "bg-orange-500",
    keyPoints: [
      "Contractor vs Interior Designer",
      "Decode renovation quotations",
      "Price benchmarks and negotiation",
      "Contract deep dive",
    ],
  },
  {
    id: "permits",
    number: 5,
    title: "HDB Permits & Regulations",
    slug: "permits-regulations",
    description:
      "Navigate HDB's strict guidelines. Know what you can and cannot do to avoid costly mistakes.",
    duration: "1 week",
    icon: "📜",
    color: "bg-red-500",
    keyPoints: [
      "Permits required vs not required",
      "Application process step-by-step",
      "Detailed do's and don'ts",
      "Penalties for non-compliance",
    ],
  },
  {
    id: "renovation-process",
    number: 6,
    title: "The Renovation Process",
    slug: "renovation-process",
    description:
      "Your 8-week transformation journey. Know what happens when and how to manage the process.",
    duration: "8-10 weeks",
    icon: "🔨",
    color: "bg-green-500",
    keyPoints: [
      "Week-by-week timeline",
      "Quality control checkpoints",
      "Managing renovation remotely",
      "Dealing with common issues",
    ],
  },
  {
    id: "quality-checks",
    number: 7,
    title: "Quality Checks & Handover",
    slug: "quality-checks",
    description:
      "Ensure everything meets your standards. Learn what to check before making final payment.",
    duration: "1 week",
    icon: "✅",
    color: "bg-teal-500",
    keyPoints: [
      "Comprehensive handover checklist",
      "Documenting defects",
      "Final payment considerations",
      "Important documents to collect",
    ],
  },
  {
    id: "post-renovation",
    number: 8,
    title: "Post-Renovation & Maintenance",
    slug: "post-renovation",
    description:
      "Living with your fresh renovation. Maintenance schedules and warranty management.",
    duration: "Ongoing",
    icon: "🏡",
    color: "bg-indigo-500",
    keyPoints: [
      "30-60-90 day checks",
      "Maintenance schedule",
      "Warranty claims process",
      "Long-term care tips",
    ],
  },
]

export function getPhaseBySlug(slug: string): Phase | undefined {
  return phases.find((phase) => phase.slug === slug)
}

export function getPhaseNavigation(currentSlug: string) {
  const currentIndex = phases.findIndex((phase) => phase.slug === currentSlug)

  return {
    previous: currentIndex > 0 ? phases[currentIndex - 1] : null,
    current: phases[currentIndex],
    next: currentIndex < phases.length - 1 ? phases[currentIndex + 1] : null,
    all: phases,
  }
}
