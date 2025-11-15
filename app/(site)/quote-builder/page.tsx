import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { QuoteBuilderForm } from '@/components/forms/site/QuoteBuilderForm';
import { cardSurface, sectionHeading, sectionSubheading, smallLabel } from '@/components/layout/styles';

export const metadata: Metadata = {
  title: 'Quote Builder | Rab Noor Pvt Ltd',
  description: 'Add marble line items, finishes, and destinations for a rapid quotation from our sourcing team.',
  openGraph: {
    title: 'Build a marble quote in minutes',
    description: 'Share quantities, thicknesses, and delivery ports to receive FOB India or CIF Europe pricing.'
  }
};

export default function QuoteBuilderPage() {
  return (
    <>
      <PageHeader title="Quote Builder" description="Send line items, finishes, and destinations in minutes." />
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className={cardSurface}>
            <QuoteBuilderForm />
          </div>
          <aside className="space-y-6">
            <div className={cardSurface}>
              <h2 className={sectionHeading}>How we respond</h2>
              <p className={`${sectionSubheading} mt-3`}>
                Within 24 hours our sourcing desk confirms slab availability, finishing timelines, and FOB/CIF scenarios based on your destination port.
              </p>
            </div>
            <div className={cardSurface}>
              <p className="font-semibold text-slate-900">Checklist</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Slab photos and dry-lay videos</li>
                <li>• Technical data sheets per stone</li>
                <li>• Freight & customs guidance</li>
              </ul>
            </div>
            <div className={cardSurface}>
              <p className={smallLabel}>Need help?</p>
              <p className="mt-3 text-sm text-slate-600">
                Email <a href="mailto:quotes@marblesnearme.com" className="font-semibold text-slate-900">quotes@marblesnearme.com</a> or call +91 98271 12345 for immediate assistance.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
