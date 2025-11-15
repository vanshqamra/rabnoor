import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';
import { products } from '../../data/products';

export default function B2BDashboard() {
  return (
    <div>
      <PageHeader title="B2B Dashboard" description="Mock view of stock visibility – secure login coming soon." />
      <Section>
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left uppercase tracking-wide text-xs text-slate-500">
              <tr>
                <th className="px-4 py-3">Marble</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Stock (m²)</th>
                <th className="px-4 py-3">Indicative Price</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 8).map((product, index) => (
                <tr key={product.slug} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-semibold">{product.name}</td>
                  <td className="px-4 py-3">{index % 2 === 0 ? 'Athens Warehouse' : 'Kishangarh Yard'}</td>
                  <td className="px-4 py-3">{500 - index * 20} m²</td>
                  <td className="px-4 py-3">Price on request</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}
