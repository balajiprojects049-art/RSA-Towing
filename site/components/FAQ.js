import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            q: 'How quickly can you reach me?',
            a: 'Our average response time is 12-15 minutes in major cities. We use GPS-enabled dispatch to send the nearest available tow truck to your location immediately.'
        },
        {
            q: 'What areas do you cover?',
            a: 'We operate across Pan India with major presence in Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Surat, and Kochi. Our headquarters is in Hyderabad.'
        },
        {
            q: 'How much does towing cost?',
            a: 'Bike towing starts at ₹1,999, car towing at ₹2,999, and premium recovery at ₹5,999. Prices vary based on distance, vehicle type, and service required. Use our instant quote calculator for accurate estimates.'
        },
        {
            q: 'Can you tow luxury or modified vehicles?',
            a: 'Yes! We have specialized flatbed trucks and trained operators for luxury cars, lowered vehicles, superbikes, and exotic automobiles. We guarantee 100% damage-free towing with our premium recovery service.'
        },
        {
            q: 'What payment methods do you accept?',
            a: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, and Net Banking. Payment can be made on-site or online through our secure payment gateway.'
        },
        {
            q: 'Do you provide 24/7 service?',
            a: 'Yes, we are available 24 hours a day, 7 days a week, 365 days a year. Whether it\'s 2 AM or a public holiday, our emergency response team is always ready to assist you.'
        },
        {
            q: 'Can I track the tow truck reaching me?',
            a: 'Absolutely! Once you book our service, you\'ll receive live GPS tracking updates via SMS. You can see exactly where our truck is and get real-time ETAs, just like ride-hailing apps.'
        },
        {
            q: 'What if my car breaks down on a highway?',
            a: 'We specialize in highway breakdowns! Our heavy-duty recovery vehicles are equipped for quick highway response. We also coordinate with highway patrol and ensure proper safety protocols during the rescue.'
        },
        {
            q: 'Do you provide battery jump-start service?',
            a: 'Yes, we offer on-site battery testing, jump-starting, and replacement services starting at ₹1,499. Our technicians carry portable jump starters and can diagnose battery issues on the spot.'
        },
        {
            q: 'Is there any membership or subscription required?',
            a: 'No membership needed! You can call us anytime for on-demand service. However, we do offer annual roadside assistance plans for frequent travelers with discounted rates and priority response.'
        }
    ]

    return (
        <section className="py-20">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                    <HelpCircle size={18} />
                    Got Questions?
                </div>
                <h2 className="text-4xl font-display font-black mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Find answers to common questions about our towing and roadside assistance services
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="glass-card rounded-2xl overflow-hidden border border-white/10"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                            <span className="font-bold text-lg pr-4">{faq.q}</span>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0"
                            >
                                <ChevronDown size={24} className="text-accent" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 md:px-8 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-500 mb-4">Still have questions?</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="tel:+919512291229" className="btn-primary">
                        Call Us Now
                    </a>
                    <a href="https://wa.me/919512291229" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}
