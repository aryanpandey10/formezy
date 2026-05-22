const DOWNLOAD_DIR = "Download";

export function downloadAssetSrc(filename: string): string {
  return `/images/${encodeURIComponent(DOWNLOAD_DIR)}/${encodeURIComponent(filename)}`;
}

export const mainBrochure = {
  title: "Formezy Brochure",
  titleHighlight: "Brochure",
  tag: "Product Brochure",
  description:
    "Get a complete overview of Formezy — how businesses design, automate, and scale ERP, CRM, and operations systems on one intelligent platform. Ideal for leadership, IT, and operations teams evaluating their next system.",
  image: downloadAssetSrc("Formezy Brochure.webp"),
  file: downloadAssetSrc("Formezy Main.pdf"),
  fileName: "Formezy Main.pdf",
};

export type IndustryBrochure = {
  id: number;
  name: string;
  imageFile: string;
  pdfFile: string;
  description: string;
};

export const industryBrochures: IndustryBrochure[] = [
  {
    id: 1,
    name: "Solar",
    imageFile: "Solar Industry.webp",
    pdfFile: "Formezy Solar Industry 2026 V1_compressed.pdf",
    description:
      "Learn how solar businesses unify project delivery, procurement, inventory, and service workflows on one platform built for scale and compliance.",
  },
  {
    id: 2,
    name: "Plastic & Rubber",
    imageFile: "Plastic & Rubber Industry.webp",
    pdfFile: "Formezy Plastic Leaflet 2026 V1_compressed.pdf",
    description:
      "See how plastic and rubber manufacturers manage production, quality, and supply chain operations with connected, real-time visibility.",
  },
  {
    id: 3,
    name: "Metal Processing",
    imageFile: "Metal Processing Industry.webp",
    pdfFile: "Formezy Metal Processing Leaflet 2026 V1_compressed.pdf",
    description:
      "Explore workflows for metal processing — from job planning and shop-floor execution to inventory, billing, and customer coordination.",
  },
  {
    id: 4,
    name: "Casting & Forging",
    imageFile: "Casting & Forging Industry.webp",
    pdfFile: "Formezy Foundry Leaflet 2026 V1_compressed.pdf",
    description:
      "Discover how casting and forging units digitize orders, heat treatment, QC, and dispatch with systems tailored to heavy manufacturing.",
  },
  {
    id: 5,
    name: "Garment & Textile",
    imageFile: "Garment & Textile Industry.webp",
    pdfFile: "Formezy Garment & Textile Leaflet 2026 V1_compressed.pdf",
    description:
      "Understand how garment and textile businesses track styles, production batches, approvals, and distribution on a single platform.",
  },
  {
    id: 6,
    name: "Engineering",
    imageFile: "Engineering Industry.webp",
    pdfFile: "Formezy Engineering Leaflet 2026 V1_compressed.pdf",
    description:
      "Review how engineering firms manage projects, BOMs, procurement, timesheets, and billing with flexible, role-based workflows.",
  },
  {
    id: 7,
    name: "Food & Beverage",
    imageFile: "Food & Beverage Industry.webp",
    pdfFile: "Formezy Food Industry 2026 V1 (1)_compressed.pdf",
    description:
      "Learn how F&B companies handle batch production, expiry tracking, distribution, and compliance without spreadsheet chaos.",
  },
  {
    id: 8,
    name: "Chemical & Pharma",
    imageFile: "Chemical & Pharma Industry.webp",
    pdfFile: "Formezy Chemical Leaflet 2026 V1_compressed.pdf",
    description:
      "See how chemical and pharma operations manage formulations, QC, regulatory traceability, and inventory with governed processes.",
  },
  {
    id: 9,
    name: "Finance",
    imageFile: "Finance Industry.webp",
    pdfFile: "Formezy _ Finance.pdf",
    description:
      "Explore how finance teams streamline approvals, reporting, and operational coordination with workflow-driven systems on Formezy.",
  },
];

export function industryBrochureImageSrc(file: string): string {
  return downloadAssetSrc(file);
}

export function industryBrochurePdfHref(file: string): string {
  return downloadAssetSrc(file);
}
