# Design System — Implementation Reference

> This file bridges UI Philosophy (conceptual) with actual code implementation.  
> Every design token here maps directly to Tailwind config values.

## Theme Strategy

**Light mode = primary theme.** Dark mode = fully supported secondary theme.

Both themes use CSS custom properties for seamless switching via `next-themes`.

## Color Tokens

### Light Mode (Default)

```css
/* Backgrounds */
--bg-primary:      hsl(0, 0%, 100%);           /* #ffffff — page background */
--bg-secondary:    hsl(220, 20%, 97%);          /* #f5f6f8 — cards, sections */
--bg-tertiary:     hsl(220, 16%, 93%);          /* #ecedf1 — hover, subtle areas */
--bg-elevated:     hsl(0, 0%, 100%);            /* #ffffff — modals, dropdowns */

/* Text */
--text-primary:    hsl(220, 25%, 10%);          /* #161a22 — headings, body */
--text-secondary:  hsl(220, 12%, 40%);          /* #5c6370 — descriptions */
--text-tertiary:   hsl(220, 8%, 56%);           /* #878d96 — captions, meta */
--text-muted:      hsl(220, 6%, 70%);           /* #adb0b6 — placeholders */

/* Accent — Electric Violet (signature color) */
--accent-primary:  hsl(250, 80%, 58%);          /* #5b3fe6 — CTAs, links */
--accent-hover:    hsl(250, 80%, 50%);          /* #4a2fd4 — hover state */
--accent-light:    hsl(250, 80%, 95%);          /* #ece8fd — accent bg */
--accent-glow:     hsl(250, 80%, 58%, 0.12);    /* subtle glow */

/* Borders */
--border-default:  hsl(220, 14%, 90%);          /* #e2e4e8 */
--border-subtle:   hsl(220, 14%, 94%);          /* #edeff2 */
--border-accent:   hsl(250, 80%, 58%, 0.25);    /* accent-tinted */

/* Semantic */
--color-success:   hsl(160, 70%, 38%);
--color-warning:   hsl(40, 90%, 48%);
--color-error:     hsl(0, 72%, 52%);
--color-info:      hsl(210, 80%, 55%);
```

### Dark Mode

```css
/* Backgrounds */
--bg-primary:      hsl(220, 20%, 6%);           /* #0d0f14 */
--bg-secondary:    hsl(220, 18%, 10%);          /* #14171e */
--bg-tertiary:     hsl(220, 16%, 14%);          /* #1c2029 */
--bg-elevated:     hsl(220, 18%, 12%);          /* #181c24 */

/* Text */
--text-primary:    hsl(0, 0%, 95%);             /* #f2f2f2 */
--text-secondary:  hsl(220, 10%, 62%);          /* #949aa6 */
--text-tertiary:   hsl(220, 8%, 42%);           /* #636870 */
--text-muted:      hsl(220, 6%, 30%);           /* #484b50 */

/* Accent — slightly brighter in dark mode */
--accent-primary:  hsl(250, 80%, 68%);          /* #7c63f0 */
--accent-hover:    hsl(250, 80%, 75%);          /* #9580f5 */
--accent-light:    hsl(250, 80%, 12%);          /* #180f33 */
--accent-glow:     hsl(250, 80%, 65%, 0.15);

/* Borders */
--border-default:  hsl(220, 14%, 18%);          /* #272b34 */
--border-subtle:   hsl(220, 14%, 14%);          /* #1f232b */
--border-accent:   hsl(250, 80%, 65%, 0.2);

/* Semantic (adjusted for dark bg) */
--color-success:   hsl(160, 70%, 45%);
--color-warning:   hsl(40, 90%, 55%);
--color-error:     hsl(0, 70%, 55%);
--color-info:      hsl(210, 80%, 60%);
```

## Typography Implementation

### Font Configuration (next/font)

```ts
// Inter — headings + body
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// JetBrains Mono — code, tech tags
import { JetBrains_Mono } from 'next/font/google'
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
```

### Type Scale (Tailwind)

```ts
fontSize: {
  'display':  ['4rem',    { lineHeight: '1.1',  letterSpacing: '-0.04em', fontWeight: '700' }],
  'h1':       ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '700' }],
  'h2':       ['2rem',    { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '600' }],
  'h3':       ['1.5rem',  { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
  'h4':       ['1.25rem', { lineHeight: '1.4',  letterSpacing: '0',      fontWeight: '500' }],
  'body':     ['1rem',    { lineHeight: '1.7',  letterSpacing: '0',      fontWeight: '400' }],
  'small':    ['0.875rem',{ lineHeight: '1.5',  letterSpacing: '0',      fontWeight: '400' }],
  'tiny':     ['0.75rem', { lineHeight: '1.5',  letterSpacing: '0.02em', fontWeight: '500' }],
}
```

## Spacing Scale

