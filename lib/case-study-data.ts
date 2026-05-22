const CASE_STUDY_DIR = "Case Studies";

export function caseStudyImageSrc(filename: string): string {
  return `/images/${encodeURIComponent(CASE_STUDY_DIR)}/${encodeURIComponent(filename)}`;
}

export type CaseStudy = {
  id: number;
  title: string;
  imageFile: string;
  problem: string;
  solutions: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Stage-Wise Inventory Stock Management",
    imageFile: "Stage-Wise Inventory Stock Management.webp",
    problem:
      "Stock levels were tracked across spreadsheets and disconnected tools, making it impossible to see how inventory moved through each stage of the supply chain in real time.",
    solutions: [
      "Unified stage-wise stock visibility across warehouses and sites",
      "Automated alerts when thresholds are breached at any stage",
      "Single dashboard for procurement, stores, and operations teams",
    ],
  },
  {
    id: 2,
    title: "Inventory Management with Code Tracking",
    imageFile: "Inventory management with Code tracking.webp",
    problem:
      "Teams relied on manual barcode logs and paper trails to trace items, leading to mismatches, delayed fulfillment, and no reliable audit history.",
    solutions: [
      "Scan-and-track workflows tied to every inventory movement",
      "Unique codes linked to batches, locations, and transactions",
      "Instant lookup of item history from receipt to dispatch",
    ],
  },
  {
    id: 3,
    title: "Batch & Expiry Management",
    imageFile: "Batch & Expiry Management.webp",
    problem:
      "Expiry dates and batch numbers lived in separate sheets, increasing the risk of shipping expired goods and failing compliance checks.",
    solutions: [
      "Batch-level tracking with expiry rules built into workflows",
      "FEFO/FIFO picking guidance for warehouse teams",
      "Compliance-ready reports for audits and recalls",
    ],
  },
  {
    id: 4,
    title: "Bulk Invoice Generation",
    imageFile: "Bulk Invoice Generation.webp",
    problem:
      "Finance teams spent hours creating invoices one by one from order data, with frequent errors and delays in month-end billing cycles.",
    solutions: [
      "Bulk invoice runs from approved orders and delivery notes",
      "Configurable templates aligned with tax and business rules",
      "Faster closing with fewer manual corrections",
    ],
  },
  {
    id: 5,
    title: "Multi-Format File Importing",
    imageFile: "Multi-Format File Importing.webp",
    problem:
      "Data arrived in Excel, CSV, and legacy formats from partners and branches, requiring repetitive manual imports and cleanup before it could be used.",
    solutions: [
      "Standard import pipelines for multiple file formats",
      "Validation rules that catch errors before data enters the system",
      "Mapped fields that sync directly into ERP workflows",
    ],
  },
  {
    id: 6,
    title: "Dealer & Site Stock Management",
    imageFile: "Dealer & Site Stock Management.webp",
    problem:
      "Dealer and site-level stock was invisible to headquarters, causing stockouts in some regions and excess inventory in others.",
    solutions: [
      "Dealer and site stock registers updated in near real time",
      "Transfer and replenishment workflows between locations",
      "Executive view of network-wide availability and movement",
    ],
  },
];
