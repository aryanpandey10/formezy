import type { Metadata } from "next";
import LeadershipContent from "@/components/sections/about/LeadershipContent";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the Formezy leadership team — guided by experience, driven by vision, and focused on building enterprise systems that understand business.",
};

export default function LeadershipPage() {
  return <LeadershipContent />;
}
