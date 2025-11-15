import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCatalogue } from '@/components/layout/ProductCatalogue';
import { productCategories, products } from '@/lib/marbles';

export const metadata: Metadata = {
  title: 'Marble Catalogue | Rab Noor Pvt Ltd',
  description: 'Browse curated white, beige, grey, black, and exotic marbles sourced across India and Europe.',
  openGraph: {
    title: 'Marbles Near Me — Product Catalogue',
    description: 'Filter by tone and application to shortlist slabs ready for export from India and Europe.'
  }
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader title="Marble Products" description="Filter by tone or origin to plan your sourcing." />
      <Container className="space-y-10 py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />
        <div className="max-w-3xl space-y-4">
          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            All marbles listed are available for FOB India or CIF Europe shipments. Ask for book-matching, cut-to-size programming, and inspection videos.
          </p>
        </div>
        <ProductCatalogue categories={productCategories} products={products} />
      </Container>
    </>
  );
}
