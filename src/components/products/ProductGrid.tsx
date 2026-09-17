import React from 'react';
import type { Product } from '../../types/product';
import { ProductCard } from './ProductCard';
import { SearchX } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  emptyMessage = 'No products match your selected criteria.',
}) => {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 p-8 max-w-xl mx-auto">
        <SearchX className="w-12 h-12 text-slate-400 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-slate-900">No Products Found</h3>
        <p className="text-sm text-slate-600 mt-1">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
