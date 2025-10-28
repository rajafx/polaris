// src/app/services/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// --- CUSTOM ICONS (SVG tebal & konsisten) ---
const MiningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const InvestmentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M12 2v20M2 12h20M2 7h20M2 17h20" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const AdvisoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M9 12l2 2 4-4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 6v4l2 2" />
  </svg>
);

// Reusable Service Card with Image
const ServiceCard = ({
  title,
  description,
  href,
  icon,
  color,
  imageSrc,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  imageSrc: string;
}) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="group bg-white border border-slate-200 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-amber-200"
  >
    {/* Gambar Layanan */}
    <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
    </div>

    <div className={`w-14 h-14 ${color} text-white rounded-lg flex items-center justify-center mb-5`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 flex-grow text-sm">{description}</p>
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:text-amber-800 transition-colors mt-auto"
    >
      Learn More <ArrowRight className="w-4 h-4" />
    </Link>
  </motion.div>
);

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Integrated Investment Services
            </h1>
            <p className="text-lg text-slate-600">
              PT Polaris Dana Investment offers a cohesive ecosystem of services designed to connect global capital with Indonesia’s high-potential sectors — responsibly, compliantly, and profitably.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<MiningIcon />}
              title="Mining & Energy Projects"
              description="Strategic Joint Operations in coal, gold, and nickel with licensed IUP holders and full regulatory support."
              href="/mining-energy"
              color="bg-amber-600"
              imageSrc="/assets/images/img.Nickel02.jpg"
            />
            <ServiceCard
              icon={<InvestmentIcon />}
              title="Investment & Financial Services"
              description="Venture capital, project financing, and fintech lending under Indonesia’s regulated NIB framework."
              href="/investment-financial"
              color="bg-emerald-600"
              imageSrc="/assets/images/service-6.jpg"
            />
            <ServiceCard
              icon={<AdvisoryIcon />}
              title="Corporate Advisory & Development"
              description="Company setup, licensing, and compliance advisory for foreign and domestic investors."
              href="/corporate-advisory"
              color="bg-slate-700"
              imageSrc="/assets/images/finance-1.jpg"
            />
          </div>
        </div>
      </section>

      {/* Industrial Trading Section — Dengan 10 Foto Produk */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2
            className="text-3xl font-bold text-slate-900 mb-10 text-center"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Industrial Trading & Equipment Distribution
          </h2>
          <p className="text-slate-600 text-center mb-8">
            Import and distribution of pumps, gensets, welding machines, PPE, motors, and more. Authorized distributor for Chinese manufacturers.
          </p>

          {/* Grid 10 Foto Produk */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="relative w-full h-40 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src={`/assets/industri/industri-${i}.png`}
                  alt={`Industrial Product ${i}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 font-bold rounded-full hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Full Catalog
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Ready to Explore Our Services?
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
}