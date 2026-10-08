import { useState } from 'react';
import { Star, Phone, MapPin, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800 pt-12 pb-28 sm:pb-32 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-zinc-800/80">
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              {!logoError ? (
                <img
                  src="/logo-white.png"
                  alt="Παπαϊωάννου Auto Service"
                  className="h-8 sm:h-9 w-auto object-contain block"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight text-white font-display uppercase">
                    Παπαϊωάννου
                  </span>
                  <span className="text-xs font-bold tracking-wider text-zinc-400 uppercase font-display">
                    Auto Service
                  </span>
                </div>
              )}
            </div>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Εξειδικευμένο συνεργείο αυτοκινήτων στον Κατσικά Ιωαννίνων.
              Συντήρηση, ηλεκτρονική διάγνωση, φρένα και μηχανικές επισκευές
              με συνέπεια και σύγχρονο εξοπλισμό.
            </p>

            {/* Google Rating in footer */}
            <div className="flex items-center gap-2 pt-1 text-xs text-zinc-400">
              <Star className="w-4 h-4 fill-zinc-400 text-zinc-400" />
              <span className="font-bold text-white">4.7 / 5.0</span>
              <span className="text-zinc-600">·</span>
              <span>35 Αξιολογήσεις στο Google</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-display">
              Πλοήγηση
            </div>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Υπηρεσίες Συνεργείου
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Τοποθεσία, Χάρτης & Ωράριο
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-display">
              Στοιχεία Επικοινωνίας
            </div>
            <div className="space-y-2.5 text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  className="font-bold text-white hover:text-zinc-300 transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay} ({BUSINESS_INFO.phone})
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/80 hover:bg-zinc-700/85 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-[4px] border border-white/15 transition-all font-display shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Οδηγίες Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Line */}
        <div className="pt-6 pb-4 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2">
          <div>
            © {new Date().getFullYear()} Papaioannou Auto Service (Παπαϊωάννου). Με επιφύλαξη παντός δικαιώματος.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Κατσικάς, Ιωάννινα</span>
            <span>·</span>
            <span>Τηλ: {BUSINESS_INFO.phoneDisplay}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
