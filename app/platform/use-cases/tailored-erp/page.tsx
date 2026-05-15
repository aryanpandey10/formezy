import type { Metadata } from "next";
import TailoredErpContent from "@/components/sections/platform/TailoredErpContent";

export const metadata: Metadata = {
  title: "Tailored CRM | Formezy",
  description:
    "Build a tailored CRM system that matches how your sales, success and marketing teams actually work.",
};

export default function TailoredCrmPage() {
  return <TailoredErpContent />;
}
