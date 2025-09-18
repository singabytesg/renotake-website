"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, CheckCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export interface ChecklistItem {
  item: string
  critical?: boolean
  tip?: string
}

interface ProtectionChecklistProps {
  title: string
  items: ChecklistItem[]
}

export default function ProtectionChecklist({ title, items }: ProtectionChecklistProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newChecked = new Set(checked)
    if (newChecked.has(index)) {
      newChecked.delete(index)
    } else {
      newChecked.add(index)
    }
    setChecked(newChecked)
  }

  const progress = (checked.size / items.length) * 100
  const criticalItems = items.filter((item) => item.critical)
  const criticalChecked = criticalItems.filter((_, i) =>
    checked.has(items.indexOf(criticalItems[i]))
  ).length

  return (
    <Card className="border-2 border-green-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Shield className="mr-2 h-5 w-5 text-green-600" />
            {title}
          </span>
          <span className="text-sm font-normal">
            {checked.size}/{items.length} completed
          </span>
        </CardTitle>
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          {criticalItems.length > 0 && (
            <p className="text-sm text-gray-600">
              Critical items: {criticalChecked}/{criticalItems.length}
            </p>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg p-3 transition-all ${
                checked.has(index)
                  ? "border border-green-200 bg-green-50"
                  : item.critical
                    ? "border border-red-200 bg-red-50"
                    : "border border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex items-start">
                <Checkbox
                  checked={checked.has(index)}
                  onCheckedChange={() => toggleItem(index)}
                  className="mr-3 mt-0.5"
                />
                <div className="flex-1">
                  <div className="flex items-start">
                    <p
                      className={`flex-1 ${
                        checked.has(index) ? "text-gray-500 line-through" : "text-gray-900"
                      }`}
                    >
                      {item.item}
                    </p>
                    {item.critical && (
                      <span className="ml-2 rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">
                        CRITICAL
                      </span>
                    )}
                  </div>
                  {item.tip && <p className="mt-1 text-sm italic text-gray-600">💡 {item.tip}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {progress === 100 && (
          <div className="mt-4 rounded-lg border border-green-300 bg-green-100 p-4">
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
              <p className="font-semibold text-green-900">Excellent! You're fully protected.</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
