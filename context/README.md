# Context System — Portfolio AI Memory

This directory is the **persistent intelligence system** for AI-assisted development of this portfolio.

## Purpose

When an AI coding agent (Claude Code, Antigravity, Cursor, etc.) opens this project, it should read these files FIRST to understand:

- **WHY** the portfolio exists (vision.md)
- **HOW** it should look (ui-philosophy.md)
- **WHAT** technical rules to follow (engineering-principles.md)
- **HOW** projects are structured (project-showcase-system.md)
- **HOW** to animate (animation-system.md)
- **WHAT** to track (analytics-strategy.md)
- **WHEN** to build what (roadmap.md)
- **WHAT** was decided and why (decisions.md)

## File Index

| File | Purpose |
|------|---------|
| `current-state.md` | **SESSION MEMORY** — what's done, priorities, blockers, next steps |
| `vision.md` | Project soul — purpose, audience, positioning |
| `ui-philosophy.md` | Visual identity, colors, typography, interactions |
| `design-system.md` | Implementation-level tokens, CSS variables, Tailwind config |
| `engineering-principles.md` | Tech stack, architecture, performance, a11y |
| `project-showcase-system.md` | Project tiers, schema, page structure, visual storytelling |
| `animation-system.md` | Motion guidelines, timing, easing, performance |
| `analytics-strategy.md` | Umami + PostHog setup, custom events, recruiter intent signals |
| `roadmap.md` | Phased development plan with checkboxes |
| `decisions.md` | Architecture decision log (append-only) |

## How to Use

1. AI agents: Read `CLAUDE.md` at repo root first, then these files
2. When making a significant technical decision, add to `decisions.md`
3. When completing a roadmap item, check it off in `roadmap.md`
4. These files evolve with the project — update as understanding grows
