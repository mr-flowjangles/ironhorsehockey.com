# Bootstrap — Terraform state backend

One-time stack that creates the **S3 bucket** and **DynamoDB lock table** that the rest of the Terraform (in `../prod/`) uses as its remote backend.

Chicken-and-egg: the resources that hold remote state can't themselves live in remote state until they exist. So this stack is applied **once, with local state**, then state is migrated into the bucket it just created.

## What it creates

- `s3://ironhorsehockey-tf-state-<account-id>` — versioned, encrypted, public-access blocked. `prevent_destroy = true`.
- `dynamodb://ironhorsehockey-tf-lock` — `PAY_PER_REQUEST`, `LockID` hash key. `prevent_destroy = true`.

Account is whatever `aws sts get-caller-identity` reports — pin via `AWS_PROFILE` before applying.

## First-time apply

```bash
cd infra/terraform/bootstrap

# Confirm the right AWS identity:
aws sts get-caller-identity   # expect account 255977230735 (alias: rrose)

terraform init
terraform apply
```

Note the outputs: `state_bucket_name`, `lock_table_name`, `region`. These already match what `../prod/versions.tf` expects, but double-check.

## (Optional) Migrate bootstrap's own state into the bucket

After the first apply, the bootstrap stack's state file is sitting locally as `terraform.tfstate`. To keep everything centralized, you can move it into the bucket it just created:

```bash
# Add a `backend "s3"` block to versions.tf (see commented block below in this folder), then:
terraform init -migrate-state
```

This is optional — if you prefer to keep bootstrap local, leave the state file on disk and back it up to 1Password. Don't commit it (it's gitignored).

## Re-applying after losing local state

If the local state file is lost and you didn't migrate:

```bash
terraform import aws_s3_bucket.state ironhorsehockey-tf-state-<account-id>
terraform import aws_dynamodb_table.lock ironhorsehockey-tf-lock
terraform plan   # should report no changes
```

## What this stack does NOT do

- It does **not** manage the application infrastructure (S3 origin, CloudFront, Route 53, ACM). Those live in `../prod/`.
- It does **not** create AWS accounts, IAM users, OIDC providers, or any human-access primitives.
