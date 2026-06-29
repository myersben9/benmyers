# benmyers.org

Personal portfolio site for Ben Myers — software engineer & ML researcher.

Built as a fast, fully-static site with **Next.js 16 (App Router)**, **React 19**,
**TypeScript**, and **Tailwind CSS v4**, deployed on **Vercel**.

> The previous FastAPI + Jinja2 implementation is preserved under [`legacy/`](./legacy).

## Editing content

All site content lives in [`content/`](./content) as typed data — no need to touch
the page components to update copy:

| File | What it controls |
| --- | --- |
| `content/site.ts` | Name, role, tagline, contact info, socials, bio, hero highlights |
| `content/experience.ts` | Work history (timeline on `/experience`) |
| `content/projects.ts` | Projects & research (cards on `/projects` + featured on home) |
| `content/skills.ts` | Grouped skills |
| `content/education.ts` | Education / research background |

Resume PDF: [`public/resume_BenMyers.pdf`](./public/resume_BenMyers.pdf).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

```bash
npm run build      # static production build
npm run start      # serve the production build locally
```

Deployed to Vercel; pushes to `main` ship to production at https://www.benmyers.org.

## Structure

```
app/            Routes (home, about, experience, projects, contact) + SEO files
components/     Nav, Footer, UI primitives, icons, cards
content/        Typed site content (edit here)
public/         Static assets (resume, etc.)
legacy/         Archived FastAPI + Jinja2 site
```
