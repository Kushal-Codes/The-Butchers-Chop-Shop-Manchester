import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Navigation,
  Instagram,
  CalendarCheck,
  Info,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="find-us"
      aria-labelledby="find-us-heading"
      className="py-16 sm:py-24 bg-white border-b-2 border-[#191622]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="pb-10 border-b-2 border-[#191622] flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="font-mono-ticket text-xs sm:text-sm font-bold text-[#7C3AED] uppercase tracking-wider mb-2">
              ROYAL EXCHANGE ARCADE · ST ANN’S SQUARE & CROSS STREET
            </p>
            <h2
              id="find-us-heading"
              className="font-display font-extrabold text-[#191622] text-3xl sm:text-5xl tracking-tight"
            >
              FIND YOUR WAY TO A PROPER CHOP.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BUSINESS_INFO.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-display font-bold text-[#191622] bg-[#F5F0FF] hover:bg-[#EDE9FE] border-2 border-[#191622] rounded-xl shadow-[3px_3px_0px_#191622] transition-all whitespace-nowrap shrink-0"
            >
              <Navigation className="w-4 h-4 text-[#7C3AED]" aria-hidden="true" />
              <span>GET DIRECTIONS</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <a
              href={BUSINESS_INFO.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-display font-extrabold text-white bg-[#7C3AED] hover:bg-[#4C1D95] border-2 border-[#191622] rounded-xl shadow-[3px_3px_0px_#191622] transition-all whitespace-nowrap shrink-0"
            >
              <CalendarCheck className="w-4 h-4" aria-hidden="true" />
              <span>BOOK NOW</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* 12-Column Contact, Hours & Interactive Arcade Map Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: Address, Phone & Verified Opening Hours */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Address & Telephone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#F5F0FF] border-2 border-[#191622] rounded-2xl p-6 shadow-[4px_4px_0px_#191622] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#4C1D95] font-mono-ticket text-xs font-bold mb-3">
                    <MapPin className="w-4 h-4 text-[#7C3AED]" aria-hidden="true" />
                    <span>VERIFIED LOCATION</span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-[#191622]">
                    {BUSINESS_INFO.name}
                  </h3>
                  <address className="not-italic mt-2 text-sm text-[#191622]/85 space-y-1 leading-relaxed">
                    <p className="font-semibold">{BUSINESS_INFO.location.arcadeUnit}</p>
                    <p>{BUSINESS_INFO.location.street}</p>
                    <p>
                      {BUSINESS_INFO.location.city}, {BUSINESS_INFO.location.postcode}
                    </p>
                  </address>
                </div>

                <div className="mt-6 pt-4 border-t border-[#191622]/15 flex items-center justify-between">
                  <a
                    href={BUSINESS_INFO.links.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-display font-extrabold text-[#7C3AED] hover:text-[#4C1D95]"
                  >
                    <span>OPEN IN GOOGLE MAPS</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={BUSINESS_INFO.links.royalExchangeListing}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono-ticket text-[#191622]/70 hover:text-[#191622] underline"
                  >
                    Arcade Listing
                  </a>
                </div>
              </div>

              <div className="bg-white border-2 border-[#191622] rounded-2xl p-6 shadow-[4px_4px_0px_#191622] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#4C1D95] font-mono-ticket text-xs font-bold mb-3">
                    <Phone className="w-4 h-4 text-[#7C3AED]" aria-hidden="true" />
                    <span>DIRECT ENQUIRIES</span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-[#191622]">
                    Call or Book Online
                  </h3>
                  <a
                    href={BUSINESS_INFO.contact.phoneHref}
                    className="mt-3 inline-block font-mono-ticket font-bold text-2xl text-[#7C3AED] hover:text-[#4C1D95] underline decoration-2 underline-offset-4"
                  >
                    {BUSINESS_INFO.contact.phoneDisplay}
                  </a>
                  <p className="mt-2 text-xs text-[#191622]/75 leading-relaxed">
                    {BUSINESS_INFO.contact.phoneNote}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#191622]/15 flex items-center justify-between">
                  <a
                    href={BUSINESS_INFO.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#191622] hover:text-[#7C3AED]"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#7C3AED]" aria-hidden="true" />
                    <span>{BUSINESS_INFO.links.instagramHandle}</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.links.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-display font-bold text-[#4C1D95] hover:underline"
                  >
                    Read Google Reviews →
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Card with Transparent Public-Listing Verification Note */}
            <div className="bg-white border-2 border-[#191622] rounded-2xl p-6 shadow-[4px_4px_0px_#191622]">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b-2 border-[#EDE9FE]">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#7C3AED]" aria-hidden="true" />
                  <h3 className="font-display font-extrabold text-xl text-[#191622]">
                    Opening Hours & Live Schedule
                  </h3>
                </div>
                <span className="font-mono-ticket text-xs font-bold text-[#4C1D95]">
                  CHECK LIVE SLOTS ON SLICK
                </span>
              </div>

              <div className="mt-4 divide-y divide-[#EDE9FE]">
                {BUSINESS_INFO.openingHours.schedule.map((row) => (
                  <div
                    key={row.day}
                    className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm"
                  >
                    <span className="font-display font-bold text-[#191622]">
                      {row.day}
                    </span>
                    <span className="font-mono-ticket text-[#191622]/90">
                      {row.directoryReported}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-[#F5F0FF] border border-[#7C3AED]/30 flex items-start gap-2.5 text-xs text-[#191622]/85">
                <Info className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  {BUSINESS_INFO.openingHours.verificationWarning}{' '}
                  <a
                    href={BUSINESS_INFO.links.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#7C3AED] underline"
                  >
                    View real-time chair availability on Slick
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Illustrated Royal Exchange Arcade Locator Card + Storefront Preview */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#191622] text-white border-2 border-[#191622] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#7C3AED]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono-ticket text-xs font-bold text-[#F0ABFC]">
                  MANCHESTER CITY CENTRE · 53.4826° N, 2.2449° W
                </span>
                <span className="font-mono-ticket text-xs font-bold bg-[#7C3AED] text-white px-2.5 py-0.5 rounded">
                  M2 7EA
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white">
                Inside The Royal Exchange Arcade
              </h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Step off St Ann’s Square or Cross Street into the covered Royal Exchange Arcade. Look for the rotating barber pole, butcher window display, and bright purple neon pig glow.
              </p>

              {/* Custom Architectural SVG Map of Royal Exchange Arcade */}
              <div className="mt-6 rounded-xl border-2 border-white/20 bg-[#4C1D95]/40 p-4 overflow-hidden">
                <svg
                  viewBox="0 0 400 220"
                  fill="none"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Diagram map showing The Butchers Chop Shop inside The Royal Exchange Arcade between St Ann's Square and Cross Street, Manchester"
                >
                  {/* Background Grid */}
                  <path
                    d="M0 44H400M0 88H400M0 132H400M0 176H400M80 0V220M160 0V220M240 0V220M320 0V220"
                    stroke="#7C3AED"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />
                  {/* St Ann's Square West Corridor */}
                  <rect
                    x="16"
                    y="20"
                    width="84"
                    height="180"
                    rx="6"
                    fill="#191622"
                    stroke="#F0ABFC"
                    strokeWidth="2"
                  />
                  <text
                    x="58"
                    y="114"
                    fill="#F0ABFC"
                    fontSize="10"
                    fontWeight="700"
                    textAnchor="middle"
                    fontFamily="Space Mono"
                    transform="rotate(-90 58 114)"
                  >
                    ST ANN’S SQUARE
                  </text>

                  {/* Cross Street East Corridor */}
                  <rect
                    x="300"
                    y="20"
                    width="84"
                    height="180"
                    rx="6"
                    fill="#191622"
                    stroke="#F0ABFC"
                    strokeWidth="2"
                  />
                  <text
                    x="342"
                    y="114"
                    fill="#F0ABFC"
                    fontSize="10"
                    fontWeight="700"
                    textAnchor="middle"
                    fontFamily="Space Mono"
                    transform="rotate(90 342 114)"
                  >
                    CROSS STREET (TRAM)
                  </text>

                  {/* Royal Exchange Arcade Walkway */}
                  <path
                    d="M100 110H300"
                    stroke="#EDE9FE"
                    strokeWidth="28"
                  />
                  <path
                    d="M106 110H294"
                    stroke="#7C3AED"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                  />

                  {/* Pin Marker for The Butchers Chop Shop */}
                  <rect
                    x="136"
                    y="38"
                    width="128"
                    height="50"
                    rx="8"
                    fill="#F0ABFC"
                    stroke="#191622"
                    strokeWidth="3"
                  />
                  <text
                    x="200"
                    y="59"
                    fill="#191622"
                    fontSize="10"
                    fontWeight="800"
                    textAnchor="middle"
                    fontFamily="Space Mono"
                  >
                    THE BUTCHERS
                  </text>
                  <text
                    x="200"
                    y="75"
                    fill="#191622"
                    fontSize="10"
                    fontWeight="800"
                    textAnchor="middle"
                    fontFamily="Space Mono"
                  >
                    CHOP SHOP (M2)
                  </text>
                  <circle
                    cx="200"
                    cy="110"
                    r="9"
                    fill="#7C3AED"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href={BUSINESS_INFO.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-display font-extrabold text-[#191622] bg-[#F0ABFC] hover:bg-white border-2 border-[#191622] rounded-xl transition-colors whitespace-nowrap"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>

              <a
                href={BUSINESS_INFO.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-display font-extrabold text-white bg-[#7C3AED] hover:bg-[#4C1D95] border-2 border-white/30 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>BOOK NOW</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
