# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is RenoTake - Singapore's Intelligent Renovation Guide. A Next.js 14 platform that empowers Singapore homeowners (particularly first-time BTO owners) to navigate their renovation journey with comprehensive guides, AI-powered assistance, and practical tools. The project uses TypeScript, Tailwind CSS, and shadcn/ui components.

## 🎯 CRITICAL: SEO Requirements

**EVERY piece of content and code must be optimized for Singapore renovation searches.** This website's primary goal is to rank #1 for Singapore renovation keywords and capture emails for the upcoming RenoTake app.

### SEO Checklist for All Development

When creating or modifying ANY page or component:

1. **Page Metadata** - ALWAYS use the `generateSEOMetadata` helper:

```typescript
import { generateSEOMetadata } from "@/components/seo-metadata"

export const metadata = generateSEOMetadata({
  title: "Specific, Keyword-Rich Title | Location + Year",
  description: "155-char description with primary keywords, benefits, and Singapore-specific terms",
  keywords: ["singapore specific", "HDB/BTO focused", "2024/current year"],
  canonicalUrl: "https://renotake.sg/exact-path",
})
```

2. **Target Keywords** - Include these in content naturally:
   - Primary: "HDB renovation", "BTO renovation", "Singapore renovation"
   - Cost: "renovation cost Singapore", "HDB renovation price", "BTO budget"
   - Location: Always append "Singapore" to general terms
   - Fresh: Include current year (2024/2025) for freshness signals

3. **URL Structure** - SEO-friendly paths:
   - ✅ `/guides/hdb-renovation-cost-singapore-2024`
   - ❌ `/guides/guide1` or `/articles/post-123`

4. **Content Requirements**:
   - H1: One per page, include primary keyword
   - H2-H3: Use semantic hierarchy with related keywords
   - First paragraph: Include primary keyword naturally
   - Image alt text: Descriptive with keywords (e.g., "HDB 4-room living room renovation Singapore")

5. **Structured Data** - Add for every content type:

```typescript
// Articles need article schema
// Guides need HowTo schema
// Tools need SoftwareApplication schema
// FAQ sections need FAQ schema
```

6. **Internal Linking**:
   - Link to related guides/articles with keyword-rich anchor text
   - Include "Related Articles" sections
   - Add breadcrumbs for navigation

7. **Performance** (affects SEO):
   - Images: Use Next.js Image with proper sizing
   - Lazy load below-the-fold content
   - Minimize JavaScript bundle size

### Singapore SEO Focus Areas

**Local Intent Keywords** (MUST include in relevant content):

- Districts: Tampines, Jurong, Woodlands, Punggol, Sengkang
- Property types: HDB, BTO, resale flat, condo, EC
- Specific: "4-room HDB", "5-room BTO", "3-room renovation"
- Regulations: "HDB permit", "BCA requirements", "Town Council"
- Costs: Always use "S$" or "SGD", include price ranges

**Competitor Keywords to Target**:

- "RenoVilla alternative"
- "Qanvast review"
- "99.co renovation"
- "HipVan furniture"

### Email Capture SEO Strategy

Every page should have ONE clear email capture opportunity:

1. Exit intent popup (already implemented)
2. In-content lead magnets
3. End-of-article CTAs
4. Sidebar opt-ins for desktop

Lead magnets must be SEO-optimized filenames:

- ✅ `hdb-renovation-checklist-2024.pdf`
- ❌ `download.pdf` or `checklist.pdf`

## Development Environment Setup ("Vibe Coding" Configuration)

This project is optimized for a smooth development experience with the following configurations:

### Available Scripts

```bash
# Development
npm run dev           # Start development server
npm run dev:turbo     # Start with Turbopack (faster HMR)

# Production
npm run build         # Build for production
npm run start         # Start production server

# Code Quality
npm run lint          # Run ESLint
npm run format        # Format all code with Prettier
npm run format:check  # Check code formatting
npm run typecheck     # TypeScript type checking

# Maintenance
npm run clean         # Clean build cache
npm run clean:all     # Clean everything and reinstall
```

### Code Quality Tools

- **Prettier** - Automatic code formatting (config: `.prettierrc`)
  - Formats on save in VS Code
  - No semicolons, 2-space indentation
  - 100 character line width
  - Tailwind CSS class sorting
- **ESLint** - Code quality and best practices (config: `.eslintrc.js`)
  - Next.js core web vitals rules
  - Prettier integration
  - TypeScript rules
- **Husky + lint-staged** - Pre-commit hooks
  - Automatically formats staged files
  - Runs ESLint on commits
  - Prevents committing console.logs

### VS Code Integration

The project includes VS Code configuration (`.vscode/` folder):

- **Auto-format on save** enabled
- **Tailwind CSS IntelliSense** configured
- **TypeScript integration** with workspace version
- **Debug configurations** for Next.js
- **Recommended extensions** will be suggested on project open

