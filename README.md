# Vasco Oliveira — Fisioterapia e Osteopatia

Site profissional bilingue (PT / EN), alojado gratuitamente no GitHub Pages.
Cada alteração guardada neste repositório é publicada automaticamente em um ou dois minutos.

## Como editar (sem mexer em código)

Tudo o que é texto, contacto ou fotografia está em três ficheiros da pasta `_data/`.
No GitHub, abra o ficheiro, clique no lápis (Edit), altere e clique em **Commit changes**.

| O que quer mudar | Onde |
| --- | --- |
| Contactos, fotografias, duração e preço, widget de avaliações, Analytics | `_data/settings.yml` |
| Textos em português | `_data/pt.yml` |
| Textos em inglês | `_data/en.yml` |
| Política de privacidade | `pages/pt/privacy.md` e `pages/en/privacy.md` |
| Artigos | pasta `_articles/pt/` e `_articles/en/` |

Regras simples: altere só o que está entre aspas, mantenha as aspas e os espaços no
início das linhas, e faça a mesma alteração nas duas línguas.

### Campos por preencher

Estão todos em `_data/settings.yml`, assinalados com `✏️ PREENCHER`.
Um campo vazio (`""`) simplesmente não aparece no site.

- [ ] Email
- [ ] Fotografias: retrato, terapia manual, exercício terapêutico, avaliação, pormenor de trabalho
- [ ] Duração e preço da primeira consulta (PT e EN)
- [ ] Entidade reguladora, para o rodapé (PT e EN)
- [ ] Widget de avaliações do Google (opcional)
- [ ] Identificador do Google Analytics (opcional)

### Fotografias

1. Carregue a fotografia para `assets/img/` (no GitHub: **Add file → Upload files**).
2. Em `_data/settings.yml`, escreva o nome do ficheiro no campo certo, por exemplo `portrait: "retrato.jpg"`.

Enquanto o campo estiver vazio, o site mostra um espaço neutro no lugar da fotografia.
Use JPG ou WebP com cerca de 1600 px no lado maior. O retrato deve ser vertical.
A descrição de cada fotografia (texto alternativo) está em `image_alt`, em `pt.yml` e `en.yml`.

### Artigos

A secção de artigos já existe, mas fica oculta enquanto não houver conteúdo.
Copie `_articles/pt/exemplo.md`, mude o nome do ficheiro, escreva o texto e altere
`published: false` para `published: true`. A ligação «Artigos» aparece sozinha no menu.

### Cookies, avaliações e Analytics

O site não usa cookies enquanto os campos `google_reviews_widget` e
`google_analytics_id` estiverem vazios, e por isso não mostra banner de cookies.
Ao preencher um deles, o banner passa a aparecer, a política de privacidade
atualiza-se, e nada é carregado antes de o visitante aceitar.

## Antes de publicar

- Rever os textos clínicos das Áreas de Intervenção (explicações e perguntas frequentes)
  e a secção «Primeira consulta»: foram redigidos a partir do briefing e devem ser
  validados pelo Vasco.
- Rever a política de privacidade. É um ponto de partida, não é aconselhamento jurídico.

## Publicar e ligar o domínio

1. No GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, ramo `main`, pasta `/ (root)`.
2. Para o domínio `.pt`: no mesmo ecrã, escrever o domínio em **Custom domain** e ativar
   **Enforce HTTPS**. No registo do domínio, criar os registos DNS indicados na
   [documentação do GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

Os endereços do site (ligações, `hreflang`, sitemap) adaptam-se sozinhos ao domínio.

---

## Technical notes

- Plain Jekyll, built by GitHub Pages itself (no Actions workflow, no Node). Only
  features supported by the `github-pages` gem are used.
- `_data/routes.yml` maps each page to its PT and EN URL; the menu, the language
  switch, `hreflang` tags and `sitemap.xml` are generated from it. Page stubs live in
  `pages/pt/` and `pages/en/` and only carry `layout`, `lang`, `page_id`, `permalink`.
- All links go through `relative_url` / `absolute_url`, so the site works both at
  `user.github.io/repo/` and on a custom domain without config changes.
- Fonts (Fraunces, Figtree; SIL OFL) are self-hosted in `assets/fonts/`. Nothing is
  requested from third parties unless the visitor consents (`assets/js/main.js`).
- Structured data is in `_includes/schema.html` (no street address or phone on purpose).

Local preview:

```bash
bundle install
bundle exec jekyll serve
```
