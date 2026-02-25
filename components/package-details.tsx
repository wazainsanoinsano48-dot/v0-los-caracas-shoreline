'use client'

import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

export function PackageDetails() {
  const features = [
    'Alojamiento premium en cabañas adyacentes',
    'Régimen completo (Desayunos, Almuerzos, Cenas y Snacks)',
    'Opciones saludables y menús infantiles',
    'Transporte privado con aire acondicionado',
    'Apoyo logístico 24/7',
    'Coordinación de servicio médico',
    'Acceso a playa y río',
    'Canchas deportivas y áreas verdes',
    'Actividades grupales y entretenimiento',
    'Actividades de integración y fogata'
  ]

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260223-WA0011-Oy2pqokiSeyabfBYSCpZ1uQGOIqhPb.jpg"
              alt="All-Inclusive Package"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">Paquete Todo Incluido</h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed font-light">
                Todo lo que necesitas para una escapada grupal inolvidable. Desde alojamiento premium hasta comidas gourmet, transporte y entretenimiento sin parar—nosotros manejamos cada detalle para que te enfoque en crear recuerdos duraderos.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5 font-bold" />
                  <span className="text-slate-700 text-base font-light">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-md p-6 border-l-4 border-emerald-700">
              <p className="text-slate-700 font-light">
                <span className="font-medium text-slate-900">Perfecto para:</span> Grupos de 40 personas de todas las edades que buscan recreación integral combinando descanso, naturaleza y ocio activo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
