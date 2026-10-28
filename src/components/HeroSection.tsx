import React, { useState } from 'react';
import { ExternalLink, Scissors, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { PigMascot } from './illustrations/PigMascot';
import { BarberPoleMotif, ProperDapperStamp } from './illustrations/BrandMotifs';

export const HeroSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-white bg-tile-pattern border-b-2 border-[#191622] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 pb-12 lg:py-16">
        {/* Main Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left 7 Columns: Pig Mascot, Oversized Headline, Hand-Drawn Accents & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white border-2 border-[#191622] rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#191622] relative">
            {/* Top Kicker Row: Location Text + Pig Mascot */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono-ticket font-bold text-[#4C1D95]">
                <MapPin className="w-4 h-4 text-[#7C3AED] shrink-0" aria-hidden="true" />
                <span>THE ROYAL EXCHANGE ARCADE · MANCHESTER M2</span>
              </div>

              <span className="inline-block -rotate-2 font-mono-ticket text-xs font-bold text-[#191622] bg-[#F0ABFC] border-2 border-[#191622] px-3 py-1 shadow-[2px_2px_0px_#191622]">
                PROPER DAPPER. PROPER CHOP.
              </span>
            </div>

            {/* Centerpiece Headline + Pig Mascot Interaction */}
            <div className="my-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                <PigMascot size="hero" interactive={true} className="shrink-0" />
                <div>
                  <p className="font-mono-ticket text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-1">
                    PRIME CUTS · ZERO BULL
                  </p>
                  <p className="text-sm sm:text-base text-[#191622]/80 max-w-md">
                    Step inside Manchester’s cheekiest butcher-styled barbershop for razor-sharp fades, classic restyles, and hot towel shaves.
                  </p>
                </div>
              </div>

              <h1
                id="hero-heading"
                className="font-display font-extrabold text-[#191622] tracking-tight leading-[0.98] text-[clamp(2.4rem,4.8vw,4.35rem)]"
              >
                <span className="block">GOOD HAIR.</span>
                <span className="block text-[#4C1D95] relative inline-block mt-1">
                  BAD HAIR DAYS?
                  {/* Hand-drawn SVG purple underline */}
                  <svg
                    viewBox="0 0 320 18"
                    fill="none"
                    className="w-full h-3.5 mt-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 12C82 3 210 4 316 13"
                      stroke="#7C3AED"
                      strokeWidth="5"
                      strokeLinecap="round"
                      className="animate-draw-stroke"
                    />
                  </svg>
                </span>
                <span className="block mt-1">
                  NOT{' '}
                  <span className="inline-block bg-[#EDE9FE] px-3 py-0.5 border-2 border-[#191622] rounded-lg -rotate-1 shadow-[3px_3px_0px_#7C3AED]">
                    HERE.
                  </span>
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#191622]/90 max-w-xl leading-relaxed font-medium">
                From a fresh haircut to the full hair-and-beard treatment, get yourself looking properly dapper.
              </p>
            </div>

            {/* CTA Action Row */}
            <div className="mt-8 pt-6 border-t-2 border-[#EDE9FE] flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-display font-extrabold text-white bg-[#7C3AED] hover:bg-[#4C1D95] border-2 border-[#191622] rounded-xl shadow-[4px_4px_0px_#191622] hover:translate-y-[-2px] active:translate-y-[1px] transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4C1D95]"
              >
                <Scissors className="w-5 h-5" aria-hidden="true" />
                <span>BOOK YOUR CHOP</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-display font-bold text-[#191622] bg-[#F5F0FF] hover:bg-[#EDE9FE] border-2 border-[#191622] rounded-xl shadow-[4px_4px_0px_#191622] hover:translate-y-[-2px] active:translate-y-[1px] transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C3AED]"
              >
                <span>EXPLORE SERVICES</span>
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Real Verified Shop Photography + Barber Pole + Rotating Stamp */}
          <div className="lg:col-span-5 flex flex-col justify-between relative">
            {/* Floating Rotating Stamp on Desktop */}
            <div className="hidden sm:block absolute -top-5 -right-3 z-20">
              <ProperDapperStamp />
            </div>

            {/* Floating Barber Pole Motif */}
            <div className="hidden sm:block absolute -left-5 bottom-8 z-20">
              <BarberPoleMotif />
            </div>

            <div className="h-full bg-[#191622] border-2 border-[#191622] rounded-2xl overflow-hidden shadow-[6px_6px_0px_#7C3AED] flex flex-col justify-between relative group">
              <div className="relative w-full h-72 sm:h-96 lg:h-full min-h-[340px] overflow-hidden">
                {!imgError ? (
                  <img
                    src="/images/shop/shop-photo-1148.jpg"
                    alt="Inside The Butchers Chop Shop in The Royal Exchange Arcade Manchester, showing white butcher tiles and pink-purple neon pig sign"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-[#4C1D95] flex flex-col items-center justify-center p-8 text-center text-white">
                    <PigMascot size="lg" interactive={false} />
                    <p className="mt-4 font-display font-bold text-xl">
                      The Butchers Chop Shop · Royal Exchange Arcade
                    </p>
                  </div>
                )}

                {/* Measured Gradient Scrim for Legible Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#191622]/90 via-[#191622]/25 to-transparent" />

                {/* Bottom Caption Inside Real Shop Photo */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono-ticket text-xs text-[#F0ABFC] font-bold">
                      INSIDE THE SHOP · ROYAL EXCHANGE ARCADE
                    </p>
                    <p className="font-display font-bold text-lg sm:text-xl mt-0.5">
                      White Butcher Tiles & Neon Pig Sign
                    </p>
                    <p className="text-xs text-white/80 mt-1">
                      St Ann’s Square & Cross Street, Manchester M2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Information Strip Below Hero Split */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F5F0FF] border-2 border-[#191622] rounded-xl p-4 sm:p-5 shadow-[4px_4px_0px_#191622]">
          <div className="flex items-center justify-between sm:justify-start gap-3 sm:border-r sm:border-[#191622]/15 sm:pr-4">
            <span className="font-mono-ticket text-xs font-bold text-[#4C1D95]">
              01 · TRANSPARENT MENU
            </span>
            <span className="text-sm font-bold text-[#191622] font-mono-ticket">
              8 Services · £25.00 – £55.00
            </span>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-3 sm:border-r sm:border-[#191622]/15 sm:pr-4">
            <span className="font-mono-ticket text-xs font-bold text-[#4C1D95]">
              02 · CITY CENTRE SPOT
            </span>
            <a
              href={BUSINESS_INFO.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#191622] hover:text-[#7C3AED] underline"
            >
              Royal Exchange Arcade, M2 7EA
            </a>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-3">
            <span className="font-mono-ticket text-xs font-bold text-[#4C1D95]">
              03 · ENQUIRIES
            </span>
            <a
              href={BUSINESS_INFO.contact.phoneHref}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#191622] hover:text-[#7C3AED] font-mono-ticket"
            >
              <Phone className="w-3.5 h-3.5 text-[#7C3AED]" aria-hidden="true" />
              <span>{BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
