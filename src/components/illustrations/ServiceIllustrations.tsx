import React from 'react';
import { ServiceItem } from '../../data/services';

interface ServiceIllustrationProps {
  type: ServiceItem['illustrationType'];
  isHovered?: boolean;
}

/**
 * Original hand-drawn inline SVG illustrations for all 8 services:
 * - Haircut: scissors & comb
 * - Re-Style: sweeping transformation comb & shears
 * - Beard Trim: sculpted beard & precision trimmer
 * - Shave: classic cut-throat straight razor
 * - Hair & Beard: scissors + full beard badge
 * - Hair & Shave: straight razor + barber comb
 * - Kids (12 and under): friendly junior clipper with star spark
 * - Clipper & Beard: heavy-duty fade clipper + beard silhouette
 */
export const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({
  type,
  isHovered = false,
}) => {
  const activeStroke = isHovered ? '#7C3AED' : '#191622';
  const accentFill = isHovered ? '#7C3AED' : '#EDE9FE';
  const secondaryFill = isHovered ? '#F0ABFC' : '#F5F0FF';

  switch (type) {
    case 'haircut':
      return (
        <svg
          viewBox="0 0 96 96"
          fill="none"
          className="w-16 h-16 transition-transform duration-200 group-hover:rotate-6 group-hover:scale-105"
          aria-hidden="true"
        >
          <circle cx="48" cy="48" r="40" fill={secondaryFill} stroke="#191622" strokeWidth="3" />
          {/* Barber Scissors Blades */}
          <path
            d="M26 26L62 56M26 70L62 40"
            stroke={activeStroke}
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="46" cy="48" r="4" fill="#7C3AED" stroke="#191622" strokeWidth="2.5" />
          {/* Finger Rings */}
          <circle cx="68" cy="60" r="9" fill={accentFill} stroke="#191622" strokeWidth="4" />
          <circle cx="68" cy="36" r="9" fill="#FFFFFF" stroke="#191622" strokeWidth="4" />
          {/* Tang Rest */}
          <path d="M76 64L82 68" stroke="#191622" strokeWidth="4" strokeLinecap="round" />
          {/* Snip Motion Lines */}
          <path
            d="M18 44L24 48L18 52"
            stroke="#7C3AED"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'restyle':
      return (
        <svg
          viewBox="0 0 96 96"
          fill="none"
          className="w-16 h-16 transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-105"
          aria-hidden="true"
        >
          <circle cx="48" cy="48" r="40" fill={secondaryFill} stroke="#191622" strokeWidth="3" />
          {/* Sweeping Transformation Motion Wave */}
          <path
            d="M18 60C28 32 54 22 78 34"
            stroke="#7C3AED"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeDasharray="6 5"
          />
          {/* Classic Barber Comb Spine */}
          <rect
            x="24"
            y="48"
            width="50"
            height="12"
            rx="4"
            transform="rotate(-18 24 48)"
            fill={accentFill}
            stroke="#191622"
            strokeWidth="3.5"
          />
          {/* Comb Teeth */}
          <path
            d="M30 58L34 70M38 56L42 68M46 53L50 65M54 50L58 62M62 48L66 60M70 45L74 57"
            stroke={activeStroke}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'beard-trim':
      return (
        <svg
          viewBox="0 0 96 96"
          fill="none"
          className="w-16 h-16 transition-transform duration-200 group-hover:scale-105"
          aria-hidden="true"
        >
          <circle cx="48" cy="48" r="40" fill={secondaryFill} stroke="#191622" strokeWidth="3" />
          {/* Sculpted Beard Silhouette */}
          <path
            d="M24 38C24 62 34 74 48 74C62 74 72 62 72 38C66 42 60 44 48 44C36 44 30 42 24 38Z"
            fill={accentFill}
            stroke="#191622"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Moustache Handlebar */}
          <path
            d="M32 36C38 30 45 32 48 36C51 32 58 30 64 36"
            stroke="#7C3AED"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Precision Line-up Trimmer */}
          <rect
            x="40"
            y="16"
            width="16"
            height="12"
            rx="2"
            fill="#FFFFFF"
            stroke="#191622"
            strokeWidth="3"
          />
          <path d="M38 16H58" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'shave':
      return (
        <svg
          viewBox="0 0 96 96"
          fill="none"
          className="w-16 h-16 transition-transform duration-200 group-hover:rotate-3 group-hover:scale-105"
          aria-hidden="true"
        >
          <circle cx="48" cy="48" r="40" fill={secondaryFill} stroke="#191622" strokeWidth="3" />
          {/* Cut-Throat Straight Razor Handle */}
          <path
            d="M22 66C32 48 52 38 72 42C74 46 72 52 66 54C48 52 34 60 26 72L22 66Z"
            fill={accentFill}
            stroke="#191622"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Open Steel Razor Blade */}
          <path
            d="M66 42L34 22L28 32L58 48"
            fill="#FFFFFF"
            stroke={activeStroke}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Pivot Pin */}
          <circle cx="64" cy="46" r="3" fill="#7C3AED" />
        </svg>
      );

    case 'hair-beard':
      return (
        <svg
          viewBox="0 0 96 96"
          fill="none"
          className="w-16 h-16 transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105"
          aria-hidden="true"
        >
          <circle cx="48" cy="48" r="40" fill={secondaryFill} stroke="#191622" strokeWidth="3" />
          {/* Top Dapper Quiff Crown */}
          <path
            d="M28 36C28 22 44 16 58 22C66 26 68 34 64 38H28V36Z"
            fill="#7C3AED"
            stroke="#191622"
            strokeWidth="3.5"
          />
          {/* Lower Full Beard */}
          <path
            d="M28 50C28 66 36 76 48 76C60 76 68 66 68 50H56C54 56 42 56 40 50H28Z"
            fill={accentFill}
            stroke="#191622"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Crossed Shear Accent */}
          <path d="M20 44H76" stroke="#191622" strokeWidth="3" strokeDasharray="4 4" />
        </svg>
      );

    case 'hair-shave':
      return (
        <svg
          viewBox="0 0 96 96"
          fill="none"
          className="w-16 h-16 transition-transform duration-200 group-hover:rotate-6 group-hover:scale-105"
          aria-hidden="true"
        >
          <circle cx="48" cy="48" r="40" fill={secondaryFill} stroke="#191622" strokeWidth="3" />
          {/* Diagonal Straight Razor */}
          <path
            d="M24 68L68 24"
            stroke={activeStroke}
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Diagonal Barber Comb Crossing */}
          <rect
            x="28"
            y="24"
            width="48"
            height="10"
            rx="3"
            transform="rotate(45 28 24)"
            fill={accentFill}
            stroke="#191622"
            strokeWidth="3.5"
          />
          {/* Shaving Brush Lather Puff */}
          <circle cx="48" cy="48" r="9" fill="#F0ABFC" stroke="#191622" strokeWidth="3.5" />
        </svg>
      );

    case 'kids':
      return (
        <svg
          viewBox="0 0 96 96"
          fill="none"
          className="w-16 h-16 transition-transform duration-200 group-hover:scale-105"
          aria-hidden="true"
        >
          <circle cx="48" cy="48" r="40" fill={secondaryFill} stroke="#191622" strokeWidth="3" />
          {/* Compact Junior Clipper Body */}
          <rect
            x="34"
            y="32"
            width="28"
            height="40"
            rx="12"
            fill={accentFill}
            stroke="#191622"
            strokeWidth="4"
          />
          {/* Friendly Clipper Guard */}
          <rect
            x="38"
            y="22"
            width="20"
            height="10"
            rx="2"
            fill="#FFFFFF"
            stroke="#191622"
            strokeWidth="3.5"
          />
          {/* Little Smile on Junior Clipper */}
          <path
            d="M42 50C45 55 51 55 54 50"
            stroke="#191622"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Cheeky Star Spark */}
          <path
            d="M70 24L72 30L78 32L72 34L70 40L68 34L62 32L68 30L70 24Z"
            fill="#7C3AED"
          />
        </svg>
      );

    case 'clipper-beard':
      return (
        <svg
          viewBox="0 0 96 96"
          fill="none"
          className="w-16 h-16 transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105"
          aria-hidden="true"
        >
          <circle cx="48" cy="48" r="40" fill={secondaryFill} stroke="#191622" strokeWidth="3" />
          {/* Heavy Duty Fade Clipper */}
          <rect
            x="24"
            y="28"
            width="24"
            height="42"
            rx="8"
            fill="#FFFFFF"
            stroke="#191622"
            strokeWidth="4"
          />
          <path d="M26 24H46" stroke="#7C3AED" strokeWidth="5" strokeLinecap="round" />
          {/* Tapered Beard Silhouette Next to Clipper */}
          <path
            d="M52 36C52 56 58 68 68 68C74 68 78 58 78 36H52Z"
            fill={accentFill}
            stroke="#191622"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};
