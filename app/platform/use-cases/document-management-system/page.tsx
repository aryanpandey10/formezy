import type { Metadata } from "next";
import DocumentManagementSystem from "@/components/sections/platform/DocumentManagementSystem";

export const metadata: Metadata = {
  title: "Document Management System | Formezy",
  description:
    "Build a tailored CRM system that matches how your sales, success and marketing teams actually work.",
};

export default function TailoredCrmPage() {
  return <DocumentManagementSystem />;
}
