import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/contact-section";

export const metadata: Metadata = {
  title: "Contato",
  description: "E-mail, Instagram, Behance e WhatsApp da Ge.",
};

export default function ContactPage() {
  return <ContactSection />;
}
