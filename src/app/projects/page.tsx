// src/app/projects/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Pickaxe, Gem, Battery, Truck, Heart } from 'lucide-react';
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

// Reusable Project Card with Image
const ProjectCard = ({
  title,
  items,
  description,
}: {
  title: string;
  items: { icon: React.ReactNode; label: string; value: string }[];
  description: string;
}) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-amber-200"
  >
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <div className="space-y-2 mb-4">
      {items.map((item, i) => (
        <p key={i} className="text-sm text-slate-600 flex items-start gap-2">
          <span className="text-amber-600 mt-0.5">{item.icon}</span>
          <span><strong>{item.label}:</strong> {item.value}</span>
        </p>
      ))}
    </div>
    <p className="text-slate-600 text-sm">{description}</p>
  </motion.div>
);

// Section Header with Image
const ProjectSectionHeader = ({ title, imageSrc }: { title: string; imageSrc: string }) => (
  <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden">
    <Image
      src={imageSrc}
      alt={title}
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
    <div className="absolute bottom-4 left-6">
      <h2 className="text-xl font-bold text-white" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
        {title}
      </h2>
    </div>
  </div>
);

// CSR Gallery Component
const CsrGallery = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      <Image
        src="/assets/images/img.CSR01.jpg"
        alt="CSR Activity 1"
        fill
        className="object-cover"
      />
    </div>
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      <Image
        src="/assets/images/img.CSR02.jpg"
        alt="CSR Activity 2"
        fill
        className="object-cover"
      />
    </div>
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      <Image
        src="/assets/images/img.CSR03.jpg"
        alt="CSR Activity 3"
        fill
        className="object-cover"
      />
    </div>
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Our Projects
            </h1>
            <p className="text-lg text-slate-600">
              Strategic Resource Investments Across Indonesia — from mining to industrial trading and social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Coal Projects */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <ProjectSectionHeader title="Coal Projects" imageSrc="/assets/images/img.Coal01.jpg" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="South Sumatera Coal Project"
              items={[
                { icon: <LocationIcon />, label: 'Location', value: 'Kikim & SP6 Block, Lahat' },
                { icon: <AreaIcon />, label: 'Area', value: '±1,000 hectares' },
                { icon: <TypeIcon />, label: 'Type', value: '3,800–4,200 kcal/kg GAR' },
              ]}
              description="Production-ready with port access."
            />
            <ProjectCard
              title="East Kalimantan Coal Project"
              items={[
                { icon: <LocationIcon />, label: 'Location', value: 'Kutai Timur' },
                { icon: <AreaIcon />, label: 'Area', value: '±12,000 hectares' },
                { icon: <TypeIcon />, label: 'Type', value: '5,600–5,800 kcal/kg GAR' },
              ]}
              description="46 km haul road + river jetty."
            />
            <ProjectCard
              title="Central Kalimantan Coal Project"
              items={[
                { icon: <LocationIcon />, label: 'Location', value: 'Gunung Mas' },
                { icon: <AreaIcon />, label: 'Area', value: '±100 hectares' },
                { icon: <TypeIcon />, label: 'Type', value: '5,300–6,100 kcal/kg GAR' },
              ]}
              description="Surface-accessible seams."
            />
          </div>
        </div>
      </section>

      {/* Gold Projects */}
      <section className="py-8 lg:py-12 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <ProjectSectionHeader title="Gold Projects" imageSrc="/assets/images/img.Gold04.jpg" />
          <ProjectCard
            title="West Sumatra Gold Project"
            items={[
              { icon: <LocationIcon />, label: 'Location', value: 'Solok Selatan' },
              { icon: <AreaIcon />, label: 'Area', value: '±129 hectares' },
              { icon: <TypeIcon />, label: 'Grade', value: 'Up to 8.6 ppm Au' },
            ]}
            description="Exploration stage, target production license by 2026."
          />
        </div>
      </section>

      {/* Nickel Projects */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <ProjectSectionHeader title="Nickel Projects" imageSrc="/assets/images/img.Nickel02.jpg" />
          <ProjectCard
            title="Southeast Sulawesi Nickel Project"
            items={[
              { icon: <LocationIcon />, label: 'Location', value: 'Bombana, Sulawesi' },
              { icon: <AreaIcon />, label: 'Area', value: '±2,018 hectares' },
              { icon: <TypeIcon />, label: 'Type', value: 'Saprolite & limonite ore' },
            ]}
            description="600,000 WMT/year target, with 320 ft jetty."
          />
        </div>
      </section>

      {/* Industrial Trading */}
      <section className="py-8 lg:py-12 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <ProjectSectionHeader title="Industrial Trading & Equipment" imageSrc="/assets/images/LTC-Glodok.jpg" />
          <ProjectCard
            title="LTC Glodok Trading Division"
            items={[
              { icon: <LocationIcon />, label: 'Location', value: 'Lindeteves Trade Center, Jakarta' },
              { icon: <LicenseIcon />, label: 'Status', value: 'Authorized Distributor' },
            ]}
            description="Pumps, gensets, welding machines, PPE, motors, and more. Authorized distributor for Chinese manufacturers."
          />
        </div>
      </section>

      {/* Social Projects */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <ProjectSectionHeader title="Social Projects & CSR" imageSrc="/assets/images/img.CSR03.jpg" />
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Yayasan Buddha Samanta Bhadra"
              items={[
                { icon: <LocationIcon />, label: 'Location', value: 'Jakarta' },
                { icon: <LicenseIcon />, label: 'Since', value: '2021' },
              ]}
              description="Humanitarian, education, interfaith programs."
            />
            <ProjectCard
              title="Bala Komando Melayu"
              items={[
                { icon: <LocationIcon />, label: 'Location', value: 'Pontianak' },
                { icon: <LicenseIcon />, label: 'Since', value: '2024' },
              ]}
              description="Free ambulance & fire response services."
            />
          </div>
          {/* CSR Gallery */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Our Community Impact</h3>
            <CsrGallery />
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="max-w-3xl mx-auto text-sm">
            All projects developed under Indonesia’s ESG framework — balancing economic growth with environmental and social responsibility.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;