import React from 'react';
import { ExternalLink, Instagram, MapPin, Phone, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { SOCIAL_LINKS } from '../../data/social';
import { PigMascot } from '../illustrations/PigMascot';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191622] text-white pt-16 pb-24 md:pb-16 border-t-2 border-[#191622]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5">
              <PigMascot size="sm" interactive={false} />
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight block">
                  THE BUTCHERS CHOP SHOP
                </span>
                <span className="font-mono-ticket text-xs text-[#F0ABFC]">
                  Proper Dapper. Proper Chop. · Manchester
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/75 max-w-md leading-relaxed">
              Contemporary Manchester barbering inside the historic Royal Exchange Arcade. Precision haircuts, restyles, beard trims, and traditional straight-razor shaves.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-display font-extrabold text-[#191622] bg-[#F0ABFC] hover:bg-white rounded-lg transition-colors whitespace-nowrap"
              >
                <Scissors className="w-3.5 h-3.5" aria-hidden="true" />
                <span>BOOK YOUR CHOP</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href={BUSINESS_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-display font-bold text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors whitespace-nowrap"
              >
                <Instagram className="w-3.5 h-3.5 text-[#F0ABFC]" aria-hidden="true" />
                <span>{BUSINESS_INFO.links.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h3 className="font-mono-ticket text-xs font-bold uppercase tracking-wider text-[#F0ABFC] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Proper Dapper Services (8)
                </a>
              </li>
              <li>
                <a href="#the-shop" className="text-white/80 hover:text-white transition-colors">
                  The Shop & Atmosphere
                </a>
              </li>
              <li>
                <a href="#our-work" className="text-white/80 hover:text-white transition-colors">
                  Our Work & Gallery
                </a>
              </li>
              <li>
                <a href="#find-us" className="text-white/80 hover:text-white transition-colors">
                  Find Us in Royal Exchange
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.links.giftVoucher}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0ABFC] hover:underline inline-flex items-center gap-1"
                >
                  <span>Buy a Gift Voucher</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Links & Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-mono-ticket text-xs font-bold uppercase tracking-wider text-[#F0ABFC] mb-4">
              Verified Profiles & Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F0ABFC] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {BUSINESS_INFO.location.arcadeUnit}, {BUSINESS_INFO.location.street},{' '}
                  {BUSINESS_INFO.location.city} {BUSINESS_INFO.location.postcode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F0ABFC] shrink-0" aria-hidden="true" />
                <a
                  href={BUSINESS_INFO.contact.phoneHref}
                  className="font-mono-ticket hover:text-white underline"
                >
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#F0ABFC] inline-flex items-center gap-1"
                >
                  <span>{item.label}</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Concept Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} The Butchers Chop Shop, Manchester.</p>
          <p>{BUSINESS_INFO.conceptStatusNote}</p>
        </div>
      </div>
    </footer>
  );
};

/**
 * Compact mobile bottom booking bar that stays well within the 15% mobile sticky cap
 * (header 64px + bottom bar 52px = 116px / 844px = 13.7%).
 */
export const MobileStickyBookingBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-[#191622] px-4 h-[52px] flex items-center justify-between gap-3">
      <div className="min-w-0">
        <span className="block font-display font-extrabold text-xs text-[#191622] truncate">
          THE BUTCHERS CHOP SHOP
        </span>
        <span className="block font-mono-ticket text-[11px] text-[#4C1D95] truncate">
          8 Services · £25 – £55
        </span>
      </div>

      <a
        href={BUSINESS_INFO.links.booking}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-display font-extrabold text-white bg-[#7C3AED] border-2 border-[#191622] rounded-lg shadow-[2px_2px_0px_#191622] whitespace-nowrap shrink-0"
      >
        <span>BOOK YOUR CHOP</span>
        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
      </a>
    </div>
  );
};
