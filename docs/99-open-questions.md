# 99 — Open questions

Decisions deliberately deferred from v1, with their resolution triggers.

<!--
Format for each entry:

## {Question phrased as a question}

**Status:** open / resolved / deferred to v2
**Resolution trigger:** what would force this to become urgent (a customer ask, a regulatory change, a perf cliff, ...).
**Notes:** discussion, ruled-out alternatives, current leaning.

Keep this file living. When a decision is made, move the entry's status to "resolved" and add a one-liner pointing to the doc/PR that resolved it. Don't delete — the trail is useful.
-->

## What static-site framework should we use?

**Status:** open
**Resolution trigger:** design-Claude needs to choose before any real content can ship.
**Notes:** Locked to "static site" in `CLAUDE.md`. Plumbing (S3+CloudFront) is framework-agnostic — any tool that emits a `dist/` works. Candidates likely include Astro, 11ty, Hugo, Next.js (static export), or plain HTML. The choice should be driven by content patterns (how many pages, how much repeated structure, whether design wants components).

## What is the site's content scope for v1?

**Status:** open
**Resolution trigger:** Design discovery with Rob.
**Notes:** `docs/brand-brief.md` reads the reference flyer and suggests an initial menu (camps/programs, philosophy, register/pay, eventually coaches+schedule+photos). Rob has not yet committed to a specific set of pages. Design-Claude should run discovery and write `docs/mission.md` + `docs/00-overview.md` with the answer.

## CI/CD — when do we wire up GitHub Actions?

**Status:** deferred (post-content)
**Resolution trigger:** Once the site has content worth auto-deploying on every merge.
**Notes:** v0.0.1 ships with manual deploys (`make deploy`) on purpose — less to debug while design iterates. The plan is a follow-up version that adds an OIDC role + GitHub Actions workflow once `dist/` has real output.

## Accessibility floor?

**Status:** open
**Resolution trigger:** Before public launch.
**Notes:** No hard constraint from Rob yet. WCAG 2.1 AA is a reasonable default for a public site; design-Claude should at minimum check color contrast (the dark theme + electric blue accent in the brand brief will need verification).

## Will the site need a backend ever (forms, payments, CMS)?

**Status:** deferred
**Resolution trigger:** Adding registration, a contact form with server-side handling, or an admin UI.
**Notes:** The flyer points to Venmo and a `mailto:` for now — fully static. If a real registration form appears, options include a serverless API (Lambda/API Gateway) or a third-party form service (Formspree, Netlify Forms equivalent). Architecture decision lives in `docs/01-architecture.md` if/when it happens.
