import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getPartBySlug, getPartNavigation } from "../parts"
import PartContent from "../components/PartContent"
import PartNavigation from "../components/PartNavigation"
import PartProgress from "../components/PartProgress"
import PartSidebar from "../components/PartSidebar"
import MobilePartNav from "../components/MobilePartNav"
import { ChevronLeft, Clock, TrendingUp } from "lucide-react"

interface PartPageProps {
  params: {
    part: string
  }
}

export async function generateMetadata({ params }: PartPageProps): Promise<Metadata> {
  const part = getPartBySlug(params.part)

  if (!part) {
    return {
      title: "Part Not Found | RenoTake",
    }
  }

  return {
    title: `${part.title} | Singapore Renovation Budgeting Bible | RenoTake`,
    description: part.description,
  }
}

export async function generateStaticParams() {
  return [
    { part: "complete-cost-breakdown" },
    { part: "hidden-costs-exposed" },
    { part: "splurge-vs-save" },
    { part: "budget-planning-templates" },
    { part: "financing-renovation" },
    { part: "50-ways-save-money" },
  ]
}

export default function PartPage({ params }: PartPageProps) {
  const part = getPartBySlug(params.part)
  const navigation = getPartNavigation(params.part)

  if (!part) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Part Header */}
      <header className="relative border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/guides/singapore-renovation-budgeting-bible"
            className="mb-6 inline-flex items-center text-sm text-gray-600 hover:text-primary"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Overview
          </Link>

          {/* Part Info */}
          <div className="flex items-start gap-4">
            <span className="text-4xl">{part.icon}</span>
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-4">
                <span className={`inline-block h-1 w-16 rounded-full ${part.color}`} />
                <span className="text-sm font-medium text-gray-500">Part {part.id} of 6</span>
              </div>
              <h1 className="text-3xl font-bold text-charcoal sm:text-4xl">{part.title}</h1>
              <p className="mt-2 text-lg font-medium text-gray-600">{part.subtitle}</p>
              <p className="mt-4 max-w-3xl text-gray-600">{part.description}</p>

              {/* Meta Info */}
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{part.estimatedReadTime}</span>
                </div>
                {part.potentialSavings && (
                  <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span>Potential Savings: {part.potentialSavings}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <PartProgress currentPart={part.id} totalParts={6} />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          {/* Content */}
          <main className="min-w-0">
            <PartContent partSlug={params.part} />
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-4">
              <PartSidebar partSlug={params.part} />
            </div>
          </aside>
        </div>
      </div>

      {/* Navigation */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <PartNavigation previous={navigation.previous} next={navigation.next} />
      </div>

      {/* Mobile Navigation */}
      <MobilePartNav currentSlug={params.part} />
    </div>
  )
}
