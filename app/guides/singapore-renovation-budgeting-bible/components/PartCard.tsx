import Link from "next/link"
import { ArrowRight, Clock, TrendingUp } from "lucide-react"
import { Part } from "../parts"

interface PartCardProps {
  part: Part
}

export default function PartCard({ part }: PartCardProps) {
  return (
    <Link
      href={`/guides/singapore-renovation-budgeting-bible/${part.slug}`}
      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary/50 hover:shadow-lg"
    >
      {/* Part Number Badge */}
      <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-600 group-hover:bg-primary/10 group-hover:text-primary">
        {part.id}
      </div>

      {/* Icon and Title */}
      <div className="mb-4 flex items-start gap-3">
        <span className="text-3xl">{part.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-charcoal group-hover:text-primary">
            {part.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-500">{part.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-gray-600">{part.description}</p>

      {/* Key Points */}
      <div className="mb-4">
        <ul className="space-y-1">
          {part.keyPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1 text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{part.estimatedReadTime}</span>
          </div>
          {part.potentialSavings && (
            <div className="flex items-center gap-1 font-medium text-green-600">
              <TrendingUp className="h-3 w-3" />
              <span>Save {part.potentialSavings}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <span>Explore</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Part Color Accent */}
      <div className={`absolute bottom-0 left-0 h-1 w-full ${part.color}`} />
    </Link>
  )
}
