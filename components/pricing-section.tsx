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
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-turquoise-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            All-inclusive rates for an unforgettable 2-day experience. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 ${
                  tier.highlight
                    ? 'ring-2 ring-turquoise-600 shadow-xl scale-105 md:scale-100'
                    : 'hover:shadow-lg'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-4 right-4 bg-turquoise-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <Icon className="w-12 h-12 text-turquoise-600 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.title}</h3>
                  <p className="text-slate-600 mb-6">{tier.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                    <p className="text-slate-600 text-sm mt-1">{tier.period}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700">
                        <span className="w-2 h-2 bg-turquoise-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-lg font-semibold py-2 ${
                      tier.highlight
                        ? 'bg-turquoise-600 hover:bg-turquoise-700 text-white'
                        : 'border-2 border-turquoise-600 text-turquoise-600 hover:bg-turquoise-50'
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
        <div className="bg-slate-100 rounded-2xl p-8 border-2 border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">📋 Important Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">GROUP SIZE</p>
              <p className="text-slate-900">Minimum 40 people</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">DURATION</p>
              <p className="text-slate-900">2 days, 1 night</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">AVAILABILITY</p>
              <p className="text-slate-900">Dates to be defined</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
