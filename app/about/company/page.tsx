import type { Metadata } from "next";
import CompanyContent from "@/components/sections/about/CompanyContent";

export const metadata: Metadata = {
  title: "Company | Formezy",
  description:
    "Formezy helps businesses move beyond disconnected tools and build a unified, intelligent way of operating — built around how you actually work.",
};

export default function AboutCompanyPage() {
  return <CompanyContent />;
}
