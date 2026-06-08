# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static job application portfolio for Jonas Kauko. Deployed automatically via Netlify on every push to `main`. The GitHub repo is private; Netlify watches `main` and redeploys within ~30 seconds of each push.

## After every change: push to Git

Always commit and push after making changes:

```bash
git add <changed files>
git commit -m "Short description"
git push
```

The live site updates within ~30 seconds after pushing.

## Architecture

Content and layout are fully separated:

- **`cv-data.js`** — all CV content as a `CV` object (edit this for content changes)
- **`cv.html`** — CV renderer; reads `CV` and builds the DOM via JS; do not edit for content
- **`cover-letter-data.js`** — all cover letter content as a `LETTER` object
- **`cover-letter.html`** — cover letter renderer; reads `LETTER` and builds DOM
- **`index.html`** — portfolio shell; left nav + iframe that loads `cv.html` or `cover-letter.html`

The renderers use a simple `e()` HTML-escape helper and build innerHTML strings from the data objects — no framework, no build step.

## PDF generation

Regenerate `Jonas_Kauko_CV.pdf` after CV changes:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --print-to-pdf-no-header --no-margins \
  --print-to-pdf="Jonas_Kauko_CV.pdf" \
  "file://$(pwd)/cv.html"
```

## Design tokens

Shared color palette across all three HTML files:

| Token | Value | Use |
|---|---|---|
| `--dark` / `--polar` | `#2d3040` | Sidebar / nav background |
| `--accent` / `--blue` | `#655bb0` | Accent color |
| `--autumn` | `#261a46` | Deep accent |
| canvas background | `#e8e7f0` | Page background behind documents |

Font: Space Grotesk (Google Fonts), with Sharp Sans Display No1 as preferred if available.
