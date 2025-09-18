"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface ChecklistItem {
  id: string
  text: string
  description?: string
}

interface ChecklistProps {
  items: ChecklistItem[]
  title?: string
}

export default function Checklist({ items, title }: ChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(id)) {
      newChecked.delete(id)
    } else {
      newChecked.add(id)
    }
    setCheckedItems(newChecked)
  }

  const progress = (checkedItems.size / items.length) * 100

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
          <div className="mt-2">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Progress</span>
              <span>
                {checkedItems.size} of {items.length}
              </span>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {items.map((item) => {
          const isChecked = checkedItems.has(item.id)
          return (
            <label
              key={item.id}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-all ${
                isChecked
                  ? "border-primary/50 bg-primary/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                  isChecked ? "border-primary bg-primary" : "border-gray-300 bg-white"
                }`}
              >
                {isChecked && <Check className="h-3 w-3 text-white" />}
              </div>
              <div className="flex-1">
                <div
                  className={`text-sm font-medium ${isChecked ? "text-primary" : "text-charcoal"}`}
                >
                  {item.text}
                </div>
                {item.description && (
                  <div className="mt-1 text-xs text-gray-500">{item.description}</div>
                )}
              </div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleItem(item.id)}
                className="sr-only"
              />
            </label>
          )
        })}
      </div>

      {checkedItems.size === items.length && (
        <div className="mt-4 rounded-lg bg-green-50 p-3 text-center">
          <p className="text-sm font-medium text-green-800">All items completed! 🎉</p>
        </div>
      )}
    </div>
  )
}
