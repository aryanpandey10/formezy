/** @type {import('next').NextConfig} */
const nextConfig = {
  // Normal deploy: no export → `next build` → `.next/` + `next start` (SMTP /api works).
  // scripts/build-out.mjs sets STATIC_EXPORT=true → `out/` for static hosts only (no API in bundle).
  ...(process.env.STATIC_EXPORT === "true" ? { output: "export" } : {}),
  reactStrictMode: true,
  images: {
    // Reliable across hosts; set false if you use Vercel + default image optimization only.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "figma-alpha-api.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "s3-alpha.figma.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
