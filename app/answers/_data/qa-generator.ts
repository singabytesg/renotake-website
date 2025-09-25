// ==========================================
// Q&A GENERATOR HELPER FOR CLAUDE CODE
// ==========================================
//
// This file provides utilities to help Claude Code easily:
// 1. Generate new Q&As with proper format
// 2. Validate Q&A data
// 3. Add Q&As to the questions file
// 4. Update existing Q&As
// 5. Generate SEO-optimized content

import type { QAItem, QACategoryType } from "./types"

// ==========================================
// QUICK TEMPLATES FOR COMMON Q&A TYPES
// ==========================================

export const QA_TEMPLATES = {
  // Cost-related question template
  cost: {
    category: "renovation-costs" as QACategoryType,
    keywords: ["cost", "price", "budget", "Singapore", "HDB", "BTO"],
    template: {
      question: "How much does [ITEM] cost in Singapore?",
      shortAnswer: "[ITEM] typically costs S$[MIN]-S$[MAX] in Singapore, depending on [FACTORS].",
      detailedAnswer: `The cost of [ITEM] varies based on several factors:

**Price Range:**
- Budget option: S$[MIN]
- Mid-range: S$[MID]
- Premium: S$[MAX]

**Factors Affecting Price:**
- [FACTOR 1]
- [FACTOR 2]
- [FACTOR 3]

**Cost Breakdown:**
[DETAILED BREAKDOWN]

**Money-Saving Tips:**
- [TIP 1]
- [TIP 2]

**What to Avoid:**
- [WARNING 1]
- [WARNING 2]`,
      costRange: { min: 0, max: 0, unit: "S$" },
    },
  },

  // HDB rules question template
  hdbRules: {
    category: "hdb-bto-rules" as QACategoryType,
    keywords: ["HDB", "BTO", "rules", "regulations", "allowed", "permit"],
    template: {
      question: "Can I [ACTION] in my HDB/BTO flat?",
      shortAnswer:
        "Yes/No, you can/cannot [ACTION] in your HDB flat. [KEY REQUIREMENT/RESTRICTION].",
      detailedAnswer: `Here's what you need to know about [ACTION] in HDB flats:

**HDB's Official Position:**
[OFFICIAL RULE]

**Requirements:**
- [REQUIREMENT 1]
- [REQUIREMENT 2]
- [REQUIREMENT 3]

**Permit Needed:** Yes/No
- Application process: [IF NEEDED]
- Cost: S$[AMOUNT]
- Processing time: [DAYS] working days

**What's Allowed:**
✓ [ALLOWED 1]
✓ [ALLOWED 2]

**What's NOT Allowed:**
✗ [NOT ALLOWED 1]
✗ [NOT ALLOWED 2]

**Penalties for Non-Compliance:**
[PENALTY DESCRIPTION]

**Pro Tip:** [HELPFUL ADVICE]`,
      sources: ["https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/renovation"],
    },
  },

  // Timeline question template
  timeline: {
    category: "timeline-process" as QACategoryType,
    keywords: ["timeline", "how long", "duration", "schedule", "days", "weeks", "months"],
    template: {
      question: "How long does [PROCESS] take?",
      shortAnswer:
        "[PROCESS] typically takes [DURATION] from start to finish, but can vary based on [FACTORS].",
      detailedAnswer: `Understanding the timeline for [PROCESS] helps with planning:

**Typical Duration:** [DURATION]

**Detailed Timeline:**
- Phase 1 ([TIME]): [DESCRIPTION]
- Phase 2 ([TIME]): [DESCRIPTION]
- Phase 3 ([TIME]): [DESCRIPTION]

**Factors That Affect Timeline:**
- [FACTOR 1]: adds [TIME]
- [FACTOR 2]: adds [TIME]
- [FACTOR 3]: adds [TIME]

**How to Speed Up:**
- [TIP 1]
- [TIP 2]

**Common Delays:**
- [DELAY 1]: [TIME IMPACT]
- [DELAY 2]: [TIME IMPACT]

**Buffer Recommendation:** Add [BUFFER] to contractor's estimate`,
      timeEstimate: "[DURATION]",
    },
  },

  // Problem-solving question template
  problem: {
    category: "common-problems" as QACategoryType,
    keywords: ["problem", "issue", "defect", "wrong", "mistake", "fix"],
    template: {
      question: "What should I do if [PROBLEM]?",
      shortAnswer:
        "If [PROBLEM], immediately [IMMEDIATE ACTION]. Then [FOLLOW-UP ACTION] to resolve the issue.",
      detailedAnswer: `Dealing with [PROBLEM] requires prompt and proper action:

**Immediate Steps:**
1. [STEP 1]
2. [STEP 2]
3. [STEP 3]

**Document Everything:**
- Take photos/videos of [WHAT]
- Keep records of [WHAT]
- Save all [WHAT]

**Resolution Process:**

**Option 1: Direct Resolution**
[DESCRIPTION]

**Option 2: Mediation**
- Contact: [ORGANIZATION]
- Cost: S$[AMOUNT]
- Timeline: [DURATION]

**Option 3: Legal Action**
- Suitable for: [SITUATION]
- Process: [DESCRIPTION]
- Cost: S$[AMOUNT]

**Prevention Tips:**
- [TIP 1]
- [TIP 2]

**Your Rights:**
[RIGHTS DESCRIPTION]`,
      warningNote: "[IMPORTANT WARNING]",
    },
  },
}

