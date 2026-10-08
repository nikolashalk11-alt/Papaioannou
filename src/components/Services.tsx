import { SERVICES } from '../data/content';
import { CheckCircle2, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export function Services() {
  return (
    <section id="services" className="py-14 sm:py-18 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-4 bg-zinc-950 inline-block rounded-xs"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-600">
              ΕΞΕΙΔΙΚΕΥΜΕΝΕΣ ΥΠΗΡΕΣΙΕΣ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-zinc-950 tracking-tight font-display">
            Ολοκληρωμενη Τεχνικη Υποστηριξη
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Κάθε εργασία εκτελείται με αυστηρές τεχνικές προδιαγραφές, σύγχρονο εξοπλισμό
            και αξιόπιστα ανταλλακτικά που διασφαλίζουν την ασφάλεια σας.
          </p>
        </div>

        {/* Services Grid in Frosted White Glass styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                className="bg-white/80 backdrop-blur-md rounded-[4px] border border-zinc-200/90 p-6 flex flex-col justify-between hover:border-zinc-950/80 transition-all shadow-xs hover:shadow-md group"
              >
                <div>
                  {/* Top indicator without icon */}
                  <div className="flex items-center justify-end mb-3">
                    <span className="text-xs font-mono font-bold text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 group-hover:text-black transition-colors font-display uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-500 mt-0.5">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2 border-t border-zinc-100 pt-4">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-4 border-t border-zinc-100 flex items-center justify-between">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneInternational}`}
                    className="text-xs font-bold text-zinc-950 hover:text-zinc-600 transition-colors flex items-center gap-1.5 uppercase font-display tracking-wider"
                  >
                    <Phone className="w-3.5 h-3.5 text-zinc-900" />
                    <span>Ερωτηση για {service.title}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner in deep black glass */}
        <div className="mt-12 bg-zinc-950/90 backdrop-blur-lg rounded-[4px] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800/90 shadow-xl shadow-zinc-950/20">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide">
              Χρειάζεστε ειδικό έλεγχο ή παρατηρήσατε κάποιο θόρυβο / ένδειξη;
            </h4>
            <p className="text-sm text-zinc-400">
              Επικοινωνήστε απευθείας με το συνεργείο στο <strong className="text-white font-bold">{BUSINESS_INFO.phoneDisplay}</strong> για άμεση τεχνική εκτίμηση.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneInternational}`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-zinc-800/80 hover:bg-zinc-700/85 active:bg-zinc-900/90 backdrop-blur-md text-white font-bold rounded-[4px] border border-white/15 transition-all text-sm shadow-sm font-display uppercase tracking-wider"
          >
            <Phone className="w-4 h-4 text-zinc-300" />
            <span>Κληση Συνεργειου</span>
          </a>
        </div>
      </div>
    </section>
  );
}
