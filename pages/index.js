import { Hero } from '../components/Hero'
import { ServiceCard } from '../components/ServiceCard'
import { HowItWorks } from '../components/HowItWorks'
import { FleetGallery } from '../components/FleetGallery'
import { PricingTable } from '../components/PricingTable'
import { Testimonials } from '../components/Testimonials'
import { MapCoverage } from '../components/MapCoverage'
import { EmergencyButton } from '../components/EmergencyButton'
import { QuoteCalculator } from '../components/QuoteCalculator'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { FAQ } from '../components/FAQ'
import { Car, Bike, Truck, Battery, Fuel, RotateCcw } from 'lucide-react'

export default function Home() {
  const services = [
    { t: 'Car Towing', d: 'Fast local towing for all sedan & SUV models.', icons: Car },
    { t: 'Bike Towing', d: 'Secure motorcycle transport with specialized rigs.', icons: Bike },
    { t: 'Flatbed Recovery', d: 'Heavy & delicate vehicle transport for long distances.', icons: Truck },
    { t: 'Battery Jump-Start', d: 'Professional on-site battery assistance within 15 min.', icons: Battery },
    { t: 'Emergency Fuel', d: 'Running low? We deliver fuel to your exact location.', icons: Fuel },
    { t: 'Accident Recovery', d: 'Safe winch and recovery services for accident sites.', icons: RotateCcw }
  ]

  return (
    <div className="flex flex-col gap-24 overflow-hidden">
      <Hero />

      <section id="services" className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 -z-10 blur-3xl opacity-50" />
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Professional Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black tracking-tight">Our Premium <span className="text-gradient">Services</span></h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, i) => <ServiceCard key={i} title={s.t} desc={s.d} icon={s.icons} />)}
        </div>
      </section>

      <QuoteCalculator />
      <HowItWorks />
      <FleetGallery />
      <PricingTable />
      <Testimonials />
      <MapCoverage />
      <FAQ />

      <EmergencyButton />
      <WhatsAppButton />
    </div>
  )
}
