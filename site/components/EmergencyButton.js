import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export function EmergencyButton() {
  return (
    <motion.a
      href="tel:+919512291229"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed right-6 bottom-6 w-16 h-16 bg-accent text-navy rounded-full shadow-[0_10px_40px_rgba(255,215,0,0.5)] z-50 flex items-center justify-center group"
    >
      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20 group-hover:opacity-40" />
      <Phone size={28} className="relative z-10" />
      <div className="absolute right-full mr-4 bg-navy text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        EMERGENCY CALL
      </div>
    </motion.a>
  )
}
