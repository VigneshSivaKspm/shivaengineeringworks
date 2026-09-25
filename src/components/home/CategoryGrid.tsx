import React from 'react';
import { PRODUCT_CATEGORIES } from '../../data/categories';
import { CategoryCard } from '../products/CategoryCard';
import { SectionHeading } from '../common/SectionHeading';

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Categories"
          title="Our Manufacturing Product Range"
          subtitle="Comprehensive industrial solar products engineered and fabricated at our Coimbatore facilities."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
