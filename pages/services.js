import { Car, Bike, Truck, Battery, Fuel, RotateCcw, Wrench, CheckCircle, Clock, Shield, Phone, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: 'Car Towing Service',
      icon: Car,
      image: '/images/car-towing.jpg',
      desc: 'Professional sedan and SUV towing using flatbed or wheel-lift systems, suitable for all makes and models.',
      features: [
        'Support for all major brands (Maruti, Hyundai, Honda, Toyota, and more)',
        'Real-time GPS tracking with SMS updates',
        'Assistance with insurance claim documentation',
        '100% damage-free handling by certified operators',
        'Available 24/7, 365 days across Pan-India',
        'Options for wheelchair-accessible vehicles and specialized tow trucks'
      ],
      price: 'Starting at ₹2,999',
      responseTime: '12-15 min',
      serviceArea: 'All major cities',
      additionalInfo: 'Ideal for breakdowns, accidents, or planned vehicle transport. Our certified drivers handle your vehicle with care using modern equipment.'
    },
    {
      title: 'Bike Towing Service',
      icon: Bike,
      image: '/images/bike-towing.jpg',
      desc: 'Specialized motorcycle towing using custom-built rigs designed for the safe and secure transport of all two-wheelers.',
      features: [
        'Coverage for all bike types, from sport bikes to cruisers',
        'Soft tie-down straps to prevent scratches or damage',
        'Vertical and horizontal loading options',
        'Premium handling for high-end motorcycles (Royal Enfield, KTM, Harley-Davidson, and more)',
        'Expert handlers trained in superbike transport',
        'Secure loading ramps and wheel chocks for maximum stability'
      ],
      price: 'Starting at ₹1,999',
      responseTime: '10-12 min',
      serviceArea: 'Pan India coverage',
      additionalInfo: 'Perfect for long-distance bike transport, accident recovery, or when your bike won\'t start. We understand the value of your ride.'
    },
    {
      title: 'Flatbed Recovery',
      icon: Truck,
      image: '/images/suv-towing-sunset.jpg',
      desc: 'Heavy-duty flatbed towing designed for luxury vehicles, low-clearance cars, and secure long-distance transport.',
      features: [
        'Zero wheel contact for complete off-ground vehicle transport',
        'Specialized handling for luxury and exotic brands (Mercedes-Benz, BMW, Audi, and more)',
        'Long-distance and interstate transport options',
        'Multi-vehicle hauling capability',
        'Optional climate-controlled transport for high-value vehicles',
        'Hydraulic lift flatbeds for smooth, damage-free loading'
      ],
      price: 'Starting at ₹5,999',
      responseTime: '15-20 min',
      serviceArea: 'Major metros & highways',
      additionalInfo: 'Our flatbed service is perfect for luxury, vintage, or lowered vehicles that require special care during transport.'
    },
    {
      title: 'Battery Jump-Start',
      icon: Battery,
      image: '/images/battery-jumpstart.jpg',
      desc: 'On-site battery testing, jump-starting, and replacement services to get your vehicle running quickly and safely.',
      features: [
        'Rapid city response, typically within 15 minutes',
        'Professional battery diagnostic testing',
        'Supply of quality batteries (Amaron, Exide, and other leading brands)',
        'Free installation with battery purchase',
        'Warranty coverage on all new batteries',
        'Alternator and charging system inspection'
      ],
      price: 'Starting at ₹1,499',
      responseTime: '8-12 min',
      serviceArea: 'All cities',
      additionalInfo: 'Dead battery? We carry portable jump starters and can test, charge, or replace your battery on the spot.'
    },
    {
      title: 'Emergency Fuel Delivery',
      icon: Fuel,
      image: '/images/hero-truck-highway.jpg',
      desc: 'Fast fuel delivery service when you run out of petrol or diesel on the road.',
      features: [
        'Petrol, diesel, or premium fuel available',
        '2-5 gallon emergency delivery',
        'Pay by card, UPI, or cash',
        'No membership or subscription required',
        'Quick ETA tracking via SMS',
        'Available on highways and remote areas'
      ],
      price: 'Starting at ₹999',
      responseTime: '10-15 min',
      serviceArea: 'Highways & cities',
      additionalInfo: 'Ran out of fuel? We\'ll bring enough to get you to the nearest petrol pump. Service available across major highways.'
    },
    {
      title: 'Accident Recovery',
      icon: RotateCcw,
      image: '/images/accident-recovery.jpg',
      desc: 'Safe and certified accident scene recovery with police coordination and proper documentation.',
      features: [
        'Police-approved operators with proper licenses',
        'Heavy-duty winch & recovery gear',
        'Accident site debris cleanup service',
        'Photo/video documentation for insurance',
        'Direct insurance company coordination',
        'Safe vehicle storage facility options'
      ],
      price: 'Custom quote',
      responseTime: '15-20 min',
      serviceArea: 'Pan India',
      additionalInfo: 'Professional accident recovery with safety protocols. We coordinate with police and insurance companies for smooth claims.'
    },
    {
      title: 'Breakdown Assistance',
      icon: Wrench,
      image: '/images/night-emergency.jpg',
      desc: 'Basic roadside repairs like tire changes, lockout service, and minor mechanical fixes.',
      features: [
        'Puncture repair & spare tire installation',
        'Car lockout service with safe unlock methods',
        'Minor mechanical troubleshooting',
        'Engine oil and coolant top-offs',
        'Free 10-point safety inspection',
        'Basic electrical system diagnosis'
      ],
      price: 'Starting at ₹1,699',
      responseTime: '10-15 min',
      serviceArea: 'All major cities',
      additionalInfo: 'Sometimes you don\'t need a tow - just a quick fix. Our mobile mechanics can help you get back on the road fast.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold uppercase tracking-wider mb-6"
          >
            Premium Towing Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            Professional roadside assistance and vehicle recovery services available 24/7 across all major Indian cities. Fast response, certified crews, and damage-free guarantee.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            <div className="glass-card p-6 rounded-2xl">
              <Clock className="text-accent mx-auto mb-2" size={32} />
              <div className="text-2xl font-display font-black">12 min</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Avg Response</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <Shield className="text-accent mx-auto mb-2" size={32} />
              <div className="text-2xl font-display font-black">100%</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Damage-Free</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <Car className="text-accent mx-auto mb-2" size={32} />
              <div className="text-2xl font-display font-black">50k+</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Vehicles</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <Phone className="text-accent mx-auto mb-2" size={32} />
              <div className="text-2xl font-display font-black">24/7</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="space-y-16">
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase">
                    {service.responseTime} Response
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-bold uppercase">
                    {service.serviceArea}
                  </div>
                </div>

                <h3 className="text-3xl font-display font-black mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
                  {service.desc}
                </p>

                <div className="glass-card p-6 rounded-2xl mb-6">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle size={20} className="text-accent" />
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={14} strokeWidth={3} />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                  <a href="https://wa.me/919512291229" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                    Book Service
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/5 -mx-6 lg:-mx-12 px-6 lg:px-12 rounded-[3rem]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-black mb-4">Why Choose <span className="text-gradient">RSA Towing</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Industry-leading service standards with a focus on safety, speed, and customer satisfaction.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Certified & Insured</h3>
            <p className="text-sm text-gray-500 leading-relaxed">All operators are DOT-certified with comprehensive liability and cargo insurance coverage.</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast Response</h3>
            <p className="text-sm text-gray-500 leading-relaxed">GPS-optimized dispatch ensures the nearest crew reaches you in under 15 minutes on average.</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Car size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Live GPS Tracking</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Track your rescue vehicle in real-time with SMS updates and precise ETA notifications.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-display font-black mb-6">Need Emergency Assistance?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Our 24/7 dispatch center is ready to help. Call now or request service online.
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
