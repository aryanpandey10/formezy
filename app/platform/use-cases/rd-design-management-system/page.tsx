import type { Metadata } from "next";
import RdDesignManagementContent from "@/components/sections/platform/RdDesignManagementContent";

export const metadata: Metadata = {
  title: "R&D & Design Management System | Formezy",
  description:
    "Build a tailored R&D and design management system to coordinate product development, revisions, version control, approvals, and operational reviews.",
};

export default function RdDesignManagementPage() {
  return <RdDesignManagementContent />;
}
