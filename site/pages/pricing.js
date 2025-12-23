import { PageHero } from '../components/PageHero'
import { PricingTable } from '../components/PricingTable'
import { IndianRupee, Clock, Shield } from 'lucide-react'

export default function Pricing() {
  return (
    <div>
      <PageHero
        badge="Transparent Pricing"
        title={<>Fair & <span className="text-gradient">Honest Rates</span></>}
        description="No hidden charges. Clear, upfront pricing for all our towing and roadside assistance services across India."

      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="glass-card p-6 rounded-2xl text-center">
            <IndianRupee className="text-accent mx-auto mb-3" size={40} />
            <div className="text-2xl font-display font-black mb-2">No Hidden Fees</div>
            <div className="text-sm text-gray-500">What you see is what you pay</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <Clock className="text-accent mx-auto mb-3" size={40} />
            <div className="text-2xl font-display font-black mb-2">Instant Quote</div>
            <div className="text-sm text-gray-500">Get estimate in seconds</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <Shield className="text-accent mx-auto mb-3" size={40} />
            <div className="text-2xl font-display font-black mb-2">Price Match</div>
            <div className="text-sm text-gray-500">Best rates guaranteed</div>
          </div>
        </div>

        <PricingTable />
      </div>
    </div>
  )
}
