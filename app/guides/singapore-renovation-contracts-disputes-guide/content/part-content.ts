import { ContractClauseData } from "../components/ContractClause"
import { RedFlag } from "../components/RedFlagChecker"
import { DisputeLevel } from "../components/DisputeFlowchart"
import { ScamTactic } from "../components/ScamTacticCard"
import { ChecklistItem } from "../components/ProtectionChecklist"
import { CaseStudy } from "../components/CaseStudyCard"

export interface ContentSection {
  title: string
  number?: string
  content?: string[]
  list?: string[]
  table?: {
    headers: string[]
    rows: (string | number)[][]
    caption?: string
  }
  contractClause?: ContractClauseData
  redFlags?: RedFlag[]
  disputeFlow?: DisputeLevel[]
  scamTactics?: ScamTactic[]
  checklist?: {
    title: string
    items: ChecklistItem[]
  }
  caseStudy?: CaseStudy
  warning?: {
    title: string
    content: string
  }
  tip?: {
    title: string
    content: string
  }
  highlight?: {
    title: string
    content: string
  }
}

interface PartContent {
  slug: string
  sections: ContentSection[]
}

export const partContent: Record<string, PartContent> = {
  "contractor-vetting": {
    slug: "contractor-vetting",
    sections: [
      {
        title: "The S$728,000 Question: How to Spot a Scammer",
        content: [
          "Before we dive into contracts and legal protections, let's address the elephant in the room: how do you avoid hiring a contractor who will disappear with your deposit? The answer lies in systematic due diligence that goes far beyond checking portfolios and getting quotes.",
          "In 2024 alone, 962 homeowners filed formal complaints with CASE, resulting in S$728,000 in prepayment losses. The majority of these cases could have been prevented with proper vetting.",
        ],
      },
      {
        title: "Digital Verification (10 Minutes That Save S$50,000)",
        content: [
          "Your first line of defense costs nothing but 10 minutes of your time. These checks should be non-negotiable before any further engagement with a contractor.",
        ],
        checklist: {
          title: "Digital Background Check",
          items: [
            {
              item: "Check ACRA Business Profile at bizfile.acra.gov.sg",
              critical: true,
              tip: "Look for registration date, paid-up capital, and director names",
            },
            {
              item: "Verify company registration is at least 2 years old",
              critical: true,
            },
            {
              item: "Check for frequent changes in company name or directors",
              critical: true,
            },
            {
              item: "Search for multiple similar companies under same directors",
            },
            {
              item: "Verify HDB Licensed Renovator status (mandatory for HDB)",
              critical: true,
              tip: "Visit hdb.gov.sg/directory - non-listed contractors CANNOT legally renovate HDB",
            },
            {
              item: "Google search: '[Company Name] + scam'",
            },
            {
              item: "Google search: '[Director Name] + complaint'",
            },
            {
              item: "Google search: '[Company Name] + CASE'",
            },
            {
              item: "Google search: '[Company Name] + small claims'",
            },
          ],
        },
      },
      {
        title: "The Physical Presence Test",
        content: [
          "In 2024, 73% of contractors who absconded operated without physical offices. A legitimate business has a real presence.",
        ],
        table: {
          headers: ["Verification Point", "Green Flag", "Red Flag"],
          rows: [
            [
              "Office/Showroom",
              "Fixed address, can visit anytime",
              "Home address or 'by appointment only'",
            ],
            ["Display Materials", "Physical samples, catalogues", "Everything 'in warehouse'"],
            ["Staff Presence", "Multiple employees visible", "One-man operation"],
            ["Business Registration", "Certificate displayed", "No visible licensing"],
            ["Payment Methods", "Company bank account, receipts", "Personal account, cash only"],
          ],
        },
      },
      {
        title: "Red Flag Identification System",
        redFlags: [
          {
            category: "Business Registration",
            flag: "Company registered less than 2 years ago",
            risk: "high",
            explanation:
              "New companies have no track record and higher failure rates. 67% of complaints involve companies less than 2 years old.",
          },
          {
            category: "Business Registration",
            flag: "Frequent director or company name changes",
            risk: "high",
            explanation:
              "Phoenix companies close and reopen under new names to escape bad reputation. This is a classic scammer tactic.",
          },
          {
            category: "Physical Presence",
            flag: "No physical office or showroom",
            risk: "high",
            explanation:
              "Without a fixed location, contractors can easily disappear. 73% of absconders had no physical office.",
          },
          {
            category: "Payment Terms",
            flag: "Requests more than 30% upfront payment",
            risk: "high",
            explanation:
              "Excessive upfront payment removes your leverage and increases risk of loss.",
          },
          {
            category: "Documentation",
            flag: "Resists providing detailed written contract",
            risk: "medium",
            explanation:
              "Verbal agreements are unenforceable. Legitimate contractors welcome detailed contracts.",
          },
          {
            category: "Portfolio",
            flag: "Cannot provide contactable references",
            risk: "medium",
            explanation: "Real contractors have happy clients willing to share experiences.",
          },
          {
            category: "Certification",
            flag: "Not CaseTrust accredited",
            risk: "medium",
            explanation:
              "97% of complaints are against non-CaseTrust contractors. Accreditation provides S$30,000 protection.",
          },
          {
            category: "Communication",
            flag: "High-pressure sales tactics",
            risk: "low",
            explanation:
              "'Today only' deals pressure you into hasty decisions. Legitimate contractors give you time to decide.",
          },
        ],
      },
      {
        title: "The CaseTrust Advantage",
        content: [
          "Here's a statistic that should grab your attention: 97% of all renovation complaints in 2024 were against non-CaseTrust contractors. The 3% that were CaseTrust-accredited? All resolved successfully.",
          "CaseTrust isn't just a logo - it's a S$30,000 insurance policy for your renovation.",
        ],
        table: {
          headers: ["Protection", "Coverage", "Real Value"],
          rows: [
            [
              "Deposit Performance Bond",
              "Up to S$30,000",
              "Covers your deposit if contractor disappears",
            ],
            ["Mandatory Mediation", "Required attendance", "Forces contractor to negotiate"],
            ["Standard Contract", "Clear terms enforced", "Prevents ambiguous agreements"],
            ["Business Standards", "Regular audits", "Weeds out fly-by-night operators"],
          ],
          caption: "CaseTrust Protection Benefits",
        },
        tip: {
          title: "Reality Check",
          content:
            "CaseTrust isn't a guarantee of perfect renovation. It's insurance against catastrophic loss. You still need to manage the project, but you won't lose your entire deposit to a runaway contractor.",
        },
      },
      {
        title: "Portfolio Verification Techniques",
        content: [
          "Fraudulent contractors have become sophisticated in their deception. Here's how to verify portfolios are genuine:",
        ],
        list: [
          "Ask for exact addresses of portfolio projects",
          "Request permit approval documents for showcased renovations",
          "Ask for specific timelines from start to completion",
          "Request direct contact with at least 3 past clients",
          "Use reverse image search on Google for portfolio photos",
          "Check if images appear on Pinterest or other contractors' sites",
          "Visit ongoing project sites if possible",
          "Request before/after photos with timestamps",
        ],
        highlight: {
          title: "The Direct Question Test",
          content:
            "Legitimate contractors will provide specific answers and often offer references proactively. Scammers deflect with excuses about 'client privacy' or 'old projects'.",
        },
      },
    ],
  },
  "contract-deep-dive": {
    slug: "contract-deep-dive",
    sections: [
      {
        title: "The S$50,000 Mistake: Signing a Vague Contract",
        content: [
          "Your renovation contract isn't just paperwork—it's your only legal protection when things go wrong. Yet 68% of homeowners sign contracts without reading beyond the price. This section will transform you into a contract expert in 30 minutes.",
          "Every clause matters. Every word counts. The difference between 'supply and install kitchen cabinets' and a detailed specification can cost you S$10,000 in disputes.",
        ],
      },
      {
        title: "Essential Clause #1: Scope of Work",
        contractClause: {
          title: "Scope of Work Specification",
          goodVersion: `Supply and install kitchen cabinets as follows:
- Top cabinets: 12 feet run, 2 feet height
- Bottom cabinets: 12 feet run, 3 feet height
- Material: EDL E1 Grade laminate, Code: MW1209 (White Oak)
- Hardware: Blum soft-closing hinges (Model 71B3550)
- Internal: 2 adjustable shelves per unit
- Installation: Including all cutting, joining, and edge-banding`,
          badVersion: "Supply and install kitchen cabinets with laminate finish",
          explanation:
            "Material substitution scams cost homeowners S$8,000-S$15,000 on average. Specificity is your protection against inferior materials being passed off as 'equivalent'.",
          savings: "S$10,000-15,000",
        },
      },
      {
        title: "Essential Clause #2: Payment Schedule",
        content: [
          "The industry's dirty secret: Most contractors push for front-loaded payments because once they have 60% of your money, they have their entire profit margin. The remaining work becomes optional.",
        ],
        contractClause: {
          title: "Protected Payment Schedule",
          goodVersion: `Payment Schedule:
1. Contract Signing: 15% (Secures slot, minimal risk)
2. Completion of Hacking/Masonry: 25% (Work verified)
3. Carpentry Delivered & Installed: 30% (Most expensive items on-site)
4. Painting & Finishing Complete: 20% (Near completion)
5. After Defects Rectified: 10% (Final protection)`,
          badVersion: `Payment Terms:
- Signing: 10%
- Upon commencement: 40% (RED FLAG!)
- During carpentry: 45%
- Completion: 5%`,
          explanation:
            "Front-loaded payments remove your leverage. Once contractor has majority of money, motivation to complete quality work disappears.",
          savings: "Protects entire renovation budget",
        },
      },
      {
        title: "Essential Clause #3: Timeline with Liquidated Damages",
        contractClause: {
          title: "Enforceable Timeline Clause",
          goodVersion: `Project Timeline:
- Start Date: 1 March 2025
- Completion Date: 26 April 2025 (8 weeks)
- Liquidated Damages: S$100 per calendar day of delay
- Damages waived only for: Force majeure, homeowner-caused delays
- Contractor must notify of delays within 48 hours with mitigation plan`,
          badVersion: "Project to be completed in 8-10 weeks",
          explanation:
            "Without liquidated damages, contractors have zero incentive to finish on time. With it, a 2-week delay costs them S$1,400.",
          savings: "S$100-200/day in alternative accommodation",
        },
      },
      {
        title: "Essential Clause #4: Material Specifications",
        content: [
          "Every material must be specified exactly. This is where contractors make their hidden profits through substitution.",
        ],
        table: {
          headers: ["Item", "Proper Specification", "Why It Matters"],
          rows: [
            [
              "Tiles",
              "Niro Granite NPO1203, 60x60cm homogeneous, 90sqm @ S$4.50/sqft",
              "Prevents substitution with cheaper alternatives",
            ],
            [
              "Laminate",
              "EDL E1 Grade, 0.8mm thickness, Code: specific color",
              "E1 grade ensures low formaldehyde emission",
            ],
            [
              "Paint",
              "Nippon Odourless Premium, 3 coats minimum",
              "Specifies quality and application standard",
            ],
            ["Hinges", "Blum Model 71B3550 soft-closing", "Prevents generic hardware substitution"],
            ["Toilet", "TOTO C704 one-piece, tornado flush", "Exact model prevents downgrades"],
          ],
        },
      },
      {
        title: "Essential Clause #5: Variation Order Procedures",
        contractClause: {
          title: "Variation Order Control",
          goodVersion: `All changes to original scope must be documented in a Variation Order containing:
1. Description of change
2. Cost impact (+/- S$)
3. Timeline impact (+/- days)
4. Both parties' signatures
5. Work cannot commence until VO is signed
6. Verbal agreements are void
7. Homeowner has right to refuse any variation`,
          badVersion: "Additional works to be agreed between parties",
          explanation:
            "Verbal changes are where budgets explode. One homeowner paid S$12,000 extra for 'minor adjustments' that were never documented.",
          savings: "Prevents S$5,000-20,000 in scope creep",
        },
      },
      {
        title: "The Complete Contract Checklist",
        checklist: {
          title: "Contract Review Checklist",
          items: [
            {
              item: "Detailed scope of work with specifications",
              critical: true,
            },
            {
              item: "Progressive payment schedule (max 20% upfront)",
              critical: true,
            },
            {
              item: "Firm start and end dates",
              critical: true,
            },
            {
              item: "Liquidated damages clause (min S$100/day)",
              critical: true,
            },
            {
              item: "Defects liability period (minimum 6 months)",
              critical: true,
            },
            {
              item: "Material brands and models specified",
              critical: true,
            },
            {
              item: "Variation order procedures",
              critical: true,
            },
            {
              item: "Main contractor liability for subcontractors",
              critical: true,
            },
            {
              item: "Insurance requirements stated",
            },
            {
              item: "Termination conditions clearly defined",
              critical: true,
            },
            {
              item: "Dispute resolution process",
              critical: true,
            },
            {
              item: "Ownership of materials upon delivery",
            },
            {
              item: "Warranty compilation requirements",
            },
            {
              item: "Site protection responsibilities",
            },
          ],
        },
      },
      {
        title: "Additional Protection Clauses",
        list: [
          "Subcontractor Liability: 'Main Contractor bears full responsibility for all subcontractors' work quality, conduct, and damages'",
          "Insurance Requirements: 'Contractor maintains Public Liability (min S$1M), Workmen's Compensation, and All Risk Insurance'",
          "Termination Conditions: Clear grounds including work stoppage >7 days, unapproved deviations, failure to rectify defects",
          "Dispute Resolution Hierarchy: 1) Direct negotiation (14 days), 2) CASE mediation, 3) Small Claims Tribunal, 4) Civil litigation",
          "Material Ownership: 'All materials become homeowner's property upon delivery to site'",
        ],
        warning: {
          title: "Never Sign Same Day",
          content:
            "Contractors pushing for immediate signature are using high-pressure tactics. Legitimate contractors understand you need time to review. Take the contract home, sleep on it, and review with someone experienced.",
        },
      },
    ],
  },
  "legal-arsenal": {
    slug: "legal-arsenal",
    sections: [
      {
        title: "The Consumer Protection (Fair Trading) Act: Your Secret Weapon",
        content: [
          "Most homeowners don't realize they have significant legal protection under the CPFTA. This law is surprisingly broad and covers many contractor behaviors as 'unfair practices'.",
          "Understanding these protections transforms you from vulnerable consumer to empowered homeowner with legal recourse.",
        ],
      },
      {
        title: "What Constitutes 'Unfair Practice' in Renovation",
        table: {
          headers: ["Unfair Practice", "What It Looks Like", "Your Recourse"],
          rows: [
            ["False Claims", "'We're HDB approved' (when not)", "Sue for misrepresentation"],
            [
              "Misleading Representations",
              "'Need electrical upgrade for safety' (unnecessary)",
              "Claim for unnecessary costs",
            ],
            [
              "Taking Advantage",
              "Overcharging because you don't know rates",
              "Claim price difference",
            ],
            [
              "Accepting Payment Without Ability",
              "Taking deposit knowing they're closing",
              "Full refund + damages",
            ],
            [
              "Unauthorized Variations",
              "Changing materials without consent",
              "Cost of rectification",
            ],
          ],
        },
        highlight: {
          title: "Lemon Law Reality Check",
          content:
            "Lemon Law covers defective GOODS (faulty toilet bowl, warped cabinets) but NOT poor SERVICES (bad workmanship, delays). For service issues, rely on contract law and CPFTA.",
        },
      },
      {
        title: "The Documentation Masterclass",
        content: [
          "Your phone is your best legal tool. Courts accept digital evidence, but only if properly collected and preserved.",
        ],
        checklist: {
          title: "Daily Documentation Ritual",
          items: [
            {
              item: "Morning: Photo of workers on site",
              tip: "Proves contractor was working on specific dates",
            },
            {
              item: "Morning: Photo of materials being used",
              tip: "Verify correct materials per contract",
            },
            {
              item: "Morning: Screenshot WhatsApp discussions",
              tip: "Preserve conversations before deletion",
            },
            {
              item: "Evening: Video walkthrough of work done",
              tip: "Shows progress and quality issues",
            },
            {
              item: "Evening: Close-ups of any concerns",
              tip: "Document defects immediately",
            },
            {
              item: "Evening: Photo of debris/protection",
              tip: "Evidence of site management",
            },
          ],
        },
      },
      {
        title: "The Legal Power of WhatsApp",
        content: [
          "Singapore courts recognize WhatsApp as legal documentation. After any verbal discussion, always follow up with a written confirmation.",
        ],
        tip: {
          title: "WhatsApp Confirmation Template",
          content:
            "Hi [Contractor], just to confirm our discussion earlier: 1. [Point 1] 2. [Point 2] Please reply to confirm. This creates contemporaneous evidence that's harder to dispute in court.",
        },
      },
      {
        title: "Defect Documentation System",
        list: [
          "Take photo with ruler/tape measure (shows scale)",
          "Take wide shot (shows context)",
          "Take close-up (shows detail)",
          "Send to contractor with description",
          "Set specific deadline for rectification",
          "Save contractor's response",
          "If not rectified, repeat with reminder",
          "Create PDF of entire exchange for tribunal",
        ],
      },
      {
        title: "Building Your Evidence Archive",
        content: [
          "Organize evidence from day one. When disputes arise, organized documentation wins cases.",
        ],
        highlight: {
          title: "Folder Structure for Evidence",
          content: `Create folders: 1_Contract, 2_Payments, 3_Correspondence, 4_Progress_Photos (by week), 5_Defects, 6_Warranties. Back up to cloud storage. This organization impresses mediators and judges.`,
        },
      },
    ],
  },
  "dispute-resolution": {
    slug: "dispute-resolution",
    sections: [
      {
        title: "The 4-Level Dispute Resolution Roadmap",
        content: [
          "When disputes arise, following the correct escalation path maximizes your chances of resolution while minimizing costs and time. Each level has different success rates, costs, and strategies.",
        ],
        disputeFlow: [
          {
            level: 1,
            name: "Direct Negotiation",
            successRate: "40%",
            timeline: "1-2 weeks",
            cost: "S$0",
            description:
              "Professional complaint letter with specific breaches, evidence, and clear demands. Sets foundation for all subsequent action.",
            action:
              "Send formal complaint letter via email and WhatsApp. Reference specific contract clauses, attach evidence, set 7-day deadline for response.",
          },
          {
            level: 2,
            name: "CASE Mediation",
            successRate: "70%",
            timeline: "4-8 weeks",
            cost: "S$10-50",
            description:
              "Neutral mediator facilitates discussion. CaseTrust contractors MUST attend. Non-binding but highly effective.",
            action:
              "File online at case.org.sg with complete documentation. Prepare compromise position (aim for 80% of claim). Bring all evidence organized chronologically.",
          },
          {
            level: 3,
            name: "Small Claims Tribunal",
            successRate: "Variable",
            timeline: "2-4 months",
            cost: "S$10-50",
            description:
              "Legal judgment up to S$30,000. No lawyers allowed. Decision is binding but enforcement can be challenging.",
            action:
              "File at State Courts with claim form. Prepare 5-minute presentation. Bring witness if available. Focus on contract breaches, not emotions.",
          },
          {
            level: 4,
            name: "Civil Litigation",
            successRate: "Depends on case",
            timeline: "12-24 months",
            cost: "S$5,000-20,000",
            description:
              "Full legal proceedings for claims over S$30,000 or complex cases. Requires lawyer. Risk of paying opponent's costs if you lose.",
            action:
              "Consult lawyer for merit assessment. Consider cost-benefit carefully. Ensure contractor has assets to pay judgment.",
          },
        ],
      },
      {
        title: "The Professional Complaint Letter Template",
        content: [
          "Your first formal step sets the tone for everything that follows. A professional, fact-based complaint letter shows you mean business.",
        ],
        highlight: {
          title: "Letter Structure",
          content: `Date: [Date]
To: [Contractor Name]
Re: Breach of Renovation Contract - [Your Address]

I refer to our renovation contract dated [Date].

BREACHES IDENTIFIED:
1. Clause X.X (Timeline): Work was to complete by [Date]. It is now [X] days overdue.
2. Clause Y.Y (Specifications): Kitchen laminate installed is [Actual] not [Specified].

EVIDENCE: [List photos, documents attached]

DEMAND:
1. Complete all outstanding work by [Date]
2. Replace non-conforming materials
3. Pay liquidated damages of S$[Amount]

Please respond within 7 days. Failure to resolve will result in escalation to CASE/legal proceedings.

Regards,
[Your Name]`,
        },
      },
      {
        title: "CASE Mediation Strategy",
        checklist: {
          title: "CASE Preparation Checklist",
          items: [
            {
              item: "Complete contract copy",
              critical: true,
            },
            {
              item: "All payment receipts",
              critical: true,
            },
            {
              item: "Photo/video evidence organized by date",
              critical: true,
            },
            {
              item: "WhatsApp correspondence printed",
              critical: true,
            },
            {
              item: "Timeline of events (one page)",
              critical: true,
            },
            {
              item: "Calculation of losses with supporting documents",
              critical: true,
            },
            {
              item: "Compromise position prepared (usually 70-80% of claim)",
            },
            {
              item: "Key points summary (bullet points)",
            },
            {
              item: "Quotations for rectification work",
            },
          ],
        },
        tip: {
          title: "Mediation Success Secret",
          content:
            "Start high (ask for 120% of actual loss), focus on documented breaches not emotions, be willing to compromise (aim for 80%), and get any agreement in writing immediately.",
        },
      },
      {
        title: "Small Claims Tribunal Reality",
        content: [
          "The SCT provides access to justice without lawyers, but success requires preparation and realistic expectations about enforcement.",
        ],
        warning: {
          title: "The Enforcement Gap",
          content:
            "Winning at SCT doesn't guarantee payment. If contractor ignores the judgment, you need to file enforcement proceedings (costs S$3,000+). If contractor closes company, judgment becomes worthless. This is why due diligence and CaseTrust matter.",
        },
      },
      {
        title: "When to Consider Legal Action",
        list: [
          "Claims exceed S$30,000 SCT limit",
          "Criminal fraud suspected (fake documents, identity theft)",
          "Multiple victims identified (potential class action)",
          "Contractor has substantial assets to satisfy judgment",
          "Clear documentary evidence of deliberate breach",
          "Cost-benefit analysis justifies legal fees",
        ],
      },
    ],
  },
  "scammer-playbook": {
    slug: "scammer-playbook",
    sections: [
      {
        title: "The 15 Tactics Every Homeowner Must Know",
        content: [
          "We've analyzed hundreds of cases to identify exactly how contractors scam homeowners. Knowing these tactics is your first line of defense.",
          "These aren't theoretical scenarios - they're real tactics used against Singapore homeowners every week.",
        ],
      },
      {
        title: "Classic Scam Tactics",
        scamTactics: [
          {
            number: 1,
            name: "The Disappearing Contractor Classic",
            setup: "Take 50% deposit",
            execution: "Start work for 2 weeks, claim 'supplier problem,' disappear",
            yourLoss: "S$20,000-40,000",
            protection: "Never pay more than 20% upfront",
          },
          {
            number: 2,
            name: "The Material Switcheroo",
            setup: "Quote premium materials (Blum, Hafele)",
            execution: "Install China generic brands",
            yourLoss: "S$5,000-10,000 in value",
            protection: "Specify exact model numbers, verify upon delivery",
          },
          {
            number: 3,
            name: "The Variation Order Explosion",
            setup: "Initial quote S$35,000 'all-in'",
            execution: "'Unexpected' issues need addressing every week",
            yourLoss: "S$20,000 over budget",
            protection: "Written variation orders only, right to refuse",
          },
          {
            number: 4,
            name: "The Perpetual Delay",
            setup: "Promise 8 weeks completion",
            execution: "16 weeks of excuses while taking other projects",
            yourLoss: "S$3,000+ in accommodation",
            protection: "Liquidated damages clause mandatory",
          },
          {
            number: 5,
            name: "The Hostage Situation",
            setup: "Complete 90% of work",
            execution: "Hold back critical 10%, demand full payment",
            yourLoss: "Forced to pay or live with incomplete work",
            protection: "10-15% retention sum always",
          },
          {
            number: 6,
            name: "The Phoenix Company",
            setup: "'Reno Excellence Pte Ltd' today",
            execution: "Close after complaints, reopen as 'Excellence Reno Pte Ltd'",
            yourLoss: "No recourse against 'new' company",
            protection: "Check directors' history, not just company",
          },
        ],
      },
      {
        title: "Advanced Deception Tactics",
        scamTactics: [
          {
            number: 7,
            name: "The Fake Portfolio",
            setup: "Show beautiful completed projects",
            execution: "Photos stolen from Pinterest/overseas sites",
            yourLoss: "Hire incompetent contractor",
            protection: "Reverse image search, request site visits",
          },
          {
            number: 8,
            name: "The Subcontractor Blame Game",
            setup: "Problem with defective work",
            execution: "'Subcontractor's fault, not under my control'",
            yourLoss: "Endless finger-pointing, no resolution",
            protection: "Main contractor liability clause essential",
          },
          {
            number: 9,
            name: "The Quality Degradation",
            setup: "Week 1: Excellent work (while watching)",
            execution: "Week 3+: Rush job as attention shifts",
            yourLoss: "Defects everywhere",
            protection: "Regular inspections, payment tied to quality",
          },
          {
            number: 10,
            name: "The Hidden Cost Ambush",
            setup: "Quote doesn't include 'standard' items",
            execution: "Surprise S$2,000 bill for disposal, haulage, protection",
            yourLoss: "S$2,000-5,000 in 'extras'",
            protection: "'All-inclusive' clause in contract",
          },
          {
            number: 11,
            name: "The Certification Scam",
            setup: "Claims 'BCA certified,' 'HDB approved'",
            execution: "Certifications expired or fake",
            yourLoss: "No official recourse channels",
            protection: "Verify all certifications independently",
          },
          {
            number: 12,
            name: "The Pressure Close",
            setup: "'Special price, today only'",
            execution: "Rush decision, miss red flags",
            yourLoss: "Locked into bad contract",
            protection: "Never sign same day, always sleep on it",
          },
        ],
      },
      {
        title: "The Final Scam Tactics",
        scamTactics: [
          {
            number: 13,
            name: "The Incomplete Handover",
            setup: "Claim 'project complete'",
            execution: "20+ defects outstanding, pressure to sign",
            yourLoss: "Sign = accepted = no recourse",
            protection: "Detailed inspection before any handover signature",
          },
          {
            number: 14,
            name: "The Warranty Vanish",
            setup: "Promise '1-year warranty on all work'",
            execution: "Month 2: defects appear, phone disconnected",
            yourLoss: "Pay for rectification yourself",
            protection: "CaseTrust accreditation, retention sum",
          },
          {
            number: 15,
            name: "The Package Illusion",
            setup: "'Full home renovation S$25,888'",
            execution: "Package excludes 50% of necessary work",
            yourLoss: "Final cost S$45,000+",
            protection: "Detailed quotation, not package deals",
          },
        ],
      },
    ],
  },
  "protection-toolkit": {
    slug: "protection-toolkit",
    sections: [
      {
        title: "Your Master Protection System",
        content: [
          "This toolkit contains everything you need to prevent 95% of renovation disputes. Use these checklists, formulas, and systems religiously.",
        ],
      },
      {
        title: "The Contractor Interview Scorecard",
        table: {
          headers: ["Criteria", "Points (1-5)", "Red Flag If..."],
          rows: [
            ["Business Registration", "_____", "Less than 2 years old"],
            ["Physical Office", "_____", "No fixed address"],
            ["Portfolio Verification", "_____", "Can't contact references"],
            ["CaseTrust Status", "_____", "Not accredited"],
            ["Quote Detail", "_____", "Lump sum pricing"],
            ["Payment Terms", "_____", "More than 30% upfront"],
            ["Timeline Commitment", "_____", "'Estimated' only"],
            ["Communication Style", "_____", "Pushy or evasive"],
            ["Contract Willingness", "_____", "Resists detailed contract"],
            ["Insurance Coverage", "_____", "No proof provided"],
          ],
          caption: "Score below 35/50 = High risk, reconsider",
        },
      },
      {
        title: "The Payment Protection Formula",
        content: [
          "Never let contractor have more money than work completed. This formula keeps you in control:",
        ],
        table: {
          headers: ["Work Completed", "Maximum Paid", "Your Leverage"],
          rows: [
            ["0%", "10-15%", "Minimal risk"],
            ["25%", "20-25%", "Strong position"],
            ["50%", "40-45%", "Balanced"],
            ["75%", "60-65%", "Maintain control"],
            ["90%", "75-80%", "Final leverage"],
            ["100% + defects cleared", "100%", "Complete"],
          ],
        },
        warning: {
          title: "Never Exceed Formula",
          content:
            "If contractor demands payment exceeding this formula, it's a red flag. Legitimate contractors understand cash flow. Scammers want your money upfront.",
        },
      },
      {
        title: "The Daily Site Inspection Checklist",
        checklist: {
          title: "Daily Quality Control",
          items: [
            {
              item: "Work matches specifications",
              critical: true,
            },
            {
              item: "Materials are as quoted",
              critical: true,
            },
            {
              item: "Workmanship acceptable",
              critical: true,
            },
            {
              item: "Timeline on track",
            },
            {
              item: "Site cleaned daily",
            },
            {
              item: "Protection maintained",
            },
            {
              item: "Photos taken",
              critical: true,
            },
            {
              item: "Defects noted and communicated",
              critical: true,
            },
            {
              item: "Contractor response recorded",
            },
          ],
        },
      },
      {
        title: "The Evidence Archive System",
        content: ["Organization wins cases. Create this folder structure from day one:"],
        highlight: {
          title: "Folder Structure",
          content: `Renovation_Project/
├── 1_Contract/
│   ├── Signed_Contract.pdf
│   ├── Quotations/
│   └── Specifications/
├── 2_Payments/
│   ├── Receipts/
│   └── Bank_Transfers/
├── 3_Correspondence/
│   ├── WhatsApp_Backup/
│   └── Emails/
├── 4_Progress_Photos/
│   ├── Week_1/
│   └── [Continue by week]
├── 5_Defects/
│   ├── Photos/
│   └── Rectification_Records/
└── 6_Warranties/`,
        },
      },
      {
        title: "Pre-Renovation Master Checklist",
        checklist: {
          title: "Before You Start",
          items: [
            {
              item: "Set realistic budget with 20% buffer",
              critical: true,
            },
            {
              item: "Research market rates for your scope",
              critical: true,
            },
            {
              item: "Get 5+ quotations minimum",
              critical: true,
            },
            {
              item: "Verify CaseTrust accreditation",
              critical: true,
            },
            {
              item: "Check ACRA registration",
              critical: true,
            },
            {
              item: "Visit physical office",
            },
            {
              item: "Contact past clients",
              critical: true,
            },
            {
              item: "Review contract with all 12 essential clauses",
              critical: true,
            },
            {
              item: "Payment schedule protects you",
              critical: true,
            },
            {
              item: "Materials specified exactly",
              critical: true,
            },
            {
              item: "Timeline with penalties included",
              critical: true,
            },
            {
              item: "Contract reviewed by experienced person",
            },
          ],
        },
      },
    ],
  },
  "case-studies": {
    slug: "case-studies",
    sections: [
      {
        title: "Learning from Real Cases",
        content: [
          "These aren't hypotheticals - they're real cases from Singapore homeowners. Learn from their victories and mistakes.",
        ],
      },
      {
        title: "Case Study: The S$45,000 Vanishing Act",
        caseStudy: {
          title: "The S$45,000 Vanishing Act",
          type: "failure",
          background: "Young couple, 4-room BTO, engaged non-CaseTrust contractor",
          issue: "Contractor disappeared after collecting 70% payment for 20% work",
          action: "Filed police report, CASE complaint, Small Claims Tribunal",
          outcome: "Won S$31,500 judgment but contractor closed company",
          loss: "S$31,500 paid, S$8,000 to complete work",
          lesson:
            "Without CaseTrust, even winning in court doesn't guarantee payment. Due diligence and payment protection are everything.",
        },
      },
      {
        title: "Case Study: The Material Substitution Scandal",
        caseStudy: {
          title: "The Material Substitution Scandal",
          type: "failure",
          background: "Executive apartment, S$65,000 renovation budget",
          issue: "Discovered cheap substitutes for premium materials after installation",
          action: "Hired expert for assessment, filed Small Claims Tribunal case",
          outcome: "Won S$12,000 judgment, contractor closed company before payment",
          loss: "S$12,000 in value difference",
          lesson:
            "Verify materials BEFORE installation. Once installed, proving substitution is expensive and recovery unlikely.",
        },
      },
      {
        title: "Case Study: The CaseTrust Success Story",
        caseStudy: {
          title: "The CaseTrust Success Story",
          type: "success",
          background: "Same scenario as vanishing act case, but CaseTrust contractor",
          issue: "Contractor delayed repeatedly, quality issues discovered",
          action: "Filed CASE complaint, contractor forced to attend mediation",
          outcome: "Performance bond activated, recovered full deposit",
          recovery: "S$15,000 deposit returned",
          lesson:
            "CaseTrust protection worked exactly as designed. The S$30,000 bond coverage made contractor accountable.",
        },
      },
      {
        title: "Case Study: The S$67,000 Victory",
        caseStudy: {
          title: "The S$67,000 Victory",
          type: "success",
          background: "Condo renovation, S$100,000 budget, extensive defects",
          issue: "Waterproofing failure, tiling defects, carpentry misalignment",
          action: "Hired professional surveyor, documented meticulously, went to High Court",
          outcome: "Won S$67,000 in damages plus legal costs",
          recovery: "S$67,000 damages + S$15,000 legal costs",
          lesson:
            "For major disputes, professional documentation (surveyor report) is decisive. Meticulous evidence wins cases.",
        },
      },
      {
        title: "Legal Precedents That Matter",
        content: [
          "Singapore courts have established important precedents that protect homeowners. These decisions shape how disputes are resolved.",
        ],
        table: {
          headers: ["Case Type", "Court Decision", "Your Takeaway"],
          rows: [
            [
              "Waterproofing Failure",
              "Contractor liable for all consequential damage",
              "Document all water damage immediately",
            ],
            [
              "'Wet Works' Definition",
              "Includes hacking, masonry, waterproofing, tiling, testing",
              "Define milestone completion explicitly",
            ],
            [
              "Verbal Variations",
              "Not enforceable without written confirmation",
              "Never accept verbal changes",
            ],
            [
              "Defects Liability",
              "Starts from handover, not project completion",
              "Don't sign handover with outstanding defects",
            ],
            [
              "Material Substitution",
              "Breach even if 'equivalent quality'",
              "Specifications in contract are binding",
            ],
          ],
        },
      },
      {
        title: "2024 CASE Statistics Analysis",
        table: {
          headers: ["Category", "Number", "Resolution Rate"],
          rows: [
            ["Non-completion", "412", "31%"],
            ["Defective work", "285", "67%"],
            ["Payment disputes", "178", "73%"],
            ["Material issues", "87", "82%"],
            ["Total", "962", "58%"],
          ],
          caption:
            "Key Insight: Defective work and material issues easier to resolve than non-completion",
        },
        highlight: {
          title: "What This Means",
          content:
            "Once work is defective but complete, resolution rates double. This is why payment protection is critical - contractors who abandon projects are hardest to recover from.",
        },
      },
    ],
  },
  "emergency-resources": {
    slug: "emergency-resources",
    sections: [
      {
        title: "Your Renovation Protection Action Plan",
        content: [
          "When things go wrong, swift and correct action makes the difference between recovery and total loss. This is your emergency response protocol.",
        ],
      },
      {
        title: "The 10 Commandments of Renovation Protection",
        list: [
          "Never pay more than 20% upfront - No exceptions, no excuses",
          "CaseTrust contractors only - Your S$30,000 insurance policy",
          "Everything in writing - WhatsApp counts as legal documentation",
          "Specify exact models - Brand and model number for everything",
          "Progressive payments only - Pay for completed work, not promises",
          "10% final retention - Your leverage for defects rectification",
          "Document daily - Photos are your legal evidence",
          "Variation orders in writing - Verbal agreements don't exist",
          "Liquidated damages mandatory - S$100/day minimum for delays",
          "Trust but verify - Check everything, assume nothing",
        ],
      },
      {
        title: "When Things Go Wrong: Response Protocol",
        checklist: {
          title: "Emergency Response Steps",
          items: [
            {
              item: "Document issue immediately (photos, descriptions)",
              critical: true,
            },
            {
              item: "Notify contractor in writing via WhatsApp/email",
              critical: true,
            },
            {
              item: "Set reasonable deadline for response (7 days)",
              critical: true,
            },
            {
              item: "If unresolved, send formal complaint letter",
              critical: true,
            },
            {
              item: "Withhold relevant payment if justified",
            },
            {
              item: "File CASE complaint if no response",
              critical: true,
            },
            {
              item: "Attend mediation if offered",
            },
            {
              item: "Small Claims Tribunal if mediation fails",
            },
            {
              item: "Consider legal action for large claims",
            },
            {
              item: "Share experience to warn others",
            },
          ],
        },
      },
      {
        title: "Emergency Contacts",
        table: {
          headers: ["Organization", "Contact", "Purpose"],
          rows: [
            ["CASE Hotline", "6100 0315", "Complaints and mediation"],
            ["Small Claims Tribunal", "6435 5946", "Legal claims up to S$30,000"],
            ["HDB Branch", "6490 1111", "HDB renovation issues"],
            ["ACRA", "6248 6028", "Company verification"],
            ["Law Society Pro Bono", "6536 0650", "Free legal advice"],
            ["Community Justice Centre", "6557 4100", "Legal clinic"],
          ],
        },
      },
      {
        title: "Online Resources",
        list: [
          "ACRA BizFile: bizfile.acra.gov.sg - Verify company registration",
          "HDB Directory: hdb.gov.sg/directory - Check HDB licensing",
          "CaseTrust Directory: case.org.sg/casetrust - Verify accreditation",
          "Small Claims Filing: cjts.judiciary.gov.sg - File claims online",
        ],
      },
      {
        title: "Document Templates Available",
        content: ["RenoTake provides free templates to protect homeowners:"],
        list: [
          "Formal Complaint Letter Template",
          "Variation Order Form",
          "Defects Inspection Checklist",
          "Payment Schedule Calculator",
          "Contract Review Checklist",
          "Daily Site Inspection Form",
          "Evidence Organization Guide",
        ],
      },
      {
        title: "When to Hire a Lawyer",
        content: ["Legal action should be your last resort, but sometimes it's necessary:"],
        list: [
          "Claims exceeding S$30,000 SCT limit",
          "Criminal fraud suspected (forged documents, identity theft)",
          "Multiple victims identified (class action potential)",
          "Company assets need freezing",
          "Complex contractual disputes",
          "Contractor has substantial assets worth pursuing",
        ],
        warning: {
          title: "Cost Reality Check",
          content:
            "Lawyer fees: S$5,000-20,000. Timeline: 12-24 months. Risk: Losing means paying their legal costs too. Always do cost-benefit analysis first.",
        },
      },
      {
        title: "Final Words: The Psychology of Protection",
        content: [
          "The biggest mistake homeowners make isn't choosing the wrong contractor—it's trusting too much and verifying too little. Contractors aren't your friends during renovation; they're business partners with different interests.",
          "Keep it professional, document everything, and never let emotional decisions override contractual protections. Your dream home is absolutely achievable. But dreams without protection become nightmares.",
          "This guide is your protection. Use it. With this knowledge, you have more protection than 95% of homeowners. You're ready.",
        ],
        highlight: {
          title: "Remember",
          content:
            "You're not trying to avoid renovation—you're avoiding becoming statistic #963. Armed with this guide, your renovation story will be one of success, not struggle.",
        },
      },
    ],
  },
}
