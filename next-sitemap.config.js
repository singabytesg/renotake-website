/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://renotake.sg",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/test-colors", "/_*", "/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/test-colors"],
      },
    ],
  },
  transform: async (config, path) => {
    // Prioritize important pages
    let priority = 0.7
    let changefreq = "weekly"

    if (path === "/") {
      priority = 1.0
      changefreq = "daily"
    } else if (path.startsWith("/guides/")) {
      priority = 0.9
      changefreq = "weekly"
    } else if (path.startsWith("/articles/")) {
      priority = 0.8
      changefreq = "weekly"
    } else if (path.startsWith("/tools/")) {
      priority = 0.8
      changefreq = "monthly"
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
