import type { Metadata } from "next";
import CapabilitiesContent from "@/components/sections/platform/CapabilitiesContent";

export const metadata: Metadata = {
  title: "Capabilities | Formezy",
  description:
    "Capabilities built for modern business operations — low-code, automation, AI, approvals, auditability and centralised data.",
};

export default function CapabilitiesPage() {
  return <CapabilitiesContent />;
}
