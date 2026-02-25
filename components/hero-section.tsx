'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 overflow-hidden pt-24 pb-20">
      {/* Background Image - Right side */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-0 opacity-40">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0010-7kfFgO4BUC00jxHLBcswWXWWx7lSwI.jpg"
          alt="Los Caracas Shoreline Resort"
          fill
          className="object-cover"
          priority={true}
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 lg:px-12">
        <div className="max-w-3xl mx-0">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-light tracking-widest uppercase text-muted-foreground/70">
                Discover Paradise
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-foreground text-balance leading-tight">
                Where the River Runs to the Reef
              </h1>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground/85 max-w-2xl font-light leading-relaxed">
              An all-inclusive sanctuary designed for transformative moments and cherished memories. Experience Caribbean luxury reimagined.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-accent/80 text-white hover:shadow-lg font-semibold px-8 py-3 rounded-sm transition-all duration-300"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Reserve Your Stay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-foreground/20 text-foreground hover:bg-foreground/5 px-8 py-3 rounded-sm font-semibold transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
