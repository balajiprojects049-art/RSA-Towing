import { motion } from 'framer-motion'
import { Check, Info } from 'lucide-react'

export function PricingTable() {
  const plans = [
    {
      t: 'Basic Bike Tow',
      p: '₹1,999',
      d: 'Within 10 miles radius',
      f: ['Up to 10 miles', 'Secure strap rigging', '24/7 Availability', 'Live Tracking']
    },
    {
      t: 'Standard Car Tow',
      p: '₹2,999',
      d: 'Local city towing',
      f: ['Up to 15 miles', 'Flatbed or Wheel-lift', 'Priority Response', 'Insurance Coverage', 'Real-time Updates'],
      popular: true
    },
    {
      t: 'Premium Recovery',
      p: '₹5,999',
      d: 'Long distance & Speciality',
      f: ['Unlimited mileage quote', 'Speciality vehicle care', 'VIP white-glove service', 'Multi-vehicle support', 'Full roadside package']
    }
  ]

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-display font-black tracking-tight mb-4">Transparent <span className="text-gradient">Pricing</span></h3>
        <p className="text-gray-500 max-w-lg mx-auto">Honest rates with no surprises, pay only for your vehicle type and distance.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className={`glass-card p-8 rounded-3xl border ${p.popular ? 'border-accent shadow-[0_0_30px_rgba(255,215,0,0.15)] ring-2 ring-accent/20' : 'border-white/10'}`}
          >
            {p.popular && (
              <div className="bg-accent text-navy text-[10px] uppercase font-black tracking-widest py-1 px-3 rounded-full w-fit mb-4">
                Most Popular
              </div>
            )}
            <div className="text-lg font-display font-bold text-gray-900 dark:text-white">{p.t}</div>
            <div className="flex items-baseline gap-1 mt-4">
              <span className="text-4xl font-display font-black text-gray-900 dark:text-white">{p.p}</span>
              <span className="text-gray-500 text-sm">/start</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 pb-6 border-b border-gray-100 dark:border-gray-800">{p.d}</p>

            <ul className="mt-6 space-y-4 mb-8">
              {p.f.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{feat}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-xl font-bold transition-all ${p.popular ? 'bg-accent text-navy hover:bg-accent-dark' : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
              Get Current Rate
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-500 glass w-fit mx-auto px-4 py-2 rounded-full border border-white/10">
        <Info size={16} className="text-accent" />
        <span>Prices vary based on precise GPS location and specific vehicle condition.</span>
      </div>
    </section>
  )
}
