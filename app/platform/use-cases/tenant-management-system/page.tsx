import type { Metadata } from "next";
import TenantManagementSystemContent from "@/components/sections/platform/TenantManagementSystemContent";

export const metadata: Metadata = {
  title: "Tenant Management System | Formezy",
  description:
    "Build a tailored CRM system that matches how your sales, success and marketing teams actually work.",
};

export default function TenantManagementSystemPage() {
  return <TenantManagementSystemContent />;
}
