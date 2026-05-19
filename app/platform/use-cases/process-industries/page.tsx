import type { Metadata } from "next";
import ProcessIndustriesContent from "@/components/sections/platform/ProcessIndustriesContent";

export const metadata: Metadata = {
  title: "Process Manufacturing Operations | Formezy",
  description:
    "Standardize, monitor, and optimize batch production, quality control, and compliance across chemical, pharma, food & beverage, and paper industries.",
};

export default function ProcessIndustriesPage() {
  return <ProcessIndustriesContent />;
}
