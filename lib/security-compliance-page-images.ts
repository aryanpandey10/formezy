import { publicAssetUrl } from "@/lib/webp-assets";

const sc = (file: string) =>
  publicAssetUrl("images", "Security Compliance", "Webp", file);

export const securityCompliancePageImages = {
  hero: sc("security_compliance_banner.webp"),
  roleBased: sc("security_compliance_role_based.webp"),
  audit: sc("security_compliance_audit.webp"),
  cta: sc("security_compliance_CTA.webp"),
} as const;
