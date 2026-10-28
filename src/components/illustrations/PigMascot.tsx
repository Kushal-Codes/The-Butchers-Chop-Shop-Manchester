import React, { useState, useEffect } from 'react';

interface PigMascotProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  interactive?: boolean;
  className?: string;
  mood?: 'default' | 'excited' | 'wink';
}

/**
 * The signature cheeky pig mascot of The Butchers Chop Shop:
 * Bold expressive pig face, exaggerated cheeky grin, pink-purple colouring (#F0ABFC / #7C3AED),
 * dapper barber quiff, and thick hand-drawn ink-black outlines (#191622).
 */
export const PigMascot: React.FC<PigMascotProps> = ({
  size = 'md',
  interactive = true,
  className = '',
  mood = 'default',
}) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [snoutWiggle, setSnoutWiggle] = useState(false);

  useEffect(() => {
    if (!interactive) return;
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 4200);
    return () => clearInterval(blinkInterval);
  }, [interactive]);

  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-28 h-28',
    hero: 'w-32 h-32 sm:w-40 sm:h-40',
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none transition-transform duration-200 ${
        interactive ? 'hover:scale-105 hover:-rotate-2' : ''
      } ${size === 'hero' ? 'animate-pig-entrance' : ''} ${dimensions} ${className}`}
      onMouseEnter={() => interactive && setSnoutWiggle(true)}
      onMouseLeave={() => interactive && setSnoutWiggle(false)}
    >
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-[4px_5px_0px_#191622]"
        role="img"
        aria-label="The Butchers Chop Shop cheeky pig mascot"
      >
        {/* Outer Purple Offset Sticker Aura */}
        <circle
          cx="110"
          cy="116"
          r="86"
          fill="#EDE9FE"
          stroke="#4C1D95"
          strokeWidth="4"
          strokeDasharray="8 6"
        />

        {/* Left Floppy Butcher-Pig Ear */}
        <path
          d="M42 82C16 48 34 18 68 38C78 44 82 56 76 70L42 82Z"
          fill="#F0ABFC"
          stroke="#191622"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44 64C34 46 44 34 60 44"
          stroke="#7C3AED"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Right Floppy Butcher-Pig Ear */}
        <path
          d="M178 82C204 48 186 18 152 38C142 44 138 56 144 70L178 82Z"
          fill="#F0ABFC"
          stroke="#191622"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M176 64C186 46 176 34 160 44"
          stroke="#7C3AED"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Main Chubby Pig Head */}
        <path
          d="M36 122C36 76 68 48 110 48C152 48 184 76 184 122C184 164 154 188 110 188C66 188 36 164 36 122Z"
          fill="#F0ABFC"
          stroke="#191622"
          strokeWidth="8"
          strokeLinejoin="round"
        />

        {/* Cheek Highlight Blushes */}
        <ellipse cx="60" cy="134" rx="12" ry="8" fill="#E879F9" />
        <ellipse cx="160" cy="134" rx="12" ry="8" fill="#E879F9" />

        {/* Proper Dapper Pompadour / Quiff Hair */}
        <path
          d="M78 52C76 24 114 10 138 26C154 36 148 56 132 56C144 46 138 36 122 38C108 40 96 52 78 52Z"
          fill="#7C3AED"
          stroke="#191622"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Expressive Raised Eyebrows */}
        <path
          d="M66 78C76 70 88 72 94 78"
          stroke="#191622"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M154 78C144 70 132 72 126 78"
          stroke="#191622"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Left & Right Eyes (with blink/wink states) */}
        {isBlinking || mood === 'wink' ? (
          <path
            d="M68 96C76 88 86 88 92 96"
            stroke="#191622"
            strokeWidth="6"
            strokeLinecap="round"
          />
        ) : (
          <g>
            <circle cx="80" cy="95" r="10" fill="#191622" />
            <circle cx="83" cy="91" r="3.5" fill="#FFFFFF" />
          </g>
        )}

        {isBlinking ? (
          <path
            d="M128 96C134 88 144 88 152 96"
            stroke="#191622"
            strokeWidth="6"
            strokeLinecap="round"
          />
        ) : (
          <g>
            <circle cx="140" cy="95" r="10" fill="#191622" />
            <circle cx="143" cy="91" r="3.5" fill="#FFFFFF" />
          </g>
        )}

        {/* Iconic Upturned Snout (wiggles on hover) */}
        <g
          style={{
            transform: snoutWiggle || mood === 'excited' ? 'translateY(-3px) rotate(2deg)' : 'none',
            transformOrigin: '110px 120px',
            transition: 'transform 180ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <ellipse
            cx="110"
            cy="120"
            rx="32"
            ry="21"
            fill="#E879F9"
            stroke="#191622"
            strokeWidth="7"
          />
          <ellipse cx="98" cy="120" rx="6" ry="9" fill="#191622" />
          <ellipse cx="122" cy="120" rx="6" ry="9" fill="#191622" />
          {/* Little Snout Shine */}
          <path
            d="M90 109C96 105 106 105 112 107"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>

        {/* Exaggerated Cheeky Tooth Grin */}
        <path
          d="M66 146C78 172 142 172 154 146"
          fill="#191622"
          stroke="#191622"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Gleaming White Teeth Row */}
        <path
          d="M74 148C92 158 128 158 146 148L142 158C124 166 96 166 78 158L74 148Z"
          fill="#FFFFFF"
        />
        {/* Cheeky Smile Dimples */}
        <path
          d="M60 142C62 148 66 152 72 153"
          stroke="#191622"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M160 142C158 148 154 152 148 153"
          stroke="#191622"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
