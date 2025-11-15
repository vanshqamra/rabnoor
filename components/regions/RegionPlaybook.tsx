import { RegionLanding } from '@/data/regions';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { cardSurface, sectionHeading, sectionSubheading, smallLabel } from '@/components/layout/styles';

interface RegionPlaybookProps {
  region: RegionLanding;
}

export const RegionPlaybook = ({ region }: RegionPlaybookProps) => {
  return (
    <Container className="space-y-12 py-16 sm:py-20 lg:py-24">
      <section className="grid gap-6 lg:grid-cols-2">
        <div className={cardSurface}>
          <p className={smallLabel}>Demand</p>
          <h2 className={sectionHeading}>Demand Snapshot</h2>
          <p className={`${sectionSubheading} mt-3`}>{region.demand}</p>
        </div>
        <div className={cardSurface}>
          <p className={smallLabel}>Logistics</p>
          <h2 className={sectionHeading}>Shipping Routes & Corridors</h2>
          <p className={`${sectionSubheading} mt-3`}>{region.shippingRoutes}</p>
          <p className={`${sectionSubheading} mt-3`}>{region.corridorSupport}</p>
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <div className={cardSurface}>
          <h3 className={sectionHeading}>Preferred Marbles</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {region.popularMarbles.map((stone) => (
              <li key={stone} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
                {stone}
              </li>
            ))}
          </ul>
        </div>
        <div className={cardSurface}>
          <h3 className={sectionHeading}>Why Rab Noor Pvt Ltd</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {region.advantages.map((advantage) => (
              <li key={advantage} className="flex items-start gap-2">
                <svg className="mt-1 h-4 w-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                <span>{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="rounded-3xl border border-slate-900 bg-slate-900 p-8 text-center text-white">
        <h3 className="text-3xl font-semibold">{region.cta}</h3>
        <p className="mt-3 text-base text-slate-200">
          Share current demand, port preferences, and timeline so we can reserve quarry lots and freight space.
        </p>
        <Button href="/contact" variant="secondary" className="mt-6 border-white text-white hover:text-slate-900">
          Speak with a Specialist
        </Button>
      </section>
    </Container>
  );
};