### Path Aliases

Enhanced imports configured in `tsconfig.json`:

```typescript
import { Button } from "@/components/ui/button" // UI components
import { cn } from "@/lib/utils" // Utilities
import { useExample } from "@/hooks/useExample" // Custom hooks
import type { Guide } from "@/types" // TypeScript types
import { HomePage } from "@/app/page" // App pages
```

### Environment Variables

Use `.env.example` as template for `.env.local`:

- Copy: `cp .env.example .env.local`
- Configure your environment-specific values
- Never commit `.env.local` (already in .gitignore)

## Architecture

### Tech Stack

- **Framework**: Next.js 14.2.16 with App Router
- **Language**: TypeScript with strict mode
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom theme configuration
- **Forms**: React Hook Form with Zod validation
- **Type Safety**: TypeScript with strict mode enabled
- **Code Quality**: ESLint, Prettier, Husky

### Project Structure

```
renotake-website/
├── app/                 # Next.js app router pages
│   ├── layout.tsx      # Root layout with Header component
│   ├── page.tsx        # Homepage
│   └── */page.tsx      # Other pages
├── components/          # React components
│   ├── ui/             # shadcn/ui components library
│   └── header.tsx      # Global header with mobile navigation
├── types/              # TypeScript type definitions
├── content/            # Static content/documentation
├── lib/                # Utility functions and shared code
├── hooks/              # Custom React hooks
├── public/             # Static assets
└── .vscode/            # VS Code configuration
```

### Key Components

- **Header Component** (`/components/header.tsx`)
  - Responsive navigation with mobile menu
  - Uses Sheet component for mobile slide-out
  - Active link highlighting
  - Consistent across all pages

### Key Configuration Files

- `tsconfig.json` - TypeScript and path aliases
- `.prettierrc` - Code formatting rules
- `.eslintrc.js` - Linting rules
- `tailwind.config.js` - Tailwind customization
- `.env.example` - Environment variables template
- `package.json` - Scripts and dependencies

## Important Design System Notes

### Color System

The project uses a carefully designed color system defined in `/app/globals.css`:

**Primary Colors:**

- Primary Green `#00A67E` - Used for primary actions, links, brand elements
- Charcoal `#292524` - Main text color for excellent readability
- White `#FFFFFF` - Background color

**Color Usage Rules:**

