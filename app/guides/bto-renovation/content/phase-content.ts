interface PhaseContentData {
  introduction: string
  quickFacts?: Array<{
    label: string
    value: string
    description?: string
    icon?: string
  }>
  sections: Array<{
    id: string
    title: string
    content: string
    subsections?: Array<{
      title: string
      content: string
    }>
    expandable?: boolean
  }>
  costBreakdown?: Array<{
    item: string
    basic: string
    standard: string
    premium: string
    unit?: string
    notes?: string
  }>
  checklists?: Array<{
    title: string
    items: Array<{
      id: string
      text: string
      description?: string
    }>
  }>
  keyTakeaways?: string[]
  commonMistakes?: string[]
  proTips?: string[]
}

const phaseContentMap: Record<string, PhaseContentData> = {
  "pre-collection-planning": {
    introduction:
      "Starting your renovation journey 6 months before key collection gives you a massive advantage. You'll have time to research thoroughly, compare options carefully, and avoid the 'BTO Rush' that drives prices up and quality down.",
    quickFacts: [
      {
        label: "Ideal Start Time",
        value: "6 months",
        description: "Before key collection",
        icon: "📅",
      },
      {
        label: "Planning Budget",
        value: "S$0",
        description: "Research is free!",
        icon: "💰",
      },
      {
        label: "Time Investment",
        value: "2-3 hrs/week",
        description: "Worth every minute",
        icon: "⏰",
      },
    ],
    sections: [
      {
        id: "timeline",
        title: "The 6-Month Countdown Timeline",
        content: `
          <p>Most BTO owners make a critical mistake - they only start planning after collecting keys. By starting 6 months early, you'll avoid the stress and rushed decisions that lead to overspending and regret.</p>

          <h3>6 Months Before Keys</h3>
          <ul>
            <li>Start collecting inspiration from Pinterest, Instagram, and home magazines</li>
            <li>Set a preliminary budget range (be realistic!)</li>
            <li>Research renovation styles that match your lifestyle</li>
            <li>Join BTO renovation groups specific to your project</li>
          </ul>

          <h3>5 Months Before Keys</h3>
          <ul>
            <li>Define your must-haves versus nice-to-haves</li>
            <li>Start researching contractors and interior designers</li>
            <li>Visit home improvement exhibitions like MegaHome or HomeDec</li>
            <li>Create a digital renovation folder to organize ideas</li>
          </ul>
        `,
        subsections: [
          {
            title: "4-3 Months Before Keys",
            content: `
              <p>This is when you move from research to active engagement:</p>
              <ul>
                <li>Shortlist 5-8 potential contractors or IDs</li>
                <li>Schedule preliminary meetings</li>
                <li>Get rough quotations based on floor plans</li>
                <li>Research material options and current prices</li>
              </ul>
            `,
          },
          {
            title: "2-1 Months Before Keys",
            content: `
              <p>Decision time is approaching:</p>
              <ul>
                <li>Narrow down to your top 3 contractors</li>
                <li>Request detailed quotations</li>
                <li>Visit their previous projects if possible</li>
                <li>Check reviews and verify credentials</li>
                <li>Secure renovation loan if needed</li>
              </ul>
            `,
          },
        ],
      },
      {
        id: "budget",
        title: "Budget Planning & Reality Check",
        content: `
          <p>Let's address the elephant in the room - money. Based on 2024-2025 data from actual Singapore BTO owners, here's what you need to know about renovation costs.</p>

          <p>The average BTO renovation costs between S$30,000 to S$60,000 for a 4-room flat. But this varies widely based on your choices and priorities.</p>
        `,
      },
      {
        id: "contractor-research",
        title: "Early Contractor Research",
        content: `
          <p>Starting your contractor search early gives you leverage. You're not desperate, so you can negotiate better and walk away from bad deals.</p>

          <h3>Where to Find Contractors</h3>
          <ul>
            <li><strong>Online Platforms:</strong> Qanvast, RenoGuru, Hometrust</li>
            <li><strong>Social Media:</strong> Facebook groups, Instagram portfolios</li>
            <li><strong>Exhibitions:</strong> MegaHome, HomeDec, Expo events</li>
            <li><strong>Referrals:</strong> Friends, family, colleagues</li>
          </ul>
        `,
      },
      {
        id: "lifestyle-audit",
        title: "Lifestyle Audit Questions",
        content: `
          <p>Before diving into design choices, understand how you actually live. These questions will guide your renovation priorities:</p>

          <ul>
            <li><strong>Cooking habits:</strong> How often do you cook? This determines kitchen investment</li>
            <li><strong>Work from home:</strong> Need a dedicated workspace or study?</li>
            <li><strong>Family planning:</strong> Expecting kids? Plan for safety and future room conversions</li>
            <li><strong>Social life:</strong> Host frequently? Prioritize living and dining areas</li>
            <li><strong>Parents/guests:</strong> Regular visitors? Consider accessibility and guest rooms</li>
          </ul>
        `,
      },
      {
        id: "documentation",
        title: "Essential Documentation",
        content: `
          <p>Start gathering these documents early - you'll need them throughout the renovation process:</p>
        `,
      },
    ],
    costBreakdown: [
      {
        item: "2-Room Flexi",
        basic: "S$15k-25k",
        standard: "S$25k-35k",
        premium: "S$35k-50k",
        unit: "36-45 sqm",
      },
      {
        item: "3-Room",
        basic: "S$20k-30k",
        standard: "S$30k-45k",
        premium: "S$45k-65k",
        unit: "60-65 sqm",
      },
      {
        item: "4-Room",
        basic: "S$30k-40k",
        standard: "S$40k-60k",
        premium: "S$60k-85k",
        unit: "85-90 sqm",
      },
      {
        item: "5-Room",
        basic: "S$40k-55k",
        standard: "S$55k-75k",
        premium: "S$75k-100k+",
        unit: "110-130 sqm",
      },
    ],
    checklists: [
      {
        title: "Pre-Planning Documentation Checklist",
        items: [
          {
            id: "floor-plan",
            text: "Download HDB floor plan from HDB portal",
            description: "You'll need this for all quotations",
          },
          {
            id: "site-plan",
            text: "Site plan showing flat orientation",
            description: "Important for understanding natural light",
          },
          {
            id: "electrical",
            text: "Electrical layout plan",
            description: "Shows existing power point locations",
          },
          {
            id: "specs",
            text: "BTO project specifications booklet",
            description: "Contains important technical details",
          },
          {
            id: "town-council",
            text: "Town council renovation rules",
            description: "Specific rules for your estate",
          },
          {
            id: "financial",
            text: "Financial documents for renovation loan",
            description: "If you plan to take a loan",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Starting 6 months early saves an average of S$5,000-8,000",
      "80% of budget overruns happen due to poor planning",
      "Contractors are 20-30% more expensive during peak periods",
      "Research and planning cost nothing but save thousands",
    ],
    commonMistakes: [
      "Starting only after key collection (rushed decisions)",
      "Setting unrealistic budgets (S$20k for everything)",
      "Not checking contractor credentials properly",
      "Focusing only on aesthetics, ignoring functionality",
      "No buffer budget for unexpected costs",
    ],
    proTips: [
      "Join BTO groups 1 year before key collection for best insights",
      "Visit at least 3 completed projects before choosing a contractor",
      "Always get itemized quotations, never lump sum",
      "Screenshot everything - prices, designs, conversations",
      "Book contractors 2-3 months in advance for better rates",
    ],
  },
  // Add more phases here...
}

export function getPhaseContent(phaseSlug: string): PhaseContentData | null {
  return phaseContentMap[phaseSlug] || null
}
