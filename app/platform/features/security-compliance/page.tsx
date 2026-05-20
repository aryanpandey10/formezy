import type { Metadata } from "next";
import SecurityComplianceContent from "@/components/sections/platform/SecurityComplianceContent";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description:
    "Secure by design, controlled by you. Enterprise security, role-based access, audit visibility, and compliance readiness on Formezy.",
};

export default function SecurityCompliancePage() {
  return <SecurityComplianceContent />;
}
