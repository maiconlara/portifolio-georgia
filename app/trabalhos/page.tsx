import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PageTransition } from "@/components/page-transition";
import { WorkBrowser } from "@/components/works/work-browser";
import { WORK_CATEGORIES, WORKS } from "@/config/works";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Trabalhos",
  description: "Identidade visual, ilustração, design editorial e digital.",
  path: "/trabalhos/",
});

export default function WorksPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Trabalhos"
        lead="Identidade visual, ilustração, design editorial e digital. Clique em um trabalho para ver todas as imagens."
      />
      <div className="wrap">
        <WorkBrowser categories={WORK_CATEGORIES} works={WORKS} />
      </div>
    </PageTransition>
  );
}
