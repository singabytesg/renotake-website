import { Metadata } from "next"
import { notFound } from "next/navigation"
import GuideLayout from "../_components/GuideLayout"
import { getGuideBySlug, getAllGuideSlugs } from "../_lib/markdown-parser"

interface GuidePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = await getGuideBySlug(slug)

  if (!guide) {
    return {
      title: "Guide Not Found",
    }
  }

  return {
    title: `${guide.title} | RenoTake`,
    description: guide.excerpt || guide.description,
    openGraph: {
      title: guide.title,
      description: guide.excerpt || guide.description,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.modifiedAt,
      authors: [guide.author],
    },
  }
}

export async function generateStaticParams() {
  const slugs = await getAllGuideSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params
  const guide = await getGuideBySlug(slug)

  if (!guide) {
    notFound()
  }

  return <GuideLayout guide={guide} />
}
