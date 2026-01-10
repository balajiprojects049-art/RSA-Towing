import { motion } from 'framer-motion'

export function PageHero({ title, subtitle, image, alt = "Towing Service" }) {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden group">
            {/* Background Image with Parallax/Scale Effect on Hover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy/90 z-10" />
                    <img
                        src={image}
                        alt={alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-10 opacity-30 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-accent rounded-tl-3xl" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-accent rounded-br-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tight drop-shadow-2xl">
                        {title}
                    </h1>
                    <div className="w-24 h-1.5 bg-accent mx-auto mb-6 rounded-full" />
                    <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        {subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Glossy Overlay effect */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
        </section>
    )
}
