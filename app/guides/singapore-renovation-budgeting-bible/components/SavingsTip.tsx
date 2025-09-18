import { TrendingDown, Clock, DollarSign } from "lucide-react"

interface SavingsTipProps {
  tip: {
    title: string
    description: string
    savings: string
    effort: "Low" | "Medium" | "High"
    impact: "Low" | "Medium" | "High"
  }
}

export default function SavingsTip({ tip }: SavingsTipProps) {
  const effortColor = {
    Low: "text-green-600 bg-green-50",
    Medium: "text-yellow-600 bg-yellow-50",
    High: "text-red-600 bg-red-50",
  }

  const impactColor = {
    Low: "text-gray-600 bg-gray-50",
    Medium: "text-blue-600 bg-blue-50",
    High: "text-green-600 bg-green-50",
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 transition-all hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <h4 className="font-semibold text-charcoal">{tip.title}</h4>
        <div className="flex items-center gap-1 text-green-600">
          <TrendingDown className="h-4 w-4" />
          <span className="text-sm font-semibold">{tip.savings}</span>
        </div>
      </div>

      <p className="mb-3 text-sm text-gray-600">{tip.description}</p>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3 text-gray-400" />
          <span className={`rounded px-2 py-0.5 text-xs font-medium ${effortColor[tip.effort]}`}>
            {tip.effort} Effort
          </span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSign className="h-3 w-3 text-gray-400" />
          <span className={`rounded px-2 py-0.5 text-xs font-medium ${impactColor[tip.impact]}`}>
            {tip.impact} Impact
          </span>
        </div>
      </div>
    </div>
  )
}
