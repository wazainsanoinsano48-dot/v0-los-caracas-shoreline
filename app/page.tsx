import { HeroSection } from '@/components/hero-section'
import { FacilitiesSection } from '@/components/facilities-section'
import { PackageDetails } from '@/components/package-details'
import { PricingSection } from '@/components/pricing-section'
import { ItinerarySection } from '@/components/itinerary-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <FacilitiesSection />
      <PackageDetails />
      <ItinerarySection />
      <PricingSection />
      <ContactSection />
    </main>
  )
}
