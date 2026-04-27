import type { Metadata } from "next";
import IntegrationsContent from "@/components/sections/integrations/IntegrationsContent";

export const metadata: Metadata = {
  title: "Integrations | Formezy",
  description:
    "The integration layer your business was missing. Unify tools, systems and data on Formezy — through native connectors, APIs and ERP extensions.",
};

export default function IntegrationsPage() {
  return <IntegrationsContent />;
}
