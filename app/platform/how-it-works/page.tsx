import type { Metadata } from "next";
import HowItWorksContent from "@/components/sections/platform/HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works | Formezy",
  description:
    "From idea to execution, seamlessly. See the five steps behind every Formezy implementation — from mapping workflows to scaling them with confidence.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
