import { Metadata } from "next"
import { generateSEOMetadata } from "@/components/seo-metadata"

export const metadata: Metadata = generateSEOMetadata({
  title: "Singapore Renovation Q&A - Quick Answers to HDB BTO Questions",
  description:
    "Get instant answers to Singapore renovation questions. HDB rules, BTO permits, contractor tips, costs breakdown. 100+ expert-verified Q&As updated daily.",
  keywords: [
    "HDB renovation questions",
    "BTO renovation FAQ",
    "Singapore renovation answers",
    "can hack walls HDB",
    "renovation permit Singapore",
    "contractor deposit amount",
    "HDB renovation rules",
    "BTO renovation timeline",
    "renovation cost Singapore",
    "HDB flooring options",
  ],
  canonicalUrl: "https://renotake.sg/answers",
})

export default function AnswersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
