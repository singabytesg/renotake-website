import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, FileCheck, Calendar, DollarSign } from "lucide-react"

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Interactive Planning Tools</h1>
          <p className="text-xl text-gray-600 mb-12">
            Practical calculators and planners designed specifically for Singapore renovations
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-green-600 mb-3">
                  <DollarSign className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">BTO Renovation Budget Calculator</CardTitle>
                <CardDescription>
                  Get accurate cost estimates for your BTO renovation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
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

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-green-600 mb-3">
                  <FileCheck className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">HDB Permit Checker</CardTitle>
                <CardDescription>
                  Find out which permits you need for your renovation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
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

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-green-600 mb-3">
                  <Calendar className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Renovation Timeline Planner</CardTitle>
                <CardDescription>
                  Plan your renovation schedule from key collection to moving in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Drag-and-drop milestone planning</li>
                  <li>• Dependencies and sequencing</li>
                  <li>• Buffer time recommendations</li>
                  <li>• Export to calendar format</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/tools/timeline-planner">Plan Timeline</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-green-600 mb-3">
                  <Calculator className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Material Cost Comparator</CardTitle>
                <CardDescription>
                  Compare costs for different materials and finishes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Side-by-side comparisons</li>
                  <li>• Quality vs price analysis</li>
                  <li>• Maintenance cost factors</li>
                  <li>• Supplier recommendations</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/tools/material-comparator">Compare Materials</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-green-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">More Tools Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              We're constantly developing new tools to help you plan your renovation better.
              Subscribe to get notified when new tools are released.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              <Link href="/#newsletter">Get Updates</Link>
            </Button>
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