import { Car, Bike, Truck, Battery, Fuel, RotateCcw, Wrench, CheckCircle, Clock, Shield, Phone, ArrowRight, Bus, Disc, Key } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Car Towing Service',
      icon: Car,
      image: '/images/car-towing.jpg',
      desc: 'Professional sedan and SUV towing using flatbed or wheel-lift systems, suitable for all makes and models.',
      features: [
        'Support for all major brands',
        'Real-time GPS tracking',
        'Assistance with insurance documentation',
        '100% damage-free handling',
        'Available 24/7 Pan-India',
        'Wheelchair-accessible options'
      ],
      price: 'Starting at ₹2,999',
      responseTime: '12-15 min',
      serviceArea: 'All major cities',
      additionalInfo: 'Ideal for breakdowns, accidents, or planned vehicle transport.'
    },
    {
      title: 'Bike Towing Service',
      icon: Bike,
      image: '/images/bike-towing.jpg',
      desc: 'Specialized motorcycle towing using custom-built rigs designed for safe transport of all two-wheelers.',
      features: [
        'Coverage for all bike types',
        'Soft tie-down straps',
        'Vertical and horizontal loading',
        'Premium handling for superbikes',
        'Expert handlers',
        'Secure loading ramps'
      ],
      price: 'Starting at ₹1,999',
      responseTime: '10-12 min',
      serviceArea: 'Pan India coverage',
      additionalInfo: 'Perfect for long-distance transport or accident recovery.'
    },
    {
      title: 'Commercial Towing',
      icon: Bus,
      image: '/images/hero-truck-highway.jpg',
      desc: 'Reliable towing solutions for commercial fleets, delivery vans, minibuses, and other light commercial vehicles.',
      features: [
        'Fleet account management',
        'Priority response for businesses',
        'Heavy-duty wheel lift equipment',
        'Interstate transport permits',
        'Cargo safety assurance',
        'GST compliant billing'
      ],
      price: 'Custom Quote',
      responseTime: '20-30 min',
      serviceArea: 'Major logistics hubs',
      additionalInfo: 'We keep your business moving with minimized downtime.'
    },
    {
      title: 'Heavy Vehicle Towing',
      icon: Truck,
      image: '/images/winch-truck-depot.jpg',
      desc: 'Specialized recovery for heavy trucks, construction machinery, and industrial equipment using rotators and heavy wreckers.',
      features: [
        '50-ton rotator capacity',
        'Deep mud and off-road recovery',
        'Air cushion recovery systems',
        'Undolling and axle work',
        'Certified heavy salvage team',
        'Crane service availability'
      ],
      price: 'Custom Quote',
      responseTime: '30-45 min',
      serviceArea: 'Highways & Industrial Zones',
      additionalInfo: 'Expert recovery for the biggest rigs on the road.'
    },
    {
      title: 'Battery Jumpstart',
      icon: Battery,
      image: '/images/battery-jumpstart.jpg',
      desc: 'On-site battery testing and jump-starting to get your vehicle running quickly. We also offer battery replacement.',
      features: [
        '15-minute city response',
        'Professional diagnostic testing',
        'New battery supply available',
        'Free installation with purchase',
        'Warranty on new batteries',
        'Alternator inspection'
      ],
      price: 'Starting at ₹1,499',
      responseTime: '8-12 min',
      serviceArea: 'All cities',
      additionalInfo: 'Dead battery? We can test, charge, or replace it on the spot.'
    },
    {
      title: 'Minor Repairs',
      icon: Wrench,
      image: '/images/team-photo.jpg',
      desc: 'On-the-spot mechanical fixes for common issues to save you a trip to the garage.',
      features: [
        'Fuse replacement',
        'Coolant top-up',
        'Loose wire fixing',
        'Belt inspections',
        'Spark plug cleaning',
        'Diagnostic scanning'
      ],
      price: 'Starting at ₹999',
      responseTime: '15-20 min',
      serviceArea: 'City limits',
      additionalInfo: 'Small problems fixed fast so you can finish your journey.'
    },
    {
      title: 'Puncture & Flat Tire',
      icon: Disc,
      image: '/images/fleet-lineup.jpg',
      desc: 'Quick tire change service or puncture repair at your location. We carry air compressors and standard tools.',
      features: [
        'Puncture repair strips',
        'Stepney/Spare tire installation',
        'Air pressure check',
        'Valve replacement',
        'Tubeless tire repair',
        'Rim inspection'
      ],
      price: 'Starting at ₹799',
      responseTime: '10-15 min',
      serviceArea: 'All locations',
      additionalInfo: 'Don\'t struggle with the jack. Let us handle the dirty work.'
    },
    {
      title: 'Emergency Fuel',
      icon: Fuel,
      image: '/images/hero-truck-highway.jpg',
      desc: 'Fast petrol or diesel delivery when you run dry on the road. Enough fuel to reach the nearest pump.',
      features: [
        'Petrol and diesel available',
        '5-liter emergency supply',
        'Contactless payment',
        'Quality fuel guaranteed',
        'Highway priority service',
        'Jerry can refueling'
      ],
      price: 'Starting at ₹999 + Fuel Cost',
      responseTime: '10-15 min',
      serviceArea: 'Highways & Cities',
      additionalInfo: 'Ran out? We\'ll bring the pump to you.'
    },
    {
      title: 'Key Recovery',
      icon: Key,
      image: '/images/night-emergency.jpg',
      desc: 'Locked out? Our lockout specialists can open your car door safely without damage. We also retrieve lost keys.',
      features: [
        'Damage-free door unlocking',
        'Key retrieval from locked trunk',
        'Broken key extraction',
        'Lost key isolation (security)',
        'Key fob programming (select models)',
        'ID verification for security'
      ],
      price: 'Starting at ₹1,499',
      responseTime: '15-20 min',
      serviceArea: 'City limits',
      additionalInfo: 'Forgot your keys inside? We\'ll get them out in no time.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive roadside assistance and vehicle recovery available around the clock, across major Indian cities."
        image="/images/services-hero-gen.png"
      />

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="glass-card p-6 rounded-2xl text-center">
            <Clock className="text-accent mx-auto mb-2" size={32} />
            <div className="text-2xl font-display font-black">12 min</div>
            <div className="text-xs text-gray-500 uppercase font-bold">Avg Response</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <Shield className="text-accent mx-auto mb-2" size={32} />
            <div className="text-2xl font-display font-black">100%</div>
            <div className="text-xs text-gray-500 uppercase font-bold">Damage-Free</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <Car className="text-accent mx-auto mb-2" size={32} />
            <div className="text-2xl font-display font-black">50k+</div>
            <div className="text-xs text-gray-500 uppercase font-bold">Vehicles</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <Phone className="text-accent mx-auto mb-2" size={32} />
            <div className="text-2xl font-display font-black">24/7</div>
            <div className="text-xs text-gray-500 uppercase font-bold">Available</div>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="space-y-8 md:space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                        <service.icon size={28} className="text-navy" />
                      </div>
                      <div>
                        <div className="text-white font-display font-black text-2xl">{service.title}</div>
                        <div className="text-accent font-bold">{service.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] md:text-xs font-bold uppercase">
                    {service.responseTime} Response
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-[10px] md:text-xs font-bold uppercase">
                    {service.serviceArea}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-black mb-3 md:mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
                  {service.desc}
                </p>

                <div className="glass-card p-5 md:p-6 rounded-2xl mb-6">
                  <h4 className="font-bold mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle size={20} className="text-accent" />
                    What's Included:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={14} strokeWidth={3} />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Estimated Cost:</span>
                    <span className="text-xl font-display font-black text-accent">{service.price}</span>
                  </div>
                </div>

                <div className="bg-accent/5 p-4 rounded-xl mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    💡 <strong>Pro Tip:</strong> {service.additionalInfo}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="tel:+919512291229" className="btn-primary flex items-center gap-2">
                    <Phone size={18} />
                    Call Now: +91 9512291229
                  </a>
                  <Link href="/book-service" className="btn-secondary flex items-center gap-2">
                    Book Service
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-accent/5 -mx-6 lg:-mx-12 px-6 lg:px-12 rounded-[2rem] md:rounded-[3rem]">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-black mb-4">Why Choose <span className="text-gradient">RSA Towing</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Trusted for safe, fast, and reliable roadside assistance, backed by certified crews and proven service standards.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Shield size={32} className="md:w-10 md:h-10" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3">Fully Licensed & Insured</h3>
            <p className="text-sm text-gray-500 leading-relaxed">All recovery professionals are formally certified and protected by comprehensive liability and cargo insurance.</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Rapid Response Network</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Advanced GPS-based dispatch assigns the nearest crew, delivering assistance in under 15 minutes on average.</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Car size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-Time Location Visibility</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Follow your recovery vehicle live with instant SMS alerts and accurate arrival updates.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-display font-black mb-6">Require Immediate Assistance?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Our round-the-clock dispatch team is fully equipped to respond promptly. Contact us by phone or submit an online request for instant roadside support.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919512291229" className="btn-primary flex items-center gap-3 text-lg">
            <Phone size={22} className="animate-pulse" />
            Call Now: +91 9512291229
          </a>
          <a href="https://wa.me/919512291229" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-3 text-lg">
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
