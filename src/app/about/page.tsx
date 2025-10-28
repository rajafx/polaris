// src/app/about/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Coins, Building2, Users, Truck, Globe, Target, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section — Video Background */}
      <section className="relative w-full h-[80vh] overflow-hidden group">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src="/assets/videos/jakarta-city.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
                Discover Our Company
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Discover Our Company and Seize the Opportunity
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-200"
              >
                PT Polaris Dana Investment is an Indonesian investment management and strategic venture company dedicated to providing trusted, innovative, and compliant investment solutions for both individual and institutional clients.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="prose prose-slate prose-lg">
            <p className="text-slate-600 leading-relaxed mb-6">
              Since our establishment in 2010 — and through our legalisation renewal in 2025 — we have helped clients achieve their financial goals through professional, transparent, and research-based fund management.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Headquartered at Citra Tower Kemayoran, with a representative meeting point at Signature by Regus, 37th Floor, Menara Astra – Jakarta, Polaris serves as a trusted bridge between global investors and Indonesia’s high-potential industries, particularly in mining, infrastructure, and strategic finance.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our strength lies in integrating investment structuring, operational execution, and regulatory compliance into one cohesive platform. Through strategic acquisitions and Joint Operations (JO) with licensed mining concession holders, Polaris creates legally secure and commercially scalable opportunities across coal, gold, and nickel sectors in Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission — Dengan Hover */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-amber-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-amber-600" />
                <h2
                  className="text-2xl font-bold text-slate-900"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Our Vision
                </h2>
              </div>
              <p className="text-slate-600 text-lg">
                To become a trusted investment company in Indonesia that contributes positively to national economic growth through sustainable and responsible business practices.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-amber-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-8 h-8 text-amber-600" />
                <h2
                  className="text-2xl font-bold text-slate-900"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Our Mission
                </h2>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Deliver optimal investment services tailored to each client’s objectives.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Offer innovative and compliant investment products under a regulated structure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Build partnerships that empower Indonesia’s resource and financial sectors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Uphold integrity, transparency, and good corporate governance in every business line.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrated Services — Dengan Gambar Aktivitas Mining */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Our Integrated Services
            </h2>
            <p className="text-slate-600">
              PT Polaris Dana Investment operates as an integrated investment and project development company — bridging capital, operations, and trade under one strategic platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Coins className="w-8 h-8" />,
                title: 'Investment Management & Financial Solutions',
                desc: 'Fund management, venture capital, P2P lending, and SME financing under regulated frameworks.',
                image: '/assets/images/finance-2.jpg',
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Mining Partnerships & Project Development',
                desc: 'Joint Operations in coal, gold, and nickel with licensed IUP holders and full regulatory support.',
                image: '/assets/images/img.Coal02.jpg',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Corporate Advisory & Business Establishment',
                desc: 'PT PMA setup, OSS/NIB registration, licensing, and compliance advisory for foreign investors.',
                image: '/assets/images/finance-1.jpg',
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: 'Industrial Trading & Equipment Distribution',
                desc: 'Import and distribution of pumps, gensets, safety gear, and industrial tools from LTC Glodok.',
                image: '/assets/images/finance-3.jpg',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Strategic Funding & Investor Relations',
                desc: 'Capital syndication, financial modeling, and exit strategy design for real-sector projects.',
                image: '/assets/images/finance-4.jpg',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:border-amber-200"
              >
                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>

                <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors hover:bg-amber-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations — Dengan Gambar Gedung */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2
            className="text-2xl font-bold text-slate-900 mb-10 text-center"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Our Presence
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

      {/* Final CTA — Hover Effect */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Ready to Partner With Confidence?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            Partner With Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;