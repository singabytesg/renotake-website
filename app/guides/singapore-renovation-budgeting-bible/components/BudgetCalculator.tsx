"use client"

import { useState } from "react"
import { Calculator, Plus, Minus } from "lucide-react"

interface BudgetCalculatorProps {
  type: string
}

interface BudgetItem {
  category: string
  items: {
    name: string
    min: number
    max: number
    selected: number
  }[]
}

const defaultBudgetItems: BudgetItem[] = [
  {
    category: "Essential Works",
    items: [
      { name: "Hacking & Masonry", min: 2000, max: 5000, selected: 3500 },
      { name: "Electrical Works", min: 3000, max: 6000, selected: 4500 },
      { name: "Plumbing Works", min: 2000, max: 4000, selected: 3000 },
      { name: "Floor Tiling", min: 3000, max: 8000, selected: 5500 },
    ],
  },
  {
    category: "Carpentry",
    items: [
      { name: "Kitchen Cabinets", min: 4000, max: 12000, selected: 8000 },
      { name: "Wardrobes", min: 3000, max: 8000, selected: 5500 },
      { name: "Study/TV Console", min: 1500, max: 4000, selected: 2750 },
      { name: "Other Storage", min: 1000, max: 3000, selected: 2000 },
    ],
  },
  {
    category: "Finishing",
    items: [
      { name: "Painting", min: 1500, max: 3000, selected: 2250 },
      { name: "False Ceiling", min: 2000, max: 5000, selected: 3500 },
      { name: "Window Treatments", min: 1000, max: 3000, selected: 2000 },
      { name: "Doors", min: 2000, max: 5000, selected: 3500 },
    ],
  },
]

export default function BudgetCalculator({ type }: BudgetCalculatorProps) {
  const [budgetItems, setBudgetItems] = useState(defaultBudgetItems)
  const [showDetails, setShowDetails] = useState(false)

  const updateItemValue = (categoryIndex: number, itemIndex: number, value: number) => {
    const newItems = [...budgetItems]
    newItems[categoryIndex].items[itemIndex].selected = value
    setBudgetItems(newItems)
  }

  const calculateTotal = () => {
    return budgetItems.reduce(
      (total, category) =>
        total + category.items.reduce((catTotal, item) => catTotal + item.selected, 0),
      0
    )
  }

  const total = calculateTotal()

  return (
    <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-charcoal">
          <Calculator className="h-5 w-5 text-primary" />
          Budget Calculator
        </h3>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm text-primary hover:underline"
        >
          {showDetails ? "Hide" : "Show"} Details
        </button>
      </div>

      <div className="space-y-6">
        {budgetItems.map((category, catIndex) => (
          <div key={catIndex}>
            <h4 className="mb-3 font-medium text-charcoal">{category.category}</h4>
            <div className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm text-gray-600">{item.name}</div>
                    {showDetails && (
                      <div className="text-xs text-gray-400">
                        S${item.min.toLocaleString()} - S${item.max.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateItemValue(
                          catIndex,
                          itemIndex,
                          Math.max(item.min, item.selected - 500)
                        )
                      }
                      className="rounded-full bg-gray-100 p-1 hover:bg-gray-200"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <div className="w-24 text-center">
                      <input
                        type="number"
                        value={item.selected}
                        onChange={(e) =>
                          updateItemValue(catIndex, itemIndex, parseInt(e.target.value) || 0)
                        }
                        className="w-full rounded border border-gray-200 px-2 py-1 text-center text-sm"
                      />
                    </div>
                    <button
                      onClick={() =>
                        updateItemValue(
                          catIndex,
                          itemIndex,
                          Math.min(item.max, item.selected + 500)
                        )
                      }
                      className="rounded-full bg-gray-100 p-1 hover:bg-gray-200"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Estimated Total</div>
            <div className="text-3xl font-bold text-charcoal">S${total.toLocaleString()}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Per sqft (93 sqm)</div>
            <div className="text-lg font-semibold text-gray-700">
              S${Math.round(total / 1000).toLocaleString()}/sqft
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-yellow-50 p-4">
          <p className="text-sm text-yellow-800">
            <strong>Remember:</strong> Add 10-15% contingency to this estimate for unexpected costs
          </p>
        </div>
      </div>
    </div>
  )
}
