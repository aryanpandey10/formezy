import type { Metadata } from "next";
import RentalIndustryContent from "@/components/sections/platform/RentalIndustryContent";

export const metadata: Metadata = {
  title: "Connected Rental Operations | Formezy",
  description:
    "Manage rental workflows, asset tracking, agreement schedules, real-time availability sync, maintenance requests, and event logistics with Formezy EAP.",
};

export default function RentalIndustryPage() {
  return <RentalIndustryContent />;
}
