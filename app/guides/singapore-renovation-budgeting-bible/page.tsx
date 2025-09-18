import { Metadata } from "next"
import Link from "next/link"
import {
  Calculator,
  TrendingDown,
  TrendingUp,
  AlertCircle,
  DollarSign,
  PiggyBank,
  Receipt,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Singapore Renovation Budgeting Bible | Complete Cost Guide | RenoTake",
  description:
    "The definitive guide to renovation budgeting in Singapore. Line-by-line cost breakdowns, hidden expenses, and expert advice on when to splurge vs save.",
}

export default function BudgetingBiblePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Singapore Renovation
              <span className="block text-primary">Budgeting Bible</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              The definitive guide to renovation costs in Singapore. Line-by-line breakdowns, hidden
              expenses revealed, and expert strategies on where to splurge vs save.
            </p>
          </div>

          {/* Key Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary">S$30-60k</div>
              <div className="mt-2 text-sm text-gray-600">Avg 4-Room HDB</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary">20-30%</div>
              <div className="mt-2 text-sm text-gray-600">Hidden Costs</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary">S$5-10k</div>
              <div className="mt-2 text-sm text-gray-600">Avg Overrun</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary">15%</div>
              <div className="mt-2 text-sm text-gray-600">Buffer Needed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Part 1: Complete Cost Breakdown */}
            <Link
              href="/guides/singapore-renovation-budgeting-bible/complete-cost-breakdown"
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-charcoal">
                Part 1: Complete Cost Breakdown
              </h3>
              <p className="mb-4 text-gray-600">
                Detailed line-by-line costs for every aspect of renovation. From hacking to
                painting, carpentry to electrical works.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Room-by-room cost analysis</li>
                <li>• Material vs labor breakdowns</li>
                <li>• 2024-2025 market rates</li>
                <li>• Price comparison tables</li>
              </ul>
              <div className="mt-4 flex items-center text-primary">
                <span className="text-sm font-medium">Explore breakdown</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Part 2: Hidden Costs Exposed */}
            <Link
              href="/guides/singapore-renovation-budgeting-bible/hidden-costs"
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <AlertCircle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-charcoal">
                Part 2: Hidden Costs Exposed
              </h3>
              <p className="mb-4 text-gray-600">
                The expenses contractors don't mention upfront. Avoid budget shock with our
                comprehensive list of often-forgotten costs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Disposal & haulage fees</li>
                <li>• Permits & applications</li>
                <li>• Touch-up & rectification</li>
                <li>• Temporary accommodation</li>
              </ul>
              <div className="mt-4 flex items-center text-primary">
                <span className="text-sm font-medium">Reveal hidden costs</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Part 3: Splurge vs Save Guide */}
            <Link
              href="/guides/singapore-renovation-budgeting-bible/splurge-vs-save"
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-charcoal">
                Part 3: When to Splurge vs Save
              </h3>
              <p className="mb-4 text-gray-600">
                Strategic spending guide to maximize your renovation value. Know exactly where to
                invest and where to cut costs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Worth the splurge items</li>
                <li>• Smart saving opportunities</li>
                <li>• ROI analysis by feature</li>
                <li>• Quality vs price balance</li>
              </ul>
              <div className="mt-4 flex items-center text-primary">
                <span className="text-sm font-medium">Smart spending guide</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Part 4: Budget Planning Tools */}
            <Link
              href="/guides/singapore-renovation-budgeting-bible/budget-planning"
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-charcoal">
                Part 4: Budget Planning & Templates
              </h3>
              <p className="mb-4 text-gray-600">
                Practical templates and calculators to plan your renovation budget. Track expenses
                and stay on target.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Budget calculator template</li>
                <li>• Payment schedule planner</li>
                <li>• Expense tracking sheets</li>
                <li>• Contingency planning</li>
              </ul>
              <div className="mt-4 flex items-center text-primary">
                <span className="text-sm font-medium">Get templates</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Part 5: Financing Options */}
            <Link
              href="/guides/singapore-renovation-budgeting-bible/financing-options"
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-charcoal">
                Part 5: Financing Your Renovation
              </h3>
              <p className="mb-4 text-gray-600">
                Complete guide to renovation loans, payment strategies, and financial planning for
                your home improvement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Renovation loan comparison</li>
                <li>• HDB vs bank loans</li>
                <li>• Payment milestone strategy</li>
                <li>• CPF usage guidelines</li>
              </ul>
              <div className="mt-4 flex items-center text-primary">
                <span className="text-sm font-medium">Explore financing</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Part 6: Cost-Saving Strategies */}
            <Link
              href="/guides/singapore-renovation-budgeting-bible/cost-saving-strategies"
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <PiggyBank className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-charcoal">
                Part 6: 50 Ways to Save Money
              </h3>
              <p className="mb-4 text-gray-600">
                Proven strategies to reduce renovation costs without compromising quality. Save
                thousands with insider tips.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Timing & seasonal savings</li>
                <li>• Direct contractor benefits</li>
                <li>• Material sourcing secrets</li>
                <li>• Negotiation tactics</li>
              </ul>
              <div className="mt-4 flex items-center text-primary">
                <span className="text-sm font-medium">Start saving</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-charcoal">
            Quick Budget Reference (4-Room HDB)
          </h2>
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="scrollbar-hide overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Basic
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Standard
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      Flooring (90sqm)
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$3,600 - S$4,500
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$5,400 - S$7,200
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$8,100 - S$10,800
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      Kitchen
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$5,000 - S$8,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$8,000 - S$12,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$12,000 - S$20,000
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      Carpentry
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$8,000 - S$10,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$10,000 - S$15,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$15,000 - S$25,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      Electrical
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$2,000 - S$3,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$3,000 - S$4,500
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$4,500 - S$6,000
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      Bathrooms (2)
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$3,000 - S$5,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$5,000 - S$8,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      S$8,000 - S$12,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50 font-semibold">
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-900 md:px-6">
                      Total Range
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-primary md:px-6">
                      S$30,000 - S$40,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-primary md:px-6">
                      S$40,000 - S$60,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-primary md:px-6">
                      S$60,000 - S$85,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Common Budget Mistakes */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-charcoal">
            Top 5 Budget Mistakes to Avoid
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <div className="mb-3 text-2xl font-bold text-red-600">#1</div>
              <h3 className="mb-2 font-semibold text-charcoal">No Buffer Fund</h3>
              <p className="text-sm text-gray-600">
                Not keeping 10-15% contingency for unexpected costs
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <div className="mb-3 text-2xl font-bold text-red-600">#2</div>
              <h3 className="mb-2 font-semibold text-charcoal">Ignoring Hidden Costs</h3>
              <p className="text-sm text-gray-600">
                Forgetting disposal fees, permits, and temporary housing
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <div className="mb-3 text-2xl font-bold text-red-600">#3</div>
              <h3 className="mb-2 font-semibold text-charcoal">Scope Creep</h3>
              <p className="text-sm text-gray-600">
                Adding "small" changes that balloon the budget
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <div className="mb-3 text-2xl font-bold text-red-600">#4</div>
              <h3 className="mb-2 font-semibold text-charcoal">Paying Too Much Upfront</h3>
              <p className="text-sm text-gray-600">
                Giving more than 30% deposit before work starts
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <div className="mb-3 text-2xl font-bold text-red-600">#5</div>
              <h3 className="mb-2 font-semibold text-charcoal">Cheapest Quote Trap</h3>
              <p className="text-sm text-gray-600">
                Choosing lowest price without checking what's excluded
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Master Your Renovation Budget</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Start with our complete cost breakdown to understand exactly where your money goes in a
            Singapore renovation.
          </p>
          <div className="mt-8">
            <Link
              href="/guides/singapore-renovation-budgeting-bible/complete-cost-breakdown"
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-primary transition-colors hover:bg-gray-100"
            >
              Start with Cost Breakdown
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
