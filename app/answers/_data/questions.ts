import { QAItem } from "./types"

// ==========================================
// Q&A DATA MANAGEMENT FOR CLAUDE CODE
// ==========================================
//
// TO ADD NEW Q&As:
// 1. Copy the template below
// 2. Fill in all required fields
// 3. Add to the appropriate section
// 4. Run validation to ensure data quality
//
// TEMPLATE:
// {
//   id: "unique-id-here",
//   question: "Your question here?",
//   shortAnswer: "Quick 1-2 sentence answer.",
//   detailedAnswer: `Comprehensive answer with multiple paragraphs...`,
//   category: "category-here",
//   keywords: ["keyword1", "keyword2"],
//   lastUpdated: "2024-12-26",
//   priority: 100,
// },

export const questions: QAItem[] = [
  // ==========================================
  // HDB & BTO RULES
  // ==========================================
  {
    id: "can-hack-walls-bto",
    question: "Can I hack walls in my new BTO flat?",
    shortAnswer:
      "Yes, you can hack non-structural walls in your BTO, but you need HDB's permit first. Structural walls and columns cannot be hacked under any circumstances.",
    detailedAnswer: `You can hack non-structural partition walls in your BTO flat, but there are strict rules to follow:

**What You CAN Hack (with permit):**
- Non-load bearing partition walls between rooms
- Kitchen entrance walls (popular for open kitchen concept)
- Walls between bedrooms to create larger spaces
- Store room walls

**What You CANNOT Hack:**
- Structural walls (usually thicker, concrete walls)
- Columns and beams
- Walls with embedded pipes/electrical conduits
- External walls and facade
- Walls shared with neighbors

**Permit Requirements:**
You must obtain HDB's renovation permit before any hacking work. The permit costs around S$30-50 and requires submission of floor plans. Professional contractors will usually handle this application for you. Hacking without permit can result in fines up to S$5,000 and you'll be required to reinstate the wall at your own cost.

**Timeline:** Permit approval typically takes 7-14 working days. Factor this into your renovation timeline.`,
    category: "hdb-bto-rules",
    keywords: [
      "hack walls BTO",
      "HDB hacking permit",
      "remove walls HDB",
      "BTO renovation rules",
      "structural wall Singapore",
    ],
    relatedQuestions: ["hdb-hacking-permit-cost", "kitchen-wall-removal"],
    lastUpdated: "2024-12-26",
    featured: true,
    sources: ["https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/renovation"],
    priority: 1,
    warningNote:
      "Never hack any walls without proper permits. Illegal hacking can compromise building safety and result in severe penalties.",
  },

  {
    id: "renovation-start-after-keys",
    question: "When can I start renovation after collecting BTO keys?",
    shortAnswer:
      "You can start renovation immediately after key collection, but you have a 3-month deadline to complete all noisy works like hacking and drilling.",
    detailedAnswer: `You can begin renovation works immediately after collecting your BTO keys, but there are important timelines to follow:

**3-Month Renovation Period:**
HDB gives you 3 months from key collection to complete all renovation works that generate noise and debris. This includes:
- Hacking and demolition
- Drilling and hammering
- Tiling and masonry work
- Major carpentry installations

**After 3 Months:**
Once you've moved in or after the 3-month period (whichever is earlier), renovation works are restricted to:
- Weekdays: 9am to 6pm
- Saturdays: 9am to 6pm
- Not allowed on Sundays and Public Holidays

**Best Practice Timeline:**
- Week 1-2: Permits, planning, and contractor mobilization
- Week 3-6: Hacking, masonry, and wet works
- Week 7-10: Carpentry and installations
- Week 11-12: Painting, cleaning, and touch-ups

**Pro Tip:** Most contractors are familiar with this timeline and will schedule works accordingly. However, always buffer 2-3 weeks for delays due to material shortages or weather (for corridor works).`,
    category: "timeline-process",
    keywords: [
      "BTO renovation timeline",
      "when start renovation BTO",
      "3 month renovation period",
      "HDB key collection renovation",
    ],
    lastUpdated: "2024-12-26",
    priority: 2,
    timeEstimate: "3 months for noisy works",
  },

  // ==========================================
  // RENOVATION COSTS
  // ==========================================
  {
    id: "contractor-deposit-amount",
    question: "How much deposit should I pay to my renovation contractor?",
    shortAnswer:
      "Industry standard is 30-50% initial deposit, but never pay more than 50% upfront. The safest approach is 30% deposit, 30% mid-progress, 30% upon completion, and 10% after defects rectification.",
    detailedAnswer: `The deposit structure is crucial for protecting yourself from contractor issues. Here's the recommended payment schedule:

**Standard Payment Structure (Recommended):**
- Initial deposit: 30% upon signing contract
- Progress payment 1: 30% when carpentry/masonry starts
- Progress payment 2: 30% upon substantial completion
- Final payment: 10% after defects rectification (1-2 weeks)

**Red Flags to Avoid:**
- Contractors asking for >50% upfront
- Full payment before work completion
- Cash-only payments with no receipts
- Vague payment terms in contract

**How to Protect Yourself:**
1. Never pay large sums in cash - use bank transfer for records
2. Link payments to specific milestones, not dates
3. Document all completed works before each payment
4. Withhold final payment until all defects are rectified
5. Get receipts for every payment made

**What if contractor demands more?**
If a contractor insists on >50% deposit, it often indicates cash flow problems. Consider finding another contractor. Legitimate contractors understand customer concerns and are flexible with payment terms.

**Industry insight:** Large renovation firms typically require less deposit (20-30%) as they have better cash flow. Smaller contractors may need 40-50% to purchase materials.`,
    category: "contractor-id",
    keywords: [
      "renovation deposit",
      "contractor payment schedule",
      "how much pay contractor",
      "renovation payment terms Singapore",
    ],
    lastUpdated: "2024-12-26",
    featured: true,
    priority: 3,
    warningNote:
      "Never pay 100% upfront, regardless of discounts offered. This is the #1 cause of renovation disputes.",
  },

  {
    id: "cheapest-flooring-hdb",
    question: "What is the cheapest flooring option for HDB flats?",
    shortAnswer:
      "Vinyl flooring is the cheapest at S$3-5 per square foot installed. It's waterproof, durable, and comes in designs that mimic wood or tiles.",
    detailedAnswer: `Here's a cost comparison of flooring options for HDB flats (prices include installation):

**1. Vinyl Flooring (S$3-5 psf) - CHEAPEST**
- Total cost for 4-room HDB: S$2,700 - S$4,500
- Pros: Waterproof, easy maintenance, wide variety of designs
- Cons: Can feel less premium, may show scratches
- Best for: Budget renovations, families with young children

**2. Laminate Flooring (S$4-7 psf)**
- Total cost for 4-room HDB: S$3,600 - S$6,300
- Pros: Looks like real wood, durable surface
- Cons: Not waterproof, can't be refinished
- Best for: Bedrooms and living areas (avoid wet areas)

**3. Ceramic Tiles (S$5-10 psf)**
- Total cost for 4-room HDB: S$4,500 - S$9,000
- Pros: Extremely durable, waterproof, cooling effect
- Cons: Cold feeling, grout maintenance, harder on feet
- Best for: Kitchen, bathrooms, and balcony

**4. Engineered Wood (S$8-15 psf)**
- Total cost for 4-room HDB: S$7,200 - S$13,500
- Pros: Real wood surface, can be refinished once
- Cons: Expensive, sensitive to moisture
- Best for: Premium renovations

**Money-Saving Tip:** Use vinyl in bedrooms and living room, tiles only in kitchen and bathrooms. This combination gives you the best balance of cost and practicality.`,
    category: "materials-finishes",
    keywords: [
      "cheap flooring HDB",
      "vinyl flooring Singapore",
      "HDB flooring cost",
      "budget flooring options",
    ],
    lastUpdated: "2024-12-26",
    priority: 4,
    costRange: { min: 3, max: 15, unit: "S$/psf" },
  },

  // ==========================================
  // PERMITS & LEGAL
  // ==========================================
  {
    id: "hdb-permit-requirements",
    question: "Which renovation works require HDB permit?",
    shortAnswer:
      "HDB permits are required for hacking walls, replacing windows/doors, installing glass partitions, and any structural changes. Basic works like painting and flooring don't need permits.",
    detailedAnswer: `Understanding which works require permits helps avoid fines and delays:

**Works REQUIRING HDB Permit:**
1. Hacking of any walls (even non-structural)
2. Installation of full-height glass partitions
3. Replacement of windows and window grilles
4. Replacement of main door
5. Any structural alterations
6. Relocation of WC in bathroom
7. Installation of bay windows or planter boxes
8. AC compressor on facade/service yard

**Works NOT Requiring Permit:**
- Painting and wallpapering
- Floor finishes (tiles, vinyl, etc.)
- Kitchen cabinets and carpentry
- Electrical rewiring (but need LEW certification)
- Basic plumbing works
- False ceiling installation
- Built-in furniture

**Permit Application Process:**
1. Submit application via HDB InfoWEB or at HDB Branch
2. Include floor plans showing proposed changes
3. Pay permit fee (S$30-50)
4. Wait 7-14 working days for approval
5. Display permit at renovation site

**Important Notes:**
- Contractors usually handle permit applications
- Some works need professional engineer endorsement
- Permit validity is 3 months (extendable once)
- Fine for renovation without permit: Up to S$5,000`,
    category: "permits-legal",
    keywords: [
      "HDB permit requirements",
      "renovation permit Singapore",
      "HDB approval needed",
      "what needs permit HDB",
    ],
    lastUpdated: "2024-12-26",
    featured: true,
    priority: 5,
    sources: [
      "https://www.hdb.gov.sg/cs/infoweb/residential/living-in-an-hdb-flat/renovation/applying-for-approval",
    ],
  },

  // ==========================================
  // TIMELINE & PROCESS
  // ==========================================
  {
    id: "bto-renovation-duration",
    question: "How long does a typical BTO renovation take?",
    shortAnswer:
      "A typical 4-room BTO renovation takes 8-12 weeks from start to handover, with most completing in 10 weeks if there are no major delays.",
    detailedAnswer: `The renovation timeline depends on scope and complexity, but here's a typical breakdown:

**Standard Timeline (8-10 weeks):**
- Week 1-2: Hacking, demolition, and debris clearing
- Week 2-3: Masonry work (floor screed, wall building, tiling base)
- Week 3-5: Plumbing and electrical rough-in
- Week 4-6: Tiling for floors and walls
- Week 5-7: Carpentry installation (cabinets, wardrobes)
- Week 7-8: Painting and ceiling works
- Week 8-9: Installation of fixtures and fittings
- Week 9-10: Cleaning and touch-ups

**Factors That Add Time:**
- Extensive hacking (+1 week)
- Complex false ceiling designs (+3-5 days)
- Custom carpentry designs (+1-2 weeks)
- Material delays (variable)
- Weather delays for corridor works (+3-7 days)

**Fast-Track Timeline (6-8 weeks):**
Possible with:
- Minimal hacking
- Standard designs
- Good contractor coordination
- All materials ready upfront
- No major customization

**Delays to Expect:**
- Material shortages (especially 2024-2025)
- Permit approvals taking longer
- Multiple contractors coordination issues
- Defects rectification period

**Pro Tip:** Add 2-week buffer to contractor's promised timeline. If they say 8 weeks, plan for 10 weeks.`,
    category: "timeline-process",
    keywords: [
      "BTO renovation duration",
      "how long renovation take",
      "HDB renovation timeline",
      "4-room renovation time",
    ],
    lastUpdated: "2024-12-26",
    priority: 6,
    timeEstimate: "8-12 weeks typical",
  },

  // ==========================================
  // COMMON PROBLEMS
  // ==========================================
  {
    id: "contractor-delays-renovation",
    question: "What can I do if my contractor keeps delaying the renovation?",
    shortAnswer:
      "Document all delays, refer to contract penalties, send written notices, and withhold payments tied to incomplete milestones. For serious delays, you can file a claim with CASE or Small Claims Tribunal.",
    detailedAnswer: `Contractor delays are frustrating but manageable with the right approach:

**Immediate Actions:**
1. **Document Everything** - Keep records of promised vs actual dates
2. **Written Communication** - Send formal email/WhatsApp stating concerns
3. **Refer to Contract** - Check for delay penalties (liquidated damages)
4. **Withhold Payment** - Don't pay for incomplete milestone works

**Escalation Steps:**

**Step 1: Formal Notice**
Send written notice giving 7 days to resume work or provide explanation. State intention to terminate if no response.

**Step 2: Mediation**
- Contact CASE (Consumers Association of Singapore)
- Mediation costs ~S$250-500
- Usually resolves within 2-4 weeks

**Step 3: Legal Action**
- Small Claims Tribunal (claims up to S$20,000)
- Filing fee: S$10-50
- Self-representation allowed
- Decision within 1-2 months

**Prevention Tips:**
- Choose contractors with good track records
- Include penalty clauses (e.g., S$50/day for delays)
- Link payments to completion milestones
- Never pay too much upfront
- Get timeline commitments in writing

**Common Delay Excuses & Responses:**
- "Material shortage" → Ask for proof of order
- "Other urgent projects" → Remind of contract priority
- "Worker shortage" → Their problem to solve
- "Waiting for your decision" → Make decisions promptly in writing`,
    category: "common-problems",
    keywords: [
      "contractor delays",
      "renovation delayed",
      "contractor not completing work",
      "renovation dispute Singapore",
    ],
    lastUpdated: "2024-12-26",
    featured: true,
    priority: 7,
    warningNote: "Always keep 10-20% final payment until all works are satisfactorily completed.",
  },

  {
    id: "renovation-defects-liability",
    question: "How long is the defects liability period for renovation works?",
    shortAnswer:
      "Standard defects liability period is 12 months for structural works and 6-12 months for general renovation works. During this period, contractors must fix defects at no cost.",
    detailedAnswer: `The defects liability period protects you from poor workmanship discovered after renovation:

**Standard Defects Liability Periods:**
- Structural works: 12 months minimum
- Waterproofing: 5-10 years (specialist contractors)
- General carpentry: 6-12 months
- Electrical/plumbing: 12 months
- Painting: 6 months
- Tiling: 12 months

**What's Covered:**
✓ Peeling paint or wallpaper
✓ Loose tiles or grout
✓ Warped carpentry doors
✓ Leaking pipes or waterproofing failure
✓ Electrical faults from poor installation
✓ Cracked cement screed
✓ Faulty workmanship

**What's NOT Covered:**
✗ Normal wear and tear
✗ Damage from misuse
✗ Natural material changes (wood expansion)
✗ Owner-supplied material defects
✗ Changes in taste/preference

**How to Claim:**
1. Document defect with photos/videos
2. Notify contractor in writing immediately
3. Give reasonable time for inspection (7 days)
4. Allow access for rectification works
5. Sign off only when satisfied

**Pro Tips:**
- Do thorough inspection before final payment
- Create defects list before handover
- Keep 5-10% retention sum until defects period ends
- Take photos of completed works for reference
- Get warranties for expensive items (waterproofing, windows)`,
    category: "contractor-id",
    keywords: [
      "defects liability period",
      "renovation warranty",
      "contractor warranty Singapore",
      "renovation defects",
    ],
    lastUpdated: "2024-12-26",
    priority: 8,
  },

  // ==========================================
  // MATERIALS & FINISHES
  // ==========================================
  {
    id: "quartz-vs-solid-surface",
    question: "Should I choose quartz or solid surface for kitchen countertops?",
    shortAnswer:
      "Quartz is harder and more scratch-resistant but costs more (S$80-120/ft run). Solid surface is cheaper (S$60-90/ft run), seamless, and repairable but scratches easier.",
    detailedAnswer: `Here's a detailed comparison to help you decide:

**Quartz Countertops:**
- Price: S$80-120 per foot run
- Durability: 9/10 (extremely hard, scratch-resistant)
- Heat Resistance: Moderate (use trivets for hot pans)
- Maintenance: Low (just wipe clean, no sealing needed)
- Appearance: Natural stone look with consistent patterns
- Seams: Visible at joints
- Repairs: Difficult, chips need professional repair
- Best for: Busy kitchens, families who cook frequently

**Solid Surface (Corian/Similar):**
- Price: S$60-90 per foot run
- Durability: 7/10 (softer, can scratch but repairable)
- Heat Resistance: Low (will damage from hot pans)
- Maintenance: Low (sand out scratches yourself)
- Appearance: Uniform color, matte finish options
- Seams: Can be invisible when professionally joined
- Repairs: Easy, scratches can be buffed out
- Best for: Modern minimalist designs, budget-conscious

**Other Options to Consider:**

**Compact Laminate (S$40-60/ft run)**
- Budget-friendly, decent durability
- Good for rental properties or tight budgets

**Sintered Stone (S$100-150/ft run)**
- Premium option, extremely durable
- Heat/scratch/stain resistant
- Thin profile possible (12mm)

**Recommendation:** For most HDB kitchens, quartz offers the best value - it's durable enough for daily use and the price difference (~S$300-500 total) is worth the upgrade from solid surface.`,
    category: "materials-finishes",
    keywords: [
      "quartz vs solid surface",
      "kitchen countertop Singapore",
      "Corian vs quartz",
      "countertop materials HDB",
    ],
    lastUpdated: "2024-12-26",
    priority: 9,
    costRange: { min: 60, max: 120, unit: "S$/ft run" },
  },

  // ==========================================
  // DESIGN & PLANNING
  // ==========================================
  {
    id: "open-vs-closed-kitchen",
    question: "Should I go for open or closed kitchen design in my HDB?",
    shortAnswer:
      "Open kitchens create spacious feel and are trendy, but cooking smells spread easily. Closed kitchens contain mess and smells but feel more cramped. Consider your cooking habits.",
    detailedAnswer: `This is one of the biggest design decisions for HDB flats. Here's what to consider:

**Open Kitchen Pros:**
- Makes home feel 30-40% more spacious
- Better natural light distribution
- Easier to supervise children while cooking
- Great for entertaining guests
- Modern, trendy appearance
- Increases resale appeal to younger buyers

**Open Kitchen Cons:**
- Cooking smells spread throughout home
- Grease and steam affect nearby furniture
- Kitchen always needs to be tidy
- Requires powerful hood/exhaust system
- Noise from kitchen appliances carries

**Closed Kitchen Pros:**
- Contains cooking smells and grease
- Can be messy without affecting living space
- Better for heavy Asian-style cooking (wok hei)
- More wall space for cabinets
- Traditional buyers prefer this

**Closed Kitchen Cons:**
- Feels more cramped
- Less natural light
- Isolated when cooking
- Dated appearance to some buyers

**Compromise Solutions:**

**1. Half-Open Kitchen**
- Keep half-height wall or counter
- Install glass panels above counter
- Best of both worlds

**2. Glass Partition**
- Full-height glass doors (sliding/folding)
- Open when needed, close when cooking
- Costs extra S$3,000-5,000

**Decision Framework:**
- Cook daily with wok/heavy frying → Closed
- Light cooking/baking mainly → Open
- Young family, entertainment focus → Open
- Multi-generational living → Closed

**Resale Consideration:** Open kitchens generally appeal more to younger buyers and can add 5-10% to resale value in trendy estates.`,
    category: "design-planning",
    keywords: [
      "open vs closed kitchen",
      "HDB kitchen design",
      "open kitchen HDB",
      "kitchen layout Singapore",
    ],
    lastUpdated: "2024-12-26",
    featured: true,
    priority: 10,
    proTip:
      "If going open, invest in a good quality hood (minimum 1000 m³/hr extraction rate) to manage cooking smells.",
  },

  // ==========================================
  // More questions to be added by Claude Code as needed
  // Use the template at the top of this file
  // ==========================================
]

