import type { Metadata } from "next";
import IntegrationsConnectorsContent from "@/components/sections/platform/IntegrationsConnectorsContent";

export const metadata: Metadata = {
  title: "Integration & Connectors | Formezy",
  description:
    "Connect everything and work without boundaries. Native connectors, ERP integrations, and third-party tools unified on Formezy.",
};

export default function IntegrationsPage() {
  return <IntegrationsConnectorsContent />;
}
