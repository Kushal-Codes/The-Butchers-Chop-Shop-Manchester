/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandInterlude } from './components/animations/BrandInterlude';
import { ServicesSection } from './components/services/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ShopStorySection } from './components/ShopStorySection';
import { LocationSection } from './components/LocationSection';
import { Footer, MobileStickyBookingBar } from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#191622]">
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <BrandInterlude />
        <ServicesSection />
        <GallerySection />
        <ShopStorySection />
        <LocationSection />
      </main>
      <Footer />
      <MobileStickyBookingBar />
    </div>
  );
}
