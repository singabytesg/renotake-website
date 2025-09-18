"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Throttle scroll event for better performance
    let throttleTimer: NodeJS.Timeout | null = null
    const throttledToggleVisibility = () => {
      if (throttleTimer) return
      throttleTimer = setTimeout(() => {
        toggleVisibility()
        throttleTimer = null
      }, 100)
    }

    window.addEventListener("scroll", throttledToggleVisibility)

    // Check initial scroll position
    toggleVisibility()

    return () => {
      window.removeEventListener("scroll", throttledToggleVisibility)
      if (throttleTimer) clearTimeout(throttleTimer)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:h-10 sm:w-10 md:bottom-8 md:right-8"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 sm:h-4 sm:w-4" />
        </button>
      )}
    </>
  )
}