// Export functions for easy management
export function getQuestionsByCategory(category: string): QAItem[] {
  return questions.filter((q) => q.category === category)
}

export function getFeaturedQuestions(): QAItem[] {
  return questions
    .filter((q) => q.featured)
    .sort((a, b) => (a.priority || 100) - (b.priority || 100))
}

export function searchQuestions(query: string): QAItem[] {
  const lowerQuery = query.toLowerCase()
  return questions.filter(
    (q) =>
      q.question.toLowerCase().includes(lowerQuery) ||
      q.shortAnswer.toLowerCase().includes(lowerQuery) ||
      q.keywords.some((k) => k.toLowerCase().includes(lowerQuery))
  )
}

export function getRelatedQuestions(questionId: string): QAItem[] {
  const question = questions.find((q) => q.id === questionId)
  if (!question || !question.relatedQuestions) return []

  return question.relatedQuestions
    .map((id) => questions.find((q) => q.id === id))
    .filter((q): q is QAItem => q !== undefined)
}

// Validation for development
export function validateAllQuestions(): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  const ids = new Set<string>()

  questions.forEach((q, index) => {
    if (ids.has(q.id)) {
      errors.push(`Duplicate ID at index ${index}: ${q.id}`)
    }
    ids.add(q.id)

    if (!q.question) errors.push(`Missing question at index ${index}`)
    if (!q.shortAnswer) errors.push(`Missing short answer at index ${index}`)
    if (!q.detailedAnswer) errors.push(`Missing detailed answer at index ${index}`)
    if (!q.category) errors.push(`Missing category at index ${index}`)
    if (!q.keywords || q.keywords.length === 0) {
      errors.push(`Missing keywords at index ${index}`)
    }
  })

  return {
    valid: errors.length === 0,
    errors,
  }
}
