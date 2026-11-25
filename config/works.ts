/** Drawing used while a work has no images yet. */
export type CoverMotif = "daisy" | "letters" | "shapes" | "grid";

/** Color token used by the placeholder cover. */
export type CoverTone = "pollen" | "blush" | "leaf" | "seed" | "stem";

export type WorkCategoryKey = "identidade" | "ilustracao" | "editorial" | "digital";

export interface WorkCategory {
  key: WorkCategoryKey | "todos";
  /** Full name, read by screen readers when the filter changes. */
  name: string;
  /** Short name written on the filter button. */
  label: string;
}

export interface Work {
  /** Used in the address: /trabalhos/#<slug>. */
  slug: string;
  title: string;
  /** Line under the title (type of work, client). */
  subtitle: string;
  categories: WorkCategoryKey[];
  year: number;
  description: string;
  tools: string[];
  /**
   * Images in `public/trabalhos/`, e.g. "/trabalhos/cafe-1.jpg". The first is
   * the cover. While the list is empty, a drawn placeholder is shown.
   */
  images: string[];
  cover: { motif: CoverMotif; tone: CoverTone };
  /** Shown in the "Trabalhos selecionados" block of the home page. */
  featured?: boolean;
}

/** Filters of the "Trabalhos" page. The first one shows everything. */
export const WORK_CATEGORIES: WorkCategory[] = [
  { key: "todos", name: "Todos os trabalhos", label: "Tudo" },
  { key: "identidade", name: "Identidade visual", label: "Identidade" },
  { key: "ilustracao", name: "Ilustração", label: "Ilustração" },
  { key: "editorial", name: "Design editorial", label: "Editorial" },
  { key: "digital", name: "Digital e social media", label: "Digital" },
];

/**
 * Works shown in the site. These are examples to be replaced by Ge's real
 * projects: keep the shape and change the texts and images.
 */
export const WORKS: Work[] = [
  {
    slug: "identidade-cafeteria",
    title: "Identidade de cafeteria",
    subtitle: "Identidade visual",
    categories: ["identidade"],
    year: 2026,
    description:
      "Espaço para contar o projeto: quem é o cliente, qual era o desafio, as escolhas de cor e tipografia e como a marca ficou aplicada no dia a dia.",
    tools: ["Illustrator", "Photoshop"],
    images: [],
    cover: { motif: "letters", tone: "pollen" },
    featured: true,
  },
  {
    slug: "serie-margaridas",
    title: "Série Margaridas",
    subtitle: "Ilustração autoral",
    categories: ["ilustracao"],
    year: 2026,
    description:
      "Espaço para contar a ideia por trás da série, a técnica usada e o que cada ilustração representa.",
    tools: ["Procreate"],
    images: [],
    cover: { motif: "daisy", tone: "blush" },
    featured: true,
  },
  {
    slug: "capa-de-livro",
    title: "Capa de livro",
    subtitle: "Design editorial",
    categories: ["editorial"],
    year: 2025,
    description:
      "Espaço para contar a proposta da capa: o livro, a ilustração, a tipografia e o mockup final.",
    tools: ["InDesign", "Photoshop"],
    images: [],
    cover: { motif: "shapes", tone: "leaf" },
    featured: true,
  },
  {
    slug: "posts-para-redes",
    title: "Posts para redes",
    subtitle: "Social media",
    categories: ["digital"],
    year: 2025,
    description:
      "Espaço para contar a linha visual dos posts, o público e os resultados da campanha.",
    tools: ["Figma", "Canva"],
    images: [],
    cover: { motif: "grid", tone: "seed" },
  },
  {
    slug: "embalagem-artesanal",
    title: "Embalagem artesanal",
    subtitle: "Identidade e embalagem",
    categories: ["identidade"],
    year: 2025,
    description:
      "Espaço para contar como a embalagem foi pensada: formato, materiais, rótulo e impressão.",
    tools: ["Illustrator"],
    images: [],
    cover: { motif: "daisy", tone: "pollen" },
  },
  {
    slug: "serie-de-posteres",
    title: "Série de pôsteres",
    subtitle: "Ilustração e tipografia",
    categories: ["ilustracao", "editorial"],
    year: 2025,
    description:
      "Espaço para contar o tema dos pôsteres, a pesquisa de referências e a composição.",
    tools: ["Illustrator", "Procreate"],
    images: [],
    cover: { motif: "letters", tone: "blush" },
  },
  {
    slug: "zine-autoral",
    title: "Zine autoral",
    subtitle: "Design editorial",
    categories: ["editorial"],
    year: 2024,
    description:
      "Espaço para contar a história da zine, o grid das páginas e a escolha do papel.",
    tools: ["InDesign"],
    images: [],
    cover: { motif: "grid", tone: "leaf" },
  },
  {
    slug: "interface-de-app",
    title: "Interface de app",
    subtitle: "UI design",
    categories: ["digital"],
    year: 2024,
    description:
      "Espaço para contar o problema que o app resolve, o fluxo das telas e o guia visual criado.",
    tools: ["Figma"],
    images: [],
    cover: { motif: "shapes", tone: "stem" },
  },
];
