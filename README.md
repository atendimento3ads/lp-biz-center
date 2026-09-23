# LP Biz Center

Landing page estática da Biz Center, coworking em Goiânia, com foco em agendamento de visitas pelo WhatsApp.

## Estrutura

```text
.
├── .htaccess
├── index.html
├── politica-de-privacidade.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── img/
    └── video/
```

A página usa HTML, CSS e JavaScript sem etapa de build. O layout segue mobile first e usa a pilha de fontes do sistema para eliminar recursos que bloqueiam a renderização.

## Publicação no cPanel

O projeto não possui etapa de build. O cPanel deve clonar a branch `main` em
`/home1/celsoc43/repositories/lp-biz-center` e usar o arquivo `.cpanel.yml`
para publicar `index.html`, `assets/`, `sitemap.xml`, `robots.txt`, `llms.txt`
`llm.txt`, `.htaccess` e a política de privacidade em
`/home1/celsoc43/agende.bizcenter.com.br`.

No cPanel, acesse **Git Version Control**, clique em **Manage** e depois em
**Pull or Deploy**. Use **Update from Remote** e, em seguida,
**Deploy HEAD Commit**.

## Identidade visual

- Tipografia: Figtree
- Cor institucional: tons de vinho
- CTAs do WhatsApp com contraste acessível
- Hero com poster AVIF responsivo e vídeos dedicados para mobile e desktop
- Layout mobile first responsivo de celulares a telas ultrawide
- Animações de entrada acessíveis, respeitando `prefers-reduced-motion`
- Dados estruturados de negócio local, serviços e perguntas frequentes

## Contato configurado

Os CTAs usam o link rastreado `https://spar-hazel.vercel.app/l/biz-center-z43x`,
que encaminha o visitante para o atendimento da Biz Center. O pixel de página
é carregado uma única vez por `https://spar-hazel.vercel.app/spar-track.js`,
somente após a autorização de medição.

O Microsoft Clarity `ymx3kkmion` também é carregado somente após essa
autorização e recebe o estado pela API `consentv2`. A recusa ou revogação
mantém o script bloqueado ou comunica o estado negado quando ele já estiver
ativo na página.

O rastreamento controlado pela página usa o Google tag `GT-PBZHV5G`, a
propriedade GA4 `G-1B8PRTN8Z8`, Google Ads `AW-1002739716` e a conversão
`AW-18284269276/awIJCJmN_NAcENydz45E`. O Consent Mode v2 é inicializado antes
da Google tag, com análise e publicidade negadas por padrão. A escolha fica
armazenada localmente em `bizcenter_consent_v1`.

O container `GTM-TXFXNMHF` não é carregado pela LP. A versão pública auditada
em 23/09/2026 continha tags Custom HTML e configurações de outros clientes,
incluindo uma segunda carga do Spar, Meta/CAPI, Clarity e domínios externos não
relacionados à Biz Center. O container só deve ser reativado depois de ganhar
uma versão exclusiva e revisada para este domínio.

## Contrato dos eventos de conversão

Todo clique em um CTA identificado por `data-cta-location` emite sinais sem PII
e com o mesmo identificador técnico:

- evento GA4 `generate_lead`, enviado para `G-1B8PRTN8Z8`;
- conversão Google Ads enviada para `AW-18284269276/awIJCJmN_NAcENydz45E`;
- evento personalizado `bizcenter_generate_lead` no `dataLayer`.

O evento inclui `link_text`, `link_domain` e `cta_location`, mas nunca inclui
nome, telefone, e-mail, conteúdo de mensagem ou a URL decorada pelo rastreador.
Cliques repetidos no mesmo CTA em menos de 1,2 segundo são deduplicados no
navegador. A conversão final ainda precisa aparecer como ativa nas contas do
GA4 e Google Ads; o código da página não substitui a configuração das contas.

## Privacidade e segurança

- política pública em `/politica-de-privacidade.html`;
- banner de escolha com Consent Mode v2;
- Google Maps carregado somente após ação do visitante;
- CSP, HSTS, proteção contra framing, política de referência e MIME sniffing
  definidos em `.htaccess`;
- HTTPS e URL canônica sem `/index.html` aplicados pelo Apache;
- HTML sem cache e ativos versionados com cache longo.

Depois de alterar qualquer bloco `<script>` ou `<style>` inline, atualize e
valide os hashes da CSP antes do commit:

```bash
node scripts/update-csp.mjs
node scripts/update-csp.mjs --check
```
