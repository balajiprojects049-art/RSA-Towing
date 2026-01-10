import { PageHero } from '../components/PageHero'
import { HowItWorks } from '../components/HowItWorks'
import { Zap, Shield, Award } from 'lucide-react'

export default function HowPage() {
  return (
    <div>
      <PageHero
        title="How RSA Towing Works"
        subtitle="Getting roadside assistance is simple and fast. Just three easy steps to get back on the road safely."
        image="/images/how-hero-gen.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="glass-card p-6 rounded-2xl text-center">
            <Zap className="text-accent mx-auto mb-3" size={40} />
            <div className="text-2xl font-display font-black mb-2">12 Min</div>
            <div className="text-sm text-gray-500">Average Response</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <Shield className="text-accent mx-auto mb-3" size={40} />
            <div className="text-2xl font-display font-black mb-2">100%</div>
            <div className="text-sm text-gray-500">Safe & Secure</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <Award className="text-accent mx-auto mb-3" size={40} />
            <div className="text-2xl font-display font-black mb-2">Certified</div>
            <div className="text-sm text-gray-500">Licensed Operators</div>
          </div>
        </div>

        <HowItWorks />
      </div>
    </div>
  )
}
