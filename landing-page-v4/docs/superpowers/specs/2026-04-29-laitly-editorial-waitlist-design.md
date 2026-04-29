# Laitly Editorial Waitlist Landing Page Design

Date: 2026-04-29
Status: Approved for implementation planning
Workspace: `landing-page-v4`

## Goal

Build a coming-soon landing page for Laitly that captures early-access waitlist signups while making the app feel launch-ready. The page should be calm, editorial, warm, and product-specific. It should not feel like a generic SaaS launch page.

The primary conversion is email waitlist signup. App Store/download intent should be acknowledged as coming soon, not presented as currently available.

## Direction

Use the approved **Editorial Waitlist** direction:

1. Hero waitlist form
2. App screenshots/product proof
3. Three key benefits
4. Away-time feature story
5. Privacy/trust
6. Final CTA using the envelope signup artwork from `cta.png`

The page should reuse the existing v4 asset set:

- `cta.png`: final CTA envelope/waitlist image and related launch imagery
- `feature-icon-set.png`: feature icon style and benefit language
- `away-time-planning.png`: away-time planning story section
- `freezer-stash.png`: stash/inventory proof and visual language

## Visual System

Use the established Laitly v3 design system as the baseline.

Colors:

- Canvas: `#fbf9f4`
- Surface: `#ffffff`
- Text: `#1b1c19`
- Muted text: `#635d5a`
- Accent: `#C5A55A`
- Border: `#d0c5b4`

Typography:

- Headline: Newsreader, with Georgia fallback
- Body/UI: Manrope, with system sans fallback
- Hero copy should use high editorial contrast: large serif headline, restrained sans body, compact UI text

Layout:

- Warm editorial 12-column grid on desktop
- Single-column mobile stack
- Use asymmetric sections where useful, but keep the conversion path simple
- Avoid repetitive card grids. Cards are acceptable for app proof, feature modules, and framed assets, but page sections should feel like open editorial layouts.

## Hero

The hero should be conversion-led and calm.

Required visible content:

- Logo/wordmark: `laitly`
- Navigation: `How it works`, `Features`, `Privacy`
- Headline: `Milk math, made calm.`
- Supporting copy: `Join the waitlist for early access to Laitly, the calmer way to track your milk stash, expiry dates, time away, and caregiver notes.`
- Email input placeholder: `Enter your email`
- Primary button: `Join the waitlist`
- Helper text: `No spam. Early access updates only.`
- Coming-soon support text near the product preview: `App Store coming soon`

Hero composition:

- Left side: headline, supporting copy, email form, helper text
- Right side: launch-ready app preview using the same visual language as the provided mobile screenshot section in `cta.png`
- The waitlist button is the only primary action above the fold
- Do not add an eyebrow/pill/badge above the headline

## Waitlist Behavior

The signup interaction should be simple.

Default state:

- Email input
- `Join the waitlist` submit button
- Helper text: `No spam. Early access updates only.`

Success state:

- Show: `You're on the list. We'll let you know when Laitly is ready.`
- Do not ask a post-signup feature question
- Do not add a share prompt

Validation:

- Require a syntactically valid email before showing success
- Show a concise inline error for invalid email
- No backend integration is required in the first implementation unless a service endpoint already exists

## Product Proof Section

Use a screenshot strip or app-store style row based on `cta.png`.

Content should prove the app is real and launch-ready:

- Stash overview
- Expiry alerts
- Away-time plan
- Add milk entry
- Caregiver instructions

This section should visually echo the phone mockups from the provided asset. Keep labels short and product-specific.

## Three Benefits Section

Use the line-icon visual language from `feature-icon-set.png`.

Primary benefits:

1. `Track every ounce`
   - `Log and organize every bag or bottle you store.`
2. `Know what expires`
   - `We flag what's expiring so nothing goes to waste.`
3. `Plan time away`
   - `Know what to bring, what's left, and when your baby is covered.`

Keep this section restrained. Do not expand it into a large generic feature grid.

## Away-Time Story Section

Use `away-time-planning.png` as the core visual reference.

Purpose:

- Explain the emotional and practical value of Laitly through a concrete parent scenario
- Show that the app helps with time away, caregiver confidence, and bottle coverage

Core copy direction:

- Heading: `Plan every moment you're away.`
- Supporting idea: Laitly helps parents know how much milk is needed, what comes from fresh supply, what comes from freezer stash, and what the caregiver should use.

Visual elements:

- Timeline from leaving to returning
- Bottle coverage and stash split
- Calm confirmation state

## Privacy/Trust Section

Keep this short and confidence-building.

Recommended content:

- Heading: `Your data is yours.`
- Supporting copy: `Laitly is designed for private family routines, not public feeds or noisy tracking.`
- Three trust points:
  - `Private by design`
  - `Secure and encrypted`
  - `You stay in control`

Use the privacy/trust illustration style shown in `cta.png` if it fits the final page rhythm.

## Final CTA

The final CTA must use the envelope signup artwork from `cta.png`.

Required copy:

- Heading: `Be the first to know when Laitly launches.`
- Supporting copy: `Join the waitlist and we'll let you know as soon as early access opens.`
- Email input placeholder: `Enter your email`
- Button: `Join the waitlist`
- Success message: `You're on the list. We'll let you know when Laitly is ready.`

Composition:

- Left side: CTA copy and signup form
- Right side: the envelope/waitlist artwork from `cta.png`
- The visual should echo the existing asset directly rather than introduce a new CTA concept

## Implementation Notes

The older `landing-page` and `landing-page-v2` directories use static HTML/CSS/JS. Unless implementation planning finds an existing framework in v4, implement this as a static site:

- `index.html`
- `styles.css`
- `script.js`
- local image assets from the v4 folder

If external fonts are unavailable during local verification, use the documented fallbacks and keep layout stable.

## Acceptance Criteria

- The page is fully responsive on mobile and desktop
- The hero waitlist form is the primary above-the-fold action
- The final CTA uses `cta.png` envelope/waitlist imagery
- Signup success state is simple and does not include extra questions or share prompts
- Existing assets are loaded, cropped, and framed intentionally
- The page follows the Laitly warm editorial palette and typography system
- No visible placeholder text remains
- No App Store/download CTA implies the app is currently available
