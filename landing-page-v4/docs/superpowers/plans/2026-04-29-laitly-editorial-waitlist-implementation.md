# Laitly Editorial Waitlist Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved static Laitly coming-soon landing page with waitlist signup, product proof, benefits, away-time story, privacy/trust, and final CTA using `cta.png`.

**Architecture:** Implement as a static site in `landing-page-v4` because this workspace currently contains only image assets and older Laitly landing pages use static HTML/CSS/JS. `index.html` owns semantic page structure, `styles.css` owns the Laitly visual system and responsive layout, and `script.js` owns waitlist form validation, success state, smooth anchor scrolling, and light reveal behavior.

**Tech Stack:** Plain HTML, CSS, vanilla JavaScript, local PNG assets, optional Google Fonts with safe fallbacks.

---

## File Structure

- Create: `landing-page-v4/.gitignore`
  - Responsibility: keep visual-companion artifacts and transient local files out of git.
- Create: `landing-page-v4/index.html`
  - Responsibility: complete semantic landing page markup and asset references.
- Create: `landing-page-v4/styles.css`
  - Responsibility: reset, tokens, typography, layout, sections, forms, responsive behavior, and accessibility states.
- Create: `landing-page-v4/script.js`
  - Responsibility: shared waitlist form behavior, inline validation, success messages, smooth scrolling, and reveal classes.
- Use existing assets:
  - `landing-page-v4/cta.png`
  - `landing-page-v4/feature-icon-set.png`
  - `landing-page-v4/away-time-planning.png`
  - `landing-page-v4/freezer-stash.png`
- Reference design spec:
  - `landing-page-v4/docs/superpowers/specs/2026-04-29-laitly-editorial-waitlist-design.md`

---

### Task 1: Local Hygiene

**Files:**
- Create: `landing-page-v4/.gitignore`

- [ ] **Step 1: Add local ignores**

Create `landing-page-v4/.gitignore`:

```gitignore
.superpowers/
*.log
```

- [ ] **Step 2: Verify ignored companion artifacts**

Run:

```bash
git status --short -- landing-page-v4/.superpowers landing-page-v4/.gitignore
```

Expected:

```text
?? landing-page-v4/.gitignore
```

- [ ] **Step 3: Commit local hygiene**

Run:

```bash
git add landing-page-v4/.gitignore
git commit -m "chore: ignore landing page local artifacts"
```

Expected: commit succeeds and `.superpowers/` is not staged.

---

### Task 2: Static Page Markup

**Files:**
- Create: `landing-page-v4/index.html`
- Read: `landing-page-v4/docs/superpowers/specs/2026-04-29-laitly-editorial-waitlist-design.md`

- [ ] **Step 1: Create the semantic page shell**

