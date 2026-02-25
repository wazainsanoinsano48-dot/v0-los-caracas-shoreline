'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Facilities', id: 'facilities' },
    { label: 'Package', id: 'package' },
    { label: 'Itinerary', id: 'itinerary' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Los Caracas Shoreline"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-slate-900 hidden sm:inline">Los Caracas Shoreline</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors duration-200 font-semibold text-sm"
            >
              Reserve
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-blue-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-slate-100">
            <div className="space-y-2 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-cyan-500 hover:bg-slate-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-4 px-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 bg-cyan-400 text-gray-900 rounded-full hover:bg-cyan-300 transition-colors font-black text-sm"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
