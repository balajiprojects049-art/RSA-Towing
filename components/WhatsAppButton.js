import { motion } from 'framer-motion'

export function WhatsAppButton() {
    const phoneNumber = '919512291229' // WhatsApp number (without + and spaces)
    const message = 'Hello! I need roadside assistance. Can you help me?'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed left-6 bottom-6 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.5)] z-50 flex items-center justify-center group"
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40" />

            {/* Official WhatsApp Icon SVG */}
            <svg
                className="relative z-10"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M27.281 4.65C24.326 1.648 20.422 0 16.265 0h-.028C7.292 0 0 7.293 0 16.262a16.215 16.215 0 002.207 8.176L0 32l7.75-2.031a16.217 16.217 0 007.75 1.973h.007c8.97 0 16.262-7.293 16.262-16.262 0-4.348-1.688-8.436-4.754-11.512zM16.237 29.75a13.483 13.483 0 01-6.86-1.875l-.492-.293-5.11 1.34 1.364-4.984-.32-.508a13.464 13.464 0 01-2.067-7.168C2.75 8.72 8.971 2.5 16.515 2.5c3.664 0 7.106 1.43 9.692 4.023a13.614 13.614 0 014.008 9.707c-.004 7.543-6.226 13.77-13.77 13.77zm7.562-10.32c-.414-.207-2.45-1.21-2.828-1.348-.379-.137-.653-.207-.93.207-.276.414-1.07 1.348-1.313 1.625-.242.277-.484.312-.898.105-.414-.207-1.746-.645-3.328-2.055-1.23-1.098-2.063-2.453-2.305-2.867-.242-.414-.028-.64.18-.847.188-.184.414-.481.621-.726.207-.242.277-.414.414-.691.137-.277.07-.52-.035-.727-.105-.207-.93-2.242-1.274-3.07-.336-.805-.676-.696-.93-.711-.242-.012-.52-.015-.798-.015-.277 0-.726.105-1.105.52-.379.414-1.446 1.414-1.446 3.449s1.48 4.004 1.687 4.28c.207.277 2.918 4.454 7.07 6.246.988.426 1.757.68 2.356.868.992.316 1.895.27 2.61.164.797-.118 2.45-.996 2.797-1.96.347-.965.347-1.797.242-1.97-.105-.175-.383-.277-.797-.485z" />
            </svg>

            <div className="absolute left-full ml-4 bg-navy text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                CHAT ON WHATSAPP
            </div>
        </motion.a>
    )
}
