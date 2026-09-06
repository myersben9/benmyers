# benmyers

**Archived September 2026. Superseded by [benmyers-vercel](https://github.com/myersben9/benmyers-vercel), which serves [benmyers.org](https://benmyers.org).** Frozen.

## What it was

Two generations of the owner's personal site in one repo. In August 2024 it was a FastAPI + Jinja2 + Tailwind site with a small PostgreSQL/NocoDB content layer, a resume viewer, and the same middleware and error-alerting skeleton as the [brigart](https://github.com/myersben9/brigart) store (same file layout, five months older). In June 2026 it was rebuilt in place as a static Next.js 16 / React 19 / Tailwind v4 portfolio with typed content files, and the 2024 app was moved to `legacy/`. That rebuild did not stay the deployed site: three weeks later the portfolio was rebuilt again from a fresh starter in `benmyers-vercel`, which is the repo Vercel serves `benmyers.org` from (with `dev` and `test` branch environments), and this repo went quiet. It is not linked to any Vercel project.

## What was interesting technically

- **Content as typed data.** `content/site.ts`, `experience.ts`, `projects.ts`, `skills.ts`, and `education.ts` hold every string on the site, so copy changes never touch a component. The successor kept exactly this idea; its `content/projects.ts` is the centrepiece of the page.
- **A fully static App Router build with the SEO files as routes.** `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, and `app/icon.tsx` generate the crawler-facing files at build time, with no runtime data fetching anywhere.
- **The 2024 middleware stack.** `legacy/sql_app/middleware.py` wires session signing, CORS, HTTPS redirect, gzip, trusted hosts, a CSP header, and `slowapi` rate limiting in one place; `legacy/sql_app/logger.py` is a logging handler that pushes error tickets to Telegram and email. Both were shared with brigart and later hardened there.
- **A NocoDB-backed content layer for a five-page site** (`legacy/sql_app/noco.py`, `crud.py`, `models.py`): more infrastructure than a portfolio needs, which turned out to be the lesson.

## What it taught, and what the successor does differently

A portfolio has no business owning a database, a rate limiter, or an alerting bot; the static rebuild removed all three. benmyers-vercel goes further: no external network calls at runtime, self-hosted fonts, security headers, a client error boundary that reports crashes to the house uptime monitor, a privacy policy and terms because the site is public-facing, and deployment only through the dev to test to production branch pipeline.

## How to run it

The Next.js half still runs:

```bash
npm install
npm run dev        # http://localhost:3000
```

The `legacy/` app needs PostgreSQL, a NocoDB instance, and a populated `.env`; treat it as frozen. Its original setup notes are in `legacy/README_old.md`.

## Timeline

- First commit: 2024-08-19
- Last commit: 2026-07-01
- 14 commits on `main`: 11 in August and September 2024, 3 for the June 2026 rebuild

## Original README

Preserved from the last active revision (the June 2026 Next.js rebuild); em dashes replaced per house style. The 2024 site's README is at `legacy/README_old.md`.

## benmyers.org

Personal portfolio site for Ben Myers, software engineer & ML researcher.

Built as a fast, fully-static site with **Next.js 16 (App Router)**, **React 19**,
**TypeScript**, and **Tailwind CSS v4**, deployed on **Vercel**.

> The previous FastAPI + Jinja2 implementation is preserved under [`legacy/`](./legacy).

### Editing content

All site content lives in [`content/`](./content) as typed data, no need to touch
the page components to update copy:

| File | What it controls |
| --- | --- |
| `content/site.ts` | Name, role, tagline, contact info, socials, bio, hero highlights |
| `content/experience.ts` | Work history (timeline on `/experience`) |
| `content/projects.ts` | Projects & research (cards on `/projects` + featured on home) |
| `content/skills.ts` | Grouped skills |
| `content/education.ts` | Education / research background |

Resume PDF: [`public/resume_BenMyers.pdf`](./public/resume_BenMyers.pdf).

### Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

### Build & deploy

```bash
npm run build      # static production build
npm run start      # serve the production build locally
```

Deployed to Vercel; pushes to `main` ship to production at https://www.benmyers.org.

### Structure

```
app/            Routes (home, about, experience, projects, contact) + SEO files
components/     Nav, Footer, UI primitives, icons, cards
content/        Typed site content (edit here)
public/         Static assets (resume, etc.)
legacy/         Archived FastAPI + Jinja2 site
```
