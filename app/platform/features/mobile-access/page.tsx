import type { Metadata } from "next";
import MobileAccessContent from "@/components/sections/platform/MobileAccessContent";

export const metadata: Metadata = {
  title: "Mobile Access",
  description:
    "Operate your business wherever you are. Formezy mobile apps for iOS and Android with approvals, notifications, and offline-ready workflows.",
};

export default function MobileAccessPage() {
  return <MobileAccessContent />;
}
