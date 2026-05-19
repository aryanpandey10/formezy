import type { Metadata } from "next";
import PlanningProductionContent from "@/components/sections/platform/PlanningProductionContent";

export const metadata: Metadata = {
  title: "Planning & Production Management | Formezy",
  description:
    "Build a production management system that connects production planning, shopfloor execution, inventory allocation, and dispatch.",
};

export default function PlanningProductionPage() {
  return <PlanningProductionContent />;
}
