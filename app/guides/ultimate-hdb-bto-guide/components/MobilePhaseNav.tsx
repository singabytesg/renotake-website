"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight } from "lucide-react"
import { phases } from "../phases"

export default function MobilePhaseNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const currentPhaseSlug = pathname.split("/").pop()
  const currentPhase = phases.find((p) => p.slug === currentPhaseSlug)

  return (
    <div className="lg:hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-charcoal">Navigate Phases</h3>
              <button onClick={() => setIsOpen(false)} className="rounded-lg p-2 hover:bg-gray-100">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Current Phase Indicator */}
            {currentPhase && (
              <div className="mb-4 rounded-lg bg-primary/10 p-3">
                <div className="text-xs font-medium text-primary">Currently viewing</div>
                <div className="mt-1 font-semibold text-charcoal">
                  Phase {currentPhase.number}: {currentPhase.title}
                </div>
              </div>
            )}

            {/* Phase List */}
            <div className="space-y-2">
              {phases.map((phase) => {
                const isActive = phase.slug === currentPhaseSlug
                return (
                  <Link
                    key={phase.id}
                    href={`/guides/ultimate-hdb-bto-guide/${phase.slug}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-lg p-3 ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{phase.icon}</span>
                      <div>
                        <div className="text-xs font-medium opacity-75">Phase {phase.number}</div>
                        <div className="font-medium">{phase.title}</div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-400"}`}
                    />
                  </Link>
                )
              })}
            </div>

            {/* Back to Overview */}
            <div className="mt-4 border-t pt-4">
              <Link
                href="/guides/ultimate-hdb-bto-guide"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-lg bg-gray-100 py-3 font-medium text-charcoal hover:bg-gray-200"
              >
                Back to Guide Overview
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
