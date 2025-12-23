import { PageHero } from '../components/PageHero'
import { MapCoverage } from '../components/MapCoverage'

export default function Coverage() {
  return (
    <div>
      <PageHero
        badge="Service Coverage"
        title={<><span className="text-gradient">Pan India</span> Presence</>}
        description="We operate across 150+ cities in India with dedicated teams in every major metro. 24/7 roadside assistance wherever you are."

      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <MapCoverage />
      </div>
    </div>
  )
}
