"use client"

import { useState, useRef, type FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Home,
  Calculator,
  FileText,
  HelpCircle,
  Clock,
  Users,
  DollarSign,
  Hammer,
  Building,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Singapore's Intelligent <span className="text-green-600">Renovation Guide</span>
              </h1>
              <p className="text-lg text-gray-600 md:text-xl">
                Navigate your BTO renovation journey with confidence. Get expert guidance, cost
                breakdowns, and instant answers to your renovation questions.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="bg-green-600 text-white hover:bg-green-700">
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
            <div className="relative h-[400px] overflow-hidden rounded-xl border border-gray-200 shadow-lg">
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
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">Your Complete Renovation Toolkit</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Everything you need to plan, budget, and execute your Singapore home renovation
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Comprehensive Guides"
              description="In-depth guides covering every aspect of BTO, HDB, and condo renovations"
              icon={<FileText className="h-6 w-6" />}
              link="/guides"
              items={[
                "Ultimate BTO Renovation Guide",
                "HDB Permit Requirements",
                "Contractor Management",
              ]}
            />
            <FeatureCard
              title="Interactive Tools"
              description="Practical calculators and planners designed for Singapore homeowners"
              icon={<Calculator className="h-6 w-6" />}
              link="/tools"
              items={["BTO Budget Calculator", "HDB Permit Checker", "Timeline Planner"]}
            />
            <FeatureCard
              title="AI Assistant"
              description="Get instant answers to your renovation questions, 24/7"
              icon={<MessageSquare className="h-6 w-6" />}
              link="/ask-renoai"
              items={["HDB regulations", "Cost comparisons", "Material advice"]}
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold">Popular Guides</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GuideCard
              title="Complete 4-Room BTO Renovation Cost Breakdown"
              description="Line-by-line breakdown of actual renovation costs for a typical 4-room BTO flat, including hidden costs."
              category="Budget Planning"
              readTime="15 min read"
              link="/guides/4-room-bto-cost"
              badge="Most Popular"
            />
            <GuideCard
              title="HDB Renovation Permits: What You Need & How to Apply"
              description="Complete guide to HDB permits, including which renovations need approval and step-by-step application."
              category="Regulations"
              readTime="10 min read"
              link="/guides/hdb-permits"
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
              link="/guides/ultimate-hdb-bto-guide/renovation-process/"
            />
            <GuideCard
              title="Red Flags in Contractor Quotations"
              description="Learn to spot overcharging, hidden costs, and unfair terms in renovation quotations."
              category="Contractors"
              readTime="10 min read"
              link="/guides/singapore-renovation-contracts-disputes-guide/contractor-vetting/"
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

        <section className="mb-20 rounded-xl bg-gray-50 p-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Ask RenoAI Anything</h2>
              <p className="mb-6 text-gray-600">
                Our AI assistant is trained on Singapore renovation regulations, costs, and best
                practices. Get instant, accurate answers 24/7.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <span className="text-sm">Updated with latest HDB & BCA regulations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <span className="text-sm">Knows actual Singapore market prices</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <span className="text-sm">Provides specific, actionable advice</span>
                </div>
              </div>
              <Button className="mt-6 bg-green-600 hover:bg-green-700">
                <Link href="/ask-renoai">Try RenoAI Free</Link>
              </Button>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-100 p-3">
                  <p className="text-sm font-medium">You:</p>
                  <p className="mt-1 text-sm">
                    Can I hack the wall between my kitchen and living room?
                  </p>
                </div>
                <div className="rounded-lg bg-green-50 p-3">
                  <p className="text-sm font-medium text-green-600">RenoAI:</p>
                  <p className="mt-1 text-sm">
                    For BTO flats, you can hack non-structural partition walls between the kitchen
                    and living room, but you'll need an HDB permit (takes 3 days, costs $30). The
                    wall must not be marked as structural in your floor plan...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold">Quick Answers</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

        <section ref={newsletterRef} id="newsletter" className="mb-20 rounded-xl bg-green-50 p-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Get Renovation Tips & Updates</h2>
              <p className="text-gray-600">
                Join thousands of Singapore homeowners getting weekly renovation tips, cost updates,
                and regulation changes.
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
                className="whitespace-nowrap bg-green-600 hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="text-xl font-bold">
                Reno<span className="text-green-600">Take</span>
              </Link>
              <p className="text-sm text-gray-600">
                Singapore's trusted renovation guide for BTO owners and homeowners.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-medium">Guides</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/guides/ultimate-hdb-bto-guide" className="hover:text-gray-900">
                    BTO Renovation Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/singapore-renovation-budgeting-bible"
                    className="hover:text-gray-900"
                  >
                    Budgeting Bible
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/singapore-renovation-contracts-disputes-guide"
                    className="hover:text-gray-900"
                  >
                    Contractor Guide
                  </Link>
                </li>
                <li>
                  <Link href="/guides/hdb-permits" className="hover:text-gray-900">
                    HDB Permits
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-medium">Tools</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="/guides/singapore-renovation-budgeting-bible/complete-cost-breakdown"
                    className="hover:text-gray-900"
                  >
                    Budget Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/hdb-permit-checker" className="hover:text-gray-900">
                    Permit Checker
                  </Link>
                </li>
                <li>
                  <Link href="/tools/renovation-timeline-planner" className="hover:text-gray-900">
                    Timeline Planner
                  </Link>
                </li>
                <li>
                  <Link href="/ask-renoai" className="hover:text-gray-900">
                    Ask RenoAI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-medium">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/answers" className="hover:text-gray-900">
                    Quick Answers
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-300 pt-6 text-sm text-gray-600">
            <p>
              © {new Date().getFullYear()} RenoTake. All rights reserved. Not affiliated with HDB
              or BCA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  items: string[]
}

function FeatureCard({ title, description, icon, link, items }: FeatureCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="mb-3 text-green-600">{icon}</div>
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
        <Link href={link} className="text-sm font-medium text-green-600 hover:text-green-700">
          Learn more →
        </Link>
      </CardFooter>
    </Card>
  )
}

interface GuideCardProps {
  title: string
  description: string
  category: string
  readTime: string
  link: string
  badge?: string
}

function GuideCard({ title, description, category, readTime, link, badge = "" }: GuideCardProps) {
  return (
    <Link href={link} className="group">
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-green-600">{category}</span>
            {badge && (
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                {badge}
              </span>
            )}
          </div>
          <CardTitle className="text-lg transition-colors group-hover:text-green-600">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{description}</p>
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

interface QuickAnswerCardProps {
  question: string
  answer: string
  link: string
}

function QuickAnswerCard({ question, answer, link }: QuickAnswerCardProps) {
  return (
    <Link href={link} className="group">
      <div className="rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-green-500">
        <HelpCircle className="mb-2 h-4 w-4 text-green-600" />
        <p className="mb-1 text-sm font-medium group-hover:text-green-600">{question}</p>
        <p className="text-xs text-gray-600">{answer}</p>
      </div>
    </Link>
  )
}
