'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, Baby, Gift } from 'lucide-react'

export function PricingSection() {
  const pricingTiers = [
    {
      icon: Users,
      title: 'Adult',
      description: 'For guests 12 years and older',
      price: '$100',
      period: 'per person',
      features: ['All meals included', 'Full activities access', 'Transportation', '24/7 support'],
      highlight: false
    },
    {
      icon: Baby,
      title: 'Child',
      description: 'Ages 2-11 sharing a room with adults',
      price: '$50',
      period: 'per person',
      features: ['All meals (children\'s menu available)', 'Age-appropriate activities', 'Transportation', 'Supervision'],
      highlight: true
    },
    {
      icon: Gift,
      title: 'Infant',
      description: 'Under 2 years old',
      price: 'Free',
      period: 'No accommodation included',
      features: ['Shared room with adults', 'Food consumption not included', 'Special care coordination'],
      highlight: false
    }
  ]

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-8">Transparent Pricing</h2>
          <p className="text-xl text-slate-600 font-light">
            All-inclusive rates for your 2-day escape. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 ${
                  tier.highlight
                    ? 'ring-3 ring-cyan-400 shadow-2xl md:scale-105'
                    : 'hover:shadow-xl'
                } rounded-3xl`}
              >
                {tier.highlight && (
                  <div className="absolute top-6 right-6 bg-cyan-400 text-gray-900 px-4 py-2 rounded-full text-sm font-black">
                    ✨ Popular
                  </div>
                )}

                <div className="p-10">
                  <h3 className="text-3xl font-black text-slate-900 mb-2">{tier.title}</h3>
                  <p className="text-slate-600 font-light mb-8">{tier.description}</p>

                  <div className="mb-10">
                    <span className="text-5xl font-black text-slate-900">{tier.price}</span>
                    <p className="text-slate-600 font-light mt-2">{tier.period}</p>
                  </div>

                  <ul className="space-y-3 mb-10">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 font-light">
                        <span className="w-6 h-6 rounded-full bg-cyan-400 flex-shrink-0 flex items-center justify-center mt-1">
                          <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-full font-black py-6 text-lg ${
                      tier.highlight
                        ? 'bg-cyan-400 hover:bg-cyan-300 text-gray-900'
                        : 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    Book Now
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Important Info */}
        <div className="bg-slate-50 rounded-3xl p-12 border-2 border-slate-200">
          <h3 className="text-2xl font-black text-slate-900 mb-10">Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <p className="text-sm font-black text-slate-500 mb-3 uppercase tracking-wide">Group Size</p>
              <p className="text-2xl font-black text-slate-900">40+ people</p>
            </div>
            <div>
              <p className="text-sm font-black text-slate-500 mb-3 uppercase tracking-wide">Duration</p>
              <p className="text-2xl font-black text-slate-900">2 days • 1 night</p>
            </div>
            <div>
              <p className="text-sm font-black text-slate-500 mb-3 uppercase tracking-wide">Availability</p>
              <p className="text-2xl font-black text-slate-900">Flexible dates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
