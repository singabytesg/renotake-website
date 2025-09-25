"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface ChecklistItem {
  name: string
  description?: string
  required: boolean
  category?: string
}

interface PermitChecklistProps {
  items: ChecklistItem[]
}

export default function PermitChecklist({ items }: PermitChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  const toggleItem = (itemName: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(itemName)) {
      newChecked.delete(itemName)
    } else {
      newChecked.add(itemName)
    }
    setCheckedItems(newChecked)
  }

  const categories = Array.from(new Set(items.map((item) => item.category || "General")))

  return (
    <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-charcoal">Document Checklist</h3>
        <span className="text-sm text-gray-500">
          {checkedItems.size} of {items.length} completed
        </span>
      </div>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category}>
            <h4 className="mb-2 text-sm font-medium text-gray-700">{category}</h4>
            <div className="space-y-2">
              {items
                .filter((item) => (item.category || "General") === category)
                .map((item) => (
                  <label
                    key={item.name}
                    className="flex cursor-pointer items-start gap-3 rounded p-2 hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      checked={checkedItems.has(item.name)}
                      onChange={() => toggleItem(item.name)}
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={checkedItems.has(item.name) ? "line-through" : ""}>
                          {item.name}
                        </span>
                        {item.required && (
                          <span className="rounded bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
                            Required
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="mt-0.5 text-sm text-gray-500">{item.description}</p>
                      )}
                    </div>
                  </label>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
