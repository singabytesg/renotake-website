import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Phase } from "../phases"

interface PhaseNavigationProps {
  navigation: {
    previous: Phase | null
    current: Phase | null
    next: Phase | null
    all: Phase[]
  }
}

export default function PhaseNavigation({ navigation }: PhaseNavigationProps) {
  const { previous, next } = navigation

  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Previous Phase */}
          {previous ? (
            <Link
              href={`/guides/ultimate-hdb-bto-guide/${previous.slug}`}
              className="group flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-primary" />
              <div className="text-left">
                <div className="text-xs text-gray-500">Previous</div>
                <div className="font-medium text-charcoal group-hover:text-primary">
                  Phase {previous.number}: {previous.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Phase */}
          {next ? (
            <Link
              href={`/guides/ultimate-hdb-bto-guide/${next.slug}`}
              className="group flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <div className="text-right">
                <div className="text-xs text-gray-500">Next</div>
                <div className="font-medium text-charcoal group-hover:text-primary">
                  Phase {next.number}: {next.title}
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary" />
            </Link>
          ) : (
            <Link
              href="/guides/ultimate-hdb-bto-guide"
              className="group flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
            >
              <div className="text-right">
                <div className="text-xs text-white/80">Completed!</div>
                <div className="font-medium">View Complete Guide</div>
              </div>
              <ArrowRight className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
