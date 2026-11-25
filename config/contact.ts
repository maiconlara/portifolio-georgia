export interface ContactChannel {
  name: string;
  /** What appears under the name (address, @, number). */
  handle: string;
  href: string;
  note: string;
  action: string;
  /** Material Symbols name. */
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  /** Material Symbols name. */
  icon: string;
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
  kicker: "Vamos conversar",
  title: "Vamos tirar uma ideia",
  titleAccent: "do papel?",
  lead: "Me conta o que você tem em mente. Respondo com calma e carinho, como resposta de carta.",
  copyLabel: "Copiar e-mail",
  copied: "E-mail copiado",
  copyFailed: `Não deu pra copiar. O e-mail é ${EMAIL}`,
  ringText: "me manda uma cartinha ✿ me manda uma cartinha ✿ ",
  postmark: "enviado com carinho",
  channels: [
    {
      name: "E-mail",
      handle: EMAIL,
      href: `mailto:${EMAIL}`,
      note: "Propostas e orçamentos",
      action: "Escrever",
      icon: "mail",
    },
    {
      name: "Instagram",
      handle: "@georgia.exemplo",
      href: "https://instagram.com/",
      note: "Bastidores e rabiscos",
      action: "Seguir",
      icon: "photo_camera",
    },
    {
      name: "Behance",
      handle: "georgia.exemplo",
      href: "https://www.behance.net/",
      note: "Projetos completos",
      action: "Ver projetos",
      icon: "palette",
    },
    {
      name: "WhatsApp",
      handle: "41 90000-0000",
      href: "https://wa.me/5541900000000",
      note: "Resposta mais rápida",
      action: "Chamar",
      icon: "chat",
    },
  ] satisfies ContactChannel[],
  servicesTitle: "Como posso ajudar",
  services: [
    {
      title: "Identidade visual",
      description: "Logotipo, paleta, tipografia e aplicações",
      icon: "verified",
      subject: "Projeto de identidade visual",
    },
    {
      title: "Ilustração",
      description: "Ilustração autoral e sob encomenda",
      icon: "brush",
      subject: "Projeto de ilustração",
    },
    {
      title: "Editorial e social media",
      description: "Capas, materiais impressos e posts",
      icon: "auto_stories",
      subject: "Projeto editorial ou de social media",
    },
  ] satisfies Service[],
} as const;
