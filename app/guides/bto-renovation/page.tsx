import { Metadata } from "next"
import Link from "next/link"
import { phases } from "./phases"
import PhaseCard from "./components/PhaseCard"
import { ArrowRight, Clock, Users, CheckCircle2, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "The Ultimate HDB BTO Renovation Guide | RenoTake",
  description:
    "Your complete roadmap to renovating your BTO flat in Singapore - with real costs, timelines, and insider tips from 500+ successful renovations.",
}

export default function BTORenovationGuide() {
  const totalDuration = "3-4 months"
  const avgBudget = "S$30,000 - S$60,000"

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              The Ultimate HDB BTO
              <span className="block text-primary">Renovation Guide</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              Your complete roadmap to renovating your BTO flat in Singapore. Based on 500+
              successful renovations, with real costs, timelines, and insider tips.
            </p>
          </div>

          {/* Key Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary">{totalDuration}</div>
              <div className="mt-2 text-sm text-gray-600">Total Duration</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary">{avgBudget}</div>
              <div className="mt-2 text-sm text-gray-600">Average Budget</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary">8</div>
              <div className="mt-2 text-sm text-gray-600">Key Phases</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="mt-2 text-sm text-gray-600">Case Studies</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/guides/bto-renovation/pre-collection-planning"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-white transition-colors hover:bg-primary/90"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-charcoal transition-colors hover:bg-gray-50">
              Download PDF Guide
            </button>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-charcoal">What You'll Learn</h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know, organized into 8 comprehensive phases
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Realistic Timelines</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Week-by-week breakdown of the entire renovation process
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Actual Costs</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Real pricing from 2024-2025 renovations across Singapore
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Expert Insights</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Tips from contractors, designers, and homeowners
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Checklists & Templates</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Downloadable resources for every phase of renovation
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">HDB Regulations</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Complete guide to permits, requirements, and restrictions
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Common Mistakes</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Learn from others' experiences to avoid costly errors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-charcoal">Your Renovation Journey</h2>
            <p className="mt-4 text-lg text-gray-600">
              Follow our proven 8-phase approach for a stress-free renovation
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {phases.map((phase) => (
              <PhaseCard key={phase.id} phase={phase} />
            ))}
          </div>
        </div>
      </section>

      {/* Budget Breakdown Preview */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-charcoal">Budget Reality Check</h2>
            <p className="mt-4 text-lg text-gray-600">
              Based on 2024-2025 actual renovation costs in Singapore
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg bg-white shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Flat Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Basic</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Standard
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    3-Room (65 sqm)
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    S$20,000 - S$30,000
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    S$30,000 - S$45,000
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    S$45,000 - S$65,000
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    4-Room (90 sqm)
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    S$30,000 - S$40,000
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    S$40,000 - S$60,000
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    S$60,000 - S$85,000
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    5-Room (110 sqm)
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    S$40,000 - S$55,000
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    S$55,000 - S$75,000
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    S$75,000 - S$100,000+
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/guides/bto-renovation/pre-collection-planning"
              className="inline-flex items-center text-primary hover:underline"
            >
              See detailed cost breakdowns
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to Start Your Renovation Journey?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Join thousands of Singapore homeowners who have successfully transformed their BTO flats
            using our comprehensive guide.
          </p>
          <div className="mt-8">
            <Link
              href="/guides/bto-renovation/pre-collection-planning"
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-primary transition-colors hover:bg-gray-100"
            >
              Begin Phase 1: Pre-Collection Planning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
