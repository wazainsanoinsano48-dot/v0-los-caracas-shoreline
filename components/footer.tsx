import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Los Caracas Shoreline"
                width={60}
                height={60}
                className="h-16 w-auto"
              />
              <div>
                <p className="text-xl font-bold">Los Caracas</p>
                <p className="text-xs text-blue-200">Shoreline</p>
              </div>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              Where the river runs to the reef. Experience an unforgettable all-inclusive escape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#facilities" className="text-blue-100 hover:text-white transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#package" className="text-blue-100 hover:text-white transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#itinerary" className="text-blue-100 hover:text-white transition-colors">
                  Itinerary
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-blue-100 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-blue-100">Group Bookings</li>
              <li className="text-blue-100">Private Events</li>
              <li className="text-blue-100">Team Building</li>
              <li className="text-blue-100">Corporate Retreats</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@loscaracasshoreline.com" className="text-blue-100 hover:text-white transition-colors text-sm">
                  info@loscaracasshoreline.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <a href="tel:+573001234567" className="text-blue-100 hover:text-white transition-colors text-sm">
                  +57 (300) 123-4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <p className="text-blue-100 text-sm">
                  Central Coast
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              &copy; 2026 Los Caracas Shoreline. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
