import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductInquiryForm } from '@/components/forms/site/ProductInquiryForm';
import { ProductCard } from '@/components/cards/ProductCard';
import { cardSurface, sectionHeading, smallLabel } from '@/components/layout/styles';
import { getMarbleBySlug, getRelatedMarbles, marbles } from '@/lib/marbles';

interface ProductPageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return marbles.map((marble) => ({ slug: marble.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getMarbleBySlug(params.slug);
  if (!product) {
    return {
      title: 'Marble not found — Rab Noor Pvt Ltd'
    };
  }

  return {
    title: `${product.name} Marble | Rab Noor Pvt Ltd`,
    description: product.heroTagline,
    openGraph: {
      title: `${product.name} from ${product.origin}`,
      description: `${product.heroTagline} Applications: ${product.applications.join(', ')}`
    }
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getMarbleBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedMarbles = getRelatedMarbles(product.slug, 3);

  return (
    <article className="bg-white">
      <Container className="space-y-12 py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: product.name }]} />
        <header className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <p className={smallLabel}>{product.category} marble</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">{product.name}</h1>
            <p className="text-sm text-slate-500">Origin: {product.origin}</p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-700">{product.heroTagline}</p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
              <span className="rounded-full border border-slate-200 px-4 py-1 uppercase tracking-[0.2em]">{product.baseColor}</span>
              <span className="rounded-full border border-slate-200 px-4 py-1 uppercase tracking-[0.2em]">{product.veinStyle}</span>
              <span className="rounded-full border border-slate-200 px-4 py-1">{product.availability}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/quote-builder">Build a Multistone Quote</Button>
              <Button href="#product-inquiry" variant="secondary">
                Request Availability
              </Button>
            </div>
          </div>
          <div className={`${cardSurface} bg-slate-50 space-y-4 text-sm text-slate-700`}>
            <h2 className="text-xl font-semibold text-slate-900">Why clients choose {product.name}</h2>
            <ul className="space-y-3">
              {product.applications.slice(0, 4).map((application) => (
                <li key={application} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />
                  <span>{application}</span>
                </li>
              ))}
            </ul>
            <p className={smallLabel}>Logistics</p>
            <p>{product.availability}</p>
          </div>
        </header>
        <section className="grid gap-6 md:grid-cols-2" aria-label="Material previews">
          {product.imageGallery.map((image) => (
            <div key={image.url} className="space-y-3">
              <div className="h-48 rounded-2xl bg-slate-100" aria-hidden />
              <p className="text-sm text-slate-500">{image.label}</p>
            </div>
          ))}
        </section>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={cardSurface}>
            <h2 className="text-2xl font-semibold text-slate-900">Technical Specifications</h2>
            <p className="mt-2 text-sm text-slate-600">Laboratory data and finish options validated by our QC engineers.</p>
            <table className="mt-6 w-full divide-y divide-slate-100 text-sm text-slate-700">
              <tbody>
                {product.technicalData.map((spec, index) => (
                  <tr key={spec.label} className={index % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'}>
                    <th scope="row" className="py-3 pr-4 text-left font-semibold text-slate-900">
                      {spec.label}
                    </th>
                    <td className="py-3 text-slate-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-6">
            <div className={cardSurface}>
              <h3 className="text-xl font-semibold text-slate-900">Applications & Design Notes</h3>
              <ul className="mt-4 flex flex-wrap gap-3 text-sm text-slate-700">
                {product.applications.map((application) => (
                  <li key={application} className="rounded-full border border-slate-200 px-4 py-1">
                    {application}
                  </li>
                ))}
              </ul>
            </div>
            <div className={cardSurface}>
              <h3 className="text-xl font-semibold text-slate-900">Pricing Guidance</h3>
              <p className="mt-3 text-sm text-slate-700">
                Price on Request – FOB India / CIF Europe available. Share finish, thickness, and delivery port to receive a live quotation within 24 hours.
              </p>
              <p className="mt-3 text-sm text-slate-500">Indicative FOB: {product.pricing.fob} · CIF: {product.pricing.cif}</p>
            </div>
            <div className={cardSurface}>
              <h3 className="text-xl font-semibold text-slate-900">Availability & Lead Time</h3>
              <p className="mt-3 text-sm text-slate-700">{product.availability}</p>
              <p className="mt-3 text-sm text-slate-500">
                Dedicated inspectors monitor block selection, finishing, and ISPM 15 packing before dispatch.
              </p>
            </div>
          </div>
        </section>
        <section id="product-inquiry" className="grid gap-6 lg:grid-cols-2">
          <div className={cardSurface}>
            <h2 className="text-2xl font-semibold text-slate-900">Request a Quote</h2>
            <p className="mt-2 text-base text-slate-700">
              Tell us the quantity, finish, and destination for {product.name}. We will share production slots, inspection photos, and freight options.
            </p>
            <div className="mt-6">
              <ProductInquiryForm productName={product.name} />
            </div>
          </div>
          <div className={`${cardSurface} bg-slate-900 text-white`}>
            <h3 className="text-xl font-semibold">What happens next?</h3>
            <ol className="mt-4 space-y-4 text-sm text-slate-100">
              <li>
                <strong>1. Availability Check:</strong> We confirm quarry lots and current slab inventory.
              </li>
              <li>
                <strong>2. QC & Imaging:</strong> You receive high-res slab photos, lab reports, and shade notes.
              </li>
              <li>
                <strong>3. Logistics Plan:</strong> Freight desk books FOB India or CIF Europe depending on your location.
              </li>
            </ol>
            <p className="mt-6 text-sm text-slate-200">Need urgent delivery? Call our Athens warehouse for reserve stock.</p>
            <Button href="/contact" variant="secondary" className="mt-6 border-white text-white hover:text-slate-900">
              Talk to Sales
            </Button>
          </div>
        </section>
        {relatedMarbles.length ? (
          <section className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className={smallLabel}>More options</p>
                <h2 className={sectionHeading}>Related Marbles</h2>
                <p className="mt-2 text-base text-slate-700">Clients exploring {product.name} also evaluate these options.</p>
              </div>
              <Button href="/products" variant="secondary">
                View all products
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedMarbles.map((stone) => (
                <ProductCard key={stone.slug} product={stone} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </article>
  );
}
