import type { Metadata } from "next";
import { FeaturedWorks } from "@/components/home/featured-works";
import { HeroSection } from "@/components/home/hero-section";
import { PageTransition } from "@/components/page-transition";
import { HOME } from "@/config/home";
import { SITE } from "@/config/site";
import { WORKS } from "@/config/works";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <FeaturedWorks
        title={HOME.featuredTitle}
        allWorksLabel={HOME.allWorksLabel}
        works={WORKS.filter((work) => work.featured).slice(0, 3)}
      />
    </PageTransition>
  );
}
