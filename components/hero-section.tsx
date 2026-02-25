'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-turquoise-50 to-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0010-7kfFgO4BUC00jxHLBcswWXWWx7lSwI.jpg"
          alt="Los Caracas Shoreline Resort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white text-balance leading-tight tracking-tight">
            Where the<br />River Runs<br />to the Reef
          </h1>

          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto font-light leading-relaxed">
            All-inclusive escape on Colombia's Central Coast
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-black px-10 py-7 text-lg rounded-full shadow-lg transition-all hover:scale-105"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 px-10 py-7 text-lg rounded-full font-bold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
