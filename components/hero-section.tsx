'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0010-7kfFgO4BUC00jxHLBcswWXWWx7lSwI.jpg"
          alt="Los Caracas Shoreline Resort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto space-y-8 text-center">
          <div className="space-y-3">
            <div className="text-sm tracking-widest text-emerald-400 uppercase font-medium">
              Experiencia Tropical
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white text-balance leading-tight tracking-tight">
              Los Caracas<br />Shoreline
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 font-light italic mt-4">
              Where the river runs to the reef
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/85 max-w-xl mx-auto leading-relaxed font-light">
            Vive una experiencia inolvidable todo incluido en la costa colombiana. Reconéctate con la naturaleza, aventura y los tuyos.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-6 text-base font-medium rounded-md transition-all duration-300"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Paquetes
            </Button>
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-base font-medium rounded-md transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Más Información
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
