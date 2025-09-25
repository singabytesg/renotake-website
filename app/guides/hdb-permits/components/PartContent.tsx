"use client"

import { getPartContent } from "../content/part-content"
import PermitTable from "./PermitTable"
import PermitChecklist from "./PermitChecklist"
import TimelineChart from "./TimelineChart"
import CostAlert from "./CostAlert"
import ProcessStep from "./ProcessStep"
import RejectionReason from "./RejectionReason"

interface PartContentProps {
  partSlug: string
}

export default function PartContent({ partSlug }: PartContentProps) {
  const content = getPartContent(partSlug)

  if (!content) {
    return (
      <div className="rounded-lg bg-gray-50 p-8 text-center">
        <p className="text-gray-600">Content coming soon...</p>
      </div>
    )
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
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {section.permitTable && <PermitTable data={section.permitTable} />}

          {section.checklist && <PermitChecklist items={section.checklist} />}

          {section.timeline && <TimelineChart data={section.timeline} />}

          {section.processSteps && (
            <div className="mt-6 space-y-4">
              {section.processSteps.map((step, sIndex) => (
                <ProcessStep key={sIndex} step={step} stepNumber={sIndex + 1} />
              ))}
            </div>
          )}

          {section.rejectionReasons && (
            <div className="mt-6 space-y-4">
              {section.rejectionReasons.map((reason, rIndex) => (
                <RejectionReason key={rIndex} reason={reason} number={rIndex + 1} />
              ))}
            </div>
          )}

          {section.costBreakdown && (
            <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {section.costBreakdown.headers.map((header, hIndex) => (
                      <th
                        key={hIndex}
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-900"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {section.costBreakdown.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 1 ? "bg-gray-50" : ""}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 text-sm text-gray-600">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.alert && <CostAlert alert={section.alert} />}

          {section.highlight && (
            <div className="mt-6 rounded-lg bg-blue-50 p-6">
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
