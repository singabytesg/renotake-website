import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Phase } from "../phases"

interface PhaseCardProps {
  phase: Phase
}

export default function PhaseCard({ phase }: PhaseCardProps) {
  return (
    <Link
      href={`/guides/bto-renovation/${phase.slug}`}
      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary/50 hover:shadow-lg"
    >
      {/* Phase Number Badge */}
      <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-600 group-hover:bg-primary/10 group-hover:text-primary">
        {phase.number}
      </div>

      {/* Icon and Title */}
      <div className="mb-4 flex items-start gap-3">
        <span className="text-3xl">{phase.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-charcoal group-hover:text-primary">
            {phase.title}
          </h3>
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{phase.duration}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-gray-600">{phase.description}</p>

      {/* Key Points */}
      <div className="mb-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Key Topics:
        </div>
        <ul className="mt-2 space-y-1">
          {phase.keyPoints.slice(0, 3).map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-sm font-medium text-primary">
        <span>Explore Phase {phase.number}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>

      {/* Phase Color Accent */}
      <div className={`absolute bottom-0 left-0 h-1 w-full ${phase.color}`} />
    </Link>
  )
}
