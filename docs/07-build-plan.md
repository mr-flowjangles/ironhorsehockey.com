# 07 — Build plan

The implementation order is the order in this doc. Milestones are sequential, tasks within a milestone are ordered. **We check the boxes as we go.** When a milestone is fully checked, the next one starts.

If something forces us off this plan (a discovered constraint, a customer arriving early, etc.), we update this doc *first*, then change course. Don't drift silently.

The convention is `## M<N> — {Title}` so `make version-M<N>` can auto-resolve the milestone title from this file.

## v1 — Definition of Done

v1 ships when **all** of the following are true:

- [ ] Docker image builds reproducibly (`make image`).
- [ ] *(add the project-specific outcomes that mean v1 is real.)*
- [ ] All milestones below are checked.
- [ ] `README.md` has a quickstart that a new operator can follow.

---

## M0 — Foundations

Goal: project skeleton, AWS deployment plumbing, and dev environment ready, no feature code yet.

Site shape is **static** — pre-rendered HTML/CSS/JS served from S3 behind CloudFront. The framework that *produces* `dist/` (Astro, 11ty, Hugo, plain HTML, …) is chosen during design (see `docs/00-overview.md` and `docs/01-architecture.md`).

- [x] Initialize git repo, add `.gitignore` and `README.md`, make initial commit of design docs.
- [x] Replace `ironhorsehockey.com`, `Iron Horse Hockey`, `Website for Iron Horse Hockey`, `{{DATE}}` placeholders across the repo.
- [x] Fill in `Versions/v0/v0.0/release-notes.md` for the bootstrap commit (v0.0.0).
- [ ] **AWS plumbing — Terraform bootstrap.** `infra/terraform/bootstrap/` — S3 state bucket (versioned, encrypted, public-access blocked) + DynamoDB lock table in AWS account `255977230735` (alias `rrose`), `us-east-1`. One-time hand-apply with local state; documents the bucket/table names for the main stack's remote backend.
- [ ] **AWS plumbing — main stack.** `infra/terraform/prod/` — Route 53 hosted zone for `ironhorsehockey.com`, ACM cert (DNS-validated, `us-east-1` for CloudFront), private S3 origin bucket with OAC, CloudFront distribution with sensible cache + security headers, alias records for apex and `www`. Backend points at the bootstrap state bucket. Outputs: nameservers (to paste at the current registrar), distribution ID, bucket name.
- [x] **AWS plumbing — Makefile targets.** `make tf-init` / `make tf-plan` / `make tf-apply`, and `make build` + `make deploy` (build = `site/` → `dist/`; deploy = sync `dist/` → S3 + CloudFront invalidation).
- [x] **Land design-Claude's site under `site/`.** v0.0.3 brought the React-on-CDN static site into the repo. `make build && make serve` serves locally on `:8000`.
- [ ] **AWS plumbing — nameserver cutover.** Rob updates nameservers at the current registrar to the four NS records output by Terraform. Not a code step — flagged here as the human handoff that has to happen before HTTPS works.
- [ ] **First production deploy.** `make build && make deploy` against the applied Terraform — only meaningful once Terraform is applied and DNS is delegated.
- [ ] **Replace Babel-in-browser with a real build step.** The current setup loads React + Babel from CDN and transpiles JSX in the browser — fine for iteration, but slow + flaky for production. Migration target: a bundler (Vite/esbuild/etc.) that emits the same `dist/` shape. Until then, `make build` is a `cp`.
- [ ] **Optimize logo asset sizes.** `site/assets/ironhorse-*` PNGs are 1.6–2.2 MB each (7 MB total). Target ~500 KB total with WebP + intrinsic sizes for hero use only.
- [ ] Verify `make ci` passes on an empty test suite (still pending — `lint`/`test` are stubs).
- [ ] Replace or remove the `Dockerfile` stub. (Decision per `CLAUDE.md`: remove — static site has no runtime image.)
- [x] Verify versioning ceremony: `./scripts/new-version.sh --dry-run "Smoke Test"` prints the plan without side effects. (Implicitly exercised every PR.)
- [ ] Fill in `docs/mission.md` and `docs/00-overview.md`. (Design-Claude delivered code but not these — backfill before v1.)
- [ ] Sketch `docs/01-architecture.md` — at minimum, identify the contract artifact (the built `dist/` is the artifact for a static site; the JSX section-component shape is its internal contract).

**Done when:** project builds, AWS Terraform stacks apply cleanly, the site is reachable at `https://ironhorsehockey.com`, the Docker stub is gone, versioning ceremony runs cleanly, mission/overview/architecture have v1 content.

---

## M1 — {{first real milestone}}

Goal: ...

- [ ] ...

**Done when:** ...

---

<!--
Add subsequent milestones as the design firms up. Each milestone:
- Has a one-sentence goal.
- Has an ordered, checkable task list.
- Ends with a "Done when:" criterion that is binary.
- Use the `## M<N> — {Title}` heading format so `make version-M<N>` resolves.
-->
