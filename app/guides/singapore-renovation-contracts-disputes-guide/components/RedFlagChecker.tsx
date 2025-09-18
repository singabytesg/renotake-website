"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertTriangle, Shield } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export interface RedFlag {
  category: string
  flag: string
  risk: "high" | "medium" | "low"
  explanation: string
}

interface RedFlagCheckerProps {
  flags: RedFlag[]
}

export default function RedFlagChecker({ flags }: RedFlagCheckerProps) {
  const [checkedFlags, setCheckedFlags] = useState<Set<number>>(new Set())

  const toggleFlag = (index: number) => {
    const newChecked = new Set(checkedFlags)
    if (newChecked.has(index)) {
      newChecked.delete(index)
    } else {
      newChecked.add(index)
    }
    setCheckedFlags(newChecked)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200"
      case "medium":
        return "text-orange-600 bg-orange-50 border-orange-200"
      case "low":
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "high":
        return "🚨"
      case "medium":
        return "⚠️"
      case "low":
        return "📋"
      default:
        return "📝"
    }
  }

  const checkedCount = checkedFlags.size
  const highRiskCount = Array.from(checkedFlags).filter((i) => flags[i].risk === "high").length

  return (
    <Card className="border-2 border-red-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-red-600" />
            Red Flag Checker
          </span>
          <span className="text-sm font-normal">
            {checkedCount} of {flags.length} flags found
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Risk Assessment */}
        {checkedCount > 0 && (
          <Alert
            className={`${
              highRiskCount > 0
                ? "border-red-600 bg-red-50"
                : checkedCount > 2
                  ? "border-orange-600 bg-orange-50"
                  : "border-yellow-600 bg-yellow-50"
            }`}
          >
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>
                {highRiskCount > 0
                  ? "⚠️ HIGH RISK DETECTED"
                  : checkedCount > 2
                    ? "⚠️ MODERATE RISK"
                    : "📋 LOW RISK"}
              </strong>
              <br />
              {highRiskCount > 0
                ? "Do NOT proceed with this contractor. Seek alternatives immediately."
                : checkedCount > 2
                  ? "Proceed with extreme caution. Get additional references and verification."
                  : "Minor concerns. Address these issues before signing any contract."}
            </AlertDescription>
          </Alert>
        )}

        {/* Flags List */}
        <div className="space-y-3">
          {flags.map((flag, index) => (
            <div
              key={index}
              className={`rounded-lg border p-3 transition-all ${
                checkedFlags.has(index) ? getRiskColor(flag.risk) : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-start">
                <Checkbox
                  checked={checkedFlags.has(index)}
                  onCheckedChange={() => toggleFlag(index)}
                  className="mr-3 mt-1"
                />
                <div className="flex-1">
                  <div className="mb-1 flex items-center">
                    <span className="mr-2 text-xs font-semibold">{flag.category}</span>
                    <span className="mr-2 text-lg">{getRiskIcon(flag.risk)}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        flag.risk === "high"
                          ? "bg-red-100 text-red-700"
                          : flag.risk === "medium"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {flag.risk.toUpperCase()} RISK
                    </span>
                  </div>
                  <p className="mb-1 font-medium">{flag.flag}</p>
                  <p className="text-sm text-gray-600">{flag.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Protection Tip */}
        <div className="rounded-lg border border-green-200 bg-green-50 p-4">
          <div className="flex items-start">
            <Shield className="mr-2 mt-0.5 h-5 w-5 text-green-600" />
            <div>
              <p className="mb-1 text-sm font-semibold text-green-900">Protection Tip</p>
              <p className="text-sm text-green-700">
                If you find 3+ red flags or any HIGH RISK flags, walk away immediately. Your money
                and peace of mind are worth more than any quote.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
