import type { Metadata } from "next";
import CrmSystemContent from "@/components/sections/platform/CrmSystemContent";

export const metadata: Metadata = {
  title: "CRM System | Formezy",
  description:
    "Build a CRM system that connects leads, opportunities, follow-ups, and communication workflows under one platform.",
};

export default function CrmSystemPage() {
  return <CrmSystemContent />;
}
