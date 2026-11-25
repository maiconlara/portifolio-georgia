/**
 * Color palettes defined in `app/globals.css` (`[data-palette="..."]`).
 * To add one, copy a palette block there and add its name here.
 */
export type Palette = "margarida" | "chiclete";

/** Identity of the site. Everything here is edited by hand. */
export const SITE = {
  name: "Georgia",
  nickname: "Ge",
  role: "Design e ilustração",
  description:
    "Portfólio da Georgia (Ge): identidade visual, ilustração e design editorial feitos com o carinho de uma carta escrita à mão.",
  year: 2026,
  /** Final address of the site, used in links shared on social networks. */
  url: "https://example.com",
  /** Active palette. Switch to "chiclete" to see the alternative one. */
  palette: "margarida" as Palette,
  /** Photo used as the seal of the letter and in the "Sobre" page. */
  photo: "/ge/foto.jpg",
  /** Signature at the end of the letter and in the footer. */
  signature: "com carinho, Ge",
} as const;

export interface NavItem {
  href: string;
  label: string;
  /** Material Symbols name shown next to the page in lists and in the letter that opens it. */
  icon: string;
  /** One line about the page, used in the home page summary. */
  summary: string;
}

/** Pages of the site, in menu order. */
export const NAV: NavItem[] = [
  {
    href: "/",
    label: "Início",
    icon: "local_florist",
    summary: "A porta de entrada, com um pouco de tudo.",
  },
  {
    href: "/trabalhos/",
    label: "Trabalhos",
    icon: "palette",
    summary: "Envelopes com identidade, ilustração, editorial e digital.",
  },
  {
    href: "/experiencia/",
    label: "Experiência",
    icon: "work",
    summary: "Onde trabalhei, o que estudei e as ferramentas que uso.",
  },
  {
    href: "/sobre/",
    label: "Sobre",
    icon: "person",
    summary: "Quem sou, o que me inspira e o que faço fora da tela.",
  },
  {
    href: "/contato/",
    label: "Contato",
    icon: "mail",
    summary: "E-mail, Instagram, Behance e WhatsApp para conversar.",
  },
];
