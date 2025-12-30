import { motion } from 'framer-motion'
import { PhoneCall, MapPin, Truck } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      t: 'Request Service',
      d: 'Call our 24/7 hotline or submit an emergency request form with your location.',
      icon: PhoneCall
    },
    {
      t: 'Live Tracking',
      d: 'Get a real-time tracking link to follow the nearest recovery crew as they make their way to you.',
      icon: MapPin
    },
    {
      t: 'Vehicle Safely Towed',
      d: 'Our certified team secures and transports your vehicle, following strict safety protocols.',
      icon: Truck
    }
  ]

  return (
    <section className="py-12 relative">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-display font-black tracking-tight mb-4">How It <span className="text-gradient">Works</span></h3>
        <p className="text-gray-500 max-w-lg mx-auto">Stuck on the road? Follow three quick steps and our team will take care of the rest.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -translate-y-1/2 -z-10" />

        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 bg-white dark:bg-gray-900 border-2 border-accent rounded-full flex items-center justify-center text-accent mb-6 shadow-xl group-hover:scale-110 transition-transform">
              <s.icon size={32} />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent text-white font-bold flex items-center justify-center text-sm">
              {i + 1}
            </div>
            <h4 className="text-xl font-display font-bold mb-3">{s.t}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[250px]">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
