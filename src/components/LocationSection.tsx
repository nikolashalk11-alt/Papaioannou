import { Navigation, Clock, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export function LocationSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-4 bg-zinc-950 inline-block rounded-xs"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-600">
              ΤΟΠΟΘΕΣΙΑ & ΕΠΙΚΟΙΝΩΝΙΑ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-zinc-950 tracking-tight font-display">
            Που θα μας Βρειτε
          </h2>
          <p className="mt-2 text-base text-zinc-600 max-w-2xl">
            Βρισκόμαστε στον Κατσικά Ιωαννίνων, επί της κεντρικής οδού Εθνικής Αντιστάσεως 162.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Phone Card in Frosted White Glass */}
          <div className="bg-white/80 backdrop-blur-md border-2 border-zinc-200/90 rounded-[4px] p-6 shadow-xs transition-all hover:border-zinc-300 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 font-display">
                Τηλεφωνο Επικοινωνιας
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="text-2xl sm:text-3xl font-extrabold text-zinc-950 hover:text-zinc-600 transition-colors inline-block font-display"
              >
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Καλέστε μας για άμεση εξυπηρέτηση, τεχνικές πληροφορίες & προγραμματισμό ραντεβού.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-zinc-100">
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-zinc-950/85 hover:bg-zinc-900/95 active:bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider rounded-[4px] transition-all font-display"
              >
                Αμεση Κληση
              </a>
            </div>
          </div>

          {/* Address Card in Frosted White Glass */}
          <div className="bg-white/80 backdrop-blur-md border-2 border-zinc-200/90 rounded-[4px] p-6 shadow-xs transition-all hover:border-zinc-300 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 font-display">
                Διευθυνση Συνεργειου
              </div>
              <div className="mt-1">
                <div className="text-base sm:text-lg font-bold text-zinc-950 font-display uppercase tracking-wide">
                  {BUSINESS_INFO.address}, {BUSINESS_INFO.city}
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">
                  Τ.Κ. {BUSINESS_INFO.postalCode}, {BUSINESS_INFO.country}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-950/85 hover:bg-zinc-900/95 active:bg-zinc-950 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-[4px] border border-zinc-700/60 shadow-sm transition-all font-display"
              >
                <Navigation className="w-4 h-4 text-zinc-300" />
                <span>Οδηγιες Maps</span>
              </a>

              {/* Rating badge in light glass */}
              <div className="flex items-center gap-1.5 text-xs text-zinc-700 font-semibold bg-zinc-100/70 backdrop-blur-sm border border-zinc-200/60 px-2.5 py-1 rounded-[4px]">
                <Star className="w-4 h-4 fill-zinc-950 text-zinc-950" />
                <span>4.7 / 5.0</span>
              </div>
            </div>
          </div>

          {/* Hours Card in Frosted White Glass */}
          <div className="bg-white/80 backdrop-blur-md border-2 border-zinc-200/90 rounded-[4px] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-700 uppercase tracking-wider mb-3 font-display">
                <Clock className="w-4 h-4 text-zinc-500" />
                <span>Ωραριο Λειτουργιας</span>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
                <div className="flex justify-between py-1 border-b border-zinc-100">
                  <span className="font-medium">Δευτέρα – Παρασκευή:</span>
                  <span className="font-bold text-zinc-950 font-mono">08:30 – 17:00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100">
                  <span className="font-medium">Σάββατο:</span>
                  <span className="font-bold text-zinc-950 font-mono">08:30 – 14:00</span>
                </div>
                <div className="flex justify-between py-1 text-zinc-500">
                  <span className="font-medium">Κυριακή:</span>
                  <span className="font-bold text-zinc-950">Κλειστά</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 text-[11px] text-zinc-400">
              * Δυνατότητα παραλαβής κατόπιν συνεννόησης
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
