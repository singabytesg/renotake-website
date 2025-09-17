# Renotake Brand Guide
*The definitive guide for Renotake's visual and brand identity*

## 🏠 Brand Overview

Renotake transforms the Singapore home renovation journey through intelligent technology and human expertise. We bridge the gap between homeowners' dreams and reality, making renovation accessible, transparent, and stress-free.

### Brand Mission
To democratize quality home renovation in Singapore by providing transparent pricing, verified contractors, and intelligent project management tools that empower every homeowner.

### Brand Vision
To become Singapore's most trusted renovation platform where every HDB, condo, and landed property owner starts their renovation journey.

### Brand Values
1. **Transparency First** - No hidden costs, no surprises
2. **Quality Assured** - Verified contractors, guaranteed standards
3. **Intelligence-Driven** - Smart tools that simplify complex decisions
4. **Community-Centered** - Learning from every renovation story
5. **Locally Rooted** - Deep understanding of Singapore's unique housing landscape

## 🎨 Visual Identity

### Design Principles

#### 1. Clarity Through Simplicity
- Clean layouts that guide without overwhelming
- Progressive disclosure of information
- White space as a design element
- Clear visual hierarchy

#### 2. Trust Through Consistency
- Uniform experience across all touchpoints
- Predictable interaction patterns
- Reliable visual language
- Professional yet approachable

#### 3. Smart Yet Human
- Technology that feels intuitive
- Data presented warmly
- AI assistance with personality
- Expert knowledge made accessible

## 🎨 Color System

### Primary Palette

#### Renotake Green (Primary)
- **Hex**: `#00A67E`
- **RGB**: `0, 166, 126`
- **Usage**: Primary CTAs, success states, main brand accent
- **Psychology**: Growth, renewal, trust, sustainability

#### Deep Charcoal
- **Hex**: `#1A1A1A`
- **RGB**: `26, 26, 26`
- **Usage**: Primary text, headers, premium feel
- **Psychology**: Sophistication, stability, professionalism

#### Pure White
- **Hex**: `#FFFFFF`
- **RGB**: `255, 255, 255`
- **Usage**: Backgrounds, negative space, clarity
- **Psychology**: Cleanliness, possibility, new beginnings

### Secondary Palette

#### Warm Gray Scale
```
Warm Gray 50:  #FAFAF9 - Light backgrounds, cards
Warm Gray 100: #F5F5F4 - Section dividers
Warm Gray 200: #E7E5E4 - Disabled states
Warm Gray 300: #D6D3D1 - Borders
Warm Gray 400: #A8A29E - Placeholder text
Warm Gray 500: #78716C - Secondary text
Warm Gray 600: #57534E - Body text
Warm Gray 700: #44403C - Emphasis text
```

### Accent Colors (Project Categories)

#### HDB Orange
- **Hex**: `#FF6B35`
- **RGB**: `255, 107, 53`
- **Usage**: HDB-related content, alerts
- **Category**: Public housing projects

#### Condo Blue
- **Hex**: `#2E86AB`
- **RGB**: `46, 134, 171`
- **Usage**: Condominium content, premium tier
- **Category**: Private property projects

#### Landed Gold
- **Hex**: `#D4A574`
- **RGB**: `212, 165, 116`
- **Usage**: Landed property, luxury segment
- **Category**: Landed house projects

#### Budget Purple
- **Hex**: `#7C3AED`
- **RGB**: `124, 58, 237`
- **Usage**: Budget calculator, cost insights
- **Category**: Financial planning tools

#### Timeline Teal
- **Hex**: `#14B8A6`
- **RGB**: `20, 184, 166`
- **Usage**: Timeline, scheduling, progress
- **Category**: Project management

#### Alert Red
- **Hex**: `#EF4444`
- **RGB**: `239, 68, 68`
- **Usage**: Warnings, critical information
- **Category**: Important notices

### Semantic Colors

```css
/* Status Colors */
--color-success: #10B981;  /* Completed, approved */
--color-warning: #F59E0B;  /* Attention needed */
--color-error: #EF4444;    /* Issues, problems */
--color-info: #3B82F6;     /* Information, tips */

/* Interaction States */
--color-hover: rgba(0, 166, 126, 0.1);
--color-active: rgba(0, 166, 126, 0.2);
--color-focus: #00A67E;
--color-disabled: #E7E5E4;
```

