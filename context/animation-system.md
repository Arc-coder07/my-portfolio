# Animation System

> Motion guidelines for the portfolio. Cool ≠ unusable.

## Philosophy

Animation should feel:
- **Purposeful** — Every animation communicates something
- **Subtle** — Enhances without distracting
- **Fast** — Never blocks content consumption
- **Premium** — Smooth, polished, intentional

Animation should NOT feel:
- ❌ Flashy or gratuitous
- ❌ Slow or blocking
- ❌ Jarring or abrupt
- ❌ Like a demo reel

## Technology Stack

### Primary: Framer Motion
- All component animations (enter, exit, hover, tap)
- Layout animations
- Gesture handling
- Scroll-triggered reveals

### Secondary: GSAP (Selective)
- ONLY for advanced scroll storytelling (ScrollTrigger)
- Cinematic hero sequences
- Complex timeline animations
- Never for simple hover/enter effects

### Tertiary: CSS (Baseline)
- Simple transitions (color, opacity, transform)
- Loading states
- Cursor effects

## Timing Tokens

```
instant:    100ms   — Hover states, color changes
fast:       200ms   — Micro-interactions, button feedback
normal:     300ms   — Component transitions, card reveals
slow:       500ms   — Section reveals, page transitions
cinematic:  800ms+  — Hero animations, storytelling moments
```

## Easing

```
default:    [0.25, 0.1, 0.25, 1.0]    — Standard ease
enter:      [0, 0, 0.2, 1]            — Decelerate (elements appearing)
exit:       [0.4, 0, 1, 1]            — Accelerate (elements leaving)
spring:     { stiffness: 300, damping: 30 }  — Bouncy, playful
smooth:     [0.4, 0, 0, 1]            — Smooth, premium feel
```

## Animation Patterns

### Page Enter
- Fade in + slide up (20px)
- Staggered children (50ms delay each)
- Duration: 500ms

### Section Reveal (Scroll)
- Intersection Observer trigger at 20% visibility
- Fade in + slide up (30px)
- Duration: 600ms
- Only animate on first appearance (once: true)

### Card Hover
- translateY(-4px) + subtle shadow increase
- Border glow (accent color, 15% opacity)
- Duration: 200ms

### Button Interaction
- Hover: background shift + slight scale(1.02)
- Press: scale(0.98)
- Duration: 150ms

### Image Reveal
- Clip-path or mask animation
- Or fade in with slight scale(1.05 → 1.0)
- Duration: 600ms

### Navigation
- Backdrop blur on scroll
- Logo/links fade between states
- Active indicator slides

## Scroll Storytelling (GSAP Only)

Rules for scroll-based animations:
1. Never hijack scroll
2. Content remains readable without scroll effects
3. Pin sections only when narrative requires it
4. Maximum 2 pinned sections per page
5. Always provide scroll progress indication
6. Test on mobile — simplify or disable if needed

## Performance Rules

1. ONLY animate `transform` and `opacity` (composited properties)
2. Use `will-change` sparingly, remove after animation
3. No layout-triggering animations (width, height, top, left)
4. Lazy load animation libraries
5. Disable complex animations on mobile
6. Respect `prefers-reduced-motion`:
```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

## Anti-Patterns

- ❌ Parallax on every section
- ❌ Auto-playing particle effects
- ❌ Mouse follower effects that affect usability
- ❌ Loading animations over 2 seconds
- ❌ Animations that repeat on every scroll direction change
- ❌ 3D transforms on mobile
- ❌ Animations that hide content until triggered
