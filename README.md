# The Butchers Chop Shop — Manchester Barber Website Concept

**“Proper Dapper. Proper Chop.”**

A production-quality, responsive website concept built for **The Butchers Chop Shop**, located inside The Royal Exchange Arcade, Manchester (`M2 7EA`).

---

## 1. Project Highlights

- **Authentic Brand Direction:** Combines a crisp white subway-tile canvas (`#FFFFFF`), punchy deep & electric purples (`#4C1D95`, `#7C3AED`), soft lilac surfaces (`#EDE9FE`, `#F5F0FF`), ink-black framing (`#191622`), and mascot-inspired pink (`#F0ABFC`).
- **Cheeky Pig Mascot & Original SVGs:** Features an interactive custom SVG pig mascot (`src/components/illustrations/PigMascot.tsx`), rotating SVG barber pole, rotating `"PROPER DAPPER"` stamp, and **8 custom inline SVG service illustrations** (`src/components/illustrations/ServiceIllustrations.tsx`).
- **Verified 8-Service Butcher Ticket Menu:** Powered by a single source of truth (`src/data/services.ts`) verified against `https://v2-book.getslick.com/salon/6176`.
- **Real Shop Photography & Zero Fake Stock Cuts:** Uses genuine high-resolution photographs of The Butchers Chop Shop inside The Royal Exchange Arcade (`/public/images/shop/`) alongside custom illustrated craft lookbook cards that link directly to `@thebutcherschopshop` on Instagram.
- **Accessible & Reduced-Motion Friendly:** Keyboard-navigable service filters, mobile menu drawer, and gallery lightbox (`Escape`, `ArrowLeft`, `ArrowRight`), plus full `@media (prefers-reduced-motion: reduce)` support.

---

## 2. Architecture & File Structure

```text
├── BUSINESS_RESEARCH.md                 # Full fact verification, sources, confidence levels & QA report
├── vercel.json                          # Vercel deployment & preview noindex configuration
├── public/
│   ├── favicon.svg                      # Custom pig mascot favicon
│   └── images/shop/                     # Verified photographs of The Butchers Chop Shop
└── src/
    ├── components/
    │   ├── animations/
    │   │   └── BrandInterlude.tsx       # Animated purple ink comb line & looping marquee
    │   ├── illustrations/
    │   │   ├── BrandMotifs.tsx          # Rotating barber pole, Proper Dapper stamp & craft studies
    │   │   ├── PigMascot.tsx            # Interactive cheeky pig mascot SVG
    │   │   └── ServiceIllustrations.tsx # 8 original inline SVG service illustrations
    │   ├── layout/
    │   │   ├── Navbar.tsx               # Responsive 3-zone header + mobile drawer
    │   │   └── Footer.tsx               # Footer & compact mobile sticky booking CTA
    │   ├── services/
    │   │   └── ServicesSection.tsx      # Butcher-ticket service menu + category filter
    │   ├── HeroSection.tsx              # Asymmetrical editorial hero with pig mascot & real shop photo
    │   ├── GallerySection.tsx           # Asymmetrical portfolio gallery + accessible lightbox
    │   ├── ShopStorySection.tsx         # Brand atmosphere & Royal Exchange story section
    │   └── LocationSection.tsx          # Contact, opening hours, directions & arcade locator diagram
    └── data/
        ├── business.ts                  # Centralised address, phone, hours & booking URLs
        ├── services.ts                  # Single source of truth for the 8 verified services
        ├── services.test.ts             # Node unit tests for services, prices, filters & links
        ├── gallery.ts                   # Verified gallery items with documented sources
        └── social.ts                    # Official social & directory profile links
```

---

## 3. Running, Testing & Building Locally

### Install dependencies
```bash
npm install
```

### Start the development server (Port 3000)
```bash
npm run dev
```

### Run unit tests
```bash
npx --yes tsx --test src/data/services.test.ts
```

### Run TypeScript typecheck / lint
```bash
npm run lint
```

### Build for production
```bash
npm run build
```

---

## 4. Deploying to Vercel

This repository includes a pre-configured `vercel.json` for zero-configuration deployment on Vercel:

1. Push the repository to GitHub/GitLab/Bitbucket or run `npx vercel` from the project root.
2. Vercel automatically runs `npm run build` and serves the static bundle from `dist/`.
3. **Preview Protection (`noindex`):** Both `index.html` (`<meta name="robots" content="noindex, nofollow" />`) and `vercel.json` (`X-Robots-Tag: noindex, nofollow`) are configured so the concept preview does not compete with the business in search engines before owner sign-off.
4. **Enabling Production SEO:** Once approved by the business owners, remove the `noindex` meta tag in `index.html`, remove the `X-Robots-Tag` header in `vercel.json`, and set the canonical URL in `index.html` to the live production domain.

---

## 5. Quality Assurance Summary

- **Unit Tests (`src/data/services.test.ts`):** Verified all 8 services (`Haircut £35.00`, `Re-Style £55.00`, `Beard Trim £25.00`, `Shave £25.00`, `Hair & Beard £55.00`, `Hair & Shave £55.00`, `Kids (12 and under) £25.00`, `Clipper & Beard £45.00`), category filtering, UK currency formatting, and Slick booking links.
- **Responsive Viewports Tested:** `360px`, `390px`, `768px`, `1024px`, `1440px`, and `1920px`.
- **Interactive Flows Verified:** Category filtering, gallery lightbox modal (mouse + keyboard `Escape` / arrows), mobile navigation drawer, `tel:+441618398850` link, Google Maps directions link, Instagram link, and Slick booking CTAs.
