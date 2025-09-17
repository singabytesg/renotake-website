"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Target, Users, Heart } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">About RenoTake</h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="rounded-xl bg-green-50 p-8">
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="mb-4 text-lg text-gray-700">
                RenoTake empowers Singapore homeowners—particularly first-time BTO owners—to
                navigate their renovation journey with confidence. We fill the critical gap between
                inspiration-focused platforms and chaotic forums with structured, actionable
                guidance.
              </p>
              <p className="text-lg font-medium text-green-700">
                We give you the knowledge to be a smarter renovation client, not sell you to a
                contractor.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold">Why RenoTake Exists</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">The Problem</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-500">✕</span>
                      <span>
                        First-time BTO owners face information overload from unstructured sources
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-500">✕</span>
                      <span>Fear of being overcharged with no way to verify fair pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-500">✕</span>
                      <span>Confusion over HDB regulations and permit requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-500">✕</span>
                      <span>
                        Stress from making permanent, expensive decisions without guidance
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Our Solution</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                      <span>Comprehensive, structured guides for every renovation phase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                      <span>Transparent cost breakdowns based on actual Singapore projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                      <span>Clear explanations of all HDB/BCA regulations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                      <span>AI-powered assistant for instant, accurate answers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold">What Makes Us Different</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 font-semibold">Process-Focused</h3>
                  <p className="text-sm text-gray-600">
                    We teach you HOW, not just show you WHAT. Every guide focuses on actionable
                    steps.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 font-semibold">Singapore-Specific</h3>
                  <p className="text-sm text-gray-600">
                    Every piece of content is tailored to Singapore's unique renovation landscape
                    and regulations.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 font-semibold">No Sales Agenda</h3>
                  <p className="text-sm text-gray-600">
                    Pure value delivery. We don't sell leads to contractors or push specific
                    products.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-xl bg-gray-50 p-8">
              <h2 className="mb-4 text-2xl font-bold">Our Commitment</h2>
              <p className="mb-4 text-gray-700">
                We're committed to becoming Singapore's essential renovation resource by:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <span>Maintaining the most comprehensive and up-to-date renovation guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <span>Providing accurate cost information based on real market data</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <span>
                    Keeping our AI assistant updated with latest regulations and best practices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <span>Building trust through unbiased, agenda-free content</span>
                </li>
              </ul>
            </section>

            <section className="py-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">Join Our Community</h2>
              <p className="mb-6 text-gray-600">
                Join thousands of Singapore homeowners getting weekly renovation tips and updates.
              </p>
              <Button
                className="bg-green-600 text-white hover:bg-green-700"
                onClick={handleSubscribeClick}
              >
                Get Free Renovation Tips
              </Button>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="text-xl font-bold">
              Reno<span className="text-green-600">Take</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Singapore's trusted renovation guide for BTO owners and homeowners.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              © {new Date().getFullYear()} RenoTake. All rights reserved. Not affiliated with HDB
              or BCA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
