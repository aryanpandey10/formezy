import { publicAssetUrl } from "@/lib/webp-assets";

/** Standard five-image use-case pages (system modules). */
export type SystemUseCaseWebp = {
  businessChallenges: string;
  whatIs: string;
  howFormezyEnables: string;
  realWorkflow: string;
  cta: string;
};

function systemUseCaseWebp(
  folder: string,
  files: {
    businessChallenges: string;
    whatIs: string;
    howFormezyEnables: string;
    realWorkflow: string;
    cta: string;
  },
): SystemUseCaseWebp {
  const base = (file: string) => publicAssetUrl("images", folder, file);
  return {
    businessChallenges: base(files.businessChallenges),
    whatIs: base(files.whatIs),
    howFormezyEnables: base(files.howFormezyEnables),
    realWorkflow: base(files.realWorkflow),
    cta: base(files.cta),
  };
}

/** Industry use-case pages (hero, diagram, footer CTA). */
export type IndustryUseCaseWebp = {
  intro: string;
  diagram: string;
  cta: string;
};

function industryUseCaseWebp(
  folder: string,
  subfolder: string,
  files: { intro: string; diagram: string; cta: string },
): IndustryUseCaseWebp {
  const base = (file: string) =>
    subfolder
      ? publicAssetUrl("images", folder, subfolder, file)
      : publicAssetUrl("images", folder, file);
  return {
    intro: base(files.intro),
    diagram: base(files.diagram),
    cta: base(files.cta),
  };
}

export const crmSystemWebp = systemUseCaseWebp("CRM System", {
  businessChallenges: "Business Challenges.webp",
  whatIs: "What Is a Tailored CRM System.webp",
  howFormezyEnables: "How Formezy Enables It.webp",
  realWorkflow: "Real Workflow in Action.webp",
  cta: "Build a CRM System Around Your Business.webp",
});

export const planningProductionWebp = systemUseCaseWebp("Planning & Production Management", {
  businessChallenges: "Business Challenges.webp",
  whatIs: "What Is a Planning & Production System.webp",
  howFormezyEnables: "How Formezy Enables It.webp",
  realWorkflow: "Real Workflow in Action.webp",
  cta: "Improve Production Visibility and Execution.webp",
});

export const procurementManagementWebp = systemUseCaseWebp("Procurement Management System", {
  businessChallenges: "Business Challenges.webp",
  whatIs: "What Is a Procurement Management System.webp",
  howFormezyEnables: "How Formezy Enables It.webp",
  realWorkflow: "Real Workflow in Action.webp",
  cta: "Simplify Procurement and Vendor Operations.webp",
});

export const qualityControlWebp = systemUseCaseWebp("Quality Control Management", {
  businessChallenges: "Business Challenges.webp",
  whatIs: "What Is a Quality Control Management System.webp",
  howFormezyEnables: "How Formezy Enables It.webp",
  realWorkflow: "Real Workflow in Action.webp",
  cta: "Improve Quality Visibility and Compliance.webp",
});

export const financeManagementWebp = systemUseCaseWebp("Finance Management System", {
  businessChallenges: "Business Challenges.webp",
  whatIs: "What Is a Finance Management System.webp",
  howFormezyEnables: "How Formezy Enables It.webp",
  realWorkflow: "Real Workflow in Action.webp",
  cta: "Improve Financial Visibility and Coordination.webp",
});

export const humanResourcesWebp = systemUseCaseWebp("Human Resources Management System", {
  businessChallenges: "Business Challenges.webp",
  whatIs: "What Is a Human Resources Management System.webp",
  howFormezyEnables: "How Formezy Enables It.webp",
  realWorkflow: "Real Workflow in Action.webp",
  cta: "Simplify Workforce and HR Operations.webp",
});

export const assetManagementWebp = systemUseCaseWebp("Assets Management", {
  businessChallenges: "Business Challenges.webp",
  whatIs: "What Is a Asset Management System.webp",
  howFormezyEnables: "How Formezy Enables It.webp",
  realWorkflow: "Real Workflow in Action.webp",
  cta: "Improve Asset Visibility and Maintenance Operations.webp",
});

