/**
 * Build a URL path for files under `public/`, encoding each segment
 * (handles spaces and special characters in folder or file names).
 */
export function publicAssetUrl(...segments: string[]): string {
  return `/${segments.map((s) => encodeURIComponent(s)).join("/")}`;
}

/** Platform overview — WebP in `public/images/overview/Webp/`. */
export const overviewWebp = {
  hero: publicAssetUrl("images", "overview", "Webp", "business_platform.webp"),
  enterpriseApplication: publicAssetUrl(
    "images",
    "overview",
    "Webp",
    "enterprise_application_platform.webp",
  ),
  needEapToday: publicAssetUrl("images", "overview", "Webp", "businesses_eap.webp"),
  internalVsExternal: publicAssetUrl("images", "overview", "Webp", "internal_vs_external.webp"),
  fromSpreadsheet: publicAssetUrl(
    "images",
    "overview",
    "Webp",
    "spreadsheets_ structured_systems.webp",
  ),
  readyToSimplify: publicAssetUrl(
    "images",
    "overview",
    "Webp",
    "simplify_scale_operations.webp",
  ),
} as const;

/** Use cases — industry carousel (`public/images/Use Cases/Webp/`). */
export const useCasesIndustryWebp = {
  discreteManufacturing: publicAssetUrl(
    "images",
    "Use Cases",
    "Webp",
    "discrete_manufacturing.webp",
  ),
  retailWholesale: publicAssetUrl("images", "Use Cases", "Webp", "retail_wholesale.webp"),
  constructionEpc: publicAssetUrl("images", "Use Cases", "Webp", "construction_EPC.webp"),
} as const;

/** Careers culture carousel — `public/images/Career/webp/`. */
export const careerCultureWebp = [
  publicAssetUrl("images", "Career", "webp", "career_1.webp"),
  publicAssetUrl("images", "Career", "webp", "career_2.webp"),
  publicAssetUrl("images", "Career", "webp", "career_3.webp"),
  publicAssetUrl("images", "Career", "webp", "career_4.webp"),
  publicAssetUrl("images", "Career", "webp", "build_what_powers_modern_businesses.webp"),
] as const;
