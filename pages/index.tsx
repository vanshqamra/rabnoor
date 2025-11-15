import Head from 'next/head';
import { HeroSection } from '../components/shared/HeroSection';
import { Section } from '../components/shared/Section';
import { ProductCard } from '../components/cards/ProductCard';
import { products } from '../data/products';
import { TestimonialStrip } from '../components/shared/TestimonialStrip';
import { CTASection } from '../components/shared/CTASection';

const whoWeServe = [
  {
    title: 'Architects & Interior Designers',
    description: 'Digital libraries, sampling, and dedicated specification managers for studio workflows.'
  },
  {
    title: 'Builders & Developers',
    description: 'Bulk procurement, consolidated shipments, and milestone-based delivery schedules.'
  },
  {
    title: 'Stone Distributors & Retailers',
    description: 'Access to the B2B portal for inventory visibility, marketing kits, and exclusive pricing.'
  },
  {
    title: 'Homeowners / Luxury Villas',
    description: 'Concierge-grade sourcing, book-matching mockups, and installation-ready crate labeling.'
  }
];

const steps = [
  'Quarry selection & block inspection',
  'Cutting, grading & finish approvals',
  'ISPM 15 export packing & insurance',
  'Shipping, customs & on-site delivery'
];

const uspList = [
  'Dual presence: India sourcing team + Europe distribution hub',
  'Dedicated logistics desk covering Mundra, Nhava Sheva, Piraeus, Rotterdam, Antwerp, Hamburg',
  'Strict quality control & grading with photo/video proof packs',
  'ISPM 15 compliant packaging, insurance & documentation'
];

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Rab Noor Pvt Ltd | Premium Indian & European Marble</title>
        <meta
          name="description"
          content="marblesnearme.com connects Indian quarries and European warehouses to supply architects, developers, and distributors with curated marble."
        />
      </Head>
      <HeroSection
        title="Premium Indian & European Marble — Near You, Delivered Worldwide"
        description="Rab Noor Pvt Ltd operates marblesnearme.com, uniting Rajasthan quarries with European warehouses to serve hospitality, real estate, and design projects globally."
        primaryAction={{ label: 'Request a Quote', href: '/quote-builder' }}
        secondaryAction={{ label: 'View Products', href: '/products' }}
      />
      <Section eyebrow="Who we serve" title="Trusted partner across the marble value chain">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whoWeServe.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Featured marble types" title="Signature stones ready to ship">
        <div className="grid gap-6 md:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>
      <Section eyebrow="Why Rab Noor Pvt Ltd?" title="End-to-end marble orchestration">
        <div className="grid gap-6 md:grid-cols-2">
          {uspList.map((usp) => (
            <div key={usp} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-emerald-600">{usp}</h3>
              <p className="mt-3 text-sm text-slate-600">
                From quarry approvals to customs clearance, every workflow is documented for transparency.
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="From quarry to project" title="Timeline that keeps your project on schedule">
        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
              <span className="text-sm font-semibold text-emerald-500">Step {index + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Global presence" title="Strategic teams in India and Europe" subtitle="India (source) · Europe (distribution hub)">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold">India – Rajasthan & Gujarat</h3>
            <p className="mt-3 text-slate-600">
              Source from Makrana, Kishangarh, Rajsamand, and Udaipur belts. Ship via Mundra and Nhava Sheva with direct factory
              supervision, digital QC packs, and flexible container loading.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold">Europe – Greece & EU Ports</h3>
            <p className="mt-3 text-slate-600">
              Thessaloniki/Athens warehouses stock ready slabs for EU clients. We route shipments to Piraeus, Rotterdam, Antwerp,
              and Hamburg with inland delivery support.
            </p>
          </div>
        </div>
      </Section>
      <Section eyebrow="Client sectors" title="Marble trusted by hotels, villas, commercial spaces">
        <TestimonialStrip />
      </Section>
      <CTASection
        title="Tell us about your marble needs"
        description="Share your project scope and we’ll curate quarry options, logistics plans, and ready-to-ship bundles."
        primary={{ label: 'Request a Quote', href: '/quote-builder' }}
        secondary={{ label: 'Contact Team', href: '/contact' }}
      />
    </div>
  );
}
