export type NavSubLink = { label: string; href: string };

export type NavDropdownItem = {
  label: string;
  href: string;
  description?: string;
  /** Nested links (e.g. Features → AskEzy) */
  children?: NavSubLink[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavDropdownItem[];
};

/** All platform feature pages — used in Platform → Features nav dropdown. */
export const platformFeatureNavChildren: NavSubLink[] = [
  { label: "AskEzy Intelligence", href: "/platform/features/ask-ezy" },
  { label: "Developer Studio", href: "/platform/features/developer-studio" },
  { label: "Logic Builder", href: "/platform/features/logic-builder" },
  { label: "Workflow Automation", href: "/platform/features/workflow-automation" },
  // {
  //   label: "Integrations & Connectors",
  //   href: "/platform/integrations-connectors",
  // },
  { label: "Agentic Workflows", href: "/platform/features/agentic-workflows" },
  {
    label: "Reporting & Dashboards",
    href: "/platform/features/reporting-dashboards",
  },
  { label: "Mobile Access", href: "/platform/features/mobile-access" },
  {
    label: "Security & Compliance",
    href: "/platform/features/security-compliance",
  },
];

export const navLinks: NavItem[] = [
  {
    label: "Platform",
    href: "/platform/overview",
    children: [
      {
        label: "Overview",
        href: "/platform/overview",
        description: "Run your business on one intelligent platform.",
      },
      {
        label: "How It Works",
        href: "/platform/how-it-works",
        description: "From idea to execution, seamlessly.",
      },
      {
        label: "Capabilities",
        href: "/platform/capabilities",
        description: "Built for modern business operations.",
      },
      {
        label: "Features",
        href: "/platform/features",
        description: "Powerful features for intelligent operations.",
        children: platformFeatureNavChildren,
      },
    ],
  },
  {
    label: "Use Cases",
    href: "/platform/use-cases",
  },
  {
    label: "Integrations",
    href: "/platform/integrations-connectors",
  },
  {
    label: "Resources",
    href: "/resources/blogs",
    children: [
      {
        label: "Blogs",
        href: "/resources/blogs",
        description: "Ideas, trends and practical know-how.",
      },
      {
        label: "Case Studies",
        href: "/resources/case-studies",
        description: "Real-world success stories.",
      },
      {
        label: "Downloads",
        href: "/resources/downloads",
        description: "Product guides and resources.",
      },
      {
        label: "Videos",
        href: "/resources/videos",
        description: "Product walkthroughs and use cases.",
      },
    ],
  },
  {
    label: "About",
    href: "/about/company",
    children: [
      {
        label: "Company",
        href: "/about/company",
        description: "Enterprise systems, reimagined.",
      },
      {
        label: "Safal Infosoft",
        href: "/about/safal-infosoft",
        description: "Our parent technology group.",
      },
      // {
      //   label: "Leadership",
      //   href: "/about/leadership",
      //   description: "The minds behind the platform.",
      // },
      {
        label: "Careers",
        href: "/about/careers",
        description: "Join us in building the future.",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Get in touch with our team.",
      },
    ],
  },
];

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "About",
    links: [
      { label: "Company", href: "/about/company" },
      { label: "Safal Infosoft", href: "/about/safal-infosoft" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Book Demo", href: "#demo" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Downloads", href: "/resources/downloads" },
      { label: "Videos", href: "/resources/videos" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform/overview" },
      { label: "How It Works", href: "/platform/how-it-works" },
      { label: "Capabilities", href: "/platform/capabilities" },
      { label: "All Features", href: "/platform/features" },
      ...platformFeatureNavChildren,
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Business Systems", href: "/platform/use-cases" },
      { label: "Document Management", href: "/platform/use-cases/document-management-system" },
      { label: "Inventory Management", href: "/platform/use-cases/inventory-management-system" },
      { label: "Supply Chain", href: "/platform/use-cases/supply-chain-management-system" },
      { label: "Tenant Management", href: "/platform/use-cases/tenant-management-system" },
      { label: "Task Management", href: "/platform/use-cases/task-management-system" },
      { label: "Tailored Systems", href: "/platform/use-cases" },
    ],
  },
  {
    title: "Industry Solutions",
    links: [
      { label: "Heavy Manufacturing", href: "/platform/use-cases" },
      { label: "Process Industries", href: "/platform/use-cases" },
      { label: "Discrete Manufacturing", href: "/platform/use-cases" },
      { label: "Retail & Wholesale", href: "/platform/use-cases" },
      { label: "Construction & EPC", href: "/platform/use-cases" },
      { label: "Service based Industries", href: "/platform/use-cases" },
    ],
  },
];

export const footerMeta = {
  companyName: "Safal Infosoft Ltd.",
  address:
    "Shivalik Corporate Park, B/204-205, 132 Feet Ring Rd, Shivranjani, Char Rasta, Jodhpur Village, Ahmedabad, Gujarat 380015",
  email: "hello@safalinfosoft.com",
  /** India HQ — display & tel link */
  phoneDisplay: "+91 97370 45522",
  phoneTel: "+919737045522",
  copyright: "© Copyright 2026. All rights reserved Formezy.",
};

export const footerAppLinks = {
  appStore:
    "https://apps.apple.com/in/app/formezy/id6478380748",
  playStore:
    "https://play.google.com/store/apps/details?id=com.datanote.formezy",
};

/** Self-service meeting scheduling — not part of any form validation. */
export const calendlyMeetingUrl =
  "https://calendly.com/hellosafalinfosoft/30min";

export const footerSocialLinks = {
  instagram: "https://www.instagram.com/formezy/",
  linkedin:
    "https://www.linkedin.com/company/safalinfosoftpvtltd",
};

export type ContactOffice = {
  id: string;
  title: string;
  lines: string[];
  phoneDisplay: string;
  phoneTel: string;
  mapQuery: string;
};

export const contactOffices: ContactOffice[] = [
  {
    id: "in",
    title: "India — Headquarters",
    lines: [
      "Shivalik Corporate Park, B/204-205, 132 Feet Ring Rd, Shivranjani, Char Rasta, Jodhpur Village, Ahmedabad, Gujarat 380015",
    ],
    phoneDisplay: footerMeta.phoneDisplay,
    phoneTel: footerMeta.phoneTel,
    mapQuery: "Shivalik Corporate Park Ahmedabad Gujarat",
  },
  {
    id: "ae",
    title: "UAE Office",
    lines: [
      "Office No. 25, 13th Floor, Al Saqar Bussiness Tower, Nr. Future Museum, Sheikh Zayed Road, Dubai, UAE",
    ],
    phoneDisplay: "+971 56 343 5362",
    phoneTel: "+971563435362",
    mapQuery: "Al Saqar Business Tower Sheikh Zayed Road Dubai",
  },
  {
    id: "us",
    title: "USA Office",
    lines: ["5511, Mercier Street, Lewis Center, Ohio 43035"],
    phoneDisplay: "+1 (614) 999-2286",
    phoneTel: "+16149992286",
    mapQuery: "5511 Mercier Street Lewis Center Ohio 43035",
  },
];

/** Directory under `public/images/` holding client logo WebP assets. */
const TRUSTED_BY_ENTERPRISES_DIR = "Trusted by Enterprises";

export type TrustedEnterpriseLogo = {
  /** Accessible / visible company name */
  name: string;
  /** Filename only; must be `.webp` under `public/images/${TRUSTED_BY_ENTERPRISES_DIR}/` */
  file: string;
};

/**
 * Client logos for the trusted-by marquee — WebP only.
 * Ordered: primary enterprise list (where a WebP exists), then other WebP logos in the same folder.
 * (`Inter agro.webp` is omitted; `INTER AGRO GROUP.webp` is used instead.)
 */
export const trustedEnterpriseLogos: TrustedEnterpriseLogo[] = [
  { name: "INTER AGRO GROUP", file: "INTER AGRO GROUP.webp" },
  { name: "AKAR INDUSTRIES", file: "AKAR INDUSTRIES.webp" },
  { name: "Alpine Lifecare LLP", file: "Alpine Lifecare LLP.webp" },
  { name: "ANNKOOT AGRO FOOD PVT. LTD.", file: "ANNKOOT AGRO FOOD PVT. LTD..webp" },
  { name: "Armstrong Machinery LLP", file: "Armstrong Machinery LLP.webp" },
  { name: "BHAGWATI FILTERS PVT LTD", file: "BHAGWATI FILTERS PVT LTD.webp" },
  { name: "BLUMET TUBES PRIVATE LIMITED", file: "BLUMET TUBES PRIVATE LIMITED.webp" },
  { name: "CONQUEST ENGINEERING PRIVATE LIMITED", file: "CONQUEST ENGINEERING PRIVATE LIMITED.webp" },
  { name: "DORFNER-20 MICRONS PRIVATE LIMITED", file: "DORFNER-20 MICRONS PRIVATE LIMITED.webp" },
  {
    name: "Elica PB Whirlpool Kitchen Appliances Private Limited",
    file: "Elica PB Whirlpool Kitchen Appliances Private Limited.webp",
  },
  {
    name: "ETHICAL ENERGY PETROCHEM STRATEGIES PRIVATE LIMITED",
    file: "ETHICAL ENERGY PETROCHEM STRATEGIES PRIVATE LIMITED.webp",
  },
  { name: "FIBCORP POLYWEAVE PRIVATE LIMITED", file: "FIBCORP POLYWEAVE PRIVATE LIMITED.webp" },
  { name: "Indian Inovatix Limited", file: "Indian Inovatix Limited.webp" },
  { name: "JAI INDUSTRIES", file: "JAI INDUSTRIES.webp" },
  { name: "MONIT PAPER SALES AGENCY", file: "MONIT PAPER SALES AGENCY.webp" },
  { name: "MULTIPLAST POLYMER PRIVATE LIMITED", file: "MULTIPLAST POLYMER PRIVATE LIMITED.webp" },
  {
    name: "NAVJIVAN ROLLER FLOUR & PULSE MILLS PVT. LTD.",
    file: "NAVJIVAN ROLLER FLOUR & PULSE MILLS PVT. LTD..webp",
  },
  {
    name: "Parishi Construction",
    file: "Parishi Construction and Equipment Rental Services.webp",
  },
  { name: "PEP FOODS", file: "PEP FOODS.webp" },
  { name: "PURNIMA ENTERPRISE", file: "PURNIMA ENTERPRISE.webp" },
  { name: "SABAR PUMPS PVT.LTD", file: "SABAR PUMPS PVT.LTD.webp" },
  { name: "Tent Studio", file: "Tent Studio.webp" },
];

export function trustedEnterpriseLogoSrc(file: string): string {
  return `/images/${encodeURIComponent(TRUSTED_BY_ENTERPRISES_DIR)}/${encodeURIComponent(file)}`;
}

export const integrationsList = [
  { name: "Google Sheets", short: "GS" },
  { name: "G Suite", short: "G" },
  { name: "Oracle", short: "OR" },
  { name: "Outlook", short: "OL" },
  { name: "SAP", short: "SAP" },
  { name: "Office 365", short: "365" },
  { name: "WordPress", short: "WP" },
  { name: "WooCommerce", short: "Woo" },
];
