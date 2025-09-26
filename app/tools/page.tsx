import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, FileCheck, Calendar, DollarSign } from "lucide-react"

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-4 text-4xl font-bold">Interactive Planning Tools</h1>
          <p className="mb-12 text-xl text-gray-600">
            Practical calculators and planners designed specifically for Singapore renovations
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 text-green-600">
                  <DollarSign className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">BTO Renovation Budget Calculator</CardTitle>
                <CardDescription>
                  Get accurate cost estimates for your BTO renovation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li>• Room-by-room cost breakdown</li>
                  <li>• Adjustable quality tiers (Basic/Mid/Premium)</li>
                  <li>• Singapore-specific 2024 pricing</li>
                  <li>• Generate PDF report instantly</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/tools/bto-budget-calculator">Calculate Budget</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 text-green-600">
                  <FileCheck className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">HDB Permit Checker</CardTitle>
                <CardDescription>
                  Find out which permits you need for your renovation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li>• Interactive questionnaire</li>
                  <li>• Instant permit requirements</li>
                  <li>• Direct links to HDB forms</li>
                  <li>• Common rejection reasons</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/tools/hdb-permit-checker">Check Permits</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 text-green-600">
                  <Calendar className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Renovation Timeline Planner</CardTitle>
                <CardDescription>
                  Plan your renovation schedule from key collection to moving in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li>• Drag-and-drop milestone planning</li>
                  <li>• Dependencies and sequencing</li>
                  <li>• Buffer time recommendations</li>
                  <li>• Export to calendar format</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/tools/renovation-timeline-planner">Plan Timeline</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 text-green-600">
                  <Calculator className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Material Cost Comparator</CardTitle>
                <CardDescription>
                  Compare costs for different materials and finishes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li>• Side-by-side comparisons</li>
                  <li>• Quality vs price analysis</li>
                  <li>• Maintenance cost factors</li>
                  <li>• Supplier recommendations</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/tools/material-cost-comparator">Compare Materials</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 rounded-xl bg-green-50 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">More Tools Coming Soon</h2>
            <p className="mb-6 text-gray-600">
              We're constantly developing new tools to help you plan your renovation better.
              Subscribe to get notified when new tools are released.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              <Link href="/#newsletter">Get Updates</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="text-xl font-bold">
              Reno<span className="text-green-600">Take</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Singapore's trusted renovation guide for BTO owners and homeowners.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              © {new Date().getFullYear()} RenoTake. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
