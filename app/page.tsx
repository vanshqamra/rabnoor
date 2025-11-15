import Link from 'next/link';
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
    <main className="bg-white text-slate-900">
      <section className="relative isolate min-h-[80vh] overflow-hidden bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
          alt="Architectural marble interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" aria-hidden />
        <Container className="relative flex min-h-[80vh] flex-col justify-end py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">Rab Noor Pvt Ltd · marblesnearme.com</p>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Premium Indian & European Marble — Near You, Delivered Worldwide
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We align quarry selections, fabrication slots, and customs-ready logistics so villas, hotels, civic spaces, and
            residences receive perfectly matched marble at installation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/quote-builder" className="bg-white text-slate-900 transition hover:bg-slate-100">
              Start Quote Builder
            </Button>
            <Button
              href="/products"
              variant="secondary"
              className="border-white/40 text-white hover:border-white hover:bg-white/10"
            >
              Browse Products
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Dual teams in India and Greece · Serving architects, developers, distributors, and luxury homeowners.
          </p>
        </Container>
      </section>

      <section className="border-t border-slate-200 py-12 sm:py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-4">
            <div className="h-0.5 w-16 bg-slate-900" aria-hidden />
            <h2 className="text-3xl font-bold uppercase tracking-tight">Who We Serve</h2>
            <p className="max-w-2xl text-base text-slate-600">
              Each partner group receives a dedicated desk translating drawings into slab bundles, inspection checkpoints, and
              synchronized delivery plans.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white"
                  aria-hidden
                >
                  {index + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{audience.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-4">
            <div className="h-0.5 w-16 bg-slate-900" aria-hidden />
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold uppercase tracking-tight">Featured Marbles</h2>
                <p className="mt-4 text-base text-slate-600">
                  Signature stones curated for fast-moving projects. Tap through to explore origin details and visual references.
                </p>
              </div>
              <Button href="/products" variant="secondary" className="self-start text-sm uppercase tracking-[0.3em]">
                View All
              </Button>
            </div>
          </div>
          <div className="mt-10">
            <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 lg:grid lg:grid-cols-3 xl:grid-cols-4">
              {featuredMarbles.map((marble) => (
                <article
                  key={marble.slug}
                  className="min-w-[240px] flex-1 snap-start rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1"
                >
                  <figure className="relative h-48 w-full overflow-hidden">
                    <img
                      src={
                        marble.imageGallery[0]?.url ??
                        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80'
                      }
                      alt={`${marble.name} marble sample`}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="border-t border-slate-200 px-6 py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{marble.category}</p>
                    <h3 className="mt-3 text-xl font-semibold">{marble.name}</h3>
                    <p className="text-sm text-slate-500">{marble.origin}</p>
                    <p className="mt-3 text-sm text-slate-600">
                      {marble.baseColor} · {marble.veinStyle}
                    </p>
                    <Link
                      href={`/products/${marble.slug}`}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 underline decoration-sky-500/80 decoration-2 underline-offset-4"
                    >
                      View details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 py-12 sm:py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-4">
            <div className="h-0.5 w-16 bg-slate-900" aria-hidden />
            <h2 className="text-3xl font-bold uppercase tracking-tight">Why Rab Noor Pvt Ltd</h2>
            <p className="max-w-2xl text-base text-slate-600">
              A single partner orchestrating sourcing, processing, and logistics so your sites receive compliant, ready-to-use
              marble packages.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Advantage</span>
                <h3 className="mt-4 text-xl font-semibold">{prop.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-4">
            <div className="h-0.5 w-16 bg-slate-900" aria-hidden />
            <h2 className="text-3xl font-bold uppercase tracking-tight">From Quarry to Project</h2>
            <p className="max-w-2xl text-base text-slate-600">
              Transparent touchpoints keep every stakeholder aligned from the first sample to final installation.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 py-12 sm:py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4">
            <div className="h-0.5 w-16 bg-slate-900" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Global Presence</p>
            <h2 className="text-3xl font-bold uppercase tracking-tight">India Sourcing · Europe Distribution</h2>
            <div className="space-y-4 text-base text-slate-600">
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
            <h3 className="text-lg font-semibold">Key Corridors</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {corridors.map((corridor) => (
                <li key={corridor} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900" aria-hidden />
                  <span>{corridor}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-900 py-12 text-white sm:py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-4">
            <div className="h-0.5 w-16 bg-white" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Partners Speak</p>
            <h2 className="text-3xl font-bold uppercase tracking-tight">Testimonials</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur">
                <p className="text-lg font-medium text-white/90">“{testimonial.quote}”</p>
                <div className="mt-6 text-sm text-white/70">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p>{testimonial.title}</p>
                  <p className="text-white/50">{testimonial.region}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-12 sm:py-16 md:py-20">
        <Container className="rounded-[32px] border border-slate-200 bg-slate-50 p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Final CTA</p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight">Ready to plan your marble package?</h2>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                Share your drawings and quantities — we’ll propose stones, bundles, and shipping plans aligned with your budget
                and timeline.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Button href="/quote-builder" className="bg-slate-900 text-white hover:bg-black">
                Start Quote Builder
              </Button>
              <Button href="/contact" variant="secondary" className="text-slate-900">
                Contact Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
