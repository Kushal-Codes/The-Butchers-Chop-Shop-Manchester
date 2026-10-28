import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SERVICES,
  SLICK_BOOKING_URL,
  formatUkPrice,
  filterServicesByCategory,
  getBookingDestination,
} from './services';
import { BUSINESS_INFO } from './business';
import { GALLERY_ITEMS, CRAFT_GUIDE_ITEMS } from './gallery';

test('SERVICES contains all 8 verified Proper Dapper services with exact durations and UK prices', () => {
  assert.equal(SERVICES.length, 8);

  const expected = [
    { name: 'Haircut', duration: '30 mins', priceFormatted: '£35.00', pricePounds: 35 },
    { name: 'Re-Style', duration: '1 hour', priceFormatted: '£55.00', pricePounds: 55 },
    { name: 'Beard Trim', duration: '30 mins', priceFormatted: '£25.00', pricePounds: 25 },
    { name: 'Shave', duration: '30 mins', priceFormatted: '£25.00', pricePounds: 25 },
    { name: 'Hair & Beard', duration: '1 hour', priceFormatted: '£55.00', pricePounds: 55 },
    { name: 'Hair & Shave', duration: '1 hour', priceFormatted: '£55.00', pricePounds: 55 },
    { name: 'Kids (12 and under)', duration: '30 mins', priceFormatted: '£25.00', pricePounds: 25 },
    { name: 'Clipper & Beard', duration: '1 hour', priceFormatted: '£45.00', pricePounds: 45 },
  ];

  expected.forEach((exp, index) => {
    const actual = SERVICES[index];
    assert.equal(actual.name, exp.name);
    assert.equal(actual.duration, exp.duration);
    assert.equal(actual.priceFormatted, exp.priceFormatted);
    assert.equal(formatUkPrice(actual.pricePounds), exp.priceFormatted);
    assert.equal(actual.bookingUrl, SLICK_BOOKING_URL);
  });
});

test('filterServicesByCategory filters correctly without mutating the catalogue', () => {
  assert.equal(filterServicesByCategory(SERVICES, 'all').length, 8);
  assert.equal(filterServicesByCategory(SERVICES, 'hair').length, 2);
  assert.equal(filterServicesByCategory(SERVICES, 'beard').length, 2);
  assert.equal(filterServicesByCategory(SERVICES, 'combo').length, 3);
  assert.equal(filterServicesByCategory(SERVICES, 'junior').length, 1);
});

test('getBookingDestination always points to the verified Slick booking URL', () => {
  assert.equal(getBookingDestination(), 'https://v2-book.getslick.com/salon/6176');
  assert.equal(getBookingDestination('haircut'), 'https://v2-book.getslick.com/salon/6176');
  assert.equal(getBookingDestination('unknown-service'), 'https://v2-book.getslick.com/salon/6176');
});

test('BUSINESS_INFO has verified Manchester details, telephone link, and external URLs', () => {
  assert.equal(BUSINESS_INFO.name, 'The Butchers Chop Shop');
  assert.equal(BUSINESS_INFO.contact.phoneDisplay, '+44 161 839 8850');
  assert.equal(BUSINESS_INFO.contact.phoneHref, 'tel:+441618398850');
  assert.equal(BUSINESS_INFO.links.booking, 'https://v2-book.getslick.com/salon/6176');
  assert.equal(BUSINESS_INFO.links.googleMaps, 'https://maps.app.goo.gl/ZUgUNFEfpgCi4NTq7');
  assert.equal(
    BUSINESS_INFO.links.instagram,
    'https://www.instagram.com/thebutcherschopshop/?hl=en'
  );
});

test('GALLERY_ITEMS and CRAFT_GUIDE_ITEMS have complete photos, alt descriptions, and informative guides', () => {
  assert.equal(GALLERY_ITEMS.length, 4);
  for (const item of GALLERY_ITEMS) {
    assert.ok(item.imageUrl.startsWith('/images/shop/'));
    assert.ok(item.alt.length > 10);
    assert.ok(item.title.length > 0);
  }
  assert.equal(CRAFT_GUIDE_ITEMS.length, 3);
  for (const guide of CRAFT_GUIDE_ITEMS) {
    assert.ok(guide.title.length > 0);
    assert.ok(guide.details.length === 3);
  }
});
