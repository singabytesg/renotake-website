import { Metadata } from "next"
import Link from "next/link"
import { parts } from "./parts"
import PartCard from "./components/PartCard"
import {
  ArrowRight,
  FileText,
  AlertTriangle,
  Clock,
  Shield,
  DollarSign,
  CheckCircle,
  XCircle,
  Users,
  Scale,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete HDB Renovation Permit Guide Singapore 2025 | RenoTake",
  description:
    "Master HDB renovation permits in Singapore. Which renovations need permits, application process, avoid rejections. Save S$5,000 in fines and 3 weeks of delays.",
  keywords: [
    "HDB renovation permit",
    "BTO renovation permit Singapore",
    "HDB hacking permit",
    "renovation permit application",
    "HDB permit requirements 2025",
    "Singapore renovation regulations",
    "HDB permit cost",
    "renovation permit checklist",
  ],
}

export default function HDBPermitsGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
              <AlertTriangle className="mr-2 h-4 w-4" />
              73% of homeowners unaware of permit requirements
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              The Complete HDB Renovation
              <span className="block text-blue-600">Permit Guide Singapore</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              Navigate Singapore's HDB renovation regulations with confidence. Master permit
              requirements, avoid S$5,000 fines, and ensure your renovation is 100% compliant with
              2025 regulations.
            </p>
          </div>

          {/* Key Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <DollarSign className="mx-auto mb-2 h-8 w-8 text-red-500" />
              <div className="text-3xl font-bold text-red-500">S$5,000</div>
              <div className="mt-2 text-sm text-gray-600">Maximum Fine</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <Clock className="mx-auto mb-2 h-8 w-8 text-blue-500" />
              <div className="text-3xl font-bold text-blue-500">3 Weeks</div>
              <div className="mt-2 text-sm text-gray-600">Processing Time</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <XCircle className="mx-auto mb-2 h-8 w-8 text-orange-500" />
              <div className="text-3xl font-bold text-orange-500">35%</div>
              <div className="mt-2 text-sm text-gray-600">Rejection Rate</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <Shield className="mx-auto mb-2 h-8 w-8 text-green-500" />
              <div className="text-3xl font-bold text-green-500">100%</div>
              <div className="mt-2 text-sm text-gray-600">Compliance Guide</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/guides/hdb-permits/which-renovations-need-permits"
              className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Start Your Permit Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-charcoal transition-colors hover:bg-gray-50">
              <FileText className="mr-2 h-5 w-5" />
              Download Permit Checklist
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
              Complete permit mastery in 6 comprehensive parts
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Permit Requirements</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Know exactly which renovations need HDB permits
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Application Process</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Step-by-step submission guide with timeline
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-100">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Avoid Rejections</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Common mistakes and how to prevent them
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-100">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Timeline & Costs</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Processing times and all associated fees
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Contractor Management</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Working with HDB-registered contractors
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-100">
                <Scale className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Legal Compliance</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Penalties, property impact, and regulations
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
            <h2 className="text-3xl font-bold text-charcoal">Your Complete Permit Roadmap</h2>
            <p className="mt-4 text-lg text-gray-600">
              Navigate HDB renovation regulations with our proven 6-part system
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {parts.map((part) => (
              <PartCard key={part.id} part={part} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-charcoal">Quick Permit Reference</h2>
            <p className="mt-4 text-lg text-gray-600">
              Common renovations and their permit requirements
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg bg-white shadow">
            <div className="scrollbar-hide overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Renovation Type
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Permit Required
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Processing Time
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                      Key Requirement
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      Hacking Walls
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                        Yes - Always
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      2-3 weeks
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      Structural assessment
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      Replacing Floor Tiles
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                        Yes - If Hacking
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      1-2 weeks
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      50mm thickness limit
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      Window Replacement
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                        Yes - Always
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      2-3 weeks
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      BCA-approved contractor
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      Painting Walls
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                        No
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      N/A
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      HDB-registered contractor
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 md:px-6">
                      BTO Bathroom (First 3 Years)
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                        Prohibited
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      Not Allowed
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 md:px-6">
                      3-year waterproofing rule
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
                <h3 className="font-semibold text-gray-900">Critical Warning</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Proceeding without required permits can result in S$5,000 fines, forced
                  reinstatement at your cost, and complications when selling your flat. Always
                  verify permit requirements before starting any renovation work.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/guides/hdb-permits/which-renovations-need-permits"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              See complete permit requirements list
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Ready to Navigate HDB Permits with Confidence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Join thousands of Singapore homeowners who successfully obtained their HDB renovation
            permits without delays or rejections.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/guides/hdb-permits/which-renovations-need-permits"
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-blue-600 transition-colors hover:bg-gray-100"
            >
              Start Part 1: Permit Requirements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-8 py-3 text-white backdrop-blur transition-colors hover:bg-white/20">
              Download Complete Checklist
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
