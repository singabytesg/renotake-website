"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { phases } from "./phases"
import { Home, ChevronRight } from "lucide-react"

export default function BTOGuideLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isMainPage = pathname === "/guides/ultimate-hdb-bto-guide"

  // Extract current phase from pathname
  const currentPhaseSlug = pathname.split("/").pop()
  const currentPhase = phases.find((p) => p.slug === currentPhaseSlug)

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/guides" className="text-gray-500 hover:text-gray-700">
              Guides
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link
              href="/guides/ultimate-hdb-bto-guide"
              className={
                isMainPage ? "font-medium text-charcoal" : "text-gray-500 hover:text-gray-700"
              }
            >
              BTO Renovation Guide
            </Link>
            {currentPhase && (
              <>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="font-medium text-charcoal">
                  Phase {currentPhase.number}: {currentPhase.title}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Phase Navigation Bar - Only show on phase pages */}
      {!isMainPage && (
        <div className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="scrollbar-hide flex gap-1 overflow-x-auto py-2">
              {phases.map((phase) => {
                const isActive = phase.slug === currentPhaseSlug
                return (
                  <Link
                    key={phase.id}
                    href={`/guides/ultimate-hdb-bto-guide/${phase.slug}`}
                    className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-charcoal"
                    }`}
                  >
                    <span className="text-lg">{phase.icon}</span>
                    <span className="hidden sm:inline">Phase {phase.number}:</span>
                    <span className="hidden lg:inline">{phase.title}</span>
                    <span className="sm:hidden">{phase.number}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>{children}</main>
    </div>
  )
}
