import type { Metadata } from "next";
import ReportingDashboardsContent from "@/components/sections/platform/ReportingDashboardsContent";

export const metadata: Metadata = {
  title: "Reporting & Dashboards",
  description:
    "Clarity that drives decisions. Live dashboards, role-based views, and actionable reporting built on Formezy operational data.",
};

export default function ReportingDashboardsPage() {
  return <ReportingDashboardsContent />;
}
