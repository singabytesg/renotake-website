"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowDown, Scale, MessageSquare, Gavel, FileText } from "lucide-react"

export interface DisputeLevel {
  level: number
  name: string
  successRate: string
  timeline: string
  cost: string
  description: string
  action: string
}

interface DisputeFlowchartProps {
  flow: DisputeLevel[]
}

export default function DisputeFlowchart({ flow }: DisputeFlowchartProps) {
  const [activeLevel, setActiveLevel] = useState(0)

  const getIcon = (level: number) => {
    switch (level) {
      case 1:
        return <MessageSquare className="h-6 w-6" />
      case 2:
        return <Scale className="h-6 w-6" />
      case 3:
        return <Gavel className="h-6 w-6" />
      case 4:
        return <FileText className="h-6 w-6" />
      default:
        return <FileText className="h-6 w-6" />
    }
  }

  return (
    <Card className="border-2 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Scale className="mr-2 h-5 w-5 text-blue-600" />
          Dispute Resolution Roadmap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {flow.map((level, index) => (
            <div key={index}>
              <Button
                variant="ghost"
                className={`h-auto w-full justify-start p-4 ${
                  activeLevel === index ? "border-2 border-blue-600 bg-blue-50" : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveLevel(index)}
              >
                <div className="flex w-full items-start">
                  <div
                    className={`mr-4 flex h-12 w-12 items-center justify-center rounded-full ${
                      activeLevel === index ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {getIcon(level.level)}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="mb-1 font-semibold">
                      Level {level.level}: {level.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>💯 Success: {level.successRate}</span>
                      <span>⏰ Timeline: {level.timeline}</span>
                      <span>💰 Cost: {level.cost}</span>
                    </div>
                  </div>
                </div>
              </Button>

              {activeLevel === index && (
                <div className="ml-16 mt-4 rounded-lg bg-gray-50 p-4">
                  <p className="mb-3 text-gray-700">{level.description}</p>
                  <div className="rounded border border-gray-200 bg-white p-3">
                    <p className="mb-1 text-sm font-semibold text-gray-900">Your Action:</p>
                    <p className="text-sm text-gray-700">{level.action}</p>
                  </div>
                </div>
              )}

              {index < flow.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-5 w-5 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <p className="mb-1 text-sm font-semibold text-yellow-900">Remember:</p>
          <p className="text-sm text-yellow-700">
            Always start with Level 1 and escalate only when necessary. Document everything at every
            level - your evidence is your power.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