1. Text is ALWAYS charcoal (#292524) on white backgrounds for optimal contrast
2. White text is ONLY used on colored backgrounds (green buttons, etc.)
3. Maintain WCAG AA compliance (4.5:1 contrast ratio minimum)
4. Use Tailwind's color system with CSS variables (e.g., `bg-primary`, `text-foreground`)

**Component Colors:**

- Cards: White background with light gray borders
- Buttons: Green with white text (primary), white with green text (secondary)
- Sections: Alternate between white and light gray (#F5F5F5) backgrounds
- Focus states: Green ring with proper offset

The complete brand guidelines are documented in `/content/CLAUDE.md`

## Development Workflow

### Getting Started

1. Clone repository
2. Run `npm install`
3. Copy `.env.example` to `.env.local`
4. Run `npm run dev`
5. Open http://localhost:3000

### Before Committing

Code will be automatically formatted and linted via pre-commit hooks. To manually check:

```bash
npm run format:check  # Check formatting
npm run lint         # Check for lint errors
npm run typecheck    # Check TypeScript types
npm run build        # Verify build succeeds
```

### Best Practices

1. **Components**: Use TypeScript interfaces for props
2. **Imports**: Use path aliases (@/components, @/lib, etc.)
3. **Styling**: Use Tailwind classes, avoid inline styles
4. **State**: Server Components by default, Client Components only when needed
5. **Forms**: Use React Hook Form with Zod validation
6. **Errors**: Proper error boundaries and user-friendly messages
7. **SEO**: ALWAYS use generateSEOMetadata helper for page metadata
8. **URLs**: Create keyword-rich, descriptive URLs (not generic IDs)
9. **Images**: Add descriptive alt text with Singapore renovation keywords

## Dependencies

The project uses Radix UI for accessible component primitives, with extensive use of dialog, dropdown, accordion, and other interactive components. All UI components are pre-built in `/components/ui/`.

Form handling is done with React Hook Form and Zod for validation. Charts and data visualization use Recharts. Theme switching is handled by next-themes.

## GitHub Push and Commit Instructions

When pushing to GitHub repositories (especially organization repos like singabytesg):

### Method that Works: GitHub CLI Token Authentication

```bash
# 1. Ensure GitHub CLI is authenticated
gh auth status

# If not authenticated, login first:
# gh auth login

# 2. Remove any existing remote that's not working
git remote remove origin

# 3. Add remote with GitHub CLI token authentication
GH_TOKEN=$(gh auth token)
git remote add origin https://ivan-singabyte:${GH_TOKEN}@github.com/singabytesg/renotake-website.git

# 4. Push to repository
git push -u origin main
```

### Why This Method Works

- Avoids SSH key verification issues ("Host key verification failed")
- Bypasses HTTPS password authentication errors
- Works reliably with organization repositories
- Uses the authenticated GitHub CLI token for secure access

### For Future Repositories

Replace in the URL:

- `ivan-singabyte` with your GitHub username
- `singabytesg` with the organization name
- `renotake-website` with the repository name

## SEO Implementation Examples

### Creating a New Page (ALWAYS follow this pattern):

```typescript
// app/guides/[slug]/page.tsx
import { generateSEOMetadata, generateStructuredData } from "@/components/seo-metadata"
import Script from "next/script"

// REQUIRED: SEO-optimized metadata
export const metadata = generateSEOMetadata({
  title: "HDB Kitchen Renovation Cost Singapore 2024 - Complete Guide",
  description: "Detailed HDB kitchen renovation costs in Singapore. Real 2024 prices from S$8,000-S$25,000, permit requirements, contractor tips. Save 30% with our guide.",
  keywords: [
    "HDB kitchen renovation cost",
    "Singapore kitchen renovation price",
    "BTO kitchen upgrade cost",
    "kitchen hacking permit HDB"
  ],
  canonicalUrl: "https://renotake.sg/guides/hdb-kitchen-renovation-cost-singapore-2024"
})

// REQUIRED: Add structured data
export default function Page() {
  const structuredData = generateStructuredData("guide", {
    title: "HDB Kitchen Renovation Guide",
    description: "Step-by-step HDB kitchen renovation",
    totalTime: "PT2M", // 2 months
    estimatedCost: "15000",
    // ... other guide data
  })

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Page content with proper H1, H2 hierarchy */}
    </>
  )
}
```

### Writing SEO-Optimized Content:

```typescript
// ✅ GOOD: Singapore-specific, keyword-rich content
<h1>Complete HDB 4-Room Renovation Cost Breakdown Singapore 2024</h1>
<p>
  Planning your HDB renovation in Singapore? Our comprehensive guide breaks down
  actual renovation costs for 4-room BTO flats, from S$30,000 budget renovations
  to S$60,000 premium makeovers.
</p>

// ❌ BAD: Generic, non-localized content
<h1>Renovation Guide</h1>
<p>This guide will help you with your renovation.</p>
```

### Image Optimization:

```typescript
// ✅ GOOD: Descriptive alt text with keywords
<Image
  src="/hdb-living-room-renovation.jpg"
  alt="Modern HDB 4-room living room renovation with built-in TV console Singapore"
  width={1200}
  height={800}
/>

// ❌ BAD: Generic or missing alt text
<Image src="/img1.jpg" alt="Image" />
```

### Internal Linking Best Practices:

```typescript
// ✅ GOOD: Keyword-rich anchor text
<Link href="/guides/hdb-permit-requirements">
  HDB renovation permit requirements in Singapore
</Link>

// ❌ BAD: Generic anchor text
<Link href="/guides/permits">Click here</Link>
```

## Analytics & Conversion Tracking

ALWAYS track important user actions for SEO and conversion insights:

```typescript
import { trackEvent, trackEmailSignup, trackDownload } from "@/components/google-analytics"

// Track email signups with location
const handleEmailSubmit = () => {
  trackEmailSignup("guide_page_sidebar")
  // ... handle submission
}

// Track lead magnet downloads
const handleDownload = () => {
  trackDownload("hdb-checklist-2024.pdf")
  // ... trigger download
}

// Track tool usage for engagement
const handleCalculator = () => {
  trackEvent("calculate", "tools", "bto-budget-calculator")
  // ... run calculation
}
```

## SEO Quick Reference

### Must-Have on Every Page:

1. ✅ Unique, keyword-rich title (50-60 chars)
2. ✅ Compelling meta description (150-160 chars)
3. ✅ One H1 with primary keyword
4. ✅ Proper H2-H3 hierarchy
5. ✅ Singapore/HDB/BTO keywords naturally included
6. ✅ Internal links to related content
7. ✅ Image alt text with keywords
8. ✅ Structured data (Article/Guide/FAQ)
9. ✅ Email capture opportunity
10. ✅ Fast loading (< 3 seconds)

### Keywords to Always Consider:

- Location: Singapore, HDB, BTO, condo
- Cost: price, cost, budget, cheap, affordable
- Time: 2024, 2025, latest, updated
- Action: guide, tips, checklist, calculator
- Comparison: vs, review, best, top

## Important Reminders

1. **SEO First**: Every new page/component should consider SEO from the start
2. **Singapore Focus**: Always localize content for Singapore market
3. **Email Capture**: Primary goal is building email list for app launch
4. **Track Everything**: Use analytics to measure what works
5. **Test Rankings**: Regularly check Google for target keywords
