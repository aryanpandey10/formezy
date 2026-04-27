import type { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Formezy",
  description:
    "Have a question, need a solution, or want to explore Formezy? Reach out and our team will get back to you with the right direction.",
};

export default function ContactPage() {
  return <ContactContent />;
}
