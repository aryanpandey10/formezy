import type { Metadata } from "next";
import WorkflowAutomationContent from "@/components/sections/platform/WorkflowAutomationContent";

export const metadata: Metadata = {
  title: "Workflow Automation",
  description:
    "Automate workflows and accelerate execution with Formezy — triggers, routing, and continuous flow without manual chasing.",
};

export default function WorkflowAutomationPage() {
  return <WorkflowAutomationContent />;
}
