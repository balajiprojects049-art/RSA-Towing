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
import { Car, Bike, Truck, Battery, Fuel, Wrench, Key, Disc, Bus } from 'lucide-react'

export default function Home() {
  const services = [
    { t: 'Car Towing', d: 'Quick local towing for all sedan and SUV models.', p: 'From ₹2,999', icons: Car },
    { t: 'Bike Towing', d: 'Safe motorcycle transport using specialized towing rigs.', p: 'From ₹1,999', icons: Bike },
    { t: 'Commercial Towing', d: 'Towing for delivery vans, buses, and commercial fleets.', p: 'Custom Quote', icons: Bus },
    { t: 'Heavy Vehicle Towing', d: 'Heavy-duty recovery for trucks and construction equipment.', p: 'Custom Quote', icons: Truck },
    { t: 'Battery Jumpstart', d: 'On-site professional battery boost to get you moving.', p: 'From ₹1,499', icons: Battery },
    { t: 'Minor Repairs', d: 'Quick fixes for common mechanical issues on the spot.', p: 'From ₹999', icons: Wrench },
    { t: 'Puncture & Flat Tire', d: 'Tire change or puncture repair service at your location.', p: 'From ₹799', icons: Disc },
    { t: 'Emergency Fuel', d: 'Petrol or diesel delivery when you run dry.', p: 'From ₹999 + Fuel', icons: Fuel },
    { t: 'Key Recovery', d: 'Car lockout assistance and lost key retrieval services.', p: 'From ₹1,499', icons: Key }
  ]

  return (
    <div className="flex flex-col gap-8 overflow-hidden">
      <Hero />

      <section id="services" className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 -z-10 blur-3xl opacity-50" />
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Professional Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black tracking-tight">Our Premium <span className="text-gradient">Services</span></h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((s, i) => <ServiceCard key={i} title={s.t} desc={s.d} price={s.p} icon={s.icons} />)}
        </div>
      </section>

      <QuoteCalculator />
      <HowItWorks />
      <FleetGallery />
      <PricingTable />
      <Testimonials />
      <MapCoverage />
      <FAQ />


      <WhatsAppButton />
    </div>
  )
}
