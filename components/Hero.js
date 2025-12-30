import { motion } from 'framer-motion'
import { Phone, ArrowRight, Shield, Clock, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available 24/7 Across Pan India
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-black leading-[1.1] tracking-tight"
          >
            24/7 Car & Bike <br />
            <span className="text-gradient">Towing Services</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
          >
            Fast, safe, and reliable roadside assistance anytime, anywhere. Get back on the road within minutes.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="tel:+919512291229" className="btn-primary flex items-center gap-3 text-lg py-4">
              <Phone size={22} className="animate-pulse" />
              Call Now
            </a>
            <a href="/contact" className="btn-secondary flex items-center gap-3 text-lg py-4 group">
              Request Towing
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-display font-black text-gray-900 dark:text-white">50k+</span>
              <span className="text-sm text-gray-500 uppercase font-bold tracking-tighter">Rescued</span>
            </div>
            <div className="flex flex-col border-x border-gray-200 dark:border-gray-800 px-8">
              <span className="text-3xl font-display font-black text-gray-900 dark:text-white">12m</span>
              <span className="text-sm text-gray-500 uppercase font-bold tracking-tighter">Response</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-black text-gray-900 dark:text-white">150+</span>
              <span className="text-sm text-gray-500 uppercase font-bold tracking-tighter">Cities</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl glass p-2">
            <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
              <img
                src="/images/hero-truck-highway.jpg"
                alt="RSA Towing truck on Indian highway"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs">
            <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
              <Clock size={24} />
            </div>
            <div>
              <div className="font-bold">Lightning Fast</div>
              <div className="text-xs text-gray-500">Nearest crew dispatched instantly to your GPS coordinates.</div>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 glass-card p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <div>
              <div className="font-bold">Real-time Tracking</div>
              <div className="text-xs text-gray-500">Live map view of our rescue vehicle arriving.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
