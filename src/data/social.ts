import { BUSINESS_INFO } from './business';

export const SOCIAL_LINKS = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: BUSINESS_INFO.links.instagramHandle,
    url: BUSINESS_INFO.links.instagram,
    description: 'See fresh cuts, shop updates, and real client chops on our official Instagram.',
  },
  {
    id: 'google-maps',
    label: 'Google Maps',
    handle: 'The Royal Exchange Arcade, M2',
    url: BUSINESS_INFO.links.googleMaps,
    description: 'View directions, arcade entrance details, and read current customer reviews on Google Maps.',
  },
  {
    id: 'royal-exchange',
    label: 'The Royal Exchange Directory',
    handle: 'Store 25 · Arcade Listing',
    url: BUSINESS_INFO.links.royalExchangeListing,
    description: 'Official store directory listing inside The Royal Exchange Manchester.',
  },
  {
    id: 'slick-booking',
    label: 'Slick Online Booking',
    handle: 'Proper Dapper Portal',
    url: BUSINESS_INFO.links.booking,
    description: 'Select your service and view live appointment availability.',
  },
];
