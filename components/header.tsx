'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" className="flex-shrink-0 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Los Caracas Shoreline"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-sm font-light text-foreground hidden sm:inline tracking-wide">Los Caracas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-light text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-accent to-accent/80 text-white rounded-sm hover:shadow-md transition-all duration-200 font-light text-xs tracking-wide uppercase"
            >
              Reserve
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-sm text-foreground hover:bg-secondary/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border/40">
            <div className="space-y-1 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 rounded-sm text-xs font-light text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-colors tracking-wide uppercase"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-4 px-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-2 bg-gradient-to-r from-accent to-accent/80 text-white rounded-sm hover:shadow-md transition-all font-light text-xs tracking-wide uppercase"
              >
                Reserve
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
