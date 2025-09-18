import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Part } from "../parts"

interface PartNavigationProps {
  currentIndex: number
  parts: Part[]
}

export default function PartNavigation({ currentIndex, parts }: PartNavigationProps) {
  const prevPart = currentIndex > 0 ? parts[currentIndex - 1] : null
  const nextPart = currentIndex < parts.length - 1 ? parts[currentIndex + 1] : null

  return (
    <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
      {prevPart ? (
        <Link
          href={`/guides/singapore-renovation-contracts-disputes-guide/${prevPart.slug}`}
          className="group"
        >
          <Button variant="outline" className="group-hover:bg-gray-50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <div className="text-left">
              <div className="text-xs text-gray-500">Previous</div>
              <div className="text-sm font-medium">{prevPart.title}</div>
            </div>
          </Button>
        </Link>
      ) : (
        <div />
      )}

      {nextPart ? (
        <Link
          href={`/guides/singapore-renovation-contracts-disputes-guide/${nextPart.slug}`}
          className="group"
        >
          <Button className="bg-red-600 hover:bg-red-700 group-hover:shadow-lg">
            <div className="mr-2 text-right">
              <div className="text-xs">Next</div>
              <div className="text-sm font-medium">{nextPart.title}</div>
            </div>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <Link href="/guides" className="group">
          <Button className="bg-green-600 hover:bg-green-700">
            <div className="mr-2 text-right">
              <div className="text-xs">Complete!</div>
              <div className="text-sm font-medium">Back to Guides</div>
            </div>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  )
}
