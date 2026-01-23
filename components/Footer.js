import { Phone, Mail, MapPin, Instagram, Twitter, Facebook } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-24 bg-gray-50 dark:bg-navy border-t border-gray-200 dark:border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative h-14 w-40 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/rsa-towing-logo.png"
                  alt="RSA Towing"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              India’s most trusted premium 24/7 towing and roadside assistance provider—delivering fast, safe, and dependable service whenever you need it.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass-card rounded-lg text-gray-400 hover:text-accent transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 glass-card rounded-lg text-gray-400 hover:text-accent transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 glass-card rounded-lg text-gray-400 hover:text-accent transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link href="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link href="/fleet" className="hover:text-accent transition-colors">Our Fleet</Link></li>
              <li><Link href="/pricing" className="hover:text-accent transition-colors">Pricing Plans</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Request Towing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-accent transition-colors">Car Towing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bike Towing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Flatbed Transport</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Battery Help</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex gap-3">
                <Phone size={18} className="text-accent" />
                <span className="font-bold text-gray-900 dark:text-white">+91 9512291229</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-accent" />
                <span>rsatowing24x7@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-accent" />
                <span>Hyderabad HQ - Serving Pan India 24x7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-widest">
          <div>© {new Date().getFullYear()} RSA TOWING INC. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
