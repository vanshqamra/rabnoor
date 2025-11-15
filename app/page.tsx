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

const sectionTitle =
  'text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a] after:block after:w-12 after:h-1 after:bg-slate-900 after:mt-4';
const bodyText = 'text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl';
const cardStyles =
  'rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all overflow-hidden';

export default function HomePage() {
  return (
    <main className="bg-white text-[#0a0a0a]">
      <section className="relative isolate overflow-hidden">
        <div
          className="relative w-full h-[70vh] md:h-[85vh] bg-cover bg-center before:absolute before:inset-0 before:bg-black/30 before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-32 after:bg-gradient-to-t after:from-black/70"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1900&q=80')"
          }}
        >
          <Container className="relative z-10 flex h-full items-center">
            <div className="max-w-xl md:max-w-2xl space-y-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                Rab Noor Pvt Ltd · marblesnearme.com
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Premium Indian & European Marble — Near You, Delivered Worldwide
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                We align quarry selections, fabrication slots, and customs-ready logistics so villas, hotels, civic spaces, and
                residences receive perfectly matched marble at installation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/quote-builder" className="bg-black px-8 py-3 text-lg text-white">
                  Start Quote Builder
                </Button>
                <Button
                  href="/products"
                  variant="secondary"
                  className="border-white bg-white/90 px-8 py-3 text-lg text-black hover:bg-white"
                >
                  Browse Products
                </Button>
              </div>
              <p className="text-sm text-white/70">
                Dual teams in India and Greece · Serving architects, developers, distributors, and luxury homeowners.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="border-b border-slate-100 py-20 md:py-32">
        <Container>
          <div className="space-y-6">
            <h2 className={sectionTitle}>Who We Serve</h2>
            <p className={bodyText}>
              Each partner group receives a dedicated desk translating drawings into slab bundles, inspection checkpoints, and
              synchronized delivery plans.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => (
              <div key={audience.title} className={`${cardStyles} flex flex-col gap-4 bg-white/80 transition-transform hover:-translate-y-1`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-sm font-semibold text-[#0a0a0a]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold">{audience.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 py-20 md:py-32">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-6">
              <h2 className={sectionTitle}>Featured Marbles</h2>
              <p className={bodyText}>
                Signature stones curated for fast-moving projects. Tap through to explore origin details and visual references.
              </p>
            </div>
            <Button href="/products" variant="secondary" className="self-start">
              View All
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredMarbles.map((marble) => (
              <article key={marble.slug} className={`${cardStyles} flex flex-col overflow-hidden bg-white`}>
                <figure className="relative h-64 w-full overflow-hidden">
                  <img
                    src={
                      marble.imageGallery[0]?.url ??
                      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80'
                    }
                    alt={`${marble.name} marble sample`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </figure>
                <div className="flex flex-1 flex-col gap-4 border-t border-slate-200 p-6 md:p-8">
                  <span className="inline-flex w-fit rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-[0.4em] text-slate-500">
                    {marble.category}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold">{marble.name}</h3>
                    <p className="text-sm text-slate-500">{marble.origin}</p>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {marble.baseColor} · {marble.veinStyle}
                  </p>
                  <Link
                    href={`/products/${marble.slug}`}
                    className="mt-auto inline-flex items-center text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-8 hover:decoration-slate-900"
                  >
                    View details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-100 py-20 md:py-32">
        <Container>
          <div className="space-y-6">
            <h2 className={sectionTitle}>Why Rab Noor Pvt Ltd</h2>
            <p className={bodyText}>
              A single partner orchestrating sourcing, processing, and logistics so your sites receive compliant, ready-to-use
              marble packages.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {valueProps.map((prop) => (
              <div key={prop.title} className={`${cardStyles} space-y-4 border border-slate-100 bg-white/95`}>
                <span className="text-xs uppercase tracking-[0.4em] text-slate-500">Advantage</span>
                <h3 className="text-2xl font-semibold">{prop.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 py-20 md:py-32">
        <Container>
          <div className="space-y-6">
            <h2 className={sectionTitle}>From Quarry to Project</h2>
            <p className={bodyText}>
              Transparent touchpoints keep every stakeholder aligned from the first sample to final installation.
            </p>
          </div>
          <ol className="relative mt-16 space-y-12 md:flex md:space-y-0 md:gap-8">
            {processSteps.map((step, index) => (
              <li key={step.title} className="relative flex-1">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-semibold md:h-14 md:w-14 md:text-base">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {index !== processSteps.length - 1 && (
                    <span className="hidden flex-1 border-t border-dashed border-slate-300 md:block" aria-hidden />
                  )}
                </div>
                <span className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-slate-200 md:hidden" aria-hidden />
                <div className={`${cardStyles} mt-6 w-full bg-white/90`}>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-base text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-slate-100 py-20 md:py-32">
        <Container className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6 lg:border-l lg:border-slate-200 lg:pl-10">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Global Presence</p>
            <h2 className={sectionTitle}>India Sourcing · Europe Distribution</h2>
            <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed">
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
          <div className={`${cardStyles} bg-white`}> 
            <h3 className="text-xl font-semibold">Key Corridors</h3>
            <ul className="mt-8 divide-y divide-slate-200 text-base text-slate-700">
              {corridors.map((corridor) => (
                <li key={corridor} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0a0a0a]" aria-hidden />
                  <span>{corridor}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-100 bg-white py-20 md:py-32">
        <Container>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Partners Speak</p>
            <h2 className={sectionTitle}>Testimonials</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className={`${cardStyles} space-y-6 bg-white/95`}>
                <span className="text-5xl text-slate-200" aria-hidden>
                  “
                </span>
                <p className="text-lg text-slate-800 leading-relaxed">{testimonial.quote}</p>
                <div className="space-y-1 text-sm text-slate-600">
                  <p className="text-base font-semibold text-[#0a0a0a]">{testimonial.name}</p>
                  <p>{testimonial.title}</p>
                  <p className="text-slate-500">{testimonial.region}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <div className="rounded-[36px] border border-slate-200 bg-slate-50 p-10 md:p-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-center">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Final CTA</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Ready to plan your marble package?</h2>
                <p className={bodyText}>
                  Share your drawings and quantities — we’ll propose stones, bundles, and shipping plans aligned with your
                  budget and timeline.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <Button href="/quote-builder" className="bg-black px-8 text-white">
                  Start Quote Builder
                </Button>
                <Button href="/contact" variant="secondary" className="border border-black px-8">
                  Contact Team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
