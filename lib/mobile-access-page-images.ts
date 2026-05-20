import { publicAssetUrl } from "@/lib/webp-assets";

const ma = (file: string) => publicAssetUrl("images", "Mobile Access", file);

export const mobileAccessPageImages = {
  hero: ma("mobile_banner.webp"),
  locationLimits: ma("location_limit.webp"),
  takeAction: ma("action_instantly.webp"),
  stayUpdated: ma("stay_updated.webp"),
  cta: ma("stay_connected.webp"),
} as const;
