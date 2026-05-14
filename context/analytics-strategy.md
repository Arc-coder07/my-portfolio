# Analytics Strategy

> Turn the portfolio into a data-driven product.

## Why Analytics Matter

This portfolio is a product. Analytics let you:
- Know which projects attract attention
- See where recruiters stop reading
- Identify which CTAs get clicks
- Understand what content performs best
- Iterate based on real user behavior

## Analytics Stack

### Phase 1: Umami (Launch)

**Purpose:** Traffic overview — visitors, sessions, pageviews

**What it tracks:**
- Total visitors / unique visitors
- Sessions and session duration
- Pageviews per page
- Referrer sources (LinkedIn, GitHub, Twitter, direct)
- Countries and devices
- Route-level analytics (which pages get viewed)
- Browser and OS breakdown

**Setup:**
- Self-host on Vercel/Railway OR use Umami Cloud
- Lightweight script (~1KB)
- Privacy-friendly, GDPR-compliant, no cookies
- Simple integration: one `<script>` tag

**Custom Events to Track:**
```
project_view          — When a project deep dive is opened
project_card_click    — Which project cards get clicked
cta_click             — Resume download, GitHub, contact, book call
section_view          — Which homepage sections are scrolled to
external_link_click   — GitHub repo, live demo clicks
contact_form_submit   — Contact form submissions
filter_use            — Project filter usage on /projects
```

### Phase 2: PostHog (After Launch)

**Purpose:** Behavioral analytics — HOW users interact

**What it tracks:**
- Click behavior (heatmaps)
- Scroll depth per page
- User flow / session replay
- Feature usage
- Funnel analysis (homepage → project → contact)

**Key Questions PostHog Answers:**
- How far do recruiters scroll on project pages?
- Which architecture diagram sections get the most attention?
- Do people click "View Architecture" or skip it?
- What's the conversion path from first visit to contact?

## Key Metrics Dashboard

### Traffic Metrics
- Daily / weekly visitors
- Top referrer sources
- Most viewed projects
- Geographic distribution

### Engagement Metrics
- Average time on project pages
- Scroll depth on case studies
- CTA click-through rate
- Resume download count

### Conversion Metrics
- Contact form submissions
- "Book a Call" clicks
- GitHub profile visits from portfolio
- LinkedIn connection requests originating from portfolio

## Implementation Notes

1. Analytics scripts loaded asynchronously, never blocking
2. No tracking before user consent (if required by region)
3. Custom events fire on meaningful interactions, not every click
4. Review analytics monthly, iterate quarterly
5. A/B test project ordering based on engagement data

## Recruiter Intent Signals (MOST IMPORTANT)

These are the highest-value metrics. Track these explicitly:

### High-Intent Actions
```
resume_download          — Resume PDF downloaded (strongest signal)
contact_form_submit      — Contact form completed
book_call_click          — Calendar booking link clicked
email_click              — Email address clicked/copied
```

### Medium-Intent Actions
```
github_profile_click     — GitHub profile link clicked
linkedin_click           — LinkedIn profile clicked
project_github_click     — Individual project repo clicked
live_demo_click          — Live demo link clicked
```

### Engagement Depth
```
featured_project_time    — Time spent on featured project pages (>60s = high intent)
architecture_view        — Architecture section scrolled into view
tech_breakdown_expand    — Expandable tech details opened
case_study_completion    — Scrolled to bottom of project page (>80% depth)
multiple_projects_viewed — 2+ project deep dives in one session
```

### Funnel Analysis
```
Homepage → Featured Project → Architecture Section → Contact
Homepage → Projects Page → Project Detail → GitHub/Demo
Resume Download → Contact Form (or vice versa)
```

This data answers the critical question: **"Are the right people engaging with the right content?"**
