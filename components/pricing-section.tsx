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
    <section id="pricing" className="py-32 md:py-40 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">Investment</p>
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8">Transparent Pricing</h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl">
            All-inclusive rates for your 2-day escape. No hidden surprises, only exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 rounded-2xl ${
                  tier.highlight
                    ? 'ring-2 ring-slate-900 shadow-xl md:scale-105'
                    : 'shadow-md hover:shadow-lg'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-6 right-6 bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
                    Most Popular
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">{tier.title}</h3>
                  <p className="text-sm text-slate-600 font-light mb-8">{tier.description}</p>

                  <div className="mb-10 pt-4 border-t border-slate-200">
                    <span className="text-4xl font-serif text-slate-900 block mt-4">{tier.price}</span>
                    <p className="text-sm text-slate-600 font-light mt-2">{tier.period}</p>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 font-light text-sm">
                        <span className="w-4 h-4 border border-slate-400 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                          <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-full font-semibold py-3 text-base transition-all duration-300 ${
                      tier.highlight
                        ? 'bg-slate-900 hover:bg-slate-800 text-white'
                        : 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    Reserve Now
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Important Info */}
        <div className="bg-white rounded-2xl p-10 lg:p-12 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-serif text-slate-900 mb-10">Key Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Group Size</p>
              <p className="text-2xl font-serif text-slate-900">40+ guests</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Duration</p>
              <p className="text-2xl font-serif text-slate-900">2 Days &amp; 1 Night</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Availability</p>
              <p className="text-2xl font-serif text-slate-900">Custom Dates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
