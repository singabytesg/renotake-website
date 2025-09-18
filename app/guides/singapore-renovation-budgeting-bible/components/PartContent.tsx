"use client"

import { getPartContent } from "../content/part-content"
import CostTable from "./CostTable"
import HiddenCostChecklist from "./HiddenCostChecklist"
import BudgetCalculator from "./BudgetCalculator"
import SavingsTip from "./SavingsTip"
import FinancingComparison from "./FinancingComparison"

interface PartContentProps {
  partSlug: string
}

export default function PartContent({ partSlug }: PartContentProps) {
  const content = getPartContent(partSlug)

  if (!content) {
    return <div>Content not found</div>
  }

  return (
    <div className="prose prose-gray max-w-none">
      {content.sections.map((section, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-bold text-charcoal">{section.title}</h2>

          {section.content && (
            <div className="mt-4 space-y-4">
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {section.list && (
            <ul className="mt-4 space-y-2">
              {section.list.map((item, lIndex) => (
                <li key={lIndex} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {section.table && <CostTable data={section.table} />}

          {section.checklist && <HiddenCostChecklist items={section.checklist} />}

          {section.tips && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {section.tips.map((tip, tIndex) => (
                <SavingsTip key={tIndex} tip={tip} />
              ))}
            </div>
          )}

          {section.calculator && <BudgetCalculator type={section.calculator} />}

          {section.comparison && <FinancingComparison data={section.comparison} />}

          {section.highlight && (
            <div className="mt-6 rounded-lg bg-green-50 p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{section.highlight.title}</h3>
                  <p className="mt-1 text-gray-600">{section.highlight.content}</p>
                </div>
              </div>
            </div>
          )}

          {section.warning && (
            <div className="mt-6 rounded-lg bg-red-50 p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{section.warning.title}</h3>
                  <p className="mt-1 text-gray-600">{section.warning.content}</p>
                </div>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
