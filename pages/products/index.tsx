import { useMemo, useState } from 'react';
import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';
import { ProductCard } from '../../components/cards/ProductCard';
import { Product, products } from '../../data/products';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'white', label: 'White Marble' },
  { key: 'beige', label: 'Beige Marble' },
  { key: 'grey', label: 'Grey Marble' },
  { key: 'black', label: 'Black Marble' },
  { key: 'colored', label: 'Colored Marble' }
] as const;

type CategoryKey = (typeof categories)[number]['key'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');

  const filteredProducts: Product[] = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <PageHeader
        title="Product Library"
        description="Explore our curated range of white, beige, grey, black, and colored marbles with technical data and application guidance."
      />
      <Section eyebrow="Category filters" title="Search by look and performance">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                activeCategory === category.key
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                  : 'border-slate-200 bg-white text-slate-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Section>
      <Section eyebrow="Marble catalog" title="Products ready for global dispatch">
        <div className="grid gap-6 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>
    </div>
  );
}
