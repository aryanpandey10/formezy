import type { Metadata } from "next";
import RetailIndustryContent from "@/components/sections/platform/RetailIndustryContent";

export const metadata: Metadata = {
  title: "Connected Retail Operations | Formezy",
  description:
    "Digitize retail workflows, store inventory synchronization, multi-store replenishment approvals, billing coordination, and operations analytics with Formezy EAP.",
};

export default function RetailIndustryPage() {
  return <RetailIndustryContent />;
}
