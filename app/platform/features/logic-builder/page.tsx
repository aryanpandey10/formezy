import type { Metadata } from "next";
import LogicBuilderContent from "@/components/sections/platform/LogicBuilderContent";

export const metadata: Metadata = {
  title: "Logic Builder",
  description:
    "Turn processes into intelligent workflows with Formezy Logic Builder — visual automation, real business scenarios, and adaptive flows.",
};

export default function LogicBuilderPage() {
  return <LogicBuilderContent />;
}
