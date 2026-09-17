import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SERVICES } from '../data/services';
import { useSEO } from '../utils/seo';
import { Layers, Droplets, Compass, CheckCircle2, Send } from 'lucide-react';
import { useModals } from '../components/layout/AppLayout';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const Services: React.FC = () => {
  useSEO({
    title: 'Engineering Services | Shivaa Engineering Works Coimbatore',
    description: 'Specialized solar services including Solar Structure Fabrication, Solar Pump Installation, and Solar System Design & CAD consultation in Coimbatore, Tamil Nadu.',
  });

  const { openQuoteModal } = useModals();

  const breadcrumbs = [{ label: 'Services' }];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-amber-500" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-amber-500" />;
      default:
        return <Compass className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <div>
      <PageHero
        title="Engineering Services"
        subtitle="Specialized design, structural fabrication, pump installation, and CAD consultation services in Coimbatore."
        breadcrumbItems={breadcrumbs}
      />

      <section className="py-16 sm:py-24 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md">
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  aspectRatio="aspect-[4/3]"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800">
                  {getIcon(service.iconName)}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {service.tagline}
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {service.name}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Service Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Key Deliverables</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    {service.deliverables.map((del, idx) => (
                      <li key={idx}>{del}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openQuoteModal(service.name)}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enquire for {service.name}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
