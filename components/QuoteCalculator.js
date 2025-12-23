import { useState } from 'react'
import { Calculator, Car, Bike, Truck, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function QuoteCalculator() {
    const [formData, setFormData] = useState({
        vehicleType: 'car',
        distance: '10',
        service: 'towing'
    })
    const [estimate, setEstimate] = useState(null)

    const calculateQuote = () => {
        const baseRates = {
            car: { towing: 30, jumpstart: 150, fuel: 100, flatbed: 50 },
            bike: { towing: 20, jumpstart: 150, fuel: 100 },
            suv: { towing: 40, jumpstart: 150, fuel: 100, flatbed: 60 }
        }

        const perKmRate = baseRates[formData.vehicleType][formData.service] || 30
        const distance = parseInt(formData.distance) || 10
        const baseCost = formData.service === 'jumpstart' || formData.service === 'fuel' ? perKmRate : perKmRate * distance

        setEstimate({
            total: baseCost,
            breakdown: `₹${perKmRate}${formData.service === 'towing' || formData.service === 'flatbed' ? '/km' : ' base'} × ${formData.service === 'towing' || formData.service === 'flatbed' ? distance + ' km' : '1'}`
        })
    }

    return (
        <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10 -mx-6 lg:-mx-12 px-6 lg:px-12 rounded-[3rem]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                        <Calculator size={18} />
                        Instant Quote
                    </div>
                    <h2 className="text-4xl font-display font-black mb-4">Get <span className="text-gradient">Instant Estimate</span></h2>
                    <p className="text-gray-600 dark:text-gray-400">Calculate your towing cost in seconds</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-3xl"
                >
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* Vehicle Type */}
                        <div>
                            <label className="block text-sm font-bold mb-3">Vehicle Type</label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { value: 'car', icon: Car, label: 'Car' },
                                    { value: 'bike', icon: Bike, label: 'Bike' },
                                    { value: 'suv', icon: Truck, label: 'SUV' }
                                ].map((type) => (
                                    <button
                                        key={type.value}
                                        onClick={() => setFormData({ ...formData, vehicleType: type.value })}
                                        className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${formData.vehicleType === type.value
                                                ? 'border-accent bg-accent/10 text-accent'
                                                : 'border-gray-200 dark:border-gray-700 hover:border-accent/50'
                                            }`}
                                    >
                                        <type.icon size={24} />
                                        <span className="text-xs font-bold">{type.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Service Type */}
                        <div>
                            <label className="block text-sm font-bold mb-3">Service Needed</label>
                            <select
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-accent focus:outline-none font-medium"
                            >
                                <option value="towing">Standard Towing</option>
                                <option value="flatbed">Flatbed Towing</option>
                                <option value="jumpstart">Battery Jump-Start</option>
                                <option value="fuel">Fuel Delivery</option>
                            </select>
                        </div>

                        {/* Distance */}
                        <div>
                            <label className="block text-sm font-bold mb-3">
                                Distance (km)
                                {(formData.service === 'jumpstart' || formData.service === 'fuel') &&
                                    <span className="text-xs text-gray-500 ml-2">(Fixed rate)</span>
                                }
                            </label>
                            <div className="relative">
                                <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="number"
                                    value={formData.distance}
                                    onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
                                    min="1"
                                    max="500"
                                    disabled={formData.service === 'jumpstart' || formData.service === 'fuel'}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-accent focus:outline-none font-bold disabled:opacity-50"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={calculateQuote}
                        className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 mb-8"
                    >
                        <Calculator size={22} />
                        Calculate Estimate
                        <ArrowRight size={22} />
                    </button>

                    {estimate && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-gradient-to-r from-accent/10 to-accent/5 p-8 rounded-2xl border-2 border-accent/20"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-lg font-bold">Estimated Cost:</span>
                                <span className="text-4xl font-display font-black text-accent">₹{estimate.total}</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{estimate.breakdown}</p>
                            <div className="text-xs text-gray-500 bg-white/50 dark:bg-black/20 p-4 rounded-xl">
                                💡 <strong>Note:</strong> This is an estimate. Final cost may vary based on exact location, traffic conditions, and
                                time of service. Call +91 9512291229 for accurate quote.
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
