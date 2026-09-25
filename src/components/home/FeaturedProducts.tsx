import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../products/ProductCard';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowRight } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            badge="Featured Catalogue"
            title="Popular Solar Lighting & Poles"
            subtitle="Industrial single arm, double arm, high mast poles, and mounting structures built for high endurance."
            className="mb-0"
          />

          <Link
            to="/products/solar-lighting-solutions"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors"
          >
            <span>View All Solar Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
