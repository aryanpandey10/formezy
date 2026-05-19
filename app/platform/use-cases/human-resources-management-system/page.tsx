import type { Metadata } from "next";
import HumanResourcesContent from "@/components/sections/platform/HumanResourcesContent";

export const metadata: Metadata = {
  title: "Human Resources Management System | Formezy",
  description:
    "Build a tailored HR management system to manage employee records, attendance, approvals, communication, and workforce operations under one platform.",
};

export default function HumanResourcesPage() {
  return <HumanResourcesContent />;
}
