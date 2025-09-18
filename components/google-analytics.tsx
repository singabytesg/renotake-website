import Script from "next/script"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  )
}

// Event tracking helpers
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track email signups
export const trackEmailSignup = (location: string) => {
  trackEvent("sign_up", "email", location)
}

// Track guide downloads
export const trackDownload = (fileName: string) => {
  trackEvent("download", "lead_magnet", fileName)
}

// Track tool usage
export const trackToolUsage = (toolName: string) => {
  trackEvent("tool_use", "engagement", toolName)
}

// Track page views with custom dimensions
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "page_view", {
      page_title: title,
      page_location: url,
      page_path: url,
    })
  }
}
