import type { Metadata } from "next";
import WholesaleIndustryContent from "@/components/sections/platform/WholesaleIndustryContent";

export const metadata: Metadata = {
  title: "Connected Wholesale Operations | Formezy",
  description:
    "Manage large-scale B2B procurement, warehouse inventory tracking, order processing and fulfillment workflows, and supplier coordination with Formezy EAP.",
};

export default function WholesaleIndustryPage() {
  return <WholesaleIndustryContent />;
}
