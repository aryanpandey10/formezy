import type { Metadata } from "next";
import IndustryIotContent from "@/components/sections/integrations/IndustryIotContent";

export const metadata: Metadata = {
  title: "Industry 4.0 Smart Manufacturing Integration | Formezy",
  description:
    "Connect shopfloor PLCs, machine APIs, SCADA systems, industrial sensors, and real-time downtime alert workflows with Formezy EAP.",
};

export default function IndustryIotPage() {
  return <IndustryIotContent />;
}
