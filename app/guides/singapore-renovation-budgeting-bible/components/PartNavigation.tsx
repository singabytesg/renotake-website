import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Part } from "../parts"

interface PartNavigationProps {
  previous: Part | null
  next: Part | null
}

export default function PartNavigation({ previous, next }: PartNavigationProps) {
  return (
    <div className="border-t border-gray-200 pt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        {previous ? (
          <Link
            href={`/guides/singapore-renovation-budgeting-bible/${previous.slug}`}
            className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <ArrowLeft className="h-5 w-5 text-gray-400 transition-transform group-hover:-translate-x-1 group-hover:text-primary" />
            <div className="text-left">
              <div className="text-sm text-gray-500">Previous Part</div>
              <div className="font-medium text-charcoal group-hover:text-primary">
                Part {previous.id}: {previous.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/guides/singapore-renovation-budgeting-bible/${next.slug}`}
            className="group flex items-center justify-end gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-primary/50 hover:shadow-md sm:justify-start"
          >
            <div className="text-right sm:text-left">
              <div className="text-sm text-gray-500">Next Part</div>
              <div className="font-medium text-charcoal group-hover:text-primary">
                Part {next.id}: {next.title}
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
        ) : (
          <Link
            href="/guides/singapore-renovation-budgeting-bible"
            className="group flex items-center justify-end gap-3 rounded-lg border border-green-200 bg-green-50 p-4 transition-all hover:border-green-300 hover:shadow-md sm:justify-start"
          >
            <div className="text-right sm:text-left">
              <div className="text-sm text-green-600">Complete!</div>
              <div className="font-medium text-green-700">Back to Overview</div>
            </div>
            <ArrowRight className="h-5 w-5 text-green-600 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  )
}
