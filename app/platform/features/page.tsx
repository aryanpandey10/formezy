import type { Metadata } from "next";
import FeaturesContent from "@/components/sections/platform/FeaturesContent";

export const metadata: Metadata = {
  title: "Features | Formezy",
  description:
    "Powerful features built for intelligent operations — AskEzy Intelligence, Developer Studio, Logic Builder, Workflow Automation, Integrations, Dashboards, Mobile Access and Security.",
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
