# v0.0

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
