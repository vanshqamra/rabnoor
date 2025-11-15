import Link from 'next/link';
import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { cardSurface, sectionHeading as sectionTitle, sectionSubheading as bodyText, smallLabel } from '@/components/layout/styles';
import { products } from '@/lib/marbles';

export const metadata: Metadata = {
  title: 'Premium Indian & European Marble — Rab Noor Pvt Ltd',
  description:
    'Marbles Near Me delivers curated marble from India and Europe with end-to-end logistics support.',
  openGraph: {
    title: 'Marbles Near Me | Rab Noor Pvt Ltd',
    description: 'Source Makrana White, Thassos, Statuario, and more with integrated logistics and QC.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
        alt: 'Luxury interior with marble surfaces'
      }
    ]
  }
};

const audiences = [
  {
    title: 'Architects & Interior Designers',
    description:
      'Precise slab curation, real-time approvals, and book-matching support for concept decks and mockups.'
  },
  {
    title: 'Builders & Developers',
    description:
      'Coordinated supply for towers, malls, and hospitality projects with milestone-linked dispatch plans.'
  },
  {
    title: 'Stone Distributors & Retailers',
    description:
      'Container consolidation, private labeling, and financing options for consistent inventory turns.'
  },
  {
    title: 'Luxury Homeowners & Villa Projects',
    description:
      'Boutique selection, layout drawings, and installation-ready bundles for bespoke residences.'
  }
];

const valueProps = [
  {
    title: 'India + Europe Dual Presence',
    description: 'Quarry relationships in Rajasthan, Italy, Greece, and Spain, plus EU hub warehousing.'
  },
  {
    title: 'End-to-End Quality Control',
    description: 'Block selection, grading, thickness checks, moisture and surface inspection at each stage.'
  },
  {
    title: 'Packaging & Compliance',
    description: 'ISPM 15 certified wooden crates, export documentation, and EU customs-ready paperwork.'
  },
  {
    title: 'Reliable Logistics & Timelines',
    description: 'Fixed sailing schedules ex Mundra/Nhava Sheva to Piraeus, Rotterdam, Antwerp, and more.'
  }
];

const processSteps = [
  {
    title: 'Quarry & Block Selection',
    description: 'Samples, live video approvals, and structural grading with quarry partners.'
  },
  {
    title: 'Cutting & Polishing',
    description: 'Dedicated slots for gangsaw, resin, and finishing per project specification.'
  },
  {
    title: 'Export Packing & Shipping',
    description: 'Crating, fumigation, insurance, and sailing coordination with weekly departures.'
  },
  {
    title: 'Customs, Delivery & On-Site Coordination',
    description: 'EU/India customs clearance, inland trucking, and site sequencing with installers.'
  }
];

const corridors = [
  'India → Greece',
  'India → Germany',
  'India → Netherlands',
  'India → Belgium',
  'Italy / Spain / Greece → India'
];

const testimonials = [
  {
    name: 'Elena Markou',
    title: 'Design Director, Boutique Hospitality',
    region: 'Athens, Greece',
    quote:
      'Rab Noor aligned our Volakas and Thassos lots with the fit-out timeline, saving weeks onsite.'
  },
  {
    name: 'Rohit Kapoor',
    title: 'Project Head, Mixed-Use Developer',
    region: 'Gurugram, India',
    quote:
      'Their reporting on slab yield and moisture control kept our flagship tower on budget and spec.'
  },
  {
    name: 'Lucia Weber',
    title: 'Import Partner, Luxury Stone Retail',
    region: 'Munich, Germany',
    quote:
      'Containers arrive pre-labeled by client lot, making downstream distribution effortless.'
  }
];

const featuredSlugs = [
  'makrana-white',
  'thassos',
  'statuario',
  'volakas',
  'carrara',
  'crema-marfil',
  'nero-marquina',
  'pietra-grey'
];

const featuredMarbles = featuredSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is (typeof products)[number] => Boolean(product));

