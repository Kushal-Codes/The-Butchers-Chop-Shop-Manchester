import React, { useState } from 'react';
import { ExternalLink, Clock, Scissors, Sparkles, Gift } from 'lucide-react';
import {
  SERVICES,
  SLICK_BOOKING_URL,
  STRIPE_GIFT_VOUCHER_URL,
  ServiceCategoryFilter,
  filterServicesByCategory,
  ServiceItem,
} from '../../data/services';
import { ServiceIllustration } from '../illustrations/ServiceIllustrations';

const FILTER_TABS: { id: ServiceCategoryFilter; label: string; count: number }[] = [
  { id: 'all', label: 'All Cuts (8)', count: 8 },
  { id: 'hair', label: 'Haircuts & Restyles (2)', count: 2 },
  { id: 'combo', label: 'Full Works Combos (3)', count: 3 },
  { id: 'beard', label: 'Beard & Shave (2)', count: 2 },
  { id: 'junior', label: 'Kids (1)', count: 1 },
];

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategoryFilter>('all');
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const visibleServices = filterServicesByCategory(SERVICES, selectedCategory);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 sm:py-24 bg-white border-b-2 border-[#191622] relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b-2 border-[#191622]">
          <div>
            <p className="font-mono-ticket text-xs sm:text-sm font-bold text-[#7C3AED] tracking-wider uppercase mb-2">
              BUTCHER-SHOP PRICE TICKETS · VERIFIED SLICK MENU
            </p>
            <h2
              id="services-heading"
              className="font-display font-extrabold text-[#191622] text-3xl sm:text-5xl tracking-tight"
            >
              PROPER DAPPER SERVICES
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#191622]/80 max-w-xl font-medium">
              Pick your service. We’ll take it from there.
            </p>
          </div>

          {/* Interactive Category Filter Control */}
          <div
            role="group"
            aria-label="Filter barber services by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F5F0FF] border-2 border-[#191622] rounded-xl shadow-[3px_3px_0px_#191622]"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-2 text-xs font-display font-bold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7C3AED] ${
                    isActive
                      ? 'bg-[#7C3AED] text-white border border-[#191622] shadow-[2px_2px_0px_#191622]'
                      : 'text-[#191622] hover:bg-[#EDE9FE]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Expressive Butcher-Shop Ticket Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {visibleServices.map((service: ServiceItem) => {
            const isHovered = hoveredServiceId === service.id;
            const colSpan = 'lg:col-span-6';

            const isFeaturedCombo = service.id === 'hair-and-beard' || service.id === 're-style';

            return (
              <article
                key={service.id}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                onFocus={() => setHoveredServiceId(service.id)}
                onBlur={() => setHoveredServiceId(null)}
                className={`group relative flex flex-col justify-between rounded-2xl border-2 border-[#191622] p-6 transition-all duration-200 ${colSpan} ${
                  isFeaturedCombo
                    ? 'bg-[#F5F0FF] shadow-[5px_5px_0px_#4C1D95] hover:shadow-[7px_7px_0px_#7C3AED]'
                    : 'bg-white shadow-[5px_5px_0px_#191622] hover:shadow-[7px_7px_0px_#7C3AED]'
                } hover:-translate-y-1`}
              >
                {/* Top Butcher Ticket Stub Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b-2 border-dashed border-[#191622]/25">
                    <span className="font-mono-ticket text-xs font-bold text-[#4C1D95]">
                      {service.ticketCode} · {service.cutNote}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono-ticket text-xs font-bold text-[#191622]">
                      <Clock className="w-3.5 h-3.5 text-[#7C3AED]" aria-hidden="true" />
                      <span>{service.duration}</span>
                    </span>
                  </div>

                  {/* Main Service Row: Illustration + Name + Prominent Price */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <ServiceIllustration
                        type={service.illustrationType}
                        isHovered={isHovered}
                      />
                      <div>
                        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#191622] group-hover:text-[#4C1D95] transition-colors">
                          {service.name}
                        </h3>
                        <p className="mt-1 text-xs font-mono-ticket font-bold text-[#7C3AED]">
                          Duration: {service.duration}
                        </p>
                      </div>
                    </div>

                    {/* Prominent Unhidden Price */}
                    <div className="text-right shrink-0">
                      <span className="block font-mono-ticket font-bold text-2xl sm:text-3xl text-[#191622] bg-[#EDE9FE] px-3 py-1 rounded-lg border-2 border-[#191622]">
                        {service.priceFormatted}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-[#191622]/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-6 pt-4 border-t border-[#191622]/15 flex items-center justify-between gap-4">
                  <span className="text-xs text-[#191622]/70 font-medium">
                    Live slots on Slick
                  </span>

                  <a
                    href={service.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${service.name} (${service.duration}, ${service.priceFormatted}) on Slick`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-display font-extrabold tracking-wide text-white bg-[#191622] group-hover:bg-[#7C3AED] border-2 border-[#191622] rounded-lg shadow-[2px_2px_0px_#7C3AED] group-hover:shadow-[2px_2px_0px_#191622] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                  >
                    <span>BOOK THIS SERVICE</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Honest Booking Note + Official Gift Voucher Callout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#EDE9FE] border-2 border-[#191622] rounded-2xl p-6 sm:p-8 shadow-[5px_5px_0px_#191622]">
          <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7C3AED] text-white border-2 border-[#191622] flex items-center justify-center shrink-0">
              <Scissors className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#191622]">
                Real-Time Availability via Proper Dapper on Slick
              </h3>
              <p className="text-sm text-[#191622]/85 mt-1">
                Clicking any service above opens our official Slick booking portal where you can combine multiple cuts, pick your preferred barber, and confirm your live time slot.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-wrap sm:justify-end gap-3">
            <a
              href={STRIPE_GIFT_VOUCHER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 text-xs font-display font-bold text-[#191622] bg-white hover:bg-[#F5F0FF] border-2 border-[#191622] rounded-xl shadow-[3px_3px_0px_#191622] transition-all whitespace-nowrap shrink-0"
            >
              <Gift className="w-4 h-4 text-[#7C3AED]" aria-hidden="true" />
              <span>BUY A GIFT VOUCHER</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <a
              href={SLICK_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-display font-extrabold text-white bg-[#7C3AED] hover:bg-[#4C1D95] border-2 border-[#191622] rounded-xl shadow-[3px_3px_0px_#191622] transition-all whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>OPEN SLICK BOOKING</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
