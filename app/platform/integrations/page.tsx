import type { Metadata } from "next";
import IntegrationsContent from "@/components/sections/platform/IntegrationsContent";

export const metadata: Metadata = {
  title: "Integrations | Formezy",
  description:
    "Design workflows that connect your core business systems with the tools your teams use every day. Seamlessly integrate with ERPs, CRMs, and productivity tools.",
};

export default function IntegrationsPage() {
  return <IntegrationsContent />;
}
