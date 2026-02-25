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
    <section className="py-16 md:py-24 bg-turquoise-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0011-Oy2pqokiSeyabfBYSCpZ1uQGOIqhPb.jpg"
              alt="All-Inclusive Package"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">All-Inclusive Package</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Everything you need for an unforgettable group escape. From premium accommodations to gourmet meals, transportation, and non-stop entertainment—we handle every detail so you can focus on creating lasting memories.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-turquoise-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-turquoise-200">
              <p className="text-slate-600">
                <span className="font-bold text-slate-900">Perfect for:</span> Groups of 40 people of all ages seeking comprehensive recreation combining rest, nature, and active leisure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
