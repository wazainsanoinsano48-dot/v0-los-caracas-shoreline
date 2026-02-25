'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export function PackageDetails() {
  const features = [
    'Premium lodging in adjacent cabins',
    'Full board regimen (Breakfasts, Lunches, Dinners & Snacks)',
    'Healthy options and children\'s menus',
    'Private air-conditioned transportation',
    '24/7 logistical support',
    'Medical service coordination',
    'Beach & river access',
    'Sports courts and green areas',
    'Group activities and entertainment',
    'Integration activities and bonfire'
  ]

  return (
    <section id="package" className="py-32 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Features */}
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest uppercase text-slate-500">Premium Package</p>
              <h2 className="text-5xl md:text-6xl font-serif text-slate-900">Everything Included</h2>
            </div>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Luxury accommodations, culinary excellence, transportation, and 24/7 service. We curate every detail of your escape.
            </p>

            <div className="space-y-5 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-900 flex-shrink-0 mt-1 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                  </div>
                  <span className="text-slate-700 text-base font-light leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-full min-h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0011-Oy2pqokiSeyabfBYSCpZ1uQGOIqhPb.jpg"
              alt="All-Inclusive Package"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
