# Pillar Guide Technical Implementation Prompt

## For Claude Code: Building a World-Class Pillar Guide System

### Context

You are implementing a comprehensive pillar guide system for RenoTake, a Next.js 14 renovation platform. The content is provided in markdown files under `/content/guides/`. Your task is to build the technical infrastructure, components, and user experience for displaying these long-form guides.

### Project Specifications

- **Framework**: Next.js 14 with App Router
- **UI Library**: shadcn/ui components in `/components/ui/`
- **Styling**: Tailwind CSS
- **TypeScript**: Strict mode enabled
- **Design System**: Primary Green (#00A67E), Charcoal text (#292524), White backgrounds

---

## THE IMPLEMENTATION PROMPT

```markdown
I need to implement a pillar guide system for RenoTake. The content is already written and available at `/content/guides/[guide-name].md`.

Build a complete technical solution that transforms this markdown content into an engaging, interactive web experience.

## Core Technical Requirements

### 1. Route Structure & Data Layer

Create the following architecture:
```

/app/guides/
├── [slug]/
│ ├── page.tsx # Dynamic route handler
│ ├── loading.tsx # Skeleton loader
│ └── error.tsx # Error boundary
├── \_components/ # Shared guide components
│ ├── GuideLayout.tsx # Master layout wrapper
│ ├── GuideHeader.tsx # Hero section with metadata
│ ├── GuideContent.tsx # Main content renderer
│ ├── TableOfContents.tsx # Dynamic TOC with scroll spy
│ ├── ProgressIndicator.tsx # Reading progress
│ ├── SectionNavigator.tsx # Previous/Next section
│ ├── ShareToolbar.tsx # Social sharing
│ ├── BookmarkButton.tsx # Save sections
│ └── MobileNavigation.tsx # Mobile-optimized nav
├── \_lib/
│ ├── markdown-parser.ts # MDX/remark processor
│ ├── toc-generator.ts # Extract TOC from headers
│ ├── reading-time.ts # Calculate read time
│ └── guide-analytics.ts # Track user behavior
└── \_hooks/
├── useScrollSpy.ts # TOC active section
├── useReadingProgress.ts # Track progress
└── useBookmarks.ts # Local storage bookmarks

````

### 2. Markdown Processing Pipeline

Implement a robust markdown processing system:

```typescript
// Requirements:
- Parse markdown with remark/rehype
- Generate automatic IDs for headers
- Extract TOC structure (H2, H3, H4)
- Support custom components:
  - <Callout type="info|warning|success">
  - <CostTable data={...}>
  - <Checklist items={...}>
  - <BeforeAfter images={...}>
  - <Calculator type="budget|timeline">
  - <FAQ items={...}>
- Syntax highlighting for code blocks
- Auto-link headers
- Generate reading time
- Support frontmatter metadata
````

### 3. Component Implementation Details

#### 3.1 Guide Layout (Desktop)

```
┌─────────────────────────────────────────────────────────┐
│ Header (sticky)                                         │
├─────────────────────────────────────────────────────────┤
│ Progress Bar (2px, fills as user scrolls)               │
├─────────────────────────────────────────────────────────┤
│ Guide Hero                                              │
│ - Title, Author, Date, Reading Time                     │
│ - Share buttons, Bookmark                               │
├──────────┬──────────────────────────────────┬──────────┤
│          │                                   │          │
│  TOC     │     Main Content Area            │ Sidebar  │
│ (sticky) │     (max-width: 750px)           │ (sticky) │
│  250px   │                                   │  250px   │
│          │                                   │          │
│ - Intro  │  [Markdown content renders here]  │ - Share  │
│ - Sec 1  │                                   │ - Tools  │
│ - Sec 2  │                                   │ - Related│
│   - 2.1  │                                   │          │
│   - 2.2  │                                   │          │
│          │                                   │          │
└──────────┴──────────────────────────────────┴──────────┘
```

#### 3.2 Mobile Layout

```
┌─────────────────────────────┐
│ Header + Menu Icon          │
├─────────────────────────────┤
│ Progress Bar                │
├─────────────────────────────┤
│ Guide Hero (condensed)      │
├─────────────────────────────┤
│ Floating TOC Button         │
│ (bottom-right, expands up)  │
├─────────────────────────────┤
│                             │
│   Main Content              │
│   (full width - padding)    │
│                             │
├─────────────────────────────┤
│ Section Navigator           │
│ [← Previous] [Next →]       │
└─────────────────────────────┘
```

### 4. Interactive Features to Implement

#### 4.1 Table of Contents with Scroll Spy

```typescript
// Features:
- Highlight current section based on scroll position
- Smooth scroll to section on click
- Collapsible sub-sections
- Progress indicator per section
- Mobile: Slide-out drawer with backdrop
- Keyboard navigation support (j/k for next/previous)
```

#### 4.2 Reading Progress System

```typescript
// Implement:
- Linear progress bar (sticky top)
- Section-based progress indicators
- Save progress to localStorage
- "Continue reading" button on return visits
- Time remaining per section
- Overall completion percentage
```

#### 4.3 Smart Bookmarking

```typescript
// Features:
- Bookmark individual sections
- Quick access bookmark menu
- Sync across tabs (localStorage events)
- Export bookmarks as PDF/notes
- Highlight bookmarked sections in TOC
```

#### 4.4 Enhanced Content Blocks

```typescript
// Custom components for markdown:

// Callout boxes with icons
<Callout type="info|tip|warning|success">

// Interactive checklists
<Checklist id="pre-reno" saveable>
  - [ ] Item 1
  - [ ] Item 2

// Comparison tables
<ComparisonTable>
  | Feature | Option A | Option B |

// Cost calculators
<CostCalculator type="renovation">

// Before/After slider
<BeforeAfter
  before="/image1.jpg"
  after="/image2.jpg"
/>

// Expandable FAQs
<FAQ>
  <Question>How long does it take?</Question>
  <Answer>Typically 3-4 months...</Answer>
</FAQ>
```

### 5. Performance Optimizations

Implement these performance features:

```typescript
// 1. Lazy loading for heavy components
const Calculator = dynamic(() => import('./Calculator'), {
  loading: () => <CalculatorSkeleton />,
  ssr: false
})

// 2. Image optimization
- Use next/image for all images
- Lazy load images below fold
- Blur placeholder for hero images
- Responsive srcSet

// 3. Code splitting
- Split guide sections for very long content
- Lazy load comment system
- Defer non-critical JavaScript

// 4. Caching strategy
- Static generation for all guides
- ISR with revalidate: 3600
- Client-side caching for bookmarks/progress

// 5. Bundle optimization
- Tree shake unused UI components
- Minimize CSS with Tailwind purge
- Font subsetting for reading experience
```

### 6. SEO & Meta Implementation

```typescript
// Requirements:
- Dynamic meta tags per guide
- Open Graph images (auto-generated?)
- Structured data (Article, HowTo)
- XML sitemap inclusion
- Canonical URLs
- Reading time in meta
- Author information
- Last modified date

// Schema.org structured data:
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": guide.title,
  "datePublished": guide.publishDate,
  "dateModified": guide.modifiedDate,
  "author": {
    "@type": "Person",
    "name": guide.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "RenoTake"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": canonicalUrl
  },
  "wordCount": guide.wordCount,
  "timeRequired": `PT${guide.readingTime}M`
}
```

### 7. Analytics Implementation

Track these events:

```typescript
// Reading behavior
- Page view with source
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page
- Section view time
- TOC clicks
- Reading completion

