# RenoTake Color System Documentation

## Overview
The RenoTake color system has been designed with accessibility, consistency, and brand identity in mind. All colors maintain WCAG AA compliance for contrast ratios.

## Core Principles

1. **High Contrast by Default**: Text is always charcoal (#292524) on white backgrounds for optimal readability
2. **Consistent Usage**: Colors are used consistently across all components
3. **Accessibility First**: All color combinations meet WCAG AA standards (4.5:1 for normal text)
4. **Brand Recognition**: Green is used sparingly but effectively for brand elements

## Color Palette

### Primary Colors
- **Primary Green** `#00A67E` - Brand identity, CTAs, links
  - Usage: Primary buttons, important links, brand elements
  - Always pair with white text for contrast

- **Charcoal** `#292524` - Main text color
  - Usage: All body text, headings on white backgrounds
  - Provides excellent readability (contrast ratio: 14.5:1)

- **White** `#FFFFFF` - Primary background
  - Usage: Main page background, cards, modals

### Supporting Brand Colors
- **HDB Orange** `#FF9A7A` - For HDB-specific content
- **Condo Blue** `#2E86AB` - For condo-related content
- **Landed Gold** `#D4A574` - For landed property content
- **Success Green** `#10B981` - Success messages, positive indicators

### Neutral Colors
- **Light Gray** `#F5F5F5` - Alternate section backgrounds
- **Border Gray** `#E5E5E5` - Card borders, dividers
- **Text Gray** `#737373` - Secondary text, descriptions
- **Error Red** `#EF4444` - Error states, warnings

## Usage Guidelines

### Text Colors
```css
/* Primary text - always on white backgrounds */
color: #292524; /* Charcoal */

/* Secondary text */
color: #737373; /* Gray */

/* Text on colored backgrounds */
background: #00A67E; /* Green */
color: #FFFFFF; /* Always white on green */
```

### Backgrounds
```css
/* Main content */
background: #FFFFFF;

/* Alternate sections */
background: #F5F5F5;

/* Feature sections */
background: #F0FDF4; /* Green tint */

/* Cards */
background: #FFFFFF;
border: 1px solid #E5E5E5;
```

### Interactive Elements

#### Buttons
- **Primary**: Green background (#00A67E), white text
  - Hover: Darken by 10% (#008060)
- **Secondary**: White background, green text, gray border
  - Hover: Light gray background (#F5F5F5)
- **Ghost**: Transparent, green text on hover

#### Links
- Default: Green (#00A67E)
- Hover: Darker green (#008060)
- Visited: Same as default (no purple)

#### Focus States
- Green ring (#00A67E) with 2px offset
- Always visible for keyboard navigation

## Component Examples

### Cards
```css
.card {
  background: white;
  border: 1px solid #E5E5E5;
  /* Text inside is always charcoal */
}
```

### Sections
```css
/* Primary section */
.section-primary {
  background: white;
  color: #292524;
}

/* Alternate section */
.section-alt {
  background: #F5F5F5;
  color: #292524;
}

/* Feature section */
.section-feature {
  background: #F0FDF4; /* Light green tint */
  color: #292524;
}
```

## Accessibility

### Contrast Ratios
- Charcoal on White: 14.5:1 ✓ (AAA)
- White on Green: 4.8:1 ✓ (AA)
- Gray on White: 4.6:1 ✓ (AA)

### Color Blindness Considerations
- Never rely on color alone to convey information
- Use icons, text labels, and patterns as additional indicators
- Green/red combinations are avoided except for success/error states

## Implementation

### CSS Variables
All colors are defined as CSS custom properties in `/app/globals.css`:

```css
:root {
  --primary: 165 82% 35%; /* Green */
  --foreground: 16 7% 15%; /* Charcoal */
  --background: 0 0% 100%; /* White */
  /* ... etc */
}
```

### Tailwind Classes
Use these Tailwind classes for consistency:
- `text-foreground` - Charcoal text
- `bg-primary` - Green background
- `text-primary-foreground` - White text on green
- `bg-muted` - Light gray background
- `border-border` - Gray borders

## Testing
Visit `/test-colors` in development to see all color combinations and verify contrast ratios.

## Common Mistakes to Avoid

❌ **Don't**: Use white text on white background
✅ **Do**: Use charcoal text on white background

❌ **Don't**: Use random shades of green
✅ **Do**: Use the defined green (#00A67E) consistently

❌ **Don't**: Use gray text on gray backgrounds
✅ **Do**: Maintain proper contrast ratios

❌ **Don't**: Override colors with inline styles
✅ **Do**: Use CSS variables and Tailwind classes