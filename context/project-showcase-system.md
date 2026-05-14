# Project Showcase System

> The heart of the portfolio. This defines how projects are structured, displayed, and experienced.

## Core Philosophy

Each project should feel like a **mini startup launch page**, not a card with a screenshot.

The goal: visitors understand the THINKING behind the project, not just the output.

## Project Categories

| Category | Description | Visual Language |
|----------|------------|-----------------|
| AI Systems | Agents, RAG, LLM orchestration, tool calling | Node graphs, terminal aesthetics, streaming |
| SaaS Products | Dashboards, automation, productivity | Product screenshots, dashboard mockups |
| Full-Stack Engineering | Scalable apps, infra-heavy systems | Architecture diagrams, system maps |
| Developer Tools | API managers, CLI tools, utilities | Terminal UI, code snippets |
| Experimental Interfaces | AI UX, interactive frontend | Immersive interactions, hover reveals |

## Project Tiers

### Featured Projects (3-5 max)
- Displayed prominently on homepage
- Full deep-dive case study page
- Rich visuals, architecture, storytelling
- These are the portfolio's main selling points

### Lab Projects (unlimited)
- Displayed in a separate "Lab" or "More Work" section
- Compact cards with quick overview
- Link to GitHub or live demo
- Interactive browsing (carousel, grid, loop)
- This solves the "too many projects on homepage" problem

## Project Data Schema (MDX Frontmatter)

```yaml
---
title: "Vaultic — API Key Manager"
slug: "vaultic"
tagline: "Local-first, zero-knowledge API key vault for developers"
category: "developer-tools"         # ai-systems | saas | full-stack | developer-tools | experimental
status: "active"                    # active | completed | experimental
tier: "featured"                    # featured | lab
date: "2024-12"
coverImage: "/images/projects/vaultic/cover.png"
liveUrl: "https://vaultic.app"
githubUrl: "https://github.com/amarnadhpb/vaultic"
techStack:
  frontend: ["Next.js", "Tailwind", "Framer Motion"]
  backend: ["Tauri", "Rust", "Web Crypto API"]
  infra: ["IndexedDB", "AES-256-GCM", "PBKDF2"]
  tools: ["TypeScript", "Zustand", "Dexie.js"]
metrics:
  - label: "Encryption Standard"
    value: "AES-256-GCM"
  - label: "Key Derivation"
    value: "310K PBKDF2 iterations"
  - label: "Storage"
    value: "Zero-cloud, local-first"
color: "#6366f1"                    # Project accent color
---
```

## Project Deep Dive Page Structure

Each featured project page follows this storytelling arc.

> **CRITICAL UX RULE:** Avoid giant text-heavy case studies.
> Use: diagrams, pull quotes, metric blocks, expandable sections, visual rhythm.
> NOT: long uninterrupted markdown essays.

### A. Project Hero
- Full-width visual / animated preview / live demo embed
- Project title + tagline (large, bold)
- 3-4 key metrics as highlight pills (e.g. "AES-256 Encryption" · "Zero-Cloud" · "Tauri Desktop")
- CTA row: Live Demo | GitHub | Watch Video
- **Visual:** Hero image takes 60%+ of viewport on first load

### B. The Problem (Visual)
- **Format:** 2-3 short paragraphs MAX + supporting visual
- Use pull quote or callout for the core problem statement
- Optional: "Who it's for" as small icon+text blocks
- **Anti-pattern:** Do NOT write a 500-word essay here

### C. Architecture / System Design (Star Section)
- **Format:** Interactive or static diagram + short annotations
- Architecture diagrams (Mermaid, custom SVG, or image)
- Workflow visualizations with labeled steps
- Agent flows / API interactions as node graphs
- **Key:** Let the DIAGRAM tell the story, text explains decisions only
- Use expandable/collapsible sections for deep details
- **This section separates you from 95% of portfolios.**

### D. How It Works (Animated)
- **Format:** Step-by-step visual walkthrough (numbered steps with visuals)
- Embedded video OR animated sequence
- Terminal simulation for CLI/AI tools
- Before/after for UX improvements
- **Keep it scannable** — each step is a visual + 1-2 sentences

### E. Technical Breakdown (Scannable)
- **Format:** Grid or column layout, NOT prose
- Tech stack as visual cards with icons
- Each category (Frontend, Backend, AI, Infra) as a compact block
- Use expandable "Why this choice?" sections for engineering depth
- **Anti-pattern:** Do NOT list every package in a paragraph

### F. Engineering Decisions (Pull Quotes)
- **Format:** 2-3 key decisions as quote blocks
- Each decision: "We chose X over Y because Z"
- Collapsible "More details" for the curious
- **This makes you look senior without being text-heavy**

### G. Results / Metrics (Visual Blocks)
- **Format:** Large metric cards in a grid
- Each metric: big number + label + context line
- Examples: "310K iterations" "PBKDF2 key derivation" "OWASP recommended"
- Even personal projects should quantify outcomes
- **Visual:** Metric cards should be the visual anchor of this section

## MDX Components Available

These custom components can be used inside project MDX files:

```
<ProjectHero />           — Hero with image, title, badges
<ProblemStatement />      — The problem section
<ArchitectureDiagram />   — System design visualization
<TechStack />             — Visual tech stack breakdown
<MetricCard />            — Key metric highlight
<CodeBlock />             — Syntax-highlighted code
<Timeline />              — Project evolution timeline
<BeforeAfter />           — Comparison slider
<VideoEmbed />            — Responsive video player
<CalloutBox />            — Important note or insight
<TerminalDemo />          — Terminal-style output display
```

## Project Card Component (For Listings)

### Featured Card (Homepage)
- Large visual (16:9 or 4:3 aspect)
- Title + tagline
- Category badge
- Tech stack icons (3-4 max)
- Hover: subtle lift + border glow + "View Case Study" CTA

### Lab Card (Compact)
- Smaller visual or icon
- Title + one-line description
- Category tag
- Hover: quick preview or expand

## Content Flow Solution (Avoiding "Too Long" Pages)

The homepage should NOT show all projects inline. Instead:

1. **Featured Section** — 3-5 flagship projects with rich cards
2. **"More Work" / Lab Section** — Interactive element:
   - Carousel / loop of compact project cards
   - "See All Projects" CTA → /projects page
   - Filterable by category
3. **Projects Page** (`/projects`) — Full listing with filters
4. **Project Deep Dive** (`/projects/[slug]`) — Individual case studies

This keeps the homepage focused while giving depth to anyone who wants it.

## Adding New Projects

To add a new project:

1. Create `/src/content/projects/[slug].mdx`
2. Add frontmatter following the schema above
3. Write content using MDX components
4. Add images to `/public/images/projects/[slug]/`
5. Project automatically appears based on `tier` setting

No code changes needed. The system handles rendering.
