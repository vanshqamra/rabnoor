import Link from 'next/link';
import { Product } from '../../data/products';

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div
      className="h-40 rounded-2xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${product.imageGallery[0]?.url ?? 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80'})`
      }}
    />
    <div className="mt-4">
      <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">{product.category}</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{product.name}</h3>
      <p className="text-sm text-slate-500">{product.origin}</p>
      <p className="mt-3 text-sm text-slate-600">{product.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="font-semibold text-emerald-600">{product.baseColor}</span>
        <Link href={`/products/${product.slug}`} className="text-emerald-600 hover:underline">
          View details →
        </Link>
      </div>
    </div>
  </div>
);
