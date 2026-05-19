import type { Metadata } from "next";
import QualityControlContent from "@/components/sections/platform/QualityControlContent";

export const metadata: Metadata = {
  title: "Quality Control Management System | Formezy",
  description:
    "Build a tailored quality control management system to standardize quality inspections, validation, corrective actions, and traceability workflows.",
};

export default function QualityControlPage() {
  return <QualityControlContent />;
}
