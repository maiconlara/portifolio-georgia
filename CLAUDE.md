# Portfólio da Ge (Georgia)

NUNCA usar o travessão longo (U+2014) no projeto.

Commits e pushes só com autorização, uma por commit ou push.

Evitar useEffect: estado derivado no render, ref callback com limpeza (React 19) e `useSyncExternalStore` para estado do navegador (ver `hooks/use-hash.ts`).

Stack igual à do Prospect+ (`C:\Users\maico\dev\lead-brasil`): Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, HeroUI v3 (`@heroui/react` + `@heroui/styles`) e Material Symbols. Gerenciador: pnpm.

## Como o site funciona

- Site estático: `pnpm build` gera HTML puro em `out/` (`output: "export"` em `next.config.ts`), que sobe em qualquer hospedagem. `pnpm preview` serve a pasta `out/`.
- Conteúdo só em `config/*`: identidade e menu (`site.ts`), página inicial (`home.ts`), trabalhos (`works.ts`), experiência (`experience.ts`), sobre (`about.ts`) e contato (`contact.ts`). Os textos, trabalhos, empresas e contatos atuais são exemplos.
- Imagens dos trabalhos em `public/trabalhos/`, listadas no campo `images` de cada trabalho. Sem imagem, aparece uma capa desenhada provisória.
- Foto da Ge em `public/ge/foto.jpg` (`SITE.photo`): vai no selo da carta, no topo, na página inicial, no Sobre e no Contato.
- Página não desenha: só junta componentes e passa o conteúdo de `config/*`.

## Visual

- Fonte única: Instrument Sans (a mesma do portfólio da Michelly), títulos em negrito com espaçamento apertado. Destaque em palavras com `text-gradient` (fundo claro) e `text-gradient-light` (faixa verde).
- Cores só por token. As paletas ficam em `app/globals.css` (`[data-palette="..."]`) e a ativa é `SITE.palette` em `config/site.ts`. "margarida" vem da foto das margaridas; "chiclete" é a alternativa de exemplo.
- Ícones sempre por `<Icon name="..." />` de `components/ui/icon.tsx`; ícone em círculo por `IconTile`; foto redonda por `PhotoAvatar`.
- Botão: `Button`; link com cara de botão: `LinkButton`; aviso: `toast` de `components/ui/toast.tsx`.
- Troca de página: carta que fecha, recebe o selo de margarida com a foto e abre na página nova (`components/letter/letter-transition.tsx`, tempos em `.letter` do `globals.css`). Links internos usam `TransitionLink` para passar pela carta.
- Trabalho aberto fica no endereço (`/trabalhos/#slug`), então dá para compartilhar o link de um trabalho.

## Antes de entregar

`pnpm typecheck`, `pnpm lint` e `pnpm build` limpos, e nenhum travessão longo nos arquivos tocados.
