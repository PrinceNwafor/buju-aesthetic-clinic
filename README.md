# Nony Aesthetic Clinic — Website Preview

A fast, mobile-first, single-page website **preview** for **Nony Aesthetic Clinic**, an
aesthetic & skincare clinic in **Port Harcourt**. Built to turn promo/ad traffic into real
**consultation bookings** (and repeat-care funnels) instead of scattered DMs.

Pure **HTML + CSS + vanilla JS** — no build step, no dependencies, no npm.

---

## ▶️ Run it locally

Open `index.html` directly in a browser, **or** serve the folder (recommended, so the
videos and WhatsApp links behave like production):

```bash
# from inside the nony-aesthetic-clinic/ folder
python -m http.server 5173
# then open http://localhost:5173
```

> Tip: no spaces in the path are required — the folder and all assets use clean,
> web-safe names.

## 🏗️ Build

There is **no build command** — it's static. "Building" = copying this folder to any static
host (GitHub Pages, Netlify, Vercel, cPanel). It's already deployed on GitHub Pages.

---

## ✏️ What to edit before going fully live

Everything is plain text and easy to change.

| What | Where |
|------|-------|
| **WhatsApp number** | `js/nony.js` → `CONFIG.whatsapp` (full intl format, e.g. `2348012345678`) |
| **Default WhatsApp message** | `js/nony.js` → `CONFIG.defaultMessage` |
| **Phone number** | search `+234 900 000 0000` / `+2349000000000` in `index.html` |
| **Prices (₦)** | the `.menu-card__price` values in `index.html` (Treatments section) |
| **Address & map** | the Location section in `index.html` (replace the Google Maps `iframe` `src` + address line) |
| **Doctor / aesthetician name** | "Why Nony" section — add the real certified name (HTML comment shows where) |
| **HMO / insurance details** | add a block in the Treatments or Location section if accepted |
| **SEO title / description** | `<head>` of `index.html` |
| **Brand colours** | `css/style.css` → `:root` (`--color-primary`, `--color-accent`, `--color-gold`, …) |

### 🖼️ Replace the placeholder assets

Drop your real files in, keeping the **same filenames** (no code changes needed):

```
assets/
  logo.png                 ← header & footer logo + favicon  ⚠️ see note below
  img/
    before-after-1.jpg     ← real before/after result
    certificate-1..4.jpg   ← founder / credential / studio photos
  video/
    hero.mp4               ← hero background clip (keep it small, ~2MB, for speed)
    reel-results.mp4       ← gallery reels (tap-to-play)
    reel-consistency.mp4
    reel-certificate.mp4
    reel-education.mp4
```

To add more **before/after** photos, replace the two dashed "Add Result Photo"
placeholders in the Results section with `<img>` tags like the first one.

> ⚠️ **Brand note:** the supplied `logo.png` and `before-after-1.jpg` currently carry
> **"Buju Aesthetic Clinic"** branding. All copy/SEO on the page already says
> **"Nony Aesthetic Clinic"** — swap in the final **Nony** logo (same path
> `assets/logo.png`) and un-watermarked photos to finish the rebrand.

---

## 📱 Mobile-first & no sideways scroll

Designed phone-first. Global rules prevent any horizontal overflow ("sideways swipe"):
`overflow-x: hidden` on `html`/`body`, capped media widths, and stacked grids at every
breakpoint (1024 / 768 / 600 / 380px).

## ✅ Sections included

Hero (clinic promise) · Trust strip · Treatment menu (premium, priced) · Safety &
qualification trust block · Before/After gallery · Video reels · Consultation booking →
WhatsApp · Product inquiry · Location + map · Reviews · FAQs · Footer · Floating WhatsApp.
