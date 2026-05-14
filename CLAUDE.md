# CLAUDE.md — Portfolio Operating Instructions

> **Read this file and all `/context/*.md` files before writing any code.**
> This is the persistent memory layer for AI-assisted development.

## Project Identity

**Amarnadh P B's Portfolio** — An interactive case study portfolio built as a premium product lab.

**NOT** a resume website. **NOT** project cards. This is a **living technical narrative system**.

## Required Reading (Priority Order)

1. `/context/current-state.md` — MOST IMPORTANT: what was done, current priorities, blockers
2. `/context/vision.md` — WHY this portfolio exists, who it's for
3. `/context/ui-philosophy.md` — Visual identity, colors, typography, anti-patterns
4. `/context/design-system.md` — Implementation-level tokens, CSS variables, Tailwind config
5. `/context/engineering-principles.md` — Tech stack, architecture, performance, a11y
6. `/context/project-showcase-system.md` — How projects are structured and displayed
7. `/context/animation-system.md` — Motion guidelines, timing, performance
8. `/context/analytics-strategy.md` — Umami + PostHog setup, events, recruiter intent signals
9. `/context/roadmap.md` — Phased development plan
10. `/context/decisions.md` — Architecture decision log (append new decisions here)

## Tech Stack

- **Next.js 15+** (App Router, TypeScript strict, RSC-first)
- **Tailwind CSS v4**
- **Framer Motion** (primary animation)
- **GSAP** (scroll storytelling ONLY, dynamically imported)
- **MDX** (project content system)
- **Umami** (analytics)

## Coding Rules

### Always
- Server Components by default, `"use client"` only when needed
- `next/image` for all images
- `next/font` for fonts (Inter + JetBrains Mono)
- TypeScript strict mode, no `any`
- Semantic HTML, proper heading hierarchy
- `prefers-reduced-motion` support for all animations
- Absolute imports via `@/`

### Never
- Inline styles
- Raw `<img>` tags
- `console.log` in production code
- Blocking animations on content
- Scroll hijacking
- More than 2 pinned scroll sections per page
- Placeholder text or Lorem ipsum
- Generic skill bars or percentage circles

### Component Pattern
```tsx
'use client' // Only if interactive

import { type FC } from 'react'
import { motion } from 'framer-motion'

interface ComponentProps {
  // typed props
}

export const Component: FC<ComponentProps> = ({ ...props }) => {
  return ( /* JSX with Tailwind */ )
}
```

## Key Architecture Decisions

- Projects are MDX files in `/src/content/projects/`
- Projects have `tier: "featured" | "lab"` to control display
- Featured projects (3-5) show on homepage with deep dive pages
- Lab projects show in interactive carousel/grid
- No hardcoded project pages — everything driven by MDX content
- **Light mode = primary theme**, dark mode = fully supported

## Performance Priorities

1. LCP < 2.5s — Optimize hero image loading
2. Bundle size — Dynamic import Three.js, GSAP
3. Animations — Only transform + opacity
4. Images — WebP/AVIF, lazy load, blur placeholders
5. Fonts — next/font, display:swap, subset

## When Adding a Decision

Append to `/context/decisions.md` following the template there.

## Positioning Statement

Every design decision should reinforce:

> "I don't just code interfaces. I build intelligent products and systems end-to-end."
