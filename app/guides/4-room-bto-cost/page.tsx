import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock,
  Home,
  TrendingUp,
  DollarSign,
  AlertCircle,
  FileText,
  Users,
  PieChart,
  Package,
  Wrench,
  Lightbulb,
  ChevronRight,
  Download,
} from "lucide-react"
import { generateSEOMetadata } from "@/components/seo-metadata"
import Script from "next/script"

export const metadata: Metadata = generateSEOMetadata({
  title: "4-Room BTO Renovation Cost Singapore 2024-2025 - Detailed Breakdown",
  description:
    "Complete 4-room BTO renovation cost guide for Singapore. Real 2024 prices from S$30,000-S$70,000, room-by-room breakdown, contractor quotes, money-saving tips. Based on 500+ actual renovations.",
  keywords: [
    "4-room BTO renovation cost Singapore",
    "4-room HDB renovation price 2024",
    "BTO renovation budget Singapore",
    "4-room flat renovation cost breakdown",
    "HDB 4-room renovation package",
    "Singapore BTO renovation expenses",
    "4-room BTO carpentry cost",
    "HDB renovation quote 2024",
    "BTO kitchen renovation price",
    "4-room flat renovation contractor",
  ],
  canonicalUrl: "https://renotake.sg/guides/4-room-bto-cost",
})

const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Budget for 4-Room BTO Renovation in Singapore",
    description:
      "Complete guide to understanding and planning your 4-room BTO renovation budget in Singapore, with detailed cost breakdowns and money-saving strategies.",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "SGD",
      value: "52500",
    },
    totalTime: "PT3M",
    supply: [
      {
        "@type": "HowToSupply",
        name: "Renovation budget",
      },
      {
        "@type": "HowToSupply",
        name: "Contractor quotes",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Determine your renovation tier",
        text: "Choose between budget (S$20-40K), mid-range (S$40-70K), or premium (S$70K+) renovation",
      },
      {
        "@type": "HowToStep",
        name: "Understand cost components",
        text: "Break down costs by carpentry, masonry, electrical, plumbing, and other works",
      },
      {
        "@type": "HowToStep",
        name: "Plan room-by-room budget",
        text: "Allocate budget for kitchen, bathrooms, living room, and bedrooms",
      },
      {
        "@type": "HowToStep",
        name: "Add buffer and hidden costs",
        text: "Include 10-15% contingency and account for permits, GST, and other extras",
      },
    ],
  }
}

