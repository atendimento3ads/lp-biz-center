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

A página usa HTML, CSS e JavaScript sem etapa de build. A única dependência externa é a fonte Figtree, carregada pelo Google Fonts.

## Publicação no cPanel

O projeto não possui etapa de build. O cPanel deve clonar a branch `main` em
`/home1/celsoc43/repositories/lp-biz-center` e usar o arquivo `.cpanel.yml`
para publicar `index.html` e `assets/` em
`/home1/celsoc43/agende.bizcenter.com.br`.

No cPanel, acesse **Git Version Control**, clique em **Manage** e depois em
**Pull or Deploy**. Use **Update from Remote** e, em seguida,
**Deploy HEAD Commit**.

## Identidade visual

- Tipografia: Figtree
- Cor institucional: tons de vinho
- CTAs do WhatsApp: `#25D366`
- Hero em vídeo com arquivos otimizados para desktop e dispositivos móveis
- Layout responsivo para desktop e dispositivos móveis

## Contato configurado

Os CTAs direcionam para o WhatsApp `+55 62 98251-8999`, com mensagem inicial preenchida automaticamente.
