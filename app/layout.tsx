import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata, Viewport } from "next"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import ScrollToTop from "@/components/scroll-to-top"
import Script from "next/script"
import { generateLocalBusinessSchema, generateStructuredData } from "@/components/seo-metadata"
import GoogleAnalytics from "@/components/google-analytics"
import EmailCapturePopup from "@/components/email-capture-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://renotake.sg"),
  title: {
    default: "RenoTake - Singapore's #1 HDB BTO Renovation Guide & Cost Calculator",
    template: "%s | RenoTake Singapore",
  },
  description:
    "Free HDB & BTO renovation guides, cost calculators, and contractor tips for Singapore homeowners. Get accurate 2024 pricing, permits guide, and expert advice. Start your renovation journey today!",
  keywords:
    "HDB renovation Singapore, BTO renovation guide, Singapore renovation cost, HDB renovation contractor, renovation permit Singapore, 4-room HDB renovation, 5-room BTO renovation, condo renovation Singapore, renovation calculator, HDB hacking rules, renovation timeline, Singapore interior design, home renovation Singapore 2024",
  authors: [{ name: "RenoTake" }],
  creator: "RenoTake",
  publisher: "RenoTake",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "RenoTake - Singapore's #1 HDB BTO Renovation Guide",
    description:
      "Free renovation guides, accurate cost calculators, and expert tips for Singapore homeowners. Navigate your HDB/BTO renovation with confidence.",
    url: "https://renotake.sg",
    siteName: "RenoTake",
    locale: "en_SG",
    type: "website",
    images: [
      {
        url: "https://renotake.sg/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "RenoTake - Singapore Renovation Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RenoTake - Singapore HDB/BTO Renovation Guide",
    description: "Free guides & calculators for your Singapore renovation",
    creator: "@renotakesg",
    images: ["https://renotake.sg/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://renotake.sg",
  },
  other: {
    "geo.region": "SG",
    "geo.placename": "Singapore",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = generateStructuredData("website", {})
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang="en">
      <head>
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <ScrollToTop />
        <EmailCapturePopup />
        <Toaster />
      </body>
    </html>
  )
}
