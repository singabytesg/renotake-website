"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Copy, Check } from "lucide-react"

export interface ContractClauseData {
  title: string
  goodVersion: string
  badVersion: string
  explanation: string
  savings?: string
}

interface ContractClauseProps {
  clause: ContractClauseData
}

export default function ContractClause({ clause }: ContractClauseProps) {
  const [copied, setCopied] = useState(false)
  const [showBad, setShowBad] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="border-2 border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{clause.title}</span>
          {clause.savings && (
            <span className="text-sm font-normal text-green-600">Saves {clause.savings}</span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Toggle between good and bad versions */}
        <div className="flex gap-2">
          <Button
            variant={!showBad ? "default" : "outline"}
            size="sm"
            onClick={() => setShowBad(false)}
            className={!showBad ? "bg-green-600 hover:bg-green-700" : ""}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Protected Version
          </Button>
          <Button
            variant={showBad ? "default" : "outline"}
            size="sm"
            onClick={() => setShowBad(true)}
            className={showBad ? "bg-red-600 hover:bg-red-700" : ""}
          >
            <XCircle className="mr-2 h-4 w-4" />
            Risky Version
          </Button>
        </div>

        {/* Contract text display */}
        <div
          className={`relative rounded-lg p-4 font-mono text-sm ${
            showBad ? "border border-red-200 bg-red-50" : "border border-green-200 bg-green-50"
          }`}
        >
          <div className="whitespace-pre-wrap">
            {showBad ? clause.badVersion : clause.goodVersion}
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="absolute right-2 top-2"
            onClick={() => copyToClipboard(showBad ? clause.badVersion : clause.goodVersion)}
          >
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        {/* Explanation */}
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            <strong>Why this matters:</strong> {clause.explanation}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
