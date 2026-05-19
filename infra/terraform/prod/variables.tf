variable "domain_name" {
  description = "Apex domain. Used as the ACM cert primary name and the CloudFront alias."
  type        = string
  default     = "ironhorsehockey.com"
}

variable "subject_alternative_names" {
  description = "Additional names on the cert and CloudFront aliases (e.g., www subdomain)."
  type        = list(string)
  default     = ["www.ironhorsehockey.com"]
}

variable "cloudfront_price_class" {
  description = "CloudFront price class. PriceClass_100 = NA+EU only (cheapest); _200 adds Asia/ME; All = global."
  type        = string
  default     = "PriceClass_100"
}

variable "tags" {
  description = "Tags applied to every resource via provider default_tags."
  type        = map(string)
  default = {
    Project   = "ironhorsehockey.com"
    ManagedBy = "terraform"
  }
}
