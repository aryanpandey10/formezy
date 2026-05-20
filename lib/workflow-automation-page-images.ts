import { publicAssetUrl } from "@/lib/webp-assets";

const wa = (file: string) =>
  publicAssetUrl("images", "Workflow Automation", "Webp", file);

export const workflowAutomationPageImages = {
  hero: wa("workflow_automation_banner.webp"),
  work: wa("workflow_automation_work.webp"),
  workflow: wa("workflow_automation_workflow.webp"),
  keyCapabilities: wa("workflow_automation_key_Capabilities.webp"),
  manual: wa("workflow_automation_manual.webp"),
  cta: wa("workflow_automation_CTA.webp"),
} as const;
