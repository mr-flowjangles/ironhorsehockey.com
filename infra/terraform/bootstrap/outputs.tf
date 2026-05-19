output "state_bucket_name" {
  description = "Use as backend.s3.bucket in infra/terraform/prod/versions.tf."
  value       = aws_s3_bucket.state.id
}

output "lock_table_name" {
  description = "Use as backend.s3.dynamodb_table in infra/terraform/prod/versions.tf."
  value       = aws_dynamodb_table.lock.name
}

output "region" {
  description = "Use as backend.s3.region in infra/terraform/prod/versions.tf."
  value       = "us-east-1"
}
