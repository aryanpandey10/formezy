import type { Metadata } from "next";
import DownloadContent from "@/components/sections/resources/DownloadContent";

export const metadata: Metadata = {
  title: "Downloads & Brochures",
  description:
    "Download Formezy product brochures and industry-specific guides. Resources you can put to work instantly.",
};

export default function DownloadsPage() {
  return <DownloadContent />;
}
