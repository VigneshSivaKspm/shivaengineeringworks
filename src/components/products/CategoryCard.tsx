import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SunMedium, Layers, Zap, Grid, Activity, Wrench } from 'lucide-react';
import type { ProductCategory } from '../../types/product';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface CategoryCardProps {
  category: ProductCategory;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'SunMedium':
        return <SunMedium className="w-5 h-5 text-amber-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Grid':
        return <Grid className="w-5 h-5 text-amber-500" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-amber-500" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col overflow-hidden">
      <div className="relative bg-slate-100 overflow-hidden">
        <Link to={`/products/${category.slug}`}>
          <ImageWithFallback
            src={category.image}
            alt={category.name}
            aspectRatio="aspect-[16/9]"
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-2 rounded-xl border border-slate-200 shadow-sm">
          {getIcon(category.iconName)}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full inline-block mb-2">
            {category.itemCount} Products Available
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
            <Link to={`/products/${category.slug}`}>{category.name}</Link>
          </h3>
          <p className="text-xs font-semibold text-slate-500 mt-1">{category.tagline}</p>
          <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed font-normal">
            {category.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/products/${category.slug}`}
            className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
