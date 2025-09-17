"use client"

import { useState, useRef, type FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Calculator, FileText, HelpCircle, Clock, Users, DollarSign, Hammer, Building, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const newsletterRef = useRef<HTMLElement>(null)

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "Welcome to the RenoTake community. Check your inbox for renovation tips!",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Singapore's Intelligent <span className="text-green-600">Renovation Guide</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl">
                Navigate your BTO renovation journey with confidence. Get expert guidance, cost breakdowns, and instant answers to your renovation questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/guides/ultimate-hdb-bto-guide">Start BTO Guide</Link>
                </Button>
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                  <Link href="/tools/bto-budget-calculator">Calculate Budget</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  HDB Compliant
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  2024 Pricing
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  No Hidden Fees
                </span>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&h=800&auto=format&fit=crop"
                alt="Modern HDB BTO interior design"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Your Complete Renovation Toolkit</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to plan, budget, and execute your Singapore home renovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Comprehensive Guides"
              description="In-depth guides covering every aspect of BTO, HDB, and condo renovations"
              icon={<FileText className="h-6 w-6" />}
              link="/guides"
              items={[
                "Ultimate BTO Renovation Guide",
                "HDB Permit Requirements",
                "Contractor Management"
              ]}
            />
            <FeatureCard
              title="Interactive Tools"
              description="Practical calculators and planners designed for Singapore homeowners"
              icon={<Calculator className="h-6 w-6" />}
              link="/tools"
              items={[
                "BTO Budget Calculator",
                "HDB Permit Checker",
                "Timeline Planner"
              ]}
            />
            <FeatureCard
              title="AI Assistant"
              description="Get instant answers to your renovation questions, 24/7"
              icon={<MessageSquare className="h-6 w-6" />}
              link="/ask-renoai"
              items={[
                "HDB regulations",
                "Cost comparisons",
                "Material advice"
              ]}
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Popular Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GuideCard
              title="Complete 4-Room BTO Renovation Cost Breakdown"
              description="Line-by-line breakdown of actual renovation costs for a typical 4-room BTO flat, including hidden costs."
              category="Budget Planning"
              readTime="15 min read"
              link="/guides/4-room-bto-cost-breakdown"
              badge="Most Popular"
            />
            <GuideCard
              title="HDB Renovation Permits: What You Need & How to Apply"
              description="Complete guide to HDB permits, including which renovations need approval and step-by-step application."
              category="Regulations"
              readTime="10 min read"
              link="/guides/hdb-permits-guide"
            />
            <GuideCard
              title="Choosing Between ID, Contractor, or DIY"
              description="Pros, cons, and costs of hiring an interior designer vs contractor vs managing your own renovation."
              category="Planning"
              readTime="12 min read"
              link="/guides/id-vs-contractor"
            />
            <GuideCard
              title="Timeline: From Key Collection to Moving In"
              description="Realistic renovation timeline for BTO flats, including buffer time and common delays."
              category="Timeline"
              readTime="8 min read"
              link="/guides/bto-renovation-timeline"
            />
            <GuideCard
              title="Red Flags in Contractor Quotations"
              description="Learn to spot overcharging, hidden costs, and unfair terms in renovation quotations."
              category="Contractors"
              readTime="10 min read"
              link="/guides/quotation-red-flags"
            />
            <GuideCard
              title="Overlay vs Hacking: Flooring Options Compared"
              description="Detailed comparison of overlay and hacking for flooring, including costs and considerations."
              category="Materials"
              readTime="7 min read"
              link="/guides/overlay-vs-hacking"
            />
          </div>
        </section>

        <section className="mb-20 bg-gray-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Ask RenoAI Anything</h2>
              <p className="text-gray-600 mb-6">
                Our AI assistant is trained on Singapore renovation regulations, costs, and best practices. Get instant, accurate answers 24/7.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Updated with latest HDB & BCA regulations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Knows actual Singapore market prices</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Provides specific, actionable advice</span>
                </div>
              </div>
              <Button className="mt-6 bg-green-600 hover:bg-green-700">
                <Link href="/ask-renoai">Try RenoAI Free</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm font-medium">You:</p>
                  <p className="text-sm mt-1">Can I hack the wall between my kitchen and living room?</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-green-600">RenoAI:</p>
                  <p className="text-sm mt-1">For BTO flats, you can hack non-structural partition walls between the kitchen and living room, but you'll need an HDB permit (takes 3 days, costs $30). The wall must not be marked as structural in your floor plan...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Quick Answers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickAnswerCard
              question="Can I paint during defect period?"
              answer="Yes, but only after defect inspection"
              link="/answers/paint-during-defect-period"
            />
            <QuickAnswerCard
              question="Cost to hack kitchen wall?"
              answer="$800-$1,500 including disposal"
              link="/answers/hack-kitchen-wall-cost"
            />
            <QuickAnswerCard
              question="Need permit for false ceiling?"
              answer="Yes, HDB permit required"
              link="/answers/false-ceiling-permit"
            />
            <QuickAnswerCard
              question="Aircon ledge installation rules?"
              answer="Must follow BCA guidelines"
              link="/answers/aircon-ledge-rules"
            />
          </div>
        </section>

        <section ref={newsletterRef} id="newsletter" className="bg-green-50 rounded-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Get Renovation Tips & Updates</h2>
              <p className="text-gray-600">
                Join thousands of Singapore homeowners getting weekly renovation tips, cost updates, and regulation changes.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="text-xl font-bold">
                Reno<span className="text-green-600">Take</span>
              </Link>
              <p className="text-gray-600 text-sm">
                Singapore's trusted renovation guide for BTO owners and homeowners.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Guides</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/guides/ultimate-hdb-bto-guide" className="hover:text-gray-900">BTO Renovation Guide</Link></li>
                <li><Link href="/guides/singapore-renovation-budgeting" className="hover:text-gray-900">Budgeting Bible</Link></li>
                <li><Link href="/guides/contractor-management-guide" className="hover:text-gray-900">Contractor Guide</Link></li>
                <li><Link href="/guides/hdb-permits" className="hover:text-gray-900">HDB Permits</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Tools</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/tools/bto-budget-calculator" className="hover:text-gray-900">Budget Calculator</Link></li>
                <li><Link href="/tools/hdb-permit-checker" className="hover:text-gray-900">Permit Checker</Link></li>
                <li><Link href="/tools/timeline-planner" className="hover:text-gray-900">Timeline Planner</Link></li>
                <li><Link href="/ask-renoai" className="hover:text-gray-900">Ask RenoAI</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/answers" className="hover:text-gray-900">Quick Answers</Link></li>
                <li><Link href="/about" className="hover:text-gray-900">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-12 pt-6 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} RenoTake. All rights reserved. Not affiliated with HDB or BCA.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description, icon, link, items }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="text-green-600 mb-3">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={link} className="text-green-600 hover:text-green-700 text-sm font-medium">
          Learn more →
        </Link>
      </CardFooter>
    </Card>
  )
}

function GuideCard({ title, description, category, readTime, link, badge = "" }) {
  return (
    <Link href={link} className="group">
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-green-600">{category}</span>
            {badge && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                {badge}
              </span>
            )}
          </div>
          <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

function QuickAnswerCard({ question, answer, link }) {
  return (
    <Link href={link} className="group">
      <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors">
        <HelpCircle className="h-4 w-4 text-green-600 mb-2" />
        <p className="font-medium text-sm mb-1 group-hover:text-green-600">{question}</p>
        <p className="text-xs text-gray-600">{answer}</p>
      </div>
    </Link>
  )
}