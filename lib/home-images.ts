/** Optimized WebP assets for home page sections */
export const HOME_WEBP = "/images/Home/Webp";

export const industrySolutionImages = {
  "Heavy Manufacturing": `${HOME_WEBP}/heavy_manufacturing.webp`,
  "Process Industries": `${HOME_WEBP}/process_manufacturing.webp`,
  "Discrete Manufacturing": `${HOME_WEBP}/discrete_manufacturing.webp`,
  Retail: `${HOME_WEBP}/retail_wholesale.webp`,
  Wholesale: `${HOME_WEBP}/service_based_businesses.webp`,
  Rental: `${HOME_WEBP}/construction_epc.webp`,
} as const;

export const testimonialNetworkImage = `${HOME_WEBP}/ClientSays.svg`;

/** Operations section — mobile devices illustration */
export const homeTwoMobileImage = `${HOME_WEBP}/two_mobile.webp`;

/** Hero — platform diagram (2x WebP, intrinsic 1489×1013) */
export const homeHeroBannerImage = "/images/Home/m_banner_2x.svg";
export const homeHeroBannerWidth = 1489;
export const homeHeroBannerHeight = 1013;

/** Preload on home page for faster first paint in key carousels */
export const homePreloadImages = [
  `${HOME_WEBP}/business_systems.webp`,
  `${HOME_WEBP}/heavy_manufacturing.webp`,
  testimonialNetworkImage,
] as const;
