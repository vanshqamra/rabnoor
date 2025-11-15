import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';
import { cardSurface, sectionHeading, sectionSubheading, smallLabel } from '@/components/layout/styles';

export const metadata: Metadata = {
  title: 'B2B Portal | Rab Noor Pvt Ltd',
  description: 'Live inventory, pre-negotiated freight, and marketing collateral for distributors and stone yards.',
  openGraph: {
    title: 'Rab Noor B2B Portal',
    description: 'Access pricing, reserve slabs, and download marketing assets in one secure dashboard.'
  }
};

const benefits = [
  {
    title: 'Live Inventory Access',
    detail: 'Track slabs in Athens and Thessaloniki warehouses with slab numbers, thickness, and finish availability.'
  },
  {
    title: 'Shared Containers & Freight',
    detail: 'Combine orders with partner yards to reduce per-slab freight costs. Our logistics desk coordinates stuffing windows.'
  },
  {
    title: 'Marketing Toolkit',
    detail: 'Download branded catalogs, social media packs, and spec sheets to localize for your sales team.'
  },
  {
    title: 'Priority Quarry Lots',
    detail: 'Reserve upcoming Indian and Greek lots before they reach open market through allocation credits.'
  }
];

export default function B2BPage() {
  return (
    <>
      <PageHeader title="B2B Portal" description="Dedicated interface for distributors and stone yards." />
      <Container className="space-y-10 py-16 sm:py-20 lg:py-24">
        <div className={cardSurface}>
          <p className={smallLabel}>Partner portal · preliminary UI</p>
          <h2 className={sectionHeading}>Why distributors join</h2>
          <p className={`${sectionSubheading} mt-3`}>
            The portal centralizes pricing, marketing collateral, and logistics updates for partners across Europe, the Middle East, and India.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <article key={benefit.title} className={cardSurface}>
              <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-base text-slate-700">{benefit.detail}</p>
            </article>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-900 bg-slate-900 p-8 text-center text-white">
          <p className={smallLabel}>Access</p>
          <h3 className="mt-2 text-3xl font-semibold">Invite-only login</h3>
          <p className="mt-3 text-base text-slate-200">Request credentials to browse current stock, book shared containers, and download marketing assets.</p>
          <Button href="/b2b/login" variant="secondary" className="mt-6 border-white text-white hover:text-slate-900">
            Access Portal
          </Button>
        </div>
      </Container>
    </>
  );
}
