# Decision Log

> Tracks architecture choices, rejected approaches, and tradeoffs. Updated as decisions are made.

## Format

Each decision follows:
```
### [DECISION-XXX] Title
- **Date:** YYYY-MM-DD
- **Status:** Accepted | Rejected | Superseded
- **Context:** Why this decision was needed
- **Decision:** What was decided
- **Alternatives Considered:** What else was evaluated
- **Tradeoffs:** Pros and cons
- **Consequences:** What this means going forward
```

---

### [DECISION-001] Next.js with App Router
- **Date:** 2026-05-13
- **Status:** Accepted
- **Context:** Need a framework that handles SEO, routing, MDX, performance, and SSR/RSC
- **Decision:** Next.js 15+ with App Router
- **Alternatives Considered:**
  - Astro — Great for static, but weaker for interactive components
  - Vite + React — No built-in SSR/SEO, more setup needed
  - Remix — Good, but ecosystem smaller for MDX workflows
- **Tradeoffs:** Heavier than Astro for purely static content, but the interactive case study pages need React's full power
- **Consequences:** RSC-first approach, dynamic imports for heavy components

---

### [DECISION-002] Tailwind CSS v4 for Styling
- **Date:** 2026-05-13
- **Status:** Accepted
- **Context:** Need rapid styling with consistent design tokens
- **Decision:** Tailwind CSS v4
- **Alternatives Considered:**
  - CSS Modules — More maintainable long-term but slower development
  - Styled Components — Runtime overhead, SSR complexity
  - Vanilla CSS — Maximum control but slower iteration
- **Tradeoffs:** Utility classes can clutter JSX, but speed and consistency win for this project
- **Consequences:** Design tokens defined in tailwind config, all styling through utilities

---

### [DECISION-003] MDX for Project Content
- **Date:** 2026-05-13
- **Status:** Accepted
- **Context:** Projects need rich content with embedded interactive components
- **Decision:** MDX for all project case studies
- **Alternatives Considered:**
  - Markdown + frontmatter only — Too limited for interactive content
  - CMS (Sanity/Contentful) — Overkill for a personal portfolio, adds complexity
  - Hardcoded pages — Doesn't scale, inconsistent structure
- **Tradeoffs:** MDX requires build pipeline setup, but enables component embedding in content
- **Consequences:** Each project is a single .mdx file with frontmatter + rich content

---

### [DECISION-004] Umami for Primary Analytics
- **Date:** 2026-05-13
- **Status:** Accepted
- **Context:** Need privacy-friendly analytics with traffic and custom event tracking
- **Decision:** Umami as primary analytics, PostHog for Phase 2 behavioral analytics
- **Alternatives Considered:**
  - Google Analytics — Privacy concerns, GDPR complexity, heavy
  - Plausible — Good but Umami offers self-hosting + custom events
  - Vercel Analytics — Too basic for custom event tracking
- **Tradeoffs:** Requires self-hosting setup or cloud subscription
- **Consequences:** Lightweight script, privacy-friendly, custom events for project engagement

---

### [DECISION-005] Dark Mode as Primary Theme
- **Date:** 2026-05-13
- **Status:** Accepted
- **Context:** Visual identity aligns with premium developer tools (Linear, Vercel, Raycast)
- **Decision:** Dark mode as default and primary experience, light mode as Phase 2
- **Alternatives Considered:**
  - Light mode primary — Doesn't match the aesthetic direction
  - Both from day one — Doubles design work, delays launch
- **Tradeoffs:** Limits initial audience slightly (some prefer light mode)
- **Consequences:** All design tokens and components built dark-first

---

### [DECISION-006] Framer Motion as Primary Animation Library
- **Date:** 2026-05-13
- **Status:** Accepted
- **Context:** Need declarative, performant animations with React integration
- **Decision:** Framer Motion for all standard animations, GSAP only for advanced scroll storytelling
- **Alternatives Considered:**
  - GSAP only — More powerful but less React-idiomatic
  - CSS animations only — Too limited for the interactive experience needed
  - React Spring — Good but Framer Motion has better ecosystem
- **Tradeoffs:** Two animation libraries = larger bundle, but each serves a different purpose
- **Consequences:** Framer Motion for 90% of animations, GSAP dynamically imported for scroll sequences

---

*New decisions will be appended here as the project progresses.*
