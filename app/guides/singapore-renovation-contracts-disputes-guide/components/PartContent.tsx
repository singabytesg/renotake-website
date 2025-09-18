import React from "react"
import { Part } from "../parts"
import { ContentSection } from "../content/part-content"
import ContractClause from "./ContractClause"
import RedFlagChecker from "./RedFlagChecker"
import DisputeFlowchart from "./DisputeFlowchart"
import ScamTacticCard from "./ScamTacticCard"
import ProtectionChecklist from "./ProtectionChecklist"
import CaseStudyCard from "./CaseStudyCard"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, AlertTriangle, CheckCircle, Shield } from "lucide-react"

interface PartContentProps {
  part: Part
  sections: ContentSection[]
}

export default function PartContent({ part, sections }: PartContentProps) {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h1 className="mb-4 text-3xl font-bold text-charcoal">{part.title}</h1>
        <p className="mb-8 text-lg text-gray-600">{part.description}</p>
      </div>

      {sections.map((section, index) => (
        <section key={index} id={`section-${index}`} className="scroll-mt-20">
          <h2 className="mb-4 text-2xl font-bold text-charcoal">
            {section.number && (
              <span
                className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-${part.color}-100 text-${part.color}-600 mr-3 font-bold`}
              >
                {section.number}
              </span>
            )}
            {section.title}
          </h2>

          {section.content && (
            <div className="prose prose-lg max-w-none">
              {section.content.map((paragraph, i) => (
                <p key={i} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {section.contractClause && <ContractClause clause={section.contractClause} />}

          {section.redFlags && <RedFlagChecker flags={section.redFlags} />}

          {section.disputeFlow && <DisputeFlowchart flow={section.disputeFlow} />}

          {section.scamTactics && (
            <div className="grid gap-4 md:grid-cols-2">
              {section.scamTactics.map((tactic, i) => (
                <ScamTacticCard key={i} tactic={tactic} />
              ))}
            </div>
          )}

          {section.checklist && (
            <ProtectionChecklist title={section.checklist.title} items={section.checklist.items} />
          )}

          {section.caseStudy && <CaseStudyCard study={section.caseStudy} />}

          {section.table && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {section.table.headers.map((header, i) => (
                      <th
                        key={i}
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {section.table.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {section.table.caption && (
                <p className="mt-2 text-sm text-gray-500">{section.table.caption}</p>
              )}
            </div>
          )}

          {section.list && (
            <ul className="space-y-2">
              {section.list.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {section.warning && (
            <Alert className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-900">{section.warning.title}</AlertTitle>
              <AlertDescription className="text-red-700">
                {section.warning.content}
              </AlertDescription>
            </Alert>
          )}

          {section.tip && (
            <Alert className="border-green-200 bg-green-50">
              <Shield className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-900">{section.tip.title}</AlertTitle>
              <AlertDescription className="text-green-700">{section.tip.content}</AlertDescription>
            </Alert>
          )}

          {section.highlight && (
            <Alert className="border-blue-200 bg-blue-50">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-900">{section.highlight.title}</AlertTitle>
              <AlertDescription className="text-blue-700">
                {section.highlight.content}
              </AlertDescription>
            </Alert>
          )}
        </section>
      ))}
    </div>
  )
}
