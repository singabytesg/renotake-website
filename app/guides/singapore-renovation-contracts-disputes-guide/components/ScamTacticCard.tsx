import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Shield } from "lucide-react"

export interface ScamTactic {
  number: number
  name: string
  setup: string
  execution: string
  yourLoss: string
  protection: string
}

interface ScamTacticCardProps {
  tactic: ScamTactic
}

export default function ScamTacticCard({ tactic }: ScamTacticCardProps) {
  return (
    <Card className="border-2 border-red-200 transition-colors hover:border-red-400">
      <CardContent className="p-4">
        <div className="mb-3 flex items-start">
          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
            {tactic.number}
          </div>
          <h3 className="flex-1 font-semibold text-gray-900">{tactic.name}</h3>
          <AlertTriangle className="h-5 w-5 text-red-600" />
        </div>

        <div className="space-y-2 text-sm">
          <div>
            <span className="font-semibold text-gray-700">🎭 Setup:</span>
            <p className="text-gray-600">{tactic.setup}</p>
          </div>

          <div>
            <span className="font-semibold text-gray-700">⚡ Execute:</span>
            <p className="text-gray-600">{tactic.execution}</p>
          </div>

          <div>
            <span className="font-semibold text-red-700">💸 Your Loss:</span>
            <p className="text-red-600">{tactic.yourLoss}</p>
          </div>

          <div className="border-t border-gray-200 pt-2">
            <div className="flex items-start">
              <Shield className="mr-1 mt-0.5 h-4 w-4 text-green-600" />
              <div>
                <span className="font-semibold text-green-700">Protection:</span>
                <p className="text-green-600">{tactic.protection}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
