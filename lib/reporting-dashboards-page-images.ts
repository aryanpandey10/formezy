import { publicAssetUrl } from "@/lib/webp-assets";

const rd = (file: string) =>
  publicAssetUrl("images", "Reporting Dashboards", "Webp", file);

export const reportingDashboardsPageImages = {
  hero: rd("reporting_dashboards_banner.webp"),
  realTime: rd("reporting_dashboards_real_time.webp"),
  role: rd("reporting_dashboards_role.webp"),
  keyCapabilities: rd("reporting_dashboards_key_Capabilities.webp"),
  dataOverload: rd("reporting_dashboards_data_overload.webp"),
  cta: rd("reporting_dashboards_CTA.webp"),
} as const;
