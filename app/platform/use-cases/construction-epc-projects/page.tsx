import type { Metadata } from "next";
import ConstructionEpcContent from "@/components/sections/platform/ConstructionEpcContent";

export const metadata: Metadata = {
  title: "Construction & EPC Project Management | Formezy",
  description:
    "Streamline planning, task tracking, multi-site operational coordination, subcontractor approvals, and compliance workflows for EPC and infrastructure projects.",
};

export default function ConstructionEpcPage() {
  return <ConstructionEpcContent />;
}
