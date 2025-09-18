"use client"

import { useState } from "react"
import { Check, AlertTriangle } from "lucide-react"

interface ChecklistItem {
  name: string
  cost: string
  description?: string
  warning?: boolean
}

interface HiddenCostChecklistProps {
  items: ChecklistItem[]
}

export default function HiddenCostChecklist({ items }: HiddenCostChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newCheckedItems = new Set(checkedItems)
    if (newCheckedItems.has(index)) {
      newCheckedItems.delete(index)
    } else {
      newCheckedItems.add(index)
    }
    setCheckedItems(newCheckedItems)
  }

  const calculateTotal = () => {
    let total = 0
    checkedItems.forEach((index) => {
      const costString = items[index].cost
      const match = costString.match(/S?\$?([\d,]+)/)
      if (match) {
        total += parseInt(match[1].replace(/,/g, ""))
      }
    })
    return total
  }

  const total = calculateTotal()

  return (
    <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-orange-900">
          <AlertTriangle className="h-5 w-5" />
          Hidden Costs Checklist
        </h3>
        <div className="text-sm text-orange-700">
          {checkedItems.size} of {items.length} selected
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleItem(index)}
            className={`cursor-pointer rounded-lg border p-3 transition-all ${
              checkedItems.has(index)
                ? "border-orange-300 bg-white shadow-sm"
                : "border-orange-200 bg-orange-50/50 hover:bg-white"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 h-5 w-5 shrink-0 rounded border-2 transition-colors ${
                  checkedItems.has(index)
                    ? "border-orange-500 bg-orange-500"
                    : "border-orange-300 bg-white"
                }`}
              >
                {checkedItems.has(index) && <Check className="h-full w-full text-white" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{item.name}</span>
                  <span className="text-sm font-semibold text-orange-600">{item.cost}</span>
                </div>
                {item.description && (
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                )}
                {item.warning && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                    <AlertTriangle className="h-3 w-3" />
                    Often forgotten!
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {checkedItems.size > 0 && (
        <div className="mt-6 rounded-lg bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Total Hidden Costs:</span>
            <span className="text-2xl font-bold text-orange-600">S${total.toLocaleString()}</span>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            These are costs that are typically not included in initial quotes
          </p>
        </div>
      )}
    </div>
  )
}
