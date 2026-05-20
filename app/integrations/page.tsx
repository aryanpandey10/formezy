import type { Metadata } from "next";
import IntegrationsConnectorsContent from "@/components/sections/platform/IntegrationsConnectorsContent";

export const metadata: Metadata = {
  title: "Integration & Connectors | Formezy",
  description:
    "Connect everything and work without boundaries. Unify tools, systems, and data on Formezy through native connectors, APIs, and ERP extensions.",
};

export default function IntegrationsPage() {
  return <IntegrationsConnectorsContent />;
}
