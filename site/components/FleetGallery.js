import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export function FleetGallery() {
  const items = [
    { t: 'Flatbed Highway Service', d: 'Professional flatbed towing on Indian expressways', img: '/images/hero-truck-highway.jpg' },
    { t: 'Bike Towing Specialist', d: 'Royal Enfield and premium motorcycle recovery', img: '/images/bike-towing.jpg' },
    { t: 'City Car Recovery', d: 'Quick urban towing for sedans and hatchbacks', img: '/images/car-towing.jpg' },
    { t: 'Premium SUV Transport', d: 'Luxury vehicle towing with extra care', img: '/images/suv-towing-sunset.jpg' },
    { t: '24/7 Night Response', d: 'Emergency service available round the clock', img: '/images/night-emergency.jpg' },
    { t: 'Battery Jump-Start', d: 'On-site roadside battery assistance', img: '/images/battery-jumpstart.jpg' },
    { t: 'Heavy Duty Winch', d: 'Advanced recovery equipment for tough situations', img: '/images/winch-truck-depot.jpg' },
    { t: 'Complete Fleet', d: 'Our full range of recovery vehicles ready 24/7', img: '/images/fleet-lineup.jpg' },
    { t: 'Professional Team', d: 'Certified and trained recovery specialists', img: '/images/team-photo.jpg' },
    { t: 'Dispatch Center', d: 'GPS-enabled control center for instant response', img: '/images/dispatch-center.jpg' }
  ]

  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h3 className="text-4xl font-display font-black tracking-tight mb-4">Modern <span className="text-gradient">Fleet</span></h3>
          <p className="text-gray-500 max-w-lg">We use the latest recovery technology and certified equipment to ensure damage-free towing every single time.</p>
        </div>
        <div className="flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-bold border border-green-500/20">
          <Shield size={18} />
          <span>100% Damage-Free Guarantee</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-[3/4] rounded-3xl overflow-hidden glass shadow-xl"
          >
            <img
              src={item.img}
              alt={item.t}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-6 text-white w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h4 className="text-lg font-bold mb-1">{item.t}</h4>
              <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
