import { publicAssetUrl } from "@/lib/webp-assets";

const careerWebp = (file: string) =>
  publicAssetUrl("images", "Career", "webp", file);

/** Careers page — `public/images/Career/webp/`. */
export const careerPageImages = {
  hero: careerWebp("build_what_powers_modern_businesses.webp"),
  workThatMatters: careerWebp("A_modern_SaaS_202604161419 1.webp"),
  culture: [
    careerWebp("career_1.webp"),
    careerWebp("career_2.webp"),
    careerWebp("career_3.webp"),
    careerWebp("career_4.webp"),
  ],
} as const;
