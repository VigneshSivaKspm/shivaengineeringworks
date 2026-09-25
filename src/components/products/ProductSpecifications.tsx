import React from 'react';
import type { ProductSpecification } from '../../types/product';
import { Cpu } from 'lucide-react';

interface ProductSpecificationsProps {
  specifications: ProductSpecification[];
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  specifications,
}) => {
  if (!specifications || specifications.length === 0) return null;

  const groupedSpecs: Record<string, ProductSpecification[]> = {};
  specifications.forEach((spec) => {
    const groupName = spec.group || 'Technical Details';
    if (!groupedSpecs[groupName]) {
      groupedSpecs[groupName] = [];
    }
    groupedSpecs[groupName].push(spec);
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
        <Cpu className="w-5 h-5 text-amber-500" />
        <h3 className="text-xl font-bold text-slate-900">Technical Specifications</h3>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedSpecs).map(([groupTitle, specs]) => (
          <div key={groupTitle} className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-md inline-block">
              {groupTitle}
            </h4>
            <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
              {specs.map((spec, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 sm:grid-cols-3 p-3 text-sm ${
                    idx % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'
                  }`}
                >
                  <span className="font-semibold text-slate-700 sm:col-span-1">
                    {spec.label}
                  </span>
                  <span className="text-slate-900 sm:col-span-2 mt-0.5 sm:mt-0 font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
