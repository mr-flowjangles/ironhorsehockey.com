# Prod — site infrastructure

Terraform stack that deploys `ironhorsehockey.com` as a static site on AWS.

## Topology

```
visitor
   │
   ▼
ironhorsehockey.com   ◀── Route 53 hosted zone (apex + www, A + AAAA aliases)
   │
   ▼
CloudFront distribution   ◀── ACM cert (us-east-1, DNS-validated)
   │
   ▼
private S3 bucket (OAC-only access)
   ▲
   │ aws s3 sync (via `make deploy`)
   │
dist/   ◀── built by the chosen static-site framework
```

## Prereqs

1. The bootstrap stack (`../bootstrap/`) has been applied — its S3 bucket and DynamoDB table back this stack's remote state. See `../bootstrap/README.md`.
2. `AWS_PROFILE` points at the account where the site should live (account `255977230735`, alias `rrose`).

## First apply

```bash
cd infra/terraform/prod
terraform init
terraform plan
terraform apply
```

ACM DNS validation will hang on `apply` until the Route 53 records are reachable from public DNS — that happens after the registrar cutover (next step).

## Registrar cutover

After the first apply, grab the nameservers:

```bash
terraform output -raw nameservers
```

Update the current registrar's NS records to the four AWS values. Propagation is usually minutes-to-an-hour. Once propagated, ACM finishes validating; if `apply` is still running it will complete on its own, otherwise re-run `terraform apply`.

## Deploys

Site deploys aren't a Terraform concern after the first apply — `make deploy` (from the repo root) syncs `dist/` to the S3 origin and invalidates CloudFront. Terraform is only re-run when the *infrastructure* changes.

## Outputs

| Output | Used by |
| --- | --- |
| `nameservers` | Manually pasted at the registrar |
| `cloudfront_distribution_id` | `make deploy` (CloudFront invalidation) |
| `site_bucket` | `make deploy` (S3 sync target) |
| `cloudfront_domain_name` | Manual sanity check during DNS propagation |
| `acm_certificate_arn` | Reference / debugging |

## Costs (rough, prod-only)

- Route 53 hosted zone: ~$0.50/mo + queries
- CloudFront: free-tier covers 1 TB/mo egress + 10M requests
- S3 origin: pennies for a small static site
- ACM cert: free

Expect <$5/mo for a low-traffic site.
