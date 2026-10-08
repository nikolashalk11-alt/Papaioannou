/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { Phone, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from './data/content';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* Header with hamburger and centered logo */}
      <Header />

      {/* Main Content Sections: Welcome, Services, Google Maps Location */}
      <main className="flex-1">
        <Hero />
        <Services />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Mobile Action Bar: Floating Gray Glass buttons without black background container */}
      <aside aria-label="Γρήγορη Επικοινωνία" className="lg:hidden fixed bottom-3 left-0 right-0 z-40 px-3 pointer-events-none">
        <div className="flex items-center gap-2 max-w-md mx-auto pointer-events-auto">
          <a
            href={`tel:${BUSINESS_INFO.phoneInternational}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-zinc-800/85 hover:bg-zinc-700/90 active:bg-zinc-900/95 backdrop-blur-md text-white font-bold rounded-[4px] border border-white/20 shadow-lg shadow-black/30 text-sm transition-all font-display uppercase tracking-wider"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>Κληση: {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-3.5 bg-zinc-800/85 hover:bg-zinc-700/90 active:bg-zinc-900/95 backdrop-blur-md text-white font-bold rounded-[4px] border border-white/20 shadow-lg shadow-black/30 text-sm transition-all"
            title="Οδηγίες Google Maps"
          >
            <Navigation className="w-4 h-4 text-white" />
            <span className="hidden xs:inline font-display uppercase text-xs">Χάρτης</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
