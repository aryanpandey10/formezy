import type { Metadata } from "next";
import SafalContent from "@/components/sections/about/SafalContent";

export const metadata: Metadata = {
  title: "Safal Infosoft | Formezy",
  description:
    "Safal Infosoft is a technology company powering enterprise operations across industries for over 19 years — and the company behind Formezy.",
};

export default function SafalInfosoftPage() {
  return <SafalContent />;
}
