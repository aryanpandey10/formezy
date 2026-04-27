export type NavDropdownItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavDropdownItem[];
};

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
      },
    ],
  },
  {
    label: "Use Cases",
    href: "/platform/use-cases",
  },
  {
    label: "Integrations",
    href: "/integrations",
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
        label: "Videos",
        href: "/resources/videos",
        description: "Product walkthroughs and use cases.",
      },
    ],
  },
  {
    label: "Pricing",
    href: "#",
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
    ],
  },
  {
    label: "Contact",
    href: "/contact",
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
      { label: "Leadership", href: "#" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Book Demo", href: "#demo" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Case Studies", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Whitepapers", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Downloads", href: "#" },
      { label: "Videos", href: "/resources/videos" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform/overview" },
      { label: "How It Works", href: "/platform/how-it-works" },
      { label: "Capabilities", href: "/platform/capabilities" },
      { label: "Features", href: "/platform/features" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Tailored Systems", href: "/platform/use-cases" },
      { label: "Business Systems", href: "/platform/use-cases" },
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
  companyName: "Safal Infosoft Pvt. Ltd.",
  address:
    "Shivalik Corporate Park, B/204-205, 132 Feet Ring Rd, Shivranjani, Char Rasta, Jodhpur Village, Ahmedabad, Gujarat 380015",
  email: "hello@safalinfosoft.com",
  copyright: "© Copyright 2026. All rights reserved Formezy.",
};

export const trustedLogos = [
  "Acme Corp",
  "Globex",
  "Umbrella",
  "Initech",
  "Hooli",
  "Soylent",
  "Vehement",
  "Pied Piper",
  "Stark",
  "Wayne",
];

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
