import { Metadata } from "next"
import TimelinePlanner from "./components/TimelinePlanner"
import { Calendar, Clock, CheckCircle2, AlertCircle, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Renovation Timeline Planner | Plan Your HDB BTO Renovation Schedule | RenoTake",
  description:
    "Plan your Singapore HDB renovation timeline from key collection to moving in. Interactive drag-and-drop planner with dependencies, buffer recommendations, and calendar export.",
  keywords: [
    "renovation timeline planner",
    "HDB renovation schedule",
    "BTO renovation timeline",
    "Singapore renovation planner",
    "renovation project management",
    "renovation calendar",
    "HDB timeline calculator",
    "renovation milestone planner",
  ],
}

export default function RenovationTimelinePlannerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
            <Clock className="mr-2 h-4 w-4" />
            Average BTO renovation: 8-12 weeks
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Renovation Timeline Planner
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Plan your renovation schedule from key collection to moving in with our interactive
            timeline builder
          </p>
        </div>

        {/* Key Features */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-charcoal">Drag & Drop Planning</h3>
            <p className="mt-1 text-sm text-gray-600">
              Easily adjust milestones and phases with visual timeline
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-charcoal">Smart Dependencies</h3>
            <p className="mt-1 text-sm text-gray-600">
              Automatic sequencing based on HDB regulations
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <AlertCircle className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-charcoal">Buffer Recommendations</h3>
            <p className="mt-1 text-sm text-gray-600">
              Built-in 2-4 week buffer for unexpected delays
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <Download className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-charcoal">Export to Calendar</h3>
            <p className="mt-1 text-sm text-gray-600">Download ICS file for any calendar app</p>
          </div>
        </div>
      </section>

      {/* Timeline Planner Tool */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <TimelinePlanner />
      </section>

      {/* Instructions */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-charcoal">How to Use This Planner</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                1
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Set Your Key Collection Date</h3>
                <p className="mt-1 text-gray-600">
                  Enter your BTO key collection date or intended renovation start date
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                2
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Select Your Renovation Scope</h3>
                <p className="mt-1 text-gray-600">
                  Choose between light, standard, or extensive renovation to adjust timeline
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                3
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Adjust Milestones</h3>
                <p className="mt-1 text-gray-600">
                  Drag and drop phases to customize based on your contractor's schedule
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                4
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Export Your Timeline</h3>
                <p className="mt-1 text-gray-600">
                  Download as calendar file or PDF for sharing with your contractor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HDB Regulations Notice */}
      <section className="bg-yellow-50 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-yellow-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Important HDB Regulations</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• Renovation hours: 9am-6pm (weekdays/Saturday), no work on Sundays</li>
                <li>• Noisy works: Must stop by 5pm on weekdays, not allowed on weekends</li>
                <li>• Hacking: Maximum 3 consecutive days only</li>
                <li>• BTO renovation must complete within 3 months of permit approval</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
