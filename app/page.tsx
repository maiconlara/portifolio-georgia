import { FeaturedWorks } from "@/components/home/featured-works";
import { HeroSection } from "@/components/home/hero-section";
import { MarqueeRibbon } from "@/components/home/marquee-ribbon";
import { SummaryList } from "@/components/home/summary-list";
import { HOME } from "@/config/home";
import { NAV } from "@/config/site";
import { WORKS } from "@/config/works";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeRibbon words={HOME.marquee} />
      <SummaryList title={HOME.summaryTitle} pages={NAV.slice(1)} />
      <FeaturedWorks title={HOME.featuredTitle} works={WORKS.filter((work) => work.featured).slice(0, 3)} />
    </>
  );
}
