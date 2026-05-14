# UI Philosophy

> This file defines the visual and interaction language of the portfolio.
> Every component, animation, and layout decision should align with these principles.

## Visual Identity

### Aesthetic Direction

The portfolio should feel like a blend of:

- **Apple** — Cinematic precision, premium typography
- **Linear** — Clean developer tool aesthetics, purposeful motion
- **Vercel** — Fast, developer-native, clean
- **Stripe** — Technical depth with elegant presentation
- **Framer** — Interactive, motion-rich, design-forward
- **Raycast** — Focused, fast, tool-like
- **Perplexity** — AI-native, intelligent interface

### The Feel

```
Premium SaaS + Futuristic + Readable + Cinematic + Interactive + Immersive
```

**NOT:**
```
Template-like + Crowded + Generic developer portfolio + Gaming UI + Neon overload
```

## Color System

### Philosophy
- Minimal, curated palette — NOT generic red/blue/green
- **Light mode is the primary theme**, dark mode fully supported
- HSL-based color tokens via CSS custom properties
- Accent colors used sparingly for emphasis
- See `design-system.md` for exact implementation values

### Theme Direction

**Light Mode (Primary):**
- Clean white/off-white backgrounds
- Deep charcoal text for strong readability
- Electric violet accent for CTAs, links, highlights
- Subtle warm grays for cards and secondary surfaces
- Borders barely visible, content-first

**Dark Mode (Secondary):**
- Deep blue-charcoal backgrounds (not pure black)
- Bright near-white text
- Slightly brighter accent violet
- Subtle borders visible against dark surfaces

### Reference Portfolio Insights

**From pradeepyellapu.com:**
- Warm, approachable light theme
- Strong metric-driven project descriptions ("40% reduction", "167% engagement")
- Interactive creative elements (stickers, receipts)
- Testimonials section with swipeable cards
- Personality woven into professional content

**From rahuljain.framer.website:**
- Ultra-minimalist layout with maximum whitespace
- Large serif typography creates premium feel
- Split-screen project cards (image + text)
- Short, outcome-focused project descriptions
- Only 4-5 projects shown, each with depth

**Design Principles Extracted:**
- Show fewer projects, but with measurable outcomes
- Light themes feel more approachable and professional
- Large typography with tight letter-spacing = premium
- Whitespace is a feature, not wasted space
- Personality > perfection

### Color Rules
1. Never use pure black (`#000`) for text — use deep charcoal (`hsl(220, 25%, 10%)`)
2. Never use harsh pure white for cards — use off-white (`hsl(220, 20%, 97%)`)
3. Accent color appears in: CTAs, links, active states, highlights
4. Gradients are subtle, never garish
5. Borders are very subtle (`border-gray-200` light, `border-white/10` dark)
6. Both themes must pass WCAG 2.1 AA contrast requirements

## Typography

### Font Stack
- **Display/Headings:** Inter or Outfit (Google Fonts) — Bold, tight tracking
- **Body:** Inter — Clean, readable, professional
- **Mono:** JetBrains Mono or Fira Code — For code, tech stack tags, terminal UI

### Type Scale
```
Display:     4rem / 5rem (64px/80px)   — Hero headlines only
H1:          3rem / 3.5rem (48px/56px) — Page titles
H2:          2rem / 2.5rem (32px/40px) — Section headings
H3:          1.5rem / 2rem (24px/32px) — Subsection headings
H4:          1.25rem (20px)            — Card titles
Body:        1rem (16px)               — Default text
Small:       0.875rem (14px)           — Captions, metadata
Tiny:        0.75rem (12px)            — Tags, badges
```

### Typography Rules
1. Headlines use tight letter-spacing (`-0.02em` to `-0.04em`)
2. Body text uses generous line-height (`1.6` to `1.8`)
3. Maximum content width: `720px` for reading, `1280px` for layout
4. Use font-weight strategically: 400 body, 500 medium emphasis, 600-700 headings
5. No all-caps except for small labels/tags
6. Code/tech references always use mono font

## Spacing System

```
Section gap:  120px-160px (py-28 to py-40)
Inner gap:    48px-64px (gap-12 to gap-16)
Card padding: 24px-32px (p-6 to p-8)
Component:    16px-24px (p-4 to p-6)
Micro:        8px-12px (p-2 to p-3)
```

### Spacing Rules
1. Generous whitespace — let content breathe
2. Sections separated by significant vertical space
3. Related items grouped with tighter spacing
4. Asymmetric padding is acceptable for visual balance

## Layout Principles

1. **Single-column narrative** for project deep dives (max-w-3xl center)
2. **Grid layouts** for project cards (responsive: 1 → 2 → 3 columns)
3. **Full-width sections** for hero, featured work, visual moments
4. **Sticky navigation** — minimal, transparent, contextual
5. **Content hierarchy** — most important information highest and largest

## Interaction Design

### Hover States
- Cards: Subtle lift (`translateY(-2px)`) + border glow
- Links: Color transition + underline animation
- Buttons: Background shift + slight scale
- Images: Subtle zoom (`scale(1.02)`) with overflow hidden

### Click/Tap Feedback
- Buttons: Scale down briefly (`scale(0.98)`) on press
- Cards: Smooth transition to expanded state

### Scroll Behavior
- Smooth scrolling globally
- Intersection Observer for reveal animations
- Parallax used VERY sparingly (hero only, if at all)
- Scroll progress indicator on long pages

## What NOT To Do

### Visual Anti-Patterns
- ❌ Excessive shadows (max 1-2 shadow levels)
- ❌ Rounded corners too large (max `rounded-2xl`)
- ❌ Rainbow gradients or too many colors
- ❌ Stock imagery or generic illustrations
- ❌ Cluttered layouts with too many elements
- ❌ Inconsistent spacing or alignment
- ❌ Comic Sans, Papyrus, or novelty fonts

### Interaction Anti-Patterns
- ❌ Animations that block content viewing
- ❌ Scroll hijacking
- ❌ Auto-playing audio
- ❌ Cursor effects that affect usability
- ❌ Loading screens longer than 2 seconds
- ❌ Popups or modals on entry

### Content Anti-Patterns
- ❌ "I'm a passionate developer" as hero text
- ❌ Generic skill bars or percentage circles
- ❌ Tech stack logos without context
- ❌ Lorem ipsum or placeholder text
- ❌ "Welcome to my portfolio"

## Domain-Specific Visual Language

### For AI/Agent Projects
- Animated node graphs / orchestration flows
- Terminal aesthetics with streaming outputs
- Dynamic data visualizations
- Agent communication patterns
- Neural network-inspired particle systems (sparingly)

### For SaaS Products
- Product screenshots / dashboard mockups
- Motion transitions between states
- Onboarding flow visualizations
- Before/after comparisons

### For Frontend Work
- Immersive interactions
- Hover reveals
- Scroll storytelling
- Smooth micro-animations

### For Developer Tools
- Terminal/CLI aesthetics
- Code snippet highlights
- Configuration examples
- Architecture diagrams

## Responsive Strategy

```
Mobile:   < 768px   — Single column, simplified animations
Tablet:   768-1024  — 2 columns, reduced motion
Desktop:  1024-1440 — Full experience
Large:    > 1440    — Max-width container, centered
```

### Mobile-First Rules
1. Core content readable without animations
2. Touch targets minimum 44px
3. No hover-dependent information
4. Simplified navigation (hamburger or bottom nav)
5. Reduced motion by default on mobile
