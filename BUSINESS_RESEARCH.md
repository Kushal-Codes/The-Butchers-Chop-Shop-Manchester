# Business Research & Fact Verification Report: The Butchers Chop Shop

**Date Checked:** 28 October 2026  
**Subject:** The Butchers Chop Shop (also branded on Slick as **Proper Dapper**)  
**Location:** Manchester, United Kingdom  

---

## 1. Verified Business Identity & Location

| Fact | Verified Value | Source URL | Date Checked | Confidence Level | Notes / Owner Confirmation Needed |
|---|---|---|---|---|---|
| **Official Business Name** | The Butchers Chop Shop (Google Maps: *The Butcher's Chop Shop - Barber Shop Manchester*) | [Google Maps](https://maps.app.goo.gl/ZUgUNFEfpgCi4NTq7) & [Royal Exchange](https://www.theroyalexchangemanchester.com/stores/the-butchers-chop-shop/) | 2026-10-28 | **High** | Slick booking portal header displays **"Welcome to Proper Dapper"** alongside the Proper Dapper app branding referenced on the Royal Exchange listing. |
| **Arcade Location** | Unit 8 (Map Store #25), The Royal Exchange Arcade, St Ann's Square / Cross Street, Manchester | [Royal Exchange](https://www.theroyalexchangemanchester.com/stores/the-butchers-chop-shop/) & [Google Maps](https://maps.app.goo.gl/ZUgUNFEfpgCi4NTq7) | 2026-10-28 | **High** | Located inside the historic Grade II listed Royal Exchange building in central Manchester. |
| **Postcode** | `M2 7EA` (Arcade Unit) / `M2 7EF` (Royal Exchange Building) | [Google Maps](https://maps.app.goo.gl/ZUgUNFEfpgCi4NTq7) & [Royal Exchange](https://www.theroyalexchangemanchester.com/stores/the-butchers-chop-shop/) | 2026-10-28 | **High** | Confirm with owner whether `M2 7EA` or `M2 7EF` is preferred for sat-nav/postal mail. |
| **Coordinates** | `53.4826015, -2.2449481` | [Google Maps](https://maps.app.goo.gl/ZUgUNFEfpgCi4NTq7) | 2026-10-28 | **High** | Extracted directly from the resolved Google Maps Place URL (`0x487bb1e7bdfebefb:0xc376661f3b6d81b0`). |
| **Telephone Number** | `+44 161 839 8850` | Supplied booking reference & UK directory listings | 2026-10-28 | **Medium-High** | The Royal Exchange page currently renders an empty `tel:` link (`href="tel: "`), while `+44 161 839 8850` is verified in directory records and the project brief. Flagged for owner confirmation whether phone enquiries or app-only bookings are preferred. |
| **Official Instagram** | `@thebutcherschopshop` | [Instagram](https://www.instagram.com/thebutcherschopshop/?hl=en) | 2026-10-28 | **High** | Linked directly from The Royal Exchange Manchester store listing. |
| **Online Booking Portal** | `https://v2-book.getslick.com/salon/6176` | [Slick Booking](https://v2-book.getslick.com/salon/6176) | 2026-10-28 | **High** | Live and active. Also links to an official Stripe Gift Voucher checkout (`https://buy.stripe.com/8x228s8X87Fu5hbeJ14ZG00`). |

---

## 2. Service Catalogue & Discrepancy Investigation (8 vs. 9 Services)

### Live Slick Inspection Result (`2026-10-28`)
Using a headless Chromium browser against `https://v2-book.getslick.com/salon/6176`, we inspected the live booking DOM and expanded the service accordion:

- **Search Input Placeholder:** `"Search from 8 services"`
- **Category Accordion Button:** `"PROPER DAPPER SERVICES — 8 services"`
- **Gift Voucher Link Above Services:** `"Buy a gift voucher"` (`https://buy.stripe.com/8x228s8X87Fu5hbeJ14ZG00`)

### Verified 8-Service Catalogue on Slick

| # | Service Name | Duration | Price (GBP) | Status on Live Slick Page |
|---:|---|---:|---:|---|
| 1 | **Haircut** | 30 mins | £35.00 | Verified Exact Match |
| 2 | **Re-Style** | 1 hour | £55.00 | Verified Exact Match |
| 3 | **Beard Trim** | 30 mins | £25.00 | Verified Exact Match |
| 4 | **Shave** | 30 mins | £25.00 | Verified Exact Match |
| 5 | **Hair & Beard** | 1 hour | £55.00 | Verified Exact Match |
| 6 | **Hair & Shave** | 1 hour | £55.00 | Verified Exact Match |
| 7 | **Kids (12 and under)** | 30 mins | £25.00 | Verified Exact Match |
| 8 | **Clipper & Beard** | 1 hour | £45.00 | Verified Exact Match |

### Discrepancy Analysis
- **Why was a 9th item sometimes noted?** On the live Slick page (`https://v2-book.getslick.com/salon/6176`), there are **8 bookable barbering services** inside the `PROPER DAPPER SERVICES` accordion (`textbox "Search from 8 services"`), plus **1 standalone action card** immediately above the service list: **"Buy a gift voucher"** (`https://buy.stripe.com/8x228s8X87Fu5hbeJ14ZG00`), or a previously retired/seasonal service (such as a standalone *Clipper Cut / Back Bacon* visible on the 2021 chalkboard wall photo).
- **Resolution:** In strict compliance with the research rules, we did **not** invent a 9th service or alter any price. All 8 verified services are stored in `src/data/services.ts` with their exact names, durations, and prices, and the verified **"Buy a gift voucher"** link is surfaced alongside the booking callout.

---

## 3. Opening Hours Discrepancy Report

Public listings show conflicting weekend hours:

1. **The Royal Exchange Manchester Store Page (`theroyalexchangemanchester.com/stores/the-butchers-chop-shop/`):**
   - Lists `9:00 AM - 7:00PM` across all seven rows of its HTML table, with a typographical bug in row 5 where `FRIDAY` is accidentally labelled `MONDAY`.
2. **Manchester Directory & Booking Summaries:**
   - Report **Monday – Friday:** `9:00 AM – 7:00 PM`
   - Report **Saturday:** `9:00 AM – 5:00 PM`
   - Report **Sunday:** `Closed` or reduced hours (`11:00 AM – 4:00 PM`).

**Website Handling:** Rather than hardcoding an unverified Sunday/Saturday closing time as absolute fact, the website's **Find Us** section displays the weekday schedule (`9:00 AM – 7:00 PM`), notes the weekend variation transparently, and links visitors directly to the live Slick booking calendar to verify real-time chair availability.

---

## 4. Visual Assets & Image Provenance

Every photographic asset used in this build is a genuine photograph of **The Butchers Chop Shop** inside The Royal Exchange Arcade, Manchester. **Zero generic stock photographs are used anywhere on the website.**

| Local File Path | Original Verified Source URL | Description | Reuse / Demo Status |
|---|---|---|---|
| `/public/images/shop/royal-exchange-interior.jpg` | `https://www.theroyalexchangemanchester.com/wp-content/uploads/2021/04/JCP-TBCH-Med-Res-1134.jpg` | Daylight wide-angle interior showing white butcher tiles, hexagonal mosaic floor, 6 barber chairs, chalkboard menu, and pink-purple neon pig sign. | Official Royal Exchange Manchester store listing image (`JCP-TBCH-1134`). |
| `/public/images/shop/shop-photo-1148.jpg` | `https://www.theroyalexchangemanchester.com/wp-content/uploads/2021/04/JCP-TBCH-Med-Res-1148.jpg` | Mood-lit interior bathed in electric pink-purple neon glow highlighting the anatomical butcher-pig neon sign. | Official Royal Exchange Manchester press archive (`JCP-TBCH-1148`). |
| `/public/images/shop/shop-photo-1146.jpg` | `https://static.manchesterwire.co.uk/app/uploads/2021/04/JCP-TBCH-Low-Res-1146.jpeg` | Exterior storefront inside The Royal Exchange Arcade showing the overhead *The Butcher's Chop Shop* script, barber pole, and butcher-counter window props. | Official press shoot (`JCP-TBCH-1146`). |
| `/public/images/shop/shop-photo-1108.jpg` | `https://www.theroyalexchangemanchester.com/wp-content/uploads/2021/04/JCP-TBCH-Med-Res-1108.jpg` | Entrance portrait outside the shop doors inside The Royal Exchange Arcade. | Official Royal Exchange Manchester press archive (`JCP-TBCH-1108`). |
| `CraftStudyIllustration` (Inline SVGs) | Created specifically for this project; linked to `https://www.instagram.com/thebutcherschopshop/?hl=en` | Custom illustrated lookbook cards (*Skin Fades*, *Beard Line-Ups*, *Straight-Razor Shaves*) that direct visitors to `@thebutcherschopshop` for live haircut photos without scraping private/restricted Instagram CDN media or faking cuts with stock photography. | 100% original artwork. |

---

## 5. Items Flagged for Business-Owner Confirmation Before Production Launch

1. **Weekend Opening Hours:** Confirm exact current Saturday closing time (`5:00 PM` vs `7:00 PM`) and whether the shop opens on Sundays.
2. **Brand Name Lockup:** Confirm how prominently the **Proper Dapper** sub-brand (used on the Slick booking page and app) should sit alongside **The Butchers Chop Shop**.
3. **Direct Service Deep-Links:** Slick's V2 web app (`https://v2-book.getslick.com/salon/6176`) uses client-side state for service checkboxes rather than query-string pre-selection. Confirm if Slick provides salon-specific deep links or if landing on `/salon/6176` remains preferred.
4. **Production Domain & SEO Indexing:** Once approved by the owners, remove `<meta name="robots" content="noindex, nofollow" />` in `index.html` and update `<link rel="canonical">` to the official production domain.
