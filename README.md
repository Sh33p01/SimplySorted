# Simply Sorted

Brochure site for **Simply Sorted** — professional decluttering and home organising
by Carolyn Kriel, serving Centurion & greater Pretoria.

Built with [Astro](https://astro.build). Outputs plain static HTML — no server,
no runtime, deploys free on Cloudflare Pages / Netlify / Azure Static Web Apps.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built output
```

## Where things live

```
src/
  data/site.js              business details, nav, all four services  <- edit this first
  layouts/Base.astro        <head>, SEO meta, LocalBusiness JSON-LD, header + footer
  components/
    Header.astro            sticky nav + mobile menu
    Footer.astro            NAP block, nav, services, socials
    EnquiryForm.astro       the enquiry form + validation + Web3Forms wiring
    Logo.astro              wordmark placeholder (swoosh S + tagline)
    PlaceholderImage.astro  stand-in for client photography
    CtaBand.astro           reusable closing call-to-action
  pages/
    index.astro             Home — hero + enquiry form side-by-side
    about.astro             About — founder-forward
    services.astro          Services — 4 blocks with anchor sub-nav
    contact.astro           Contact — form + details + areas covered
    404.astro
public/                     favicon, robots.txt — copied verbatim to dist/
```

## Before launch — outstanding items

Each of these is marked with a `TODO` or `PLACEHOLDER` comment in the code.

| Item | Where | Notes |
| --- | --- | --- |
| **Web3Forms access key** | `src/components/EnquiryForm.astro` | Sign up against `office.simplysorted@gmail.com`, paste the key. Until then the form validates but shows a "not connected" notice instead of silently failing. |
| **Final domain** | `astro.config.mjs`, `public/robots.txt` | Drives canonical URLs, sitemap and schema. Currently `simplysorted.co.za`. |
| **Phone / WhatsApp** | `src/data/site.js` → `phone.publish` | Set to `true` once Carolyn confirms a number. Call + WhatsApp buttons and the schema `telephone` appear automatically. |
| **Social links** | `src/data/site.js` → `social` | Empty strings are skipped in the footer. Fill in to show them. |
| **Logo artwork** | `src/components/Logo.astro` | Currently an SVG recreation of the client's supplied mark. Drop the real file in `public/` and swap in an `<img>`. |
| **Photography** | every `<PlaceholderImage>` | Hero, Carolyn's portrait, before/afters, one per service. Replace with `<img>` — WebP, `loading="lazy"`, `decoding="async"`, real alt text. |
| **Testimonial** | `src/pages/index.astro` | Placeholder quote in the trust strip. |
| **Google Business Profile** | — | Not a code task, but the single biggest local-SEO lever. Claim it, category "Professional organizer", service area Centurion/Pretoria. |

## Design notes

**Palette.** The client's greens are all mid-to-dark and none of the light ones
are safe for text. Measured against the linen background (`#F4F1EB`):

| Token | Hex | Contrast | Safe for |
| --- | --- | --- | --- |
| Evergreen | `#344C3D` | 8.7:1 | body text, headings, all CTAs |
| Moss | `#738A6E` | 3.5:1 | large text 24px+, borders, icons |
| Sage | `#8EA58C` | 2.5:1 | decorative fills only |
| Sage Hint | `#BFCFBB` | 1.4:1 | decorative fills only |

So Evergreen carries every piece of text and every button; the lighter greens are
structure and atmosphere. Two warm neutrals (`--linen`, `--sand`) were added to
give the greens somewhere to sit — the supplied palette had no background or
text colour of its own.

**Type.** Cormorant Garamond (headings) + Inter (body), loaded with
`display=swap` so type never blocks first paint. Body floor is 17px — this
audience skews older.

**Motion.** Gentle fade-up on scroll, fully disabled under
`prefers-reduced-motion`.

## Accessibility

Semantic landmarks, skip link, visible focus rings, labelled form fields with
inline validation, `aria-live` status on submit, keyboard-operable mobile menu
with Escape-to-close, and ≥44px tap targets throughout.

## Deploying

Static output in `dist/`. Any of these work with a Git-based deploy:

- **Cloudflare Pages** — build `npm run build`, output `dist`
- **Netlify** — same; `netlify.toml` not required for defaults
- **Azure Static Web Apps** — app location `/`, output `dist`

After connecting the domain, set one canonical host (redirect `www` →
non-`www` or vice versa) and submit `sitemap-index.xml` in Google Search Console.
