import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ask RenoAI - AI Renovation Assistant | Coming Q4 2025 | RenoTake Singapore",
  description:
    "Join the waitlist for RenoAI - Singapore's first AI renovation assistant. Get instant answers to HDB, BTO renovation questions 24/7. Trained on local regulations and real project data. Launching Q4 2025.",
  keywords:
    "RenoAI, AI renovation assistant Singapore, HDB renovation chatbot, BTO renovation AI, Singapore renovation questions, automated renovation help, renovation AI 2025",
  openGraph: {
    title: "Ask RenoAI - Your 24/7 AI Renovation Assistant (Coming Q4 2025)",
    description:
      "Be first to access RenoAI - instant answers to all your Singapore renovation questions. Trained on HDB regulations, real costs, and local expertise.",
    url: "https://renotake.sg/ask-renoai",
    siteName: "RenoTake",
    locale: "en_SG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://renotake.sg/ask-renoai",
  },
}

export default function AskRenoAILayout({ children }: { children: React.ReactNode }) {
  return children
}
