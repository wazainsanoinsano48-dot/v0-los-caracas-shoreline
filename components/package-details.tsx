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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Features */}
          <div className="space-y-10">
            <div>
              <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-6">Everything<br />Included</h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Premium accommodations, gourmet meals, transportation, and entertainment. We handle every detail.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-400 flex-shrink-0 mt-1 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-slate-700 text-lg font-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-3xl overflow-hidden">
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
