import Link from 'next/link';
import { Product } from '@/lib/marbles';
import { cardSurface, smallLabel } from '@/components/layout/styles';

interface Props {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className = '' }: Props) => (
  <article className={`${cardSurface} flex flex-col space-y-3 ${className}`}>
    <div className="mb-2 h-36 rounded-xl bg-slate-100" aria-hidden />
    <p className={`${smallLabel} text-slate-500`}>{product.category}</p>
    <h3 className="text-2xl font-semibold text-slate-900">{product.name}</h3>
    <p className="text-sm text-slate-500">{product.origin}</p>
    <p className="text-base text-slate-700 flex-1">{product.description}</p>
    <div className="flex flex-wrap gap-3 text-xs text-slate-600">
      <span className="rounded-full border border-slate-200 px-3 py-1">{product.baseColor}</span>
      <span className="rounded-full border border-slate-200 px-3 py-1">{product.veinStyle}</span>
    </div>
    <Link href={`/products/${product.slug}`} className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900">
      View details →
    </Link>
  </article>
);
