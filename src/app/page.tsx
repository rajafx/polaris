// src/app/page.tsx
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

// --- TIPE DATA ---
interface Slide {
  id: number;
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const HeroCarousel: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      imgSrc: '/assets/images/carousel-1.jpeg',
      title: 'Empowering Growth Through Strategic Capital',
      subtitle: 'Corporate Identity',
      description: 'Sustainable investment partnerships across Indonesia.',
    },
    {
      id: 2,
      imgSrc: '/assets/images/carousel-2.jpeg',
      title: 'Unlocking Indonesia’s Natural Potential',
      subtitle: 'Mining & Energy',
      description: 'Coal • Gold • Nickel — responsible and profitable mining ventures.',
    },
    {
      id: 3,
      imgSrc: '/assets/images/carousel-3.jpeg',
      title: 'Bridging Investors and Opportunity',
      subtitle: 'Venture & Financial Services',
      description: 'Venture capital • Fintech • Corporate financing solutions.',
    },
    {
      id: 4,
      imgSrc: '/assets/images/carousel-4.jpeg',
      title: 'Building a sustainable investment future with trust and transparency.',
      subtitle: 'Corporate Commitment',
      description: 'Integrity. Impact. Innovation.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setTimeout(() => nextSlide(), 6000);
    }
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [isAutoPlay, nextSlide]);

  const handleInteraction = () => {
    setIsAutoPlay(false);
    if (intervalRef.current) clearTimeout(intervalRef.current);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.imgSrc}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
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
                  {slide.subtitle}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg md:text-xl text-slate-200"
                >
                  {slide.description}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => {
          prevSlide();
          handleInteraction();
        }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => {
          nextSlide();
          handleInteraction();
        }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              handleInteraction();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- CUSTOM ICONS (SVG Tebal & Konsisten) ---
const MiningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const InvestmentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <path d="M12 2v20M2 12h20M2 7h20M2 17h20" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const AdvisoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <path d="M9 12l2 2 4-4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 6v4l2 2" />
  </svg>
);

export default function HomePage() {
  return (
    <div className={inter.className}>
      <HeroCarousel />

      {/* Introduction */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-10 w-72 h-72 bg-amber-500/3 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Your Trusted Partner in Investment, Project Development, and Strategic Growth.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              PT Polaris Dana Investment is a fully licensed investment company based in Jakarta, Indonesia. Through strategic acquisitions and Joint Operations (JO) with licensed concession holders, Polaris enables global and local investors to participate in high-value ventures across energy, mining, infrastructure and financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas — ICON DIPERBAIKI */}
      <section className="py-12 lg:py-16 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
              Key Focus Areas
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Integrated Business Model
            </h2>
            <p className="text-lg text-slate-600">
              These three focus areas summarize Polaris’s integrated business model, connecting capital with Indonesia’s high-potential sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Mining & Energy Projects',
                desc: 'Unlocking Indonesia’s natural wealth through strategic acquisitions and Joint Operations (JO) in coal, gold, and nickel.',
                href: '/mining-energy',
                icon: <MiningIcon />,
              },
              {
                title: 'Investment & Financial Services',
                desc: 'Venture capital, project financing, and fintech-based lending solutions built on strong legal and regulatory foundations.',
                href: '/investment-financial',
                icon: <InvestmentIcon />,
              },
              {
                title: 'Corporate Advisory & Development',
                desc: 'Regulatory guidance, project structuring, and partnership facilitation for local and international investors.',
                href: '/corporate-advisory',
                icon: <AdvisoryIcon />,
              },
            ].map((area, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-20 h-20 bg-amber-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 mb-6">{area.desc}</p>
                <Link
                  href={area.href}
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-800 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" x2="22" y1="12" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Your Gateway to Indonesia’s Real Economy
          </h2>
          <p className="text-slate-200 max-w-3xl mx-auto mb-6">
            Combining financial intelligence, industrial experience, and on-ground operations, PT Polaris Dana Investment serves as your comprehensive partner — connecting capital, commerce, and community impact through responsible and profitable investments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Partner With Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}