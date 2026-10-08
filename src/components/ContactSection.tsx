import { useState } from 'react';
import { Phone, MapPin, Navigation, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info, Address & Phone (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-4 bg-red-600 inline-block rounded-xs"></span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-700">
                  ΕΠΙΚΟΙΝΩΝΙΑ & ΠΡΟΣΒΑΣΗ
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-slate-950 tracking-tight font-display">
                Επισκεφθειτε μας η Καλεστε μας
              </h2>
              <p className="mt-2 text-base text-slate-600">
                Βρισκόμαστε στον Κατσικά Ιωαννίνων, επί της κεντρικής οδού Εθνικής Αντιστάσεως με εύκολη πρόσβαση και άνετο χώρο στάθμευσης.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              {/* Telephone Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Τηλεφωνική Επικοινωνία
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneInternational}`}
                    className="text-xl sm:text-2xl font-extrabold text-blue-950 hover:text-red-600 transition-colors block mt-0.5"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Διεθνής μορφή: {BUSINESS_INFO.phone} · Άμεση απάντηση για ραντεβού & εκτιμήσεις
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-950 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Διεύθυνση Συνεργείου
                  </div>
                  <div className="text-lg font-bold text-blue-950 mt-0.5">
                    {BUSINESS_INFO.address}, {BUSINESS_INFO.city}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Τ.Κ. {BUSINESS_INFO.postalCode}, {BUSINESS_INFO.country}
                  </p>
                  <div className="mt-3">
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold rounded transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-red-400" />
                      <span>Άνοιγμα στο Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Simple Text Working Hours */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-blue-950" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Ωράριο Λειτουργίας
                  </div>
                  <div className="mt-2 space-y-1 text-sm text-slate-700 font-medium">
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span>Δευτέρα – Παρασκευή:</span>
                      <span className="font-bold text-blue-950">08:30 – 17:00</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span>Σάββατο:</span>
                      <span className="font-bold text-blue-950">08:30 – 14:00</span>
                    </div>
                    <div className="flex justify-between py-0.5 text-red-600">
                      <span>Κυριακή:</span>
                      <span className="font-bold">Κλειστά</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Callback Request Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-950">
                  Αίτημα Επικοινωνίας & Εκτίμησης
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Συμπληρώστε τα στοιχεία σας και θα σας καλέσουμε άμεσα για να συζητήσουμε
                  τις ανάγκες του οχήματός σας.
                </p>
              </div>

              {status === 'success' ? (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-red-600 mx-auto" />
                  <h4 className="text-lg font-bold text-blue-950">
                    Το αίτημά σας καταχωρήθηκε!
                  </h4>
                  <p className="text-sm text-slate-600">
                    Ευχαριστούμε, <strong className="text-blue-950">{formData.name}</strong>.
                    Θα επικοινωνήσουμε μαζί σας στον αριθμό <strong className="text-blue-950">{formData.phone}</strong> το συντομότερο δυνατό.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', phone: '', vehicle: '', notes: '' });
                    }}
                    className="mt-4 px-4 py-2 bg-blue-950 text-white text-xs font-bold rounded-lg hover:bg-blue-900 transition-colors"
                  >
                    Νέα Αποστολή
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>Παρακαλούμε συμπληρώστε το ονοματεπώνυμο και το τηλέφωνό σας.</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Ονοματεπώνυμο *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="π.χ. Ιωάννης Παπαδόπουλος"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Τηλέφωνο Επικοινωνίας *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="π.χ. 6900000000 ή 26510..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Μάρκα & Μοντέλο Αυτοκινήτου
                    </label>
                    <input
                      type="text"
                      placeholder="π.χ. Toyota Yaris 1.4 D-4D, VW Golf 1.6 TDI κ.α."
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Περιγραφή Εργασίας / Ερώτηση
                    </label>
                    <textarea
                      rows={3}
                      placeholder="π.χ. Γενικό service, αλλαγή τακάκια, ένδειξη check engine στο καντράν..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    {status === 'submitting' ? (
                      <span>Αποστολή...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Αποστολή Αιτήματος Επικοινωνίας</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Τα στοιχεία σας χρησιμοποιούνται αποκλειστικά για την επικοινωνία σχετικά με το όχημά σας.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
