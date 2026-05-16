import type { Metadata } from "next";
import InventoryManagementContent from "@/components/sections/platform/InventoryManagementContent";

export const metadata: Metadata = {
  title: "Inventory Management System | Formezy",
  description:
    "Build a tailored CRM system that matches how your sales, success and marketing teams actually work.",
};

export default function InventoryManagementPage() {
  return <InventoryManagementContent />;
}
