import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Scale } from "lucide-react"

export interface CaseStudy {
  title: string
  type: "success" | "failure"
  background: string
  issue: string
  action: string
  outcome: string
  loss?: string
  recovery?: string
  lesson: string
}

interface CaseStudyCardProps {
  study: CaseStudy
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const isSuccess = study.type === "success"

  return (
    <Card
      className={`border-2 ${
        isSuccess ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
      }`}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Scale className="mr-2 h-5 w-5 text-gray-600" />
            {study.title}
          </span>
          {isSuccess ? (
            <span className="flex items-center text-green-600">
              <TrendingUp className="mr-1 h-5 w-5" />
              Victory
            </span>
          ) : (
            <span className="flex items-center text-red-600">
              <TrendingDown className="mr-1 h-5 w-5" />
              Loss
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <h4 className="mb-1 font-semibold text-gray-900">🎬 Background</h4>
            <p className="text-sm text-gray-700">{study.background}</p>
          </div>

          <div>
            <h4 className="mb-1 font-semibold text-gray-900">⚠️ Issue</h4>
            <p className="text-sm text-gray-700">{study.issue}</p>
          </div>

          <div>
            <h4 className="mb-1 font-semibold text-gray-900">⚖️ Action Taken</h4>
            <p className="text-sm text-gray-700">{study.action}</p>
          </div>

          <div>
            <h4 className="mb-1 font-semibold text-gray-900">📊 Outcome</h4>
            <p className="text-sm text-gray-700">{study.outcome}</p>
          </div>

          {(study.loss || study.recovery) && (
            <div className="flex gap-4">
              {study.loss && (
                <div className="flex-1">
                  <h4 className="mb-1 font-semibold text-red-700">💸 Loss</h4>
                  <p className="text-sm text-red-600">{study.loss}</p>
                </div>
              )}
              {study.recovery && (
                <div className="flex-1">
                  <h4 className="mb-1 font-semibold text-green-700">💰 Recovery</h4>
                  <p className="text-sm text-green-600">{study.recovery}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div
          className={`rounded-lg border p-3 ${
            isSuccess ? "border-green-300 bg-green-100" : "border-red-300 bg-red-100"
          }`}
        >
          <h4 className="mb-1 font-semibold text-gray-900">🎓 Key Lesson</h4>
          <p className="text-sm font-medium">{study.lesson}</p>
        </div>
      </CardContent>
    </Card>
  )
}
