import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/contact-section";
import { PageTransition } from "@/components/page-transition";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contato",
  description: "E-mail, Instagram, Behance e WhatsApp da Ge.",
  path: "/contato/",
});

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactSection />
    </PageTransition>
  );
}
