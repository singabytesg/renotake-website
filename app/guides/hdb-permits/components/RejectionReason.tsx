import { XCircle } from "lucide-react"

interface RejectionReasonData {
  reason: string
  description: string
  solution: string
  frequency?: "Common" | "Very Common" | "Rare"
}

interface RejectionReasonProps {
  reason: RejectionReasonData
  number: number
}

export default function RejectionReason({ reason, number }: RejectionReasonProps) {
  const frequencyColors = {
    "Very Common": "bg-red-100 text-red-700",
    Common: "bg-orange-100 text-orange-700",
    Rare: "bg-gray-100 text-gray-700",
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex items-start gap-3">
        <div className="flex items-center gap-2">
          <XCircle className="h-5 w-5 text-red-500" />
          <span className="font-bold text-gray-400">#{number}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-charcoal">{reason.reason}</h3>
            {reason.frequency && (
              <span
                className={`rounded px-2 py-1 text-xs font-medium ${frequencyColors[reason.frequency]}`}
              >
                {reason.frequency}
              </span>
            )}
          </div>
          <p className="mt-2 text-gray-600">{reason.description}</p>
          <div className="mt-3 rounded bg-green-50 p-3">
            <p className="text-sm text-green-700">
              <span className="font-medium">How to Avoid:</span> {reason.solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
