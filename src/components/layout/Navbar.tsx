import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { PigMascot } from '../illustrations/PigMascot';

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'The Shop', href: '#the-shop' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Find Us', href: '#find-us' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b-2 border-[#191622] shadow-[0_4px_0_0_#191622]'
          : 'bg-white border-b-2 border-[#191622]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-6 lg:gap-8">
        {/* Zone 1: Brand Pig Mascot + Single-line Wordmark */}
        <a
          href="#"
          className="inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-xl font-extrabold tracking-tight text-[#191622] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C3AED] group"
        >
          <PigMascot size="sm" interactive={false} />
          <span className="font-display">THE BUTCHERS CHOP SHOP</span>
        </a>

        {/* Zone 2: 4 Clean Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#191622]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#7C3AED] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2.5px] after:bg-[#7C3AED] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C3AED]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 High-Contrast Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={BUSINESS_INFO.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-display font-bold tracking-wide text-white bg-[#7C3AED] hover:bg-[#4C1D95] border-2 border-[#191622] rounded-lg shadow-[3px_3px_0px_#191622] hover:translate-y-[-1px] active:translate-y-[1px] transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4C1D95]"
          >
            <span>BOOK YOUR CHOP</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#F5F0FF] text-[#191622] border-2 border-[#191622] shadow-[2px_2px_0px_#191622] hover:bg-[#EDE9FE] transition-colors focus-visible:outline-2 focus-visible:outline-[#7C3AED]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden bg-white border-t-2 border-[#191622] px-4 pt-4 pb-6 shadow-xl"
        >
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-lg font-display font-bold text-lg text-[#191622] hover:bg-[#F5F0FF] hover:text-[#7C3AED] border border-transparent hover:border-[#191622] transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono-ticket text-xs text-[#4C1D95]">→</span>
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#EDE9FE] flex flex-col gap-3">
            <a
              href={BUSINESS_INFO.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-display font-bold text-white bg-[#7C3AED] hover:bg-[#4C1D95] border-2 border-[#191622] rounded-lg shadow-[3px_3px_0px_#191622]"
            >
              <span>BOOK YOUR CHOP ON SLICK</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
            <div className="flex items-center justify-between text-xs text-[#191622]/80 px-1">
              <span>{BUSINESS_INFO.location.shortLabel}</span>
              <a
                href={BUSINESS_INFO.contact.phoneHref}
                className="font-mono-ticket font-bold text-[#4C1D95] underline"
              >
                {BUSINESS_INFO.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