export default function FourRoomBTOCostGuide() {
  const structuredData = generateStructuredData()

  return (
    <>
      <Script
        id="structured-data-4room-bto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <nav className="mb-8 flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <Link
                      href="/guides"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2"
                    >
                      Guides
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                      4-Room BTO Cost
                    </span>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                <TrendingUp className="mr-1 h-4 w-4" />
                2024-2025 Market Rates
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
                The Real Cost of Renovating
                <span className="block text-primary">Your 4-Room BTO</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
                Complete breakdown of actual 4-room BTO renovation costs in Singapore. Based on{" "}
                <strong>500+ completed projects</strong> from 2024-2025, with detailed pricing for
                every aspect of your 90 sqm home transformation.
              </p>
            </div>

            {/* Key Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <DollarSign className="mx-auto mb-3 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-charcoal">S$52.5K</div>
                <div className="mt-2 text-sm text-gray-600">Average Cost</div>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <Home className="mx-auto mb-3 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-charcoal">90 sqm</div>
                <div className="mt-2 text-sm text-gray-600">Typical Size</div>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <Clock className="mx-auto mb-3 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-charcoal">3-4 mths</div>
                <div className="mt-2 text-sm text-gray-600">Timeline</div>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-charcoal">500+</div>
                <div className="mt-2 text-sm text-gray-600">Case Studies</div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#budget-tiers"
                className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-white transition-colors hover:bg-primary/90"
              >
                View Budget Tiers
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#cost-breakdown"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-charcoal transition-colors hover:bg-gray-50"
              >
                <Calculator className="mr-2 h-5 w-5" />
                See Detailed Breakdown
              </a>
            </div>

            {/* Article Info */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                15 min read
              </span>
              <span className="flex items-center">
                <FileText className="mr-1 h-4 w-4" />
                Updated: December 2024
              </span>
              <span className="flex items-center">
                <Users className="mr-1 h-4 w-4" />
                By RenoTake Experts
              </span>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center text-lg font-semibold text-charcoal">
                <FileText className="mr-2 h-5 w-5 text-primary" />
                Table of Contents
              </h2>
              <nav className="space-y-2">
                <a
                  href="#market-reality"
                  className="block rounded px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                >
                  1. The S$60,000 Question: Market Reality Check
                </a>
                <a
                  href="#budget-tiers"
                  className="block rounded px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                >
                  2. Three Budget Tiers: From Essential to Luxury
                </a>
                <a
                  href="#cost-breakdown"
                  className="block rounded px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                >
                  3. Complete Cost Breakdown by Work Type
                </a>
                <a
                  href="#room-by-room"
                  className="block rounded px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                >
                  4. Room-by-Room Investment Guide
                </a>
                <a
                  href="#hidden-costs"
                  className="block rounded px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                >
                  5. Hidden Costs & Essential Extras
                </a>
                <a
                  href="#money-saving"
                  className="block rounded px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                >
                  6. Smart Spending Strategies
                </a>
              </nav>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700">
                Receiving the keys to your new 4-room Build-To-Order (BTO) flat marks a significant
                milestone in your Singapore homeownership journey. The approximately{" "}
                <strong>90-square-metre space</strong> represents a blank canvas, ready to be
                transformed into your dream home. However, this excitement often comes with a
                pressing financial question:{" "}
                <strong>how much does it truly cost to renovate a 4-room BTO in 2024-2025?</strong>
              </p>

              <div className="my-8 rounded-lg bg-primary/5 p-6">
                <h3 className="mb-3 flex items-center text-lg font-semibold text-charcoal">
                  <AlertCircle className="mr-2 h-5 w-5 text-primary" />
                  Why BTO Renovation Costs Are Unique
                </h3>
                <p className="text-gray-700">
                  Unlike resale flats, new BTO units require less demolition but need{" "}
                  <strong>everything built from scratch</strong> - flooring, electrical wiring,
                  cabinetry, and plumbing. This comprehensive guide provides granular breakdowns
                  based on actual 2024-2025 market rates, helping you plan with confidence.
                </p>
              </div>
            </div>

            {/* Section 1: Market Reality */}
            <section id="market-reality" className="mt-16">
              <h2 className="mb-6 text-3xl font-bold text-charcoal">
                The S$60,000 Question: Establishing Your Overall Budget
              </h2>

              <div className="rounded-lg bg-white p-8 shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-charcoal">
                  2024-2025 Market Benchmark
                </h3>
                <p className="mb-6 text-gray-700">
                  For homeowners planning a 4-room BTO renovation in 2024-2025, the most reliable
                  budget benchmark falls between{" "}
                  <strong className="text-primary">S$52,500 and S$66,000</strong>. This represents a
                  6-8% increase from 2023 averages (S$49,500-S$62,800) due to rising material and
                  labor costs.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-2xl font-bold text-primary">S$28,000</div>
                    <div className="text-sm text-gray-600">Minimum Essential</div>
                    <div className="mt-2 text-xs text-gray-500">Tampines GreenGlen Project</div>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-4">
                    <div className="text-2xl font-bold text-primary">S$52,500 - S$66,000</div>
                    <div className="text-sm font-semibold text-gray-700">Market Average</div>
                    <div className="mt-2 text-xs text-gray-600">Most Common Range</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-2xl font-bold text-primary">S$110,000</div>
                    <div className="text-sm text-gray-600">Luxury Transformation</div>
                    <div className="mt-2 text-xs text-gray-500">Kallang Breeze Project</div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-yellow-50 p-4">
                  <p className="flex items-start text-sm text-gray-700">
                    <Lightbulb className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-yellow-600" />
                    <span>
                      <strong>Key Insight:</strong> The "average" isn't a fixed starting point but
                      reflects popular choices balancing aesthetics with budget. Your actual cost
                      depends on specific decisions about materials, carpentry extent, and layout
                      changes.
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-charcoal">
                  What Drives Cost Variations?
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h4 className="mb-2 font-semibold text-charcoal">Lower Cost Drivers</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-green-600" />
                        Minimal hacking and structural changes
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-green-600" />
                        Vinyl flooring instead of tiles
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-green-600" />
                        Loose furniture over custom built-ins
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-green-600" />
                        Standard laminate finishes
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h4 className="mb-2 font-semibold text-charcoal">Higher Cost Drivers</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 mt-0.5 h-4 w-4 text-red-600" />
                        Extensive hacking for open layouts
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 mt-0.5 h-4 w-4 text-red-600" />
                        Premium materials (sintered stone, quartz)
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 mt-0.5 h-4 w-4 text-red-600" />
                        Extensive custom carpentry throughout
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 mt-0.5 h-4 w-4 text-red-600" />
                        Glass partitions and unique features
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Budget Tiers */}
            <section id="budget-tiers" className="mt-16">
              <h2 className="mb-6 text-3xl font-bold text-charcoal">
                Decoding Your Budget: From Essential to Luxury
              </h2>

              <p className="mb-8 text-lg text-gray-700">
                To effectively plan your 4-room BTO renovation, align your financial capacity with
                desired outcomes. Here are three distinct tiers based on actual Singapore
                renovations:
              </p>

              {/* Tier 1: Budget */}
              <div className="mb-6 rounded-lg bg-white p-8 shadow-md">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-charcoal">
                    Tier 1: Budget-Conscious Renovation
                  </h3>
                  <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
                    S$20,000 - S$40,000
                  </span>
                </div>

                <p className="mb-4 text-gray-700">
                  Prioritizes functionality and immediate livability while keeping costs minimal.
                  Perfect for young couples or those saving for other financial goals.
                </p>

                <div className="mb-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold text-charcoal">What's Included:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Full unit painting (basic colors)</li>
                      <li>• Vinyl or laminate flooring throughout</li>
                      <li>• Basic electrical works (lights & points)</li>
                      <li>• Standard kitchen cabinets (laminate)</li>
                      <li>• Basic bathroom fixtures</li>
                      <li>• Ready-made or minimal carpentry</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-charcoal">Key Strategy:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Avoid structural changes</li>
                      <li>• Use loose furniture for storage</li>
                      <li>• Focus on paint & flooring impact</li>
                      <li>• DIY where possible</li>
                      <li>• Phase renovations over time</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-green-50 p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Real Example:</strong> S$28,000 renovation at Tampines GreenGlen -
                    created a stylish, functional home focusing strictly on essentials.
                  </p>
                </div>
              </div>

              {/* Tier 2: Mid-Range */}
              <div className="mb-6 rounded-lg bg-white p-8 shadow-md">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-charcoal">
                    Tier 2: Mid-Range Mainstay
                  </h3>
                  <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-800">
                    S$40,000 - S$70,000
                  </span>
                </div>

                <p className="mb-4 text-gray-700">
                  The "sweet spot" representing the most common approach. Balances quality
                  materials, custom features, and long-term functionality.
                </p>

                <div className="mb-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold text-charcoal">What's Included:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Quality tiles in common areas</li>
                      <li>• Custom kitchen with quartz tops</li>
                      <li>• Master bedroom full wardrobe</li>
                      <li>• TV console & feature wall</li>
                      <li>• Bathroom tile overlay</li>
                      <li>• Professional design consultation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-charcoal">Key Strategy:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Invest in key carpentry pieces</li>
                      <li>• Balance material costs</li>
                      <li>• Minor hacking for better flow</li>
                      <li>• Quality where it matters most</li>
                      <li>• Include design expertise</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-blue-50 p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Real Example:</strong> S$53,000 project at Rivervale Shores -
                    comprehensive renovation with carpentry, plumbing, and quality finishes.
                  </p>
                </div>
              </div>

              {/* Tier 3: Premium */}
              <div className="mb-6 rounded-lg bg-white p-8 shadow-md">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-charcoal">
                    Tier 3: Premium Transformation
                  </h3>
                  <span className="rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-800">
                    S$70,000 and Above
                  </span>
                </div>

                <p className="mb-4 text-gray-700">
                  For homeowners seeking highly customized, design-led spaces with luxury materials
                  and unique architectural features.
                </p>

                <div className="mb-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold text-charcoal">What's Included:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Sintered stone or marble surfaces</li>
                      <li>• Extensive layout reconfiguration</li>
                      <li>• Bespoke carpentry throughout</li>
                      <li>• Kitchen island & premium appliances</li>
                      <li>• Smart home automation</li>
                      <li>• Designer fixtures & fittings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-charcoal">Key Strategy:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Prioritize unique design</li>
                      <li>• Use luxury materials</li>
                      <li>• Create open-concept layouts</li>
                      <li>• Integrate smart features</li>
                      <li>• Focus on customization</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-purple-50 p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Real Examples:</strong> S$80,000 at Waterway Sunrise II (glass block
                    peninsula), S$110,000 at Kallang Breeze (extensive hacking & rewiring).
                  </p>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Feature
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Budget Tier
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Mid-Range
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Premium
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          Hacking
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Minimal/None
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Minor (kitchen)
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Extensive layout
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          Flooring
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Vinyl/Laminate
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Mixed vinyl/tiles
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Premium tiles/wood
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          Kitchen
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Basic laminate
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Quartz tops, custom
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Designer kitchen
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          Carpentry
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Kitchen only
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Kitchen + bedroom
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          Whole house custom
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 3: Cost Breakdown */}
            <section id="cost-breakdown" className="mt-16">
              <h2 className="mb-6 text-3xl font-bold text-charcoal">
                The Anatomy of a Renovation Quote: Complete Breakdown by Work Type
              </h2>

              <div className="mb-6 rounded-lg bg-yellow-50 p-4">
                <p className="flex items-start text-sm text-gray-700">
                  <AlertCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-600" />
                  <span>
                    <strong>Important:</strong> Renovation costs are interconnected. A single
                    decision like hacking a wall (S$700) triggers additional costs: floor repair,
                    electrical re-routing, plastering, painting, and debris disposal - easily
                    multiplying the initial cost by 3-4x.
                  </span>
                </p>
              </div>

              {/* Work Type Cards */}
              <div className="space-y-6">
                {/* Hacking & Demolition */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="flex items-center text-lg font-semibold text-charcoal">
                      <Wrench className="mr-2 h-5 w-5 text-primary" />
                      Hacking & Demolition
                    </h3>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
                      S$500 - S$5,500
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-gray-700">
                    Removal of existing structures for layout changes. Less extensive in BTOs than
                    resale flats.
                  </p>
                  <div className="space-y-2 rounded-lg bg-gray-50 p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Complete hacking package</span>
                      <span className="font-semibold text-charcoal">~S$5,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Single partition wall removal</span>
                      <span className="font-semibold text-charcoal">S$400-S$900</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Floor tile hacking</span>
                      <span className="font-semibold text-charcoal">S$3-S$6 psf</span>
                    </div>
                  </div>
                </div>

                {/* Masonry */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="flex items-center text-lg font-semibold text-charcoal">
                      <Package className="mr-2 h-5 w-5 text-primary" />
                      Masonry (Flooring & Tiling)
                    </h3>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
                      S$5,000 - S$12,000
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-gray-700">
                    All "wet works" including tiling, cement bases, and plastering. A foundational
                    expense.
                  </p>
                  <div className="space-y-2 rounded-lg bg-gray-50 p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Vinyl flooring installed</span>
                      <span className="font-semibold text-charcoal">S$4-S$9 psf</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Ceramic tiles installed</span>
                      <span className="font-semibold text-charcoal">S$5-S$11 psf</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tiling labor (HDB living)</span>
                      <span className="font-semibold text-charcoal">S$6.00 psf</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total flooring budget</span>
                      <span className="font-semibold text-charcoal">S$3,000-S$10,000</span>
                    </div>
                  </div>
                </div>

                {/* Carpentry */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="flex items-center text-lg font-semibold text-charcoal">
                      <Package className="mr-2 h-5 w-5 text-primary" />
                      Carpentry (The Budget Multiplier)
                    </h3>
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                      S$10,000 - S$25,000+
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-gray-700">
                    Often the largest variable component. Directly influences aesthetics and
                    functionality.
                  </p>
                  <div className="space-y-2 rounded-lg bg-gray-50 p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Kitchen cabinets (top+bottom)</span>
                      <span className="font-semibold text-charcoal">S$215-S$240 pfr</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Full-height wardrobe</span>
                      <span className="font-semibold text-charcoal">S$210-S$400 pfr</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">TV console (suspended)</span>
                      <span className="font-semibold text-charcoal">S$110-S$220 pfr</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Feature wall</span>
                      <span className="font-semibold text-charcoal">S$20-S$40 psf</span>
                    </div>
                  </div>
                </div>

                {/* Electrical Works */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="flex items-center text-lg font-semibold text-charcoal">
                      <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                      Electrical Works
                    </h3>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
                      S$3,000 - S$5,500
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-gray-700">
                    Critical, non-negotiable aspect ensuring safety and convenience.
                  </p>
                  <div className="space-y-2 rounded-lg bg-gray-50 p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Full rewiring (4-room BTO)</span>
                      <span className="font-semibold text-charcoal">S$3,500-S$5,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">New lighting/power point</span>
                      <span className="font-semibold text-charcoal">S$40-S$80</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Ceiling fan installation</span>
                      <span className="font-semibold text-charcoal">S$80-S$180</span>
                    </div>
                  </div>
                </div>

                {/* Plumbing Works */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="flex items-center text-lg font-semibold text-charcoal">
                      <Wrench className="mr-2 h-5 w-5 text-primary" />
                      Plumbing Works
                    </h3>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
                      S$1,500 - S$3,500
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-gray-700">
                    Essential for daily function, particularly in kitchen and bathrooms.
                  </p>
                  <div className="space-y-2 rounded-lg bg-gray-50 p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Whole-house replumbing</span>
                      <span className="font-semibold text-charcoal">~S$2,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Toilet bowl installation</span>
                      <span className="font-semibold text-charcoal">S$200-S$350</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Basin installation</span>
                      <span className="font-semibold text-charcoal">S$150-S$250</span>
                    </div>
                  </div>
                </div>

                {/* Painting */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="flex items-center text-lg font-semibold text-charcoal">
                      <Package className="mr-2 h-5 w-5 text-primary" />
                      Painting
                    </h3>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
                      S$1,500 - S$3,000
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-gray-700">
                    Most transformative yet affordable component. Fresh paint makes everything look
                    new.
                  </p>
                  <div className="space-y-2 rounded-lg bg-gray-50 p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Basic paint (Nippon Matex)</span>
                      <span className="font-semibold text-charcoal">S$700-S$1,200</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Premium paint (odourless)</span>
                      <span className="font-semibold text-charcoal">S$1,800-S$2,400</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Includes sealer + 2 coats</span>
                      <span className="font-semibold text-charcoal">All walls/ceilings</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Budget Allocation Chart */}
              <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 flex items-center text-lg font-semibold text-charcoal">
                  <PieChart className="mr-2 h-5 w-5 text-primary" />
                  Typical Budget Allocation (S$60,000 Total)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="mr-3 h-3 w-3 rounded-full bg-primary"></div>
                    <span className="flex-1 text-sm text-gray-700">Carpentry (30-40%)</span>
                    <span className="text-sm font-semibold text-charcoal">S$18,000 - S$24,000</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="flex-1 text-sm text-gray-700">Masonry & Tiling (20-30%)</span>
                    <span className="text-sm font-semibold text-charcoal">S$12,000 - S$18,000</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="flex-1 text-sm text-gray-700">
                      Electrical & Plumbing (10-15%)
                    </span>
                    <span className="text-sm font-semibold text-charcoal">S$6,000 - S$9,000</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-3 w-3 rounded-full bg-yellow-500"></div>
                    <span className="flex-1 text-sm text-gray-700">Hacking & Demo (5-10%)</span>
                    <span className="text-sm font-semibold text-charcoal">S$3,000 - S$6,000</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-3 w-3 rounded-full bg-purple-500"></div>
                    <span className="flex-1 text-sm text-gray-700">Other Works (8-12%)</span>
                    <span className="text-sm font-semibold text-charcoal">S$4,800 - S$7,200</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Room by Room */}
            <section id="room-by-room" className="mt-16">
              <h2 className="mb-6 text-3xl font-bold text-charcoal">
                Room-by-Room Investment Guide: Where Your Money Really Goes
              </h2>

              <p className="mb-8 text-lg text-gray-700">
                Understanding room-specific costs helps prioritize your budget. Kitchen and
                bathrooms typically command the largest share due to concentrated carpentry,
                plumbing, and electrical work.
              </p>

              <div className="grid gap-6">
                {/* Kitchen */}
                <div className="rounded-lg bg-white p-8 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-charcoal">
                      The Kitchen: Heart of the Home
                    </h3>
                    <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-800">
                      S$8,000 - S$25,000+
                    </span>
                  </div>

                  <p className="mb-4 text-gray-700">
                    The most complex room requiring carpentry, plumbing, electrical, and masonry
                    work. A mid-range kitchen renovation typically includes:
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-charcoal">Cost Breakdown:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>20ft cabinets (top+bottom)</span>
                          <span className="font-semibold">S$4,400</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Quartz/sintered stone top</span>
                          <span className="font-semibold">S$1,500-S$2,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Backsplash & floor tiling</span>
                          <span className="font-semibold">S$2,000-S$3,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Plumbing & electrical</span>
                          <span className="font-semibold">S$500-S$1,000</span>
                        </li>
                      </ul>
                      <div className="mt-3 border-t pt-3">
                        <div className="flex justify-between font-semibold text-charcoal">
                          <span>Mid-Range Total:</span>
                          <span>S$8,400 - S$10,400</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-charcoal">Money-Saving Tips:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Choose laminate over stone countertops (-S$1,000)</li>
                        <li>• Standard sizes vs custom dimensions</li>
                        <li>• Open shelving instead of top cabinets</li>
                        <li>• Tile only backsplash, not full walls</li>
                        <li>• Buy appliances separately during sales</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bathrooms */}
                <div className="rounded-lg bg-white p-8 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-charcoal">
                      Bathrooms: A Sanctuary's Price
                    </h3>
                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-800">
                      S$6,000 - S$12,000 per bathroom
                    </span>
                  </div>

                  <p className="mb-4 text-gray-700">
                    Renovating two bathrooms is a significant investment. Common cost-saving
                    approach: overlay tiles instead of hacking.
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-charcoal">
                        Cost Breakdown (2 bathrooms):
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>Tile overlay (both)</span>
                          <span className="font-semibold">S$7,000-S$8,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Toilet bowls (x2)</span>
                          <span className="font-semibold">S$560-S$1,400</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Basins & taps (x2)</span>
                          <span className="font-semibold">S$600-S$1,200</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Glass shower screens</span>
                          <span className="font-semibold">S$1,000+</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Vanity cabinets</span>
                          <span className="font-semibold">S$1,500-S$3,000</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-charcoal">Smart Choices:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Overlay tiles saves S$3,000+ vs hacking</li>
                        <li>• Choose local brands for fixtures</li>
                        <li>• Shower curtain vs glass screen (-S$800)</li>
                        <li>• Wall-mounted sink vs vanity cabinet</li>
                        <li>• Focus upgrades on master bathroom</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Living & Dining */}
                <div className="rounded-lg bg-white p-8 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-charcoal">
                      Living & Dining: First Impressions
                    </h3>
                    <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
                      S$5,000 - S$15,000
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-charcoal">Typical Costs:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>Vinyl flooring</span>
                          <span className="font-semibold">S$3,000-S$6,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>TV feature wall & console</span>
                          <span className="font-semibold">S$2,000-S$5,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>False ceiling with cove lighting</span>
                          <span className="font-semibold">S$2,000-S$3,000</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-charcoal">Design Impact:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Feature wall creates focal point</li>
                        <li>• Quality flooring unifies space</li>
                        <li>• Good lighting transforms ambience</li>
                        <li>• Open layout maximizes space</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bedrooms */}
                <div className="rounded-lg bg-white p-8 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-charcoal">
                      Bedrooms: Personal Retreats
                    </h3>
                    <span className="rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-800">
                      S$4,000 - S$10,000+ per room
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-charcoal">Master Bedroom Costs:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>6ft full-height wardrobe</span>
                          <span className="font-semibold">S$1,500-S$2,400</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Vinyl flooring</span>
                          <span className="font-semibold">S$1,200-S$1,500</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Painting & electrical</span>
                          <span className="font-semibold">S$800-S$1,500</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-charcoal">Other Bedrooms:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Consider modular wardrobes</li>
                        <li>• Use same flooring throughout</li>
                        <li>• Simple paint schemes save costs</li>
                        <li>• Platform storage beds maximize space</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Hidden Costs */}
            <section id="hidden-costs" className="mt-16">
              <h2 className="mb-6 text-3xl font-bold text-charcoal">
                Beyond the Quote: Uncovering Hidden Costs and Essential Extras
              </h2>

              <div className="mb-6 rounded-lg bg-red-50 p-4">
                <p className="flex items-start text-sm text-gray-700">
                  <AlertCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span>
                    <strong>Critical:</strong> A comprehensive budget must account for expenses
                    outside the renovation contract. Overlooking these can lead to 20-30% budget
                    overrun.
                  </span>
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Hidden Renovation Costs */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-charcoal">
                    Hidden Renovation Costs
                  </h3>
                  <ul className="space-y-3">
                    <li className="rounded-lg bg-gray-50 p-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-charcoal">Haulage & Disposal</span>
                        <span className="text-sm font-semibold text-primary">S$300 - S$1,000</span>
                      </div>
                      <p className="mt-1 text-xs text-gray-600">
                        Town council fee is only S$215. Contractors charge for labor to move
                        materials.
                      </p>
                    </li>
                    <li className="rounded-lg bg-gray-50 p-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-charcoal">HDB Permits</span>
                        <span className="text-sm font-semibold text-primary">S$500 - S$1,000</span>
                      </div>
                      <p className="mt-1 text-xs text-gray-600">
                        Required for hacking walls, replacing windows, etc.
                      </p>
                    </li>
                    <li className="rounded-lg bg-gray-50 p-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-charcoal">GST (9%)</span>
                        <span className="text-sm font-semibold text-primary">S$5,400 on S$60k</span>
                      </div>
                      <p className="mt-1 text-xs text-gray-600">
                        Confirm if quotes include GST. Can add significant amount.
                      </p>
                    </li>
                    <li className="rounded-lg bg-gray-50 p-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-charcoal">Professional Fees</span>
                        <span className="text-sm font-semibold text-primary">5-10% of project</span>
                      </div>
                      <p className="mt-1 text-xs text-gray-600">
                        Interior designer fees for consultation and management.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* The "Other" Budget */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-charcoal">
                    The "Other" Budget (Not in Quote)
                  </h3>
                  <ul className="space-y-3">
                    <li className="rounded-lg bg-gray-50 p-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-charcoal">Air Conditioning</span>
                        <span className="text-sm font-semibold text-primary">
                          S$4,000 (System 4)
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-gray-600">
                        Essential for Singapore climate, not included in renovation.
                      </p>
                    </li>
                    <li className="rounded-lg bg-gray-50 p-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-charcoal">Kitchen Appliances</span>
                        <span className="text-sm font-semibold text-primary">
                          S$3,000 - S$8,000
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-gray-600">
                        Fridge, washer, hob, hood, oven - buy during sales.
                      </p>
                    </li>
                    <li className="rounded-lg bg-gray-50 p-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-charcoal">Furniture</span>
                        <span className="text-sm font-semibold text-primary">
                          S$5,000 - S$15,000
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-gray-600">
                        Sofa, dining set, beds, mattresses - major expense.
                      </p>
                    </li>
                    <li className="rounded-lg bg-gray-50 p-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-charcoal">Window Treatments</span>
                        <span className="text-sm font-semibold text-primary">
                          S$1,000 - S$3,000
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-gray-600">
                        Curtains or blinds for all rooms, often forgotten.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-yellow-100 p-6">
                <h4 className="mb-2 flex items-center font-semibold text-charcoal">
                  <Calculator className="mr-2 h-5 w-5 text-yellow-700" />
                  Total Investment Reality Check
                </h4>
                <p className="mb-3 text-gray-700">
                  For a comprehensive 4-room BTO setup with mid-range renovation:
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex justify-between">
                    <span>Renovation works</span>
                    <span className="font-semibold">S$60,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Hidden costs & fees</span>
                    <span className="font-semibold">S$7,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Appliances & AC</span>
                    <span className="font-semibold">S$10,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Furniture & fittings</span>
                    <span className="font-semibold">S$10,000</span>
                  </li>
                  <li className="mt-2 flex justify-between border-t pt-2">
                    <span className="font-semibold">Total Investment</span>
                    <span className="text-lg font-bold text-primary">S$87,000</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6: Money Saving Strategies */}
            <section id="money-saving" className="mt-16">
              <h2 className="mb-6 text-3xl font-bold text-charcoal">
                Smart Spending: Expert Strategies to Maximize Your Budget
              </h2>

              <div className="grid gap-6">
                {/* Strategy 1 */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 flex items-center text-lg font-semibold text-charcoal">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                    1. Prioritize Foundational Works
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Allocate more budget to elements that are expensive to change later:
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg bg-green-50 p-3">
                      <span className="text-sm font-semibold text-green-800">Invest Now:</span>
                      <ul className="mt-1 space-y-1 text-xs text-gray-700">
                        <li>• Quality flooring throughout</li>
                        <li>• Kitchen and bathroom finishes</li>
                        <li>• Electrical and plumbing infrastructure</li>
                        <li>• Built-in storage solutions</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <span className="text-sm font-semibold text-gray-700">Upgrade Later:</span>
                      <ul className="mt-1 space-y-1 text-xs text-gray-700">
                        <li>• Decorative lighting fixtures</li>
                        <li>• Loose furniture</li>
                        <li>• Artwork and accessories</li>
                        <li>• Smart home devices</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Strategy 2 */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 flex items-center text-lg font-semibold text-charcoal">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                    2. Balance Built-ins with Loose Furniture
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Custom carpentry is the biggest variable cost. Be strategic:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>
                        <strong>Essential built-ins:</strong> Kitchen cabinets, master wardrobe
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>
                        <strong>Consider loose:</strong> TV console, study desk, secondary storage
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>
                        <strong>Potential savings:</strong> S$5,000 - S$10,000 using quality loose
                        furniture
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Strategy 3 */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 flex items-center text-lg font-semibold text-charcoal">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                    3. Choose Materials Wisely
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Area
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Smart Choice
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Savings
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-600">Flooring</td>
                          <td className="px-4 py-2 text-sm text-gray-600">
                            Quality vinyl vs hardwood
                          </td>
                          <td className="px-4 py-2 text-sm font-semibold text-green-600">
                            S$3,000+
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-4 py-2 text-sm text-gray-600">Countertops</td>
                          <td className="px-4 py-2 text-sm text-gray-600">
                            Compact laminate vs quartz
                          </td>
                          <td className="px-4 py-2 text-sm font-semibold text-green-600">
                            S$1,000+
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-600">Bathroom</td>
                          <td className="px-4 py-2 text-sm text-gray-600">
                            Tile overlay vs hacking
                          </td>
                          <td className="px-4 py-2 text-sm font-semibold text-green-600">
                            S$3,000+
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-4 py-2 text-sm text-gray-600">Feature wall</td>
                          <td className="px-4 py-2 text-sm text-gray-600">
                            Laminate vs natural wood
                          </td>
                          <td className="px-4 py-2 text-sm font-semibold text-green-600">
                            S$2,000+
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Strategy 4 */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 flex items-center text-lg font-semibold text-charcoal">
                    <AlertCircle className="mr-2 h-5 w-5 text-yellow-600" />
                    4. Beware of Package Pitfalls
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Be cautious of "too good to be true" packages like "4-Room BTO for S$17,990":
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">⚠</span>
                      <span>Often exclude electrical, plumbing, and significant carpentry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">⚠</span>
                      <span>Limited material choices and quantities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">⚠</span>
                      <span>Hidden charges add up quickly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>
                        <strong>Better approach:</strong> Get detailed, itemized quotes and compare
                        line-by-line
                      </span>
                    </li>
                  </ul>
                </div>

                {/* The Golden Rule */}
                <div className="rounded-lg bg-primary/10 p-6">
                  <h3 className="mb-3 flex items-center text-lg font-semibold text-charcoal">
                    <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                    The Golden Rule: Always Buffer 10-15%
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Set aside contingency funds for the unexpected. For a S$60,000 renovation:
                  </p>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="rounded-lg bg-white p-3 text-center">
                      <div className="text-2xl font-bold text-primary">S$6,000</div>
                      <div className="text-xs text-gray-600">10% Buffer (Minimum)</div>
                    </div>
                    <div className="rounded-lg bg-white p-3 text-center">
                      <div className="text-2xl font-bold text-primary">S$9,000</div>
                      <div className="text-xs text-gray-600">15% Buffer (Recommended)</div>
                    </div>
                    <div className="rounded-lg bg-white p-3 text-center">
                      <div className="text-2xl font-bold text-primary">S$66,000+</div>
                      <div className="text-xs text-gray-600">Total Budget Needed</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-700">
                    This buffer covers unforeseen issues, material shortages, or last-minute changes
                    without derailing your project.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion & CTA */}
            <section className="mt-16 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-8">
              <h2 className="mb-4 text-2xl font-bold text-charcoal">
                Your 4-Room BTO Renovation Journey Starts Here
              </h2>
              <p className="mb-6 text-gray-700">
                Armed with this comprehensive cost breakdown, you're ready to plan your 4-room BTO
                renovation with confidence. Remember, the key to a successful renovation isn't just
                about having a big budget—it's about making informed decisions that align with your
                lifestyle and financial goals.
              </p>

              <div className="mb-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white p-4">
                  <CheckCircle2 className="mb-2 h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-charcoal">Budget Wisely</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Use our tier system to plan according to your means
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <CheckCircle2 className="mb-2 h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-charcoal">Compare Quotes</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Get itemized quotes from multiple contractors
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <CheckCircle2 className="mb-2 h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-charcoal">Plan Buffer</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Always include 10-15% contingency in your budget
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6">
                <h3 className="mb-3 flex items-center text-lg font-semibold text-charcoal">
                  <Download className="mr-2 h-5 w-5 text-primary" />
                  Get Your Free 4-Room BTO Renovation Checklist
                </h3>
                <p className="mb-4 text-gray-700">
                  Download our comprehensive checklist with cost estimates, timeline planner, and
                  contractor comparison template.
                </p>
                <button className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90">
                  Download Free Checklist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="mb-6 text-2xl font-bold text-charcoal">Related Guides</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/guides/ultimate-hdb-bto-guide"
                  className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-primary hover:shadow-md"
                >
                  <h3 className="font-semibold text-charcoal group-hover:text-primary">
                    Ultimate HDB BTO Renovation Guide
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Complete step-by-step guide for your BTO journey
                  </p>
                  <span className="mt-2 inline-flex items-center text-sm text-primary">
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </Link>

                <Link
                  href="/guides/hdb-permits"
                  className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-primary hover:shadow-md"
                >
                  <h3 className="font-semibold text-charcoal group-hover:text-primary">
                    HDB Renovation Permits Guide
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Everything about HDB permits and regulations
                  </p>
                  <span className="mt-2 inline-flex items-center text-sm text-primary">
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </Link>

                <Link
                  href="/guides/singapore-renovation-contracts-disputes-guide"
                  className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-primary hover:shadow-md"
                >
                  <h3 className="font-semibold text-charcoal group-hover:text-primary">
                    Renovation Contracts Guide
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Protect yourself with proper contracts
                  </p>
                  <span className="mt-2 inline-flex items-center text-sm text-primary">
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </Link>
              </div>
            </section>

            {/* FAQ Schema - Hidden but for SEO */}
            <Script
              id="faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "How much does it cost to renovate a 4-room BTO in Singapore?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "The average cost to renovate a 4-room BTO in Singapore ranges from S$52,500 to S$66,000 for a mid-range renovation in 2024-2025. Budget renovations can start from S$20,000-S$40,000, while premium renovations can exceed S$70,000.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is included in a 4-room BTO renovation cost?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "A typical 4-room BTO renovation includes: carpentry (30-40% of budget), masonry and tiling (20-30%), electrical and plumbing works (10-15%), hacking and demolition (5-10%), painting (3-5%), doors and windows (5-8%), and miscellaneous costs (3-5%).",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How long does it take to renovate a 4-room BTO?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "A typical 4-room BTO renovation takes 3-4 months from start to completion. This includes design planning (2-4 weeks), permit applications if needed (2-3 weeks), and actual renovation work (8-12 weeks).",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What are the hidden costs in BTO renovation?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Hidden costs include: haulage and debris disposal (S$300-S$1,000), HDB permits (S$500-S$1,000), GST 9% if not included in quote, professional design fees (5-10% of project), plus separate costs for air conditioning (S$4,000), appliances (S$3,000-S$8,000), and furniture (S$5,000-S$15,000).",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How can I save money on 4-room BTO renovation?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Save money by: using vinyl flooring instead of tiles (save S$3,000+), choosing laminate countertops over stone (save S$1,000+), overlaying bathroom tiles instead of hacking (save S$3,000+), using loose furniture instead of built-ins where possible, and buying appliances during sales periods.",
                      },
                    },
                  ],
                }),
              }}
            />
          </div>
        </article>
      </div>
    </>
  )
}