const cardStyles = cardSurface;

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className={smallLabel}>Rab Noor Pvt Ltd · Premium Marble Supply</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Premium Indian & European Marble — Delivered with Total Coordination
              </h1>
              <p className={bodyText}>
                We orchestrate quarry selections, fabrication slots, and customs-ready logistics so villas, hospitality builds,
                civic spaces, and residences receive perfectly matched marble bundles at installation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/quote-builder">Start Quote Builder</Button>
                <Button href="/products" variant="secondary">
                  Browse Products
                </Button>
              </div>
              <p className="text-sm text-slate-500">
                Based in India & Greece · Serving architects, developers, distributors, and luxury homeowners
              </p>
            </div>
            <div className="space-y-6">
              <div className="h-48 rounded-2xl bg-slate-100 sm:h-56 lg:h-64" aria-hidden />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="h-24 rounded-2xl bg-slate-100" aria-hidden />
                <div className="h-24 rounded-2xl bg-slate-100" aria-hidden />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-100 py-16 sm:py-20 lg:py-24">
        <Container>
            <div className="space-y-4">
            <p className={smallLabel}>Partnerships</p>
            <h2 className={sectionTitle}>Who We Serve</h2>
            <p className={bodyText}>
              Each partner group receives a dedicated desk translating drawings into slab bundles, inspection checkpoints, and
              synchronized delivery plans.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <div key={audience.title} className={`${cardStyles} space-y-3`}>
                <p className="text-xs uppercase tracking-wide text-slate-500">Dedicated Desk</p>
                <h3 className="text-xl font-semibold">{audience.title}</h3>
                <p className="text-base text-slate-700 leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className={smallLabel}>Catalogue Preview</p>
              <h2 className={sectionTitle}>Featured Marbles</h2>
              <p className={bodyText}>
                Signature stones curated for fast-moving projects. Tap through to explore origin details and descriptors.
              </p>
            </div>
            <Button href="/products" variant="secondary" className="self-start">
              View All
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredMarbles.map((marble) => (
              <article key={marble.slug} className={`${cardStyles} flex flex-col`}>
                <div className="mb-4 h-32 rounded-xl bg-slate-100" aria-hidden />
                <span className="inline-flex w-fit rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-500">
                  {marble.category}
                </span>
                <h3 className="text-2xl font-semibold">{marble.name}</h3>
                <p className="text-sm text-slate-500">{marble.origin}</p>
                <p className="mt-2 text-base text-slate-700">{marble.baseColor} · {marble.veinStyle}</p>
                <Link
                  href={`/products/${marble.slug}`}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900"
                >
                  View details →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-100 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="space-y-4">
            <p className={smallLabel}>Why Rab Noor</p>
            <h2 className={sectionTitle}>Reasons partners rely on us</h2>
            <p className={bodyText}>
              A single partner orchestrating sourcing, processing, and logistics so your sites receive compliant, ready-to-use
              marble packages.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {valueProps.map((prop) => (
              <div key={prop.title} className={`${cardStyles} space-y-3`}>
                <p className="text-xs uppercase tracking-wide text-slate-500">Advantage</p>
                <h3 className="text-2xl font-semibold">{prop.title}</h3>
                <p className="text-base text-slate-700">{prop.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="space-y-4">
            <p className={smallLabel}>Process</p>
            <h2 className={sectionTitle}>From quarry to project</h2>
            <p className={bodyText}>
              Transparent touchpoints keep every stakeholder aligned from the first sample to final installation.
            </p>
          </div>
          <div className="mt-12">
            <div className="relative lg:hidden">
              <span className="absolute left-5 top-0 h-full border-l border-slate-200" aria-hidden />
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-900">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className={`${cardStyles} w-full space-y-2`}>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-base text-slate-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden gap-6 lg:grid lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={`${step.title}-desktop`} className={`${cardStyles} space-y-3`}>
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                    <span className="h-1 w-8 bg-slate-300" aria-hidden /> Step {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-base text-slate-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-100 py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className={smallLabel}>Global Presence</p>
            <h2 className={sectionTitle}>India sourcing · Europe distribution</h2>
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-slate-700">
              <p>
                Headquartered in Kishangarh with satellite teams in Udaipur and Andhra, we manage block procurement, finishing,
                and export readiness for India-origin stones.
              </p>
              <p>
                Our Athens and Thessaloniki hubs receive containers from India, Italy, Spain, and Greece, enabling bonded
                storage and next-day dispatch into EU markets.
              </p>
              <p>
                Dedicated logistics desks coordinate inland trucking, vessel booking, and customs documentation for both
                outbound and inbound flows.
              </p>
            </div>
          </div>
          <div className={`${cardStyles} space-y-6`}>
            <h3 className="text-xl font-semibold">Key corridors</h3>
            <ul className="space-y-4 text-base text-slate-700">
              {corridors.map((corridor) => (
                <li key={corridor} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900" aria-hidden />
                  {corridor}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-100 bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="space-y-4">
            <p className={smallLabel}>Partners speak</p>
            <h2 className={sectionTitle}>Testimonials</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className={`${cardStyles} space-y-5`}>
                <span className="text-5xl text-slate-200" aria-hidden>
                  “
                </span>
                <p className="text-lg leading-relaxed text-slate-800">{testimonial.quote}</p>
                <div className="space-y-1 text-sm text-slate-600">
                  <p className="text-base font-semibold text-slate-900">{testimonial.name}</p>
                  <p>{testimonial.title}</p>
                  <p className="text-slate-500">{testimonial.region}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-900 text-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Plan together</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to plan your marble package?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-200 max-w-2xl">
                Share your drawings and quantities — we’ll propose stones, bundles, and shipping plans aligned with your budget
                and timeline.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Button href="/quote-builder" className="w-full sm:w-auto">
                Start Quote Builder
              </Button>
              <Button href="/contact" variant="secondary" className="w-full sm:w-auto border-white text-white hover:text-slate-900">
                Contact Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
