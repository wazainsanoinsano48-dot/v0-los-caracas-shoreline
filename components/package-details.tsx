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
    <section id="package" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Features */}
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-light tracking-widest uppercase text-muted-foreground/60">Premium Package</p>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">Everything Included</h2>
            </div>
            <p className="text-base text-muted-foreground/80 font-light leading-relaxed">
              Luxury accommodations, culinary excellence, transportation, and 24/7 service. We curate every detail of your escape.
            </p>

            <div className="space-y-4 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full border-1.5 border-accent flex-shrink-0 mt-1 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-muted-foreground/75 text-sm font-light leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-full min-h-80 rounded-sm overflow-hidden shadow-sm">
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
