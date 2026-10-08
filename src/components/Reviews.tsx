import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS } from '../data/content';

export function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Google Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-4 bg-red-600 inline-block rounded-xs"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-700">
                ΑΞΙΟΠΙΣΤΙΑ & ΕΜΠΙΣΤΟΣΥΝΗ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-slate-950 tracking-tight font-display">
              Τι Λενε οι Οδηγοι που μας Εμπιστευονται
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Πραγματικές αξιολογήσεις οδηγών στο προφίλ μας στο Google Maps.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-center gap-4 shrink-0">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-slate-950 font-display">
                {BUSINESS_INFO.googleRating}
              </div>
              <div className="text-xs text-slate-500 font-medium">από 5.0</div>
            </div>

            <div className="border-l border-slate-200 pl-4 space-y-1">
              <div className="flex text-red-600 text-sm">
                {'★'.repeat(5)}
              </div>
              <div className="text-xs font-bold text-slate-700">
                {BUSINESS_INFO.reviewsCount} Κριτικές στο Google
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-900 hover:text-red-600 flex items-center gap-1 transition-colors"
              >
                <span>Προβολή στο Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Rating stars & date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-red-600 text-xs">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-950 text-white font-bold text-xs flex items-center justify-center">
                    {review.author.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {review.author}
                  </span>
                </div>

                <span className="text-[10px] text-slate-400 font-medium">Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
