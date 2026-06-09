# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static job application portfolio for Jonas Kauko. Hosted on GitHub Pages at https://jonaskauko.github.io/jonaskauko-job-application/ — updates go live within ~1 minute of pushing to `main`. The repo is public.

## After every change: push to Git

```bash
git add <changed files>
git commit -m "Short description"
git push
```

## Architecture

Content and layout are fully separated — edit only the `*-data.js` files for content changes:

- **`cv-data.js`** — CV content (`CV` object): personal info, summary, experience, education, skills, certifications, publications, awards
- **`cv.html`** — CV renderer; do not edit for content
- **`cover-letter-data.js`** — cover letter content (`LETTER` object)
- **`cover-letter.html`** — cover letter renderer
- **`projects-data.js`** — projects content (`PROJECTS` object): KPIs, delivery types, sectors, featured projects
- **`projects.html`** — projects renderer (SVG donut chart + bar chart)
- **`about-data.js`** — about page content (`ABOUT` object): intro paragraph, 3 hobby photos
- **`about.html`** — full-canvas about page (dark background, no paper format)
- **`index.html`** — portfolio shell; left nav + iframe; tab visibility controlled via `TABS` array

Renderers use a simple `e()` HTML-escape helper and build `innerHTML` from data objects — no framework, no build step.

## Pages & tabs

Tabs are configured in `index.html` in the `TABS` array. Set `hidden: true` to hide a tab:

```js
const TABS = [
    { title: 'Curriculum Vitae',  src: 'cv.html',           hidden: false },
    { title: 'Cover Letter',      src: 'cover-letter.html', hidden: false },
    { title: 'Projects',          src: 'projects.html',     hidden: false },
    { title: 'About Me',          src: 'about.html',        hidden: false },
];
```

## Design tokens

| Token | Value | Use |
|---|---|---|
| `--dark` / `--polar` | `#2d3040` | Sidebar / header background |
| `--accent` / `--blue` | `#655bb0` | Primary accent |
| `--accent-light` | `#9891bb` | Subheadings on dark backgrounds |
| canvas background | `#e8e7f0` | Page background behind paper documents |

Font: Space Grotesk (Google Fonts), with Sharp Sans Display No1 as preferred.

## CV layout notes

- `html { font-size: 17px }` — scales all `rem` text sizes; adjust to fit content on one page
- Sidebar width: `grid-template-columns: 300px 1fr` in `.page`
- Publications are nested under education entries via `publications` array on each education object
- `cv.html.bak` is a backup with certifications and awards in the main column (gitignored)
