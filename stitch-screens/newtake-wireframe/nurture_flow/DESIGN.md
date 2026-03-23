# Design System Strategy: The Nurtured Layer

## 1. Overview & Creative North Star: "The Digital Sanctuary"
This design system is built to provide a sense of profound calm and intuitive support for mothers. Our Creative North Star is **The Digital Sanctuary**—an editorial-inspired interface that feels less like a utility app and more like a high-end wellness journal. 

We break the "standard app template" by moving away from rigid grids and hard borders. Instead, we embrace **Soft Minimalism**: a layout philosophy driven by intentional asymmetry, generous white space (breathing room), and a hierarchy defined by light and depth rather than lines. By overlapping elements and using extreme typographic scales, we create a signature experience that feels premium, bespoke, and deeply nurturing.

---

## 2. Colors: Tonal Serenity
The palette is rooted in organic, earthy tones that evoke nature and rest. We utilize the Material Design 3 logic for logic-based mapping but apply a high-end editorial lens to their execution.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off content. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly on a `surface` background. The change in tone is the boundary.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, heavy-weight paper.
- **Base Layer:** `surface` (#fbf9f7)
- **Secondary Sectioning:** `surface-container-low` (#f5f3f1)
- **Elevated Content:** `surface-container-lowest` (#ffffff) for maximum "pop" and cleanliness.

### The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" appearance:
- **Hero Elements:** Use a subtle linear gradient from `primary` (#4e635a) to `primary-container` (#8da399) to provide "soul" and depth to main CTAs.
- **Floating Navigation:** Use **Glassmorphism**. Apply a semi-transparent `surface` color with a 20px backdrop-blur. This allows the soft sage and terracotta tones to bleed through the UI, making the app feel integrated and airy.

---

## 3. Typography: Editorial Authority
We pair the geometric friendliness of **Plus Jakarta Sans** with the high-legibility, humanist touch of **Manrope**.

- **Display & Headlines (Plus Jakarta Sans):** Used to create "moments." Large `display-lg` (3.5rem) type should be used with tight letter-spacing (-0.02em) for a high-fashion, premium feel.
- **Body & Labels (Manrope):** Chosen for its warmth and readability during late-night feedings. 
- **The Contrast Strategy:** We achieve a "signature" look by pairing very large `headline-lg` titles with very small, all-caps `label-md` sub-headers in `secondary` tones. This high-contrast scale is the hallmark of premium editorial design.

---

## 4. Elevation & Depth: Tonal Layering
We reject traditional drop shadows in favor of **Ambient Light**.

### The Layering Principle
Depth is achieved by "stacking" the surface tiers. Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a soft, natural lift without the "muddy" look of traditional shadows.

### Ambient Shadows
Where floating elements (like a FAB or a Modal) are required, use:
- **Shadow Blur:** 40px to 60px.
- **Opacity:** 4% - 6%.
- **Tint:** The shadow color must be a tinted version of `on-surface` (#1b1c1b), never pure black.

### The "Ghost Border" Fallback
If a border is required for accessibility:
- Use `outline-variant` (#c2c8c4) at **15% opacity**. 
- **Forbidden:** 100% opaque, high-contrast borders.

---

## 5. Components: Soft & Tactile

### Large Touch-Friendly Buttons
- **Shape:** Rounded Scale `lg` (2rem) or `full`.
- **Primary:** Gradient from `primary` to `primary-container`. High-contrast `on-primary` text.
- **Secondary:** Solid `secondary-container` (#f1e0cd) with `on-secondary-container` (#6f6254) text.
- **Interaction:** On tap, use a subtle scale-down (0.98) rather than a color change to mimic a physical "press."

### Minimalist Cards
- **Construction:** Use `surface-container-lowest` (#ffffff) with Rounded Scale `md` (1.5rem).
- **The Divider Ban:** Never use lines to separate content inside a card. Use Spacing Scale `4` (1.4rem) or `5` (1.7rem) to create clear content groupings through vertical rhythm.

### Subtle Progress Indicators
- For tracking feeding duration: Use a thick, 8px track with `surface-variant` and a soft-glow `primary` fill. The ends of the progress bar must be rounded (`full`).

### Signature Tracking Logs
- Instead of a list, use a "Waterfall" layout. Items are slightly offset horizontally and separated by generous `spacing-10` (3.5rem) blocks. This breaks the monotony of a standard vertical list and feels more organic.

---

## 6. Do's and Don'ts

### Do
- **DO** use the `tertiary` (Terracotta #8d4d35) sparingly. It is a "heartbeat" color—save it for vital moments like "Feeding Complete" or "Milestone Reached."
- **DO** use asymmetry. A large heading on the left balanced by a small, floating action button on the bottom right creates a modern, custom feel.
- **DO** embrace the `xl` (3rem) corner radius for hero containers to emphasize the "nurturing" feel.

### Don't
- **DON'T** use dark brown or gold. These colors are deprecated and conflict with the "Airy/Calm" direction.
- **DON'T** use 100% black text. Always use `on-surface` (#1b1c1b) for a softer, premium reading experience.
- **DON'T** cram information. If a screen feels busy, increase the spacing tokens. The user (a mother) is likely tired; the UI must be a cognitive relief, not a chore.