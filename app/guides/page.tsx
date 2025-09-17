import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Clock, Users, Home } from "lucide-react"

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Renovation Guides</h1>
          <p className="text-xl text-gray-600 mb-12">
            Comprehensive, step-by-step guides for every aspect of your Singapore renovation journey
          </p>

          <div className="grid gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Home className="h-6 w-6 text-green-600" />
                  <span className="text-sm font-medium text-green-600">FEATURED GUIDE</span>
                </div>
                <CardTitle className="text-2xl">The Ultimate HDB BTO Renovation Guide</CardTitle>
                <CardDescription className="text-base">
                  10,000+ words of structured guidance from key collection to moving in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Everything you need to know about renovating your BTO flat, including HDB regulations,
                  permit requirements, timeline planning, and cost breakdowns. This comprehensive guide
                  walks you through every phase of your renovation journey.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    45 min read
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Read by 10,000+ homeowners
                  </span>
                </div>
                <Button className="mt-6 bg-green-600 hover:bg-green-700">
                  <Link href="/guides/ultimate-hdb-bto-guide">Read Guide</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <GuideCard
                title="Singapore Renovation Budgeting Bible"
                description="Line-by-line cost breakdowns, hidden costs, and when to splurge vs save"
                icon={<FileText className="h-5 w-5" />}
                readTime="30 min"
                link="/guides/singapore-renovation-budgeting"
              />
              <GuideCard
                title="Navigating Contracts & Contractors"
                description="Red flags, payment milestones, your rights, and dispute resolution"
                icon={<FileText className="h-5 w-5" />}
                readTime="25 min"
                link="/guides/contractor-management-guide"
              />
              <GuideCard
                title="HDB Permit Requirements Guide"
                description="Which renovations need permits, application process, and common rejections"
                icon={<FileText className="h-5 w-5" />}
                readTime="20 min"
                link="/guides/hdb-permits"
              />
              <GuideCard
                title="4-Room BTO Cost Breakdown"
                description="Actual renovation costs for a typical 4-room BTO with detailed pricing"
                icon={<FileText className="h-5 w-5" />}
                readTime="15 min"
                link="/guides/4-room-bto-cost"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-12 bg-gray-50 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="text-xl font-bold">
              Reno<span className="text-green-600">Take</span>
            </Link>
            <p className="text-gray-600 text-sm mt-2">
              Singapore's trusted renovation guide for BTO owners and homeowners.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              © {new Date().getFullYear()} RenoTake. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function GuideCard({ title, description, icon, readTime, link }) {
  return (
    <Link href={link}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="text-green-600 mb-2">{icon}</div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{readTime} read</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}