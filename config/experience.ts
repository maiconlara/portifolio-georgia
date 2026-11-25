export interface Job {
  company: string;
  role: string;
  /** Year the job started, shown in large type next to it. */
  startYear: number;
  period: string;
  /** Length of the period, e.g. "1 ano e 2 meses". */
  duration: string;
  /** Format and place, e.g. "Híbrido" and "Curitiba". */
  tags: string[];
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Course {
  title: string;
  school: string;
  period: string;
  note?: string;
}

export interface Language {
  name: string;
  level: string;
}

/**
 * Curriculum shown in the "Experiência" page. These are examples to be
 * replaced by Ge's real history, most recent first.
 */
export const EXPERIENCE = {
  intro: {
    title: "Experiência",
    lead: "Onde trabalhei, o que estudei e as ferramentas que uso, do papel ao digital.",
  },
  jobsTitle: "Onde trabalhei",
  jobs: [
    {
      company: "Estúdio exemplo",
      role: "Designer gráfica",
      startYear: 2025,
      period: "mar/2025 até hoje",
      duration: "1 ano e 8 meses",
      tags: ["Híbrido", "Curitiba"],
      description:
        "Espaço para resumir o trabalho: tipo de cliente, projetos e responsabilidades.",
      highlights: ["Identidades visuais para marcas locais", "Peças para redes sociais"],
    },
    {
      company: "Agência exemplo",
      role: "Estagiária de design",
      startYear: 2024,
      period: "fev/2024 a fev/2025",
      duration: "1 ano",
      tags: ["Presencial", "Curitiba"],
      description:
        "Espaço para resumir o estágio: o que aprendeu, com quem trabalhou e o que entregou.",
      highlights: ["Apoio em campanhas", "Diagramação de materiais impressos"],
    },
    {
      company: "Freelance",
      role: "Identidade visual e ilustração",
      startYear: 2023,
      period: "2023 até hoje",
      duration: "3 anos",
      tags: ["Remoto"],
      description:
        "Espaço para contar os projetos independentes e o tipo de cliente que procura a Ge.",
      highlights: ["Logotipos e paletas", "Ilustrações sob encomenda"],
    },
  ] satisfies Job[],
  skillsTitle: "Ferramentas e habilidades",
  /** Each group is read as one sentence: tool names keep their capitals, the rest is lowercase. */
  skills: [
    { title: "Design", items: ["Figma", "Illustrator", "Photoshop", "InDesign"] },
    { title: "Ilustração", items: ["Procreate", "aquarela", "nanquim", "colagem"] },
    { title: "Movimento", items: ["After Effects", "CapCut"] },
    { title: "Identidade", items: ["Logotipo", "paleta", "tipografia", "manual de marca"] },
    { title: "Editorial", items: ["Grid", "diagramação", "capas", "zines"] },
    { title: "Digital", items: ["Social media", "UI design", "mockups"] },
  ] satisfies SkillGroup[],
  educationTitle: "Formação",
  education: [
    {
      title: "Design",
      school: "Universidade exemplo",
      period: "2022 a 2026",
      note: "Graduação em andamento",
    },
    {
      title: "Curso livre de ilustração",
      school: "Escola exemplo",
      period: "2023",
    },
  ] satisfies Course[],
  languagesTitle: "Idiomas",
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário" },
  ] satisfies Language[],
} as const;
