import type { Metadata } from "next";
import { AboutSection } from "@/components/about/about-section";
import { PageIntro } from "@/components/page-intro";
import { ABOUT } from "@/config/about";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem é a Ge, o que a inspira e os seus humores.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        kicker={ABOUT.intro.kicker}
        title={
          <>
            Sobre <em>mim</em>
          </>
        }
        lead={ABOUT.intro.lead}
        icon="person"
      />
      <AboutSection />
    </>
  );
}
