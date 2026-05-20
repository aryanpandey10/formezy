import { homePreloadImages } from "@/lib/home-images";

/** Injects <link rel="preload"> for above-the-fold home images */
export default function HomePreloads() {
  return (
    <>
      {homePreloadImages.map((href) => (
        <link key={href} rel="preload" as="image" href={href} type="image/webp" />
      ))}
    </>
  );
}
