import { publicAssetUrl } from "@/lib/webp-assets";

const hiw = (file: string) =>
  publicAssetUrl("images", "How it Works", "Webp", file);
const companyWebp = (file: string) =>
  publicAssetUrl("images", "Company", "webp", file);

/** `/integrations` — WebP under `public/images/integrations/Webp/`. */
export const integrationPageImages = {
  hero: "/images/integrations/Webp/integrations_bg.webp",
  api: "/images/integrations/Webp/integrations_api.webp",
  thirdParty: "/images/integrations/Webp/integrations_third_party.webp",
  erp: "/images/integrations/Webp/integrations_ERP.webp",
  cta: "/images/integrations/Webp/integrations_CTA.webp",
} as const;

/** `/platform/how-it-works` — WebP under `public/images/How it Works/Webp/`. */
export const howItWorksPageImages = {
  hero: hiw("idea_Execution.webp"),
  stepDefine: hiw("define_workflows.webp"),
  stepLogicBuilder: hiw("Build with Logic Builder.webp"),
  stepAutomate: hiw("automate_processes.webp"),
  stepScale: hiw("scale_structure.webp"),
  defineDeep: hiw("map_workflows.webp"),
  logicLarge: hiw("build_system_logic.webp"),
  automateWide: hiw("enable_automation.webp"),
  integrateSystems: hiw("connect_ ecosystem.webp"),
  scaleCard: hiw("build_workflows.webp"),
  cta: hiw("build_workflows.webp"),
} as const;

/** `/platform/capabilities` — WebP under `public/images/Capabilities/Webp/`. */
export const capabilitiesPageImages = {
  hero: "/images/Capabilities/Webp/capabilities_banner.webp",
  lowCodeAutomation: "/images/Capabilities/Webp/workflow_automation_operations.webp",
  roleBased: "/images/Capabilities/Webp/capabilities_role_access.webp",
  askEasy: "/images/Capabilities/Webp/capabilities_askeasy.webp",
  approvals: "/images/Capabilities/Webp/capabilities_multilevel.webp",
  audit: "/images/Capabilities/Webp/capabilities_multilevel.webp",
  dataCentral: "/images/Capabilities/Webp/capabilities_banner.webp",
  cta: "/images/Capabilities/Webp/workflow_automation_operations.webp",
} as const;

/** `/platform/features` — WebP under `public/images/Features/Webp/`. */
export const featuresPageImages = {
  hero: "/images/Features/Webp/features_banner.webp",
  askEzy: "/images/Features/Webp/features_askeasy.webp",
  studio: "/images/Features/Webp/features_studio.webp",
  logicBuilder: "/images/Features/Webp/features_logic_builder.webp",
  automation: "/images/Features/Webp/features_automation.webp",
  integrations: "/images/Features/Webp/features_integrations.webp",
  dashboards: "/images/Features/Webp/features_dashboard.webp",
  mobile: "/images/Features/Webp/features_mobile_access.webp",
  security: "/images/Features/Webp/features_security.webp",
  cta: "/images/Features/Webp/features_CTA.webp",
} as const;

/** `/about/company` — WebP under `public/images/Company/webp/`. */
export const companyPageImages = {
  hero: companyWebp("enterprise_systems_reimagined.webp"),
  whyEap: companyWebp("Why EAP Matters Today.webp"),
  approach: companyWebp("our_approach.webp"),
  vision: companyWebp("A_modern_SaaS_202604161419 1.webp"),
  mission: companyWebp("A_transformation_illustration_202604171613 (1) 1.webp"),
  beyond: companyWebp("Ready to Move Beyond Traditional Systems_.webp"),
  scalable: companyWebp("our_approach.webp"),
  cta: companyWebp("enterprise_systems_reimagined.webp"),
} as const;
