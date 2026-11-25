import { FeaturedWorks } from "@/components/home/featured-works";
import { HeroSection } from "@/components/home/hero-section";
import { PageTransition } from "@/components/page-transition";
import { HOME } from "@/config/home";
import { WORKS } from "@/config/works";

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
