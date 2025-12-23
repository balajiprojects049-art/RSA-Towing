import { MapPin, Navigation } from 'lucide-react'
import { motion } from 'framer-motion'

export function MapCoverage() {
  const zones = ['Mumbai', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Surat', 'Kochi']

  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-4xl font-display font-black tracking-tight mb-6">Service <span className="text-gradient">Coverage</span></h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
            We are rapidly expanding. Our specialized rescue teams are strategically stationed across major hubs to ensure a sub-15 minute response time.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-white/10">
              <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center">
                <Navigation size={20} />
              </div>
              <div>
                <div className="font-bold">Real-time GPS Dispatching</div>
                <div className="text-sm text-gray-500">Nearest crew is automatically assigned.</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {zones.map((zone, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium">
                  <MapPin size={16} className="text-accent" />
                  <span>{zone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-video lg:aspect-square glass rounded-[3rem] overflow-hidden border border-white/10 p-4">
          <div className="w-full h-full bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] relative overflow-hidden">
            {/* Simple Map Visualization */}
            <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain" />

            {/* Animated Pings */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className="absolute w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(255,215,0,1)]"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`
                }}
              />
            ))}

            <div className="absolute bottom-8 left-8 glass-card p-4 rounded-2xl border border-white/20 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold tracking-tight">42 CREWS ONLINE NOW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
