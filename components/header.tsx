"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/guides", label: "Guides" },
    { href: "/tools", label: "Tools" },
    { href: "/answers", label: "Quick Answers" },
    { href: "/ask-renoai", label: "Ask RenoAI" },
    { href: "/about", label: "About" },
  ]

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/")
  }

  const scrollToNewsletter = () => {
    const newsletterElement = document.getElementById("newsletter")
    if (newsletterElement) {
      newsletterElement.scrollIntoView({ behavior: "smooth" })
    } else if (pathname !== "/") {
      window.location.href = "/#newsletter"
    }
  }

  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Reno<span className="text-green-600">Take</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                isActive(item.href)
                  ? "text-gray-900 border-b-2 border-green-600 pb-1"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Button
          className="hidden md:block bg-green-600 hover:bg-green-700 text-white"
          onClick={scrollToNewsletter}
        >
          Get Updates
        </Button>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Link href="/" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
                    Reno<span className="text-green-600">Take</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg py-2 px-4 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-green-50 text-green-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => {
                      setIsOpen(false)
                      scrollToNewsletter()
                    }}
                  >
                    Get Updates
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}