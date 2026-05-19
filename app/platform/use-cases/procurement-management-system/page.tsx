import type { Metadata } from "next";
import ProcurementManagementContent from "@/components/sections/platform/ProcurementManagementContent";

export const metadata: Metadata = {
  title: "Procurement Management System | Formezy",
  description:
    "Build a procurement management system that connects purchase requests, vendor coordination, approvals, and inventory synchronization.",
};

export default function ProcurementManagementPage() {
  return <ProcurementManagementContent />;
}
