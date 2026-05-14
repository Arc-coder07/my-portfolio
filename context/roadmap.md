# Roadmap

> Phased development plan. Ship fast, iterate based on data.

## Phase 1 — Foundation (MVP Launch)

**Goal:** Get a polished, functional portfolio live with 3-5 flagship projects.

### Infrastructure
- [ ] Initialize Next.js project (App Router, TypeScript, Tailwind v4)
- [ ] Set up folder structure per engineering-principles.md
- [ ] Configure fonts (Inter + JetBrains Mono via next/font)
- [ ] Set up global styles and design tokens
- [ ] Configure MDX pipeline for projects

### Design System
- [ ] Typography system (headings, body, mono)
- [ ] Color tokens (dark mode primary)
- [ ] Spacing system
- [ ] Button variants (primary, secondary, ghost)
- [ ] Card component (featured + compact)
- [ ] Badge component (tech, category, status)
- [ ] Section wrapper with scroll reveal

### Core Pages
- [ ] Homepage
  - [ ] Hero section (identity + CTA)
  - [ ] Featured projects section (3-5 projects)
  - [ ] "More Work" / Lab preview (carousel/loop)
  - [ ] Build philosophy section
  - [ ] Contact CTA
- [ ] Project deep dive page (`/projects/[slug]`)
  - [ ] Project hero
  - [ ] Problem statement
  - [ ] Architecture section
  - [ ] Technical breakdown
  - [ ] Engineering decisions
  - [ ] Results/metrics
- [ ] Projects listing page (`/projects`)
  - [ ] Filterable grid
  - [ ] Category filters
- [ ] About page
- [ ] Contact page

### Content
- [ ] Write 3-5 flagship project case studies in MDX
- [ ] Create/source project visuals (screenshots, diagrams)
- [ ] Architecture diagrams for each project

### Polish
- [ ] Responsive design (mobile → desktop)
- [ ] Basic animations (section reveals, card hovers)
- [ ] SEO meta tags on all pages
- [ ] OG images
- [ ] Favicon and site icons
- [ ] 404 page

### Deploy
- [ ] Vercel deployment
- [ ] Custom domain setup
- [ ] Umami analytics integration

---

## Phase 2 — Enhancement

**Goal:** Add depth, motion, and behavioral analytics.

- [ ] Lab section (experimental projects)
- [ ] Writing/Notes section (optional)
- [ ] PostHog behavioral analytics
- [ ] Enhanced animations (Framer Motion)
  - [ ] Page transitions
  - [ ] Scroll storytelling for 1-2 key projects
  - [ ] Interactive project cards
- [ ] Architecture visualization components
  - [ ] Animated node graphs for AI projects
  - [ ] Workflow diagrams
- [ ] "How It Works" animations
- [ ] Before/After comparison sections
- [ ] Terminal / live log components
- [ ] Project timelines (iteration/evolution)
- [ ] Resume download tracking
- [ ] Light mode support

---

## Phase 3 — Advanced

**Goal:** Interactive demos, AI visuals, and experimental features.

- [ ] Interactive demos embedded in project pages
- [ ] Live agent simulations
- [ ] Three.js / R3F neural network visual (hero or project)
- [ ] Chat simulation component
- [ ] Advanced scroll storytelling (GSAP ScrollTrigger)
- [ ] Project knowledge graph visualization
- [ ] A/B testing project ordering
- [ ] Performance optimization pass
- [ ] Accessibility audit

---

## Phase 4 — Evolution

**Goal:** Portfolio as a living, intelligent system.

- [ ] AI-assisted content generation for new projects
- [ ] Dynamic project recommendations
- [ ] Semantic search across projects
- [ ] Visitor-adaptive content (recruiter vs client vs developer)
- [ ] Blog / writing system
- [ ] RSS feed
- [ ] Newsletter integration