Create `landing-page-v4/index.html` with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laitly - Milk math, made calm.</title>
  <meta name="description" content="Join the waitlist for Laitly, the calmer way to track your milk stash, expiry dates, time away, and caregiver notes.">
  <meta property="og:title" content="Laitly - Milk math, made calm.">
  <meta property="og:description" content="A calmer way to track your milk stash, expiry dates, time away, and caregiver notes. Coming soon.">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header" data-reveal>
    <nav class="site-nav" aria-label="Main navigation">
      <a class="wordmark" href="#top" aria-label="Laitly home">laitly</a>
      <div class="nav-links">
        <a href="#how-it-works">How it works</a>
        <a href="#features">Features</a>
        <a href="#privacy">Privacy</a>
      </div>
      <a class="nav-action" href="#waitlist">Join the waitlist</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section-shell" aria-labelledby="hero-heading">
      <div class="hero-copy" data-reveal>
        <h1 id="hero-heading">Milk math, made calm.</h1>
        <p class="hero-lede">Join the waitlist for early access to Laitly, the calmer way to track your milk stash, expiry dates, time away, and caregiver notes.</p>
        <form class="waitlist-form" data-waitlist-form novalidate>
          <label class="sr-only" for="hero-email">Email address</label>
          <input id="hero-email" name="email" type="email" inputmode="email" autocomplete="email" placeholder="Enter your email" required>
          <button type="submit">Join the waitlist</button>
          <p class="form-message" data-form-message>No spam. Early access updates only.</p>
        </form>
      </div>
      <div class="hero-visual" aria-label="Laitly app preview" data-reveal>
        <div class="phone-row" aria-hidden="true">
          <div class="phone-card phone-card-primary">
            <span class="phone-label">Stash overview</span>
            <strong>84<span>oz</span></strong>
            <div class="phone-panel"></div>
          </div>
          <div class="phone-card phone-card-offset">
            <span class="phone-label">Away plan</span>
            <strong>100<span>%</span></strong>
            <div class="phone-panel"></div>
          </div>
          <div class="phone-card">
            <span class="phone-label">Expires soon</span>
            <strong>2<span>bags</span></strong>
            <div class="phone-panel"></div>
          </div>
        </div>
        <p>App Store coming soon</p>
      </div>
    </section>

    <section id="how-it-works" class="product-proof section-shell" aria-labelledby="proof-heading">
      <div class="section-intro" data-reveal>
        <h2 id="proof-heading">A launch-ready app for the routines you already carry.</h2>
        <p>Stash overview, expiry alerts, away-time planning, milk entry, and caregiver instructions all stay in one calm place.</p>
      </div>
      <img class="wide-asset" src="cta.png" alt="Laitly app screens showing stash overview, expiry alerts, away-time plan, milk entry, and caregiver instructions.">
    </section>

    <section id="features" class="benefits section-shell" aria-labelledby="features-heading">
      <div class="section-intro" data-reveal>
        <h2 id="features-heading">Three ways Laitly lightens the load.</h2>
      </div>
      <div class="benefit-grid">
        <article class="benefit-card" data-reveal>
          <span class="benefit-icon">01</span>
          <h3>Track every ounce</h3>
          <p>Log and organize every bag or bottle you store.</p>
        </article>
        <article class="benefit-card" data-reveal>
          <span class="benefit-icon">02</span>
          <h3>Know what expires</h3>
          <p>We flag what's expiring so nothing goes to waste.</p>
        </article>
        <article class="benefit-card" data-reveal>
          <span class="benefit-icon">03</span>
          <h3>Plan time away</h3>
          <p>Know what to bring, what's left, and when your baby is covered.</p>
        </article>
      </div>
      <img class="supporting-asset" src="feature-icon-set.png" alt="Laitly feature icons for milk tracking, expiry alerts, away-time planning, feeding plans, inventory, and reminders.">
    </section>

    <section class="away-story section-shell" aria-labelledby="away-heading">
      <div class="story-copy" data-reveal>
        <h2 id="away-heading">Plan every moment you're away.</h2>
        <p>Laitly helps parents know how much milk is needed, what comes from fresh supply, what comes from freezer stash, and what the caregiver should use.</p>
      </div>
      <img class="wide-asset" src="away-time-planning.png" alt="A Laitly away-time plan showing bottle coverage from fresh and frozen milk while a parent is away.">
    </section>

    <section class="stash-proof section-shell" aria-labelledby="stash-heading">
      <div class="section-intro" data-reveal>
        <h2 id="stash-heading">Know what's stored before you need it.</h2>
        <p>Freezer, fridge, oldest date, expiring soon, and total ounces stay visible without late-night recounting.</p>
      </div>
      <img class="wide-asset" src="freezer-stash.png" alt="A Laitly freezer stash overview with labeled milk bags, total ounces, expiring soon count, and oldest date.">
    </section>

    <section id="privacy" class="privacy section-shell" aria-labelledby="privacy-heading">
      <div class="section-intro" data-reveal>
        <h2 id="privacy-heading">Your data is yours.</h2>
        <p>Laitly is designed for private family routines, not public feeds or noisy tracking.</p>
      </div>
      <div class="trust-grid">
        <article data-reveal>
          <h3>Private by design</h3>
          <p>Your information stays between you and Laitly.</p>
        </article>
        <article data-reveal>
          <h3>Secure and encrypted</h3>
          <p>Built around careful handling of family data.</p>
        </article>
        <article data-reveal>
          <h3>You stay in control</h3>
          <p>Manage, export, or delete your data anytime.</p>
        </article>
      </div>
    </section>

    <section id="waitlist" class="final-cta section-shell" aria-labelledby="cta-heading">
      <div class="final-copy" data-reveal>
        <h2 id="cta-heading">Be the first to know when Laitly launches.</h2>
        <p>Join the waitlist and we'll let you know as soon as early access opens.</p>
        <form class="waitlist-form" data-waitlist-form novalidate>
          <label class="sr-only" for="final-email">Email address</label>
          <input id="final-email" name="email" type="email" inputmode="email" autocomplete="email" placeholder="Enter your email" required>
          <button type="submit">Join the waitlist</button>
          <p class="form-message" data-form-message>No spam. Early access updates only.</p>
        </form>
      </div>
      <div class="final-art" data-reveal>
        <img src="cta.png" alt="Laitly early access envelope signup artwork.">
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <a class="wordmark" href="#top">laitly</a>
    <p>Coming soon.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Validate section and asset references**

