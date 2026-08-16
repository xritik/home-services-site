# NestCare Home Services — website

A static, SEO-first home-services booking site: appliance repair, deep
cleaning, pest control, handyman, and interior renovation, with a
per-service landing page + booking form (like the AC Repair page).

No build step, no framework — plain HTML/CSS/JS, so it can be hosted
anywhere (Netlify, Vercel static, GitHub Pages, cPanel, S3+CloudFront).

## Folder structure

```
/
├── index.html                          → homepage
├── about/index.html                    → /about/
├── contact/index.html                  → /contact/
├── services/index.html                 → /services/  (hub page, links to every service)
├── services/ac-repair-service/index.html        → /services/ac-repair-service/
├── services/washing-machine-repair/index.html   → /services/washing-machine-repair/
├── assets/css/style.css                → single shared stylesheet
├── assets/js/main.js                   → form handling, FAQ accordion
├── robots.txt
└── sitemap.xml
```

Every page lives in its own folder as `index.html`, which is what gives
clean URLs like `/services/ac-repair-service/` instead of
`/services/ac-repair-service.html`. Any static host that serves
`index.html` as the default file for a folder (all of the ones listed
above do) will handle this automatically.

## Why this is set up for SEO

- **Clean, keyword-rich URLs** — `/services/ac-repair-service/`, not
  `/service.php?id=12`.
- **One `<h1>` per page**, matching what the page is actually about,
  with the primary keyword near the front of the `<title>`.
- **Unique `<title>` and `<meta description>` on every page** — never
  copy these between service pages, Google treats duplicates as a
  negative signal.
- **`rel="canonical"`** on every page pointing at its own clean URL.
- **Structured data (JSON-LD)** — `HomeAndConstructionBusiness` on the
  homepage, `Service` + `BreadcrumbList` + `FAQPage` on every service
  page. This is what makes star ratings, FAQ dropdowns, and rich
  snippets possible in search results.
- **Real internal linking** — the homepage and footer link to every
  service with descriptive anchor text (not "click here"), and every
  service page links to related services. This is how Google discovers
  and understands new pages without you submitting each one manually.
- **`sitemap.xml` + `robots.txt`** — submit the sitemap in Google
  Search Console the day you go live; that's what triggers the first
  crawl instead of waiting for organic discovery.
- **No render-blocking JS framework** — plain HTML means Google (and
  every other crawler) sees the full content on the very first fetch,
  with nothing to execute first.
- **No stock photos** — every icon is inline SVG, so there's nothing
  large to download and no licensing risk. Swap in real photos of your
  own technicians/work later; add descriptive `alt` text when you do.

## Before you go live

1. **Replace the placeholders** — business name is fine as-is if you
   like it, but the domain (`nestcarehome.in`), phone number
   (`70000-00045`), city (`Jaipur`), and social links are all
   placeholders. They appear in: every `<title>`/`<meta>` tag, the
   JSON-LD blocks, the header/footer, and the WhatsApp float button
   (`wa.me/917000000045`).
2. **Wire up the booking form** — `assets/js/main.js` currently shows
   a client-side "Request received" message only. Open that file and
   uncomment the `fetch()` block, pointing it at your real backend
   (a serverless function, or your Node/FastAPI API) to actually save
   bookings and notify you.
3. **Get a Google Search Console + Bing Webmaster account**, verify
   the domain, and submit `sitemap.xml`. This is the single biggest
   lever for getting indexed quickly — SEO structure alone doesn't
   make Google crawl you sooner.
4. **Add a Google Business Profile** for local (map pack) visibility —
   for a home-services business this typically brings more traffic
   than organic search results do.

## Adding a new service page

The two pages under `/services/` are the reusable template — one for
a simple appliance repair, one for the same layout with different
copy, so you can see what stays fixed vs. what changes.

To add a new service (say, Geyser Repair):

1. Duplicate `services/ac-repair-service/` → `services/geyser-repair/`.
2. In `index.html`, update: `<title>`, `<meta description>`,
   `rel="canonical"` URL, all three JSON-LD blocks (`Service` name,
   `BreadcrumbList` URL, `FAQPage` questions), the `<h1>`/banner copy,
   the steps text if it differs, the price table, and the booking
   form's `<select>` options.
3. Add the new URL to `sitemap.xml`.
4. Link to it from `services/index.html`, the homepage service grid,
   and the footer — a page with no internal links pointing to it is
   much slower for Google to find.

## Design tokens

Defined at the top of `assets/css/style.css` as CSS custom properties
(`--accent`, `--header`, `--font-display`, etc.) — change the palette
or type in one place and it updates everywhere.
