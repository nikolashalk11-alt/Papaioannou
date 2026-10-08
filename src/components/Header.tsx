import { useState } from 'react';
import { Menu, X, Phone, Navigation, ArrowRight, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  onContactClick?: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-zinc-200/80 shadow-xs">
      {/* 3-Column Grid with min-w-0 to guarantee mobile responsiveness without any clipping */}
      <div className="max-w-7xl mx-auto px-2 min-[380px]:px-3 sm:px-6 h-16 sm:h-18 grid grid-cols-[auto_1fr_auto] items-center gap-1.5 sm:gap-4">
        {/* Left Column: Hamburger Button */}
        <div className="flex items-center justify-start shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-zinc-950 hover:text-zinc-600 hover:bg-zinc-100/80 rounded-[4px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            aria-label={mobileMenuOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-950" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-950" />
            )}
          </button>
        </div>

        {/* Center Column: Perfectly balanced logo, safely responsive without clipping */}
        <div className="flex items-center justify-center text-center min-w-0 px-1 sm:px-2">
          <a href="#" className="flex items-center justify-center max-w-full">
            <img
              src="/logo.png?v=4"
              alt="Παπαϊωάννου Auto Service"
              className="h-4.5 min-[380px]:h-5.5 sm:h-7 md:h-8.5 max-w-full w-auto object-contain block"
            />
          </a>
        </div>

        {/* Right Column: Phone Icon / Number with matching proportions */}
        <div className="flex items-center justify-end shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneInternational}`}
            className="h-8.5 sm:h-10 px-2 sm:px-3 flex items-center justify-center gap-1.5 sm:gap-2 text-zinc-950 hover:text-zinc-700 bg-zinc-100/80 hover:bg-zinc-200/80 border border-zinc-200/90 rounded-[4px] transition-colors shrink-0 whitespace-nowrap shadow-xs"
            title={`Κλήση στο ${BUSINESS_INFO.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 shrink-0" />
            <span className="text-[11px] min-[360px]:text-xs sm:text-sm font-bold tracking-tight text-zinc-950 font-display whitespace-nowrap">
              <span className="text-zinc-500 font-semibold mr-1">Τηλ:</span>
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </span>
          </a>
        </div>
      </div>

      {/* Hamburger Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-200 bg-white/95 backdrop-blur-lg px-4 py-5 shadow-lg">
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-800">
                <Star className="w-4 h-4 fill-zinc-900 text-zinc-900" />
                <span>Google Rating: 4.7 / 5.0 (35 κριτικές)</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-2 text-base font-semibold text-zinc-800">
              <a
                href="#services"
                onClick={closeMenu}
                className="flex items-center justify-between p-3 rounded-[4px] hover:bg-zinc-100/80 text-zinc-950 font-display uppercase tracking-wide text-lg"
              >
                <span>Υπηρεσίες Συνεργείου</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-between p-3 rounded-[4px] hover:bg-zinc-100/80 text-zinc-950 font-display uppercase tracking-wide text-lg"
              >
                <span>Τοποθεσία, Χάρτης & Ωράριο</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </a>
            </nav>

            <div className="pt-3 border-t border-zinc-100 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-zinc-950/85 hover:bg-zinc-900/95 backdrop-blur-md border border-zinc-700/60 text-white rounded-[4px] font-bold text-center transition-all uppercase font-display text-sm tracking-wider shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Τηλεφωνήστε στο {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/80 hover:bg-white/95 backdrop-blur-md border border-zinc-300 text-zinc-900 rounded-[4px] font-bold text-center transition-all uppercase font-display text-sm tracking-wider shadow-xs"
              >
                <Navigation className="w-4 h-4 text-zinc-900" />
                <span>Οδηγίες στο Χάρτη (Κατσικάς)</span>
              </a>
            </div>

            <div className="text-xs text-zinc-500 text-center pt-2">
              {BUSINESS_INFO.fullAddress}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
