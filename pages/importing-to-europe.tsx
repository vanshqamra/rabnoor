import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { CTASection } from '../components/shared/CTASection';

const steps = [
  'Enquiry & specification review',
  'Sample dispatch / approvals',
  'Order confirmation & production',
  'Loading, shipping & customs',
  'Delivery to EU warehouse or site'
];

export default function ImportingToEuropePage() {
  return (
    <div>
      <PageHeader
        title="Importing Marble to Europe"
        description="Rab Noor Pvt Ltd simplifies EORI, customs, and logistics for Indian marble entering the EU."
      />
      <Section eyebrow="Overview" title="EU-ready supply chain">
        <p className="text-lg text-slate-600">
          With warehousing in Greece and bonded capacity in the EU, we stage inventory closer to your projects. Our customs team
          provides CE documentation, radiation reports, and density certificates for every shipment.
        </p>
      </Section>
      <Section eyebrow="EU import basics" title="Compliance essentials">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            'EORI registration is required for the importer of record. We guide you through the onboarding.',
            'Customs duties for marble slabs typically range from 0–4%. VAT is settled via reverse-charge for registered businesses.',
            'All crates are ISPM 15 compliant with fumigation certificates plus insurance and bill of lading packs.'
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="EU hub" title="Athens / Thessaloniki warehouses">
        <p className="text-lg text-slate-600">
          We maintain indoor slab storage near Athens with easy access to Piraeus port. Clients across Greece, Germany,
          Netherlands, Belgium, and Italy leverage this hub for quick call-offs, mixed containers, and consolidated deliveries.
        </p>
      </Section>
      <Section eyebrow="Compliance & standards" title="Documentation you receive">
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>Radiation safety and density/absorption tests.</li>
          <li>Commercial invoice, packing list, certificate of origin, bill of lading.</li>
          <li>Insurance certificates and moisture control reports.</li>
        </ul>
      </Section>
      <Section eyebrow="Timelines" title="Typical lead times">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
            <h3 className="text-2xl font-semibold">India → Greece</h3>
            <p className="mt-2 text-slate-600">12–18 days sailing</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
            <h3 className="text-2xl font-semibold">India → Rotterdam</h3>
            <p className="mt-2 text-slate-600">25–30 days sailing</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
            <h3 className="text-2xl font-semibold">Customs & inland</h3>
            <p className="mt-2 text-slate-600">3–5 days average</p>
          </div>
        </div>
      </Section>
      <Section eyebrow="How it works" title="Step-by-step process">
        <ol className="list-decimal space-y-2 pl-6 text-slate-600">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Section>
      <CTASection
        title="Talk to our EU import specialist"
        description="Send your project specs and we’ll align production slots with the right sailing schedule."
        primary={{ label: 'Contact EU Desk', href: '/contact' }}
        secondary={{ label: 'Request Quote', href: '/quote-builder' }}
      />
    </div>
  );
}
