import React from 'react';
import { Building, Truck, TreePine, Droplets, Warehouse, ShieldAlert } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const ApplicationsSection: React.FC = () => {
  const applications = [
    {
      icon: <Warehouse className="w-6 h-6 text-amber-500" />,
      title: 'Factories & Industrial Parks',
      description: 'Internal perimeter lighting, warehouse truck bays, and heavy roof-mounted solar PV arrays for industrial plants in Coimbatore and Tamil Nadu.',
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-500" />,
      title: 'Highways & Public Roads',
      description: 'Single and double-arm octagonal street light poles engineered for national/state highway service lanes and central median dividers.',
    },
    {
      icon: <TreePine className="w-6 h-6 text-amber-500" />,
      title: 'Gram Panchayats & Parks',
      description: 'Reliable standalone solar street light pole assemblies providing illumination to rural village roads, public squares, and municipal parks.',
    },
    {
      icon: <Building className="w-6 h-6 text-amber-500" />,
      title: 'Commercial Real Estate',
      description: 'Aesthetic octagonal solar poles for gated townships, corporate IT campuses, resort driveways, and institutional walkways.',
    },
    {
      icon: <Droplets className="w-6 h-6 text-amber-500" />,
      title: 'Agricultural Solar Pumping',
      description: 'Heavy structural ground mounts and drive controller enclosures for agricultural water pumping schemes in farm lands.',
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-amber-500" />,
      title: 'High Mast Area Lighting',
      description: '12m to 30m high mast polygonal towers for container ports, toll plazas, freight terminals, and outdoor storage yards.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Deployment Sectors"
          title="Applications & Industry Use Cases"
          subtitle="Shivaa Engineering solar and structural lighting solutions serve diverse public and industrial projects."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-400/50 transition-all space-y-3"
            >
              <div className="p-3 bg-amber-50 rounded-xl w-fit border border-amber-200/60">
                {app.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{app.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
