import type { Metadata } from "next";
import { AboutSection } from "@/components/about/about-section";
import { PageHeader } from "@/components/page-header";
import { PageTransition } from "@/components/page-transition";
import { ABOUT } from "@/config/about";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem é a Ge, o que a inspira e o que ela faz fora da tela.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader title={ABOUT.intro.title} lead={ABOUT.intro.lead} />
      <AboutSection />
    </PageTransition>
  );
}
