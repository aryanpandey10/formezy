import type { Metadata } from "next";
import TailoredCrmContent from "@/components/sections/platform/TailoredCrmContent";

export const metadata: Metadata = {
  title: "Tailored CRM | Formezy",
  description:
    "Build a tailored CRM system that matches how your sales, success and marketing teams actually work.",
};

export default function TailoredCrmPage() {
  return <TailoredCrmContent />;
}
