# Terraform — AWS deployment

Two stacks deploy the site:

```
infra/terraform/
├── bootstrap/   ← state bucket + DynamoDB lock (one-time, local state, then migrated)
└── prod/        ← Route 53 + ACM + S3 origin + CloudFront (remote state)
```

## Provider + version pins

- Terraform `>= 1.6.0`
- AWS provider `~> 5.40`
- Region: `us-east-1` (CloudFront requires its ACM cert in `us-east-1`)
- Account: `255977230735` (alias `rrose`)

`.terraform.lock.hcl` is **committed** (Hashicorp's recommendation) — provider versions are reproducible across machines.

## First-time setup

```bash
# 1. Apply bootstrap with local state
cd infra/terraform/bootstrap
terraform init
terraform apply

# 2. Apply prod (uses the bootstrap S3 bucket as its remote backend)
cd ../prod
terraform init
terraform apply

# 3. Update nameservers at the current registrar
cd ../prod
terraform output -raw nameservers
# → paste the four NS records at the registrar
```

Once DNS propagates, ACM finishes validating and HTTPS works. See each subdir's `README.md` for details.

## What's NOT here

- **CI/CD.** Deploys are manual via `make deploy` for v1. A GitHub Actions + OIDC version is a future patch.
- **Staging.** Prod-only for v1. If staging is added, create `infra/terraform/staging/` mirroring `prod/` with its own backend key (`staging/terraform.tfstate`).
- **Image registry.** This is a static site — no Docker image is pushed anywhere. The `Dockerfile` at the repo root is a stub that may be removed during M0.
