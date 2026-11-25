export interface Stat {
  value: string;
  label: string;
}

/** Texts of the "Sobre" page. Examples to be replaced by Ge's own words. */
export const ABOUT = {
  intro: {
    kicker: "Quem sou",
    title: "Sobre mim",
    lead: "Designer em flor: metade cor e tipografia, metade rabisco e papel.",
  },
  photoCaption: "essa sou eu :)",
  quote:
    "Gosto de design que dá vontade de guardar, como carta bonita que a gente relê.",
  paragraphs: [
    "Espaço para a Ge contar a própria história: como chegou no design, o que mais gosta de fazer e o que procura nos próximos projetos.",
    "Um segundo parágrafo pode falar do jeito de trabalhar, das referências e do que a inspira fora da tela.",
  ],
  stats: [
    { value: "3 anos", label: "criando identidades e ilustrações" },
    { value: "20+", label: "projetos entregues" },
    { value: "12", label: "ferramentas no dia a dia" },
  ] satisfies Stat[],
  hobbiesTitle: "Fora da tela",
  hobbies: ["Margaridas", "Papelaria", "Tatuagem", "Música", "Brechó", "Cartas à mão"],
} as const;
