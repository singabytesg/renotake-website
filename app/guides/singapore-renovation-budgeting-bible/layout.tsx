import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function BudgetingBibleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Breadcrumbs */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </li>
              <li>
                <Link href="/guides" className="text-gray-500 hover:text-gray-700">
                  Guides
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </li>
              <li>
                <span className="text-gray-900">Singapore Renovation Budgeting Bible</span>
              </li>
            </ol>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}
