import Link from 'next/link'
import { Sun, Moon, Phone, Menu, X, Car } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [dark, setDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass shadow-lg' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <Car size={24} />
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-xl tracking-tight">RSA <span className="text-accent">Towing</span></div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-bold">24/7 Premium Rescue</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-accent transition-colors">
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800" />
          <button onClick={() => setDark(!dark)} className="p-2 rounded-xl glass-card text-gray-600 dark:text-gray-300">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="tel:+919512291229" className="btn-primary flex items-center gap-2">
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </nav>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={() => setDark(!dark)} className="p-2 rounded-xl glass text-gray-600 dark:text-gray-300">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-xl glass">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2">
                  {link.name}
                </Link>
              ))}
              <a href="tel:+919512291229" className="btn-primary text-center mt-2 flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
