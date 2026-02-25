'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0010-7kfFgO4BUC00jxHLBcswWXWWx7lSwI.jpg"
          alt="Los Caracas Shoreline Resort"
          fill
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-white/70">
              Discover Paradise
            </p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-white text-balance leading-tight">
              Where the River Runs to the Reef
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
            An all-inclusive sanctuary designed for transformative moments and cherished memories.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-slate-100 font-semibold px-8 py-3 rounded-full shadow-lg transition-all hover:shadow-xl"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Reserve Your Stay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
