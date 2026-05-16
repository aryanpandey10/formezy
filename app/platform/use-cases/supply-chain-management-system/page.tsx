import type { Metadata } from "next";
import SupplyChainContent from "@/components/sections/platform/SupplyChainContent";

export const metadata: Metadata = {
  title: "Supply Chain Management System | Formezy",
  description:
    "Build a tailored CRM system that matches how your sales, success and marketing teams actually work.",
};

export default function SupplyChainManagementPage() {
  return <SupplyChainContent />;
}
