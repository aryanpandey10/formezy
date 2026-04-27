import type { Metadata } from "next";
import OverviewContent from "@/components/sections/platform/OverviewContent";

export const metadata: Metadata = {
  title: "Platform Overview | Formezy",
  description:
    "Formezy is the Enterprise Application Platform that unifies every input, every team and every workflow — so the right information reaches the right people, automatically.",
};

export default function PlatformOverviewPage() {
  return <OverviewContent />;
}
