// src/app/investment-financial/page.tsx
'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, FileText, Shield, BarChart3, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const InvestmentFinancialPage = () => {
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
              Connecting Capital to Opportunity — Across Industries and Borders
            </h1>
            <p className="text-lg text-slate-600">
              PT Polaris Dana Investment is not only a mining investor, but also a multi-sector investment enabler registered under Indonesia’s official NIB framework.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6">
            Our activities span venture capital, project financing, and fintech-based lending, providing tailored financial solutions for businesses and investors across the Indonesian market.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We serve as a bridge between global investors seeking sustainable returns and local enterprises requiring structured capital access. Polaris specializes in designing funding mechanisms that comply with Indonesian financial regulations while ensuring transparency, scalability, and measurable impact.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2
            className="text-3xl font-bold text-slate-900 mb-10 text-center"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Our Core Financial Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Venture Capital & Private Equity',
                desc: 'Strategic equity participation in high-potential sectors including mining, infrastructure, and green technology.',
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: 'Project-Based Financing',
                desc: 'Capital solutions for resource projects, industrial development, and logistics infrastructure.',
              },
              {
                icon: <CreditCard className="w-6 h-6" />,
                title: 'Fintech-Based Lending (P2P)',
                desc: 'Operating under KBLI 64951, supporting digital lending platforms in a safe, regulated environment.',
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: 'Trade Finance & Offtake Support',
                desc: 'Short-term capital bridging for mining offtake, export, and commodity trading operations.',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Capital Market Preparation',
                desc: 'Pre-IPO structuring, governance improvement, and investor matchmaking.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="flex gap-4 p-6 bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-amber-200"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto bg-slate-50 p-8 rounded-2xl">
            <h2
              className="text-2xl font-bold text-slate-900 mb-6 text-center"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Why Partner With Polaris?
            </h2>
            <p className="text-slate-600 text-center">
              Our financial ecosystem is built upon a deep understanding of Indonesia’s investment climate and government regulations. We combine institutional discipline with entrepreneurial agility — allowing our partners to grow faster, safer, and more strategically.
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
            Ready to Access Indonesia’s Investment Ecosystem?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            Learn More About Polaris Capital Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InvestmentFinancialPage;