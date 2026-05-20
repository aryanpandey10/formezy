import type { Metadata } from "next";
import DeveloperStudioContent from "@/components/sections/platform/DeveloperStudioContent";

export const metadata: Metadata = {
  title: "Developer Studio",
  description:
    "Build without limits and customize without complexity. Formezy Developer Studio — visual workflows, low-code logic, and systems that fit your business.",
};

export default function DeveloperStudioPage() {
  return <DeveloperStudioContent />;
}
