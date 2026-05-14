# Engineering Principles

> Technical guidelines that govern every code decision in this portfolio.

## Architecture Philosophy

1. **Content-driven architecture** — Designed around content (projects), not pages
2. **Reusable over custom** — Build systems, not one-off pages
3. **Performance is a feature** — Fast loading is non-negotiable
4. **Progressive enhancement** — Core content works without JS; animations are additive
5. **Maintainable > clever** — Readable by future-you and AI agents

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 15+ (App Router) | SEO, routing, MDX, performance, RSC |
| Language | TypeScript (strict) | Type safety |
| Styling | Tailwind CSS v4 | Design tokens, rapid development |
| Animation | Framer Motion | Declarative animations |
| Advanced Animation | GSAP (selective) | Scroll storytelling only |
| 3D (optional) | React Three Fiber | AI visuals — VERY sparingly |
| Content | MDX | Rich case studies with embedded components |
| Analytics | Umami | Privacy-friendly traffic |
| Behavioral Analytics | PostHog (Phase 2) | Session replay, scroll depth |
| Deployment | Vercel | Zero-config, edge, analytics |

## Folder Structure

```
my-portfolio/
├── context/                    # AI context system (persistent memory)
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Homepage
│   │   ├── projects/
│   │   │   ├── page.tsx        # Project listing
│   │   │   └── [slug]/page.tsx # Project deep dive
│   │   ├── about/page.tsx
│   │   ├── lab/page.tsx        # Phase 2
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, PageWrapper
│   │   ├── home/               # Homepage sections
│   │   ├── projects/           # Project components
│   │   ├── shared/             # Reusable UI primitives
│   │   └── mdx/                # Custom MDX components
│   ├── content/projects/       # MDX project files
│   ├── lib/                    # Utilities, MDX processing
│   ├── hooks/                  # Custom React hooks
│   ├── styles/globals.css
│   └── types/index.ts
├── public/
│   ├── images/projects/
│   ├── fonts/
│   └── og/
├── CLAUDE.md
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## Performance Rules

### Core Web Vitals Targets
- LCP < 2.5s, FID < 100ms, CLS < 0.1, TTFB < 200ms

### Optimization
1. **Images**: `next/image` always, WebP/AVIF, lazy load below fold, blur placeholders
2. **Code Splitting**: Dynamic imports for Three.js/GSAP, route-based splitting
3. **Server Components**: Default to RSC, `"use client"` only when needed
4. **Fonts**: `next/font` for zero-CLS, `display: swap`, subset characters
5. **Animations**: Only animate `transform`/`opacity`, respect `prefers-reduced-motion`

## Component Architecture

### Rules
- PascalCase components, one per file
- Server components by default
- Props interfaces above component
- No inline styles — Tailwind only
- Composition over prop drilling

### Template
```tsx
import { type FC } from 'react'

interface ProjectCardProps {
  project: ProjectMeta
  featured?: boolean
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, featured = false }) => {
  return ( /* JSX */ )
}
```

## Code Quality

- `strict: true` TypeScript, no `any`
- Absolute imports via `@/`
- Import order: React → Next → Third-party → Internal → Types
- Error boundaries for client components
- No silent catches

## Accessibility

- Keyboard navigable, proper heading hierarchy
- Alt text for all images, ARIA labels for icon buttons
- Color contrast ≥ 4.5:1, visible focus indicators
- `prefers-reduced-motion` support
- Lighthouse accessibility ≥ 95

## SEO (Every Page)

- Unique `<title>`, meta description, OG/Twitter tags
- Canonical URL, semantic HTML
- Sitemap generation, robots.txt

### Structured Data (JSON-LD)

Every page should include appropriate structured data:

- **Homepage:** `Person` schema (name, jobTitle, url, sameAs, knowsAbout)
- **Project pages:** `SoftwareApplication` schema (name, description, category, author)
- **Writing/Notes:** `TechArticle` schema (headline, author, datePublished)

See `design-system.md` for exact schema templates.

## Git Conventions

```
feat: add project showcase carousel
fix: resolve hero animation jank on Safari
style: refine project card hover states
perf: lazy load Three.js scene
```
