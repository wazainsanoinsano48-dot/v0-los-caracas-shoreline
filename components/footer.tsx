import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/40 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Los Caracas Shoreline"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div>
                <p className="text-sm font-light text-foreground">Los Caracas</p>
                <p className="text-xs text-muted-foreground/60">Shoreline</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/70 leading-relaxed font-light">
              Where the river runs to the reef. Experience an unforgettable all-inclusive escape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-light text-foreground mb-4 tracking-widest uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#facilities" className="text-xs text-muted-foreground/70 hover:text-accent transition-colors font-light">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#package" className="text-xs text-muted-foreground/70 hover:text-accent transition-colors font-light">
                  Packages
                </a>
              </li>
              <li>
                <a href="#itinerary" className="text-xs text-muted-foreground/70 hover:text-accent transition-colors font-light">
                  Itinerary
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-xs text-muted-foreground/70 hover:text-accent transition-colors font-light">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-light text-foreground mb-4 tracking-widest uppercase">Services</h3>
            <ul className="space-y-2">
              <li className="text-xs text-muted-foreground/70 font-light">Group Bookings</li>
              <li className="text-xs text-muted-foreground/70 font-light">Private Events</li>
              <li className="text-xs text-muted-foreground/70 font-light">Team Building</li>
              <li className="text-xs text-muted-foreground/70 font-light">Corporate Retreats</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-light text-foreground mb-4 tracking-widest uppercase">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@loscaracasshoreline.com" className="text-xs text-muted-foreground/70 hover:text-accent transition-colors font-light">
                  info@loscaracasshoreline.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+573001234567" className="text-xs text-muted-foreground/70 hover:text-accent transition-colors font-light">
                  +57 (300) 123-4567
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground/70 font-light">
                  Central Coast
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground/60 font-light">
              &copy; 2026 Los Caracas Shoreline. All rights reserved.
            </p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="text-xs text-muted-foreground/60 hover:text-accent transition-colors font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-muted-foreground/60 hover:text-accent transition-colors font-light">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-muted-foreground/60 hover:text-accent transition-colors font-light">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
