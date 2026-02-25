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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-20">What Awaits You</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group flex flex-col"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-3xl mb-6">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-3">{facility.title}</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
