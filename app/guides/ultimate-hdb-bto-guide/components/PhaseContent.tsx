"use client"

import { Phase } from "../phases"
import { getPhaseContent } from "../content/phase-content"
import ContentSection from "./ContentSection"
import CostTable from "./CostTable"
import Checklist from "./Checklist"
import KeyTakeaway from "./KeyTakeaway"
import QuickFact from "./QuickFact"

interface PhaseContentProps {
  phase: Phase
}

export default function PhaseContent({ phase }: PhaseContentProps) {
  const content = getPhaseContent(phase.slug)

  if (!content) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
        <p className="text-gray-600">Content for this phase is being prepared...</p>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Introduction */}
      {content.introduction && (
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-gray-700">{content.introduction}</p>
        </div>
      )}

      {/* Quick Facts */}
      {content.quickFacts && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.quickFacts.map((fact, index) => (
            <QuickFact key={index} {...fact} />
          ))}
        </div>
      )}

      {/* Main Sections */}
      {content.sections.map((section, index) => (
        <>
          <ContentSection key={section.id} section={section} index={index} />

          {/* Insert Cost Breakdown after Budget Planning section */}
          {section.id === "budget" && content.costBreakdown && (
            <section id="costs" className="scroll-mt-20">
              <h2 className="mb-6 text-2xl font-bold text-charcoal">Cost Breakdown</h2>
              <CostTable data={content.costBreakdown} />
            </section>
          )}
        </>
      ))}

      {/* Checklists */}
      {content.checklists &&
        content.checklists.map((checklist, index) => (
          <section key={index} id={`checklist-${index}`} className="scroll-mt-20">
            <h2 className="mb-6 text-2xl font-bold text-charcoal">{checklist.title}</h2>
            <Checklist items={checklist.items} />
          </section>
        ))}

      {/* Key Takeaways */}
      {content.keyTakeaways && (
        <KeyTakeaway
          title="Remember These Key Points"
          points={content.keyTakeaways}
          variant="success"
        />
      )}

      {/* Common Mistakes */}
      {content.commonMistakes && (
        <KeyTakeaway
          title="Common Mistakes to Avoid"
          points={content.commonMistakes}
          variant="warning"
        />
      )}

      {/* Pro Tips */}
      {content.proTips && <KeyTakeaway title="Pro Tips" points={content.proTips} variant="info" />}
    </div>
  )
}
