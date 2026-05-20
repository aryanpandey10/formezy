import type { Metadata } from "next";
import AgenticWorkflowsContent from "@/components/sections/platform/AgenticWorkflowsContent";

export const metadata: Metadata = {
  title: "Agentic Workflows",
  description:
    "Workflows that think, decide, and act. Formezy agentic workflows combine automation, context, and intelligence for adaptive business operations.",
};

export default function AgenticWorkflowsPage() {
  return <AgenticWorkflowsContent />;
}
