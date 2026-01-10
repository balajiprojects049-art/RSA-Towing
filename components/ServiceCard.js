import { motion } from 'framer-motion'

export function ServiceCard({ title, desc, price, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card p-5 md:p-8 rounded-2xl flex flex-col items-start gap-3 md:gap-4 border border-white/10"
    >
      <div className="w-10 h-10 md:w-14 md:h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center font-bold">
        {Icon ? <Icon size={20} className="md:w-[30px] md:h-[30px]" /> : 'T'}
      </div>
      <div>
        <h3 className="text-base md:text-xl font-display font-bold mb-2 break-words">{title}</h3>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
      </div>
      <div className="mt-2 md:mt-auto pt-2 w-full flex items-center justify-between border-t border-gray-100 dark:border-white/5">
        <span className="text-xs md:text-sm font-bold text-accent">{price}</span>
        <div className="w-8 md:w-10 h-1 rounded-full animate-shimmer" />
      </div>
    </motion.div>
  )
}
