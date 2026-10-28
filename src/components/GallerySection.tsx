import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Instagram,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Scissors,
} from 'lucide-react';
import { GALLERY_ITEMS, CRAFT_GUIDE_ITEMS, GalleryItem } from '../data/gallery';
import { BUSINESS_INFO } from '../data/business';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  const activeItem: GalleryItem | null =
    activeLightboxIndex !== null ? GALLERY_ITEMS[activeLightboxIndex] : null;

  return (
    <section
      id="our-work"
      aria-labelledby="gallery-heading"
      className="py-16 sm:py-24 bg-[#F5F0FF] bg-tile-pattern border-b-2 border-[#191622]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Editorial Heading & Instagram CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b-2 border-[#191622]">
          <div>
            <p className="font-mono-ticket text-xs sm:text-sm font-bold text-[#4C1D95] uppercase tracking-wider mb-2">
              INSIDE THE ROYAL EXCHANGE ARCADE · MANCHESTER M2
            </p>
            <h2
              id="gallery-heading"
              className="font-display font-extrabold text-[#191622] text-3xl sm:text-5xl tracking-tight"
            >
              THE PROOF IS IN THE CHOP.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#191622]/80 max-w-2xl">
              Step inside our subway-tiled shop in the heart of Manchester. Explore the cutting floor below, read our service guide, and head to our official Instagram for fresh daily cuts from the chairs.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={BUSINESS_INFO.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-display font-extrabold text-white bg-[#191622] hover:bg-[#7C3AED] border-2 border-[#191622] rounded-xl shadow-[4px_4px_0px_#7C3AED] hover:shadow-[4px_4px_0px_#191622] transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C3AED]"
            >
              <Instagram className="w-4 h-4 text-[#F0ABFC]" aria-hidden="true" />
              <span>MORE FROM INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* 4 Real Shop Photography Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item, idx) => {
            const isBroken = brokenImages[item.id];
            return (
              <div
                key={item.id}
                className={`group relative bg-white border-2 border-[#191622] rounded-2xl overflow-hidden shadow-[5px_5px_0px_#191622] hover:shadow-[7px_7px_0px_#7C3AED] transition-all flex flex-col justify-between ${item.colSpanClass}`}
              >
                {/* Interactive Image Trigger */}
                <button
                  type="button"
                  onClick={() => setActiveLightboxIndex(idx)}
                  aria-label={`Inspect ${item.title} in full-screen lightbox`}
                  className="relative w-full text-left overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#7C3AED]"
                >
                  <div className="w-full h-64 sm:h-80 overflow-hidden bg-[#191622] relative">
                    {!isBroken ? (
                      <img
                        src={item.imageUrl}
                        alt={item.alt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setBrokenImages((prev) => ({ ...prev, [item.id]: true }))
                        }
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-6 bg-[#4C1D95] text-white font-display font-bold">
                        {item.title}
                      </div>
                    )}

                    {item.annotationText && (
                      <span className="absolute top-3 left-3 font-mono-ticket text-[11px] font-bold bg-[#191622] text-[#F0ABFC] px-2.5 py-1 rounded border border-[#F0ABFC]">
                        {item.annotationText}
                      </span>
                    )}

                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-white/95 text-[#191622] border-2 border-[#191622] px-3 py-1 rounded-lg font-display font-bold text-xs shadow-[2px_2px_0px_#191622] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>VIEW PHOTO</span>
                    </span>
                  </div>
                </button>

                {/* Card Editorial Details (Clean, Informative, No Source Footers) */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#4C1D95] font-mono-ticket font-bold mb-1.5">
                      <span>{item.tag}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.subtitle}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#191622]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#191622]/80 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative 3-Column Chop Guide (Replaces the 3 imageless cards) */}
        <div className="mt-14 pt-12 border-t-2 border-[#191622]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono-ticket text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
                WHAT TO EXPECT IN THE CHAIR
              </p>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#191622] mt-1">
                THE PROPER DAPPER CHOP GUIDE
              </h3>
            </div>
            <p className="text-sm text-[#191622]/75 max-w-md">
              Everything you need to know to pick the right appointment duration before booking on Slick.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CRAFT_GUIDE_ITEMS.map((guide) => (
              <div
                key={guide.id}
                className="bg-white border-2 border-[#191622] rounded-2xl p-6 shadow-[5px_5px_0px_#4C1D95] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-dashed border-[#191622]/20">
                    <span className="font-mono-ticket text-xs font-bold text-[#7C3AED]">
                      {guide.code}
                    </span>
                    <span className="font-mono-ticket text-xs font-bold text-[#191622] bg-[#EDE9FE] px-2.5 py-0.5 rounded border border-[#191622]">
                      {guide.durationAndPrice}
                    </span>
                  </div>

                  <h4 className="font-display font-extrabold text-xl text-[#191622]">
                    {guide.title}
                  </h4>
                  <p className="mt-1 font-mono-ticket text-xs font-bold text-[#4C1D95]">
                    {guide.recommendedService}
                  </p>
                  <p className="mt-3 text-sm text-[#191622]/85 leading-relaxed">
                    {guide.summary}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {guide.details.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#191622]/85 leading-relaxed"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EDE9FE] flex items-center justify-between">
                  <a
                    href={BUSINESS_INFO.links.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-display font-extrabold text-[#7C3AED] hover:text-[#4C1D95]"
                  >
                    <Scissors className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>BOOK ON SLICK</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>

                  <a
                    href={BUSINESS_INFO.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono-ticket font-bold text-[#191622]/70 hover:text-[#191622] underline"
                  >
                    See examples on IG →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 bg-[#191622]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="bg-white border-4 border-[#191622] rounded-2xl max-w-4xl w-full overflow-hidden shadow-[8px_8px_0px_#7C3AED]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#F5F0FF] border-b-2 border-[#191622]">
              <div>
                <span className="font-mono-ticket text-xs font-bold text-[#7C3AED]">
                  {activeItem.tag} · {activeItem.subtitle}
                </span>
                <h3
                  id="lightbox-title"
                  className="font-display font-extrabold text-xl text-[#191622]"
                >
                  {activeItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveLightboxIndex(null)}
                aria-label="Close gallery lightbox"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white text-[#191622] border-2 border-[#191622] hover:bg-[#7C3AED] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Lightbox Media */}
            <div className="bg-[#191622] max-h-[65vh] flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.alt}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>

            {/* Lightbox Footer & Controls */}
            <div className="p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="max-w-xl">
                <p className="text-sm text-[#191622]/90">{activeItem.caption}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setActiveLightboxIndex((prev) =>
                      prev === null
                        ? 0
                        : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
                    )
                  }
                  aria-label="Previous gallery item"
                  className="p-2.5 rounded-lg bg-[#F5F0FF] border-2 border-[#191622] hover:bg-[#EDE9FE] cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveLightboxIndex((prev) =>
                      prev === null ? 0 : (prev + 1) % GALLERY_ITEMS.length
                    )
                  }
                  aria-label="Next gallery item"
                  className="p-2.5 rounded-lg bg-[#F5F0FF] border-2 border-[#191622] hover:bg-[#EDE9FE] cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
                <a
                  href={BUSINESS_INFO.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-display font-bold text-white bg-[#7C3AED] hover:bg-[#4C1D95] border-2 border-[#191622] rounded-lg"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>@thebutcherschopshop</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
