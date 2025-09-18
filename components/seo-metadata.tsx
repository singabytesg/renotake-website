import { Metadata } from "next"

interface SEOMetadataProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    tags?: string[]
  }
  noindex?: boolean
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = "https://renotake.sg/og-default.png",
  article,
  noindex = false,
}: SEOMetadataProps): Metadata {
  // Append brand name to title for consistency
  const fullTitle = title.includes("RenoTake")
    ? title
    : `${title} | RenoTake - Singapore Renovation Guide`

  // Default keywords for all pages
  const defaultKeywords = [
    "Singapore renovation",
    "HDB renovation",
    "BTO renovation",
    "renovation contractor Singapore",
    "renovation guide",
    "home renovation Singapore",
  ]

  const allKeywords = [...new Set([...keywords, ...defaultKeywords])]

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: allKeywords.join(", "),
    authors: [{ name: "RenoTake", url: "https://renotake.sg" }],
    creator: "RenoTake",
    publisher: "RenoTake",
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
    alternates: {
      canonical: canonicalUrl || "https://renotake.sg",
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl || "https://renotake.sg",
      siteName: "RenoTake",
      locale: "en_SG",
      type: article ? "article" : "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(article && {
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        authors: article.author ? [article.author] : ["RenoTake"],
        tags: article.tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@renotakesg",
      site: "@renotakesg",
    },
    other: {
      "geo.region": "SG",
      "geo.placename": "Singapore",
      "geo.position": "1.290270;103.851959",
      ICBM: "1.290270, 103.851959",
    },
  }

  return metadata
}

// Structured data helper for JSON-LD
export function generateStructuredData(type: "website" | "article" | "guide" | "faq", data: any) {
  const baseStructure = {
    "@context": "https://schema.org",
  }

  switch (type) {
    case "website":
      return {
        ...baseStructure,
        "@type": "WebSite",
        name: "RenoTake",
        description: "Singapore's Intelligent Renovation Guide",
        url: "https://renotake.sg",
        publisher: {
          "@type": "Organization",
          name: "RenoTake",
          logo: {
            "@type": "ImageObject",
            url: "https://renotake.sg/logo.png",
          },
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://renotake.sg/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }

    case "article":
      return {
        ...baseStructure,
        "@type": "Article",
        headline: data.title,
        description: data.description,
        image: data.image || "https://renotake.sg/og-default.png",
        author: {
          "@type": "Person",
          name: data.author || "RenoTake Team",
        },
        publisher: {
          "@type": "Organization",
          name: "RenoTake",
          logo: {
            "@type": "ImageObject",
            url: "https://renotake.sg/logo.png",
          },
        },
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate || data.publishedDate,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data.url,
        },
      }

    case "guide":
      return {
        ...baseStructure,
        "@type": "HowTo",
        name: data.title,
        description: data.description,
        image: data.image || "https://renotake.sg/og-default.png",
        totalTime: data.totalTime,
        estimatedCost: data.estimatedCost && {
          "@type": "MonetaryAmount",
          currency: "SGD",
          value: data.estimatedCost,
        },
        supply: data.supplies || [],
        tool: data.tools || [],
        step: data.steps || [],
      }

    case "faq":
      return {
        ...baseStructure,
        "@type": "FAQPage",
        mainEntity: data.questions.map((q: any) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
      }

    default:
      return baseStructure
  }
}

// Local business structured data for Singapore
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RenoTake",
    description: "Singapore's Intelligent Renovation Guide and Planning Platform",
    url: "https://renotake.sg",
    telephone: "+65-XXXX-XXXX",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressRegion: "Singapore",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.29027,
      longitude: 103.851959,
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    priceRange: "Free",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  }
}
