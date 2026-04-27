import type { Metadata } from "next";
import CareersContent from "@/components/sections/about/CareersContent";

export const metadata: Metadata = {
  title: "Careers | Formezy",
  description:
    "Join Formezy and help build the enterprise platform that powers modern businesses. Explore open roles in engineering, product and sales.",
};

export default function CareersPage() {
  return <CareersContent />;
}
