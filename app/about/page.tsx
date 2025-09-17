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
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Reno<span className="text-green-600">Take</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/guides" className="text-gray-600 hover:text-gray-900 transition-colors">
              Guides
            </Link>
            <Link href="/tools" className="text-gray-600 hover:text-gray-900 transition-colors">
              Tools
            </Link>
            <Link href="/answers" className="text-gray-600 hover:text-gray-900 transition-colors">
              Quick Answers
            </Link>
            <Link href="/ask-renoai" className="text-gray-600 hover:text-gray-900 transition-colors">
              Ask RenoAI
            </Link>
            <Link href="/about" className="text-gray-900 transition-colors border-b-2 border-green-600 pb-1">
              About
            </Link>
          </nav>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={handleSubscribeClick}
          >
            Get Updates
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About RenoTake</h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="bg-green-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                RenoTake empowers Singapore homeowners—particularly first-time BTO owners—to navigate their renovation journey with confidence.
                We fill the critical gap between inspiration-focused platforms and chaotic forums with structured, actionable guidance.
              </p>
              <p className="text-lg font-medium text-green-700">
                We give you the knowledge to be a smarter renovation client, not sell you to a contractor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Why RenoTake Exists</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">The Problem</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✕</span>
                      <span>First-time BTO owners face information overload from unstructured sources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✕</span>
                      <span>Fear of being overcharged with no way to verify fair pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✕</span>
                      <span>Confusion over HDB regulations and permit requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✕</span>
                      <span>Stress from making permanent, expensive decisions without guidance</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Our Solution</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Comprehensive, structured guides for every renovation phase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Transparent cost breakdowns based on actual Singapore projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Clear explanations of all HDB/BCA regulations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>AI-powered assistant for instant, accurate answers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">What Makes Us Different</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Process-Focused</h3>
                  <p className="text-sm text-gray-600">
                    We teach you HOW, not just show you WHAT. Every guide focuses on actionable steps.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Singapore-Specific</h3>
                  <p className="text-sm text-gray-600">
                    Every piece of content is tailored to Singapore's unique renovation landscape and regulations.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">No Sales Agenda</h3>
                  <p className="text-sm text-gray-600">
                    Pure value delivery. We don't sell leads to contractors or push specific products.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
              <p className="text-gray-700 mb-4">
                We're committed to becoming Singapore's essential renovation resource by:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Maintaining the most comprehensive and up-to-date renovation guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Providing accurate cost information based on real market data</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Keeping our AI assistant updated with latest regulations and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Building trust through unbiased, agenda-free content</span>
                </li>
              </ul>
            </section>

            <section className="text-center py-8">
              <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
              <p className="text-gray-600 mb-6">
                Join thousands of Singapore homeowners getting weekly renovation tips and updates.
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={handleSubscribeClick}
              >
                Get Free Renovation Tips
              </Button>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="text-xl font-bold">
              Reno<span className="text-green-600">Take</span>
            </Link>
            <p className="text-gray-600 text-sm mt-2">
              Singapore's trusted renovation guide for BTO owners and homeowners.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              © {new Date().getFullYear()} RenoTake. All rights reserved. Not affiliated with HDB or BCA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}