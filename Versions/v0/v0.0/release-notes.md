# v0.0

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

- **`docs/07-build-plan.md`** — M0 expanded with AWS plumbing tasks; explicitly notes the site is **static** and the framework choice is design's job; bootstrap-commit tasks marked complete.
- **`.gitignore`** — Terraform patterns made recursive (`infra/terraform/**/…`); `.terraform.lock.hcl` removed from the ignore list (now committed); `.tfvars` exception switched to the more standard `*.tfvars.example`.
- **`infra/terraform/README.md`** — rewritten from placeholder to describe the two-stack layout, first-time setup, and what's deliberately not here (CI/CD, staging, image registry).

### Fixed

- Nothing — first real implementation version.

### Files Changed

| File | Change |
|------|--------|
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
