output "nameservers" {
  description = "Paste these four NS records into the current registrar to delegate DNS to Route 53. Required before HTTPS validation completes."
  value       = aws_route53_zone.primary.name_servers
}

output "cloudfront_distribution_id" {
  description = "Used by `make deploy` for `aws cloudfront create-invalidation`."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "The *.cloudfront.net hostname (useful for sanity-checking before DNS is fully propagated)."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "site_bucket" {
  description = "Origin bucket. `make deploy` syncs ./dist/ here."
  value       = aws_s3_bucket.site.id
}

output "acm_certificate_arn" {
  description = "ACM cert backing the CloudFront viewer cert."
  value       = aws_acm_certificate_validation.site.certificate_arn
}