// Engagement metrics
- Bookmarks added/removed
- Social shares (by platform)
- Tool/calculator usage
- Checklist interactions
- FAQ expansions
- Related guide clicks

// Technical metrics
- Page load time
- Time to interactive
- CLS scores
- Error tracking
```

### 8. Accessibility Requirements

Ensure WCAG AA compliance:

```typescript
// Keyboard navigation
- Tab through all interactive elements
- Escape to close modals
- Arrow keys for TOC navigation
- Space/Enter to activate buttons

// Screen reader support
- Semantic HTML structure
- ARIA labels for icons
- Skip to content link
- Announce dynamic changes
- Alt text for all images

// Visual accessibility
- High contrast mode support
- Focus indicators (ring-2 ring-primary)
- Minimum touch targets (44x44px)
- Readable font sizes (min 16px)
- Line height 1.6 for body text
```

### 9. Testing Requirements

Implement comprehensive tests:

```typescript
// Unit tests
- Markdown parser functions
- TOC generation
- Reading time calculation
- Bookmark management

// Integration tests
- Guide page rendering
- Navigation between sections
- Progress persistence
- Share functionality

// E2E tests
- Full guide reading flow
- Mobile navigation
- Bookmark sync
- Print functionality

// Performance tests
- Lighthouse CI (target 95+)
- Bundle size monitoring
- Loading time benchmarks
```

### 10. Error Handling & Edge Cases

Handle these scenarios:

```typescript
// Content errors
- Missing markdown file → 404 page
- Malformed markdown → Graceful degradation
- Missing images → Placeholder
- Invalid frontmatter → Default values

