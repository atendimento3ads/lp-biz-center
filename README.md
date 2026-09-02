# LP Biz Center

Landing page estática da Biz Center, coworking em Goiânia, com foco em agendamento de visitas pelo WhatsApp.

## Estrutura

```text
.
├── index.html
└── assets/
    ├── img/
    └── video/
```

A página usa HTML, CSS e JavaScript sem etapa de build. O layout segue mobile first e usa a pilha de fontes do sistema para eliminar recursos que bloqueiam a renderização.

## Publicação no cPanel

O projeto não possui etapa de build. O cPanel deve clonar a branch `main` em
`/home1/celsoc43/repositories/lp-biz-center` e usar o arquivo `.cpanel.yml`
para publicar `index.html`, `assets/`, `sitemap.xml`, `robots.txt`, `llms.txt`
e `llm.txt` em
`/home1/celsoc43/agende.bizcenter.com.br`.

No cPanel, acesse **Git Version Control**, clique em **Manage** e depois em
**Pull or Deploy**. Use **Update from Remote** e, em seguida,
**Deploy HEAD Commit**.

## Identidade visual

- Tipografia: Figtree
- Cor institucional: tons de vinho
- CTAs do WhatsApp com contraste acessível
- Hero com poster AVIF responsivo e vídeo carregado sob demanda no desktop
- Layout mobile first responsivo de celulares a telas ultrawide
- Animações de entrada acessíveis, respeitando `prefers-reduced-motion`
- Dados estruturados de negócio local, serviços e perguntas frequentes

## Contato configurado

Os CTAs usam o link rastreado `https://spar-hazel.vercel.app/l/biz-center-z43x`,
que encaminha o visitante para o atendimento da Biz Center. O pixel de página
é carregado por `https://spar-hazel.vercel.app/spar-track.js`.

O rastreamento também inclui o container Google Tag Manager `GTM-TXFXNMHF`,
o Google tag `GT-PBZHV5G` e a propriedade GA4 `G-1B8PRTN8Z8`. Cliques nos
CTAs de atendimento disparam o evento recomendado `generate_lead` no GA4.