// ==========================================
// Q&A GENERATOR FUNCTION
// ==========================================

export function generateQA(
  type: keyof typeof QA_TEMPLATES,
  replacements: Record<string, any>
): Partial<QAItem> {
  const template = QA_TEMPLATES[type]
  const qa = JSON.parse(JSON.stringify(template.template)) // Deep copy

  // Generate unique ID from question
  const id = qa.question
    .toLowerCase()
    .replace(
      /\[.*?\]/g,
      replacements.ITEM ||
        replacements.ACTION ||
        replacements.PROCESS ||
        replacements.PROBLEM ||
        "item"
    )
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 50)

  // Replace all placeholders in the template
  const replaceInString = (str: string): string => {
    let result = str
    Object.entries(replacements).forEach(([key, value]) => {
      const regex = new RegExp(`\\[${key}\\]`, "g")
      result = result.replace(regex, value)
    })
    return result
  }

  // Apply replacements recursively
  const processValue = (value: any): any => {
    if (typeof value === "string") {
      return replaceInString(value)
    } else if (Array.isArray(value)) {
      return value.map(processValue)
    } else if (typeof value === "object" && value !== null) {
      const processed: any = {}
      Object.entries(value).forEach(([k, v]) => {
        processed[k] = processValue(v)
      })
      return processed
    }
    return value
  }

  const processedQA = processValue(qa)

  return {
    id,
    ...processedQA,
    category: template.category,
    keywords: [...template.keywords, ...(replacements.keywords || [])],
    lastUpdated: new Date().toISOString().split("T")[0],
    priority: replacements.priority || 100,
    featured: replacements.featured || false,
    sources: (template as any).sources || [],
  }
}

// ==========================================
// BATCH Q&A GENERATOR
// ==========================================

export function generateBatchQAs(
  specs: Array<{
    type: keyof typeof QA_TEMPLATES
    replacements: Record<string, any>
  }>
): Partial<QAItem>[] {
  return specs.map((spec) => generateQA(spec.type, spec.replacements))
}

// ==========================================
// Q&A FORMATTER FOR ADDING TO FILE
// ==========================================

export function formatQAForFile(qa: Partial<QAItem>): string {
  const indent = "  "

  let output = "{\n"
  output += `${indent}id: "${qa.id}",\n`
  output += `${indent}question: "${qa.question}",\n`
  output += `${indent}shortAnswer: "${qa.shortAnswer}",\n`
  output += `${indent}detailedAnswer: \`${qa.detailedAnswer}\`,\n`
  output += `${indent}category: "${qa.category}",\n`
  output += `${indent}keywords: ${JSON.stringify(qa.keywords)},\n`

  if (qa.relatedQuestions) {
    output += `${indent}relatedQuestions: ${JSON.stringify(qa.relatedQuestions)},\n`
  }

  output += `${indent}lastUpdated: "${qa.lastUpdated}",\n`

  if (qa.featured) {
    output += `${indent}featured: true,\n`
  }

  if (qa.sources && qa.sources.length > 0) {
    output += `${indent}sources: ${JSON.stringify(qa.sources)},\n`
  }

  output += `${indent}priority: ${qa.priority || 100},\n`

  if (qa.warningNote) {
    output += `${indent}warningNote: "${qa.warningNote}",\n`
  }

  if (qa.proTip) {
    output += `${indent}proTip: "${qa.proTip}",\n`
  }

  if (qa.costRange) {
    output += `${indent}costRange: { min: ${qa.costRange.min}, max: ${qa.costRange.max}, unit: "${qa.costRange.unit}" },\n`
  }

  if (qa.timeEstimate) {
    output += `${indent}timeEstimate: "${qa.timeEstimate}",\n`
  }

  output += "}"

  return output
}

// ==========================================
// VALIDATION HELPER
// ==========================================

