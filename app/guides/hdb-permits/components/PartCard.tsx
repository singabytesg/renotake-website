import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Part } from "../parts"

interface PartCardProps {
  part: Part
}

export default function PartCard({ part }: PartCardProps) {
  return (
    <Link href={`/guides/hdb-permits/${part.slug}`} className="group block">
      <div className="h-full rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-3xl">{part.icon}</span>
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-3">
              <span className={`inline-block h-1 w-12 rounded-full ${part.color}`} />
              <span className="text-sm font-medium text-gray-500">Part {part.id} of 6</span>
            </div>
            <h3 className="text-xl font-bold text-charcoal group-hover:text-blue-600">
              {part.title}
            </h3>
            <p className="mt-1 font-medium text-gray-600">{part.subtitle}</p>
            <p className="mt-3 text-gray-600">{part.description}</p>

            {/* Key Points */}
            <ul className="mt-4 space-y-1">
              {part.keyPoints.slice(0, 3).map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{part.estimatedReadTime}</span>
                </div>
                {part.criticalInfo && (
                  <span className="text-sm font-medium text-blue-600">{part.criticalInfo}</span>
                )}
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
