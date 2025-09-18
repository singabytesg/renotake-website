import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Shield, Scale, FileText, Users, DollarSign } from "lucide-react"
import { parts } from "./parts"

export const metadata = {
  title: "Singapore Renovation Contract & Dispute Prevention Bible (2025) | RenoTake",
  description:
    "Protect yourself from the 962 complaints and S$728,000 in losses. Complete guide to contracts, vetting contractors, and resolving disputes in Singapore.",
}

const stats = [
  { value: "962", label: "Complaints in 2024", icon: AlertTriangle },
  { value: "S$728K", label: "Prepayment Losses", icon: DollarSign },
  { value: "97%", label: "Non-CaseTrust Issues", icon: Shield },
  { value: "15", label: "Scammer Tactics Exposed", icon: Users },
]

const highlights = [
  "The 12 Essential Contract Clauses That Save You S$50,000",
  "How to Spot Renovation Scammers in 10 Minutes",
  "The CaseTrust S$30,000 Insurance Advantage",
  "Your 4-Level Dispute Resolution Roadmap",
  "The 15 Scammer Tactics Every Homeowner Must Know",
  "Real Case Studies: S$45,000 Loss vs S$67,000 Victory",
]

export default function ContractsGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
              <AlertTriangle className="mr-2 h-4 w-4" />
              962 Homeowners Lost S$728,000 Last Year
            </div>
            <h1 className="mb-4 text-4xl font-bold text-charcoal sm:text-5xl">
              The Singapore Renovation{" "}
              <span className="text-red-600">Contract & Dispute Prevention</span> Bible
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              Your complete legal protection guide against renovation scams, disputes, and
              contractual nightmares. Armed with lawyer-grade knowledge to save your money and
              sanity.
            </p>
          </div>

          {/* Key Stats */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-red-200 bg-white">
                <CardContent className="p-4 text-center">
                  <stat.icon className="mx-auto mb-2 h-8 w-8 text-red-600" />
                  <div className="text-2xl font-bold text-charcoal">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/guides/singapore-renovation-contracts-disputes-guide/contractor-vetting">
              <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 sm:w-auto">
                <Shield className="mr-2 h-5 w-5" />
                Start Protection Now
              </Button>
            </Link>
            <Link href="#parts">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-red-600 text-red-600 hover:bg-red-50 sm:w-auto"
              >
                <FileText className="mr-2 h-5 w-5" />
                View All 8 Parts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-charcoal">What You'll Master</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-3 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  {index + 1}
                </div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parts Overview */}
      <section id="parts" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">
              Your Complete Protection Roadmap
            </h2>
            <p className="text-lg text-gray-600">
              8 comprehensive parts covering every aspect of contractor management and dispute
              prevention
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {parts.map((part, index) => (
              <Link
                key={part.slug}
                href={`/guides/singapore-renovation-contracts-disputes-guide/${part.slug}`}
              >
                <Card className="group h-full cursor-pointer border-2 transition-all hover:border-red-200 hover:shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                          {index + 1}
                        </div>
                        <CardTitle className="text-lg transition-colors group-hover:text-red-600">
                          {part.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-gray-600">{part.description}</p>
                    {part.protection && (
                      <div className="flex items-center text-sm font-medium text-red-600">
                        <Shield className="mr-1 h-4 w-4" />
                        {part.protection}
                      </div>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {part.highlights?.map((highlight, i) => (
                        <span
                          key={i}
                          className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-red-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-charcoal">Don't Become Statistic #963</h2>
          <p className="mb-8 text-lg text-gray-600">
            This guide contains the same knowledge lawyers and industry insiders use. Arm yourself
            with protection before it's too late.
          </p>
          <Link href="/guides/singapore-renovation-contracts-disputes-guide/contractor-vetting">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Shield className="mr-2 h-5 w-5" />
              Start Your Protection Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