## 📝 Typography

### Font Stack

#### Primary: DM Sans
```css
font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
*Clean, modern, highly readable with excellent screen rendering*

#### Secondary: Instrument Sans
```css
font-family: 'Instrument Sans', 'DM Sans', sans-serif;
```
*For headings and emphasis, adds personality*

#### System: SF Pro / Inter
```css
font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
```
*Fallback for optimal performance*

#### Monospace: JetBrains Mono
```css
font-family: 'JetBrains Mono', 'Courier New', monospace;
```
*For prices, codes, technical details*

### Type Scale

#### Desktop Typography
```css
.hero-title {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.page-title {
  font-size: 48px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.section-title {
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.heading-1 {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.heading-2 {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
}

.heading-3 {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
}

.body-large {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
}

.body-regular {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

.body-small {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

.caption {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.02em;
}

.label {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.price {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  letter-spacing: -0.01em;
}
```

#### Mobile Typography
```css
@media (max-width: 768px) {
  .hero-title { font-size: 40px; }
  .page-title { font-size: 32px; }
  .section-title { font-size: 28px; }
  .heading-1 { font-size: 24px; }
  .heading-2 { font-size: 20px; }
  .body-large { font-size: 16px; }
}
```

## 🎯 Component Library

### Buttons

#### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, #00A67E 0%, #00C896 100%);
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 166, 126, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 166, 126, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: #FFFFFF;
  color: #00A67E;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  border: 2px solid #00A67E;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(0, 166, 126, 0.05);
  border-color: #00C896;
}
```

#### Ghost Button
```css
.btn-ghost {
  background: transparent;
  color: #57534E;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid #D6D3D1;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: #FAFAF9;
  border-color: #A8A29E;
}
```

### Cards

#### Project Card
```css
.project-card {
  background: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #E7E5E4;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

.project-card-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.project-card-content {
  padding: 20px;
}

.project-card-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Badge variants */
.badge-hdb { background: #FFF7ED; color: #FF6B35; }
.badge-condo { background: #EFF6FF; color: #2E86AB; }
.badge-landed { background: #FEF3C7; color: #D4A574; }
```

#### Contractor Card
```css
.contractor-card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #E7E5E4;
  display: flex;
  gap: 20px;
  transition: all 0.2s ease;
}

.contractor-card:hover {
  border-color: #00A67E;
  box-shadow: 0 4px 12px rgba(0, 166, 126, 0.1);
}

.contractor-avatar {
  width: 72px;
  height: 72px;
  border-radius: 12px;
  object-fit: cover;
}

.contractor-verified {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #DCFCE7;
  color: #16A34A;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.contractor-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #F59E0B;
  font-weight: 600;
}
```

### Forms

#### Input Fields
```css
.input-field {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #D6D3D1;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  background: #FFFFFF;
}

.input-field:focus {
  outline: none;
  border-color: #00A67E;
  box-shadow: 0 0 0 3px rgba(0, 166, 126, 0.1);
}

.input-field:disabled {
  background: #F5F5F4;
  color: #A8A29E;
  cursor: not-allowed;
}

.input-label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #44403C;
}

.input-helper {
  margin-top: 6px;
  font-size: 14px;
  color: #78716C;
}

.input-error {
  margin-top: 6px;
  font-size: 14px;
  color: #EF4444;
}
```

#### Select Dropdown
```css
.select-field {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 1px solid #D6D3D1;
  border-radius: 8px;
  font-size: 16px;
  background: #FFFFFF;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 1L7 7L13 1' stroke='%2378716C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 16px center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.select-field:focus {
  outline: none;
  border-color: #00A67E;
  box-shadow: 0 0 0 3px rgba(0, 166, 126, 0.1);
}
```

### Navigation

#### Header Navigation
```css
.nav-header {
  background: #FFFFFF;
  border-bottom: 1px solid #E7E5E4;
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-logo {
  font-size: 24px;
  font-weight: 700;
  color: #00A67E;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-link {
  color: #57534E;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: #00A67E;
}

.nav-link.active {
  color: #00A67E;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  height: 2px;
  background: #00A67E;
}
```

### Budget Calculator Components
```css
.calculator-container {
  background: linear-gradient(135deg, #FAFAF9 0%, #FFFFFF 100%);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid #E7E5E4;
}

.calculator-slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #E7E5E4;
  outline: none;
  -webkit-appearance: none;
}

.calculator-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #00A67E;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 166, 126, 0.3);
}

.calculator-result {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
  border: 2px solid #00A67E;
}

.calculator-price {
  font-size: 36px;
  font-weight: 700;
  color: #00A67E;
  font-family: 'JetBrains Mono', monospace;
}

.calculator-breakdown {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #E7E5E4;
}

.breakdown-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 14px;
}

.breakdown-label {
  color: #78716C;
}

.breakdown-value {
  font-weight: 600;
  color: #44403C;
  font-family: 'JetBrains Mono', monospace;
}
```

### Progress Indicators
```css
.progress-timeline {
  position: relative;
  padding: 24px 0;
}

.progress-line {
  position: absolute;
  top: 36px;
  left: 20px;
  right: 20px;
  height: 2px;
  background: #E7E5E4;
}

.progress-line-active {
  position: absolute;
  top: 36px;
  left: 20px;
  height: 2px;
  background: #00A67E;
  transition: width 0.3s ease;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.progress-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 2px solid #E7E5E4;
  transition: all 0.3s ease;
}

.progress-dot.active {
  background: #00A67E;
  border-color: #00A67E;
  box-shadow: 0 0 0 4px rgba(0, 166, 126, 0.2);
}

.progress-dot.completed {
  background: #00A67E;
  border-color: #00A67E;
}

.progress-label {
  margin-top: 8px;
  font-size: 14px;
  color: #78716C;
  text-align: center;
}

.progress-label.active {
  color: #00A67E;
  font-weight: 600;
}
```

## 📱 Responsive Design System

### Breakpoints
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large screens */
--breakpoint-2xl: 1536px; /* Extra large */

/* Media Queries */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Container Widths
```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 640px) {
  .container { max-width: 640px; padding: 0 20px; }
}

@media (min-width: 768px) {
  .container { max-width: 768px; padding: 0 24px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; padding: 0 32px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; padding: 0 40px; }
}
```

## ✨ Interaction & Animation

### Micro-interactions
```css
/* Default transition */
.transition-default {
  transition: all 0.2s ease;
}

/* Hover scale */
@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Loading spinner */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #E7E5E4;
  border-top-color: #00A67E;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Success checkmark */
@keyframes checkmark {
  0% { stroke-dashoffset: 100; }
  100% { stroke-dashoffset: 0; }
}

/* Skeleton loading */
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.skeleton {
  background: linear-gradient(90deg, #F5F5F4 25%, #E7E5E4 50%, #F5F5F4 75%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

### Page Transitions
```css
/* Fade in on scroll */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.stagger-children > * {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
}

.stagger-children > *:nth-child(1) { transition-delay: 0.1s; }
.stagger-children > *:nth-child(2) { transition-delay: 0.2s; }
.stagger-children > *:nth-child(3) { transition-delay: 0.3s; }
```

## 🎯 Iconography

### Icon Style Guidelines
- **Style**: Outlined, 2px stroke weight
- **Size**: 24x24px (default), 20x20px (small), 32x32px (large)
- **Color**: Inherit from parent, single color only
- **Library**: Lucide Icons or custom SVG

### Common Icons
```
Home: 🏠 (house outline)
Search: 🔍 (magnifying glass)
Filter: ⚙️ (adjustments)
Calendar: 📅 (calendar outline)
Budget: 💰 (calculator)
Contractor: 👷 (user with hard hat)
Project: 📁 (folder)
Settings: ⚙️ (gear)
Help: ❓ (question circle)
Success: ✓ (checkmark circle)
Warning: ⚠️ (alert triangle)
Error: ✕ (x circle)
```

## 📐 Spacing & Grid System

### Spacing Scale
```css
/* Base unit: 4px */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### Grid System
```css
.grid {
  display: grid;
  gap: 24px;
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}
```

## 🚫 Design Don'ts

1. **Don't use pure black (#000000)** - Use Deep Charcoal (#1A1A1A)
2. **Avoid excessive animations** - Keep interactions subtle and purposeful
3. **Don't mix border radius styles** - Stay consistent (8px for inputs, 12px for cards)
4. **Never compromise readability** - Maintain proper contrast ratios
5. **Don't use more than 3 font weights** - Regular (400), Medium (500), Bold (600/700)
6. **Avoid centered body text** - Left-align for readability
7. **Don't create new colors** - Use the defined palette
8. **Never use drop shadows on small text** - Reserve for cards and buttons
9. **Don't make touch targets smaller than 44x44px** - Accessibility requirement
10. **Avoid pure white on colored backgrounds** - Use slightly transparent white

## ♿ Accessibility Guidelines

### Color Contrast
- Normal text: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Interactive elements: Minimum 3:1 ratio against background

### Focus States
```css
*:focus-visible {
  outline: 2px solid #00A67E;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Touch Targets
- Minimum size: 44x44px
- Minimum spacing: 8px between targets
- Clear active states for mobile

### Screen Reader Support
- Semantic HTML structure
- Proper ARIA labels
- Alt text for images
- Keyboard navigation support

## 📊 Data Visualization

### Chart Colors
```css
--chart-primary: #00A67E;
--chart-secondary: #2E86AB;
--chart-tertiary: #FF6B35;
--chart-quaternary: #D4A574;
--chart-quinary: #7C3AED;
--chart-senary: #14B8A6;
```

### Chart Typography
- Axis labels: 12px, #78716C
- Data labels: 14px, #44403C, font-weight: 600
- Titles: 18px, #1A1A1A, font-weight: 600

## 🎭 Voice & Tone

### Writing Principles

#### Professional yet Friendly
- Use "you" and "your" to address users
- Avoid jargon, explain technical terms
- Be encouraging but realistic
- Example: "Let's plan your renovation budget" not "Budget allocation interface"

#### Clear and Concise
- Short sentences (under 20 words when possible)
- Active voice
- Bullet points for lists
- Example: "Get instant quotes" not "Quotations can be obtained instantaneously"

#### Locally Relevant
- Use Singapore terminology (HDB, BTO, condo)
- Reference local regulations when needed
- Include Singlish sparingly for warmth
- Example: "Confirm your renovation timeline" with subtle "Can already!" for success

#### Trustworthy and Transparent
- Be upfront about costs
- Explain the "why" behind recommendations
- Acknowledge when things go wrong
- Example: "This quote includes all fees. No hidden costs."

## 🚀 Implementation Checklist

### Brand Foundation
- [ ] Logo implementation across platforms
- [ ] Color variables in CSS/design system
- [ ] Typography setup with fallbacks
- [ ] Icon library selection

### Core Components
- [ ] Button variations
- [ ] Form elements
- [ ] Cards and containers
- [ ] Navigation patterns
- [ ] Progress indicators

### Interactive Elements
- [ ] Loading states
- [ ] Error states
- [ ] Success feedback
- [ ] Tooltips and help text
- [ ] Modals and overlays

### Responsive Design
- [ ] Mobile layouts
- [ ] Tablet adaptations
- [ ] Desktop optimizations
- [ ] Touch interactions

### Content Guidelines
- [ ] Writing style guide
- [ ] Photography direction
- [ ] Illustration style
- [ ] Data visualization templates

## 🔗 Resources & Tools

### Design Resources
- Figma Component Library: [Coming Soon]
- Icon Library: Lucide Icons (lucide.dev)
- Typography: Google Fonts - DM Sans, Instrument Sans

### Development Resources
- CSS Framework: Tailwind CSS customized
- Animation Library: Framer Motion
- Component Library: Custom React components

### Brand Assets
- Logo files (SVG, PNG)
- Color palettes (ASE, Figma)
- Typography specimens
- Pattern library

### References
- Singapore HDB Guidelines
- BCA Renovation Guidelines
- Local contractor best practices
- User research insights

---

*Version 1.0 - December 2024*
*© Renotake - Making Renovation Possible*
*For questions: brand@renotake.com*