export interface ContactChannel {
  name: string;
  /** What appears under the name (@, profile, number). */
  handle: string;
  href: string;
  note: string;
}

export interface ContactSubject {
  title: string;
  /** Subject of the e-mail opened by the link. */
  subject: string;
}

/**
 * Contact data. Every value here is an example: replace the e-mail, the
 * profiles and the number with Ge's real ones before publishing.
 */
const EMAIL = "contato@example.com";

export const CONTACT = {
  email: EMAIL,
  title: "Vamos tirar uma ideia do papel?",
  lead: "Me conta o que você tem em mente. Respondo com calma e carinho, como resposta de carta.",
  copyLabel: "Copiar e-mail",
  copied: "E-mail copiado",
  copyFailed: `Não deu pra copiar. O e-mail é ${EMAIL}`,
  channelsTitle: "Onde me encontrar",
  channels: [
    {
      name: "Instagram",
      handle: "@georgia.exemplo",
      href: "https://instagram.com/",
      note: "Bastidores e rabiscos",
    },
    {
      name: "Behance",
      handle: "georgia.exemplo",
      href: "https://www.behance.net/",
      note: "Projetos completos",
    },
    {
      name: "WhatsApp",
      handle: "41 90000-0000",
      href: "https://wa.me/5541900000000",
      note: "Resposta mais rápida",
    },
  ] satisfies ContactChannel[],
  subjectsTitle: "Assuntos",
  subjectsHint: "Cada assunto abre um e-mail com o título já preenchido.",
  subjects: [
    { title: "Identidade visual", subject: "Projeto de identidade visual" },
    { title: "Ilustração", subject: "Projeto de ilustração" },
    { title: "Editorial", subject: "Projeto editorial" },
    { title: "Social media", subject: "Projeto de social media" },
  ] satisfies ContactSubject[],
} as const;