Run:

```bash
grep -n "cta.png\\|feature-icon-set.png\\|away-time-planning.png\\|freezer-stash.png\\|Milk math, made calm\\|Be the first" landing-page-v4/index.html
```

Expected: matches for all four assets, the hero headline, and final CTA heading.

- [ ] **Step 3: Commit markup**

Run:

```bash
git add landing-page-v4/index.html
git commit -m "feat: add Laitly editorial waitlist markup"
```

Expected: commit succeeds with only `index.html` in the commit.

---

### Task 3: Editorial Visual System

**Files:**
- Create: `landing-page-v4/styles.css`
- Read: `landing-page-v4/../landing-page-v3/color-system.md`
- Read: `landing-page-v4/../landing-page-v3/type-system.md`
- Read: `landing-page-v4/../landing-page-v3/layout-grid.md`

- [ ] **Step 1: Create the stylesheet**

Create `landing-page-v4/styles.css` with:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --canvas: #fbf9f4;
  --surface: #ffffff;
  --text: #1b1c19;
  --muted: #635d5a;
  --accent: #c5a55a;
  --accent-safe: #766336;
  --border: #d0c5b4;
  --soft: #f8f4eb;
  --shadow: 0 24px 70px rgba(27, 28, 25, 0.12);
  --font-headline: "Newsreader", Georgia, "Times New Roman", serif;
  --font-body: "Manrope", "Segoe UI", Arial, sans-serif;
  --max: 1280px;
  --gutter: clamp(1rem, 5vw, 5rem);
}

html {
  scroll-behavior: smooth;
  background: var(--canvas);
}

