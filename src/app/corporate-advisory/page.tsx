// src/app/corporate-advisory/page.tsx
'use client';

import Link from 'next/link';
import { ArrowRight, Users, FileText, Building2, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const CorporateAdvisoryPage = () => {
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
              Your Trusted Partner for Corporate Expansion and Regulatory Success
            </h1>
            <p className="text-lg text-slate-600">
              Polaris provides comprehensive corporate advisory and development services, supporting investors, startups, and enterprises as they navigate Indonesia’s dynamic economic environment.
            </p>
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
          <div className="space-y-6">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: 'Company Establishment (PT PMA, PT PMDN, Representative Office)',
                desc: 'Complete end-to-end assistance for entity setup, legal documentation, and business registration through OSS RBA.',
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: 'Mining & Energy Licensing Support',
                desc: 'Assistance in obtaining and managing IUP, IPPKH, AMDAL, and RKAB documentation for mining operations.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: 'Regulatory & Compliance Consulting',
                desc: 'Continuous support to ensure clients remain aligned with Indonesia’s evolving investment laws and ESG requirements.',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Strategic Partnerships & Joint Ventures',
                desc: 'Facilitating local alliances and stakeholder engagement for seamless integration and growth.',
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'Corporate Governance & Risk Management',
                desc: 'Designing frameworks that ensure transparency, accountability, and long-term operational stability.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="flex gap-4 p-6 bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-amber-200"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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