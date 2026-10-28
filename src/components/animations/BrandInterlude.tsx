import React from 'react';

const MARQUEE_PHRASES = [
  'GOOD CUTS',
  'CLEAN LINES',
  'PROPER DAPPER',
  'THE BUTCHERS CHOP SHOP',
  'ROYAL EXCHANGE MANCHESTER',
  'PRIME BARBERING',
];

export const BrandInterlude: React.FC = () => {
  return (
    <div
      className="relative bg-[#4C1D95] text-white border-b-2 border-[#191622] overflow-hidden select-none"
      aria-label="Proper Dapper brand interlude"
    >
      {/* Top Animated Purple Ink Line + Comb Teeth Motif */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-3">
        <svg
          viewBox="0 0 1200 28"
          fill="none"
          className="w-full h-5 text-[#F0ABFC]"
          aria-hidden="true"
        >
          <path
            d="M0 14H480L490 4V24L502 4V24L514 4V24L526 4V24L538 4V24L550 4V24L562 4V24L574 4V24L586 4V24L598 4V24L610 14H1200"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw-stroke"
          />
        </svg>
      </div>

      {/* Continuous Looping Marquee */}
      <div className="py-3.5 flex overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[0, 1, 2, 3].map((repeatIndex) => (
            <div key={repeatIndex} className="flex items-center">
              {MARQUEE_PHRASES.map((phrase, idx) => (
                <React.Fragment key={`${repeatIndex}-${idx}`}>
                  <span className="font-display font-extrabold text-sm sm:text-base tracking-wider px-4 text-white">
                    {phrase}
                  </span>
                  <span
                    className="text-[#F0ABFC] font-mono-ticket font-bold text-base px-2"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
