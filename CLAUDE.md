# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is RenoTake - Singapore's Intelligent Renovation Guide. A Next.js 14 platform that empowers Singapore homeowners (particularly first-time BTO owners) to navigate their renovation journey with comprehensive guides, AI-powered assistance, and practical tools. The project uses TypeScript, Tailwind CSS, and shadcn/ui components.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run linting
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14.2.16 with App Router
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom theme configuration
- **Forms**: React Hook Form with Zod validation
- **Type Safety**: TypeScript with strict mode enabled

### Project Structure
- `/app` - Next.js app router pages and layouts
  - `layout.tsx` - Root layout with navigation
  - `page.tsx` - Homepage
  - `/blog/[slug]` - Dynamic blog post pages
  - `/articles`, `/topics`, `/about` - Static pages
- `/components` - Reusable React components
  - `/ui` - shadcn/ui components library
- `/content` - Content and documentation files
- `/lib` - Utility functions and shared code
- `/public` - Static assets

### Key Configuration
- **Path Aliases**: Use `@/*` for imports from root directory
- **Tailwind**: Custom color variables defined in CSS custom properties
- **shadcn/ui**: Component configuration in `components.json`

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

## Dependencies
The project uses Radix UI for accessible component primitives, with extensive use of dialog, dropdown, accordion, and other interactive components. All UI components are pre-built in `/components/ui/`.

Form handling is done with React Hook Form and Zod for validation. Charts and data visualization use Recharts. Theme switching is handled by next-themes.