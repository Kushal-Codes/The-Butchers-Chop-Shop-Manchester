import React from 'react';

/**
 * Continuously rotating purple-and-white SVG barber pole motif.
 */
export const BarberPoleMotif: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`inline-flex flex-col items-center select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        width="44"
        height="112"
        viewBox="0 0 44 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[3px_3px_0px_#191622]"
      >
        <defs>
          <clipPath id="poleTubeClip">
            <rect x="10" y="22" width="24" height="68" rx="4" />
          </clipPath>
        </defs>
        {/* Top Dome Cap */}
        <path
          d="M10 20C10 11 15.5 6 22 6C28.5 6 34 11 34 20H10Z"
          fill="#F0ABFC"
          stroke="#191622"
          strokeWidth="3.5"
        />
        <rect
          x="7"
          y="18"
          width="30"
          height="6"
          rx="3"
          fill="#4C1D95"
          stroke="#191622"
          strokeWidth="3"
        />

        {/* Animated Barber Pole Cylinder */}
        <g clipPath="url(#poleTubeClip)">
          <rect x="10" y="22" width="24" height="68" fill="#FFFFFF" />
          <g className="animate-barber-pole">
            {[-48, -24, 0, 24, 48, 72, 96].map((offset) => (
              <React.Fragment key={offset}>
                <path
                  d={`M4 ${offset}L40 ${offset + 20}L40 ${offset + 30}L4 ${offset + 10}Z`}
                  fill="#7C3AED"
                />
                <path
                  d={`M4 ${offset + 12}L40 ${offset + 32}L40 ${offset + 38}L4 ${offset + 18}Z`}
                  fill="#F0ABFC"
                />
              </React.Fragment>
            ))}
          </g>
          {/* Glass Tube Highlight */}
          <rect x="13" y="22" width="4" height="68" fill="#FFFFFF" fillOpacity="0.65" />
        </g>

        {/* Cylinder Outline */}
        <rect
          x="10"
          y="22"
          width="24"
          height="68"
          rx="4"
          stroke="#191622"
          strokeWidth="3.5"
        />

        {/* Bottom Cap */}
        <rect
          x="7"
          y="88"
          width="30"
          height="6"
          rx="3"
          fill="#4C1D95"
          stroke="#191622"
          strokeWidth="3"
        />
        <path
          d="M12 94H32L28 104H16L12 94Z"
          fill="#F0ABFC"
          stroke="#191622"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

/**
 * Rotating circular stamp reading "PROPER DAPPER · ROYAL EXCHANGE MCR ·"
 */
export const ProperDapperStamp: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-28 h-28 select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 140 140"
        className="w-full h-full animate-spin-slow"
        fill="none"
      >
        <circle
          cx="70"
          cy="70"
          r="64"
          fill="#4C1D95"
          stroke="#191622"
          strokeWidth="4"
        />
        <circle
          cx="70"
          cy="70"
          r="54"
          stroke="#F0ABFC"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <defs>
          <path
            id="stampCirclePath"
            d="M 70, 70 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
          />
        </defs>
        <text
          fill="#FFFFFF"
          fontSize="10.5"
          fontWeight="800"
          letterSpacing="2.4px"
          className="font-display"
        >
          <textPath href="#stampCirclePath" startOffset="0%">
            PROPER DAPPER · PROPER CHOP ·
          </textPath>
        </text>
      </svg>
      {/* Center Butcher Cleaver / Scissors Emblem */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-[#F0ABFC] border-2 border-[#191622] flex items-center justify-center font-display font-extrabold text-xs text-[#191622]">
          M2
        </div>
      </div>
    </div>
  );
};

/**
 * Custom illustrated craft cards for the gallery so we NEVER pass off generic stock photos
 * as work performed by The Butchers Chop Shop.
 */
export const CraftStudyIllustration: React.FC<{
  variant: 'skin-fade' | 'razor-shave' | 'beard-sculpt';
}> = ({ variant }) => {
  if (variant === 'skin-fade') {
    return (
      <svg
        viewBox="0 0 400 300"
        fill="none"
        className="w-full h-full bg-[#F5F0FF]"
        role="img"
        aria-label="Illustrated study of a sharp skin fade and textured crop"
      >
        {/* Subtle Tile Grid */}
        <path
          d="M0 60H400M0 120H400M0 180H400M0 240H400M80 0V300M160 0V300M240 0V300M320 0V300"
          stroke="#EDE9FE"
          strokeWidth="2"
        />
        {/* Butcher Cut Guide Dotted Arcs */}
        <path
          d="M110 150C140 125 220 125 265 150"
          stroke="#7C3AED"
          strokeWidth="3"
          strokeDasharray="6 6"
        />
        <text x="275" y="148" fill="#4C1D95" fontSize="11" fontWeight="700" fontFamily="Space Mono">
          HIGH TAPER LINE
        </text>
        {/* Head & Textured Crop Silhouette */}
        <path
          d="M125 260V210C115 190 115 140 125 110C135 75 180 62 235 72C265 78 275 95 260 115C265 145 265 185 250 215V260"
          fill="#FFFFFF"
          stroke="#191622"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Sharp Textured Crop Top Hair */}
        <path
          d="M122 112C125 70 175 52 242 66C268 72 280 92 262 106C230 96 165 98 122 112Z"
          fill="#4C1D95"
          stroke="#191622"
          strokeWidth="5"
        />
        {/* Fade Stipple Lines */}
        <path
          d="M135 128H245M140 142H235M148 156H220"
          stroke="#7C3AED"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="3 8"
        />
        {/* Corner Ticket Stamp */}
        <rect
          x="24"
          y="24"
          width="116"
          height="30"
          rx="4"
          fill="#F0ABFC"
          stroke="#191622"
          strokeWidth="3"
        />
        <text x="36" y="43" fill="#191622" fontSize="11" fontWeight="700" fontFamily="Space Mono">
          PRIME FADE SPEC
        </text>
      </svg>
    );
  }

  if (variant === 'beard-sculpt') {
    return (
      <svg
        viewBox="0 0 400 300"
        fill="none"
        className="w-full h-full bg-[#EDE9FE]"
        role="img"
        aria-label="Illustrated study of a sculpted beard trim and foil line-up"
      >
        <path
          d="M0 60H400M0 120H400M0 180H400M0 240H400M80 0V300M160 0V300M240 0V300M320 0V300"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
        {/* Sculpted Jaw & Full Beard */}
        <path
          d="M120 90C120 185 150 242 200 242C250 242 280 185 280 90C260 112 235 120 200 120C165 120 140 112 120 90Z"
          fill="#4C1D95"
          stroke="#191622"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Moustache Detail */}
        <path
          d="M148 112C168 94 190 100 200 112C210 100 232 94 252 112"
          stroke="#F0ABFC"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Cheek Line Guide */}
        <path
          d="M105 110L155 150M295 110L245 150"
          stroke="#7C3AED"
          strokeWidth="3.5"
          strokeDasharray="5 5"
        />
        <rect
          x="24"
          y="24"
          width="126"
          height="30"
          rx="4"
          fill="#FFFFFF"
          stroke="#191622"
          strokeWidth="3"
        />
        <text x="36" y="43" fill="#191622" fontSize="11" fontWeight="700" fontFamily="Space Mono">
          CHEEK LINE-UP
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      className="w-full h-full bg-[#F5F0FF]"
      role="img"
      aria-label="Illustrated study of a traditional straight-razor shave"
    >
      <path
        d="M0 60H400M0 120H400M0 180H400M0 240H400M80 0V300M160 0V300M240 0V300M320 0V300"
        stroke="#EDE9FE"
        strokeWidth="2"
      />
      {/* Open Cut-Throat Razor */}
      <path
        d="M90 210C140 155 215 130 295 145C302 158 292 175 272 178C205 170 145 192 108 228L90 210Z"
        fill="#4C1D95"
        stroke="#191622"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M275 145L155 75L132 108L245 165"
        fill="#FFFFFF"
        stroke="#191622"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <circle cx="266" cy="158" r="6" fill="#F0ABFC" stroke="#191622" strokeWidth="3" />
      <rect
        x="24"
        y="24"
        width="132"
        height="30"
        rx="4"
        fill="#F0ABFC"
        stroke="#191622"
        strokeWidth="3"
      />
      <text x="36" y="43" fill="#191622" fontSize="11" fontWeight="700" fontFamily="Space Mono">
        CLOSE SHAVE SPEC
      </text>
    </svg>
  );
};
