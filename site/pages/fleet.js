import { PageHero } from '../components/PageHero'
import { FleetGallery } from '../components/FleetGallery'
import { Shield, Award, Users } from 'lucide-react'

export default function Fleet() {
  return (
    <div>
      <PageHero
        badge="Our Fleet"
        title={<><span className="text-gradient">Modern Equipment</span> & Professional Team</>}
        description="State-of-the-art towing vehicles and certified recovery specialists ready to serve you 24/7 across Pan India."

      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="glass-card p-6 rounded-2xl text-center">
            <Shield className="text-accent mx-auto mb-3" size={40} />
            <div className="text-2xl font-display font-black mb-2">100% Safe</div>
            <div className="text-sm text-gray-500">Damage-Free Guarantee</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <Award className="text-accent mx-auto mb-3" size={40} />
            <div className="text-2xl font-display font-black mb-2">Certified</div>
            <div className="text-sm text-gray-500">Licensed Operators</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <Users className="text-accent mx-auto mb-3" size={40} />
            <div className="text-2xl font-display font-black mb-2">50+ Team</div>
            <div className="text-sm text-gray-500">Professional Crew</div>
          </div>
        </div>

        <FleetGallery />
      </div>
    </div>
  )
}