```ts
spacing: {
  'section':  '8rem',     // 128px — between major sections
  'block':    '4rem',     // 64px  — between subsections
  'group':    '2rem',     // 32px  — between related items
  'element':  '1.5rem',   // 24px  — between components
  'compact':  '1rem',     // 16px  — tight spacing
  'micro':    '0.5rem',   // 8px   — minimal spacing
}
```

## Shadow System

### Light Mode
```css
--shadow-sm:    0 1px 2px hsl(220, 20%, 85%, 0.3);
--shadow-md:    0 4px 12px hsl(220, 20%, 80%, 0.15);
--shadow-lg:    0 12px 32px hsl(220, 20%, 75%, 0.12);
--shadow-glow:  0 0 20px var(--accent-glow);
```

### Dark Mode
```css
--shadow-sm:    0 1px 2px hsl(0, 0%, 0%, 0.3);
--shadow-md:    0 4px 12px hsl(0, 0%, 0%, 0.25);
--shadow-lg:    0 12px 32px hsl(0, 0%, 0%, 0.3);
--shadow-glow:  0 0 20px var(--accent-glow);
```

## Border Radius

```ts
borderRadius: {
  'sm':   '6px',
  'md':   '8px',
  'lg':   '12px',
  'xl':   '16px',
  '2xl':  '20px',
  'full': '9999px',
}
```

## Component Tokens

### Buttons

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| Primary | accent-primary | white | none | accent-hover + shadow-glow |
| Secondary | bg-secondary | text-primary | border-default | bg-tertiary |
| Ghost | transparent | text-secondary | none | bg-secondary |
| Outline | transparent | accent-primary | border-accent | accent-light bg |

### Cards

```css
/* Light mode card */
background: var(--bg-secondary);
border: 1px solid var(--border-subtle);
border-radius: var(--radius-lg);
transition: all 200ms ease;

/* Card hover */
transform: translateY(-2px);
border-color: var(--border-accent);
box-shadow: var(--shadow-md);
```

### Badges

| Type | Background | Text | Example |
|------|-----------|------|---------|
| Tech | accent-light | accent-primary | "React", "TypeScript" |
| Category | bg-tertiary | text-secondary | "AI Systems", "SaaS" |
| Status (Active) | success/10 | success | "Active" |
| Status (Completed) | info/10 | info | "Completed" |

## Gradient Tokens

```css
/* Hero gradient (light mode) */
--gradient-hero: linear-gradient(135deg, hsl(250, 80%, 58%), hsl(210, 80%, 55%), hsl(280, 70%, 60%));

/* Text gradient */
--gradient-text: linear-gradient(90deg, var(--text-primary), var(--accent-primary));

/* Card shine (hover) */
--gradient-shine: linear-gradient(135deg, transparent, var(--accent-glow), transparent);

/* Section divider */
--gradient-divider: linear-gradient(90deg, transparent, var(--border-default), transparent);
```

## Motion Tokens

```ts
const motion = {
  duration: {
    instant:   '100ms',
    fast:      '200ms',
    normal:    '300ms',
    slow:      '500ms',
    cinematic: '800ms',
  },
  easing: {
    default:  'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
    enter:    'cubic-bezier(0, 0, 0.2, 1)',
    exit:     'cubic-bezier(0.4, 0, 1, 1)',
    smooth:   'cubic-bezier(0.4, 0, 0, 1)',
  },
  spring: {
    default:  { stiffness: 300, damping: 30 },
    bouncy:   { stiffness: 400, damping: 25 },
    gentle:   { stiffness: 200, damping: 35 },
  },
}
```

## Breakpoints

```ts
screens: {
  'sm':  '640px',
  'md':  '768px',
  'lg':  '1024px',
  'xl':  '1280px',
  '2xl': '1440px',
}
```

## Layout Containers

```ts
maxWidth: {
  'content':  '720px',    // Reading content (case studies)
  'section':  '1080px',   // Section containers
  'layout':   '1280px',   // Main layout
  'full':     '1440px',   // Max-width wrapper
}
```

## Z-Index Scale

```ts
zIndex: {
  'behind':    -1,
  'default':   0,
  'raised':    10,
  'dropdown':  20,
  'sticky':    30,    // Navbar
  'overlay':   40,
  'modal':     50,
  'toast':     60,
}
```

## Structured Data Schemas (SEO)

### Person Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Amarnadh P B",
  "jobTitle": "AI + Full-Stack Product Engineer",
  "url": "https://amarnadhpb.dev",
  "sameAs": ["github_url", "linkedin_url"],
  "knowsAbout": ["AI Systems", "SaaS", "Full-Stack", "Agentic Workflows"]
}
```

### Project Schema (per project)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Project Name",
  "description": "Project tagline",
  "applicationCategory": "DeveloperApplication",
  "author": { "@type": "Person", "name": "Amarnadh P B" }
}
```

### Article Schema (for writing/notes)
```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Article Title",
  "author": { "@type": "Person", "name": "Amarnadh P B" }
}
```