body {
  margin: 0;
  color: var(--text);
  background:
    radial-gradient(circle at 12% 5%, rgba(197, 165, 90, 0.11), transparent 28rem),
    linear-gradient(180deg, #fffdf9 0%, var(--canvas) 34%, #fffaf1 100%);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

h1,
h2,
h3,
p {
  margin: 0;
}

h1,
h2,
h3,
.wordmark {
  font-family: var(--font-headline);
  font-optical-sizing: auto;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(251, 249, 244, 0.82);
  border-bottom: 1px solid rgba(208, 197, 180, 0.45);
}

.site-nav,
.section-shell,
.site-footer {
  width: min(100%, var(--max));
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.site-nav {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
}

.wordmark {
  font-size: clamp(1.35rem, 1.1rem + 0.6vw, 1.85rem);
  letter-spacing: 0;
  color: var(--text);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 3vw, 2.25rem);
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 600;
}

.nav-links a,
.nav-action {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}

.nav-action {
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0 1rem;
  background: var(--surface);
  color: var(--text);
  font-size: 0.88rem;
  font-weight: 700;
  box-shadow: 0 10px 28px rgba(27, 28, 25, 0.07);
}

.section-shell {
  padding-top: clamp(4.5rem, 9vw, 8rem);
  padding-bottom: clamp(4.5rem, 9vw, 8rem);
}

.hero {
  min-height: calc(100svh - 76px);
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(320px, 0.98fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  padding-top: clamp(3rem, 6vw, 6rem);
}

.hero h1 {
  max-width: 9.5ch;
  font-size: clamp(4rem, 10vw, 8.8rem);
  line-height: 0.93;
  font-weight: 600;
}

.hero-lede,
.section-intro p,
.story-copy p,
.final-copy p {
  max-width: 38rem;
  margin-top: 1.25rem;
  color: var(--muted);
  font-size: clamp(1rem, 0.92rem + 0.28vw, 1.18rem);
}

.waitlist-form {
  width: min(100%, 34rem);
  margin-top: 2rem;
}

.waitlist-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.7rem;
}

.waitlist-form input {
  min-width: 0;
  height: 3.5rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  padding: 0 1.2rem;
  color: var(--text);
  outline: none;
}

.waitlist-form input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(197, 165, 90, 0.18);
}

.waitlist-form button {
  height: 3.5rem;
  border: 0;
  border-radius: 999px;
  padding: 0 1.35rem;
  background: var(--accent);
  color: var(--text);
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 14px 30px rgba(197, 165, 90, 0.28);
}

.form-message {
  grid-column: 1 / -1;
  min-height: 1.4rem;
  color: #7d766c;
  font-size: 0.83rem;
}

.waitlist-form.is-success input,
.waitlist-form.is-success button {
  display: none;
}

.waitlist-form.is-success .form-message {
  color: var(--accent-safe);
  font-weight: 700;
}

.waitlist-form.is-error input {
  border-color: #ba1a1a;
}

.waitlist-form.is-error .form-message {
  color: #ba1a1a;
  font-weight: 700;
}

.hero-visual,
.final-art {
  border: 1px solid rgba(208, 197, 180, 0.8);
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: var(--shadow);
}

.hero-visual {
  padding: clamp(1rem, 3vw, 2rem);
}

.hero-visual > p {
  margin-top: 1rem;
  text-align: center;
  color: var(--muted);
  font-size: 0.86rem;
  font-weight: 700;
}

.phone-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(0.55rem, 1.5vw, 1rem);
}

.phone-card {
  width: clamp(5.9rem, 8vw, 7.4rem);
  min-height: clamp(12.2rem, 18vw, 15.5rem);
  border: 4px solid var(--text);
  border-radius: 1.5rem;
  background: var(--canvas);
  padding: 1rem 0.7rem;
  box-shadow: 0 22px 44px rgba(27, 28, 25, 0.14);
}

.phone-card-offset {
  margin-top: 1.5rem;
}

.phone-label {
  display: block;
  color: var(--muted);
  font-size: 0.64rem;
  font-weight: 700;
}

.phone-card strong {
  display: block;
  margin-top: 0.7rem;
  font-family: var(--font-headline);
  font-size: 1.8rem;
  line-height: 1;
}

.phone-card strong span {
  margin-left: 0.12rem;
  font-size: 0.8rem;
}

.phone-panel {
  height: 4.7rem;
  margin-top: 1rem;
  border: 1px solid rgba(208, 197, 180, 0.8);
  border-radius: 0.85rem;
  background: var(--surface);
}

.section-intro {
  max-width: 48rem;
}

.section-intro h2,
.story-copy h2,
.final-copy h2 {
  font-size: clamp(2.4rem, 5vw, 5.3rem);
  line-height: 1;
  font-weight: 600;
}

.wide-asset,
.supporting-asset {
  width: 100%;
  margin-top: 2rem;
  border: 1px solid rgba(208, 197, 180, 0.78);
  border-radius: 1.35rem;
  background: var(--surface);
  box-shadow: 0 18px 55px rgba(27, 28, 25, 0.09);
}

.benefit-grid,
.trust-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin-top: 2rem;
  border: 1px solid rgba(208, 197, 180, 0.72);
  border-radius: 1.25rem;
  overflow: hidden;
  background: rgba(208, 197, 180, 0.8);
}

