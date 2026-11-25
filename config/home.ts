export interface FloatingTag {
  label: string;
  /** Material Symbols name. */
  icon: string;
  /** Position around the photo, as CSS inset values. */
  position: { top?: string; right?: string; bottom?: string; left?: string };
  /** Delay of the float animation, so the tags do not move together. */
  floatDelay: string;
  /** Slight rotation, like a sticker. */
  tilt: string;
}

/** Texts of the home page. */
export const HOME = {
  issue: ["Portfólio 2026", "Design e ilustração", "Feito à mão e no digital"],
  greeting: "ou só Ge",
  intro:
    "Designer que ama cor, tipografia e um bom rabisco. Crio identidades visuais, ilustrações e peças editoriais com o cuidado de quem escreve uma carta à mão.",
  primaryCta: { label: "Ver trabalhos", href: "/trabalhos/" },
  secondaryCta: { label: "Falar comigo", href: "/contato/" },
  stampLabel: "Correio da Ge",
  floatingTags: [
    {
      label: "Identidade visual",
      icon: "verified",
      position: { top: "6%", left: "-14%" },
      floatDelay: "0.2s",
      tilt: "-6deg",
    },
    {
      label: "Ilustração",
      icon: "brush",
      position: { top: "40%", right: "-11%" },
      floatDelay: "1.1s",
      tilt: "5deg",
    },
    {
      label: "Editorial",
      icon: "auto_stories",
      position: { bottom: "20%", left: "-13%" },
      floatDelay: "0.6s",
      tilt: "-3deg",
    },
  ] satisfies FloatingTag[],
  marquee: [
    "Identidade visual",
    "Ilustração",
    "Design editorial",
    "Tipografia",
    "Social media",
    "Embalagem",
    "Direção de arte",
    "Lettering",
  ],
  summaryTitle: "Sumário",
  featuredTitle: "Em destaque",
} as const;
