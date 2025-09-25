interface ContentSection {
  title: string
  content?: string[]
  list?: string[]
  permitTable?: {
    headers: string[]
    rows: string[][]
    caption?: string
  }
  checklist?: {
    name: string
    description?: string
    required: boolean
    category?: string
  }[]
  timeline?: {
    stages: {
      name: string
      duration: string
      description: string
      status?: "completed" | "current" | "pending"
    }[]
  }
  processSteps?: {
    title: string
    description: string
    duration?: string
    documents?: string[]
    tip?: string
  }[]
  rejectionReasons?: {
    reason: string
    description: string
    solution: string
    frequency?: "Common" | "Very Common" | "Rare"
  }[]
  costBreakdown?: {
    headers: string[]
    rows: (string | number)[][]
  }
  alert?: {
    type: "warning" | "info" | "cost"
    title: string
    content: string
  }
  highlight?: {
    title: string
    content: string
  }
  warning?: {
    title: string
    content: string
  }
}

interface PartContent {
  slug: string
  sections: ContentSection[]
}

const partContents: PartContent[] = [
  {
    slug: "which-renovations-need-permits",
    sections: [
      {
        title: "Understanding HDB Permit Requirements",
        content: [
          "The HDB renovation permit system is a critical risk management mechanism designed to protect the structural integrity of Singapore's public housing. Understanding which renovations require permits is your first step to ensuring a compliant and smooth renovation process.",
          "The level of regulatory scrutiny applied to any renovation is directly proportional to the potential risk that work poses to the building's structure, waterproofing, and fire safety measures. This risk-based approach ensures that high-risk activities undergo rigorous review while allowing flexibility for minor cosmetic changes.",
        ],
      },
      {
        title: "Complete Permit Requirement Schedule",
        permitTable: {
          headers: ["Renovation Type", "Permit Required", "Key Requirements", "Processing Time"],
          rows: [
            [
              "Demolition/Hacking of Walls",
              "Yes - Always|red",
              "Structural assessment required",
              "2-3 weeks",
            ],
            ["Relocation of Doors", "Yes - Always|red", "Involves wall hacking", "2-3 weeks"],
            [
              "Floor Hacking & Replacement",
              "Yes - If Hacking|yellow",
              "50mm max thickness",
              "1-2 weeks",
            ],
            ["Floor Overlay (Vinyl/Laminate)", "No|green", "Direct overlay only", "N/A"],
            [
              "Bathroom/Toilet (BTO <3 years)",
              "Prohibited|red",
              "3-year waterproofing rule",
              "Not Allowed",
            ],
            [
              "Bathroom/Toilet (After 3 years)",
              "Yes - Always|red",
              "PUB Licensed Plumber required",
              "2-3 weeks",
            ],
            ["Window Replacement", "Yes - Always|red", "BCA-approved contractor", "2-3 weeks"],
            [
              "Main Door (Fire Escape Route)",
              "Yes - Always|red",
              "Half-hour fire-rated door",
              "2-3 weeks",
            ],
            [
              "Electrical Works (>30A)",
              "Yes - If Upgrading|yellow",
              "Licensed Electrical Worker",
              "1-2 weeks",
            ],
            [
              "Air-Con Installation (External)",
              "Report Required|yellow",
              "Installation report to HDB",
              "1 week",
            ],
            ["Painting Walls", "No|green", "HDB-registered contractor", "N/A"],
            ["Built-in Furniture", "No|green", "No structural changes", "N/A"],
          ],
          caption:
            "Note: All works must be carried out by HDB-registered contractors, even if no permit is required",
        },
      },
      {
        title: "Prohibited Works - Never Allowed",
        content: [
          "Certain renovation works are strictly prohibited to ensure the absolute safety and structural soundness of HDB buildings. These are non-negotiable restrictions, and any attempt to carry them out constitutes a serious offence.",
        ],
        list: [
          "Hacking of structural members (RC walls, columns, beams, floor slabs)",
          "Excessive floor loading (>150 kg/sqm)",
          "Plastering or skim coating of ceilings",
          "Replacement with full-height or three-quarter height windows",
          "Unauthorized balcony enclosure without PE approval",
        ],
        warning: {
          title: "Severe Penalties for Prohibited Works",
          content:
            "Attempting prohibited works can result in immediate stop-work orders, fines up to S$5,000, mandatory reinstatement at your cost, and potential criminal prosecution. Never proceed with prohibited works under any circumstances.",
        },
      },
      {
        title: "BTO-Specific Restrictions",
        content: [
          "New BTO flat owners face additional restrictions designed to protect the integrity of newly constructed units and honor warranty periods.",
        ],
        highlight: {
          title: "3-Year Waterproofing Moratorium",
          content:
            "For new BTO flats, there is a strict three-year restriction from the block's completion date during which hacking of original bathroom/toilet floor and wall tiles is prohibited. This protects the HDB-provided waterproofing membrane and honors the warranty period.",
        },
      },
      {
        title: "When Professional Engineers Are Required",
        content: [
          "Certain complex renovations require the expertise of a Qualified Person (QP) or Professional Engineer (PE) registered with the Professional Engineers Board of Singapore:",
        ],
        list: [
          "Demolition of non-load bearing reinforced concrete elements",
          "Enclosure of balconies (requires SCDF fire safety clearance)",
          "Any alteration HDB's technical department deems requiring professional certification",
          "Complex structural assessments beyond standard wall removal",
        ],
      },
    ],
  },
  {
    slug: "application-process",
    sections: [
      {
        title: "The HDB Permit Application Journey",
        content: [
          "The HDB renovation permit application is a formal, structured process with distinct phases. While the administrative submission is performed by your contractor, as the homeowner, you bear ultimate legal responsibility for ensuring accuracy and compliance.",
          "Understanding each step of the process helps you work effectively with your contractor and avoid delays that could push back your renovation timeline by weeks.",
        ],
      },
      {
        title: "Step-by-Step Application Process",
        processSteps: [
          {
            title: "Engage HDB-Registered Contractor",
            description:
              "Your first and most critical step is engaging a contractor currently listed in HDB's Directory of Renovation Contractors (DRC). Only DRC-registered contractors can submit permit applications.",
            duration: "1-2 days",
            documents: ["Contractor's DRC registration number", "Valid business registration"],
            tip: "Verify contractor status on HDB InfoWEB before signing any agreement. Check their demerit points history.",
          },
          {
            title: "Prepare Floor Plans",
            description:
              "Obtain scaled floor plans showing all proposed works. Use HDB's color-coding system: RED for walls to demolish, BLUE for new walls, YELLOW for walls demolished and rebuilt in same location.",
            duration: "2-3 days",
            documents: ["Official HDB floor plan (S$5 from HDB)", "Marked-up renovation plans"],
            tip: "Purchase official floor plans from HDB e-Service to ensure accuracy. Hand-drawn plans will be rejected.",
          },
          {
            title: "Complete Acknowledgement Form",
            description:
              "All legal co-owners must sign the acknowledgement form authorizing the contractor to submit the application. This is a critical legal document establishing the contractor-owner relationship.",
            duration: "1 day",
            documents: ["Signed acknowledgement form from ALL owners", "NRIC copies of all owners"],
            tip: "Ensure ALL co-owners sign. Missing signatures are a common rejection reason.",
          },
          {
            title: "Contractor Submits via APEX",
            description:
              "Your contractor submits the complete application package through HDB's Application for Renovation Permit via Electronic Transaction (APEX) system.",
            duration: "Same day",
            documents: ["All compiled documents", "Digital submission via APEX"],
            tip: "You'll receive an SMS notification once submitted. If you don't receive it within 24 hours, follow up with your contractor.",
          },
          {
            title: "HDB Review Process",
            description:
              "HDB reviews your application for compliance with regulations. Complex works may require consultation with BCA or SCDF, extending the timeline.",
            duration: "1-3 weeks",
            tip: "Monitor status via 'My HDBPage' using Singpass. Check weekly for any requests for additional information.",
          },
          {
            title: "Receive Approval",
            description:
              "Upon approval, HDB issues the renovation permit with specific validity periods: 3 months for BTO flats, 1 month for resale flats.",
            duration: "Immediate upon approval",
            documents: ["Official HDB permit", "Approved plans", "Terms and conditions"],
            tip: "Review permit conditions carefully. Some approvals come with specific requirements you must follow.",
          },
        ],
      },
      {
        title: "Required Documentation Checklist",
        checklist: [
          {
            name: "Scaled floor plans with color coding",
            description: "Official HDB plans with proposed changes marked",
            required: true,
            category: "Plans",
          },
          {
            name: "Acknowledgement form",
            description: "Signed by ALL legal co-owners",
            required: true,
            category: "Legal",
          },
          {
            name: "Contractor's DRC registration",
            description: "Proof of current HDB registration",
            required: true,
            category: "Contractor",
          },
          {
            name: "PE endorsement",
            description: "For complex structural works only",
            required: false,
            category: "Technical",
          },
          {
            name: "SCDF clearance",
            description: "For balcony enclosure only",
            required: false,
            category: "Technical",
          },
          {
            name: "Window specifications",
            description: "For window replacement works",
            required: false,
            category: "Technical",
          },
          {
            name: "Plumber's license",
            description: "For bathroom renovations",
            required: false,
            category: "Specialist",
          },
        ],
      },
      {
        title: "Processing Timeline",
        timeline: {
          stages: [
            {
              name: "Document Preparation",
              duration: "3-5 days",
              description: "Gather all required documents and complete forms",
              status: "pending",
            },
            {
              name: "Submission",
              duration: "1 day",
              description: "Contractor submits via APEX system",
              status: "pending",
            },
            {
              name: "Initial Review",
              duration: "3-5 days",
              description: "HDB conducts preliminary compliance check",
              status: "pending",
            },
            {
              name: "Technical Assessment",
              duration: "5-10 days",
              description: "Detailed review of structural and safety aspects",
              status: "pending",
            },
            {
              name: "Final Approval",
              duration: "2-3 days",
              description: "Permit issued with conditions",
              status: "pending",
            },
          ],
        },
      },
      {
        title: "Expediting Your Application",
        content: [
          "While HDB doesn't offer an official express service, you can minimize processing time by ensuring your application is complete and accurate from the start.",
        ],
        list: [
          "Submit during off-peak periods (avoid year-end and post-Chinese New Year)",
          "Ensure all documents are complete and accurate before submission",
          "Respond to HDB queries within 24 hours",
          "Engage experienced contractors familiar with the process",
          "Consider simpler renovation designs that require less review",
        ],
      },
    ],
  },
  {
    slug: "common-rejections",
    sections: [
      {
        title: "Why 35% of Applications Face Issues",
        content: [
          "More than one-third of HDB renovation permit applications face rejection or require resubmission, causing delays averaging 2-3 weeks. Understanding common rejection reasons helps ensure first-time approval.",
          "A rejected application isn't just an administrative hurdle—it's an early warning sign about your contractor's competence. If they can't handle documentation correctly, how will they manage the actual renovation?",
        ],
      },
      {
        title: "Top 15 Rejection Reasons",
        rejectionReasons: [
          {
            reason: "Missing Co-owner Signatures",
            description:
              "Acknowledgement form lacks signatures from one or more legal co-owners of the flat.",
            solution:
              "Obtain signatures from ALL co-owners before submission. Check property title for all names.",
            frequency: "Very Common",
          },
          {
            reason: "Proposing Prohibited Works",
            description:
              "Application includes works that are strictly forbidden, such as hacking structural walls or ceiling plastering.",
            solution:
              "Review prohibited works list carefully. When in doubt, consult HDB before submission.",
            frequency: "Common",
          },
          {
            reason: "BTO 3-Year Violation",
            description:
              "Attempting bathroom/toilet hacking within the 3-year moratorium period for new BTO flats.",
            solution:
              "Check your block completion date. Wait until after 3-year period or modify renovation plans.",
            frequency: "Very Common",
          },
          {
            reason: "Incorrect Floor Plans",
            description: "Using unofficial, outdated, or incorrectly marked floor plans.",
            solution:
              "Purchase official floor plans from HDB for S$5. Use correct color coding system.",
            frequency: "Common",
          },
          {
            reason: "Non-Compliant Window Designs",
            description:
              "Proposed windows don't match HDB's approved design scheme for the building.",
            solution:
              "Check with Town Council for approved window specifications. Use only approved designs.",
            frequency: "Common",
          },
          {
            reason: "Expired Contractor Registration",
            description: "Contractor's DRC registration has lapsed or been suspended.",
            solution: "Verify contractor's active status on HDB portal before engagement.",
            frequency: "Rare",
          },
          {
            reason: "Missing PE Endorsement",
            description:
              "Complex structural works submitted without required Professional Engineer certification.",
            solution:
              "Engage a PE for any non-standard structural alterations. Include all technical drawings.",
            frequency: "Common",
          },
          {
            reason: "Exceeding Floor Loading Limits",
            description:
              "Proposed floor finishes exceed 50mm thickness limit or 150kg/sqm loading.",
            solution:
              "Calculate total floor thickness including screed. Use lighter materials if needed.",
            frequency: "Common",
          },
          {
            reason: "Fire Safety Violations",
            description:
              "Non-fire-rated door proposed for fire escape routes or improper corridor obstruction.",
            solution:
              "Use certified half-hour fire-rated doors for main entrances facing common areas.",
            frequency: "Common",
          },
          {
            reason: "Incomplete Documentation",
            description: "Missing required supporting documents or partially filled forms.",
            solution: "Use a comprehensive checklist. Review all documents before submission.",
            frequency: "Very Common",
          },
          {
            reason: "Balcony Enclosure Without Approval",
            description: "Attempting to enclose balcony without SCDF fire safety clearance.",
            solution:
              "Engage PE to submit plans to SCDF first. Only proceed after receiving clearance.",
            frequency: "Rare",
          },
          {
            reason: "Electrical Overload",
            description:
              "Proposing high-load electrical works without considering building's capacity.",
            solution: "For older flats with 30A mains, apply for electrical upgrade permit first.",
            frequency: "Common",
          },
          {
            reason: "Bathroom Extension Violations",
            description: "Extending bathroom beyond allowed 600mm or 0.6sqm limit.",
            solution: "Keep extensions within strict limits. Consider alternative layouts.",
            frequency: "Rare",
          },
          {
            reason: "Contractor's Poor Track Record",
            description: "Contractor has excessive demerit points or recent violations.",
            solution:
              "Check contractor's demerit points history. Avoid those near 24-point suspension threshold.",
            frequency: "Rare",
          },
          {
            reason: "Wall Thickness Violations",
            description: "Wall finishes exceed 25mm total thickness limit.",
            solution:
              "Calculate total thickness including plaster and tiles. Adjust materials if needed.",
            frequency: "Common",
          },
        ],
      },
      {
        title: "Pre-Submission Checklist",
        content: ["Use this comprehensive checklist to review your application before submission:"],
        checklist: [
          {
            name: "All co-owners have signed acknowledgement form",
            required: true,
            category: "Documentation",
          },
          {
            name: "Official HDB floor plans obtained (not hand-drawn)",
            required: true,
            category: "Documentation",
          },
          {
            name: "Correct color coding used on plans",
            required: true,
            category: "Documentation",
          },
          {
            name: "No prohibited works included",
            required: true,
            category: "Compliance",
          },
          {
            name: "BTO 3-year rule checked (if applicable)",
            required: true,
            category: "Compliance",
          },
          {
            name: "Floor thickness calculations verified (<50mm)",
            required: true,
            category: "Technical",
          },
          {
            name: "Wall thickness calculations verified (<25mm)",
            required: true,
            category: "Technical",
          },
          {
            name: "Window specifications match approved scheme",
            required: false,
            category: "Technical",
          },
          {
            name: "PE endorsement obtained (if needed)",
            required: false,
            category: "Specialist",
          },
          {
            name: "Fire-rated door specified (if applicable)",
            required: false,
            category: "Safety",
          },
          {
            name: "Contractor's DRC status verified as Active",
            required: true,
            category: "Contractor",
          },
          {
            name: "Contractor's demerit points checked (<24)",
            required: true,
            category: "Contractor",
          },
        ],
      },
      {
        title: "What to Do If Rejected",
        content: [
          "If your application is rejected, don't panic. Most rejections can be resolved quickly with the right approach:",
        ],
        list: [
          "Review the rejection letter carefully for specific reasons",
          "Address ALL stated issues, not just the major ones",
          "Gather any additional documents requested",
          "Resubmit within 7 days to maintain your queue position",
          "Consider engaging a more experienced contractor if multiple rejections occur",
          "Contact HDB directly for clarification if rejection reasons are unclear",
        ],
        alert: {
          type: "warning",
          title: "Multiple Rejections Red Flag",
          content:
            "If your application is rejected more than twice, seriously consider changing contractors. This indicates fundamental issues with their knowledge or diligence that could manifest as bigger problems during actual renovation.",
        },
      },
    ],
  },
  {
    slug: "costs-and-timelines",
    sections: [
      {
        title: "Complete Cost Breakdown",
        content: [
          "Understanding the full cost of obtaining HDB renovation permits helps you budget accurately and avoid surprises. While permit fees themselves are modest, the total cost includes various professional services and potential delays.",
        ],
      },
      {
        title: "HDB Permit Fees Schedule",
        costBreakdown: {
          headers: ["Permit Type", "HDB Fee", "Processing Time", "Validity Period"],
          rows: [
            [
              "Standard Renovation Permit",
              "S$0-200",
              "1-3 weeks",
              "3 months (BTO) / 1 month (Resale)",
            ],
            ["Window Works Permit", "S$150-250", "2-3 weeks", "3 months"],
            ["Electrical Upgrade Permit", "S$100-150", "1-2 weeks", "3 months"],
            ["Air-Con Installation Report", "S$50-100", "1 week", "N/A"],
            ["Floor Plan Copy", "S$5", "Immediate", "N/A"],
          ],
        },
      },
      {
        title: "Additional Professional Fees",
        content: [
          "Beyond HDB's official fees, you may need to engage various professionals depending on your renovation scope:",
        ],
        costBreakdown: {
          headers: ["Professional Service", "Typical Cost", "When Required"],
          rows: [
            [
              "Professional Engineer (PE)",
              "S$1,500-3,000",
              "Complex structural works, balcony enclosure",
            ],
            ["PUB Licensed Plumber", "S$500-1,000", "Bathroom/toilet renovations"],
            ["Licensed Electrical Worker", "S$300-800", "Electrical upgrades >30A"],
            [
              "BCA Window Contractor",
              "S$2,000-5,000",
              "Window replacement (includes installation)",
            ],
            ["Contractor Permit Handling", "S$200-500", "Usually included in renovation quote"],
          ],
        },
      },
      {
        title: "Processing Timeline by Season",
        content: [
          "HDB processing times vary significantly based on application volume and complexity. Understanding seasonal patterns helps you plan better:",
        ],
        timeline: {
          stages: [
            {
              name: "Off-Peak Period",
              duration: "7-10 days",
              description: "April-May, September-October. Fastest processing times.",
              status: "completed",
            },
            {
              name: "Standard Period",
              duration: "10-14 days",
              description: "Most months except peak periods. Normal processing.",
              status: "current",
            },
            {
              name: "Peak Period",
              duration: "14-21 days",
              description: "November-December, February-March. Expect delays.",
              status: "pending",
            },
            {
              name: "Complex Works",
              duration: "+7-14 days",
              description: "Add to base timeline for PE-required or special works.",
              status: "pending",
            },
          ],
        },
      },
      {
        title: "Hidden Costs to Consider",
        content: [
          "The true cost of permits extends beyond official fees. Factor in these often-overlooked expenses:",
        ],
        list: [
          "Temporary accommodation if delays extend timeline (S$2,000-4,000/month)",
          "Storage fees for purchased materials during permit wait (S$200-500/month)",
          "Contractor standby charges if permit delayed (S$100-300/day)",
          "Resubmission fees if rejected (S$100-200 per submission)",
          "Lost deposit if contractor abandons due to permit issues (S$1,000-5,000)",
          "Professional consultation to resolve complex permit issues (S$500-1,500)",
        ],
        alert: {
          type: "cost",
          title: "Total Permit-Related Costs",
          content:
            "While HDB permit fees are typically S$200-500, total permit-related expenses including professionals, delays, and hidden costs can reach S$3,000-8,000 for complex renovations. Budget accordingly.",
        },
      },
      {
        title: "Cost-Saving Strategies",
        content: ["Minimize permit-related expenses with these proven strategies:"],
        list: [
          "Submit during off-peak periods to avoid delays and standby charges",
          "Ensure first-time approval to avoid resubmission costs",
          "Bundle all permit applications together for efficiency",
          "Choose simpler designs that don't require PE endorsement",
          "Verify contractor includes permit handling in their quote",
          "Start permit application before purchasing materials to avoid storage fees",
        ],
      },
      {
        title: "Timeline Planning Guide",
        content: ["Plan your renovation timeline with these permit processing considerations:"],
        highlight: {
          title: "Start Early",
          content:
            "Begin permit application at least 4-6 weeks before intended renovation start date. This buffer accommodates potential rejections, peak period delays, and complex work reviews.",
        },
      },
    ],
  },
  {
    slug: "working-with-contractors",
    sections: [
      {
        title: "The HDB Directory of Renovation Contractors (DRC)",
        content: [
          "Engaging an HDB-registered contractor isn't optional—it's a legal requirement under the Housing & Development (Renovation Control) Rules. The DRC system ensures contractors understand HDB regulations and can handle permit applications properly.",
          "However, DRC registration is a 'license to operate,' not a quality guarantee. HDB explicitly states they don't endorse workmanship or mediate disputes. Your due diligence remains critical.",
        ],
      },
      {
        title: "Verifying Contractor Registration",
        content: ["Always verify your contractor's current status before signing any agreement:"],
        processSteps: [
          {
            title: "Check DRC Status Online",
            description:
              "Visit HDB InfoWEB's DRC portal and search by company name or registration number.",
            tip: "Screenshot the verification page with date for your records.",
          },
          {
            title: "Verify Registration Validity",
            description:
              "Ensure registration is 'Active' and check expiry date. Avoid contractors near expiry without confirmed renewal.",
            tip: "Registration expires every 3 years and requires renewal.",
          },
          {
            title: "Review Demerit Points",
            description:
              "Check accumulated demerit points over past 24 months. Be cautious if approaching 24-point suspension threshold.",
            tip: "Ask contractors with 10+ points to explain the violations.",
          },
          {
            title: "Check Infringement History",
            description:
              "Review types of past violations. Pattern violations indicate systemic issues.",
            tip: "Avoid contractors with repeated same violations—shows no improvement.",
          },
        ],
      },
      {
        title: "Understanding the Demerit Point System",
        content: [
          "HDB's Demerit Point System (DPS) tracks contractor compliance. Understanding this system helps you assess contractor reliability:",
        ],
        permitTable: {
          headers: ["Violation Type", "Demerit Points", "Examples"],
          rows: [
            ["Minor Administrative", "3-6 points", "Late submission, incomplete documents"],
            [
              "Renovation Violations",
              "6-12 points",
              "Exceeding permitted hours, improper debris disposal",
            ],
            ["Safety Violations", "12-18 points", "No safety equipment, dangerous practices"],
            [
              "Major Infringements",
              "Immediate suspension",
              "Unauthorized structural works, false declarations",
            ],
          ],
          caption: "24 points in 24 months = 1-year suspension from DRC",
        },
        warning: {
          title: "Red Flag: High Demerit Points",
          content:
            "Contractors with 15+ demerit points face suspension risk. If suspended mid-renovation, you'll need to engage another contractor at additional cost. Always check points before signing contracts.",
        },
      },
      {
        title: "Specialist Requirements",
        content: [
          "Certain renovation works require licensed specialists beyond your general contractor:",
        ],
        costBreakdown: {
          headers: ["Specialist Type", "Required For", "Licensing Body", "Verification Method"],
          rows: [
            [
              "PUB Licensed Plumber",
              "All bathroom/toilet works",
              "PUB",
              "PUB website verification",
            ],
            ["Licensed Electrical Worker", "Electrical installations", "EMA", "EMA license check"],
            ["BCA Window Contractor", "Window replacement", "BCA", "HDB approved list"],
            ["Professional Engineer", "Complex structural works", "PEB", "PE Board registry"],
            ["Gas Service Worker", "Gas pipe relocation", "EMA", "EMA certification"],
          ],
        },
      },
      {
        title: "Owner vs Contractor Responsibilities",
        content: [
          "Understanding the legal division of responsibilities protects you from liability:",
        ],
        permitTable: {
          headers: ["Aspect", "Owner Responsibility", "Contractor Responsibility"],
          rows: [
            [
              "Legal Liability",
              "Ultimate responsibility for all works",
              "Execution within regulations",
            ],
            ["Permit Application", "Authorize and verify accuracy", "Prepare and submit via APEX"],
            ["Compliance", "Ensure no prohibited works", "Advise on regulations"],
            ["Documentation", "Provide ownership proof, sign forms", "Compile technical documents"],
            ["Penalties", "Bear all fines and penalties", "May face DRC suspension"],
            ["Reinstatement", "Pay for required reinstatement", "Execute reinstatement works"],
          ],
        },
      },
      {
        title: "Best Practices for Contractor Management",
        content: ["Protect yourself with these contractor management strategies:"],
        list: [
          "Document all permit-related discussions in writing",
          "Include permit approval as a contract milestone",
          "Withhold 10% payment until permit obtained",
          "Specify who pays for rejection-related delays",
          "Include clause for contractor change if permit repeatedly rejected",
          "Require contractor to notify you within 24 hours of any HDB communication",
          "Get written confirmation that all specialists are properly licensed",
        ],
        highlight: {
          title: "CaseTrust Accreditation",
          content:
            "Consider CaseTrust-accredited contractors for additional protection. They offer S$30,000 deposit protection and formal dispute resolution channels, though they typically charge 10-15% more.",
        },
      },
      {
        title: "When to Change Contractors",
        content: ["These situations warrant immediate contractor replacement:"],
        list: [
          "DRC registration expired or suspended",
          "Accumulated 20+ demerit points (near suspension)",
          "Multiple permit rejections due to documentation errors",
          "Proposes prohibited works despite warnings",
          "Cannot provide proper specialist certifications",
          "Refuses to put permit commitments in writing",
          "Has pattern of similar violations in DRC record",
        ],
        alert: {
          type: "warning",
          title: "Contractor Change Costs",
          content:
            "Changing contractors mid-permit can cost S$2,000-5,000 in duplicate work, new deposits, and delays. However, this is preferable to proceeding with an incompetent contractor who may cause S$10,000+ in compliance issues.",
        },
      },
    ],
  },
  {
    slug: "compliance-and-consequences",
    sections: [
      {
        title: "The Real Cost of Non-Compliance",
        content: [
          "Choosing to bypass HDB permit requirements or proceeding with unauthorized renovations carries severe consequences that extend far beyond simple fines. Non-compliance creates a permanent legal defect on your property that will surface during future transactions.",
          "Think of unpermitted renovations as a ticking time bomb in your property's value. While you might save S$200-500 on permit fees today, you risk S$10,000-50,000 in future rectification costs, lost sales, and legal issues.",
        ],
      },
      {
        title: "Legal Penalties and Enforcement",
        content: [
          "HDB has extensive enforcement powers under the Housing & Development (Renovation Control) Rules:",
        ],
        costBreakdown: {
          headers: ["Violation Type", "Maximum Penalty", "Additional Consequences"],
          rows: [
            ["Unauthorized renovation", "S$5,000 fine", "Mandatory reinstatement order"],
            ["Prohibited works", "S$5,000 + prosecution", "Criminal record possible"],
            ["False declaration", "S$5,000 + prosecution", "Contractor ban, owner blacklist"],
            [
              "Ignoring stop-work order",
              "S$5,000 per day",
              "Court summons, immediate reinstatement",
            ],
            ["Repeat offender", "S$10,000 + prosecution", "Enhanced monitoring, sale restrictions"],
          ],
        },
        warning: {
          title: "Enforcement is Getting Stricter",
          content:
            "HDB conducts random inspections and responds to neighbor complaints within 48 hours. With 962 enforcement actions in 2024 alone, the risk of getting caught is significant and increasing.",
        },
      },
      {
        title: "Reinstatement Orders",
        content: [
          "More costly than fines, reinstatement orders legally compel you to undo unauthorized works:",
        ],
        list: [
          "Must restore flat to original condition at your expense",
          "Typical reinstatement costs: S$10,000-30,000",
          "Must engage new contractor (original usually refuses)",
          "No choice in timeline - usually 30-60 days to comply",
          "Failure to comply leads to court action",
          "HDB can forcibly enter and reinstate, then bill you",
          "Reinstatement costs become a charge on your property",
        ],
        alert: {
          type: "cost",
          title: "Double Payment Reality",
          content:
            "Reinstatement means paying twice: once for the illegal renovation, once to undo it. A S$15,000 illegal bathroom renovation becomes S$30,000 after reinstatement—plus fines and legal costs.",
        },
      },
      {
        title: "Impact on Property Transactions",
        content: ["Unauthorized renovations create severe complications for property sales:"],
        rejectionReasons: [
          {
            reason: "HDB Resale Completion Blocked",
            description:
              "HDB will not approve resale completion until all unauthorized works are rectified.",
            solution: "Complete reinstatement before listing property for sale.",
            frequency: "Very Common",
          },
          {
            reason: "Buyer's Legal Review Failure",
            description:
              "Buyer's lawyer will discover unauthorized works during due diligence, likely causing withdrawal.",
            solution: "Disclose and rectify all issues upfront to maintain buyer confidence.",
            frequency: "Very Common",
          },
          {
            reason: "Price Reduction Demands",
            description:
              "Buyers demand S$20,000-50,000 price reductions to cover rectification risks.",
            solution: "Rectify before sale to maintain property value.",
            frequency: "Common",
          },
          {
            reason: "Sale Falls Through",
            description: "Deal collapses after buyer discovers undisclosed unauthorized works.",
            solution: "Full disclosure and pre-sale rectification essential.",
            frequency: "Common",
          },
          {
            reason: "Legal Disputes",
            description:
              "Buyer sues for misrepresentation if unauthorized works discovered post-sale.",
            solution: "Seller remains liable even after sale for pre-existing violations.",
            frequency: "Rare",
          },
        ],
      },
      {
        title: "Insurance Implications",
        content: [
          "Unauthorized renovations can void your insurance coverage when you need it most:",
        ],
        list: [
          "Home insurance may reject claims related to unauthorized works",
          "Fire damage from illegal electrical work: claim denied",
          "Water damage from non-permitted plumbing: no coverage",
          "Injury from structural failure: personal liability",
          "Neighbor's damage claims: no insurance protection",
          "Mortgage insurance issues if bank discovers violations",
        ],
        highlight: {
          title: "Real Case: S$180,000 Uncovered Loss",
          content:
            "A homeowner's illegal bathroom renovation caused water seepage to three units below. Insurance rejected the S$180,000 claim due to unauthorized plumbing works. The owner faced bankruptcy.",
        },
      },
      {
        title: "Neighbor Relations and Complaints",
        content: ["Poor permit compliance often triggers neighbor disputes that escalate quickly:"],
        timeline: {
          stages: [
            {
              name: "Neighbor Complaint",
              duration: "Day 1",
              description: "Neighbor reports suspected unauthorized works to HDB",
              status: "completed",
            },
            {
              name: "HDB Investigation",
              duration: "Days 2-5",
              description: "HDB officer inspects and documents violations",
              status: "current",
            },
            {
              name: "Stop-Work Order",
              duration: "Day 6",
              description: "Immediate halt to all renovation works",
              status: "pending",
            },
            {
              name: "Compliance Notice",
              duration: "Days 7-14",
              description: "Formal notice requiring rectification",
              status: "pending",
            },
            {
              name: "Enforcement Action",
              duration: "Day 30+",
              description: "Fines issued, legal proceedings begin",
              status: "pending",
            },
          ],
        },
      },
      {
        title: "Protecting Yourself",
        content: ["Follow these essential steps to ensure 100% compliance:"],
        checklist: [
          {
            name: "Never start work before permit approval",
            required: true,
            category: "Before Renovation",
          },
          {
            name: "Verify all works match approved permit exactly",
            required: true,
            category: "During Renovation",
          },
          {
            name: "Document all approved permits with photos",
            required: true,
            category: "Documentation",
          },
          {
            name: "Keep permits for minimum 5 years",
            required: true,
            category: "Documentation",
          },
          {
            name: "Report contractor who suggests skipping permits",
            required: true,
            category: "Contractor Issues",
          },
          {
            name: "Inform insurance company of major renovations",
            required: true,
            category: "Insurance",
          },
          {
            name: "Maintain good neighbor relations throughout",
            required: true,
            category: "Neighbor Relations",
          },
          {
            name: "Complete final HDB inspection if required",
            required: true,
            category: "After Renovation",
          },
        ],
      },
      {
        title: "Long-Term Property Value Impact",
        content: ["Proper permit compliance is an investment in your property's value:"],
        list: [
          "Properties with clean renovation records sell 15% faster",
          "Avoid S$20,000-50,000 price reductions for rectification",
          "Maintain eligibility for all HDB upgrading programs",
          "Preserve ability to rent out rooms/entire flat",
          "Protect against future regulation changes",
          "Ensure smooth estate transfer to family members",
        ],
        alert: {
          type: "info",
          title: "Think Like a Future Seller",
          content:
            "Every renovation decision should consider the eventual sale. A properly permitted S$50,000 renovation adds value. The same renovation done illegally reduces value by S$30,000-50,000 due to rectification costs and buyer concerns.",
        },
      },
    ],
  },
]

export function getPartContent(slug: string): PartContent | undefined {
  return partContents.find((content) => content.slug === slug)
}
