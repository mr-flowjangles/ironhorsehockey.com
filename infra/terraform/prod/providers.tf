provider "aws" {
  region = "us-east-1"

  default_tags {
    tags = merge(var.tags, { Stack = "prod" })
  }
}

data "aws_caller_identity" "current" {}
