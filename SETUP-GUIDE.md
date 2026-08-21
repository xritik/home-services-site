# HomeServe Pro — Setup Guide

## Run locally
Open `index.html` directly in a modern browser. No framework, build tool, npm package, or backend is required for the front-end demo.

## Folder structure
- `index.html`
- `css/style.css`
- `js/main.js`
- `services/*.html` — 27 service pages

## Customize
1. Replace `+91-9800000000` and `hello@homeservepro.in` in the HTML files.
2. Change the brand name `HomeServe Pro` where needed.
3. Edit the CSS variables at the top of `css/style.css` to change the primary, secondary, accent and background colors.
4. Update service pricing, brands, descriptions and form options in the individual service pages.
5. Update the canonical domain and JSON-LD URL values before production.

## Deploy
Upload the complete `homeserve/` folder to any static host such as Apache/Nginx hosting, GitHub Pages, Cloudflare Pages, Netlify or Vercel static hosting. Keep the relative folder structure unchanged.

## Production replacements
- Connect the booking form to a real backend/API or CRM.
- Replace the demo phone, email, WhatsApp and social links.
- Replace example customer statistics/testimonials with verified business data.
- Add a real privacy policy, terms, cookie/consent handling and service-area information.
- Validate canonical URLs and submit a sitemap/robots.txt.
- Review pricing, warranty wording and structured data against the actual business.
