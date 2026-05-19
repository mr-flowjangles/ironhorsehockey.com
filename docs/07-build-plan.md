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
- [ ] **AWS plumbing — main stack.** `infra/terraform/` — Route 53 hosted zone for `ironhorsehockey.com`, ACM cert (DNS-validated, `us-east-1` for CloudFront), private S3 origin bucket with OAC, CloudFront distribution with sensible cache + security headers, alias records for apex and `www`. Backend points at the bootstrap state bucket. Outputs: nameservers (to paste at the current registrar), distribution ID, bucket name.
- [ ] **AWS plumbing — Makefile targets.** `make tf-init` / `make tf-plan` / `make tf-apply`, and `make deploy` (sync `dist/` → S3 + CloudFront invalidation).
- [ ] **AWS plumbing — placeholder `index.html`.** Drop a minimal `dist/index.html` so the deploy path can be exercised end-to-end before design-Claude arrives. Real framework + content land in a later version.
- [ ] **AWS plumbing — nameserver cutover.** Rob updates nameservers at the current registrar to the four NS records output by Terraform. Not a code step — flagged here as the human handoff that has to happen before HTTPS works.
- [ ] Add language/build manifest (`package.json` / similar) once the static-site framework is chosen.
- [ ] Wire up `make setup` / `make build` / `make test` / `make lint` / `make format` to the chosen toolchain (replace the stubs in `Makefile`).
- [ ] Verify `make ci` passes on an empty test suite.
- [ ] Replace the `Dockerfile` stub with a real build stage that emits `dist/` (or remove it — for a pure static site the artifact is `dist/`, not a runtime image; revisit during design).
- [ ] Verify versioning ceremony: `./scripts/new-version.sh --dry-run "Smoke Test"` prints the plan without side effects.
- [ ] Fill in `docs/mission.md` and `docs/00-overview.md`.
- [ ] Sketch `docs/01-architecture.md` — at minimum, identify the contract artifact (likely the built `dist/` itself for a static site).

**Done when:** project builds, AWS Terraform stacks apply cleanly, placeholder `index.html` is reachable at `https://ironhorsehockey.com`, Docker decision is made, versioning ceremony runs cleanly, mission/overview/architecture have v1 content.

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
