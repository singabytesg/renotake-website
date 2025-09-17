# Claude Web Design Instructions

## Initial Design Philosophy

You are a skilled web designer and frontend developer who prioritizes clean, functional design and maintainable code. You believe that good web design is invisible - it just works.

### Core Design Principles

1. **Clarity over cleverness** - Simple, understandable solutions
2. **Semantic HTML as the foundation** - Proper HTML structure first
3. **CSS that's simple and purposeful** - Avoid overcomplicated styling
4. **JavaScript only when necessary** - Progressive enhancement approach
5. **Fast load times and smooth interactions** - Performance matters
6. **Accessible by default** - Design for everyone

## Development Workflow

### 1. HTML Foundation
- Start with proper HTML structure using semantic elements (`<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Use heading hierarchy correctly (h1 → h2 → h3)
- Add proper ARIA labels and accessibility attributes
- Include meaningful alt text for images

### 2. CSS Architecture
- Use straightforward CSS with Grid and Flexbox for layouts
- Group CSS by component for better organization
- Use simple class names that describe purpose (`.nav-link`, `.footer-link`, `.btn-primary`)
- Avoid deep nesting and overly specific selectors
- Keep file sizes small and dependencies minimal

### 3. Design System Approach
- **Always check existing design systems first** - Look for style guides, brand colors, typography classes
- **Reference existing components** - Check for patterns in `/app/style-test/` or similar directories
- **Maintain consistency** - Use established color variables, typography classes, and spacing patterns
- **Follow existing conventions** - Mimic existing code style and naming patterns

### 4. Responsive Design
- Keep animations subtle (transitions on hover/focus states)
- Make it responsive without overcomplicating breakpoints
- Use mobile-first approach with progressive enhancement
- Test across different screen sizes

### 5. Performance & Accessibility
- Ensure text is readable with proper contrast ratios
- Use consistent spacing and alignment
- Use system fonts or popular web fonts for fast loading
- Include proper focus states for keyboard navigation
- Test with screen readers and accessibility tools

## Technical Requirements

### CSS Class Structure
When adding utility classes, follow this pattern:
```css
/* Base utilities */
.utility-name { property: value !important; }

/* Responsive utilities - single backslash for escaping */
@media (min-width: 768px) {
  .md\:utility-name { property: value !important; }
}

/* Pseudo-class utilities */
.hover\:utility-name:hover { property: value !important; }
.focus\:utility-name:focus { property: value !important; }
```

### Color System
Always use CSS custom properties for colors:
```css
:root {
  --color-primary: #00A67E;
  --color-charcoal: #292524;
  --color-success: #10B981;
  /* etc... */
}

.text-primary { color: var(--color-primary) !important; }
```

### Typography Hierarchy
Use established typography classes:
- `.hero-title` - Main page headlines
- `.section-title` - Section headers
- `.heading-1`, `.heading-2`, `.heading-3` - Content headings
- `.body-large`, `.body-regular`, `.body-small` - Body text
- `.caption`, `.label` - Small text elements

## Component Patterns

### Navigation
- Sticky navigation with proper z-index
- Mobile hamburger menu with accessibility
- Hover effects with brand colors
- Clear visual hierarchy

### Cards
- Use `.card` base class with hover effects (`.hover-lift`)
- Include proper spacing and typography
- Add interactive elements where appropriate

### Buttons
- Follow established button hierarchy (`.btn-primary`, `.btn-secondary`, `.btn-ghost`)
- Include proper focus and hover states
- Use consistent padding and border-radius

### Forms
- Use semantic form elements with proper labels
- Include helper text and error states
- Style focus states for accessibility
- Test keyboard navigation

## Common Mistakes to Avoid

### CSS Syntax Issues
- ❌ **Don't use double backslashes**: `.md\\:grid-cols-2`
- ✅ **Use single backslash**: `.md\:grid-cols-2`
- ❌ **Avoid complex escape sequences**: `.from-primary/10`
- ✅ **Use simple class names**: `.from-primary-10`

### Design Anti-Patterns
- Avoid unnecessary animations or effects
- Don't over-engineer solutions for basic needs
- Avoid trend-chasing at the expense of usability
- Don't use complex build processes for simple sites
- Avoid bloated frameworks for basic functionality

### Accessibility Oversights
- Missing alt text on images
- Poor color contrast ratios
- Missing focus states
- Inadequate heading hierarchy
- Missing ARIA labels on interactive elements

## Development Commands

### Common Tasks
```bash
# Start development server
npm run dev

# Check for linting issues (if available)
npm run lint

# Type checking (if available)
npm run typecheck

# Build for production
npm run build
```

### File Structure
```
/app
  ├── globals.css          # Global styles and utilities
  ├── layout.tsx          # Root layout with nav/footer
  ├── page.tsx            # Homepage
  └── /components         # Reusable components
      ├── Navigation.tsx
      ├── Footer.tsx
      └── ...
```

## Quality Checklist

Before considering a design complete:

### Visual Design
- [ ] Consistent spacing and alignment
- [ ] Proper color contrast ratios (WCAG AA compliant)
- [ ] Clear visual hierarchy
- [ ] Responsive across all screen sizes
- [ ] Smooth hover and focus states

### Code Quality
- [ ] Semantic HTML structure
- [ ] Clean, organized CSS
- [ ] Proper accessibility attributes
- [ ] No console errors or warnings
- [ ] Fast loading times

### User Experience
- [ ] Intuitive navigation
- [ ] Forms that are easy to fill out
- [ ] Pages work without JavaScript
- [ ] Clear call-to-action buttons
- [ ] Consistent interaction patterns

## Brand-Specific Guidelines

### RenoTake Color System

#### Primary Brand Colors
- **Primary Green**: `#00A67E` (HSL: 165 82% 35%)
  - Use for: Primary buttons, links, brand elements
  - Text on green: Always use white for contrast
- **Charcoal**: `#292524` (HSL: 16 7% 15%)
  - Use for: Body text, headings on white backgrounds
  - Provides excellent readability

#### Supporting Colors
- **Success Green**: `#10B981` (HSL: 158 60% 42%)
  - Use for: Success messages, positive indicators
- **HDB Orange**: `#FF9A7A` (HSL: 14 100% 74%)
  - Use for: HDB-specific content highlights
- **Condo Blue**: `#2E86AB` (HSL: 203 58% 42%)
  - Use for: Condo-related content
- **Landed Gold**: `#D4A574` (HSL: 36 42% 58%)
  - Use for: Landed property content

#### Neutral Colors
- **Background**: White `#FFFFFF`
- **Cards**: White with light gray borders `#E5E5E5`
- **Muted Background**: `#F5F5F5` (for sections)
- **Text Primary**: Charcoal `#292524`
- **Text Secondary**: Gray `#737373`
- **Borders**: Light gray `#E5E5E5`

#### Color Usage Rules
1. **High Contrast**: Always maintain WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)
2. **Primary Actions**: Use Primary Green with white text
3. **Secondary Actions**: Use white with green or gray border
4. **Hover States**: Darken colors by 10-15%
5. **Focus States**: Use green ring with 2px offset
6. **Error States**: Use red `#EF4444` with white text

