import type { Metadata } from "next";
import ThirdPartyApiContent from "@/components/sections/integrations/ThirdPartyApiContent";

export const metadata: Metadata = {
  title: "Third-Party Platforms & APIs Integration | Formezy",
  description:
    "Integrate B2B enterprise software, custom APIs, ERP modules, communication hooks, and cross-system data triggers with Formezy EAP.",
};

export default function ThirdPartyApiPage() {
  return <ThirdPartyApiContent />;
}
