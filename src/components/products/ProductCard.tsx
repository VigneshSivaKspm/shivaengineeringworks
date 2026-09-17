import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';
import type { Product } from '../../types/product';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { useModals } from '../layout/AppLayout';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openQuoteModal } = useModals();

  const keySpecs = product.specifications.slice(0, 4);

  return (
    <article className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col overflow-hidden">
      <div className="relative overflow-hidden bg-slate-900">
        <Link to={`/products/${product.categorySlug}/${product.slug}`}>
          <ImageWithFallback
            src={product.images[0]}
            alt={product.name}
            aspectRatio="aspect-[4/3]"
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.armType && product.armType !== 'N/A' && (
            <span className="px-2.5 py-1 bg-slate-950/85 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[11px] font-bold rounded-lg tracking-wider uppercase">
              {product.armType}
            </span>
          )}
          {product.modelCode && (
            <span className="px-2 py-1 bg-slate-900/80 backdrop-blur-md text-slate-300 text-[10px] font-mono rounded-lg">
              {product.modelCode}
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
            {product.categoryName}
          </span>

          <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
            <Link to={`/products/${product.categorySlug}/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
            {keySpecs.map((spec, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{spec.label}:</span>
                <span className="text-slate-900 font-semibold text-right truncate max-w-[150px] ml-2">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Price Structure:</span>
            <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              {product.priceLabel || 'Price on Request'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/products/${product.categorySlug}/${product.slug}`}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => openQuoteModal(product.name, product.slug)}
              className="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
