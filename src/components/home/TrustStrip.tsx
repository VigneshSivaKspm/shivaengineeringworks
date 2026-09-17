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
    <section className="bg-slate-900 border-b border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/30 transition-colors"
            >
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">{item.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
