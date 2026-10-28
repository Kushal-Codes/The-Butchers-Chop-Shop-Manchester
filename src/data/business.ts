export interface OpeningHourRow {
  day: string;
  royalExchangeListed: string;
  directoryReported: string;
}

export const BUSINESS_INFO = {
  name: 'The Butchers Chop Shop',
  bookingBrandName: 'Proper Dapper',
  proposedTagline: 'Proper Dapper. Proper Chop.',
  conceptStatusNote:
    'Concept website prepared for The Butchers Chop Shop. Live appointment availability and bookings are powered directly by Slick.',
  location: {
    arcadeUnit: 'Unit 8 / Store 25, The Royal Exchange Arcade',
    street: "St Ann's Square / Cross Street",
    city: 'Manchester',
    postcode: 'M2 7EA',
    royalExchangeBuildingPostcode: 'M2 7EF',
    country: 'United Kingdom',
    coordinates: {
      lat: 53.4826015,
      lng: -2.2449481,
    },
    shortLabel: 'The Royal Exchange Arcade · Manchester M2',
  },
  contact: {
    phoneDisplay: '+44 161 839 8850',
    phoneHref: 'tel:+441618398850',
    phoneNote:
      'Supplied enquiry number. Online booking via Slick is the fastest way to check live slots.',
  },
  links: {
    booking: 'https://v2-book.getslick.com/salon/6176',
    giftVoucher: 'https://buy.stripe.com/8x228s8X87Fu5hbeJ14ZG00',
    googleMaps: 'https://maps.app.goo.gl/ZUgUNFEfpgCi4NTq7',
    googleMapsPlace:
      "https://www.google.com/maps/place/The+Butcher's+Chop+Shop+-+Barber+Shop+Manchester/@53.4826015,-2.2497117,17z",
    instagram: 'https://www.instagram.com/thebutcherschopshop/?hl=en',
    instagramHandle: '@thebutcherschopshop',
    royalExchangeListing:
      'https://www.theroyalexchangemanchester.com/stores/the-butchers-chop-shop/',
    properDapperAppShortlink: 'https://qrco.de/bc0yT4',
  },
  openingHours: {
    verificationWarning:
      'Public directory listings show varied weekend hours. The Royal Exchange listing displays 9:00 AM – 7:00 PM daily, while Manchester directory listings report Saturday 9:00 AM – 5:00 PM and reduced/closed Sunday hours. Check live availability directly on Slick before travelling.',
    schedule: [
      {
        day: 'Monday – Friday',
        royalExchangeListed: '9:00 AM – 7:00 PM',
        directoryReported: '9:00 AM – 7:00 PM',
      },
      {
        day: 'Saturday',
        royalExchangeListed: '9:00 AM – 7:00 PM (Royal Exchange listing)',
        directoryReported: '9:00 AM – 5:00 PM (Confirm on Slick)',
      },
      {
        day: 'Sunday',
        royalExchangeListed: '9:00 AM – 7:00 PM (Royal Exchange listing)',
        directoryReported: 'Check live Slick calendar for Sunday openings',
      },
    ] as OpeningHourRow[],
  },
  verifiedFacts: [
    'Located inside the historic Royal Exchange Arcade in central Manchester',
    'White subway-tile butcher shop interior with custom pink-purple neon pig sign',
    '8 verified grooming services from £25.00 to £55.00 via Proper Dapper on Slick',
  ],
};
