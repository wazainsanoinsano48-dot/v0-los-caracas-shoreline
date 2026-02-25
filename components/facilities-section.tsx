'use client'

import Image from 'next/image'

export function FacilitiesSection() {
  const facilities = [
    {
      title: 'Piscinas Paradisíacas',
      description: 'Múltiples piscinas para todas las edades con hamacas y entorno tropical',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0010-7kfFgO4BUC00jxHLBcswWXWWx7lSwI.jpg'
    },
    {
      title: 'Acceso a Playas',
      description: 'Acceso directo a playas prístinas con aguas caribeñas cristalinas',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0009-l6Qv4rfo18aFjqnGKEMcrMzdezoJJI.jpg'
    },
    {
      title: 'Experiencias de Río',
      description: 'Nado, terapia de barro y relajación en el pintoresco río',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0012-zJkTcm2CIJm30JHapqSOxJ9Xt7vfu9.jpg'
    },
    {
      title: 'Alojamiento Campestre',
      description: 'Cabañas con arquitectura colonial auténtica y confort moderno',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0008-2GO2BmFro9v1oT97cj1wnqNoX5DQqK.jpg'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">Instalaciones de Clase Mundial</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Descubre todo lo que necesitas para la escapada tropical perfecta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 md:h-72 w-full overflow-hidden bg-slate-200">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 bg-white border-t-4 border-emerald-700">
                <h3 className="text-xl md:text-2xl font-light text-slate-900 mb-2">{facility.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
