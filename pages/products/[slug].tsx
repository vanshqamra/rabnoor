import { GetStaticPaths, GetStaticProps } from 'next';
import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';
import { products, Product } from '../../data/products';
import { QuoteRequestForm } from '../../components/forms/QuoteRequestForm';

interface Props {
  product: Product;
  recommendations: Product[];
}

export default function ProductDetailPage({ product, recommendations }: Props) {
  return (
    <div>
      <PageHeader
        title={product.name}
        description={`${product.heroTagline} Origin: ${product.origin}.`}
        actions={<p className="rounded-full border border-white/50 px-4 py-2 text-sm">Price on request</p>}
      />
      <Section eyebrow="Image gallery" title="Textures & installations">
        <div className="grid gap-4 md:grid-cols-3">
          {product.imageGallery.map((image) => (
            <div
              key={image.label}
              className="h-56 rounded-3xl bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
              aria-label={image.label}
            />
          ))}
        </div>
      </Section>
      <Section eyebrow="Technical data" title="Specifications">
        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <table className="w-full">
            <tbody>
              {product.technicalData.map((row) => (
                <tr key={row.label} className="border-b border-slate-200">
                  <td className="bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">{row.label}</td>
                  <td className="px-4 py-3 text-slate-800">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section eyebrow="Applications" title="Where this marble excels">
        <ul className="grid gap-3 md:grid-cols-2">
          {product.applications.map((application) => (
            <li key={application} className="rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-emerald-900">
              {application}
            </li>
          ))}
        </ul>
      </Section>
      <Section eyebrow="Pricing & availability" title="Price on request">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">Indicative ranges</p>
            <h3 className="mt-3 text-2xl font-semibold">FOB India: {product.pricing.fob}</h3>
            <h3 className="text-2xl font-semibold">CIF Europe: {product.pricing.cif}</h3>
            <p className="mt-3 text-sm text-slate-600">
              Exact pricing depends on grade, finish, and container composition. Speak with our sales desk for bundled offers.
            </p>
            <p className="mt-4 text-slate-600">Availability: {product.availability}</p>
          </div>
          <QuoteRequestForm marble={product.name} />
        </div>
      </Section>
      <Section eyebrow="Recommended alternatives" title="Explore similar looks">
        <div className="grid gap-6 md:grid-cols-3">
          {recommendations.map((rec) => (
            <div key={rec.slug} className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">{rec.category}</p>
              <h3 className="mt-2 text-xl font-semibold">{rec.name}</h3>
              <p className="text-sm text-slate-500">{rec.origin}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find((item) => item.slug === params?.slug);

  if (!product) {
    return { notFound: true };
  }

  const recommendations = products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .slice(0, 3);

  return {
    props: {
      product,
      recommendations
    }
  };
};
