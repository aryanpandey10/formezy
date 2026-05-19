import type { Metadata } from "next";
import AssetManagementContent from "@/components/sections/platform/AssetManagementContent";

export const metadata: Metadata = {
  title: "Asset Management System | Formezy",
  description:
    "Build a tailored asset management system to track utilization, configure preventive/corrective maintenance workflows, and manage multi-location operations.",
};

export default function AssetManagementPage() {
  return <AssetManagementContent />;
}
