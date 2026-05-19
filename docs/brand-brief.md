# Brand brief

Inputs design-Claude can pull from. **This is not the final design** — it's the seed.

## Brand source

`assets/brand/reference-flyer.jpg` — the Iron Horse Hockey Academy summer camp flyer is the canonical reference for visual identity. Colors, type treatment, and logo all derive from it.

## Name

- **Brand name:** Iron Horse Hockey Academy ("IronHorse" — single word — appears in the wordmark)
- **Short form:** IHA
- **Tagline:** "Built to Compete." (a secondary phrase on the flyer is "Train. Compete. Improve.")
- **Domain:** `ironhorsehockey.com`

## Visual identity (read from the flyer)

**Logo.** A chrome/armored horse head over a chevron-shaped shield, with "IRONHORSE" in a chevron-style display type, "HOCKEY ACADEMY" beneath, and crossed hockey sticks + puck at the base. Used over a dark, starry/grungy background.

**Color palette** (eyeball values from the flyer; design-Claude should pick exact tokens):

| Role | Approx | Notes |
| --- | --- | --- |
| Background | near-black (`#0a0d14`-ish) | Slightly cool, often with subtle texture/noise |
| Primary accent | electric blue (`#1e6cff`-ish) | Bright, saturated; the "energy" color |
| Text / highlights | off-white | High contrast on dark |
| Logo metal | chrome / brushed steel | Cool greys with blue highlights |

**Typography vibe.** Heavy condensed sans for display ("HOCKEY CAMP", "BUILT TO COMPETE") — angular, italic-leaning, slight grunge. Clean sans for body. Don't pick fonts here; this is a feel reference.

**Mood.** Aggressive, athletic, modern. High contrast. Sharp angles. Camera-flare / arena-light energy without leaning into hokey ice textures.

## Audience

People who want to up their hockey skills. The flyer's specific offering targets 7th–9th graders, but the brand and site should read broader than one age band — anyone serious about improving.

## What the site is for (initial read)

Working assumption, not a constraint:

- Surface camps / clinics / programs (current and upcoming)
- Communicate the IHA philosophy ("relentless effort, intensity, and grit" + "advanced concepts: attacking with control, puck movement, team play")
- Make it easy to register / pay (the flyer points to Venmo `@IronHorseHockeyAcademy` and an email `lheuer@ironhorsehockey.com`)
- Eventually: coaches, schedule, results, photos

Design-Claude makes the actual scoping calls. This is just what's visible from the flyer.

## Hard constraints

**None right now.** Rob has not imposed a launch deadline, regulatory requirement, or accessibility floor beyond "make it good." Design-Claude is free to recommend; Rob will accept or redirect.

## What design-Claude still owns

- Framework choice (Astro, 11ty, Hugo, plain HTML, …) — pick based on content patterns
- Information architecture (which pages, which sections, what nav)
- Type pairing and exact color tokens
- Content strategy and copywriting
- `docs/mission.md`, `docs/00-overview.md`, `docs/01-architecture.md` — fill these in *after* the discovery conversation with Rob

This file is not the mission statement. It's the visual + audience brief. Once design discovery is done, mission.md absorbs the audience parts and this file can shrink to just the visual identity.
