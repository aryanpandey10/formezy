import type { Metadata } from "next";
import AskEzyContent from "@/components/sections/platform/AskEzyContent";

export const metadata: Metadata = {
  title: "AskEzy Intelligence",
  description:
    "Ask. Understand. Act. AskEzy Intelligence turns your Formezy business data into instant, context-aware answers for faster decisions.",
};

export default function AskEzyPage() {
  return <AskEzyContent />;
}
