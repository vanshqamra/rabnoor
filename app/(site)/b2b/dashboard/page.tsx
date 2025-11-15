import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { cardSurface, sectionSubheading } from '@/components/layout/styles';

const stock = [
  { marble: 'Makrana White', origin: 'Rajasthan, India', location: 'Kishangarh → Piraeus', availability: '120 slabs', price: 'USD 28/m² FOB', status: 'In Transit' },
  { marble: 'Thassos', origin: 'Thassos, Greece', location: 'Athens warehouse', availability: '60 slabs', price: 'EUR 92/m² CIF', status: 'Ready to ship' },
  { marble: 'Crema Marfil', origin: 'Alicante, Spain', location: 'Rotterdam bonded', availability: '40 crates', price: 'EUR 78/m² CIF', status: 'Reserved 30%' },
  { marble: 'Pietra Grey', origin: 'Iran', location: 'Hamburg bonded', availability: '85 slabs', price: 'EUR 88/m² CIF', status: 'Open' }
];

export const metadata: Metadata = {
  title: 'B2B Dashboard | Rab Noor Pvt Ltd',
  description: 'Mock dashboard displaying live inventory, locations, and pricing for B2B partners.',
  openGraph: {
    title: 'B2B Dashboard — Rab Noor Pvt Ltd',
    description: 'Preview of the protected interface showing marble availability, origins, and status.'
  }
};

export default function B2BDashboardPage() {
  return (
    <>
      <PageHeader title="B2B Dashboard" description="Mock view (authentication TBD)." />
      <Container className="space-y-6 py-16 sm:py-20 lg:py-24">
        <div className={`${cardSurface} overflow-x-auto p-0`}>
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-3">Marble</th>
                <th className="px-6 py-3">Origin</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Availability</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {stock.map((item) => (
                <tr key={item.marble} className="odd:bg-white even:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">{item.marble}</td>
                  <td className="px-6 py-4 text-slate-600">{item.origin}</td>
                  <td className="px-6 py-4 text-slate-600">{item.location}</td>
                  <td className="px-6 py-4 text-slate-600">{item.availability}</td>
                  <td className="px-6 py-4 text-slate-600">{item.price}</td>
                  <td className="px-6 py-4 text-slate-600">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={sectionSubheading}>
          Partner access will be gated behind SSO in the next phase; this preview simply illustrates how inventory, pricing,
          and status updates will display once live data is connected.
        </p>
      </Container>
    </>
  );
}
