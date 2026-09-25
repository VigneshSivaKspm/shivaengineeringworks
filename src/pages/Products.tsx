import React, { useState, useMemo } from 'react';
import { PageHero } from '../components/common/PageHero';
import { ProductGrid } from '../components/products/ProductGrid';
import { PRODUCTS } from '../data/products';
import { PRODUCT_CATEGORIES } from '../data/categories';
import { useSEO } from '../utils/seo';
import { Search, Filter, RefreshCw } from 'lucide-react';

export const Products: React.FC = () => {
  useSEO({
    title: 'Products Catalogue | Shivaa Engineering Works Coimbatore',
    description: 'Explore our complete industrial product catalogue including Solar Lighting Solutions, Single & Double Arm Street Poles, High Mast Poles, and Solar Panel Mounting Structures.',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArmType, setSelectedArmType] = useState<string>('all');

  const breadcrumbs = [{ label: 'Products Catalogue' }];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category Filter
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }

      // Arm Type Filter
      if (selectedArmType !== 'all' && product.armType !== selectedArmType) {
        return false;
      }

      // Search Query Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCat = product.categoryName.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query);
        const matchesCode = product.modelCode?.toLowerCase().includes(query);
        return matchesName || matchesCat || matchesDesc || matchesCode;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedArmType]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedArmType('all');
  };

  return (
    <div>
      <PageHero
        title="Industrial Products Catalogue"
        subtitle="Manufactured and engineered in Coimbatore to meet international quality and IS 800 standards."
        breadcrumbItems={breadcrumbs}
      />

      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls Bar: Search & Category Filter Pills */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Realtime Search Input */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products by model, category, or spec..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Reset Filters button */}
              {(selectedCategory !== 'all' || selectedArmType !== 'all' || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-600 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter by Category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  All Products ({PRODUCTS.length})
                </button>
                {PRODUCT_CATEGORIES.map((cat) => {
                  const count = PRODUCTS.filter((p) => p.categorySlug === cat.slug).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedCategory === cat.slug
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {cat.name} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Arm Type Filter (if Solar Lighting) */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Pole Arm Configuration:
              </div>
              <div className="flex flex-wrap gap-2">
                {['all', 'Single Arm', 'Double Arm', 'High Mast'].map((arm) => (
                  <button
                    key={arm}
                    onClick={() => setSelectedArmType(arm)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      selectedArmType === arm
                        ? 'bg-slate-900 text-amber-400 font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {arm === 'all' ? 'All Arm Types' : arm}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong>{filteredProducts.length}</strong> products
            </span>
            {searchQuery && (
              <span>
                Matching search: &quot;{searchQuery}&quot;
              </span>
            )}
          </div>

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </div>
  );
};