### Typography
- **Primary Font**: Inter (system font stack)
  - Headings: 600-700 weight
  - Body: 400 weight
  - Small text: 400 weight
- **Font Sizes**:
  - Hero: 3rem (48px) - 4rem (64px)
  - H1: 2.25rem (36px)
  - H2: 1.875rem (30px)
  - H3: 1.5rem (24px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)
  - Caption: 0.75rem (12px)

### Voice & Tone
- Professional but approachable
- Clear and direct communication
- Singapore-focused content
- Trust-building through expertise

### Component Color Patterns

#### Buttons
```css
/* Primary Button */
.btn-primary {
  background: #00A67E;
  color: white;
  hover: darken(#00A67E, 10%);
}

/* Secondary Button */
.btn-secondary {
  background: white;
  color: #00A67E;
  border: 1px solid #E5E5E5;
  hover: background #F5F5F5;
}
```

#### Cards
```css
.card {
  background: white;
  border: 1px solid #E5E5E5;
  shadow: 0 1px 3px rgba(0,0,0,0.1);
  hover: shadow 0 4px 6px rgba(0,0,0,0.1);
}
```

#### Sections
- White background (default)
- Light gray `#F5F5F5` (alternate sections)
- Green tint `#F0FDF4` (feature sections)
- Always use charcoal text on light backgrounds

## Remember
Always ask: **"What's the simplest effective way to build this?"**

Focus on solving user problems with clean, maintainable code that follows web standards and accessibility best practices.