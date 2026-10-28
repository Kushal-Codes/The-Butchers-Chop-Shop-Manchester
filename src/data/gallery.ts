export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  imageUrl: string;
  sourceUrl: string;
  colSpanClass: string;
  alt: string;
  caption: string;
  annotationText?: string;
}

export interface CraftGuideItem {
  id: string;
  code: string;
  title: string;
  recommendedService: string;
  durationAndPrice: string;
  summary: string;
  details: string[];
}

/**
 * Curated gallery of real photography from The Butchers Chop Shop
 * inside The Royal Exchange Arcade, Manchester.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'shop-neon-sanctuary',
    title: 'The Pink-Purple Neon Sanctuary',
    subtitle: 'Inside The Royal Exchange Arcade',
    tag: 'The Cutting Floor',
    imageUrl: '/images/shop/shop-photo-1148.jpg',
    sourceUrl: 'https://www.theroyalexchangemanchester.com/wp-content/uploads/2021/04/JCP-TBCH-Med-Res-1148.jpg',
    colSpanClass: 'lg:col-span-6',
    alt: 'Interior of The Butchers Chop Shop illuminated in electric pink-purple neon with butcher-cut pig neon sign and classic barber chairs',
    caption:
      'Full purple-and-pink neon glow across crisp white butcher tiles, custom anatomical pig neon centrepiece, and vintage leather barber chairs.',
    annotationText: 'THE CUTTING FLOOR',
  },
  {
    id: 'shop-arcade-storefront',
    title: 'Unit 8 · Royal Exchange Storefront',
    subtitle: "St Ann's Square & Cross Street Arcade",
    tag: 'Arcade Entrance',
    imageUrl: '/images/shop/shop-photo-1146.jpg',
    sourceUrl: 'https://static.manchesterwire.co.uk/app/uploads/2021/04/JCP-TBCH-Low-Res-1146.jpeg',
    colSpanClass: 'lg:col-span-6',
    alt: 'Storefront of The Butchers Chop Shop inside The Royal Exchange Arcade with butcher counter window display and hand-painted signage',
    caption:
      'Step off St Ann’s Square or Cross Street into the covered arcade. Look out for our classic rotating barber pole, butcher-counter window display, and overhead script.',
    annotationText: 'ROYAL EXCHANGE ARCADE',
  },
  {
    id: 'shop-white-tile-floor',
    title: 'Subway Tiles & Bespoke Stations',
    subtitle: 'Daylight View of the Shop',
    tag: 'Six-Chair Setup',
    imageUrl: '/images/shop/royal-exchange-interior.jpg',
    sourceUrl: 'https://www.theroyalexchangemanchester.com/wp-content/uploads/2021/04/JCP-TBCH-Med-Res-1134.jpg',
    colSpanClass: 'lg:col-span-6',
    alt: 'Bright interior of The Butchers Chop Shop showing hexagonal mosaic floor, white subway tiles, and butcher-themed wall menu',
    caption:
      'Hexagonal penny-tile flooring, bespoke timber barber stations, and full-height mirrors designed to keep every appointment relaxed, bright, and unhurried.',
    annotationText: '6 CHAIRS · PROPER TOOLS',
  },
  {
    id: 'shop-founders-entrance',
    title: 'Manchester Independent Spirit',
    subtitle: 'Outside the Chop Shop Doors',
    tag: 'City Centre Barbering',
    imageUrl: '/images/shop/shop-photo-1108.jpg',
    sourceUrl: 'https://www.theroyalexchangemanchester.com/wp-content/uploads/2021/04/JCP-TBCH-Med-Res-1108.jpg',
    colSpanClass: 'lg:col-span-6',
    alt: 'Entrance of The Butchers Chop Shop in The Royal Exchange Arcade Manchester',
    caption:
      'Independent Manchester barbering with character, humour, and zero pretension right in the heart of the city centre.',
    annotationText: 'MANCHESTER M2',
  },
];

/**
 * Informative guide cards helping clients pick the right service and know what to expect.
 */
export const CRAFT_GUIDE_ITEMS: CraftGuideItem[] = [
  {
    id: 'guide-fades-restyles',
    code: 'GUIDE 01',
    title: 'Haircut vs. Full Re-Style: Which to Book?',
    recommendedService: 'Haircut (30 mins) or Re-Style (1 hour)',
    durationAndPrice: '£35.00 / £55.00',
    summary:
      'Not sure whether to book a standard 30-minute Haircut or a 1-hour Re-Style? Here is how we break it down in the chair:',
    details: [
      'Book a Haircut (£35.00 · 30 mins) for maintaining your current crop, skin fade, taper, or short-back-and-sides within 2–5 weeks of your last cut.',
      'Book a Re-Style (£55.00 · 1 hour) if you are growing out longer hair, changing your style completely, or haven’t had a cut in 2+ months.',
      'Every cut includes a consultation on head shape, growth patterns, and low-effort daily styling.',
    ],
  },
  {
    id: 'guide-beard-sculpting',
    code: 'GUIDE 02',
    title: 'Beard Sculpting & Taper Integration',
    recommendedService: 'Beard Trim (30 mins) or Hair & Beard (1 hour)',
    durationAndPrice: '£25.00 / £55.00',
    summary:
      'A proper beard trim is about balance and structure—not just running a single clipper guard over your jawline.',
    details: [
      'Seamless fading from your sideburns into the fuller weight of the beard so there is never a harsh disconnect.',
      'Crisp cheek and neckline shaping tailored to your natural bone structure.',
      'Want both done together? Pick Hair & Beard (£55.00 · 1 hour) or Clipper & Beard (£45.00 · 1 hour) on Slick.',
    ],
  },
  {
    id: 'guide-straight-razor-shave',
    code: 'GUIDE 03',
    title: 'The Traditional Straight-Razor Shave',
    recommendedService: 'Shave (30 mins) or Hair & Shave (1 hour)',
    durationAndPrice: '£25.00 / £55.00',
    summary:
      'Take half an hour out of the Manchester city rush for a proper close shave ritual in our classic reclining chairs.',
    details: [
      'Thorough skin preparation and rich warm lather to soften the bristles and protect sensitive skin.',
      'Precision straight-razor work for a clean, close finish with zero irritation.',
      'Ideal before weddings, big events, or paired with a fresh cut in our 1-hour Hair & Shave (£55.00) session.',
    ],
  },
];
