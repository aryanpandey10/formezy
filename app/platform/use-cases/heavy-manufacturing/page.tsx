import type { Metadata } from "next";
import HeavyManufacturingContent from "@/components/sections/platform/HeavyManufacturingContent";

export const metadata: Metadata = {
  title: "Heavy Manufacturing Operations | Formezy",
  description:
    "Streamline large-scale, multi-layered manufacturing processes with structured workflows, real-time visibility, and complete operational control with Formezy.",
};

export default function HeavyManufacturingPage() {
  return <HeavyManufacturingContent />;
}
