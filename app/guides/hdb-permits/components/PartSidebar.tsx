import Link from "next/link"
import { parts } from "../parts"
import { CheckCircle, Circle, FileText, Download } from "lucide-react"

interface PartSidebarProps {
  currentPart: number
}

export default function PartSidebar({ currentPart }: PartSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Table of Contents */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="mb-3 font-semibold text-charcoal">Guide Contents</h3>
        <nav className="space-y-2">
          {parts.map((part) => (
            <Link
              key={part.id}
              href={`/guides/hdb-permits/${part.slug}`}
              className={`flex items-start gap-2 rounded px-2 py-1.5 text-sm transition-colors ${
                part.id === currentPart
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {part.id < currentPart ? (
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
              ) : part.id === currentPart ? (
                <Circle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              ) : (
                <Circle className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
              )}
              <span className="line-clamp-2">
                Part {part.id}: {part.title}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Quick Resources */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="mb-3 font-semibold text-charcoal">Quick Resources</h3>
        <div className="space-y-2">
          <button className="flex w-full items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
            <Download className="h-4 w-4" />
            Permit Checklist PDF
          </button>
          <button className="flex w-full items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
            <FileText className="h-4 w-4" />
            Application Template
          </button>
        </div>
      </div>

      {/* Help Card */}
      <div className="rounded-lg bg-blue-50 p-4">
        <h3 className="mb-2 font-semibold text-blue-900">Need Help?</h3>
        <p className="mb-3 text-sm text-blue-700">
          Get personalized guidance for your HDB renovation permit
        </p>
        <button className="w-full rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Contact RenoTake Expert
        </button>
      </div>
    </div>
  )
}
