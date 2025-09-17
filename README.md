# 🏠 RenoTake - Singapore's Intelligent Renovation Guide

A modern Next.js platform that empowers Singapore homeowners to navigate their renovation journey with comprehensive guides, AI-powered assistance, and practical tools.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/renotake-website.git
cd renotake-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📋 Available Scripts

```bash
npm run dev           # Start development server
npm run dev:turbo     # Start with Turbopack (faster HMR)
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Run ESLint
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting
npm run typecheck     # Type check with TypeScript
npm run clean         # Clean build cache
npm run clean:all     # Clean everything and reinstall
```

## 🛠 Tech Stack

- **Framework:** Next.js 14.2 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI)
- **Forms:** React Hook Form + Zod
- **Code Quality:** ESLint, Prettier, Husky
- **Deployment:** Optimized for Vercel

## 📁 Project Structure

```
renotake-website/
├── app/              # Next.js app router pages
│   ├── layout.tsx    # Root layout with navigation
│   ├── page.tsx      # Homepage
│   └── */page.tsx    # Other pages
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── header.tsx   # Global header component
├── lib/             # Utility functions
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
├── content/         # Static content/documentation
├── public/          # Static assets
└── styles/          # Global styles
```

## 🎨 Development Workflow

### Code Style

This project uses automatic code formatting and linting:

- **Prettier** for consistent code formatting
- **ESLint** for code quality
- **Husky** for pre-commit hooks
- **lint-staged** for formatting staged files

Your code will be automatically formatted on save (if using VS Code) and before commits.

### VS Code Setup

This project includes VS Code configuration for optimal development:

1. Install recommended extensions when prompted
2. Code will auto-format on save
3. Tailwind CSS IntelliSense is pre-configured
4. Debug configurations available (F5 to debug)

### Path Aliases

Use these path aliases for cleaner imports:

```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useExample } from "@/hooks/useExample"
import type { Guide } from "@/types"
```

## 🔑 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_ENV=development
# Add other environment variables as needed
```

## 🏗 Architecture Decisions

### Component Organization

- **UI Components:** Generic, reusable components in `/components/ui`
- **Feature Components:** Business logic components in `/components`
- **Page Components:** Route-specific components in `/app`

### State Management

- Server Components by default for better performance
- Client Components only when needed (forms, interactivity)
- React Hook Form for complex form state

### Styling Approach

- Tailwind CSS for utility-first styling
- CSS variables for theme customization
- shadcn/ui for consistent component design

### Type Safety

- Strict TypeScript configuration
- Zod for runtime validation
- Shared types in `/types` directory

## 🧪 Testing

```bash
npm run typecheck    # Type checking
npm run lint        # Linting
npm run build       # Build validation
```

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Manual Deployment

```bash
npm run build
npm run start
```

## 🐛 Troubleshooting

### Common Issues

**Development server not starting:**

```bash
npm run clean:all
npm install
npm run dev
```

**Type errors:**

```bash
npm run typecheck
# Fix any TypeScript errors
```

**Formatting issues:**

```bash
npm run format
```

**Git hooks not working:**

```bash
npx husky install
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run build` to verify
4. Commit (will auto-format)
5. Push and create PR

## 📄 License

Copyright © 2024 RenoTake. All rights reserved.

---

Built with ❤️ for Singapore homeowners
