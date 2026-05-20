const DOWNLOAD_DIR = "Download";

export function downloadImageSrc(filename: string): string {
  return `/images/${encodeURIComponent(DOWNLOAD_DIR)}/${encodeURIComponent(filename)}`;
}

export const mainBrochure = {
  title: "Formezy Brochure",
  titleHighlight: "Brochure",
  tag: "Product Brochure",
  description:
    "Get a complete overview of Formezy — how businesses design, automate, and scale ERP, CRM, and operations systems on one intelligent platform. Ideal for leadership, IT, and operations teams evaluating their next system.",
  image: downloadImageSrc("Formezy_Brochure.png"),
  file: downloadImageSrc("Formezy_Brochure.png"),
  fileName: "Formezy-Brochure.png",
};

export type IndustryBrochure = {
  id: number;
  name: string;
  imageFile: string;
  description: string;
};

export const industryBrochures: IndustryBrochure[] = [
  {
    id: 1,
    name: "Solar",
    imageFile: "Formezy Solar Industry 1.png",
    description:
      "Learn how solar businesses unify project delivery, procurement, inventory, and service workflows on one platform built for scale and compliance.",
  },
  {
    id: 2,
    name: "Plastic & Rubber",
    imageFile: "Formezy Solar Industry 2.png",
    description:
      "See how plastic and rubber manufacturers manage production, quality, and supply chain operations with connected, real-time visibility.",
  },
  {
    id: 3,
    name: "Metal Processing",
    imageFile: "Formezy Solar Industry 3.png",
    description:
      "Explore workflows for metal processing — from job planning and shop-floor execution to inventory, billing, and customer coordination.",
  },
  {
    id: 4,
    name: "Casting & Forging",
    imageFile: "Formezy Solar Industry 4.png",
    description:
      "Discover how casting and forging units digitize orders, heat treatment, QC, and dispatch with systems tailored to heavy manufacturing.",
  },
  {
    id: 5,
    name: "Garment & Textile",
    imageFile: "Formezy Solar Industry 5.png",
    description:
      "Understand how garment and textile businesses track styles, production batches, approvals, and distribution on a single platform.",
  },
  {
    id: 6,
    name: "Engineering",
    imageFile: "Formezy Solar Industry 6.png",
    description:
      "Review how engineering firms manage projects, BOMs, procurement, timesheets, and billing with flexible, role-based workflows.",
  },
  {
    id: 7,
    name: "Food & Beverage",
    imageFile: "Formezy Solar Industry 7.png",
    description:
      "Learn how F&B companies handle batch production, expiry tracking, distribution, and compliance without spreadsheet chaos.",
  },
  {
    id: 8,
    name: "Chemical & Pharma",
    imageFile: "Formezy Solar Industry 8.png",
    description:
      "See how chemical and pharma operations manage formulations, QC, regulatory traceability, and inventory with governed processes.",
  },
];

export function industryBrochureImageSrc(file: string): string {
  return downloadImageSrc(file);
}

export function industryDownloadHref(file: string): string {
  return downloadImageSrc(file);
}
