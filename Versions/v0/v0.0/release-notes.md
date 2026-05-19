# v0.0

## v0.0.3 — Initial Site (2026-05-19)

### Problem

The v0.0.1 plumbing was serving a placeholder page. Design-Claude delivered an IronHorse Hockey Academy site (single-page React app: hero, mission, schedule, register, footer + a runtime "tweaks panel" for palette/font/grit/scanline exploration) in a separate folder at `~/Downloads/ironghorsehockey.com/`. That folder needed to land in the repo, get wired into the existing build/deploy targets, and have its scratch material (design iteration uploads, cache-buster filename artifacts) filtered out before `git add` slurped them.

### Solution

Cut a `site/` directory as the deployable source root and copy in design-Claude's `index.html`, `styles.css`, `tweaks-panel.jsx`, `assets/` (five logo variants), and `src/` (eight JSX section components). Skip the cache-buster artifact `hero.jsx?v=2` (literal `?` in filename — an accident of in-browser dev tooling; the active file is `hero.jsx`). Skip the `uploads/` scratch directory and duplicates of the flyer already living in `assets/brand/`. Add `assets/brand/logo-on-dark-preview.png` since it's a genuinely new brand-reference asset.

Update `.gitignore` *first* (per Rob's instruction) with `uploads/` and `*\?*` so future drops can't accidentally bring scratch back in. Wire `make build` (copies `site/` → `dist/`) and `make serve` (build + `python3 -m http.server`) into the Makefile, point `make deploy` at the new build step, and drop the obsolete `make placeholder` target along with the `placeholder/` directory and the top-level `src/.gitkeep`.

The build is a `cp` — no bundler. React and Babel load from CDN; JSX is transpiled in the browser. Documented as a known issue to revisit in a later version.

### New

- **`site/`** — deployable source root for the static site.
  - `site/index.html` — React mount + CDN scripts + tweak-defaults block
  - `site/styles.css` — 33 KB of handcrafted CSS (4 palette themes via CSS variables, grain/scanline overlays, IHA chevron/grit motifs)
  - `site/tweaks-panel.jsx` — runtime tweaks UI (palette, display font, grit, scanlines)
  - `site/src/{app,nav,hero,about,schedule,register,footer,icons}.jsx` — page sections
  - `site/assets/ironhorse-*.{png,jpg}` — five logo variants (full mark, transparent mark, cropped logo, etc.)
- **`assets/brand/logo-on-dark-preview.png`** — additional brand reference from design-Claude (preview of the logo on the dark theme).
- **`make build`** — `rm -rf dist && cp -R site/. dist/`. Clean separation from `deploy` so a future bundler can replace `build` without changing the deploy semantics.
- **`make serve`** — `make build && (cd dist && python3 -m http.server 7777)`. Local sanity-check loop.

### Changed

- **`.gitignore`** — added `uploads/` (design scratch) and `*\?*` (cache-buster filename artifacts). These went in *before* the file move so a later `git add -A` couldn't smuggle them.
- **`Makefile`** — `make placeholder` removed (real site supersedes the placeholder); `make build` and `make serve` added; `make deploy` now builds first and syncs `dist/` produced by `make build` instead of from a hand-populated `dist/`.
- **`docs/07-build-plan.md`** — M0 status updated: Makefile targets and "land design-Claude's site" boxes checked; versioning ceremony marked complete; two new open items added explicitly (Babel-in-browser → bundler migration, logo PNG optimization).

### Fixed

- Stale placeholder was still on disk after the real site was ready. Removed `placeholder/index.html`, `placeholder/404.html`, the directory, and the corresponding Makefile target.

### Files Changed

| File | Change |
|------|--------|
| `.gitignore` | Added `uploads/` + `*\?*` patterns |
| `Makefile` | Dropped `make placeholder`; added `make build` + `make serve`; `make deploy` now builds first |
| `docs/07-build-plan.md` | M0 checkboxes and Done-when updated; two new known items |
| `assets/brand/logo-on-dark-preview.png` | New — additional brand reference |
| `site/index.html` | New — React mount + CDN scripts |
| `site/styles.css` | New — 33 KB hand-crafted styles, 4 palettes via CSS vars |
| `site/tweaks-panel.jsx` | New — runtime palette/font/grit tweak UI |
| `site/src/app.jsx` | New — top-level `<App />`, palette+font effect, scroll-spy |
| `site/src/nav.jsx` | New — sticky nav with active-section highlight |
| `site/src/hero.jsx` | New — hero section + marquee |
| `site/src/about.jsx` | New — mission/about block |
| `site/src/schedule.jsx` | New — camp schedule block |
| `site/src/register.jsx` | New — registration block (Venmo + email) |
| `site/src/footer.jsx` | New — footer |
| `site/src/icons.jsx` | New — inline SVG icons |
| `site/assets/ironhorse-logo.png` | New — primary logo (1.7 MB) |
| `site/assets/ironhorse-logo.jpg` | New — JPEG variant (255 KB) |
| `site/assets/ironhorse-logo-cropped.png` | New — cropped logo (2.2 MB) |
| `site/assets/ironhorse-mark.png` | New — mark only (2.0 MB) |
| `site/assets/ironhorse-mark-transparent.png` | New — transparent mark (1.6 MB) |
| `placeholder/index.html` | Removed |
| `placeholder/404.html` | Removed |
| `src/.gitkeep` | Removed (top-level `src/` was a starter convention; deployable now lives at `site/`) |
| `Versions/v0/v0.0/release-notes.md` | New H2 stub for v0.0.3, filled in |

### Known issues / notes

- **No bundler.** React + Babel load from `unpkg.com` and JSX is transpiled in the browser at runtime. Production-functional but slower than a built site and depends on CDN availability. Tracked as an open M0 item; migration target is a real bundler (Vite or esbuild) that emits the same `dist/` shape.
- **Logo asset sizes are heavy.** Five PNGs in `site/assets/` total ~7 MB; the largest is 2.2 MB. Compressed WebPs + intrinsic-size discipline would cut this to under 500 KB. Tracked in the build plan.
- **Design docs still aren't written.** `docs/mission.md`, `docs/00-overview.md`, `docs/01-architecture.md` are still template stubs. Design-Claude delivered code but not those — the project's "design before code" norm is locally inverted for this version, on purpose, because the code IS the design exercise. Backfill before v1.
- **`tweaks-panel.jsx` ships to production.** It's a runtime developer tool (palette/font/grit live-editing). Harmless from a correctness standpoint but represents ~26 KB of JS and a visible UI affordance on the live site. Decide later whether to gate it behind a query string, strip it at build time, or keep it as a public feature.
- **First production deploy still pending.** `make build && make deploy` will work end-to-end once Terraform is applied and the registrar nameserver cutover lands. Both are tracked in M0.

## v0.0.2 — Design Inputs (2026-05-19)

### Problem

The plumbing in v0.0.1 was framework-agnostic on purpose — it could serve any `dist/`. But design-Claude needs to know what brand they're building for: colors, logo treatment, audience, tone, and what's locked vs. open. Without those inputs, design discovery starts from scratch every session.

### Solution

Land a brand reference image and a tight written brief that capture what Rob has already given verbally. The flyer goes in `assets/brand/` as the canonical visual source of truth. `docs/brand-brief.md` summarizes what design-Claude can read off the flyer (colors, type vibe, mood) and what Rob has said directly (audience: "people wanting to up their hockey skills"; constraints: none right now). `docs/99-open-questions.md` is populated with the real deferrals (framework choice, content scope, CI, accessibility, future backend).

This is *seed* material — design-Claude still owns mission, overview, architecture, framework, and IA. The brief explicitly stops short of preempting those.

### New

- **`assets/brand/reference-flyer.jpg`** — the IronHorse Hockey Academy summer camp flyer. Source of truth for visual identity (logo, palette, type direction, mood).
- **`docs/brand-brief.md`** — written brief covering the brand name + tagline, the colors and typography vibe read from the flyer, audience, what the site is probably for, and an explicit list of what design-Claude still owns.

### Changed

- **`docs/99-open-questions.md`** — populated with five real open questions: framework choice, content scope, CI/CD timing, accessibility floor, future backend needs. Each has status + resolution trigger + notes per the file's own format.

### Fixed

- Nothing — additive only.

### Files Changed

| File | Change |
|------|--------|
| `assets/brand/reference-flyer.jpg` | New — canonical brand reference image |
| `docs/brand-brief.md` | New — written brand brief for design-Claude |
| `docs/99-open-questions.md` | Populated with five open questions |
| `Versions/v0/v0.0/release-notes.md` | New H2 stub for v0.0.2, filled in |

## v0.0.1 — AWS Plumbing (2026-05-19)

### Problem

The repo had a `Versions/`, a build plan, and a `CLAUDE.md` saying "deploy to AWS via Terraform" — but `infra/terraform/` was an empty placeholder. There was no path from `git commit` to a hosted site, and no decision on the AWS topology. Design work (mission, framework choice, content) is a separate workstream; this version is the deployment plumbing it eventually lands on.

### Solution

Pick a site shape — **static site, S3 origin behind CloudFront, ACM cert, DNS in Route 53** — and build the full Terraform stack to stand it up in AWS account `255977230735` (alias `rrose`). Two stacks: `bootstrap/` (state bucket + lock table, one-time local-state apply) and `prod/` (the actual site infra, using bootstrap's S3 bucket as its remote backend). A `make deploy` target syncs `dist/` to the S3 origin and invalidates CloudFront. A `placeholder/` directory holds a minimal `index.html` + `404.html` so the deploy path can be exercised end-to-end before design-Claude picks a framework.

The framework that *produces* `dist/` is deliberately left open — anything that emits static HTML/CSS/JS fits this plumbing (Astro, 11ty, Hugo, plain HTML, etc.).

### New

- **Terraform bootstrap stack** (`infra/terraform/bootstrap/`) — versioned/encrypted/private S3 state bucket (`ironhorsehockey-tf-state-<account-id>`) and `PAY_PER_REQUEST` DynamoDB lock table (`ironhorsehockey-tf-lock`). Both have `prevent_destroy = true`.
- **Terraform prod stack** (`infra/terraform/prod/`):
  - Route 53 hosted zone for `ironhorsehockey.com`, with A/AAAA aliases for apex and `www` pointing at CloudFront.
  - ACM cert in `us-east-1` (DNS-validated against the same zone).
  - Private S3 origin bucket (`ironhorsehockey-site-<account-id>`), encrypted, versioned, public-access blocked.
  - CloudFront distribution with `PriceClass_100`, IPv6, HTTP/2+3, `Managed-CachingOptimized` cache policy, custom security-headers policy (HSTS w/ preload, frame-deny, no-sniff, strict referrer, XSS), `redirect-to-https`, OAC-restricted origin access, 403/404 → `/404.html`.
- **Outputs** (`prod`): `nameservers`, `cloudfront_distribution_id`, `cloudfront_domain_name`, `site_bucket`, `acm_certificate_arn`.
- **Makefile targets** — `bootstrap-init`, `bootstrap-apply`, `tf-init`, `tf-plan`, `tf-apply`, `tf-output`, `placeholder`, `deploy`.
- **Placeholder site** — `placeholder/index.html` + `placeholder/404.html`. Dark-mode minimal pages. Copied to `dist/` by `make placeholder`.
- **Provider lock files** — `infra/terraform/{bootstrap,prod}/.terraform.lock.hcl` are committed, pinning AWS provider versions for reproducibility.
- **Build-plan expansion** — `docs/07-build-plan.md` M0 now explicitly lists AWS plumbing tasks and the registrar-cutover human step.

### Changed

- **`CLAUDE.md`** — Tech-choices "Deployment" row rewritten. The starter pack's locked claim of "Docker image; AWS via Terraform" was incompatible with the static-site direction (no runtime container); the row now describes the actual S3+CloudFront+ACM+Route53 path and flags the `Dockerfile` as a stub that may be removed in M0. Site shape is added as an explicit locked choice.
- **`docs/07-build-plan.md`** — M0 expanded with AWS plumbing tasks; explicitly notes the site is **static** and the framework choice is design's job; bootstrap-commit tasks marked complete.
- **`.gitignore`** — Terraform patterns made recursive (`infra/terraform/**/…`); `.terraform.lock.hcl` removed from the ignore list (now committed); `.tfvars` exception switched to the more standard `*.tfvars.example`.
- **`infra/terraform/README.md`** — rewritten from placeholder to describe the two-stack layout, first-time setup, and what's deliberately not here (CI/CD, staging, image registry).

### Fixed

- Nothing — first real implementation version.

### Files Changed

| File | Change |
|------|--------|
| `CLAUDE.md` | Tech-choices "Deployment" row rewritten for static-site path; site shape added |
| `docs/07-build-plan.md` | Expanded M0 with AWS plumbing tasks; marked bootstrap-commit items complete |
| `.gitignore` | Recursive Terraform patterns; lock file now committed |
| `Makefile` | Added `bootstrap-*`, `tf-*`, `placeholder`, `deploy` targets |
| `infra/terraform/README.md` | Rewrote for the two-stack layout |
| `infra/terraform/bootstrap/versions.tf` | New — Terraform + AWS provider pins |
| `infra/terraform/bootstrap/providers.tf` | New — AWS provider config + default tags |
| `infra/terraform/bootstrap/main.tf` | New — S3 state bucket + DynamoDB lock table |
| `infra/terraform/bootstrap/outputs.tf` | New — names + region for the prod backend block |
| `infra/terraform/bootstrap/README.md` | New — bootstrap usage, optional state migration, recovery |
| `infra/terraform/bootstrap/.terraform.lock.hcl` | New — provider version pin |
| `infra/terraform/prod/versions.tf` | New — Terraform + AWS provider pins + S3 backend |
| `infra/terraform/prod/providers.tf` | New — AWS provider config + default tags + caller identity data source |
| `infra/terraform/prod/variables.tf` | New — `domain_name`, `subject_alternative_names`, price class, tags |
| `infra/terraform/prod/route53.tf` | New — hosted zone + A/AAAA aliases (apex + www) |
| `infra/terraform/prod/acm.tf` | New — cert + DNS-validation records + validation resource |
| `infra/terraform/prod/s3.tf` | New — origin bucket + OAC bucket policy |
| `infra/terraform/prod/cloudfront.tf` | New — distribution + OAC + security-headers policy |
| `infra/terraform/prod/outputs.tf` | New — nameservers, distribution id, bucket, etc. |
| `infra/terraform/prod/README.md` | New — topology, first apply, registrar cutover, deploys |
| `infra/terraform/prod/.terraform.lock.hcl` | New — provider version pin |
| `placeholder/index.html` | New — minimal placeholder landing page |
| `placeholder/404.html` | New — minimal 404 page |
| `infra/terraform/.gitkeep` | Removed — directory has real content now |
| `Versions/v0/v0.0/release-notes.md` | New H2 stub for v0.0.1, filled in |

### Known issues / notes

- **Registrar cutover is a human step.** After the first `terraform apply` in `prod/`, Rob has to update the nameservers at the current registrar to the four NS records output by Terraform. ACM cert validation, and therefore HTTPS, won't complete until DNS propagates.
- **Bootstrap state is local.** The bootstrap stack stores its state on disk until/unless someone runs the optional `init -migrate-state` step in `infra/terraform/bootstrap/README.md`. Don't commit the file (gitignored).
- **No CI yet.** Deploys are manual via `make deploy`. GitHub Actions + OIDC is a follow-up version once the site has content worth auto-deploying.
- **Dockerfile is still a stub.** For a pure static site the build artifact is `dist/`, not an image. The stub stays for now; the M0 task to "replace or remove" is open and gets resolved when design-Claude lands a framework.

## v0.0.0 — Initial Design (2026-05-19)

### Problem

Iron Horse Hockey needs a website. Before any code is written, the team's working norm is to lock in design docs, conventions, and ceremony so implementation has a stable spine to grow against.

### Solution

This commit imports the Bellese starter-pack scaffolding: documentation skeleton, versioning ceremony, Makefile and Dockerfile stubs, ignore files, Terraform placeholder, and the two project-specific subagents. No application code yet — content, framework choice, and architecture are intentionally deferred to the next versions.

### New

- **Project scaffold.** `README.md`, `CLAUDE.md`, `Makefile`, `Dockerfile` stub, `.gitignore`, `.dockerignore`, `infra/terraform/` placeholder, `scripts/new-version.sh` versioning ceremony, `Versions/v0/v0.0/`.
- **Docs skeleton.** `mission.md`, `00-overview.md`, `01-architecture.md`, `07-build-plan.md`, `99-open-questions.md` — all template stubs awaiting design content.
- **Subagents.** `.claude/agents/docs-consistency.md` and `.claude/agents/release-notes-factcheck.md`.
- **Locked tech choices** (per `CLAUDE.md`): Docker image deployed to AWS via Terraform. Language and framework deferred to design phase.

### Files Changed

| File | Change |
|------|--------|
| `README.md` | New — project status and pointers |
| `CLAUDE.md` | New — repo-level context and working norms |
| `Makefile` | New — dev targets and versioning ceremony |
| `Dockerfile` | New — runtime image stub |
| `.gitignore` | New |
| `.dockerignore` | New |
| `docs/mission.md` | New — what + who + constraints (template) |
| `docs/00-overview.md` | New — flow diagram + reading order (template) |
| `docs/01-architecture.md` | New — module map + contract artifact (template) |
| `docs/07-build-plan.md` | New — milestones M0+ (M0 sketched) |
| `docs/99-open-questions.md` | New — deferred decisions (template) |
| `scripts/new-version.sh` | New — versioning ceremony script |
| `infra/terraform/README.md` | New — AWS deployment placeholder |
| `.claude/agents/docs-consistency.md` | New — design-docs consistency subagent |
| `.claude/agents/release-notes-factcheck.md` | New — release-notes factcheck subagent |
| `Versions/v0/v0.0/release-notes.md` | New — this file |
