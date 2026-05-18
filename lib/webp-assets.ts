/**
 * Build a URL path for files under `public/`, encoding each segment
 * (handles spaces and special characters in folder or file names).
 */
export function publicAssetUrl(...segments: string[]): string {
  return `/${segments.map((s) => encodeURIComponent(s)).join("/")}`;
}

/** Platform overview — WebP in `public/images/overview/Webp/`. */
export const overviewWebp = {
  hero: publicAssetUrl("images", "overview", "Webp", "business_platform.webp"),
  enterpriseApplication: publicAssetUrl(
    "images",
    "overview",
    "Webp",
    "enterprise_application_platform.webp",
  ),
  needEapToday: publicAssetUrl("images", "overview", "Webp", "businesses_eap.webp"),
  internalVsExternal: publicAssetUrl("images", "overview", "Webp", "internal_vs_external.webp"),
  fromSpreadsheet: publicAssetUrl(
    "images",
    "overview",
    "Webp",
    "spreadsheets_ structured_systems.webp",
  ),
  readyToSimplify: publicAssetUrl(
    "images",
    "overview",
    "Webp",
    "simplify_scale_operations.webp",
  ),
} as const;

/** Use cases — all WebP under `public/images/Use Cases/Webp/`. */
export const useCasesPageWebp = {
  hero: publicAssetUrl("images", "Use Cases", "Webp", "use_cases_system.webp"),
  turningHub: publicAssetUrl("images", "Use Cases", "Webp", "use_cases_system.webp"),
  tailoredErp: publicAssetUrl("images", "Use Cases", "Webp", "tailored_erp_icon.webp"),
  tailoredCrm: publicAssetUrl("images", "Use Cases", "Webp", "tailored_CRM_icon.webp"),
  documentManagement: publicAssetUrl("images", "Use Cases", "Webp", "document_management_icon.webp"),
  tenantManagement: publicAssetUrl("images", "Use Cases", "Webp", "tenant_management_icon.webp"),
  cta: publicAssetUrl("images", "Use Cases", "Webp", "use_cases_CTA.webp"),
} as const;

/** Use cases — industry carousel (`public/images/Use Cases/Webp/`). */
export const useCasesIndustryWebp = {
  discreteManufacturing: publicAssetUrl(
    "images",
    "Use Cases",
    "Webp",
    "discrete_manufacturing.webp",
  ),
  retailWholesale: publicAssetUrl("images", "Use Cases", "Webp", "retail_wholesale.webp"),
  consumerGoods: publicAssetUrl("images", "Use Cases", "Webp", "service_based_businesses.webp"),
  constructionEpc: publicAssetUrl("images", "Use Cases", "Webp", "construction_EPC.webp"),
} as const;

/** Careers culture carousel — `public/images/Career/webp/`. */
export const careerCultureWebp = [
  publicAssetUrl("images", "Career", "webp", "career_1.webp"),
  publicAssetUrl("images", "Career", "webp", "career_2.webp"),
  publicAssetUrl("images", "Career", "webp", "career_3.webp"),
  publicAssetUrl("images", "Career", "webp", "career_4.webp"),
  publicAssetUrl("images", "Career", "webp", "build_what_powers_modern_businesses.webp"),
] as const;

/** Tailored CRM — `public/images/Tailored_crm/Webp/`. */
export const tailoredCrmWebp = {
  businessChallenges: publicAssetUrl("images", "Tailored_crm", "Webp", "business-challenges.webp"),
  whatIsTailoredTenant: publicAssetUrl(
    "images",
    "Tailored_crm",
    "Webp",
    "what-is-a-tailored-tenant-management.webp",
  ),
  howFormezyEnables: publicAssetUrl("images", "Tailored_crm", "Webp", "how-formezy-enables-it.webp"),
  realWorkflow: publicAssetUrl("images", "Tailored_crm", "Webp", "real-workflow-in-action.webp"),
  buildCrmWorksYourWay: publicAssetUrl(
    "images",
    "Tailored_crm",
    "Webp",
    "build-a-crm-that-works-your-way.webp",
  ),
} as const;

/** Integrations — `public/images/integrations/Webp/`. */
export const integrationsWebp = {
  logos: [
    publicAssetUrl("images", "integrations", "Webp", "1.webp"),
    publicAssetUrl("images", "integrations", "Webp", "2.webp"),
    publicAssetUrl("images", "integrations", "Webp", "3.webp"),
    publicAssetUrl("images", "integrations", "Webp", "4.webp"),
    publicAssetUrl("images", "integrations", "Webp", "5.webp"),
    publicAssetUrl("images", "integrations", "Webp", "6.webp"),
    publicAssetUrl("images", "integrations", "Webp", "7.webp"),
    publicAssetUrl("images", "integrations", "Webp", "8.webp"),
    publicAssetUrl("images", "integrations", "Webp", "9.webp"),
  ],
  api: publicAssetUrl("images", "integrations", "Webp", "integrations_api.webp"),
  thirdParty: publicAssetUrl("images", "integrations", "Webp", "integrations_third_party.webp"),
  erp: publicAssetUrl("images", "integrations", "Webp", "integrations_ERP.webp"),
  cta: publicAssetUrl("images", "integrations", "Webp", "integrations_CTA.webp"),
} as const;

/** Task Management System — `public/images/Task_Management_System/webp/`. */
export const taskManagementWebp = {
  businessChallenges: publicAssetUrl("images", "Task_Management_System", "webp", "busines.webp"),
  tailored: publicAssetUrl("images", "Task_Management_System", "webp", "tailored.webp"),
  how: publicAssetUrl("images", "Task_Management_System", "webp", "how.webp"),
  realWorkflow: publicAssetUrl("images", "Task_Management_System", "webp", "real_workflow_in_action.webp"),
  cta: publicAssetUrl("images", "Task_Management_System", "webp", "cta.webp"),
} as const;

