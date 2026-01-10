import { MapPin, Navigation } from 'lucide-react'
import { motion } from 'framer-motion'

export function MapCoverage() {
  const zones = [
    { name: 'Mumbai', image: '/images/cities/mumbai.png' },
    { name: 'Delhi NCR', image: '/images/cities/delhi.png' },
    { name: 'Bengaluru', image: '/images/cities/bengaluru.png' },
    { name: 'Hyderabad', image: '/images/cities/hyderabad.png' },
    { name: 'Chennai', image: '/images/cities/chennai.png' },
    { name: 'Pune', image: '/images/cities/pune.png' },
    { name: 'Kolkata', image: '/images/cities/kolkata.png' },
    { name: 'Ahmedabad', image: '/images/cities/ahmedabad.png' },
    { name: 'Jaipur', image: '/images/cities/jaipur.png' },
    { name: 'Lucknow', image: '/images/cities/lucknow.png' },
    { name: 'Surat', image: '/images/cities/surat.png' },
    { name: 'Kochi', image: '/images/cities/kochi.png' }
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-display font-black tracking-tight mb-6">Service <span className="text-gradient">Coverage</span></h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          We are rapidly expanding. Our specialized rescue teams are strategically stationed across major hubs to ensure a sub-15 minute response time.
        </p>

        <div className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-white/10 max-w-lg mx-auto mb-10 text-left">
          <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
            <Navigation size={20} />
          </div>
          <div>
            <div className="font-bold">Real-time GPS Dispatching</div>
            <div className="text-sm text-gray-500">Nearest crew is automatically assigned.</div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden mask-linear-fade">
          <div className="relative w-full overflow-hidden mask-linear-fade">
            <div className="flex animate-scroll w-max">
              <div className="flex flex-shrink-0 gap-6 pr-6">
                {zones.map((zone, i) => (
                  <div
                    key={i}
                    className="relative min-w-[200px] h-[300px] rounded-2xl overflow-hidden glass-card group flex-shrink-0"
                  >
                    <img
                      src={zone.image}
                      alt={zone.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 text-white mb-1">
                        <MapPin size={16} className="text-accent" />
                        <span className="font-display font-bold tracking-wide">{zone.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-shrink-0 gap-6 pr-6">
                {zones.map((zone, i) => (
                  <div
                    key={`dup-${i}`}
                    className="relative min-w-[200px] h-[300px] rounded-2xl overflow-hidden glass-card group flex-shrink-0"
                  >
                    <img
                      src={zone.image}
                      alt={zone.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 text-white mb-1">
                        <MapPin size={16} className="text-accent" />
                        <span className="font-display font-bold tracking-wide">{zone.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
