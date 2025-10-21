// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { DESIGN_TOKENS } from '@/styles/designTokens';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Nama */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <Image
              src="/assets/images/logo.png"
              alt="Polaris Dana Investment"
              width={120}
              height={32}
              className="h-8 w-auto md:h-9"
              priority
            />
            <span
              className="text-lg md:text-xl font-bold text-slate-800"
              style={{ fontFamily: DESIGN_TOKENS.fontFamily.serif.join(',') }}
            >
              Polarisdana
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-slate-700 hover:text-amber-600 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-4 px-5 py-2 border-2 border-amber-600 text-amber-600 font-medium rounded-full hover:bg-amber-50 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-slate-100">
            <div className="space-y-5 px-6">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-medium text-slate-700 hover:text-amber-600"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block font-medium text-amber-600 mt-2"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;