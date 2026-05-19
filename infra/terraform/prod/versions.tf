terraform {
  required_version = ">= 1.6.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.40"
    }
  }

  backend "s3" {
    bucket         = "ironhorsehockey-tf-state-255977230735"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "ironhorsehockey-tf-lock"
    encrypt        = true
  }
}
