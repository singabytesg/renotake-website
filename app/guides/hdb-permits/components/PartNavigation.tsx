import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Part } from "../parts"

interface PartNavigationProps {
  previous: Part | null
  next: Part | null
}

export default function PartNavigation({ previous, next }: PartNavigationProps) {
  return (
    <div className="flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:justify-between">
      {previous ? (
        <Link
          href={`/guides/hdb-permits/${previous.slug}`}
          className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
        >
          <ArrowLeft className="h-5 w-5 text-gray-400 transition-transform group-hover:-translate-x-1 group-hover:text-blue-600" />
          <div className="text-left">
            <div className="text-sm text-gray-500">Previous</div>
            <div className="font-medium text-charcoal group-hover:text-blue-600">
              Part {previous.id}: {previous.title}
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/guides/hdb-permits/${next.slug}`}
          className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md sm:flex-row-reverse"
        >
          <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
          <div className="text-left sm:text-right">
            <div className="text-sm text-gray-500">Next</div>
            <div className="font-medium text-charcoal group-hover:text-blue-600">
              Part {next.id}: {next.title}
            </div>
          </div>
        </Link>
      ) : (
        <Link
          href="/guides/hdb-permits"
          className="group flex items-center gap-3 self-end rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-green-300 hover:shadow-md sm:flex-row-reverse"
        >
          <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-green-600" />
          <div className="text-left sm:text-right">
            <div className="text-sm text-gray-500">Complete!</div>
            <div className="font-medium text-charcoal group-hover:text-green-600">
              Back to Overview
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}
