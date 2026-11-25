import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { WorkBrowser } from "@/components/works/work-browser";
import { WORK_CATEGORIES, WORKS } from "@/config/works";

export const metadata: Metadata = {
  title: "Trabalhos",
  description: "Identidade visual, ilustração, design editorial e digital.",
};

export default function WorksPage() {
  return (
    <>
      <PageHeader
        title="Trabalhos"
        lead="Identidade visual, ilustração, design editorial e digital. Clique em um trabalho para ver todas as imagens."
      />
      <div className="wrap">
        <WorkBrowser categories={WORK_CATEGORIES} works={WORKS} />
      </div>
    </>
  );
}
