import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { cardSurface, sectionHeading, sectionSubheading, smallLabel } from '@/components/layout/styles';

export const metadata: Metadata = {
  title: 'Logistics & Shipping | Rab Noor Pvt Ltd',
  description: 'Container and breakbulk shipping programs connecting Indian ports with Europe’s major gateways.',
  openGraph: {
    title: 'Marble Logistics & Shipping',
    description: 'Details on container stuffing, breakbulk handling, required documents, insurance, and incoterms.'
  }
};

const ports = ['Mundra, India', 'Nhava Sheva (JNPT), India', 'Piraeus, Greece', 'Rotterdam, Netherlands', 'Antwerp, Belgium', 'Hamburg, Germany'];
const documents = ['Commercial Invoice & Packing List', 'Certificate of Origin', 'ISPM 15 / Fumigation Certificate', 'Bill of Lading', 'Insurance Certificate', 'Radiation/Safety Certificates (if applicable)'];

export default function LogisticsShippingPage() {
  return (
    <>
      <PageHeader title="Logistics & Shipping" description="Global freight coordination for marble consignments." />
      <Container className="space-y-16 py-16 sm:py-20 lg:py-24">
        <section className="grid gap-6 lg:grid-cols-2">
          <div className={cardSurface}>
            <h2 className={sectionHeading}>Container shipping</h2>
            <p className={`${sectionSubheading} mt-3`}>Standard option for slab bundles, tiles, and cut-to-size packages.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>20' containers hold 220–260 m² of slabs depending on thickness</li>
              <li>40' containers hold 420–450 m² with dual-tier racking</li>
              <li>Stuffing supervised by Rab Noor inspectors with live photo updates</li>
            </ul>
          </div>
          <div className={cardSurface}>
            <h2 className={sectionHeading}>Breakbulk shipping</h2>
            <p className={`${sectionSubheading} mt-3`}>Recommended for large blocks or oversized project cargo.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Blocks lashed onto steel pallets with timber chocks</li>
              <li>Surveyors issue condition reports before vessel departure</li>
              <li>Ideal for Italian workshops importing Indian blocks</li>
            </ul>
          </div>
        </section>
        <section className="space-y-4">
          <p className={smallLabel}>Reach</p>
          <h2 className={sectionHeading}>Ports covered</h2>
          <div className="grid gap-3 pt-6 md:grid-cols-3">
            {ports.map((port) => (
              <div key={port} className={`${cardSurface} text-sm text-slate-700`}>
                {port}
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className={cardSurface}>
            <h2 className={sectionHeading}>Loading methods</h2>
            <p className={`${sectionSubheading} mt-3`}>We adapt loading plans based on stone type and destination.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Bundled slabs secured with A-frames and nylon straps</li>
              <li>Tiles stacked within moisture-proof cartons on pallets</li>
              <li>Custom cradles for curved columns and carved panels</li>
            </ul>
          </div>
          <div className={cardSurface}>
            <h2 className={sectionHeading}>Required documents</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {documents.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className={cardSurface}>
            <h2 className={sectionHeading}>Insurance</h2>
            <p className={`${sectionSubheading} mt-3`}>All shipments are covered with All-Risk policies naming the client as beneficiary.</p>
            <p className="mt-4 text-sm text-slate-600">We partner with international insurers that understand stone cargo, ensuring faster claim processing if required.</p>
          </div>
          <div className={cardSurface}>
            <h2 className={sectionHeading}>Incoterms simplified</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><strong>FOB India:</strong> We handle local logistics and export clearance, you nominate the vessel.</li>
              <li><strong>CIF Europe:</strong> Rab Noor books freight + insurance and delivers to the discharge port.</li>
              <li><strong>DAP Site:</strong> Available for EU clients leveraging our warehouse and trucking network.</li>
            </ul>
          </div>
        </section>
      </Container>
    </>
  );
}
