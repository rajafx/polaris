// src/app/corporate-advisory/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, FileText, Building2, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// Reusable Service Card with Image
const ServiceCard = ({
  title,
  description,
  icon,
  imageSrc,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
}) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="bg-white border border-slate-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-amber-200"
  >
    <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
    </div>
    <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm">{description}</p>
  </motion.div>
);

const CorporateAdvisoryPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden group">
        <Image
          src="/assets/images/about-1.jpg"
          alt="Corporate Advisory Services"
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
                Corporate Advisory
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Your Trusted Partner for Corporate Expansion
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-200"
              >
                Regulatory success in Indonesia — from setup to scale.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6">
            Our advisory practice covers every stage — from company formation and licensing to operational setup, stakeholder relations, and compliance monitoring.
          </p>
          <p className="text-slate-600 leading-relaxed">
            With an experienced multidisciplinary team, we help clients establish a legally sound and operationally efficient presence in Indonesia, ensuring that all business activities are aligned with government regulations and local best practices.
          </p>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2
            className="text-3xl font-bold text-slate-900 mb-10 text-center"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Our Advisory Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: 'Company Establishment',
                desc: 'PT PMA, PT PMDN, Representative Office — full setup via OSS RBA.',
                image: '/assets/images/astra.jpg',
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: 'Mining & Energy Licensing',
                desc: 'IUP, IPPKH, AMDAL, RKAB — end-to-end support for mining operations.',
                image: '/assets/images/img.Coal05.jpeg',
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: 'Regulatory & Compliance',
                desc: 'Ongoing support for evolving laws, ESG, and investment regulations.',
                image: '/assets/images/img.kontrak01.jpg',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Strategic Partnerships',
                desc: 'Local alliances, JV structuring, and stakeholder engagement.',
                image: '/assets/images/img.kontrak03.jpg',
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'Corporate Governance',
                desc: 'Risk management, transparency frameworks, and operational stability.',
                image: '/assets/images/service-6.jpg',
              },
            ].map((item, i) => (
              <ServiceCard
                key={i}
                title={item.title}
                description={item.desc}
                icon={item.icon}
                imageSrc={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto bg-slate-50 p-8 rounded-2xl text-center">
            <p className="text-slate-600">
              With PT Polaris Dana Investment, investors gain more than a consultant — they gain a strategic partner dedicated to transforming potential into measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Ready to Establish Your Presence in Indonesia?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            Contact Our Advisory Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CorporateAdvisoryPage;