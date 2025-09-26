import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | RenoTake Singapore - Renovation Help & Support",
  description:
    "Get in touch with RenoTake for renovation guidance, content questions, or support. We respond within 2 business days. Email, contact form available.",
  keywords:
    "contact RenoTake, renovation help Singapore, BTO renovation support, HDB renovation questions, renovation guide contact",
  openGraph: {
    title: "Contact RenoTake - Singapore Renovation Support",
    description:
      "Need help with your renovation? Contact RenoTake for guidance on BTO, HDB, and condo renovations in Singapore.",
    url: "https://renotake.sg/contact",
    siteName: "RenoTake",
    locale: "en_SG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://renotake.sg/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
