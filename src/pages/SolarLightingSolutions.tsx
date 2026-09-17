import React, { useState, useMemo } from 'react';
import { PageHero } from '../components/common/PageHero';
import { ProductGrid } from '../components/products/ProductGrid';
import { PRODUCTS } from '../data/products';
import { useSEO } from '../utils/seo';
import { Sun, Send, CheckCircle2, Filter } from 'lucide-react';
import { useModals } from '../components/layout/AppLayout';

export const SolarLightingSolutions: React.FC = () => {
  useSEO({
    title: 'Solar Lighting Solutions & Street Light Poles | Shivaa Engineering Works',
    description: 'Explore industrial solar street lighting solutions in Coimbatore, Tamil Nadu. Single Arm & Double Arm SS Series (SS01, SS03, SS05, SS06, SS07, SS08, SS09, SS10, SS12, SS13, SS15) & High Mast Poles.',
    keywords: 'Solar Lighting Solutions, Solar Street Light Pole, SS05 Single Arm, SS08 Double Arm, High Mast Pole, Shivaa Engineering Works Coimbatore',
  });

  const { openQuoteModal } = useModals();

  const [armFilter, setArmFilter] = useState<'all' | 'Single Arm' | 'Double Arm' | 'High Mast'>('all');

  const breadcrumbItems = [
    { label: 'Products', path: '/products' },
    { label: 'Solar Lighting Solutions' },
  ];

  const lightingProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const isLightingCategory =
        p.categorySlug === 'solar-lighting-solutions' || p.categorySlug === 'street-light-poles';
      if (!isLightingCategory) return false;
      if (armFilter !== 'all' && p.armType !== armFilter) return false;
      return true;
    });
  }, [armFilter]);

  return (
    <div>
      <PageHero
        title="Solar Lighting Solutions & Street Light Poles"
        subtitle="Complete range of high-efficiency integrated & standalone solar street lights, single/double arm poles, and high mast lighting towers."
        breadcrumbItems={breadcrumbItems}
        badge="Dedicated Product Line"
      />

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Coimbatore Manufacturing Facilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Heavy-Duty Solar Lighting Infrastructure
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Shivaa Engineering Works manufactures complete solar street lighting systems engineered for severe weather endurance in Indian conditions. Our product line ranges from model SS01 Single Arm to SS15 Single Arm, SS06 to SS12 Double Arm assemblies, and High Mast towers (12m to 30m).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Hot-Dip Galvanized (&gt;80μ)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>IS 800 Design Standards</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Wind Rated to 150 km/h</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Sun className="w-5 h-5" />
                <span>Bulk Commercial Inquiries</span>
              </div>
              <p className="text-xs text-slate-300">
                Need customized pole heights, specific lumen outputs, or Panchayat bulk pricing? Contact our Coimbatore sales desk directly.
              </p>
              <button
                onClick={() => openQuoteModal('Solar Lighting Solutions Line')}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Get Bulk Pricing</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
            <Filter className="w-4 h-4 text-amber-600" />
            <span>Filter Pole Arm Type:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All Lighting Models', value: 'all' },
              { label: 'Single Arm Poles (SS01, SS03, SS05, SS07, SS13, SS15)', value: 'Single Arm' },
              { label: 'Double Arm Poles (SS06, SS08, SS09, SS10, SS12)', value: 'Double Arm' },
              { label: 'High Mast Towers (12m - 30m)', value: 'High Mast' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setArmFilter(tab.value as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  armFilter === tab.value
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ProductGrid products={lightingProducts} />
        </div>
      </section>
    </div>
  );
};