.benefit-card,
.trust-grid article {
  min-height: 14rem;
  background: rgba(255, 255, 255, 0.68);
  padding: clamp(1.25rem, 3vw, 2rem);
}

.benefit-icon {
  display: inline-flex;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--soft);
  color: var(--accent-safe);
  font-size: 0.8rem;
  font-weight: 800;
}

.benefit-card h3,
.trust-grid h3 {
  margin-top: 1.4rem;
  font-size: clamp(1.45rem, 2vw, 2rem);
  line-height: 1.12;
  font-weight: 500;
}

.benefit-card p,
.trust-grid p {
  margin-top: 0.8rem;
  color: var(--muted);
}

.away-story {
  display: grid;
  grid-template-columns: 0.42fr 0.58fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}

.stash-proof {
  padding-top: 0;
}

.privacy {
  max-width: 1080px;
}

.final-cta {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}

.final-art {
  padding: clamp(0.7rem, 1.5vw, 1rem);
  overflow: hidden;
}

.final-art img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}

.site-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: var(--muted);
  border-top: 1px solid rgba(208, 197, 180, 0.68);
}

[data-reveal] {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 700ms ease, transform 700ms ease;
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

@media (max-width: 900px) {
  .hero,
  .away-story,
  .final-cta {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
  }

  .nav-links {
    display: none;
  }

  .benefit-grid,
  .trust-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .site-nav {
    min-height: 68px;
  }

  .nav-action {
    padding-inline: 0.85rem;
    font-size: 0.78rem;
  }

  .hero h1 {
    max-width: 8.5ch;
    font-size: clamp(3.2rem, 17vw, 4.6rem);
  }

  .waitlist-form {
    grid-template-columns: 1fr;
  }

  .waitlist-form button {
    width: 100%;
  }

  .phone-row {
    transform: scale(0.88);
    transform-origin: center top;
    margin-bottom: -1.4rem;
  }

  .site-footer {
    flex-direction: column;
  }
}
```

- [ ] **Step 2: Verify required token values**

Run:

```bash
grep -n "#fbf9f4\\|#1b1c19\\|#635d5a\\|#c5a55a\\|Newsreader\\|Manrope" landing-page-v4/styles.css
```

Expected: matches for all required color and font tokens.

- [ ] **Step 3: Commit visual system**

Run:

```bash
git add landing-page-v4/styles.css
git commit -m "feat: style Laitly editorial waitlist page"
```

Expected: commit succeeds with only `styles.css` in the commit.

---

### Task 4: Waitlist Interaction

**Files:**
- Create: `landing-page-v4/script.js`

- [ ] **Step 1: Create interaction script**

Create `landing-page-v4/script.js` with:

```javascript
(function () {
  "use strict";

  var successMessage = "You're on the list. We'll let you know when Laitly is ready.";
  var helperMessage = "No spam. Early access updates only.";
  var errorMessage = "Enter a valid email address.";

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function setupWaitlistForm(form) {
    var input = form.querySelector('input[type="email"]');
    var message = form.querySelector("[data-form-message]");

    if (!input || !message) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var email = input.value.trim();
      form.classList.remove("is-error", "is-success");

      if (!isValidEmail(email)) {
        form.classList.add("is-error");
        message.textContent = errorMessage;
        input.setAttribute("aria-invalid", "true");
        input.focus();
        return;
      }

      input.setAttribute("aria-invalid", "false");
      form.classList.add("is-success");
      message.textContent = successMessage;
    });

    input.addEventListener("input", function () {
      if (!form.classList.contains("is-error")) {
        return;
      }

      form.classList.remove("is-error");
      input.setAttribute("aria-invalid", "false");
      message.textContent = helperMessage;
    });
  }

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var targetId = link.getAttribute("href");
        var target = targetId ? document.querySelector(targetId) : null;

        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function setupReveals() {
    var items = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  document.querySelectorAll("[data-waitlist-form]").forEach(setupWaitlistForm);
  setupSmoothScroll();
  setupReveals();
})();
```

- [ ] **Step 2: Run syntax check**

Run:

```bash
node --check landing-page-v4/script.js
```

Expected:

```text
```

`node --check` exits with status 0 and prints no syntax errors.

- [ ] **Step 3: Verify success message literal**

Run:

```bash
grep -n "You're on the list. We'll let you know when Laitly is ready." landing-page-v4/script.js
```

Expected: one match.

- [ ] **Step 4: Commit interaction script**

Run:

```bash
git add landing-page-v4/script.js
git commit -m "feat: add waitlist form interactions"
```

Expected: commit succeeds with only `script.js` in the commit.

---

### Task 5: Browser Verification

**Files:**
- Verify: `landing-page-v4/index.html`
- Verify: `landing-page-v4/styles.css`
- Verify: `landing-page-v4/script.js`

- [ ] **Step 1: Start a local static server**

Run from `landing-page-v4`:

```bash
python3 -m http.server 4173
```

Expected: server starts and serves `http://localhost:4173`.

