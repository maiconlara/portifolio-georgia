# Portfólio da Ge (Georgia)

NUNCA usar o travessão longo (U+2014) no projeto.

Commits e pushes só com autorização, uma por commit ou push.

Evitar useEffect: estado derivado no render, ref callback com limpeza (React 19) e `useSyncExternalStore` para estado do navegador (ver `hooks/use-hash.ts`).

Stack igual à do Prospect+ (`C:\Users\maico\dev\lead-brasil`): Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, HeroUI v3 (`@heroui/react` + `@heroui/styles`) e Material Symbols. Gerenciador: pnpm.

## Como o site funciona

- Site estático: `pnpm build` gera HTML puro em `out/` (`output: "export"` em `next.config.ts`), que sobe em qualquer hospedagem. `pnpm preview` serve a pasta `out/`.
- Conteúdo só em `config/*`: identidade e menu (`site.ts`), página inicial (`home.ts`), trabalhos (`works.ts`), experiência (`experience.ts`), sobre (`about.ts`) e contato (`contact.ts`). Os textos, trabalhos, empresas e contatos atuais são exemplos.
- Imagens dos trabalhos em `public/trabalhos/`, listadas no campo `images` de cada trabalho. Sem imagem, aparece uma capa desenhada provisória.
- Foto da Ge em `public/ge/foto.jpg` (`SITE.photo`): vai no meio da frase da página inicial, no Sobre e no selo de margarida do Contato.
- Página não desenha: só junta componentes e passa o conteúdo de `config/*`.
- Sem rodapé e sem botão flutuante de contato: o Contato fica só no menu.
- Prévia de links (WhatsApp, Instagram, LinkedIn): cada `page.tsx` exporta `metadata` com `buildPageMetadata` (`lib/page-metadata.ts`), que põe título, descrição, endereço e a imagem. A imagem é gerada no build em `app/share-image.png/route.tsx`, com a frase da página inicial, a foto e as cores da paleta ativa lidas do `globals.css`. O endereço público do site fica em `SITE.url`.

## Visual

- Fonte única: Instrument Sans (a mesma do portfólio da Michelly), títulos em semibold com espaçamento apertado. Sem degradê em palavras dos títulos.
- Cores só por token. As paletas ficam em `app/globals.css` (`[data-palette="..."]`) e a ativa é `SITE.palette` em `config/site.ts`. "margarida" vem da foto das margaridas; "chiclete" é a alternativa de exemplo.
- Largura da página: utilitário `wrap` (até 1600px, margem lateral em `--pad`).
- Sem etiqueta pequena acima dos títulos (eyebrow): cada seção abre direto no título.
- Cantos: botões e filtros em pílula, imagens e cartões com 16px (`rounded-2xl`), painéis e janelas com 24px (`rounded-3xl`).
- Ícones sempre por `<Icon name="..." />` de `components/ui/icon.tsx`. A margarida desenhada é `Daisy`.
- Botão: `Button`; link com cara de botão: `LinkButton`; aviso: `toast` de `components/ui/toast.tsx`. Botões não sobem no hover: mudam de cor e encolhem de leve no clique.
- O site não pode voltar a parecer o portfólio da Isadora, que serviu de ponto de partida: nada de faixa de texto rolando, sumário numerado, envelopes de categoria, molduras inclinadas, anel de texto girando ou faixa escura no contato.
- Troca de página: a página antiga some rápido e a nova aparece em seguida, com o cabeçalho parado e a margarida do logo girando um quarto de volta. É o `ViewTransition` do React com a API de View Transitions do navegador: cada `page.tsx` envolve o conteúdo em `PageTransition` (`components/page-transition.tsx`) e os tempos ficam em `.page-exit` e `.page-enter` no `globals.css`. Links internos são o `Link` do Next. Nada de tela cobrindo o site nem abertura na primeira visita: o site abre direto na página.
- Trabalho aberto fica no endereço (`/trabalhos/#slug`), então dá para compartilhar o link de um trabalho.

## Antes de entregar

`pnpm typecheck`, `pnpm lint` e `pnpm build` limpos, e nenhum travessão longo nos arquivos tocados.
