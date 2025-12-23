import { motion } from 'framer-motion'

export function ServiceCard({ title, desc, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card p-8 rounded-2xl flex flex-col items-start gap-4 border border-white/10"
    >
      <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center font-bold">
        {Icon ? <Icon size={30} /> : 'T'}
      </div>
      <div>
        <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
      </div>
      <div className="mt-4 w-10 h-1 bg-accent/20 rounded-full" />
    </motion.div>
  )
}
