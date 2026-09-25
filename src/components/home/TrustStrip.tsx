import React from 'react';
import { Calendar, Factory, MapPin, ShieldCheck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: <Calendar className="w-5 h-5 text-amber-500" />,
      title: 'Established 2009',
      subtitle: 'Over 15 Years Manufacturing Experience',
    },
    {
      icon: <Factory className="w-5 h-5 text-amber-500" />,
      title: 'Manufacturer & Service Provider',
      subtitle: 'In-House Fabrication & Assembly Facility',
    },
    {
      icon: <MapPin className="w-5 h-5 text-amber-500" />,
      title: 'Coimbatore, Tamil Nadu',
      subtitle: 'Serving Industrial Clients Nationwide',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
      title: 'IS 800 Engineering Standards',
      subtitle: 'Hot-Dip Galvanized Corrosion Protection',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-all hover:shadow-md"
            >
              <div className="p-3 bg-amber-100 rounded-xl border border-amber-200 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
