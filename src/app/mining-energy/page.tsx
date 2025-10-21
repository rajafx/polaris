// src/app/mining-energy/page.tsx
'use client';

import Link from 'next/link';
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react'; // ✅ Import CheckCircle
import { motion } from 'framer-motion';

// --- CUSTOM ICONS (SVG kecil & profesional) ---
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-5 13-10 13a9.8 9.8 0 01-4-8h2c2.67 0 8-5.33 8-10v2z" />
  </svg>
);

const AreaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="12" y1="8" x2="12" y2="16" />
  </svg>
);

const LicenseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 3v4h-4V3M6 7v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7M6 7H4v14h2M18 7h2v14h-2" />
  </svg>
);

const TypeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-1.66 0-3-1.34-3-3 0-.69.28-1.32.72-1.76L12 11l2.24-2.24c.44-.44 1.07-.72 1.76-.72 1.66 0 3 1.34 3 3 0 .69-.28 1.32-.72 1.76L12 11z" />
  </svg>
);

// Reusable Project Card Component
const ProjectCard = ({
  title,
  items,
  highlights,
}: {
  title: string;
  items: { icon: React.ReactNode; label: string; value: string }[];
  highlights: string[];
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <div className="space-y-3 mb-5">
        {items.map((item, i) => (
          <p key={i} className="text-sm text-slate-600 flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">{item.icon}</span>
            <span><strong>{item.label}:</strong> {item.value}</span>
          </p>
        ))}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 mb-2">Highlights:</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm text-slate-600">
          {highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MiningEnergyPage = () => {
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
              Sustainable Mining. Responsible Partnerships. Strategic Growth.
            </h1>
            <p className="text-lg text-slate-600">
              PT Polaris Dana Investment plays an active role in Indonesia&apos;s growing mining and energy landscape by enabling structured, compliant, and high-value participation for both domestic and foreign investors.
            </p>
          </div>
        </div>
      </section>

      {/* Full Narrative + Strategic Model */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Full Narrative */}
            <div>
              <h2
                className="text-2xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Our Mining
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Through a combination of strategic acquisitions and Joint Operation (JO) partnerships with licensed concession holders, Polaris connects global capital with high-potential mining assets — ensuring legal certainty, operational readiness, and environmental responsibility.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our mining portfolio covers coal, gold, and nickel, three of Indonesia&apos;s most important mineral commodities. Each project is developed under a verified IUP (Mining License) and RKAB (Annual Work Plan & Budget), ensuring compliance with Indonesian law and ESG principles.
              </p>
            </div>

            {/* Strategic Model */}
            <div>
              <h2
                className="text-2xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Our Strategic Mining Model Includes:
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    title: 'Legal certainty through licensed JO agreements.',
                    desc: 'Menggunakan perjanjian JO yang berlisensi untuk memastikan kepastian hukum.',
                  },
                  {
                    title: 'Milestone-based capital deployment.',
                    desc: 'Penyaluran modal investasi berdasarkan pencapaian proyek yang terverifikasi.',
                  },
                  {
                    title: 'ESG compliance embedded in all project phases.',
                    desc: 'Kepatuhan ESG di semua tahapan proyek.',
                  },
                  {
                    title: 'Infrastructure integration.',
                    desc: 'Optimalisasi infrastruktur (jalan, pelabuhan, dan pengangkutan).',
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2
            className="text-3xl font-bold text-slate-900 mb-10 text-center"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Our Projects
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Coal Projects',
                icon: <LocationIcon />,
                desc: 'Located in South Sumatra and East Kalimantan, our coal operations feature mid-to-high calorific value reserves and established logistics networks.',
                href: '#coal-projects',
              },
              {
                title: 'Gold Projects',
                icon: <TypeIcon />,
                desc: 'Our gold assets in West Sumatra and West Kalimantan demonstrate strong geological potential with confirmed grades up to 8.6 ppm.',
                href: '#gold-projects',
              },
              {
                title: 'Nickel Projects',
                icon: <LicenseIcon />,
                desc: 'In partnership with licensed holders in Sulawesi, Polaris is developing nickel concessions aligned with Indonesia’s national downstream vision for EV battery and stainless steel industries.',
                href: '#nickel-projects',
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-amber-600 text-white rounded-lg flex items-center justify-center mb-5">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-700 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.desc}</p>
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-800 transition-colors"
                >
                  View Details <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 font-bold rounded-full hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
          >
            Explore Our Mining Portfolio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Project Details */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Coal */}
          <section id="coal-projects" className="mb-20">
            <h2
              className="text-2xl font-bold text-slate-900 mb-8"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Coal Projects
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard
                title="South Sumatera Coal Project"
                items={[
                  { icon: <LocationIcon />, label: 'Location', value: 'Kikim & SP6 Block, Gumay Talang – Lahat, South Sumatera' },
                  { icon: <AreaIcon />, label: 'Area', value: '±1,000 hectares' },
                  { icon: <LicenseIcon />, label: 'License Status', value: 'Valid Production License and Approved Work Plan (2024–2026)' },
                  { icon: <TypeIcon />, label: 'Type', value: 'Mid-calorific thermal coal (3,800–4,200 kcal/kg GAR)' },
                ]}
                highlights={[
                  'Excellent access to roads and nearby port facilities',
                  'Production-ready site with established infrastructure',
                  'Target production capacity: 1.5 million tonnes per year (2026)',
                ]}
              />
              <ProjectCard
                title="East Kalimantan Coal Project"
                items={[
                  { icon: <LocationIcon />, label: 'Location', value: 'Kutai Timur – East Kalimantan' },
                  { icon: <AreaIcon />, label: 'Area', value: '±12,000 hectares' },
                  { icon: <LicenseIcon />, label: 'License Status', value: 'Valid Production License (IUP OP)' },
                  { icon: <TypeIcon />, label: 'Type', value: 'Medium- to high-calorific coal (5,600–5,800 kcal/kg GAR)' },
                ]}
                highlights={[
                  'Completed environmental and reclamation compliance',
                  '46 km haul road and jetty access to Mahakam River',
                  'Scalable production capacity beyond 1.5 Mtpa',
                ]}
              />
            </div>
          </section>

          {/* Gold */}
          <section id="gold-projects" className="mb-20">
            <h2
              className="text-2xl font-bold text-slate-900 mb-8"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Gold Projects
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard
                title="West Sumatra Gold Project"
                items={[
                  { icon: <LocationIcon />, label: 'Location', value: 'Solok Selatan – West Sumatra' },
                  { icon: <AreaIcon />, label: 'Area', value: '±129 hectares' },
                  { icon: <LicenseIcon />, label: 'License Status', value: 'Valid Exploration Permit' },
                  { icon: <TypeIcon />, label: 'Type', value: 'Epithermal gold system within Sumatra magmatical arc' },
                ]}
                highlights={[
                  'Assay results up to 8.6 ppm Au (gold)',
                  'Surface trenching and topographic mapping completed',
                  'Target permit upgrade to Production License by 2026',
                ]}
              />
            </div>
          </section>

          {/* Nickel */}
          <section id="nickel-projects" className="mb-20">
            <h2
              className="text-2xl font-bold text-slate-900 mb-8"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Nickel Projects
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard
                title="Southeast Sulawesi Nickel Project"
                items={[
                  { icon: <LocationIcon />, label: 'Location', value: 'Langkema–Batuawu–Rahadopi, Bombana – Southeast Sulawesi' },
                  { icon: <AreaIcon />, label: 'Area', value: '±2,018 hectares' },
                  { icon: <LicenseIcon />, label: 'License Status', value: 'Valid Production License and RKAB 2024–2026 Approved' },
                  { icon: <TypeIcon />, label: 'Type', value: 'Nickel laterite (saprolite & limonite ore)' },
                ]}
                highlights={[
                  'Annual target output: 600,000 WMT',
                  'Owns a 320 ft jetty with direct smelter access',
                  '±1,950 Ha expansion area under review',
                  'Fully aligned with Indonesia’s EV and nickel downstream program',
                ]}
              />
            </div>
          </section>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Ready to Invest in Indonesia’s Mining Future?
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

export default MiningEnergyPage;