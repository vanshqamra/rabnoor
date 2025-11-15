'use client';

import { useMemo, useState } from 'react';
import { Product, ProductCategory } from '@/lib/marbles';
import { ProductCategoryCard } from '@/components/cards/ProductCategoryCard';
import { ProductCard } from '@/components/cards/ProductCard';

interface CatalogueProps {
  categories: { key: ProductCategory; title: string; description: string }[];
  products: Product[];
}

export const ProductCatalogue = ({ categories, products }: CatalogueProps) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(categories[0]?.key ?? 'white');

  const groupedProducts = useMemo(() => {
    return categories.reduce<Record<ProductCategory, Product[]>>((acc, category) => {
      acc[category.key] = products.filter((product) => product.category === category.key);
      return acc;
    }, {} as Record<ProductCategory, Product[]>);
  }, [categories, products]);

  const activeProducts = groupedProducts[activeCategory] || [];
  const activeCategoryLabel = categories.find((category) => category.key === activeCategory)?.title ?? 'All';

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
        {categories.map((category) => (
          <ProductCategoryCard
            key={category.key}
            title={category.title}
            description={category.description}
            active={category.key === activeCategory}
            onClick={() => setActiveCategory(category.key)}
          />
        ))}
      </div>
      <p className="text-sm text-slate-600">
        Showing <span className="font-semibold text-slate-900">{activeProducts.length}</span> marbles · Filter: {activeCategoryLabel}
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activeProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};
