import { publicAssetUrl } from "@/lib/webp-assets";

const safalWebp = (file: string) =>
  publicAssetUrl("images", "Safal_infosoft", "webp", file);

/** Safal Infosoft page — assets under `public/images/Safal_infosoft/webp/`. */
export const safalInfosoftImages = {
  hero: safalWebp("driving_business_innovation_since_2006.webp"),
  whatWeDo: safalWebp("what_we_do.webp"),
  drivingFuture: safalWebp("driving_the_future_forward.webp"),
  cta: safalWebp("build_erp.webp"),
  verticalLogos: {
    intelliWorks: safalWebp("IW Logo 1.svg"),
    webShop: safalWebp("wideaz 1.svg"),
    intelliText: safalWebp("inteli 1.png"),
  },
} as const;

/** Tighter vertical rhythm than global `.section` on this page. */
export const SAFAL_SECTION = "py-8 md:py-10 lg:py-12";