// Browser compatibility
- localStorage disabled → Fallback to memory
- JavaScript disabled → Progressive enhancement
- Slow network → Skeleton screens
- Print mode → Optimized stylesheet

// User errors
- Deep link to non-existent section
- Bookmark corruption → Reset option
- Progress tracking failure → Silent fail
```

## Implementation Priorities

### Phase 1: Core Functionality (Day 1-2)

1. Set up dynamic routing for guides
2. Implement markdown parser with TOC generation
3. Create basic GuideLayout component
4. Add responsive design
5. Implement reading time calculation

### Phase 2: Navigation & UX (Day 3-4)

1. Build TOC with scroll spy
2. Add progress indicator
3. Implement mobile navigation
4. Add keyboard shortcuts
5. Create section navigator

### Phase 3: Engagement Features (Day 5-6)

1. Add bookmarking system
2. Implement social sharing
3. Build interactive checklists
4. Add related guides section
5. Create print stylesheet

### Phase 4: Polish & Optimization (Day 7)

1. Performance optimization
2. SEO implementation
3. Analytics integration
4. Accessibility audit
5. Cross-browser testing

## Code Quality Standards

Follow these standards:

- TypeScript strict mode
- ESLint rules from .eslintrc.js
- Prettier formatting (no semicolons, 2 spaces)
- Component files < 200 lines
- Custom hooks for logic extraction
- Memoization for expensive operations
- Error boundaries for fault tolerance

## Design System Adherence

Use the established design system:

- Primary: #00A67E (CTAs, links, active states)
- Text: #292524 (high contrast on white)
- Background: #FFFFFF (clean, professional)
- Borders: border-gray-200
- Shadows: shadow-sm for cards
- Spacing: Tailwind's spacing scale
- Typography: System fonts with fallbacks

## Deliverables Checklist

- [ ] Dynamic guide pages with markdown rendering
- [ ] Responsive layout (mobile-first)
- [ ] Interactive TOC with scroll spy
- [ ] Reading progress tracking
- [ ] Bookmark functionality
- [ ] Social sharing integration
- [ ] Print-optimized styles
- [ ] SEO optimization
- [ ] Analytics tracking
- [ ] Performance optimization (Lighthouse 95+)
- [ ] Accessibility compliance (WCAG AA)
- [ ] Error handling
- [ ] Loading states
- [ ] TypeScript types
- [ ] Documentation

## Success Metrics

The implementation should achieve:

- First Contentful Paint < 1.5s
- Time to Interactive < 3.0s
- Lighthouse Performance > 95
- Lighthouse Accessibility > 95
- Lighthouse SEO > 100
- Mobile-friendly score: 100%
- No TypeScript errors
- No console errors/warnings
- Smooth 60fps scrolling

```

---

## How to Use This Prompt

1. **Provide this prompt to Claude Code** along with your markdown guide file
2. **Specify the guide to implement** (e.g., "ultimate-hdb-bto-renovation-guide.md")
3. **Indicate any specific features** you want prioritized
4. **Set time constraints** if you need a phased delivery

## Example Usage

```

"Using this prompt and the guide content at `/content/guides/ultimate-hdb-bto-renovation-guide.md`,
implement the complete pillar guide system. Start with Phase 1 (core functionality) and ensure
mobile responsiveness and accessibility from the beginning."

```

## Expected Claude Code Output

Claude will deliver:
1. Complete file structure with all components
2. Functioning markdown parser with custom components
3. Responsive, accessible guide pages
4. Interactive features (TOC, progress, bookmarks)
5. Performance optimizations
6. SEO implementation
7. Clean, typed, tested code

---

## Notes
- This prompt focuses on technical implementation, not content creation
- Assumes content exists in markdown format
- Emphasizes performance, accessibility, and user experience
- Follows RenoTake's established design system and coding standards
```
