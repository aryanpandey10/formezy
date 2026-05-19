import type { Metadata } from "next";
import DiscreteManufacturingContent from "@/components/sections/platform/DiscreteManufacturingContent";

export const metadata: Metadata = {
  title: "Discrete Manufacturing Assembly | Formezy",
  description:
    "Manage components, assemblies, supply chains, and multi-stage production workflows for electronics, automotive, and industrial appliances with Formezy.",
};

export default function DiscreteManufacturingPage() {
  return <DiscreteManufacturingContent />;
}
