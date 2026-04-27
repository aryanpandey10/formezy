import type { Metadata } from "next";
import UseCasesContent from "@/components/sections/platform/UseCasesContent";

export const metadata: Metadata = {
  title: "Use Cases | Formezy",
  description:
    "Built for every business use case — ERP, CRM, HR, manufacturing, healthcare, finance, retail, supply chain and more.",
};

export default function UseCasesPage() {
  return <UseCasesContent />;
}
