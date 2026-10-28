import React, { useState } from 'react';
import { ExternalLink, Instagram, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { PigMascot } from './illustrations/PigMascot';

export const ShopStorySection: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="the-shop"
      aria-labelledby="shop-story-heading"
      className="py-16 sm:py-24 bg-white border-b-2 border-[#191622]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left 6 Columns: Verified Daylight Interior Photograph + Storefront Inset */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="relative rounded-2xl border-2 border-[#191622] overflow-hidden shadow-[6px_6px_0px_#191622] bg-[#191622] h-full min-h-[340px]">
              {!photoError ? (
                <img
                  src="/images/shop/royal-exchange-interior.jpg"
                  alt="Interior of The Butchers Chop Shop inside The Royal Exchange Arcade Manchester showing six black leather barber chairs, white subway tile walls, and neon pig artwork"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setPhotoError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-10 bg-[#4C1D95] text-white">
                  <p className="font-display font-bold text-xl">
                    The Butchers Chop Shop · Royal Exchange Arcade
                  </p>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border-2 border-[#191622] rounded-xl p-4 shadow-[3px_3px_0px_#7C3AED]">
                <p className="font-mono-ticket text-xs font-bold text-[#4C1D95]">
                  THE ROYAL EXCHANGE ARCADE · MANCHESTER
                </p>
                <p className="font-display font-bold text-sm sm:text-base text-[#191622] mt-0.5">
                  Gloss white butcher tiles, custom neon pig sign, and classic Belmont-style chairs.
                </p>
              </div>
            </div>
          </div>

          {/* Right 6 Columns: Brand Story & Atmosphere */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#F5F0FF] border-2 border-[#191622] rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#4C1D95]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono-ticket text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
                  THE SHOP & ATMOSPHERE
                </span>
                <PigMascot size="sm" interactive={true} mood="wink" />
              </div>

              <h2
                id="shop-story-heading"
                className="font-display font-extrabold text-[#191622] text-3xl sm:text-5xl tracking-tight leading-[1.05]"
              >
                MORE THAN A QUICK TRIM.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#191622]/90 leading-relaxed font-medium">
                Good barbering starts with the details. Choose your service, book your appointment, and leave looking sharp.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#191622]/80 leading-relaxed">
                Tucked inside Manchester’s Grade II listed Royal Exchange Arcade,{' '}
                <strong className="font-bold text-[#191622]">The Butchers Chop Shop</strong> swaps stuffy salon clichés for crisp white subway tiles, butcher-counter wit, and proper barbering craft. Whether you’re ducking in between meetings for a 30-minute haircut or settling into the chair for a full 1-hour Hair &amp; Beard session, every chop is handled with care.
              </p>

              {/* Verified Highlights List (Clean Typography, No Pills) */}
              <div className="mt-8 pt-6 border-t-2 border-[#191622]/15 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-mono-ticket font-bold text-sm text-[#7C3AED] shrink-0">
                    01.
                  </span>
                  <p className="text-sm text-[#191622]">
                    <strong className="font-display font-bold">Butcher-Shop Aesthetic, Master Barbering:</strong>{' '}
                    Subway-tiled walls, our signature pink-purple neon pig, and a relaxed Manchester welcome.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono-ticket font-bold text-sm text-[#7C3AED] shrink-0">
                    02.
                  </span>
                  <p className="text-sm text-[#191622]">
                    <strong className="font-display font-bold">Upfront Pricing, Zero Surprises:</strong>{' '}
                    Every service duration and price is clearly ticketed before you sit down.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono-ticket font-bold text-sm text-[#7C3AED] shrink-0">
                    03.
                  </span>
                  <p className="text-sm text-[#191622]">
                    <strong className="font-display font-bold">Seamless Online Booking:</strong>{' '}
                    Pick your service on Slick (Proper Dapper) and lock in your slot without waiting in a queue.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTAs */}
            <div className="mt-8 pt-6 border-t-2 border-[#191622]/15 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-display font-extrabold text-white bg-[#7C3AED] hover:bg-[#4C1D95] border-2 border-[#191622] rounded-xl shadow-[4px_4px_0px_#191622] transition-all whitespace-nowrap shrink-0"
              >
                <Scissors className="w-4 h-4" aria-hidden="true" />
                <span>BOOK YOUR CHOP</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href={BUSINESS_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-display font-bold text-[#191622] bg-white hover:bg-[#EDE9FE] border-2 border-[#191622] rounded-xl shadow-[4px_4px_0px_#191622] transition-all whitespace-nowrap shrink-0"
              >
                <Instagram className="w-4 h-4 text-[#7C3AED]" aria-hidden="true" />
                <span>FOLLOW @THEBUTCHERSCHOPSHOP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
