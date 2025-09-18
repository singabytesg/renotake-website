"use client"

import { useState } from "react"
import Link from "next/link"
import { Part } from "../parts"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

interface MobilePartNavProps {
  parts: Part[]
  currentIndex: number
}

export default function MobilePartNav({ parts, currentIndex }: MobilePartNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Action Button - Mobile Only */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-14 w-14 rounded-full bg-red-600 shadow-lg hover:bg-red-700"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="bottom" className="h-[60vh] md:hidden">
          <SheetHeader>
            <SheetTitle>Guide Navigation</SheetTitle>
          </SheetHeader>

          <div className="mt-4 space-y-2 overflow-y-auto">
            {parts.map((part, index) => {
              const isActive = index === currentIndex
              const isCompleted = index < currentIndex

              return (
                <Link
                  key={part.slug}
                  href={`/guides/singapore-renovation-contracts-disputes-guide/${part.slug}`}
                  onClick={() => setIsOpen(false)}
                >
                  <div
                    className={`flex items-start rounded-lg p-3 transition-colors ${
                      isActive
                        ? "border-2 border-red-600 bg-red-50"
                        : isCompleted
                          ? "border border-green-200 bg-green-50"
                          : "border border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div
                      className={`mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold ${
                        isActive
                          ? "bg-red-600 text-white"
                          : isCompleted
                            ? "bg-green-600 text-white"
                            : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`mb-1 font-semibold ${
                          isActive ? "text-red-900" : "text-gray-900"
                        }`}
                      >
                        {part.title}
                      </h3>
                      <p className="text-sm text-gray-600">{part.description}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
