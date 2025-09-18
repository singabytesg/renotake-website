import { notFound } from "next/navigation"
import { parts } from "../parts"
import { partContent } from "../content/part-content"
import PartContent from "../components/PartContent"
import PartNavigation from "../components/PartNavigation"
import PartProgress from "../components/PartProgress"
import PartSidebar from "../components/PartSidebar"
import MobilePartNav from "../components/MobilePartNav"

export async function generateStaticParams() {
  return parts.map((part) => ({
    part: part.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const resolvedParams = await params
  const part = parts.find((p) => p.slug === resolvedParams.part)

  if (!part) {
    return {
      title: "Part Not Found | RenoTake",
    }
  }

  return {
    title: `${part.title} | Contracts & Disputes Guide | RenoTake`,
    description: part.description,
  }
}

export default async function PartPage({ params }: { params: Promise<{ part: string }> }) {
  const resolvedParams = await params
  const currentPartIndex = parts.findIndex((p) => p.slug === resolvedParams.part)

  if (currentPartIndex === -1) {
    notFound()
  }

  const currentPart = parts[currentPartIndex]
  const content = partContent[resolvedParams.part]

  if (!content) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <PartProgress currentIndex={currentPartIndex} total={parts.length} />

      {/* Sticky Part Navigation */}
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <div
                className={`h-8 w-8 rounded-full bg-${currentPart.color}-100 text-${currentPart.color}-600 mr-3 flex items-center justify-center font-bold`}
              >
                {currentPartIndex + 1}
              </div>
              <h1 className="text-lg font-semibold text-charcoal">{currentPart.title}</h1>
            </div>
            <div className="hidden items-center space-x-2 md:flex">
              {parts.map((part, index) => (
                <a
                  key={part.slug}
                  href={`/guides/singapore-renovation-contracts-disputes-guide/${part.slug}`}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-all ${
                    index === currentPartIndex
                      ? `bg-${currentPart.color}-600 text-white`
                      : index < currentPartIndex
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {index + 1}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Sidebar - Desktop Only */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-24">
              <PartSidebar sections={content.sections} currentPart={currentPart} />
            </div>
          </aside>

          {/* Content */}
          <main className="max-w-3xl flex-1">
            <PartContent part={currentPart} sections={content.sections} />
            <PartNavigation currentIndex={currentPartIndex} parts={parts} />
          </main>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobilePartNav parts={parts} currentIndex={currentPartIndex} />
    </div>
  )
}
