# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is RenoTake - Singapore's Intelligent Renovation Guide. A Next.js 14 platform that empowers Singapore homeowners (particularly first-time BTO owners) to navigate their renovation journey with comprehensive guides, AI-powered assistance, and practical tools. The project uses TypeScript, Tailwind CSS, and shadcn/ui components.

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

## Dependencies

The project uses Radix UI for accessible component primitives, with extensive use of dialog, dropdown, accordion, and other interactive components. All UI components are pre-built in `/components/ui/`.

Form handling is done with React Hook Form and Zod for validation. Charts and data visualization use Recharts. Theme switching is handled by next-themes.
