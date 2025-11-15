import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { CTASection } from '../components/shared/CTASection';

const ports = [
  { name: 'Mundra, India', detail: 'Primary export hub for Rajasthan production with weekly sailings to Europe.' },
  { name: 'Nhava Sheva, India', detail: 'Ideal for mixed cargo + bonded warehouse connections.' },
  { name: 'Piraeus, Greece', detail: 'EU gateway with quick customs and onward trucking to Balkans.' },
  { name: 'Rotterdam, Netherlands', detail: 'North Europe distribution for Germany, Benelux, Scandinavia.' },
  { name: 'Antwerp, Belgium', detail: 'Specialized in stone imports with experienced stevedores.' },
  { name: 'Hamburg, Germany', detail: 'Preferred port for German projects needing fast inland transit.' }
];

export default function LogisticsShippingPage() {
  return (
    <div>
      <PageHeader
        title="Logistics & Shipping"
        description="Rab Noor Pvt Ltd handles heavy stone logistics, documentation, insurance, and Incoterms guidance."
      />
      <Section eyebrow="Shipping methods" title="Containers and breakbulk">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold">Containerized slabs</h3>
            <p className="mt-3 text-slate-600">
              20ft/40ft containers loaded with A-frames, vertical packing, and shock absorbers. Ideal for slabs and cut-to-size
              consignments.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold">Breakbulk blocks</h3>
            <p className="mt-3 text-slate-600">
              Direct quarry blocks shipped as breakbulk with heavy-lift lashing, suited for fabricators planning their own
              cutting.
            </p>
          </div>
        </div>
      </Section>
      <Section eyebrow="Ports we use" title="Strategic port network">
        <div className="grid gap-4 md:grid-cols-3">
          {ports.map((port) => (
            <div key={port.name} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">{port.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{port.detail}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Container loading" title="Protection at every stage">
        <div className="grid gap-6 md:grid-cols-3">
          {['Vertical slab packing', 'Crate stacking & strapping', 'Moisture & impact protection'].map((item) => (
            <div key={item} className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6">
              <p className="font-semibold text-emerald-900">{item}</p>
              <p className="mt-2 text-sm text-emerald-800">Detailed loading checklists shared with clients.</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Documentation" title="Paperwork handled">
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>Commercial Invoice & Packing List</li>
          <li>Certificate of Origin</li>
          <li>Bill of Lading</li>
          <li>Insurance certificate</li>
          <li>ISPM 15 / Phytosanitary certificate for crates</li>
        </ul>
      </Section>
      <Section eyebrow="Insurance & Incoterms" title="Risk coverage">
        <p className="text-lg text-slate-600">
          We arrange marine cargo insurance and explain Incoterms (FOB, CIF, EXW) so buyers know where risk transfers. Clients
          can choose Rab Noor logistics or nominate their forwarder; our team ensures smooth coordination.
        </p>
      </Section>
      <CTASection
        title="Get a logistics cost estimate"
        description="Share your port pair, volume, and timeline for a detailed freight quote."
        primary={{ label: 'Request Estimate', href: '/quote-builder' }}
        secondary={{ label: 'Contact Logistics', href: '/contact' }}
      />
    </div>
  );
}