- [ ] **Step 2: Verify required visible copy**

Open `http://localhost:4173` and verify these exact strings are visible:

```text
Milk math, made calm.
Join the waitlist for early access to Laitly, the calmer way to track your milk stash, expiry dates, time away, and caregiver notes.
App Store coming soon
Track every ounce
Know what expires
Plan time away
Plan every moment you're away.
Your data is yours.
Be the first to know when Laitly launches.
```

- [ ] **Step 3: Verify waitlist validation**

In the hero form:

1. Submit an empty form.
2. Expected visible message: `Enter a valid email address.`
3. Type `parent@example.com`.
4. Submit again.
5. Expected visible message: `You're on the list. We'll let you know when Laitly is ready.`

Repeat the same flow in the final CTA form.

- [ ] **Step 4: Verify assets render**

Confirm all four image assets appear:

```text
cta.png appears in the product proof section.
feature-icon-set.png appears in the benefits section.
away-time-planning.png appears in the away-time story section.
freezer-stash.png appears in the stash proof section.
cta.png appears again in the final CTA as the envelope/waitlist artwork.
```

- [ ] **Step 5: Capture desktop screenshot**

Run:

```bash
google-chrome-stable --headless --disable-gpu --screenshot=/tmp/laitly-v4-desktop.png --window-size=1440,1400 http://localhost:4173
```

Expected: `/tmp/laitly-v4-desktop.png` exists and is non-empty.

- [ ] **Step 6: Capture mobile screenshot**

Run:

```bash
google-chrome-stable --headless --disable-gpu --screenshot=/tmp/laitly-v4-mobile.png --window-size=390,1200 http://localhost:4173
```

Expected: `/tmp/laitly-v4-mobile.png` exists and is non-empty.

- [ ] **Step 7: Inspect screenshots**

Use `view_image` on both screenshot files and check:

```text
Desktop hero has no clipped text.
Mobile hero stacks cleanly.
The primary CTA remains the waitlist form.
The final CTA includes the envelope/waitlist image from cta.png.
No copy implies that the app is currently downloadable.
```

- [ ] **Step 8: Commit visual fixes**

If verification requires CSS or markup adjustments, make the smallest changes, rerun the relevant screenshot command, and commit:

```bash
git add landing-page-v4/index.html landing-page-v4/styles.css landing-page-v4/script.js
git commit -m "fix: polish Laitly waitlist responsive layout"
```

Expected: commit is only needed when verification finds visible issues.

---

## Self-Review Checklist

- Spec coverage: hero, waitlist success behavior, product proof, three benefits, away-time story, privacy/trust, and final CTA are covered by Tasks 2-5.
- Asset coverage: `cta.png`, `feature-icon-set.png`, `away-time-planning.png`, and `freezer-stash.png` are referenced in Task 2 and verified in Task 5.
- Interaction coverage: invalid email and success state are implemented in Task 4 and verified in Task 5.
- Responsive coverage: desktop and mobile screenshots are required in Task 5.
- Scope check: this is one static landing page and does not need backend integration.
