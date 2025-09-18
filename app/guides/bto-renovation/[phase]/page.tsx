import { Metadata } from "next"
import { notFound } from "next/navigation"
import { phases, getPhaseBySlug, getPhaseNavigation } from "../phases"
import PhaseContent from "../components/PhaseContent"
import PhaseNavigation from "../components/PhaseNavigation"
import PhaseProgress from "../components/PhaseProgress"
import PhaseSidebar from "../components/PhaseSidebar"
import MobilePhaseNav from "../components/MobilePhaseNav"

interface PhasePageProps {
  params: Promise<{
    phase: string
  }>
}

export async function generateMetadata({ params }: PhasePageProps): Promise<Metadata> {
  const { phase: phaseSlug } = await params
  const phase = getPhaseBySlug(phaseSlug)

  if (!phase) {
    return {
      title: "Phase Not Found",
    }
  }

  return {
    title: `Phase ${phase.number}: ${phase.title} | BTO Renovation Guide | RenoTake`,
    description: phase.description,
  }
}

export async function generateStaticParams() {
  return phases.map((phase) => ({
    phase: phase.slug,
  }))
}

export default async function PhasePage({ params }: PhasePageProps) {
  const { phase: phaseSlug } = await params
  const phase = getPhaseBySlug(phaseSlug)
  const navigation = getPhaseNavigation(phaseSlug)

  if (!phase) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <PhaseProgress currentPhase={phase.number} totalPhases={phases.length} />

      {/* Phase Header */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="text-5xl">{phase.icon}</div>
            <div className="flex-1">
              <div className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                Phase {phase.number} of {phases.length}
              </div>
              <h1 className="text-3xl font-bold text-charcoal sm:text-4xl">{phase.title}</h1>
              <p className="mt-3 text-lg text-gray-600">{phase.description}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">Duration:</span>
                  <span className="text-gray-600">{phase.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Desktop Only */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <PhaseSidebar phase={phase} currentSection={null} />
          </aside>

          {/* Main Content */}
          <main className="min-w-0 flex-1">
            <PhaseContent phase={phase} />
          </main>

          {/* Right Sidebar - Desktop Only */}
          <aside className="hidden w-64 shrink-0 xl:block">
            <div className="sticky top-24 space-y-6">
              {/* Key Takeaways */}
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <h3 className="mb-3 text-sm font-semibold text-charcoal">Key Takeaways</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {phase.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="mb-3 text-sm font-semibold text-charcoal">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Download Checklist
                  </button>
                  <button className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Print Phase
                  </button>
                  <button className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Phase Navigation */}
      <PhaseNavigation navigation={navigation} />

      {/* Mobile Navigation */}
      <MobilePhaseNav />
    </div>
  )
}
