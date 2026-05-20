import { publicAssetUrl } from "@/lib/webp-assets";

const aw = (file: string) =>
  publicAssetUrl("images", "Agentic Workflows", "Webp", file);

export const agenticWorkflowsPageImages = {
  whatAre: aw("workflow_automation_ecosystem.webp"),
  keyCapabilities: aw("agentic_workflows_key_Capabilities.webp"),
  futureOfWork: aw("agentic_workflows_built.webp"),
  cta: aw("agentic_workflows_CTA.webp"),
} as const;
