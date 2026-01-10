import { useState } from 'react'
import { PageHero } from '../components/PageHero'
import { Phone, MapPin, Car, Briefcase, User, MessageSquare, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BookService() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        vehicleType: '',
        serviceType: '',
        location: '',
        message: ''
    })

    // Same number as used elsewhere in the app
    const whatsappNumber = "919512291229"

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const text = `*New Booking Request*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Vehicle:* ${formData.vehicleType}%0A` +
            `*Service:* ${formData.serviceType}%0A` +
            `*Location:* ${formData.location}%0A` +
            `*Details:* ${formData.message}`

        const url = `https://wa.me/${whatsappNumber}?text=${text}`
        window.open(url, '_blank')
    }

    return (
        <div className="min-h-screen">
            <PageHero
                title="Book a Service"
                subtitle="Fill out the form below and we will get back to you instantly via WhatsApp."
                image="/images/services-hero-gen.png"
            />

            <section className="py-20 relative px-4">
                <div className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-3xl shadow-xl border border-white/20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-display font-black mb-4">Request Assistance</h2>
                        <p className="text-gray-500">Fast, reliable response for all your towing needs.</p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                    <User size={16} className="text-accent" /> Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                    <Phone size={16} className="text-accent" /> Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                    <Car size={16} className="text-accent" /> Vehicle Model
                                </label>
                                <input
                                    type="text"
                                    name="vehicleType"
                                    required
                                    className="w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all"
                                    placeholder="e.g. Maruti Swift, Honda City"
                                    value={formData.vehicleType}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                    <Briefcase size={16} className="text-accent" /> Service Type
                                </label>
                                <select
                                    name="serviceType"
                                    required
                                    className="w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select a Service</option>
                                    <option value="Car Towing">Car Towing</option>
                                    <option value="Bike Towing">Bike Towing</option>
                                    <option value="Battery Jumpstart">Battery Jumpstart</option>
                                    <option value="Flat Tire">Flat Tire / Puncture</option>
                                    <option value="Fuel Delivery">Fuel Delivery</option>
                                    <option value="Key Recovery">Key Recovery</option>
                                    <option value="Heavy Vehicle Towing">Heavy Vehicle Towing</option>
                                    <option value="Other">Other Issues</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <MapPin size={16} className="text-accent" /> Current Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                required
                                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all"
                                placeholder="e.g. Near SG Highway, Ahmedabad"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <MessageSquare size={16} className="text-accent" /> Additional Details (Optional)
                            </label>
                            <textarea
                                name="message"
                                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all h-32 resize-none"
                                placeholder="Describe the issue... (e.g. Engine not starting, wheel jammed)"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-black text-lg rounded-xl shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-3 active:scale-95"
                        >
                            <Send size={24} />
                            Book on WhatsApp
                        </button>

                        <p className="text-center text-xs text-gray-400 mt-4">
                            By clicking "Book on WhatsApp", you will be redirected to WhatsApp to send your request directly to our dispatch team.
                        </p>
                    </form>
                </div>
            </section>
        </div>
    )
}
