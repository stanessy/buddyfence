# buddyfence.com

Customer-facing site for **Buddy Fence**, a registered trade name of Buddy Built LLC.
Cloned from the Buddy Tile site (`~/buddytile`): same zero-dependency generator, same
brand system, fencing content.

## How it works

- `src/data.js` holds ALL copy: services, cities, promise, steps, testimonials, legal line.
  Edit there, never in `docs/`.
- `node build.js` renders `docs/` (GitHub Pages serves it). 66 pages: home, 8 services,
  6 cities, 48 service-in-city pages, about, pay, privacy, plus sitemap/robots/CNAME.
- Lead form posts to `buddybuilt.com/api/public/leads` with the Buddy Fencing division
  (`divisionId: 19`) + honeypot. Override the API base via `window.BT_API_BASE`.
- `npm run preview` builds and serves on :4300. `npm run refresh` pulls portfolio
  projects (`?division=fencing`), Google reviews, and blog posts from the platform, then rebuilds.

## Before launch

- Real fence photos: the hero, intro, service pages, and city pages all use ONE
  composited image cut from the AI reference. Service cards fall back to icons
  (`photo: null` in data.js) until photos exist.
- Swap the placeholder testimonials in `src/data.js` for real reviews.
- OR CCB number in `SITE.legalLine`.
- Confirm phone + `info@buddyfence.com` and set DNS to GitHub Pages.
- A fence ballpark calculator (linear feet × style + gates) is not built yet; the tile
  site's shower designer was removed rather than ported.
