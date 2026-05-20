import type { Metadata } from "next";
import CaseStudiesContent from "@/components/sections/resources/CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real businesses, real results. Explore how teams use Formezy to solve inventory, invoicing, and operations challenges.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
