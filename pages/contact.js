import { PageHero } from '../components/PageHero'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div>
      <PageHero
        badge="Get In Touch"
        title={<>Contact <span className="text-gradient">RSA Towing</span></>}
        description="Our team is available round-the-clock for emergency roadside support. Reach us via phone, WhatsApp, or email for immediate assistance."

      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-display font-black mb-8">Quick Contact</h2>

            <div className="space-y-6">
              <motion.a
                href="tel:+919512291229"
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 glass-card p-6 rounded-2xl hover:bg-accent/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-navy transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">Emergency Hotline</div>
                  <div className="text-2xl font-display font-black text-accent">+91 9512291229</div>
                  <div className="text-sm text-gray-500">Available 24/7/365</div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/919512291229"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 glass-card p-6 rounded-2xl hover:bg-green-500/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">WhatsApp</div>
                  <div className="text-lg font-bold text-green-500">Chat with us instantly</div>
                  <div className="text-sm text-gray-500">Fast response guaranteed</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:rsatowing24x7@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 glass-card p-6 rounded-2xl hover:bg-blue-500/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">Email</div>
                  <div className="text-lg font-bold text-blue-500">rsatowing24x7@gmail.com</div>
                  <div className="text-sm text-gray-500">For general inquiries</div>
                </div>
              </motion.a>

              <div className="flex items-start gap-4 glass-card p-6 rounded-2xl">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">Headquarters</div>
                  <div className="text-lg font-bold">Hyderabad, Telangana</div>
                  <div className="text-sm text-gray-500">Serving Pan India 24x7</div>
                </div>
              </div>

              <div className="flex items-start gap-4 glass-card p-6 rounded-2xl">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">Working Hours</div>
                  <div className="text-lg font-bold text-accent">24 Hours / 7 Days</div>
                  <div className="text-sm text-gray-500">365 days a year</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-display font-black mb-8">Send Message</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-accent focus:outline-none">
                  <option>Car Towing</option>
                  <option>Bike Towing</option>
                  <option>Flatbed Recovery</option>
                  <option>Battery Jump-Start</option>
                  <option>Fuel Delivery</option>
                  <option>Accident Recovery</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirement..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-accent focus:outline-none resize-none"
                />
              </div>

              <button type="submit" className="w-full btn-primary py-4 text-lg">
                Send Message
              </button>

              <p className="text-center text-sm text-gray-500">
                For urgent assistance, please call <a href="tel:+919512291229" className="text-accent font-bold">+91 9512291229</a>
              </p>
            </form>
          </div>
        </div>

        {/* Why Contact Us Section with Image */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/dispatch-center.jpg"
                  alt="RSA Towing Dispatch Center"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Information */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-display font-black mb-6">
                Always Ready to <span className="text-gradient">Assist</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Our state-of-the-art dispatch center operates around the clock, every day of the year, so you’re never left stranded. With GPS-enabled tracking and certified operators, help is just a call or click away.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Instant Response</h3>
                    <p className="text-sm text-gray-500">Rapid assistance with an average response time of just 12 minutes in major cities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Live GPS Tracking</h3>
                    <p className="text-sm text-gray-500">Track your rescue vehicle in real-time with SMS alerts and accurate ETAs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Continuous Availability</h3>
                    <p className="text-sm text-gray-500">Day or night, our team is always on standby to provide prompt roadside support.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="tel:+919512291229" className="btn-primary inline-flex items-center gap-2">
                  <Phone size={20} />
                  Call Emergency Hotline
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-display font-black mb-8 text-center">Our Location</h2>
          <div className="glass-card p-4 rounded-3xl overflow-hidden">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.24323209999999!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1703337600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                📍 RSA Towing - Hyderabad Headquarters | Serving Pan India 24/7
              </p>
              <a
                href="https://www.google.com/maps/place/Hyderabad,+Telangana/@17.412608,78.24323209999999,10z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-bold text-sm hover:underline inline-block mt-2"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
