'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom Globe Icon
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-600">
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
          src="/assets/images/office.jpg"
          alt="Polaris Dana Investment - Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />

        {/* Accent Blurs */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Header Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm md:text-base font-medium tracking-widest uppercase text-amber-400 mb-3"
              >
                Contact Us
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
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
                Build the future with <span className="font-semibold text-white">PT Polaris Dana Investment</span> — your trusted gateway to Indonesia’s real economy.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Connect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2
            className="text-3xl font-bold text-slate-900 mb-8 text-center"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Why Connect With Polaris
          </h2>
          <ul className="space-y-4 text-slate-700 text-lg leading-relaxed">
            {[
              ["Strategic Market Access", "Direct entry into production-ready mining assets, infrastructure ventures, and trading networks."],
              ["Full Regulatory Compliance", "All projects operate under valid IUP, RKAB, and AMDAL approvals, ensuring operational certainty."],
              ["Investment Protection", "Structured agreements with milestone-based disbursements, minimizing risk exposure."],
              ["Sustainable Value Creation", "ESG and community programs integrated in every project development."],
              ["End-to-End Support", "From fund structuring and legal setup to operations and offtake management."]
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-amber-600 mt-1">•</span>
                <span><strong>{title}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Office Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Our Office Environment
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A glimpse of our professional workspace — where integrity, innovation, and collaboration thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[["office.jpg", "Polaris Meeting Room"], ["office1.jpg", "Polaris Reception Area"]].map(([src, caption], i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={`/assets/images/${src}`}
                  alt={caption}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-slate-900/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2
            className="text-2xl font-bold text-slate-900 mb-10 text-center"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            📍 Our Locations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Head Office",
                desc: `Citra Office Tower – Kemayoran
                Jl. Benyamin Suaeb, Jl. Casa Blok A6 No.170 13,
                RT.13/RW.6, Kb. Kosong, Kec. Kemayoran,
                Kota Jakarta Pusat, DKI Jakarta 10630`,
                img: "citra2.jpg"
              },
              {
                title: "Office",
                desc: `Menara Astra – 37th Floor
                Jl. Jend. Sudirman Kav. 5–6, Jakarta 10220
                📞 (021) 25555700`,
                img: "astra1.jpg"
              }
            ].map((office, i) => (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-bold text-slate-900 text-lg mb-2">{office.title}</h3>
                <p className="text-slate-600 text-sm mb-4 whitespace-pre-line">{office.desc}</p>
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image
                    src={`/assets/images/${office.img}`}
                    alt={office.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Relations */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-amber-50/40">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4 text-slate-900"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Investor Relations
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              For partnership inquiries, investment collaboration, or corporate relations — reach our investor team directly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                name: "Mr. Hendra Gunawan",
                phone: "+62 812 1986 9009",
                title: "Investor Relations Director",
                badge: "IR Director"
              },
              {
                name: "Mr. Ismet Nuroni",
                phone: "+62 812 8000 543",
                title: "Head of Institutional Relations",
                badge: "Institutional"
              }
            ].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-900">{person.name}</h3>
                  <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-medium">{person.badge}</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">{person.title}</p>
                <p className="text-slate-800 font-medium">{person.phone}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 text-slate-700">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-amber-600 mt-1" />
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
      <section className="py-14 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Ready to Start a Partnership?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.03]"
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
