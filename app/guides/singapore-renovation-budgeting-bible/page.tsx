import { Metadata } from "next"
import Link from "next/link"
import { parts } from "./parts"
import PartCard from "./components/PartCard"
import {
  ArrowRight,
  Calculator,
  TrendingDown,
  AlertTriangle,
  DollarSign,
  PiggyBank,
  FileSpreadsheet,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Singapore Renovation Budgeting Bible | RenoTake",
  description:
    "Your complete financial guide for HDB BTO renovation. Discover S$15,000+ in hidden costs, save S$20,000+ with proven strategies, and master your renovation budget.",
}

export default function BudgetingBibleGuide() {
  const totalSavings = "S$20,000+"
  const hiddenCosts = "S$15,000"
  const avgOverrun = "20-40%"
  const strategies = "50+"

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800">
              <AlertTriangle className="mr-2 h-4 w-4" />
              73% of homeowners exceed their budget by {avgOverrun}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              The Singapore Renovation
              <span className="block text-primary">Budgeting Bible</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              Your complete financial guide for HDB BTO renovation. Expose hidden costs, master
              strategic spending, and save thousands with data-driven insights from 500+
              renovations.
            </p>
          </div>

          {/* Key Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <DollarSign className="mx-auto mb-2 h-8 w-8 text-red-500" />
              <div className="text-3xl font-bold text-red-500">{hiddenCosts}</div>
              <div className="mt-2 text-sm text-gray-600">Hidden Costs Exposed</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <PiggyBank className="mx-auto mb-2 h-8 w-8 text-green-500" />
              <div className="text-3xl font-bold text-green-500">{totalSavings}</div>
              <div className="mt-2 text-sm text-gray-600">Potential Savings</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <Calculator className="mx-auto mb-2 h-8 w-8 text-blue-500" />
              <div className="text-3xl font-bold text-blue-500">{strategies}</div>
              <div className="mt-2 text-sm text-gray-600">Money-Saving Tips</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <FileSpreadsheet className="mx-auto mb-2 h-8 w-8 text-purple-500" />
              <div className="text-3xl font-bold text-purple-500">10+</div>
              <div className="mt-2 text-sm text-gray-600">Free Templates</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/guides/singapore-renovation-budgeting-bible/complete-cost-breakdown"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-white transition-colors hover:bg-primary/90"
            >
              Start Saving Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-charcoal transition-colors hover:bg-gray-50">
              <Calculator className="mr-2 h-5 w-5" />
              Quick Budget Calculator
            </button>
          </div>
        </div>
      </section>

      {/* What You'll Master */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-charcoal">What You'll Master</h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete financial control over your renovation in 6 comprehensive parts
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Hidden Cost Detection</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Uncover S$15,000+ in expenses contractors won't mention
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100">
                <TrendingDown className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Cost Optimization</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Strategic spending decisions backed by ROI analysis
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Budget Calculators</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Interactive tools for real-time budget tracking
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-100">
                <FileSpreadsheet className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Planning Templates</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Downloadable Excel sheets and tracking tools
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <DollarSign className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Financing Mastery</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Compare loans, optimize payments, maximize savings
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-100">
                <PiggyBank className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">50+ Savings Strategies</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Proven tactics to cut S$20,000+ from your budget
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-charcoal">Your Financial Roadmap</h2>
            <p className="mt-4 text-lg text-gray-600">
              Master your renovation budget with our proven 6-part system
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {parts.map((part) => (
              <PartCard key={part.id} part={part} />
            ))}
          </div>
        </div>
      </section>

      {/* Budget Reality Check */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-charcoal">2025 Budget Reality Check</h2>
            <p className="mt-4 text-lg text-gray-600">
              Average renovation costs for HDB BTO flats (excluding furniture)
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg bg-white shadow">
            <div className="scrollbar-hide overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Flat Type
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Basic Renovation
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Standard Renovation
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Premium Renovation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      3-Room BTO
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$30,000 - S$35,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$40,000 - S$55,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$60,000 - S$75,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      4-Room BTO
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$35,000 - S$45,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$50,000 - S$65,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$70,000 - S$90,000
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      5-Room BTO
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$40,000 - S$55,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$60,000 - S$80,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$85,000 - S$110,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-yellow-50 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Hidden Costs Alert</h3>
                <p className="mt-1 text-sm text-gray-600">
                  These figures don't include the S$12,000-S$25,000 in hidden costs that 73% of
                  homeowners discover too late. Our guide exposes every single one.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/guides/singapore-renovation-budgeting-bible/hidden-costs-exposed"
              className="inline-flex items-center text-primary hover:underline"
            >
              Discover all hidden costs now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to Master Your Renovation Budget?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Join thousands of Singapore homeowners who saved an average of S$15,000 using our
            comprehensive budgeting guide.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/guides/singapore-renovation-budgeting-bible/complete-cost-breakdown"
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-primary transition-colors hover:bg-gray-100"
            >
              Start Part 1: Complete Cost Breakdown
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-8 py-3 text-white backdrop-blur transition-colors hover:bg-white/20">
              Download Budget Template
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