export function validateQA(qa: Partial<QAItem>): {
  isValid: boolean
  errors: string[]
  warnings: string[]
} {
  const errors: string[] = []
  const warnings: string[] = []

  // Required fields
  if (!qa.id) errors.push("Missing ID")
  if (!qa.question) errors.push("Missing question")
  if (!qa.shortAnswer) errors.push("Missing short answer")
  if (!qa.detailedAnswer) errors.push("Missing detailed answer")
  if (!qa.category) errors.push("Missing category")
  if (!qa.keywords || qa.keywords.length === 0) errors.push("Missing keywords")
  if (!qa.lastUpdated) errors.push("Missing lastUpdated date")

  // Length validations
  if (qa.shortAnswer && qa.shortAnswer.length > 200) {
    warnings.push(`Short answer is ${qa.shortAnswer.length} chars (recommended < 200)`)
  }
  if (qa.detailedAnswer && qa.detailedAnswer.length < 200) {
    warnings.push(`Detailed answer is only ${qa.detailedAnswer.length} chars (recommended > 200)`)
  }

  // SEO checks
  if (qa.keywords && qa.keywords.length < 3) {
    warnings.push("Consider adding more keywords for better SEO")
  }
  if (qa.question && !qa.question.endsWith("?")) {
    warnings.push("Question should end with a question mark")
  }

  // Singapore-specific checks
  const singaporeKeywords = ["Singapore", "HDB", "BTO", "CPF", "SGD", "S$"]
  const hasSingaporeContext = qa.keywords?.some((k) =>
    singaporeKeywords.some((sk) => k.toLowerCase().includes(sk.toLowerCase()))
  )
  if (!hasSingaporeContext) {
    warnings.push("Consider adding Singapore-specific keywords for local SEO")
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}

// ==========================================
// EXAMPLE USAGE FOR CLAUDE CODE
// ==========================================

/*
// To generate a single Q&A:
const newQA = generateQA("cost", {
  ITEM: "kitchen cabinet",
  MIN: "3000",
  MAX: "8000",
  MID: "5000",
  FACTORS: "material quality and design complexity",
  FACTOR_1: "Material type (laminate vs solid wood)",
  FACTOR_2: "Cabinet length and height",
  FACTOR_3: "Internal fittings and accessories",
  DETAILED_BREAKDOWN: "Top cabinets: S$150-250 per foot run\nBottom cabinets: S$200-300 per foot run",
  TIP_1: "Choose laminate over veneer for 30% savings",
  TIP_2: "Buy during renovation fairs for discounts",
  WARNING_1: "Extremely cheap quotes often exclude installation",
  WARNING_2: "Imported materials may have long lead times",
  keywords: ["kitchen cabinet cost", "cabinet price Singapore"]
})

// Validate before adding
const validation = validateQA(newQA)
if (!validation.isValid) {
  console.error("Validation errors:", validation.errors)
} else {
  if (validation.warnings.length > 0) {
    console.warn("Warnings:", validation.warnings)
  }
  // Format for adding to questions.ts file
  const formatted = formatQAForFile(newQA)
  console.log(formatted)
}

// To generate multiple Q&As:
const batchQAs = generateBatchQAs([
  {
    type: "cost",
    replacements: { ITEM: "toilet bowl", MIN: "200", MAX: "1500", ... }
  },
  {
    type: "hdbRules",
    replacements: { ACTION: "install a bathtub", ... }
  },
  {
    type: "timeline",
    replacements: { PROCESS: "HDB permit approval", DURATION: "7-14 working days", ... }
  }
])
*/

// ==========================================
// SEO KEYWORD SUGGESTIONS
// ==========================================

export const SEO_KEYWORDS = {
  mustInclude: ["Singapore", "HDB", "BTO", "2024", "2025"],

  costRelated: [
    "cost",
    "price",
    "budget",
    "cheap",
    "affordable",
    "expensive",
    "S$",
    "SGD",
    "payment",
    "deposit",
  ],

  timeRelated: [
    "how long",
    "duration",
    "timeline",
    "schedule",
    "days",
    "weeks",
    "months",
    "quick",
    "fast",
  ],

  permitsRules: [
    "permit",
    "allowed",
    "legal",
    "rules",
    "regulations",
    "requirements",
    "approval",
    "application",
  ],

  locations: [
    "Tampines",
    "Jurong",
    "Woodlands",
    "Punggol",
    "Sengkang",
    "Ang Mo Kio",
    "Bedok",
    "Clementi",
  ],
}

// ==========================================
// INSTRUCTIONS FOR CLAUDE CODE
// ==========================================

/*
TO ADD NEW Q&As TO THE SYSTEM:

1. Use generateQA() with appropriate template and replacements
2. Validate with validateQA()
3. Format with formatQAForFile()
4. Add to questions array in questions.ts

QUICK COMMANDS:

Generate a cost question:
- Use template: "cost"
- Provide: ITEM, MIN, MAX, MID, FACTORS, etc.

Generate an HDB rules question:
- Use template: "hdbRules"
- Provide: ACTION, requirements, penalties

Generate a timeline question:
- Use template: "timeline"
- Provide: PROCESS, DURATION, phases

Generate a problem-solving question:
- Use template: "problem"
- Provide: PROBLEM, solutions, prevention tips

REMEMBER:
- Always include Singapore-specific context
- Use current year (2024/2025) for freshness
- Include at least 3-5 keywords per Q&A
- Keep short answers under 200 characters
- Make detailed answers comprehensive (500+ chars)
- Add sources when referencing official information
*/
