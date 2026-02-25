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
    <section id="pricing" className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-xs font-light tracking-widest uppercase text-muted-foreground/60 mb-4">Investment</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Transparent Pricing</h2>
          <p className="text-base text-muted-foreground/80 font-light max-w-2xl leading-relaxed">
            All-inclusive rates for your 2-day escape. No hidden surprises, only exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 rounded-sm border ${
                  tier.highlight
                    ? 'border-accent bg-secondary/40 ring-1 ring-accent/50 md:scale-105'
                    : 'border-border/40 hover:border-accent/30 hover:shadow-sm'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-accent/80 text-white px-3 py-1 rounded-sm text-xs font-light tracking-widest uppercase">
                    Most Popular
                  </div>
                )}

                <div className="p-8 lg:p-8">
                  <h3 className="text-lg font-serif text-foreground mb-1">{tier.title}</h3>
                  <p className="text-xs text-muted-foreground/70 font-light mb-6">{tier.description}</p>

                  <div className="mb-8 pt-4 border-t border-border/40">
                    <span className="text-3xl font-serif text-foreground block mt-4">{tier.price}</span>
                    <p className="text-xs text-muted-foreground/70 font-light mt-2">{tier.period}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground/75 font-light text-xs">
                        <span className="w-3 h-3 border border-muted-foreground/30 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                          <span className="w-1 h-1 bg-muted-foreground/50 rounded-full"></span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-sm font-light py-2 text-xs tracking-wide uppercase transition-all duration-300 ${
                      tier.highlight
                        ? 'bg-gradient-to-r from-accent to-accent/80 hover:shadow-md text-white'
                        : 'border border-foreground/20 text-foreground hover:bg-foreground/5'
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
        <div className="bg-secondary/30 rounded-sm p-10 lg:p-12 border border-border/40">
          <h3 className="text-lg font-serif text-foreground mb-8">Key Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-xs font-light text-muted-foreground/60 uppercase tracking-widest">Group Size</p>
              <p className="text-2xl font-serif text-foreground">40+ guests</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-light text-muted-foreground/60 uppercase tracking-widest">Duration</p>
              <p className="text-2xl font-serif text-foreground">2 Days &amp; 1 Night</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-light text-muted-foreground/60 uppercase tracking-widest">Availability</p>
              <p className="text-2xl font-serif text-foreground">Custom Dates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
