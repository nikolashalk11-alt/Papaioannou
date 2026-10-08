import brakeImg from '../assets/images/brake_disc_caliper_1790498092693.jpg';
import diagnosticsImg from '../assets/images/automotive_diagnostics_1790498103973.jpg';
import scenicDriveImg from '../assets/images/car_scenic_drive_1790498118573.jpg';
import { ShieldCheck, Cpu, Gauge, Check } from 'lucide-react';

export function VisualShowcase() {
  return (
    <section id="technology" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-4 bg-red-600 inline-block rounded-xs"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-700">
              ΠΡΟΔΙΑΓΡΑΦΕΣ & ΤΕΧΝΟΛΟΓΙΑ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-slate-950 tracking-tight font-display">
            Εστιαζουμε στην Ουσια της Μηχανικης & της Ασφαλειας
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Η σύγχρονη αυτοκίνηση απαιτεί ακρίβεια, ποιοτικά εξαρτήματα και βαθιά γνώση
            των ηλεκτρονικών συστημάτων. Στο Παπαϊωάννου Auto Service φροντίζουμε κάθε λεπτομέρεια.
          </p>
        </div>

        {/* 3 Pillar Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Precision Mechanical & Brakes */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-slate-900 relative">
              <img
                src={brakeImg}
                alt="Μηχανική ακρίβεια συστημάτων πέδησης και φρένων"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-blue-950/90 text-white text-xs font-bold px-2.5 py-1 rounded">
                Μηχανική Ακρίβεια
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-red-600 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Σύστημα Πέδησης</span>
                </div>
                <h3 className="text-lg font-bold text-blue-950">
                  Απόλυτη Ασφάλεια & Αντοχή
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Εξειδικευμένος έλεγχος δισκοπλακών, θερμοκρασιακής αντοχής και κυκλωμάτων ABS.
                  Χρησιμοποιούμε ανταλλακτικά κορυφαίων ευρωπαϊκών προδιαγραφών για άμεση απόκριση.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600" />
                  <span>Εξαέρωση & πιστοποιημένα υγρά DOT 4 / 5.1</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600" />
                  <span>Μέτρηση φθοράς με μικρόμετρο ακριβείας</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Digital Diagnostics & Telemetry */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-slate-900 relative">
              <img
                src={diagnosticsImg}
                alt="Ψηφιακός έλεγχος και διαγνωστικά συστήματα αυτοκινήτου"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-blue-950/90 text-white text-xs font-bold px-2.5 py-1 rounded">
                Ηλεκτρονική Διάγνωση
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-red-600 mb-2">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Ψηφιακή Τεχνολογία</span>
                </div>
                <h3 className="text-lg font-bold text-blue-950">
                  Ακριβής Εντοπισμός Βλαβών
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Σύνδεση με τον εγκέφαλο του οχήματος (OBD-II), ανάλυση ζωντανών δεδομένων αισθητήρων
                  και έλεγχος ενεργειακού κυκλώματος για ασφαλή και έγκαιρη πρόληψη ζημιών.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600" />
                  <span>Πλήρης αναφορά σφαλμάτων εγκεφάλου</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600" />
                  <span>Έλεγχος μπαταρίας & δυναμό υπό φορτίο</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Road Performance & Safety */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-slate-900 relative">
              <img
                src={scenicDriveImg}
                alt="Απρόσκοπτη και ασφαλής οδήγηση σε κάθε διαδρομή"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-blue-950/90 text-white text-xs font-bold px-2.5 py-1 rounded">
                Οδική Αξιοπιστία
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-red-600 mb-2">
                  <Gauge className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Εμπιστοσύνη στο Ταξίδι</span>
                </div>
                <h3 className="text-lg font-bold text-blue-950">
                  Σιγουριά σε Κάθε Χιλιόμετρο
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Σωστά συντηρημένο αυτοκίνητο σημαίνει οικονομία καυσίμου, μηδενικές απρόοπτες βλάβες
                  και άνετη οδήγηση στις απαιτητικές διαδρομές των Ιωαννίνων και της Ηπείρου.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600" />
                  <span>Σταθερή γεωμετρία και σωστή συμπεριφορά</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600" />
                  <span>Εγγύηση καλής λειτουργίας εργασιών</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
