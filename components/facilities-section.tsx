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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">World-Class Facilities</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover everything you need for the ultimate tropical getaway
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-gradient-to-t from-slate-900 to-slate-800 text-white absolute bottom-0 left-0 right-0">
                <h3 className="text-2xl font-bold mb-2">{facility.title}</h3>
                <p className="text-slate-200">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
