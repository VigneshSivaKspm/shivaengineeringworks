import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { ProductGrid } from '../components/products/ProductGrid';
import { PRODUCTS } from '../data/products';
import { PRODUCT_CATEGORIES } from '../data/categories';
import { useSEO } from '../utils/seo';
import { NotFound } from './NotFound';

export const CategoryDetail: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const category = PRODUCT_CATEGORIES.find((c) => c.slug === categorySlug);

  useSEO({
    title: category ? `${category.name} | Shivaa Engineering Works` : 'Product Category',
    description: category ? category.description : 'Product Category Page',
  });

  if (!category) {
    return <NotFound />;
  }

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);

  const breadcrumbs = [
    { label: 'Products', path: '/products' },
    { label: category.name },
  ];

  return (
    <div>
      <PageHero
        title={category.name}
        subtitle={category.description}
        breadcrumbItems={breadcrumbs}
      />

      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong>{categoryProducts.length}</strong> products in {category.name}
            </span>
            <Link to="/products" className="text-amber-600 font-semibold hover:underline">
              ← View All Categories
            </Link>
          </div>

          <ProductGrid products={categoryProducts} />
        </div>
      </section>
    </div>
  );
};
