// src/app/contact/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Building2, User } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom Globe icon
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-600">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden group">
        <Image
          src="/assets/images/about-1.jpg"
          alt="Polaris Dana Investment - Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
        <div className="absolute top-20 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm md:text-base font-medium tracking-widest uppercase text-amber-400 mb-4"
              >
                Contact Us
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Partner With Confidence
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-200"
              >
                Build the future with PT Polaris Dana Investment — your trusted gateway to Indonesia’s real economy.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Connect */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-slate-900 mb-8 text-center"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Why Connect With Polaris
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">•</span>
              <span><strong>Strategic Market Access</strong> – Direct entry into production-ready mining assets, infrastructure ventures, and trading networks.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">•</span>
              <span><strong>Full Regulatory Compliance</strong> – All projects operate under valid IUP, RKAB, and AMDAL approvals, ensuring operational certainty.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">•</span>
              <span><strong>Investment Protection</strong> – Structured agreements with milestone-based disbursements, minimizing risk exposure.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">•</span>
              <span><strong>Sustainable Value Creation</strong> – ESG and community programs integrated in every project development.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">•</span>
              <span><strong>End-to-End Support</strong> – From fund structuring and legal setup to operations and offtake management.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Office Locations — Dengan Gambar Gedung */}
      <section className="py-8 lg:py-12 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2
            className="text-2xl font-bold text-slate-900 mb-10 text-center"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            📍 Our Locations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="mb-4">
                <h3 className="font-bold text-slate-900 mb-2">Head Office</h3>
                <p className="text-slate-600 text-sm">
                  Citra Office Tower – Kemayoran<br />
                  Jl. Benyamin Suaeb, Jl. Casa Blok A6 No.170 13,<br />
                  RT.13/RW.6, Kb. Kosong, Kec. Kemayoran,<br />
                  Kota Jakarta Pusat, DKI Jakarta 10630
                </p>
              </div>
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/citra.jpg"
                  alt="Citra Office Tower - Head Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="mb-4">
                <h3 className="font-bold text-slate-900 mb-2">Representative Meeting Point</h3>
                <p className="text-slate-600 text-sm">
                  Signature by Regus, 37th Floor – Menara Astra<br />
                  Jl. Jend. Sudirman Kav. 5–6, Jakarta 10220<br />
                  📞 (021) 25555700
                </p>
              </div>
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/astra1.jpg"
                  alt="Menara Astra - Representative Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Relations */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2
            className="text-2xl font-bold text-slate-900 mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            📞 Investor Relations
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <User className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-slate-900">Mr. Hendra Gunawan</p>
                <p className="text-slate-600 text-sm">+62 812 1986 9009</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <User className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-slate-900">Mr. Ismet Nuroni</p>
                <p className="text-slate-600 text-sm">+62 812 8000 543</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-slate-900">Email</p>
                <p className="text-slate-600 text-sm">investor@polarisdanainvestment.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GlobeIcon />
              <div>
                <p className="font-medium text-slate-900">Website</p>
                <p className="text-slate-600 text-sm">www.polarisdanainvestment.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Ready to Start a Partnership?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;