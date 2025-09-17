import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RenoTake - Singapore's Intelligent Renovation Guide",
  description: "Navigate your BTO renovation journey with confidence. Comprehensive guides, cost breakdowns, and AI-powered assistance for Singapore homeowners.",
  keywords: "BTO renovation, HDB renovation, Singapore renovation guide, renovation cost, contractor guide, HDB permits",
  authors: [{ name: "RenoTake" }],
  openGraph: {
    title: "RenoTake - Singapore's Intelligent Renovation Guide",
    description: "Navigate your BTO renovation journey with confidence",
    url: "https://renotake.sg",
    siteName: "RenoTake",
    locale: "en_SG",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
