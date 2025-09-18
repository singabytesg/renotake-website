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
              <h3>4-3 Months Before Keys</h3>
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
              <h3>2-1 Months Before Keys</h3>
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

  "key-collection": {
    introduction:
      "Key collection day marks the official start of your homeownership journey. This critical phase involves thorough inspection, defects documentation, and understanding your rights and responsibilities as a new BTO owner.",
    quickFacts: [
      {
        label: "Inspection Window",
        value: "7 days",
        description: "To report defects",
        icon: "⏱️",
      },
      {
        label: "Defects Coverage",
        value: "12 months",
        description: "HDB liability period",
        icon: "🛡️",
      },
      {
        label: "Hidden Costs",
        value: "S$400-600",
        description: "Often forgotten expenses",
        icon: "💸",
      },
    ],
    sections: [
      {
        id: "collection-day",
        title: "The Key Collection Day",
        content: `
          <p>Your appointment at HDB Hub is more than just getting keys. It's your first official step into homeownership and the start of your renovation clock.</p>

          <h3>What Happens During Key Collection</h3>
          <ul>
            <li>Identity verification and document signing</li>
            <li>Collection of keys and access cards</li>
            <li>Briefing on defects liability period</li>
            <li>Collection of defects inspection form</li>
            <li>Handover of important documents</li>
          </ul>

          <h3>Essential Items to Bring</h3>
          <ul>
            <li>Identity cards (all owners must be present)</li>
            <li>Marriage certificate (if applicable)</li>
            <li>HDB appointment letter</li>
            <li>Payment receipt for initial payment</li>
            <li>Power of attorney (if someone collecting on your behalf)</li>
          </ul>
        `,
      },
      {
        id: "inspection",
        title: "The Critical First Site Inspection",
        content: `
          <p>Within 7 days of key collection, conduct a thorough inspection. This isn't just about finding defects - it's about understanding your canvas.</p>

          <h3>Structural Elements Check</h3>
          <ul>
            <li>Check all walls for cracks (mark with tape)</li>
            <li>Test for hollow sounds in walls (potential defects)</li>
            <li>Verify beam positions match floor plan</li>
            <li>Check ceiling for water marks or cracks</li>
          </ul>

          <h3>Windows & Doors Testing</h3>
          <ul>
            <li>Test all windows open/close smoothly</li>
            <li>Check window seals for gaps</li>
            <li>Verify main door alignment and locks</li>
            <li>Test door closer mechanism</li>
          </ul>
        `,
        subsections: [
          {
            title: "Flooring Inspection",
            content: `
              <h3>Flooring Inspection</h3>
              <ul>
                <li>Check for uneven surfaces using marble or ball test</li>
                <li>Look for cracks or chips in screed</li>
                <li>Verify floor trap positions</li>
                <li>Test water ponding in service yard</li>
              </ul>
            `,
          },
          {
            title: "Electrical & Plumbing Systems",
            content: `
              <h3>Electrical & Plumbing Systems</h3>
              <ul>
                <li>Test all power points with phone charger</li>
                <li>Check DB box labeling and breakers</li>
                <li>Verify doorbell and intercom function</li>
                <li>Turn on all taps, check water pressure</li>
                <li>Look for leaks under sinks</li>
                <li>Test toilet flush mechanism</li>
              </ul>
            `,
          },
        ],
      },
      {
        id: "defects",
        title: "Understanding Your Defects Liability Period",
        content: `
          <p>HDB provides a 12-month defects liability period (DLP) for new flats. Understanding what's covered is crucial for protecting your investment.</p>

          <h3>Covered Defects</h3>
          <ul>
            <li>Ceiling cracks and spalling concrete</li>
            <li>Water seepage (not due to renovation)</li>
            <li>Defective doors and windows</li>
            <li>Electrical and plumbing issues</li>
            <li>Floor hollowness or cracks</li>
            <li>Paint defects on pre-painted areas</li>
          </ul>

          <h3>Not Covered</h3>
          <ul>
            <li>Damage from renovation works</li>
            <li>Normal wear and tear</li>
            <li>Modifications you make</li>
            <li>Pest issues</li>
            <li>Condensation problems</li>
          </ul>

          <p><strong>Pro Tip:</strong> Document everything with photos and submit defects report within 7 days for fastest resolution. Take photos with date stamps and multiple angles.</p>
        `,
      },
      {
        id: "hidden-costs",
        title: "The Hidden Costs Nobody Mentions",
        content: `
          <p>Between key collection and renovation start, you'll encounter these often-forgotten expenses:</p>

          <ul>
            <li><strong>HDB fire insurance:</strong> S$5.50 - S$7.50/year (mandatory)</li>
            <li><strong>Service & Conservancy Charges:</strong> S$40-80/month (starts immediately)</li>
            <li><strong>Utilities account setup:</strong> S$32.10 deposit (SP Group)</li>
            <li><strong>Renovation insurance:</strong> S$250-350 (highly recommended)</li>
            <li><strong>Town council permit:</strong> S$30-50</li>
            <li><strong>Management fee deposit:</strong> 1-2 months (if applicable)</li>
          </ul>

          <p><strong>Total Hidden Costs: S$400-600 minimum</strong></p>
        `,
      },
    ],
    checklists: [
      {
        title: "Key Collection Day Checklist",
        items: [
          {
            id: "ic",
            text: "Bring all owners' ICs",
            description: "All registered owners must be present",
          },
          {
            id: "appointment",
            text: "HDB appointment letter",
            description: "Original copy required",
          },
          {
            id: "payment",
            text: "Initial payment receipt",
            description: "Proof of payment completion",
          },
          {
            id: "marriage",
            text: "Marriage certificate",
            description: "For married couples",
          },
          {
            id: "camera",
            text: "Camera or phone for photos",
            description: "To document initial condition",
          },
          {
            id: "measuring",
            text: "Measuring tape",
            description: "For verifying dimensions",
          },
        ],
      },
      {
        title: "7-Day Defects Inspection Checklist",
        items: [
          {
            id: "walls",
            text: "Check all walls for cracks",
            description: "Use marking tape to highlight issues",
          },
          {
            id: "windows",
            text: "Test all windows and locks",
            description: "Ensure smooth operation",
          },
          {
            id: "doors",
            text: "Check main door and bedroom doors",
            description: "Test alignment and closing",
          },
          {
            id: "electrical",
            text: "Test all power points",
            description: "Use phone charger or tester",
          },
          {
            id: "plumbing",
            text: "Check all water points",
            description: "Look for leaks and test pressure",
          },
          {
            id: "flooring",
            text: "Check floor levelness",
            description: "Use marble test",
          },
          {
            id: "ceiling",
            text: "Inspect ceiling for cracks",
            description: "Look for water stains",
          },
          {
            id: "submit",
            text: "Submit defects report",
            description: "Within 7 days to HDB",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Inspect thoroughly within 7 days - this is your only chance",
      "Document all defects with photos and written descriptions",
      "Submit defects report promptly for faster resolution",
      "Budget for hidden costs (S$400-600 minimum)",
      "Keep all documentation for future reference",
    ],
    commonMistakes: [
      "Rushing through inspection without proper documentation",
      "Missing the 7-day defects reporting deadline",
      "Not testing electrical and plumbing systems",
      "Forgetting to check ceiling and high areas",
      "Starting renovation before defects are fixed",
    ],
    proTips: [
      "Bring a friend who has renovated before for second opinion",
      "Use blue painter's tape to mark all defects visibly",
      "Take videos of water flow and door operations",
      "Create a WhatsApp group for defects documentation",
      "Schedule defects rectification before renovation starts",
    ],
  },

  "design-planning": {
    introduction:
      "The design phase determines 80% of your renovation outcome. This is where dreams meet reality, budgets meet desires, and compromises shape your future home. Get this right, and execution becomes straightforward.",
    quickFacts: [
      {
        label: "Planning Time",
        value: "2-4 weeks",
        description: "Don't rush this phase",
        icon: "📐",
      },
      {
        label: "Design Cost",
        value: "10-15%",
        description: "Of total budget",
        icon: "💡",
      },
      {
        label: "Changes After",
        value: "+30% cost",
        description: "Mid-renovation changes",
        icon: "⚠️",
      },
    ],
    sections: [
      {
        id: "space-planning",
        title: "Space Planning Fundamentals",
        content: `
          <p>Good space planning is invisible - you don't notice it, but you feel it every day. Poor planning becomes a daily frustration.</p>

          <h3>The Golden Rules of HDB Layout</h3>
          <ul>
            <li><strong>The 60-30-10 Rule:</strong> 60% for primary function, 30% for secondary activities, 10% for circulation</li>
            <li><strong>Natural Light Maximization:</strong> Keep spaces near windows open, use glass partitions where possible</li>
            <li><strong>Cross-Ventilation Priority:</strong> Maintain airflow paths between windows</li>
            <li><strong>Future Flexibility:</strong> Design for your life in 5 years, not just today</li>
          </ul>

          <h3>Common Layout Configurations</h3>
          <ul>
            <li><strong>Open Concept:</strong> Merging living, dining, and kitchen</li>
            <li><strong>Semi-Open:</strong> Partial walls or glass partitions</li>
            <li><strong>Traditional:</strong> Distinct rooms for each function</li>
            <li><strong>Flexible:</strong> Movable partitions for adaptability</li>
          </ul>
        `,
      },
      {
        id: "room-design",
        title: "Room-by-Room Design Decisions",
        content: `
          <p>Each room has unique requirements and opportunities. Here's your comprehensive guide to designing each space.</p>

          <h3>Living Room Design</h3>
          <ul>
            <li><strong>Layout:</strong> TV-centric vs conversation-focused</li>
            <li><strong>Storage:</strong> Built-in vs loose furniture</li>
            <li><strong>Feature Wall:</strong> Worth it or waste of money?</li>
            <li><strong>Ceiling:</strong> False ceiling vs simple cornice</li>
          </ul>

          <h3>Kitchen Planning</h3>
          <ul>
            <li><strong>Layout Types:</strong> Galley, L-shaped, U-shaped, or Island</li>
            <li><strong>Work Triangle:</strong> Stove-Sink-Fridge efficiency</li>
            <li><strong>Storage Strategy:</strong> Upper cabinets vs open shelving</li>
            <li><strong>Ventilation:</strong> Hood type affects ceiling design</li>
          </ul>
        `,
        subsections: [
          {
            title: "Master Bedroom Essentials",
            content: `
              <h3>Master Bedroom Essentials</h3>
              <ul>
                <li>Bed placement for optimal feng shui and practicality</li>
                <li>Wardrobe configuration (reach-in vs walk-in)</li>
                <li>Study corner integration possibilities</li>
                <li>Ensuite bathroom considerations (if applicable)</li>
              </ul>
            `,
          },
          {
            title: "Common Bedroom Flexibility",
            content: `
              <h3>Common Bedroom Flexibility</h3>
              <ul>
                <li>Multi-functional designs for changing needs</li>
                <li>Convertible study/guest room options</li>
                <li>Children's room with growth adaptability</li>
                <li>Work-from-home office integration</li>
              </ul>
            `,
          },
        ],
      },
      {
        id: "materials",
        title: "Material Selection Guide",
        content: `
          <p>Materials make up 40-50% of your renovation cost. Choosing wisely balances aesthetics, durability, and budget.</p>

          <h3>Flooring Options Comparison</h3>
          <ul>
            <li><strong>Vinyl (SPC/WPC):</strong> S$4-12/sqft - Waterproof, comfortable, easy maintenance</li>
            <li><strong>Laminate:</strong> S$3-10/sqft - Affordable, decent durability, not waterproof</li>
            <li><strong>Tiles:</strong> S$5-20/sqft - Durable, cooling effect, joint maintenance</li>
            <li><strong>Engineered Wood:</strong> S$8-18/sqft - Premium look, comfortable, requires care</li>
          </ul>

          <h3>Kitchen Countertop Materials</h3>
          <ul>
            <li><strong>Quartz:</strong> S$80-150/ft run - Durable, non-porous, consistent patterns</li>
            <li><strong>Granite:</strong> S$60-120/ft run - Natural beauty, heat resistant, needs sealing</li>
            <li><strong>Solid Surface:</strong> S$100-180/ft run - Seamless, repairable, moderate heat resistance</li>
            <li><strong>Kompacplus:</strong> S$40-80/ft run - Budget-friendly, decent durability</li>
          </ul>
        `,
      },
      {
        id: "storage",
        title: "Smart Storage Solutions",
        content: `
          <p>In HDB flats, every square foot counts. Smart storage isn't just about having more space - it's about using space intelligently.</p>

          <h3>High-ROI Storage Investments</h3>
          <ul>
            <li><strong>Platform Bed Storage:</strong> Utilizes dead space under bed</li>
            <li><strong>Full-Height Cabinets:</strong> Maximizes vertical space</li>
            <li><strong>Multi-functional Furniture:</strong> Ottoman storage, dining benches</li>
            <li><strong>Hidden Storage:</strong> Behind mirrors, under stairs</li>
          </ul>

          <h3>Room-Specific Storage Ideas</h3>
          <ul>
            <li><strong>Living:</strong> TV console with drawers, window seat storage</li>
            <li><strong>Kitchen:</strong> Pull-out drawers, corner solutions, pantry systems</li>
            <li><strong>Bedroom:</strong> Wardrobe internals, bedside built-ins</li>
            <li><strong>Bathroom:</strong> Mirror cabinets, vanity storage, niche shelving</li>
          </ul>
        `,
      },
      {
        id: "mistakes",
        title: "Design Mistakes That Cost Thousands",
        content: `
          <p>Learn from others' expensive mistakes to protect your budget and sanity.</p>

          <h3>Over-designing the False Ceiling</h3>
          <ul>
            <li>Complex designs cost S$40-60/sqft vs S$25/sqft for simple</li>
            <li>L-box with cove lighting = maintenance nightmare</li>
            <li>Lower ceiling height affects resale value</li>
            <li><strong>Better Alternative:</strong> Simple cornice with strategic spotlights</li>
          </ul>

          <h3>Wrong Flooring Choices</h3>
          <ul>
            <li>Marble/tiles in bedrooms = cold feet, higher aircon usage</li>
            <li>Dark floors show every speck of dust</li>
            <li>Cheap vinyl peels within 2 years</li>
            <li><strong>Smart Choice:</strong> Quality SPC vinyl or laminate for living areas</li>
          </ul>

          <h3>Insufficient Electrical Planning</h3>
          <ul>
            <li>Adding points after renovation costs S$100-200 each</li>
            <li>Forgetting USB points, phone charging stations</li>
            <li>Poor switch placement (behind doors, furniture)</li>
            <li><strong>Pro Tip:</strong> Add 30% more points than you think you need</li>
          </ul>
        `,
      },
    ],
    costBreakdown: [
      {
        item: "Vinyl/SPC Flooring",
        basic: "S$4-5/sqft",
        standard: "S$6-8/sqft",
        premium: "S$9-12/sqft",
        unit: "Per square foot",
      },
      {
        item: "False Ceiling",
        basic: "S$20-25/sqft",
        standard: "S$30-35/sqft",
        premium: "S$40-60/sqft",
        unit: "Per square foot",
      },
      {
        item: "Kitchen Cabinets",
        basic: "S$150-200/ft",
        standard: "S$250-350/ft",
        premium: "S$400-600/ft",
        unit: "Per foot run",
      },
      {
        item: "Wardrobe",
        basic: "S$250-300/ft",
        standard: "S$350-450/ft",
        premium: "S$500-800/ft",
        unit: "Per foot run",
      },
      {
        item: "Bathroom Upgrade",
        basic: "S$3,000-5,000",
        standard: "S$5,000-8,000",
        premium: "S$8,000-15,000",
        unit: "Per bathroom",
      },
    ],
    checklists: [
      {
        title: "Design Decision Checklist",
        items: [
          {
            id: "layout",
            text: "Finalize room layout and walls to hack",
            description: "Cannot change after starting",
          },
          {
            id: "flooring",
            text: "Select flooring type for each area",
            description: "Consider maintenance and comfort",
          },
          {
            id: "ceiling",
            text: "Decide on ceiling treatment",
            description: "False ceiling vs cornice",
          },
          {
            id: "kitchen-layout",
            text: "Confirm kitchen configuration",
            description: "Work triangle efficiency",
          },
          {
            id: "storage",
            text: "Plan all built-in storage",
            description: "Maximize every corner",
          },
          {
            id: "electrical",
            text: "Mark all electrical and data points",
            description: "Include future needs",
          },
          {
            id: "lighting",
            text: "Design lighting scheme",
            description: "Layer ambient, task, accent",
          },
          {
            id: "color",
            text: "Choose color palette",
            description: "Paint, materials, fixtures",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Spend 2-4 weeks on design - rushing costs more later",
      "Function over form - beautiful but impractical = daily frustration",
      "Plan electrical points generously (+30% buffer)",
      "Choose materials based on lifestyle, not just looks",
      "Design for future flexibility, not just current needs",
    ],
    commonMistakes: [
      "Copying designs without considering lifestyle",
      "Over-investing in trendy features",
      "Under-planning storage needs",
      "Ignoring maintenance requirements",
      "Not considering furniture placement",
    ],
    proTips: [
      "Visit friends' completed renovations for real insights",
      "Test material samples in your actual flat lighting",
      "Mock up layouts with masking tape on floors",
      "Consider resale value for major decisions",
      "Keep 10% design buffer for spontaneous upgrades",
    ],
  },

  "contractor-selection": {
    introduction:
      "Finding the right contractor can make or break your renovation. This phase is about evaluation, negotiation, and protection. The cheapest quote is rarely the best value, and the most expensive isn't always highest quality.",
    quickFacts: [
      {
        label: "Evaluation Time",
        value: "2-3 weeks",
        description: "Don't rush this decision",
        icon: "🔍",
      },
      {
        label: "Quote Variance",
        value: "30-50%",
        description: "Between contractors",
        icon: "📊",
      },
      {
        label: "Savings Potential",
        value: "S$5k-10k",
        description: "Through negotiation",
        icon: "💰",
      },
    ],
    sections: [
      {
        id: "types",
        title: "Types of Contractors in Singapore",
        content: `
          <p>Understanding the different types helps you choose the right fit for your project and budget.</p>

          <h3>Interior Design (ID) Firms</h3>
          <ul>
            <li><strong>Services:</strong> Design + project management + execution</li>
            <li><strong>Cost:</strong> 20-30% premium over direct contractors</li>
            <li><strong>Best for:</strong> First-timers, busy professionals, design-focused projects</li>
            <li><strong>Pros:</strong> One-stop solution, design expertise, single point of contact</li>
            <li><strong>Cons:</strong> Higher cost, less control, potential markups</li>
          </ul>

          <h3>Direct Contractors</h3>
          <ul>
            <li><strong>Services:</strong> Execution based on your plans</li>
            <li><strong>Cost:</strong> Most economical option</li>
            <li><strong>Best for:</strong> Clear vision, experienced renovators, tight budgets</li>
            <li><strong>Pros:</strong> Lower cost, direct control, transparent pricing</li>
            <li><strong>Cons:</strong> Need to coordinate, no design help, more time needed</li>
          </ul>

          <h3>Project Management Firms</h3>
          <ul>
            <li><strong>Services:</strong> Coordination without design</li>
            <li><strong>Cost:</strong> 10-15% management fee</li>
            <li><strong>Best for:</strong> Those with design but need coordination</li>
            <li><strong>Pros:</strong> Professional coordination, cost savings vs ID</li>
            <li><strong>Cons:</strong> Additional layer, still need design separately</li>
          </ul>
        `,
      },
      {
        id: "vetting",
        title: "The 5-Step Vetting Process",
        content: `
          <p>Systematic vetting prevents heartache and financial loss. Follow this proven process.</p>

          <h3>Step 1: Initial Screening (8-10 contractors)</h3>
          <ul>
            <li>Get recommendations from: Qanvast, RenoGuru, Facebook groups</li>
            <li>Check company registration (ACRA)</li>
            <li>Verify HDB Licensed Renovator status</li>
            <li>Review online presence and portfolio</li>
          </ul>

          <h3>Step 2: Detailed Evaluation (Top 5)</h3>
          <ul>
            <li>Review past projects similar to yours</li>
            <li>Check Google/Facebook reviews (look for patterns)</li>
            <li>Request client references from last 6 months</li>
            <li>Evaluate communication responsiveness</li>
          </ul>

          <h3>Step 3: Face-to-Face Meetings (Top 3)</h3>
          <ul>
            <li>Meet at their office/showroom (red flag if they refuse)</li>
            <li>Bring floor plan and inspiration photos</li>
            <li>Discuss timeline and payment terms</li>
            <li>Gauge chemistry and professionalism</li>
          </ul>
        `,
        subsections: [
          {
            title: "Step 4: Site Visits",
            content: `
              <h3>Step 4: Site Visits</h3>
              <ul>
                <li>Visit their current ongoing projects</li>
                <li>Check workmanship quality firsthand</li>
                <li>Observe site management and cleanliness</li>
                <li>Talk to current clients if possible</li>
              </ul>
            `,
          },
          {
            title: "Step 5: Final Decision",
            content: `
              <h3>Step 5: Final Decision</h3>
              <ul>
                <li>Compare detailed quotations line by line</li>
                <li>Negotiate terms and pricing</li>
                <li>Verify insurance coverage</li>
                <li>Review contract thoroughly before signing</li>
              </ul>
            `,
          },
        ],
      },
      {
        id: "quotations",
        title: "Decoding Renovation Quotations",
        content: `
          <p>A quotation reveals more than just price - it shows professionalism, transparency, and attention to detail.</p>

          <h3>Red Flags in Quotations</h3>
          <ul>
            <li>Lump sum pricing without breakdown</li>
            <li>"Subject to site conditions" everywhere</li>
            <li>No brand/model specifications</li>
            <li>Unusually low prices (likely hidden costs)</li>
            <li>No timeline specified</li>
            <li>Cash-only payment terms</li>
          </ul>

          <h3>What Good Quotations Include</h3>
          <ul>
            <li>Detailed line-item breakdown</li>
            <li>Clear specifications (brands, models, dimensions)</li>
            <li>Unit rates and quantities</li>
            <li>Timeline with milestones</li>
            <li>Payment schedule tied to progress</li>
            <li>Warranty terms clearly stated</li>
          </ul>

          <h3>Hidden Costs to Watch For</h3>
          <ul>
            <li>Disposal fees not included</li>
            <li>Protection/cleaning charges</li>
            <li>Permit application fees</li>
            <li>GST not clearly stated</li>
            <li>"Optional" items that are actually essential</li>
          </ul>
        `,
      },
      {
        id: "negotiation",
        title: "Negotiation Strategies That Work",
        content: `
          <p>Negotiation isn't just about price - it's about value, terms, and protection.</p>

          <h3>What's Negotiable</h3>
          <ul>
            <li><strong>Payment Terms:</strong> Push for more backend loading</li>
            <li><strong>Timeline Buffer:</strong> Add penalty clauses for delays</li>
            <li><strong>Material Upgrades:</strong> Better quality at same price</li>
            <li><strong>Additional Works:</strong> Small add-ons at no cost</li>
            <li><strong>Warranty Period:</strong> Extend from 1 to 2 years</li>
          </ul>

          <h3>What's Usually Fixed</h3>
          <ul>
            <li>Labor costs (market rates)</li>
            <li>Disposal fees (fixed by NEA)</li>
            <li>HDB permit fees</li>
            <li>Basic material costs</li>
          </ul>

          <h3>Power Negotiation Tactics</h3>
          <ul>
            <li>Get quotes during off-peak periods (Oct-Nov, Feb-Mar)</li>
            <li>Bundle more work for better rates</li>
            <li>Offer favorable payment terms for discount</li>
            <li>Be flexible on start date</li>
            <li>Always get competing quotes for leverage</li>
          </ul>
        `,
      },
      {
        id: "contract",
        title: "Contract Deep Dive",
        content: `
          <p>Your contract is your protection. Never sign without understanding every clause.</p>

          <h3>Essential Contract Clauses</h3>

          <h4>1. Scope of Work</h4>
          <ul>
            <li>Detailed item list with specifications</li>
            <li>Clear inclusion/exclusion list</li>
            <li>Brand and model numbers</li>
          </ul>

          <h4>2. Timeline</h4>
          <ul>
            <li>Start and completion dates</li>
            <li>Milestone schedule</li>
            <li>Delay penalties (S$50-100/day typical)</li>
          </ul>

          <h4>3. Payment Terms</h4>
          <ul>
            <li>Progressive payment schedule</li>
            <li>Never more than 30% upfront</li>
            <li>Hold back 5-10% for defects</li>
          </ul>

          <h4>4. Variations</h4>
          <ul>
            <li>How changes are priced</li>
            <li>Approval process required</li>
            <li>Documentation needed</li>
          </ul>

          <h4>5. Warranty</h4>
          <ul>
            <li>Minimum 1 year workmanship</li>
            <li>What's covered/excluded</li>
            <li>Response time for issues</li>
          </ul>
        `,
      },
    ],
    costBreakdown: [
      {
        item: "Hacking Works",
        basic: "S$500-800",
        standard: "S$800-1,200",
        premium: "S$1,200-1,500",
        unit: "Per wall",
      },
      {
        item: "Electrical Point",
        basic: "S$60-70",
        standard: "S$80-90",
        premium: "S$100-150",
        unit: "Per point",
      },
      {
        item: "Plumbing Point",
        basic: "S$100-120",
        standard: "S$130-150",
        premium: "S$160-200",
        unit: "Per point",
      },
      {
        item: "Painting",
        basic: "S$1.50-2/sqft",
        standard: "S$2.50-3/sqft",
        premium: "S$3.50-5/sqft",
        unit: "Per square foot",
      },
      {
        item: "Tiling Works",
        basic: "S$5-6/sqft",
        standard: "S$7-9/sqft",
        premium: "S$10-15/sqft",
        unit: "Labor only",
      },
    ],
    checklists: [
      {
        title: "Contractor Evaluation Checklist",
        items: [
          {
            id: "registration",
            text: "Verify business registration (ACRA)",
            description: "Check company is legitimate",
          },
          {
            id: "hdb-license",
            text: "Confirm HDB Licensed Renovator status",
            description: "Required for HDB renovations",
          },
          {
            id: "insurance",
            text: "Check insurance coverage",
            description: "Public liability and workman comp",
          },
          {
            id: "portfolio",
            text: "Review relevant past projects",
            description: "Similar flat type and style",
          },
          {
            id: "reviews",
            text: "Read recent customer reviews",
            description: "Look for patterns in feedback",
          },
          {
            id: "references",
            text: "Contact 2-3 recent clients",
            description: "Ask about experience and issues",
          },
          {
            id: "quotation",
            text: "Get detailed written quotation",
            description: "With full breakdown and specs",
          },
          {
            id: "contract",
            text: "Review contract thoroughly",
            description: "Understand all terms and warranties",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Never choose based on price alone - cheapest often becomes most expensive",
      "Verify credentials: ACRA, HDB license, insurance",
      "Get everything in writing - verbal promises mean nothing",
      "Payment terms matter as much as total price",
      "Good contractors are booked 2-3 months ahead",
    ],
    commonMistakes: [
      "Paying more than 30% upfront",
      "Not checking contractor credentials",
      "Accepting lump sum quotations",
      "Skipping site visits to ongoing projects",
      "Signing contracts without understanding terms",
    ],
    proTips: [
      "Visit contractors during Chinese New Year for better deals",
      "Always get 3 detailed quotes for comparison",
      "Pay extra for proper contracts and documentation",
      "Check if contractor is cash-only (red flag)",
      "Join estate-specific renovation groups for recommendations",
    ],
  },

  "permits-regulations": {
    introduction:
      "HDB has strict guidelines to ensure structural integrity, fire safety, and harmonious living. Violating these can result in stop-work orders, fines, and forcing you to restore original conditions at your cost. Knowledge here saves money and stress.",
    quickFacts: [
      {
        label: "Permit Processing",
        value: "3-7 days",
        description: "Plan accordingly",
        icon: "📋",
      },
      {
        label: "Permit Cost",
        value: "S$30",
        description: "Standard application",
        icon: "💵",
      },
      {
        label: "Fine Range",
        value: "S$200-5,000",
        description: "For violations",
        icon: "⚠️",
      },
    ],
    sections: [
      {
        id: "guidelines",
        title: "Understanding HDB Renovation Guidelines",
        content: `
          <p>HDB guidelines aren't suggestions - they're legal requirements. Understanding them prevents costly mistakes and legal issues.</p>

          <h3>Why Guidelines Exist</h3>
          <ul>
            <li><strong>Structural Safety:</strong> Prevent building collapse</li>
            <li><strong>Fire Safety:</strong> Maintain escape routes</li>
            <li><strong>Noise Control:</strong> Peaceful living environment</li>
            <li><strong>Uniformity:</strong> Maintain estate appearance</li>
            <li><strong>Services Protection:</strong> Prevent utility disruptions</li>
          </ul>

          <h3>Consequences of Violations</h3>
          <ul>
            <li>Immediate stop-work order</li>
            <li>Fines from S$200 to S$5,000</li>
            <li>Forced restoration at your cost</li>
            <li>Legal action for serious breaches</li>
            <li>Difficulty selling flat in future</li>
          </ul>
        `,
      },
      {
        id: "permits",
        title: "Permits Required vs Not Required",
        content: `
          <p>Knowing what needs permits saves time and prevents violations.</p>

          <h3>Permit REQUIRED (via HDB InfoWEB)</h3>
          <ul>
            <li><strong>Hacking of walls</strong> - Any wall removal</li>
            <li><strong>Relocation of toilets/kitchens</strong> - Affecting plumbing</li>
            <li><strong>Bay window installation</strong> - Approved designs only</li>
            <li><strong>Structural alterations</strong> - Beams, columns</li>
            <li><strong>Storage heater installation</strong> - Not instant heaters</li>
            <li><strong>Full bathroom overlay</strong> - Affecting waterproofing</li>
          </ul>

          <h3>Permit NOT Required (But Must Follow Guidelines)</h3>
          <ul>
            <li>Painting works</li>
            <li>Basic flooring installation</li>
            <li>Carpentry and built-in furniture</li>
            <li>Aircon installation (ledge/bracket requirements)</li>
            <li>Minor electrical works</li>
            <li>Replacement of sanitary fittings</li>
          </ul>
        `,
      },
      {
        id: "application",
        title: "Permit Application Process",
        content: `
          <p>The application is straightforward if you're prepared. Here's the step-by-step guide.</p>

          <h3>Step 1: Login to HDB InfoWEB</h3>
          <ul>
            <li>Use SingPass for authentication</li>
            <li>Navigate to e-Services > Renovation</li>
            <li>Select your flat address</li>
          </ul>

          <h3>Step 2: Submit Application</h3>
          <ul>
            <li>Upload floor plan with proposed changes (PDF format)</li>
            <li>Mark all walls to be hacked in red</li>
            <li>Indicate type of works clearly</li>
            <li>Provide contractor details (must be HDB registered)</li>
          </ul>

          <h3>Step 3: Payment</h3>
          <ul>
            <li>S$30 standard application fee</li>
            <li>PayNow or credit card accepted</li>
            <li>Keep receipt for records</li>
          </ul>

          <h3>Step 4: Await Approval</h3>
          <ul>
            <li>Usually 3-7 working days</li>
            <li>Check email for updates</li>
            <li>May receive queries requiring clarification</li>
          </ul>

          <h3>Step 5: Receive Permit</h3>
          <ul>
            <li>Download and print permit</li>
            <li>Display at renovation site</li>
            <li>Valid for 3 months</li>
            <li>Can extend if needed (additional fee)</li>
          </ul>
        `,
      },
      {
        id: "dos-donts",
        title: "Detailed Do's and Don'ts",
        content: `
          <p>These rules are non-negotiable. Violating them leads to enforcement action.</p>

          <h3>STRUCTURAL WORKS</h3>

          <h4>✅ CAN DO:</h4>
          <ul>
            <li>Remove non-structural walls (check plan)</li>
            <li>Install false ceiling (minimum 2.4m height)</li>
            <li>Overlay flooring (maximum 50mm thick)</li>
            <li>Build partition walls (with permit)</li>
          </ul>

          <h4>❌ CANNOT DO:</h4>
          <ul>
            <li>Hack structural walls/columns/beams</li>
            <li>Alter bomb shelter in ANY way</li>
            <li>Exceed floor loading (150kg/sqm)</li>
            <li>Reduce ceiling height below 2.4m</li>
          </ul>

          <h3>WINDOWS & FACADES</h3>

          <h4>✅ CAN DO:</h4>
          <ul>
            <li>Install invisible grilles</li>
            <li>Add non-reflective window films</li>
            <li>Install approved bay window designs</li>
            <li>Change internal window handles</li>
          </ul>

          <h4>❌ CANNOT DO:</h4>
          <ul>
            <li>Change window frame color</li>
            <li>Install external awnings/shades</li>
            <li>Add protruding grilles</li>
            <li>Block service yard openings</li>
            <li>Alter facade appearance</li>
          </ul>
        `,
        subsections: [
          {
            title: "Wet Areas & Waterproofing",
            content: `
              <h3>Wet Areas & Waterproofing</h3>
              <h4>✅ CAN DO:</h4>
              <ul>
                <li>Waterproof bathroom floors properly</li>
                <li>Install bathroom accessories</li>
                <li>Change sanitary fittings</li>
                <li>Add bathroom storage</li>
              </ul>

              <h4>❌ CANNOT DO:</h4>
              <ul>
                <li>Relocate bathrooms without approval</li>
                <li>Remove original floor traps</li>
                <li>Compromise waterproofing membrane</li>
                <li>Install bathtub in common toilet (usually)</li>
              </ul>
            `,
          },
          {
            title: "Electrical & Aircon Works",
            content: `
              <h3>Electrical & Aircon Works</h3>
              <h4>✅ CAN DO:</h4>
              <ul>
                <li>Add power points (licensed electrician)</li>
                <li>Install ceiling fans</li>
                <li>Upgrade DB box to 40amp</li>
                <li>Install aircon on designated ledges</li>
              </ul>

              <h4>❌ CANNOT DO:</h4>
              <ul>
                <li>Exceed 40amp total loading</li>
                <li>Bypass safety devices</li>
                <li>DIY electrical DB work</li>
                <li>Install aircon beyond ledge capacity</li>
              </ul>
            `,
          },
        ],
      },
      {
        id: "penalties",
        title: "Penalties for Non-Compliance",
        content: `
          <p>HDB takes violations seriously. Here's what you risk by not following rules.</p>

          <h3>Common Violations and Penalties</h3>
          <ul>
            <li><strong>No permit for required works:</strong> Warning + Stop Work, then S$500-1,000 fine</li>
            <li><strong>Unauthorized structural changes:</strong> S$500 fine + restoration cost</li>
            <li><strong>Illegal window works:</strong> S$200 fine + removal</li>
            <li><strong>Working outside permitted hours:</strong> Warning, then S$300-500 fine</li>
            <li><strong>Damage to common property:</strong> Repair cost + possible fine</li>
          </ul>

          <h3>Working Hours Regulations</h3>

          <h4>Permitted Renovation Hours:</h4>
          <ul>
            <li><strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM</li>
            <li><strong>Saturday:</strong> 9:00 AM - 1:00 PM</li>
            <li><strong>Sunday & Public Holidays:</strong> NO WORK ALLOWED</li>
          </ul>

          <h4>Noisy Works (Hacking, Drilling):</h4>
          <ul>
            <li>Weekdays only: 9:00 AM - 5:00 PM</li>
            <li>Maximum 3 hours continuous</li>
            <li>Not allowed on weekends</li>
          </ul>

          <h3>Good Neighbor Practices</h3>
          <ul>
            <li>Inform neighbors 3 days before start</li>
            <li>Display permit and schedule visibly</li>
            <li>Cover common areas during material transport</li>
            <li>Daily cleanup of corridors</li>
            <li>Provide contractor contact for complaints</li>
          </ul>
        `,
      },
    ],
    checklists: [
      {
        title: "Permit Application Checklist",
        items: [
          {
            id: "floor-plan",
            text: "Prepare floor plan with changes marked",
            description: "Walls to hack in red",
          },
          {
            id: "contractor-details",
            text: "Gather contractor information",
            description: "Company name, UEN, license number",
          },
          {
            id: "singpass",
            text: "Ensure SingPass is active",
            description: "Required for application",
          },
          {
            id: "payment",
            text: "Prepare payment method",
            description: "PayNow or credit card",
          },
          {
            id: "timeline",
            text: "Apply 1 week before starting",
            description: "Allow processing time",
          },
        ],
      },
      {
        title: "Compliance Checklist",
        items: [
          {
            id: "structural",
            text: "Verify all walls to hack are non-structural",
            description: "Check with floor plan",
          },
          {
            id: "bomb-shelter",
            text: "Ensure bomb shelter unchanged",
            description: "No modifications allowed",
          },
          {
            id: "windows",
            text: "Check window works compliance",
            description: "No external changes",
          },
          {
            id: "ceiling-height",
            text: "Maintain 2.4m minimum ceiling height",
            description: "After false ceiling",
          },
          {
            id: "floor-loading",
            text: "Calculate floor loading",
            description: "Maximum 150kg/sqm",
          },
          {
            id: "working-hours",
            text: "Brief contractor on working hours",
            description: "Avoid complaints and fines",
          },
          {
            id: "display-permit",
            text: "Display permit at site",
            description: "Visible from corridor",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Always apply for permits 1 week before starting work",
      "Never hack structural walls - check plans carefully",
      "Bomb shelter cannot be modified in any way",
      "Working hours are strictly enforced - inform your contractor",
      "Display permit visibly to avoid complaints",
    ],
    commonMistakes: [
      "Starting work before permit approval",
      "Hacking walls without checking if structural",
      "Modifying bomb shelter for storage",
      "Working outside permitted hours",
      "Changing window frames or external appearance",
    ],
    proTips: [
      "Apply for permit immediately after contractor selection",
      "Take photos of original condition before starting",
      "Keep all approval documents for flat sale later",
      "Join estate WhatsApp groups to coordinate noisy works",
      "Consider neighbors' exam periods when scheduling hacking",
    ],
  },

  "renovation-process": {
    introduction:
      "The next 8-10 weeks will transform your bare concrete shell into a home. This phase is about execution, coordination, and quality control. Knowing what happens when helps you spot problems early and ensure quality outcomes.",
    quickFacts: [
      {
        label: "Total Duration",
        value: "8-10 weeks",
        description: "With no delays",
        icon: "📅",
      },
      {
        label: "Critical Period",
        value: "Weeks 1-3",
        description: "Foundation work",
        icon: "🎯",
      },
      {
        label: "Site Visits",
        value: "2-3x/week",
        description: "Recommended frequency",
        icon: "👁️",
      },
    ],
    sections: [
      {
        id: "timeline",
        title: "The 8-Week Renovation Timeline",
        content: `
          <p>Understanding the sequence prevents delays and ensures quality. Here's what happens week by week.</p>

          <h3>Week 1-2: Demolition & Rough Works</h3>
          <ul>
            <li>Protection of floors and common areas</li>
            <li>Hacking of walls (if any)</li>
            <li>Debris disposal</li>
            <li>Rough electrical and plumbing routing</li>
          </ul>
          <p><strong>What to Check:</strong> Proper protection installed, accurate hacking per plan, no damage to structural elements</p>

          <h3>Week 3-4: Construction & Infrastructure</h3>
          <ul>
            <li>Build new partition walls</li>
            <li>Electrical wiring installation</li>
            <li>Plumbing pipe routing</li>
            <li>Ceiling framework construction</li>
          </ul>
          <p><strong>What to Check:</strong> Electrical point positions, water point locations, ceiling height maintained</p>

          <h3>Week 5-6: Finishing Rough Works</h3>
          <ul>
            <li>Plastering and skim coating</li>
            <li>Waterproofing application</li>
            <li>Tiling works start</li>
            <li>Ceiling boards installation</li>
          </ul>
          <p><strong>What to Check:</strong> Surface smoothness, tile alignment, waterproofing coverage</p>

          <h3>Week 7: Carpentry & Final Finishes</h3>
          <ul>
            <li>Carpentry installation begins</li>
            <li>Kitchen setup</li>
            <li>Painting works</li>
            <li>Door installation</li>
          </ul>
          <p><strong>What to Check:</strong> Alignment, gaps, paint quality, door operations</p>

          <h3>Week 8: Final Installations & Touch-ups</h3>
          <ul>
            <li>Electrical fixtures and switches</li>
            <li>Plumbing fixtures</li>
            <li>Glass and mirrors</li>
            <li>Final painting touches</li>
            <li>Thorough cleaning</li>
          </ul>
          <p><strong>What to Check:</strong> Everything works, no visible defects, site cleaned</p>
        `,
      },
      {
        id: "management",
        title: "Managing Your Renovation Remotely",
        content: `
          <p>Can't be on site daily? Here's how to stay in control remotely.</p>

          <h3>Essential Communication Setup</h3>
          <ul>
            <li><strong>WhatsApp Group:</strong> Create with contractor, key workers</li>
            <li><strong>Photo Protocol:</strong> Daily progress photos required</li>
            <li><strong>Video Calls:</strong> Weekly virtual walk-throughs</li>
            <li><strong>Documentation:</strong> Google Photos album for all updates</li>
          </ul>

          <h3>Daily Site Management Protocol</h3>

          <h4>Morning Check-in (9 AM)</h4>
          <ul>
            <li>Contractor sends photos of workers on site</li>
            <li>Confirms day's work scope</li>
            <li>Raises any issues requiring decisions</li>
          </ul>

          <h4>Afternoon Update (2 PM)</h4>
          <ul>
            <li>Progress photos of ongoing work</li>
            <li>Any variations or changes needed</li>
            <li>Material delivery confirmations</li>
          </ul>

          <h4>End-of-Day Report (6 PM)</h4>
          <ul>
            <li>Completed works documentation</li>
            <li>Tomorrow's plan confirmation</li>
            <li>Any urgent matters requiring attention</li>
          </ul>

          <h3>Remote Monitoring Tools</h3>
          <ul>
            <li><strong>Security Camera:</strong> Temporary WiFi camera for live monitoring</li>
            <li><strong>Time-lapse App:</strong> Daily progress visualization</li>
            <li><strong>Project Management App:</strong> Track tasks and milestones</li>
            <li><strong>Cloud Storage:</strong> All documentation in one place</li>
          </ul>
        `,
      },
      {
        id: "checkpoints",
        title: "Quality Control Checkpoints",
        content: `
          <p>Catching issues early saves time and money. Here are critical inspection points.</p>

          <h3>After Hacking (Day 2-3)</h3>
          <ul>
            <li>Walls hacked according to plan</li>
            <li>No damage to structural elements</li>
            <li>No cracks in remaining walls</li>
            <li>Debris properly bagged for disposal</li>
            <li>Floors protected from damage</li>
          </ul>

          <h3>After Electrical/Plumbing Rough-in (Week 2)</h3>
          <ul>
            <li>Count all electrical points against plan</li>
            <li>Verify positions (not behind furniture)</li>
            <li>Check water point accessibility</li>
            <li>Ensure proper pipe gradients</li>
            <li>Conduits properly secured</li>
          </ul>

          <h3>After Tiling (Week 4)</h3>
          <ul>
            <li>Tiles level (use spirit level)</li>
            <li>Consistent gaps between tiles</li>
            <li>No hollow tiles (tap test)</li>
            <li>Proper floor gradient to drains</li>
            <li>Clean, consistent grout lines</li>
          </ul>

          <h3>After Carpentry (Week 7)</h3>
          <ul>
            <li>All doors/drawers open smoothly</li>
            <li>No visible gaps or misalignment</li>
            <li>Soft-close mechanisms working</li>
            <li>Interior finishing acceptable</li>
            <li>All handles and accessories installed</li>
          </ul>
        `,
      },
      {
        id: "issues",
        title: "Dealing with Common Issues",
        content: `
          <p>Problems are inevitable. Here's how to handle them professionally.</p>

          <h3>Issue 1: Timeline Delays</h3>
          <ul>
            <li><strong>Common Causes:</strong> Material shortage, weather, manpower issues</li>
            <li><strong>Prevention:</strong> Order materials early, avoid peak periods</li>
            <li><strong>Solution:</strong> Enforce penalty clauses, escalate if needed</li>
            <li><strong>Red Flag:</strong> Delays beyond 2 weeks without valid reason</li>
          </ul>

          <h3>Issue 2: Budget Overruns</h3>
          <ul>
            <li><strong>Common Causes:</strong> Scope creep, hidden conditions, upgrades</li>
            <li><strong>Prevention:</strong> Detailed quotation, resist changes</li>
            <li><strong>Solution:</strong> Use 10-15% contingency fund</li>
            <li><strong>Red Flag:</strong> Contractor asking for money outside schedule</li>
          </ul>

          <h3>Issue 3: Quality Issues</h3>
          <ul>
            <li><strong>Common Causes:</strong> Rushing, poor supervision, cheap materials</li>
            <li><strong>Prevention:</strong> Regular inspections, clear specifications</li>
            <li><strong>Solution:</strong> Document defects, withhold payment</li>
            <li><strong>Red Flag:</strong> Contractor avoiding site visits</li>
          </ul>

          <h3>Issue 4: Neighbor Complaints</h3>
          <ul>
            <li><strong>Common Causes:</strong> Noise, debris, corridor obstruction</li>
            <li><strong>Prevention:</strong> Proper notice, strict hours, daily cleanup</li>
            <li><strong>Solution:</strong> Immediate response, contractor liability</li>
            <li><strong>Red Flag:</strong> Multiple complaints from different neighbors</li>
          </ul>
        `,
      },
      {
        id: "materials",
        title: "Material Delivery Coordination",
        content: `
          <p>Proper material management prevents delays and damage. Here's the optimal schedule.</p>

          <h3>Delivery Timeline</h3>
          <ul>
            <li><strong>Week 1:</strong> Protection materials, hacking tools</li>
            <li><strong>Week 2:</strong> Cement, sand, electrical/plumbing materials</li>
            <li><strong>Week 3:</strong> Tiles, waterproofing materials</li>
            <li><strong>Week 4:</strong> More tiles, ceiling materials</li>
            <li><strong>Week 5:</strong> Doors, toilet fittings</li>
            <li><strong>Week 6:</strong> Carpentry materials (progressive)</li>
            <li><strong>Week 7:</strong> Paint, finishing materials</li>
            <li><strong>Week 8:</strong> Fixtures, final fittings</li>
          </ul>

          <h3>Storage Management</h3>
          <ul>
            <li>Designate one room for materials</li>
            <li>Ensure proper ventilation for chemicals</li>
            <li>Stack tiles properly to prevent cracking</li>
            <li>Protect materials from moisture</li>
            <li>Lock valuable items (taps, switches)</li>
            <li>Take delivery photos for documentation</li>
          </ul>

          <h3>Delivery Day Protocol</h3>
          <ul>
            <li>Someone must be present to receive</li>
            <li>Check quantity against order</li>
            <li>Inspect for damage immediately</li>
            <li>Document with photos</li>
            <li>Get delivery receipt signed</li>
          </ul>
        `,
      },
    ],
    checklists: [
      {
        title: "Weekly Site Inspection Checklist",
        items: [
          {
            id: "progress",
            text: "Check work progress against schedule",
            description: "Should match timeline",
          },
          {
            id: "quality",
            text: "Inspect quality of completed work",
            description: "Look for defects",
          },
          {
            id: "materials",
            text: "Verify correct materials used",
            description: "Match specifications",
          },
          {
            id: "cleanliness",
            text: "Check site cleanliness",
            description: "Safety and neighbor relations",
          },
          {
            id: "workers",
            text: "Observe worker competence",
            description: "Proper techniques used",
          },
          {
            id: "protection",
            text: "Ensure protection maintained",
            description: "Floors, windows, fixtures",
          },
          {
            id: "documentation",
            text: "Take progress photos",
            description: "For records and issues",
          },
        ],
      },
      {
        title: "Material Delivery Checklist",
        items: [
          {
            id: "schedule",
            text: "Confirm delivery date/time",
            description: "Coordinate with site",
          },
          {
            id: "access",
            text: "Ensure site access",
            description: "Someone present to receive",
          },
          {
            id: "quantity",
            text: "Check quantity delivered",
            description: "Match against order",
          },
          {
            id: "quality",
            text: "Inspect for damage",
            description: "Before accepting delivery",
          },
          {
            id: "storage",
            text: "Proper storage arranged",
            description: "Protected from elements",
          },
          {
            id: "documentation",
            text: "Get signed delivery receipt",
            description: "Keep for records",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Week 1-3 are critical - foundation work determines everything",
      "Visit site 2-3 times weekly, especially during critical phases",
      "Document everything with photos - protection for disputes",
      "Address issues immediately - delays compound problems",
      "Never pay ahead of schedule - payment is your leverage",
    ],
    commonMistakes: [
      "Not visiting site regularly during initial weeks",
      "Allowing work to proceed with quality issues",
      "Making changes mid-renovation (expensive!)",
      "Poor communication with contractor",
      "Not documenting problems when they occur",
    ],
    proTips: [
      "Visit site early morning to catch workers starting",
      "Bring measuring tape to verify dimensions",
      "Mark any issues with painter's tape immediately",
      "Keep a renovation diary with daily notes",
      "Build relationship with site supervisor for better outcomes",
    ],
  },

  "quality-checks": {
    introduction:
      "The handover phase is your last chance to ensure everything meets standards before final payment. This critical stage requires thorough inspection, clear documentation, and firm resolution of any issues.",
    quickFacts: [
      {
        label: "Inspection Time",
        value: "3-4 hours",
        description: "For thorough check",
        icon: "🔍",
      },
      {
        label: "Typical Defects",
        value: "20-30 items",
        description: "Average per project",
        icon: "📝",
      },
      {
        label: "Rectification",
        value: "3-7 days",
        description: "Standard timeline",
        icon: "🔧",
      },
    ],
    sections: [
      {
        id: "checklist",
        title: "The Comprehensive Handover Checklist",
        content: `
          <p>A systematic inspection ensures nothing is missed. Check every item methodically.</p>

          <h3>General Finishing</h3>
          <ul>
            <li>All walls smooth, no visible patches or uneven areas</li>
            <li>Paint color consistent throughout, no streaks or drips</li>
            <li>Skirting properly aligned and secured</li>
            <li>No gaps between wall and ceiling</li>
            <li>All switch plates level and properly installed</li>
          </ul>

          <h3>Flooring</h3>
          <ul>
            <li>No scratches, stains, or damage</li>
            <li>Consistent level throughout (no lips)</li>
            <li>Skirting no gaps against floor</li>
            <li>Transition strips properly installed</li>
            <li>No hollow sounds (especially tiles)</li>
          </ul>

          <h3>Doors & Windows</h3>
          <ul>
            <li>All doors open/close smoothly without sticking</li>
            <li>Locks function properly and smoothly</li>
            <li>No gaps when doors are closed</li>
            <li>Door stoppers installed and functional</li>
            <li>Window locks secure and operational</li>
          </ul>

          <h3>Kitchen</h3>
          <ul>
            <li>Cabinet doors aligned (no crooked doors)</li>
            <li>Drawers slide smoothly on tracks</li>
            <li>Countertop no chips, stains, or scratches</li>
            <li>Sink properly sealed with no gaps</li>
            <li>Hood and hob working correctly</li>
            <li>All accessories installed (handles, organizers)</li>
          </ul>

          <h3>Bathrooms</h3>
          <ul>
            <li>Tiles no cracks, chips, or hollow spots</li>
            <li>Grout lines clean and consistent</li>
            <li>Floor gradient correct (water flows to drain)</li>
            <li>All fixtures securely mounted</li>
            <li>Water heater functioning properly</li>
            <li>Accessories installed (towel bars, hooks)</li>
          </ul>

          <h3>Electrical Systems</h3>
          <ul>
            <li>All lights working with correct switches</li>
            <li>Power points tested with actual plug</li>
            <li>Switches labeled correctly if needed</li>
            <li>DB box properly organized and labeled</li>
            <li>No exposed wiring anywhere</li>
          </ul>

          <h3>Plumbing</h3>
          <ul>
            <li>All taps functioning with good pressure</li>
            <li>No leaks anywhere (check under sinks)</li>
            <li>Water pressure adequate throughout</li>
            <li>Drains flow properly without gurgling</li>
            <li>Toilet flushes completely and refills properly</li>
          </ul>
        `,
      },
      {
        id: "defects",
        title: "Documenting Defects Effectively",
        content: `
          <p>Proper documentation ensures all issues are addressed. Be thorough and specific.</p>

          <h3>The Defects Documentation Process</h3>

          <h4>Step 1: Mark Physical Defects</h4>
          <ul>
            <li>Use blue painter's tape to mark issues</li>
            <li>Number each defect sequentially</li>
            <li>Write number on tape with marker</li>
          </ul>

          <h4>Step 2: Photograph Everything</h4>
          <ul>
            <li>Take wide shot showing location</li>
            <li>Take close-up showing defect detail</li>
            <li>Include measuring tape for scale if relevant</li>
            <li>Ensure good lighting for clarity</li>
          </ul>

          <h4>Step 3: Create Written List</h4>
          <ul>
            <li>Number matches the physical marking</li>
            <li>Describe location precisely</li>
            <li>Describe defect specifically</li>
            <li>Indicate required rectification</li>
          </ul>

          <h4>Step 4: Share with Contractor</h4>
          <ul>
            <li>Send via WhatsApp immediately</li>
            <li>Also email for formal record</li>
            <li>Request acknowledgment of receipt</li>
            <li>Set rectification timeline (usually 7 days)</li>
          </ul>

          <h3>Common Defects to Look For</h3>
          <ul>
            <li><strong>Paint:</strong> Drips, uneven coverage, wrong shade</li>
            <li><strong>Carpentry:</strong> Gaps, misalignment, rough edges</li>
            <li><strong>Tiles:</strong> Uneven spacing, lippage, hollow spots</li>
            <li><strong>Electrical:</strong> Non-functioning points, wrong switch</li>
            <li><strong>Doors:</strong> Don't close properly, gaps, scratches</li>
            <li><strong>Surfaces:</strong> Scratches on new surfaces</li>
            <li><strong>Fixtures:</strong> Loose mounting, missing parts</li>
          </ul>
        `,
      },
      {
        id: "payment",
        title: "Final Payment Considerations",
        content: `
          <p>Final payment is your last leverage. Use it wisely to ensure satisfaction.</p>

          <h3>Before Final Payment Checklist</h3>
          <ul>
            <li>All defects from list rectified satisfactorily</li>
            <li>Site thoroughly cleaned (including windows)</li>
            <li>All keys handed over (main door, bedroom, mailbox)</li>
            <li>Warranty documentation received</li>
            <li>As-built drawings provided (if applicable)</li>
            <li>All surplus materials returned or accounted for</li>
          </ul>

          <h3>Payment Best Practices</h3>
          <ul>
            <li>Withhold 5-10% until all defects cleared</li>
            <li>Get written confirmation of warranty terms</li>
            <li>Ensure contractor contactable for warranty</li>
            <li>Pay by traceable method (not cash)</li>
            <li>Get official receipt for payment</li>
          </ul>

          <h3>Red Flags to Watch For</h3>
          <ul>
            <li>Pressure to pay before defects fixed</li>
            <li>Refusal to provide warranty in writing</li>
            <li>Incomplete rectification claimed as "normal"</li>
            <li>Additional charges for defect rectification</li>
            <li>Contractor becoming uncontactable</li>
          </ul>
        `,
      },
      {
        id: "documents",
        title: "Important Documents to Collect",
        content: `
          <p>These documents are crucial for warranty claims and future reference.</p>

          <h3>Essential Documents Checklist</h3>
          <ul>
            <li><strong>Warranty Cards:</strong> All items with warranty</li>
            <li><strong>Instruction Manuals:</strong> Appliances and systems</li>
            <li><strong>Electrical Certificate:</strong> If major electrical work done</li>
            <li><strong>Waterproofing Warranty:</strong> Usually 5 years</li>
            <li><strong>Carpentry Care Instructions:</strong> Maintenance guide</li>
            <li><strong>Paint Color Codes:</strong> For future touch-ups</li>
            <li><strong>Material Specifications:</strong> Tiles, flooring details</li>
            <li><strong>Contractor Details:</strong> Contact for warranty claims</li>
          </ul>

          <h3>Digital Documentation</h3>
          <ul>
            <li>Scan all physical documents</li>
            <li>Create cloud backup folder</li>
            <li>Organize by category</li>
            <li>Share with spouse/family</li>
            <li>Set calendar reminders for warranty expiry</li>
          </ul>

          <h3>Photo Documentation</h3>
          <ul>
            <li>Final photos of each room</li>
            <li>Close-ups of special features</li>
            <li>Hidden areas (behind cabinets, etc.)</li>
            <li>Electrical/plumbing access points</li>
            <li>Before-after comparison shots</li>
          </ul>
        `,
      },
    ],
    checklists: [
      {
        title: "Final Handover Checklist",
        items: [
          {
            id: "defects-cleared",
            text: "All defects rectified",
            description: "Check against original list",
          },
          {
            id: "functionality",
            text: "Everything functioning properly",
            description: "Test all systems",
          },
          {
            id: "cleanliness",
            text: "Site professionally cleaned",
            description: "Including windows and debris",
          },
          {
            id: "keys",
            text: "All keys received",
            description: "Main door, rooms, mailbox",
          },
          {
            id: "documents",
            text: "Warranty documents collected",
            description: "All warranties in writing",
          },
          {
            id: "materials",
            text: "Surplus materials returned",
            description: "Or accounted for",
          },
          {
            id: "touch-up",
            text: "Touch-up paint provided",
            description: "For future use",
          },
          {
            id: "contacts",
            text: "Emergency contacts provided",
            description: "For warranty issues",
          },
        ],
      },
      {
        title: "Room-by-Room Inspection",
        items: [
          {
            id: "living",
            text: "Living room checked thoroughly",
            description: "Walls, floor, ceiling, electrical",
          },
          {
            id: "kitchen",
            text: "Kitchen fully inspected",
            description: "Cabinets, countertop, appliances",
          },
          {
            id: "master",
            text: "Master bedroom checked",
            description: "Including built-in wardrobes",
          },
          {
            id: "common",
            text: "Common bedrooms inspected",
            description: "All aspects checked",
          },
          {
            id: "bathrooms",
            text: "All bathrooms tested",
            description: "Plumbing, tiles, fixtures",
          },
          {
            id: "service",
            text: "Service yard checked",
            description: "Drainage, washing point",
          },
          {
            id: "entrance",
            text: "Main entrance area",
            description: "Door, locks, intercom",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Never rush the handover - take 3-4 hours minimum",
      "Document every defect with photos and descriptions",
      "Withhold final payment until all issues resolved",
      "Get all warranties and documents before final payment",
      "Test everything - better to find issues now than later",
    ],
    commonMistakes: [
      "Rushing inspection due to excitement",
      "Not documenting defects properly",
      "Paying in full before defects cleared",
      "Not getting warranties in writing",
      "Accepting 'that's normal' for actual defects",
    ],
    proTips: [
      "Bring a friend who's renovated before for second opinion",
      "Inspect during daytime for best visibility",
      "Use phone flashlight to check dark corners",
      "Run water in all areas for 5 minutes to check drainage",
      "Take videos of all moving parts (doors, drawers) operating",
    ],
  },

  "post-renovation": {
    introduction:
      "Congratulations on your newly renovated home! The first few months are crucial for identifying issues, establishing maintenance routines, and ensuring your renovation investment lasts. Here's how to protect your investment.",
    quickFacts: [
      {
        label: "Warranty Period",
        value: "12 months",
        description: "Typical coverage",
        icon: "🛡️",
      },
      {
        label: "Settlement Time",
        value: "3 months",
        description: "For materials to stabilize",
        icon: "⏳",
      },
      {
        label: "Maintenance Cost",
        value: "S$100-200/year",
        description: "Average upkeep",
        icon: "🔧",
      },
    ],
    sections: [
      {
        id: "settling",
        title: "First Month: Living with Fresh Renovation",
        content: `
          <p>Your new renovation needs time to settle. The first month reveals issues that only become apparent through daily use.</p>

          <h3>What to Expect</h3>
          <ul>
            <li><strong>Paint Smell:</strong> Run exhaust fans frequently, will dissipate in 2-3 weeks</li>
            <li><strong>Minor Cracks:</strong> Hairline cracks from settling are normal</li>
            <li><strong>Doors Adjustment:</strong> May need minor adjustments as they settle</li>
            <li><strong>Tile Sounds:</strong> Some clicking from thermal expansion initially</li>
          </ul>

          <h3>Daily Observations</h3>
          <ul>
            <li>Check for water marks after using bathrooms</li>
            <li>Monitor paint for bubbling or peeling</li>
            <li>Test all electrical points under actual load</li>
            <li>Note any unusual sounds from flooring</li>
            <li>Watch for gaps developing in carpentry</li>
          </ul>

          <h3>Immediate Actions Needed</h3>
          <ul>
            <li><strong>Water Leaks:</strong> Address within 24 hours</li>
            <li><strong>Electrical Issues:</strong> Stop using, call electrician</li>
            <li><strong>Major Cracks:</strong> Document and notify contractor</li>
            <li><strong>Mold Growth:</strong> Improve ventilation immediately</li>
          </ul>
        `,
      },
      {
        id: "checks",
        title: "The 30-60-90 Day Checks",
        content: `
          <p>Systematic checks at intervals catch problems while still under warranty.</p>

          <h3>30-Day Check</h3>
          <ul>
            <li><strong>Paint:</strong> Fully cured, check for defects</li>
            <li><strong>Carpentry:</strong> Doors/drawers may need adjustment</li>
            <li><strong>Plumbing:</strong> Check for slow leaks under sinks</li>
            <li><strong>Electrical:</strong> Ensure all points working properly</li>
            <li><strong>Action:</strong> Create list for contractor follow-up</li>
          </ul>

          <h3>60-Day Check</h3>
          <ul>
            <li><strong>Tiles:</strong> Check for any popping or hollow sounds</li>
            <li><strong>Walls:</strong> Monitor any cracks for growth</li>
            <li><strong>Silicone:</strong> Check all seals intact</li>
            <li><strong>Aircon:</strong> First servicing due</li>
            <li><strong>Action:</strong> Schedule rectification if needed</li>
          </ul>

          <h3>90-Day Check</h3>
          <ul>
            <li><strong>Comprehensive Review:</strong> Walk through entire flat</li>
            <li><strong>Final Defects List:</strong> Last chance for warranty claims</li>
            <li><strong>Deep Clean:</strong> Post-renovation deep cleaning</li>
            <li><strong>Documentation:</strong> Photo record of current state</li>
            <li><strong>Action:</strong> Submit final warranty claims</li>
          </ul>
        `,
      },
      {
        id: "maintenance",
        title: "Maintenance Schedule",
        content: `
          <p>Regular maintenance prevents costly repairs and extends renovation lifespan.</p>

          <h3>Monthly Tasks</h3>
          <ul>
            <li><strong>Aircon Filters:</strong> Clean or rinse filters</li>
            <li><strong>Bathroom Drains:</strong> Clear hair and debris</li>
            <li><strong>Carpentry:</strong> Wipe down with appropriate cleaner</li>
            <li><strong>Check Points:</strong> Test all electrical/water points</li>
            <li><strong>Floor Traps:</strong> Pour water to maintain seal</li>
          </ul>

          <h3>Quarterly Tasks</h3>
          <ul>
            <li><strong>Deep Clean:</strong> Exhaust fans and range hood</li>
            <li><strong>Silicone Seals:</strong> Check and clean bathroom seals</li>
            <li><strong>Tile Grout:</strong> Clean and check for damage</li>
            <li><strong>Aircon Service:</strong> Professional cleaning</li>
            <li><strong>Pest Check:</strong> Look for signs of infestation</li>
          </ul>

          <h3>Annual Tasks</h3>
          <ul>
            <li><strong>Touch-up Paint:</strong> Address scuffs and marks</li>
            <li><strong>Re-seal:</strong> Silicone in wet areas if needed</li>
            <li><strong>Service Appliances:</strong> All major appliances</li>
            <li><strong>Deep Inspection:</strong> Check for developing issues</li>
            <li><strong>Update Documentation:</strong> Keep warranty records current</li>
          </ul>

          <h3>Material-Specific Care</h3>

          <h4>Vinyl/Laminate Flooring</h4>
          <ul>
            <li>Sweep/vacuum regularly</li>
            <li>Damp mop weekly (not wet)</li>
            <li>No harsh chemicals</li>
            <li>Felt pads on furniture legs</li>
          </ul>

          <h4>Quartz Countertops</h4>
          <ul>
            <li>Daily wipe with mild soap</li>
            <li>No abrasive cleaners</li>
            <li>Use cutting boards always</li>
            <li>Avoid extreme heat directly</li>
          </ul>

          <h4>Carpentry</h4>
          <ul>
            <li>Dust regularly</li>
            <li>Avoid excess moisture</li>
            <li>Adjust hinges if needed</li>
            <li>Oil drawer tracks annually</li>
          </ul>
        `,
      },
      {
        id: "warranty",
        title: "Warranty Claims Process",
        content: `
          <p>Understanding warranty coverage and claims process ensures you get issues fixed without cost.</p>

          <h3>Typical Warranty Periods</h3>
          <ul>
            <li><strong>Workmanship:</strong> 12 months (standard)</li>
            <li><strong>Waterproofing:</strong> 5 years (HDB requirement)</li>
            <li><strong>Carpentry:</strong> 12 months for defects</li>
            <li><strong>Electrical:</strong> 12 months for installation</li>
            <li><strong>Tiling:</strong> 6-12 months for popping</li>
            <li><strong>Paint:</strong> 6 months for peeling/bubbling</li>
          </ul>

          <h3>What's Covered vs Not Covered</h3>

          <h4>Typically Covered:</h4>
          <ul>
            <li>Workmanship defects</li>
            <li>Material failures (if contractor supplied)</li>
            <li>Installation issues</li>
            <li>Premature wear (within reason)</li>
          </ul>

          <h4>Typically NOT Covered:</h4>
          <ul>
            <li>Normal wear and tear</li>
            <li>Damage from misuse</li>
            <li>Customer-supplied materials</li>
            <li>Changes in preference</li>
            <li>Force majeure events</li>
          </ul>

          <h3>Making a Successful Claim</h3>

          <h4>Step 1: Document the Issue</h4>
          <ul>
            <li>Take clear photos/videos</li>
            <li>Note when issue first appeared</li>
            <li>Describe impact on use</li>
          </ul>

          <h4>Step 2: Contact Contractor</h4>
          <ul>
            <li>Use written communication (WhatsApp/Email)</li>
            <li>Reference warranty terms</li>
            <li>Be specific about problem</li>
            <li>Request timeline for inspection</li>
          </ul>

          <h4>Step 3: Follow Up</h4>
          <ul>
            <li>If no response in 3 days, escalate</li>
            <li>Keep all communication records</li>
            <li>Be firm but professional</li>
          </ul>

          <h4>Step 4: Resolution</h4>
          <ul>
            <li>Get rectification schedule in writing</li>
            <li>Be present during repairs</li>
            <li>Test thoroughly after fix</li>
            <li>Get written confirmation of completion</li>
          </ul>

          <h3>If Contractor Unresponsive</h3>
          <ul>
            <li><strong>Small Claims Tribunal:</strong> For claims under S$20,000</li>
            <li><strong>CASE:</strong> File complaint with consumer association</li>
            <li><strong>HDB:</strong> If contractor is HDB registered</li>
            <li><strong>Legal Letter:</strong> Last resort, but effective</li>
          </ul>
        `,
      },
    ],
    checklists: [
      {
        title: "Monthly Maintenance Checklist",
        items: [
          {
            id: "aircon",
            text: "Clean aircon filters",
            description: "Rinse and dry thoroughly",
          },
          {
            id: "drains",
            text: "Clear all drain covers",
            description: "Remove hair and debris",
          },
          {
            id: "electrical",
            text: "Test ELCB/RCCB",
            description: "Press test button monthly",
          },
          {
            id: "carpentry",
            text: "Wipe down all carpentry",
            description: "Use appropriate cleaner",
          },
          {
            id: "floors",
            text: "Deep clean floors",
            description: "Mop with suitable cleaner",
          },
          {
            id: "windows",
            text: "Clean windows and tracks",
            description: "Prevent buildup",
          },
        ],
      },
      {
        title: "90-Day Final Check",
        items: [
          {
            id: "paint",
            text: "Check all painted surfaces",
            description: "Look for peeling or bubbles",
          },
          {
            id: "tiles",
            text: "Tap test all tiles",
            description: "Check for hollow sounds",
          },
          {
            id: "carpentry",
            text: "Test all doors and drawers",
            description: "Adjust if needed",
          },
          {
            id: "plumbing",
            text: "Check for leaks",
            description: "Under sinks and toilets",
          },
          {
            id: "electrical",
            text: "Test all points with load",
            description: "Use actual appliances",
          },
          {
            id: "silicone",
            text: "Inspect all seals",
            description: "Bathrooms and kitchen",
          },
          {
            id: "document",
            text: "Document all issues",
            description: "Submit warranty claims",
          },
        ],
      },
    ],
    keyTakeaways: [
      "First 90 days are critical - monitor closely for warranty claims",
      "Regular maintenance prevents expensive repairs later",
      "Document all issues immediately with photos",
      "Keep all warranty documents organized and accessible",
      "Build good relationship with contractor for smoother warranty claims",
    ],
    commonMistakes: [
      "Not documenting issues within warranty period",
      "Skipping regular maintenance tasks",
      "Using wrong cleaning products on surfaces",
      "Ignoring small issues until they become major",
      "Losing warranty documentation",
    ],
    proTips: [
      "Set phone reminders for maintenance tasks",
      "Keep spare touch-up paint for quick fixes",
      "Join your BTO WhatsApp group for shared experiences",
      "Take photos every month to track changes",
      "Service aircon before warranty expires for baseline",
    ],
  },
}

export function getPhaseContent(phaseSlug: string): PhaseContentData | null {
  return phaseContentMap[phaseSlug] || null
}
