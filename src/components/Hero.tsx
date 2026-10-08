import { Phone, MapPin, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import heroCarImg from '../assets/images/regenerated_image_1791464994740.avif';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text Column: Clean, minimal welcome */}
          <div className="lg:col-span-7 space-y-5">
            {/* Sleek black kicker */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 bg-zinc-950 inline-block rounded-xs"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-600">
                ΚΑΛΩΣ ΗΡΘΑΤΕ ΣΤΟ ΣΥΝΕΡΓΕΙΟ ΜΑΣ
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-zinc-950 font-display leading-[1.1]">
              Παπαϊωαννου <span className="text-zinc-500">Auto Service</span>
            </h1>

            {/* Concise Welcome */}
            <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
              Εξειδικευμένο συνεργείο αυτοκινήτων στον Κατσικά Ιωαννίνων.
              Αξιόπιστη συντήρηση, σύγχρονος διαγνωστικός έλεγχος και ποιοτικά ανταλλακτικά
              για την απόλυτη ασφάλεια του οχήματός σας.
            </p>

            {/* Google Rating Badge in frosted light glass styling */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-700 bg-white/70 backdrop-blur-md border border-zinc-300/70 px-3.5 py-1.5 rounded-[4px] shadow-xs">
              <Star className="w-4 h-4 fill-zinc-950 text-zinc-950 shrink-0" />
              <span className="font-bold text-zinc-950">{BUSINESS_INFO.googleRating} / 5.0</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-600 font-medium">{BUSINESS_INFO.reviewsCount} Αξιολογήσεις Google</span>
            </div>

            {/* Direct Phone & Address CTAs in Black Glass and White Glass styling */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-950/85 hover:bg-zinc-900/95 active:bg-zinc-950 backdrop-blur-md text-white font-bold rounded-[4px] border border-zinc-700/70 uppercase tracking-wider text-sm transition-all shadow-md shadow-zinc-950/25 font-display"
              >
                <Phone className="w-4 h-4 text-zinc-300" />
                <span>Τηλεφωνο: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/80 hover:bg-white/95 active:bg-white backdrop-blur-md text-zinc-950 font-bold border-2 border-zinc-950/90 rounded-[4px] uppercase tracking-wider text-sm transition-all shadow-xs font-display"
              >
                <MapPin className="w-4 h-4 text-zinc-700" />
                <span>Εθνικης Αντιστασεως 162</span>
              </a>
            </div>
          </div>

          {/* Right Image: Single realistic automotive photo with sleek rounded-[4px] */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[4px] overflow-hidden shadow-lg border border-zinc-200/90 bg-zinc-950">
              <img
                src={heroCarImg}
                alt="Παπαϊωάννου Auto Service"
                className="w-full h-full object-cover object-center aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
