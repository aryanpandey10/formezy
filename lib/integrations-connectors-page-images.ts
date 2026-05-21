import { publicAssetUrl } from "@/lib/webp-assets";

const ic = (file: string) =>
  publicAssetUrl("images", "Intergrations and Connectors", "Webp", file);

/** Integration & Connectors — `public/images/Intergrations and Connectors/Webp/`. */
export const integrationsConnectorsPageImages = {
  ecosystem: ic("workflow_automation_ecosystem.webp"),
  erp: ic("integrations_connectors_ERP.webp"),
  growth: ic("integrations_connectors_growth.webp"),
  cta: ic("integrations_connectors_CTA.webp"),
  bgcta:ic("integration_bg.webp")
} as const;
