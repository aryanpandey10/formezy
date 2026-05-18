import type { Metadata } from "next";
import InventoryManagementContent from "@/components/sections/platform/InventoryManagementContent";

export const metadata: Metadata = {
  title: "Inventory Management System | Formezy",
  description:
    "Track every SKU across every location in real time with automated reordering and multi-warehouse rules.",
};

export default function InventoryManagementPage() {
  return <InventoryManagementContent />;
}
