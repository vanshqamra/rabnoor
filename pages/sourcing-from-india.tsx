import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { CTASection } from '../components/shared/CTASection';

export default function SourcingFromIndiaPage() {
  return (
    <div>
      <PageHeader
        title="Sourcing From India"
        description="Tap into Rab Noor Pvt Ltd’s Rajasthan network for block selection, slab finishing, QC, and export packaging."
      />
      <Section eyebrow="Why Indian marble" title="Global demand for Indian stones">
        <p className="text-lg text-slate-600">
          Indian marble spans pure Makrana whites, dramatic Rainforest colors, and high-density black stones. Rab Noor teams
          provide quarry videos, slab marking, and container loading oversight so you can buy remotely without uncertainty.
        </p>
      </Section>
      <Section eyebrow="Key regions" title="Quarry belts we cover">
        <div className="grid gap-6 md:grid-cols-3">
          {['Makrana', 'Kishangarh', 'Rajsamand / Udaipur'].map((region) => (
            <div key={region} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">{region}</h3>
              <p className="mt-3 text-sm text-slate-600">
                Block selection support, cutting plans, and traceability documents tailored for export buyers.
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Quality control" title="Every slab documented">
        <div className="grid gap-6 md:grid-cols-4">
          {['Block selection', 'Grade sorting', 'Slab cutting & polishing', 'Final inspection'].map((step) => (
            <div key={step} className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6">
              <p className="font-semibold text-emerald-900">{step}</p>
              <p className="mt-2 text-sm text-emerald-800">Measurements, moisture checks, edge inspection, and thickness tolerance reports.</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Export packaging" title="ISPM 15 compliant crates">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-slate-600">
              Crates lined with foam, moisture barriers, and timber stamped for ISPM 15 compliance. Each bundle labelled with
              project, room, and lot numbers for swift installation.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-slate-600">
              Sample shipments can be dispatched to Europe for color and finish validation within 5-7 days via air freight.
            </p>
            <a href="/quote-builder" className="mt-4 inline-block font-semibold text-emerald-600">
              Request Sample Shipment →
            </a>
          </div>
        </div>
      </Section>
      <CTASection
        title="Discuss Sourcing From India"
        description="Tell us about your upcoming requirement and we’ll build a sourcing + logistics plan."
        primary={{ label: 'Contact India Team', href: '/contact' }}
        secondary={{ label: 'Build a Quote', href: '/quote-builder' }}
      />
    </div>
  );
}
