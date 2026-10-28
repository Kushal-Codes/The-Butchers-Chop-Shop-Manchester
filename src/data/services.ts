export interface ServiceItem {
  id: string;
  ticketCode: string;
  name: string;
  duration: string;
  durationMinutes: number;
  pricePounds: number;
  priceFormatted: string;
  category: 'hair' | 'beard' | 'combo' | 'junior';
  cutNote: string;
  description: string;
  illustrationType:
    | 'haircut'
    | 'restyle'
    | 'beard-trim'
    | 'shave'
    | 'hair-beard'
    | 'hair-shave'
    | 'kids'
    | 'clipper-beard';
  bookingUrl: string;
  featured?: boolean;
}

export const SLICK_BOOKING_URL = 'https://v2-book.getslick.com/salon/6176';
export const STRIPE_GIFT_VOUCHER_URL = 'https://buy.stripe.com/8x228s8X87Fu5hbeJ14ZG00';

/**
 * Authoritative 8-service catalogue verified directly against
 * https://v2-book.getslick.com/salon/6176 ("PROPER DAPPER SERVICES - 8 services").
 */
export const SERVICES: ServiceItem[] = [
  {
    id: 'haircut',
    ticketCode: 'CUT—01',
    name: 'Haircut',
    duration: '30 mins',
    durationMinutes: 30,
    pricePounds: 35,
    priceFormatted: '£35.00',
    category: 'hair',
    cutNote: 'Prime Standard Cut',
    description:
      'Precision scissor and clipper work tailored to your head shape, finished with a clean neckline and styling.',
    illustrationType: 'haircut',
    bookingUrl: SLICK_BOOKING_URL,
    featured: true,
  },
  {
    id: 're-style',
    ticketCode: 'CUT—02',
    name: 'Re-Style',
    duration: '1 hour',
    durationMinutes: 60,
    pricePounds: 55,
    priceFormatted: '£55.00',
    category: 'hair',
    cutNote: 'Full Transformation',
    description:
      'Extended consultation and full structural restyle for longer lengths or a complete change of look.',
    illustrationType: 'restyle',
    bookingUrl: SLICK_BOOKING_URL,
    featured: true,
  },
  {
    id: 'beard-trim',
    ticketCode: 'CUT—03',
    name: 'Beard Trim',
    duration: '30 mins',
    durationMinutes: 30,
    pricePounds: 25,
    priceFormatted: '£25.00',
    category: 'beard',
    cutNote: 'Sharp Line-Up & Shape',
    description:
      'Detailed beard sculpting, length balancing, and crisp cheek and neck line-up.',
    illustrationType: 'beard-trim',
    bookingUrl: SLICK_BOOKING_URL,
  },
  {
    id: 'shave',
    ticketCode: 'CUT—04',
    name: 'Shave',
    duration: '30 mins',
    durationMinutes: 30,
    pricePounds: 25,
    priceFormatted: '£25.00',
    category: 'beard',
    cutNote: 'Close Traditional Shave',
    description:
      'Classic close straight-razor shave experience with rich lather and soothing post-shave finish.',
    illustrationType: 'shave',
    bookingUrl: SLICK_BOOKING_URL,
  },
  {
    id: 'hair-and-beard',
    ticketCode: 'CUT—05',
    name: 'Hair & Beard',
    duration: '1 hour',
    durationMinutes: 60,
    pricePounds: 55,
    priceFormatted: '£55.00',
    category: 'combo',
    cutNote: 'The Full Works',
    description:
      'Our signature full haircut paired with a complete beard sculpt, taper integration, and sharp line-up.',
    illustrationType: 'hair-beard',
    bookingUrl: SLICK_BOOKING_URL,
    featured: true,
  },
  {
    id: 'hair-and-shave',
    ticketCode: 'CUT—06',
    name: 'Hair & Shave',
    duration: '1 hour',
    durationMinutes: 60,
    pricePounds: 55,
    priceFormatted: '£55.00',
    category: 'combo',
    cutNote: 'Prime Cut & Close Shave',
    description:
      'Precision tailored haircut followed by a traditional close shave for the ultimate Proper Dapper finish.',
    illustrationType: 'hair-shave',
    bookingUrl: SLICK_BOOKING_URL,
  },
  {
    id: 'kids-12-and-under',
    ticketCode: 'CUT—07',
    name: 'Kids (12 and under)',
    duration: '30 mins',
    durationMinutes: 30,
    pricePounds: 25,
    priceFormatted: '£25.00',
    category: 'junior',
    cutNote: 'Junior Dapper Cut',
    description:
      'Friendly, patient, and sharp barbering for young gents aged 12 and under.',
    illustrationType: 'kids',
    bookingUrl: SLICK_BOOKING_URL,
  },
  {
    id: 'clipper-and-beard',
    ticketCode: 'CUT—08',
    name: 'Clipper & Beard',
    duration: '1 hour',
    durationMinutes: 60,
    pricePounds: 45,
    priceFormatted: '£45.00',
    category: 'combo',
    cutNote: 'Buzz, Fade & Beard',
    description:
      'Clean all-over clipper grade or skin fade blended seamlessly into a sculpted beard trim.',
    illustrationType: 'clipper-beard',
    bookingUrl: SLICK_BOOKING_URL,
  },
];

export type ServiceCategoryFilter = 'all' | 'hair' | 'beard' | 'combo' | 'junior';

export function formatUkPrice(pounds: number): string {
  return `£${pounds.toFixed(2)}`;
}

export function filterServicesByCategory(
  services: ServiceItem[],
  category: ServiceCategoryFilter
): ServiceItem[] {
  if (category === 'all') return services;
  return services.filter((s) => s.category === category);
}

export function getBookingDestination(serviceId?: string): string {
  if (!serviceId) return SLICK_BOOKING_URL;
  const found = SERVICES.find((s) => s.id === serviceId);
  return found ? found.bookingUrl : SLICK_BOOKING_URL;
}
