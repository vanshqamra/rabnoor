import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
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

export default function HomePage() {
  return (
    <>
      <section className="bg-[radial-gradient(circle_at_top,_#fdfcfb,_#e2e8f0)] py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Rab Noor Pvt Ltd</p>
            <h1 className="mt-5 text-4xl font-semibold text-slate-900 sm:text-5xl">
              Premium Indian & European Marble — Near You, Delivered Worldwide
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              marblesnearme.com synchronizes quarry approvals, fabrication slots, and international shipping so your project
              has the right stone on site, on schedule.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/quote-builder" className="text-base">
                Start Quote Builder
              </Button>
              <Button href="/products" variant="secondary" className="text-base">
                Browse Products
              </Button>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Based in India & Greece · Serving architects, developers, and distributors.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/60 bg-white/90 p-8 shadow-xl shadow-slate-200/70 backdrop-blur">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span>Featured Dispatch</span>
              <span>Week 12</span>
            </div>
            <div className="mt-6 space-y-4 text-slate-700">
              <div>
                <p className="text-sm text-slate-500">Project</p>
                <p className="text-xl font-semibold text-slate-900">Athens Hotel Lobby</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-500">Materials</p>
                  <p className="text-base font-medium text-slate-900">Volakas · Thassos</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Scope</p>
                  <p className="text-base font-medium text-slate-900">1,200 m² slabs + cladding</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-500">Logistics</p>
                  <p className="text-base font-medium text-slate-900">Thessaloniki → Piraeus → Athens</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  <p className="text-base font-medium text-emerald-600">QC Passed · Loading 18 Mar</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-slate-900">Who We Serve</h2>
            <p className="mt-4 text-lg text-slate-600">
              Dedicated account teams collaborate with each stakeholder group to translate drawings into precise marble
              packages and delivery schedules.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition hover:-translate-y-1 hover:border-emerald-500"
              >
                <h3 className="text-lg font-semibold text-slate-900">{audience.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-slate-900">Featured Marbles</h2>
              <p className="mt-4 text-lg text-slate-600">
                Signature stones curated for fast-moving projects. Hover to view origin and category details, then deep dive
                via the product catalog.
              </p>
            </div>
            <Button href="/products" variant="secondary">
              View all products
            </Button>
          </div>
          <div className="mt-10 overflow-x-auto">
            <div className="grid min-w-[640px] grid-cols-1 gap-6 sm:grid-cols-2 lg:min-w-full lg:grid-cols-3 xl:grid-cols-4">
              {featuredMarbles.map((marble) => (
                <div key={marble.slug} className="flex h-full flex-col rounded-2xl border border-white bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="font-medium capitalize">{marble.category} marble</span>
                    <span>{marble.origin}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{marble.name}</h3>
                  <p className="mt-3 flex-1 text-sm text-slate-600">{marble.description}</p>
                  <a
                    href={`/products/${marble.slug}`}
                    className="mt-5 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                    View details →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-slate-900">Why Rab Noor Pvt Ltd</h2>
            <p className="mt-4 text-lg text-slate-600">
              A single partner orchestrating sourcing, processing, and logistics so your sites receive compliant, ready-to-use
              marble packages.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {valueProps.map((prop) => (
              <div key={prop.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{prop.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-slate-900">From Quarry to Project</h2>
            <p className="mt-4 text-lg text-slate-600">
              Transparent touchpoints keep every stakeholder aligned from the first sample to final installation.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Global Presence</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">India Sourcing · Europe Distribution</h2>
            <div className="mt-6 space-y-4 text-slate-600">
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
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-semibold text-slate-900">Key Corridors</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {corridors.map((corridor) => (
                <li key={corridor} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  <span>{corridor}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-100 bg-slate-900 py-16 text-white sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Partners Speak</p>
              <h2 className="mt-4 text-3xl font-semibold">Testimonials</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-lg font-medium text-emerald-200">“{testimonial.quote}”</p>
                <div className="mt-6 text-sm text-slate-200">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p>{testimonial.title}</p>
                  <p className="text-slate-400">{testimonial.region}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-100 bg-slate-950 py-16 sm:py-20">
        <Container className="rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-white">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Final CTA</p>
              <h2 className="mt-4 text-3xl font-semibold">Ready to plan your marble package?</h2>
              <p className="mt-4 text-lg text-slate-200">
                Share your drawings and quantities — we’ll propose stones, bundles, and shipping plans aligned with your
                budget and timeline.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Button href="/quote-builder" className="text-base">
                Start Quote Builder
              </Button>
              <Button href="/contact" variant="secondary" className="text-base">
                Contact Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
