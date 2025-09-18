export interface Part {
  slug: string
  title: string
  description: string
  protection?: string
  highlights?: string[]
  color: string
}

export const parts: Part[] = [
  {
    slug: "contractor-vetting",
    title: "The Contractor Vetting Masterclass",
    description:
      "How to spot scammers in 10 minutes and perform bulletproof background checks that save you from S$50,000 losses.",
    protection: "Saves S$50,000 in potential losses",
    highlights: ["ACRA checks", "Portfolio verification", "CaseTrust advantage"],
    color: "red",
  },
  {
    slug: "contract-deep-dive",
    title: "The Contract Deep Dive",
    description:
      "The 12 essential clauses that must be in your contract, plus payment schedules that keep you in control.",
    protection: "Prevents S$10,000-15,000 in disputes",
    highlights: ["Essential clauses", "Payment leverage", "Material specifications"],
    color: "orange",
  },
  {
    slug: "legal-arsenal",
    title: "Your Legal Arsenal",
    description:
      "Consumer protection laws, documentation strategies, and evidence collection that wins cases.",
    protection: "Legal framework mastery",
    highlights: ["CPFTA rights", "Documentation system", "WhatsApp evidence"],
    color: "amber",
  },
  {
    slug: "dispute-resolution",
    title: "The Dispute Resolution Roadmap",
    description:
      "Your 4-level escalation strategy from negotiation to Small Claims Tribunal, with success rates and templates.",
    protection: "70% mediation success rate",
    highlights: ["CASE mediation", "SCT process", "Enforcement reality"],
    color: "yellow",
  },
  {
    slug: "scammer-playbook",
    title: "The Scammer's Playbook Exposed",
    description:
      "15 tactics every homeowner must know, from the disappearing contractor to the variation order explosion.",
    protection: "Recognize scams instantly",
    highlights: ["15 scam tactics", "Real examples", "Protection strategies"],
    color: "lime",
  },
  {
    slug: "protection-toolkit",
    title: "Your Protection Toolkit",
    description:
      "Master checklists, payment formulas, and evidence systems that prevent 95% of disputes.",
    protection: "Complete prevention system",
    highlights: ["Interview scorecard", "Daily checklists", "Payment formula"],
    color: "green",
  },
  {
    slug: "case-studies",
    title: "Case Studies & Precedents",
    description:
      "Real cases from S$45,000 losses to S$67,000 victories, plus legal precedents that protect you.",
    protection: "Learn from 962 cases",
    highlights: ["Victory stories", "Costly mistakes", "Court decisions"],
    color: "emerald",
  },
  {
    slug: "emergency-resources",
    title: "Action Plan & Resources",
    description:
      "Your step-by-step response protocol when things go wrong, plus all emergency contacts and templates.",
    protection: "Complete action framework",
    highlights: ["Response protocol", "Emergency contacts", "Document templates"],
    color: "teal",
  },
]
