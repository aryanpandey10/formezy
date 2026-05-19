import type { Metadata } from "next";
import FinanceManagementContent from "@/components/sections/platform/FinanceManagementContent";

export const metadata: Metadata = {
  title: "Finance Management System | Formezy",
  description:
    "Build a tailored finance management system to streamline approvals, accounting workflows, reconciliation, budgeting, and reporting.",
};

export default function FinanceManagementPage() {
  return <FinanceManagementContent />;
}
