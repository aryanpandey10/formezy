import type { Metadata } from "next";
import ServiceBasedContent from "@/components/sections/platform/ServiceBasedContent";

export const metadata: Metadata = {
  title: "Service-Based Businesses operations | Formezy",
  description:
    "Deliver client projects, manage tasks, coordinate remote service operations, automate customer updates, and centralize approvals for service-driven operations.",
};

export default function ServiceBasedPage() {
  return <ServiceBasedContent />;
}
