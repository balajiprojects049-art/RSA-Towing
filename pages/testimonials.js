import { PageHero } from '../components/PageHero'
import { Testimonials } from '../components/Testimonials'
import { Star, Users, ThumbsUp } from 'lucide-react'

export default function TestimonialsPage() {
  return (
    <div>
      <PageHero
        title="What Our Customers Say"
        subtitle="Real stories from real customers. Read how we've helped thousands of drivers get back on the road safely."
        image="/images/testimonials-hero-gen.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="glass-card p-6 rounded-2xl text-center">
            <Star className="text-accent mx-auto mb-3 fill-accent" size={40} />
            <div className="text-2xl font-display font-black mb-2">4.9/5</div>
            <div className="text-sm text-gray-500">Average Rating</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <Users className="text-accent mx-auto mb-3" size={40} />
            <div className="text-2xl font-display font-black mb-2">50k+</div>
            <div className="text-sm text-gray-500">Happy Customers</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <ThumbsUp className="text-accent mx-auto mb-3" size={40} />
            <div className="text-2xl font-display font-black mb-2">98%</div>
            <div className="text-sm text-gray-500">Satisfaction Rate</div>
          </div>
        </div>

        <Testimonials />
      </div>
    </div>
  )
}
