import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export function Testimonials() {
  const reviews = [
    { n: 'Rajesh K.', r: '5.0', text: '"My car broke down at 2 AM on Mumbai-Pune Expressway. RSA Towing arrived in 12 minutes and the driver was extremely professional. Saved my night!"', title: 'Car Breakdown', img: '/images/happy-customer.jpg' },
    { n: 'Priya M.', r: '5.0', text: '"Best bike towing I have used in Bengaluru. They have specialized rigs that secure the bike perfectly. Highly recommended for premium bikes like Royal Enfield."', title: 'Superbike Recovery' },
    { n: 'Amit S.', r: '5.0', text: '"Transparent pricing and live tracking from Delhi to Noida. I knew exactly where the truck was. No hidden charges at all. Very professional service!"', title: 'Emergency Fuel' }
  ]

  return (
    <section className="py-20 bg-accent/5 -mx-6 lg:-mx-12 px-6 lg:px-12 rounded-[3rem]">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-display font-black tracking-tight mb-4">Customer <span className="text-gradient">Success Stories</span></h3>
        <p className="text-gray-500 max-w-lg mx-auto">See why thousands of vehicle owners trust us for their emergency roadside needs.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-10 rounded-[2.5rem] relative"
          >
            <div className="absolute top-8 right-8 text-accent/10">
              <Quote size={60} />
            </div>

            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={16} className="fill-accent text-accent" />
              ))}
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-8 relative z-10">
              {r.text}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent">
                {r.n.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{r.n}</div>
                <div className="text-xs text-accent font-bold uppercase tracking-wider">{r.title}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Placeholder for Trust Badges */}
        <div className="font-display font-black text-2xl tracking-tighter">Google <span className="text-accent">4.9★</span></div>
        <div className="font-display font-black text-2xl tracking-tighter">TRUSTPILOT</div>
        <div className="font-display font-black text-2xl tracking-tighter">FORBES</div>
      </div>
    </section>
  )
}
