import Link from 'next/link';
import type { Metadata } from 'next';
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

const stats = [
  {
    title: 'Headquartered in Kishangarh',
    description:
      'Headquartered in Kishangarh with satellite teams in Udaipur and Andhra, we manage block procurement, finishing, and export readiness for India-origin stones.'
  },
  {
    title: 'Athens and Thessaloniki hubs',
    description:
      'Our Athens and Thessaloniki hubs receive containers from India, Italy, Spain, and Greece, enabling bonded storage and next-day dispatch into EU markets.'
  },
  {
    title: 'Dedicated logistics desks',
    description:
      'Dedicated logistics desks coordinate inland trucking, vessel booking, and customs documentation for both outbound and inbound flows.'
  }
];

const heroHeading =
  'text-4xl sm:text-5xl lg:text-6xl font-semibold font-[var(--font-heading)] tracking-tight text-slate-900';
const sectionHeading = 'text-3xl sm:text-4xl font-semibold font-[var(--font-heading)] text-slate-900';
const bodyText = 'text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl';
const labelText = 'text-xs font-medium uppercase tracking-[0.3em] text-slate-500';
const primaryButtonClass =
  'inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-3 text-sm sm:text-base font-medium text-white shadow-lg shadow-slate-900/10 hover:from-slate-800 hover:to-slate-900 transition';
const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-full border border-slate-900/80 px-6 py-3 text-sm sm:text-base font-medium text-slate-900 hover:bg-slate-900 hover:text-white transition';

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-stone-50 via-white to-slate-50">
      {/* Hero */}
      <section className="border-b border-white/40 bg-gradient-to-b from-slate-50/60 via-white to-stone-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Rab Noor Pvt Ltd · marblesnearme.com</p>
              <h1 className={heroHeading}>Premium Indian & European Marble — Delivered with Total Coordination</h1>
              <p className={bodyText}>
                We orchestrate quarry selections, fabrication slots, and customs-ready logistics so villas, hospitality builds,
                civic spaces, and residences receive perfectly matched marble bundles at installation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote-builder" className={primaryButtonClass}>
                  Start Quote Builder
                </Link>
                <Link href="/products" className={secondaryButtonClass}>
                  Browse Products
                </Link>
              </div>
              <p className="text-sm text-slate-500">
                Based in India & Greece · Serving architects, developers, distributors, and luxury homeowners
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-40 sm:h-56 lg:h-64 w-full rounded-3xl bg-gradient-to-br from-slate-100 via-stone-100 to-slate-200 ring-1 ring-slate-200/80 shadow-inner" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="border-b border-slate-100/60 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8">
          <div className="space-y-4">
            <p className={labelText}>Partnerships</p>
            <h2 className={sectionHeading}>Who We Serve</h2>
            <p className={bodyText}>
              Each partner group receives a dedicated desk translating drawings into slab bundles, inspection checkpoints, and
              synchronized delivery plans.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-stone-50 to-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                <p className={labelText}>Dedicated Desk</p>
                <h3 className="mt-2 text-2xl font-semibold font-[var(--font-heading)] text-slate-900">{audience.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured marbles */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-white to-stone-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className={labelText}>Catalogue Preview</p>
              <h2 className={sectionHeading}>Featured Marbles</h2>
              <p className={bodyText}>
                Signature stones curated for fast-moving projects. Tap through to explore origin details and descriptors.
              </p>
            </div>
            <Link href="/products" className={secondaryButtonClass}>
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredMarbles.map((marble) => (
              <article
                key={marble.slug}
                className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-stone-50 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition flex flex-col"
              >
                <div className="h-32 rounded-xl bg-gradient-to-br from-slate-100 via-stone-100 to-slate-200 mb-4 ring-1 ring-slate-200/80" aria-hidden />
                <span className="inline-flex w-fit rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-500">
                  {marble.category}
                </span>
                <h3 className="mt-4 text-2xl font-semibold font-[var(--font-heading)] text-slate-900">{marble.name}</h3>
                <p className="text-sm text-slate-500">{marble.origin}</p>
                <p className="mt-2 text-base text-slate-700">{marble.baseColor} · {marble.veinStyle}</p>
                <Link href={`/products/${marble.slug}`} className="mt-6 text-sm font-semibold text-slate-900 hover:text-slate-600">
                  View details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rab Noor */}
      <section className="border-b border-slate-100/60 bg-white/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8">
          <div className="space-y-4">
            <p className={labelText}>Why Rab Noor</p>
            <h2 className={sectionHeading}>Reasons partners rely on us</h2>
            <p className={bodyText}>
              A single partner orchestrating sourcing, processing, and logistics so your sites receive compliant, ready-to-use
              marble packages.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-stone-50 to-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition space-y-3"
              >
                <p className={labelText}>Advantage</p>
                <h3 className="text-2xl font-semibold font-[var(--font-heading)] text-slate-900">{prop.title}</h3>
                <p className="text-base text-slate-700">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From quarry to project */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 via-stone-50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8">
          <div className="space-y-4">
            <p className={labelText}>Process</p>
            <h2 className={sectionHeading}>From quarry to project</h2>
            <p className={bodyText}>
              Transparent touchpoints keep every stakeholder aligned from the first sample to final installation.
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-stone-50 p-6 shadow-sm sm:flex-row sm:items-start"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-700 text-white text-lg font-semibold shadow-lg shadow-slate-900/20">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-[var(--font-heading)] text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-base text-slate-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="border-b border-slate-100 bg-white/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
          <div className="space-y-4">
            <p className={labelText}>Global Presence</p>
            <h2 className={sectionHeading}>India sourcing · Europe distribution</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat) => (
                  <div key={stat.title} className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-stone-50 to-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{stat.title}</p>
                    <p className="mt-3 text-base text-slate-700 leading-relaxed">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-gradient-to-b from-slate-50 via-stone-50 to-white p-6 space-y-6 shadow-sm">
              <h3 className="text-xl font-semibold font-[var(--font-heading)] text-slate-900">Key corridors</h3>
              <ul className="space-y-4 text-base text-slate-700">
                {corridors.map((corridor) => (
                  <li key={corridor} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-slate-900/80" aria-hidden />
                    {corridor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8">
          <div className="space-y-4">
            <p className={labelText}>Partners speak</p>
            <h2 className={sectionHeading}>Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-stone-50 to-white p-6 shadow-sm space-y-5 hover:shadow-lg hover:-translate-y-1 transition"
              >
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-b border-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Plan together</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[var(--font-heading)] tracking-tight">
            Ready to plan your marble package?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-100 max-w-3xl">
            Share your drawings and quantities — we’ll propose stones, bundles, and shipping plans aligned with your budget and
            timeline.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/quote-builder" className={`${primaryButtonClass} bg-white text-slate-900 hover:bg-slate-100`}>
              Start Quote Builder
            </Link>
            <Link
              href="/contact"
              className={`${secondaryButtonClass} border-white text-white hover:text-slate-900 hover:bg-white`}
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