export const rdDesignManagementWebp = systemUseCaseWebp("R&D & Design Management System", {
  businessChallenges: "Business Challenges-2.webp",
  whatIs: "What Is a R&D & Design Management System.webp",
  howFormezyEnables: "How Formezy Enables It-2.webp",
  realWorkflow: "Real Workflow in Action-2.webp",
  cta: "Simplify Product Development and Design Operations.webp",
});

export const supplyChainManagementWebp = systemUseCaseWebp("Supply Chain Management System", {
  businessChallenges: "Business Challenges-1.webp",
  whatIs: "What Is a Tailored Supply Chain Management System.webp",
  howFormezyEnables: "How Formezy Enables It-1.webp",
  realWorkflow: "Real Workflow in Action-1.webp",
  cta: "Bring Control to Your Supply Chain.webp",
});

export const inventoryManagementWebp = systemUseCaseWebp("Inventory Management System (1)", {
  businessChallenges: "Business Challenges.webp",
  whatIs: "What Is a Tailored Inventory Management System.webp",
  howFormezyEnables: "How Formezy Enables It.webp",
  realWorkflow: "Real Workflow in Action.webp",
  cta: "Take Control of Your Inventory.webp",
});

export const heavyManufacturingWebp = industryUseCaseWebp(
  "Heavy_manufacturing",
  "Webp",
  {
    intro: "built-for-complex-manufacturing-operations.webp",
    diagram: "built-for-complex-manufacturing-operations.webp",
    cta: "bring-structure-to-complex-manufacturing-operations.webp",
  },
);

export const discreteManufacturingWebp = industryUseCaseWebp(
  "Discrete_manufacturing",
  "Webp",
  {
    intro: "built-for-process-driven-manufacturing.webp",
    diagram: "built-for-process-driven-manufacturing.webp",
    cta: "bring-precision-to-production-stage.webp",
  },
);

export const constructionEpcWebp = industryUseCaseWebp("Construction_epc", "Webp", {
  intro: "built-for-complex-multi-stage-projects.webp",
  diagram: "built-for-complex-multi-stage-projects.webp",
  cta: "bring-control-to-every-project.webp",
});

export const serviceBasedBusinessesWebp = industryUseCaseWebp(
  "Service_based_businesses",
  "Webp",
  {
    intro: "built-for-service-driven-operations.webp",
    diagram: "built-for-service-driven-operations.webp",
    cta: "deliver-services-with-clarity-and-control.webp",
  },
);

/** Platform industry use-case pages (images in `public/images/<Industry Name>/`). */
export type IndustryPageWebp = {
  businessChallenges: string;
  whatIs: string;
  cta: string;
};

function industryPageWebp(
  folder: string,
  files: { businessChallenges: string; whatIs: string; cta: string },
): IndustryPageWebp {
  const base = (file: string) => publicAssetUrl("images", folder, file);
  return {
    businessChallenges: base(files.businessChallenges),
    whatIs: base(files.whatIs),
    cta: base(files.cta),
  };
}

export const processIndustriesWebp = industryPageWebp("Process Industries", {
  businessChallenges: "Key Challenges in Heavy Manufacturing.webp",
  whatIs: "How Formezy Brings Structure to Processes.webp",
  cta: "Bring Precision to Every Process.webp",
});

export const retailIndustryWebp = industryPageWebp("Retail Industry", {
  businessChallenges: "Key Challenges in Heavy Manufacturing.webp",
  whatIs: "Retail Operations with Formezy.webp",
  cta: "Simplify Retail. Strengthen Distribution..webp",
});

export const wholesaleIndustryWebp = industryPageWebp("Wholesale Industry", {
  businessChallenges: "Key Challenges in Heavy Manufacturing.webp",
  whatIs: "Wholesale.webp",
  cta: "Deliver Services with Clarity and Control.webp",
});

export const rentalIndustryWebp = industryPageWebp("Rental Industry", {
  businessChallenges: "Key Challenges in Heavy Manufacturing.webp",
  whatIs: "Rental.webp",
  cta: "Deliver Services with Clarity and Control.webp",
});
