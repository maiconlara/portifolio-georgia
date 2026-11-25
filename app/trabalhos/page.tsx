import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { WorkBrowser } from "@/components/works/work-browser";
import { WORK_CATEGORIES, WORKS } from "@/config/works";

export const metadata: Metadata = {
  title: "Trabalhos",
  description: "Identidade visual, ilustração, design editorial e digital.",
};

export default function WorksPage() {
  return (
    <>
      <PageIntro
        kicker="Arquivo completo"
        title="Trabalhos"
        lead="Cada envelope guarda um tipo de trabalho. Abra um e clique nas peças para ver tudo de perto."
        icon="palette"
      />
      <div className="wrap">
        <WorkBrowser categories={WORK_CATEGORIES} works={WORKS} />
      </div>
    </>
  );
}
