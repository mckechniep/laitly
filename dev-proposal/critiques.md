## Critical Review: Laitly Developer Deck

### 1. The "1 in 3" Statistic is Doing a Lot of Heavy Lifting

The deck claims "1 in 3 breastfeeding mothers stop earlier than intended due to logistical overwhelm." No source is cited. CDC research consistently identifies the top reasons mothers stop breastfeeding as: return to work (structural), pain/difficulty latching, perceived low supply, and lack of institutional support. These are not problems an inventory tracker solves. "Logistical overwhelm" is a conveniently vague framing that makes the product thesis sound inevitable. If you can't source this stat to a peer-reviewed study, it undermines the entire problem slide.

### 2. No Competitive Landscape — At All

This is the most glaring omission. Huckleberry, Baby Tracker, Pump Log, Milk Stash, and BabyConnect all exist. Elvie and Willow ship their own tracking apps with first-party pump data. The deck never acknowledges that *any* of these exist, which makes it look either naive or deliberately evasive. A developer reading this should be asking: "Why hasn't one of these already won?" The answer might be uncomfortable — maybe this problem isn't big enough to sustain a standalone app.

### 3. No Business Model

This is a "developer briefing" with zero mention of how the app makes money. Gift subscriptions and HSA/FSA payment are v1.5 nice-to-haves, hinting at a paid model, but there's no pricing discussion, no willingness-to-pay research, no unit economics. A developer scoping this work needs to know if they're building a $2.99 one-time purchase or a $9.99/month subscription, because those are architecturally different products (paywalls, subscription management, trial flows, receipt validation).

### 4. The v1 Scope is Not an MVP — It's a Full Product

Count the "must-haves": milk logging, inventory tracking with fridge/freezer, expiry alerts, notifications, baby profile, return-to-work strategy planner, trip planner, LTD counter, reminders, partner/caregiver view with separate UI, guides content section, AND simultaneous iOS + Android launch. That's 12+ features across two platforms. A real MVP would be: logging + inventory + expiry tracking on one platform. Everything else is learned-about, not assumed.

### 5. The Built-In Expiration Date Problem

Breastfeeding typically lasts 6-12 months. Every single customer churns by design. This means:
- Customer lifetime value is capped at ~12 months of subscription revenue
- You need a perpetual acquisition engine targeting a narrow demographic window (new/expecting mothers)
- You're competing for attention during the most exhausting period of a parent's life

The deck doesn't grapple with this at all. What's the CAC for reaching breastfeeding mothers? What's the LTV if they churn in 8 months?

### 6. Streaks Contradict the Mission

The home screen features a "breastfeeding streak" counter. The mission says "so she can just be present" and the design principles say "no output judgement." Streaks are inherently judgmental — they create pressure to maintain them. A mother who has a bad day, gets sick, or supplements with formula and "breaks her streak" is now being punished by the app that promised to reduce her mental load. This is a philosophical contradiction baked into the core screen.

### 7. "10 Seconds to Log" is Optimistic

The wireframe shows: open app → navigate to Movement tab → select state (Added/Moved/Used) → adjust oz amount → select destination (Fridge/Freezer) → hit Save. That's a minimum of 5 taps with visual confirmation at each step. "10 seconds" works in a demo; at 4am with one hand while holding a baby, it's more like 20-30. Also, the "auto-populate from last session" feature is a double-edged sword — a sleep-deprived mother who taps Save without checking creates bad data that cascades into every calculation the "Lait" tab depends on.

### 8. Privacy and Regulatory Silence

The app tracks health-adjacent data about mothers and infants — pumping schedules, feeding volumes, baby weight/intake calculations. There is zero mention of:
- HIPAA considerations (does this qualify as health data?)
- Data encryption at rest and in transit
- COPPA (you're storing data about children)
- GDPR (if available outside the US)
- Where data is stored, who can access it, retention policies

For an app targeting vulnerable users during a sensitive life stage, this is a serious gap. A developer should be raising this before writing a single line of code.

### 9. Partner View Raises Unanswered Architecture Questions

The partner/caregiver view is listed as a v1 must-have but the deck doesn't address: Is the partner a separate account or a shared login? How is access granted and revoked? Can the partner see historical data or just current state? What happens after a separation/divorce? This isn't a minor feature — it's multi-user access control with real emotional stakes, and it significantly complicates the backend architecture.

### 10. Content Strategy Without a Content Team

The Guides tab promises "AAP-backed answers, how-to videos, storage tips, pump reviews, community-reviewed best practices." Questions:
- Does Laitly have AAP licensing or endorsement, or are you paraphrasing their guidelines?
- "Community-reviewed" — there's no community feature in v1. Who is this community?
- Who writes, reviews, and updates pump reviews? This is a content operation, not a feature.
- "How-to videos" — who produces these? What's the content budget?

Claiming AAP backing without actually having it is a liability risk. Shipping a "Guides" tab with thin or stale content on launch is worse than not having it.

### 11. iOS + Android Simultaneously is Expensive and Risky

"iOS + Android" is a v1 must-have, yet "Android-first launch" is listed as out of scope. This implies a simultaneous launch across both platforms, which roughly doubles development cost, QA surface area, and ongoing maintenance burden. Most startups with limited resources pick one platform, validate product-market fit, then expand. The deck doesn't justify why both are needed on day one.

### 12. No Technical Guidance in a "Developer Briefing"

For a deck titled "Developer Briefing," there's no mention of:
- Offline support (critical — mothers pump in places without connectivity)
- Backend architecture or data sync strategy
- Push notification infrastructure
- Authentication approach
- Tech stack preferences or constraints
- Performance requirements
- Accessibility standards

The deck is a product vision document wearing a developer briefing's title.

---

### Bottom Line

Laitly has a genuine insight at its core — breastfeeding mothers carry an invisible cognitive load around milk logistics, and most tools addressing this are clunky afterthoughts inside broader baby-tracking apps. That's real.

But the deck oversells the problem (unsourced statistics), ignores the competition, avoids the business model question, packs a 12-feature two-platform product into "v1," and skips every hard technical and regulatory question. It reads like a pitch to inspire, not a brief to build from. A developer receiving this should come back with 30 questions before estimating a single sprint.
