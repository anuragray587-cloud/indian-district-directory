# Indian District Directory

A fast, static, searchable directory of India's 28 States, 8 Union Territories,
and their districts. Built with Next.js (App Router), TypeScript, and Tailwind
CSS. All data is static JSON — there is no database and no admin panel, so the
only way to change the content is by editing the project files directly.

## Features

- **Home page** — every State and UT as a searchable, filterable card grid.
- **State/UT pages** (`/[state]`) — every district, grouped alphabetically,
  with its own search box.
- **District pages** (`/[state]/[district]`) — district name, parent state,
  and a "Content Coming Soon" placeholder, ready for you to fill in later.
- **Breadcrumbs** (Home → State → District) with matching SEO structured data.
- **Light/dark mode**, following the visitor's system preference by default,
  with a manual toggle in the navbar.
- **Full SEO**: per-page titles/descriptions, Open Graph tags, a generated
  `sitemap.xml` covering every route, and `robots.txt`.
- **Fully static**: every page is pre-rendered at build time
  (`generateStaticParams`), so there's nothing to query at request time.

## Getting started

Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build (pre-renders all ~830 pages)
npm run start   # serve the production build
npm run lint    # lint
npm run validate-data   # sanity-check src/data/states.json after editing it
```

Before deploying, copy `.env.local.example` to `.env.local` and set
`NEXT_PUBLIC_SITE_URL` to your real domain — it's used for canonical URLs,
Open Graph tags, and the sitemap.

## Project structure

```
src/
  app/
    layout.tsx              Root layout: fonts, theme provider, navbar, footer
    page.tsx                Home page
    sitemap.ts               Generates /sitemap.xml
    robots.ts                Generates /robots.txt
    not-found.tsx            Custom 404
    [state]/
      page.tsx               District list for one State/UT
      [district]/
        page.tsx             Single district page
  components/
    layout/                  Navbar, Footer, ThemeProvider
    ui/                      SearchInput, Breadcrumbs, ThemeToggle, IndexBadge
    directory/                StateCard, DistrictCard, HomeExplorer, StateExplorer
  data/
    states.json              <-- the only file you need to edit to update content
  lib/
    data.ts                  Typed read helpers over states.json
    seo.ts                   Site metadata constants + JSON-LD helper
    utils.ts                 Small shared helpers
  types/
    index.ts                 Shared TypeScript types
scripts/
  validate-data.mjs          Run after hand-editing states.json
```

## Updating the data

Everything lives in **`src/data/states.json`**, a single array of State/UT
objects:

```json
{
  "name": "Kerala",
  "slug": "kerala",
  "type": "state",
  "capital": "Thiruvananthapuram",
  "code": "KL",
  "districtCount": 14,
  "districts": [
    { "name": "Alappuzha", "slug": "alappuzha" },
    { "name": "Ernakulam", "slug": "ernakulam" }
  ]
}
```

To add, rename, or remove a district: edit the `districts` array by hand.
- `slug` must be lowercase, using only letters, numbers, and hyphens
  (e.g. `"North 24 Parganas"` → `"north-24-parganas"`). It must be unique
  **within that state's district list** (district pages are nested under
  their state, so the same slug can safely repeat across two different
  states).
- Keep `districtCount` equal to the length of the `districts` array.
- Run `npm run validate-data` afterwards — it catches typos, duplicate
  slugs, and mismatched counts before you deploy.

Because routes are generated with `generateStaticParams`, you need to rebuild
(`npm run build`) after editing the data for the new/changed pages to appear.

There is intentionally no UI, form, or API route for editing this data —
visitors can only read the site. Only whoever has access to the project
files (you) can change it.

### A note on data accuracy

Indian district boundaries change fairly often — states periodically split
or rename districts. This dataset was compiled and cross-checked in July
2026, including some very recent changes (Delhi's move to 13 districts in
January 2026, Ladakh's expansion to 7 districts in April 2026). A handful of
states have additional districts that were *announced* but not yet formally
notified at the time of writing (West Bengal's 2026 budget-session proposals,
for instance) — these were deliberately left out until they're confirmed
operational. Treat this as a solid starting point, not a government register,
and revisit `states.json` periodically.

## Design

The visual language borrows from Indian gazetteers and card-catalog
indexes: a serif/sans/mono type system (IBM Plex), a marigold-gold accent,
and small state-code "index tabs" (e.g. `KL`, `TN`) on every card. Alphabetical
section headers on state pages are a real index, not decoration — they
reflect how the list is actually sorted.

## Deployment

This is a standard Next.js app and deploys to any Node hosting provider
(Vercel, Netlify, Render, a plain Node server, etc.). If you'd prefer a fully
static export with no Node server at all, add `output: 'export'` to
`next.config.mjs` and run `npm run build` — everything here (including the
dynamic routes and the sitemap) is compatible with static export.
