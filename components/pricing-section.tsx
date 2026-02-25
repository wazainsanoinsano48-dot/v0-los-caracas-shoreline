'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, Baby, Gift } from 'lucide-react'

export function PricingSection() {
  const pricingTiers = [
    {
      icon: Users,
      title: 'Adulto',
      description: 'Para huéspedes de 12 años en adelante',
      price: '$100',
      period: 'por persona',
      features: ['Todas las comidas incluidas', 'Acceso completo a actividades', 'Transporte', 'Apoyo 24/7'],
      highlight: false
    },
    {
      icon: Baby,
      title: 'Niño',
      description: 'De 2-11 años compartiendo habitación con adultos',
      price: '$50',
      period: 'por persona',
      features: ['Todas las comidas (menú infantil disponible)', 'Actividades apropiadas para edad', 'Transporte', 'Supervisión'],
      highlight: true
    },
    {
      icon: Gift,
      title: 'Bebé',
      description: 'Menores de 2 años',
      price: 'Gratis',
      period: 'Sin alojamiento incluido',
      features: ['Habitación compartida con adultos', 'Alimento no incluido', 'Coordinación de cuidado especial'],
      highlight: false
    }
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">Precios Simples y Transparentes</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Tarifas todo incluido para una experiencia de 2 días inolvidable. Sin cargos ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 flex flex-col ${
                  tier.highlight
                    ? 'ring-2 ring-emerald-700 shadow-xl md:scale-105'
                    : 'hover:shadow-lg'
                } rounded-lg bg-white`}
              >
                {tier.highlight && (
                  <div className="absolute top-4 right-4 bg-emerald-700 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                    Más Popular
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <Icon className="w-10 h-10 text-emerald-700 mb-4" />
                    <h3 className="text-2xl font-light text-slate-900 mb-1">{tier.title}</h3>
                    <p className="text-slate-600 text-sm font-light">{tier.description}</p>
                  </div>

                  <div className="mb-8 pb-8 border-b border-slate-200">
                    <span className="text-5xl font-light text-emerald-700">{tier.price}</span>
                    <p className="text-slate-600 text-sm mt-2 font-light">{tier.period}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm font-light">
                        <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-md font-medium py-2 transition-all ${
                      tier.highlight
                        ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                        : 'border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50'
                    }`}
                  >
                    Reservar Ahora
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Important Info */}
        <div className="bg-cream rounded-lg p-8 md:p-10 border border-slate-200">
          <h3 className="text-xl font-light text-slate-900 mb-6">Información Importante</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">Tamaño de grupo</p>
              <p className="text-slate-900 font-light text-lg">Mínimo 40 personas</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">Duración</p>
              <p className="text-slate-900 font-light text-lg">2 días, 1 noche</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">Disponibilidad</p>
              <p className="text-slate-900 font-light text-lg">Fechas a definir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
