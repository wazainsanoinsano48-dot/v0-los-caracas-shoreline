'use client'

import Image from 'next/image'

export function FacilitiesSection() {
  const facilities = [
    {
      title: 'Turquoise Pools',
      description: 'Multiple pools for all ages with sun loungers and tropical surroundings',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0010-7kfFgO4BUC00jxHLBcswWXWWx7lSwI.jpg'
    },
    {
      title: 'Beachfront Access',
      description: 'Direct access to pristine beaches with crystal-clear Caribbean waters',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0009-l6Qv4rfo18aFjqnGKEMcrMzdezoJJI.jpg'
    },
    {
      title: 'River Experiences',
      description: 'Swimming, mud therapy, and relaxation by the scenic river',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0012-zJkTcm2CIJm30JHapqSOxJ9Xt7vfu9.jpg'
    },
    {
      title: 'Colonial Accommodations',
      description: 'Charming cabins with authentic colonial architecture and modern comfort',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0008-2GO2BmFro9v1oT97cj1wnqNoX5DQqK.jpg'
    }
  ]

  return (
    <section id="facilities" className="py-32 md:py-40 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">Your Sanctuary Awaits</h2>
          <p className="text-lg text-slate-600 max-w-xl font-light">
            Experience world-class amenities designed for complete relaxation and unforgettable adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group flex flex-col"
            >
              <div className="relative h-96 w-full overflow-hidden rounded-2xl mb-8 shadow-lg">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">{facility.title}</h3>
              <p className="text-base text-slate-600 font-light leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
