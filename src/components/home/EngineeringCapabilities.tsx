import React from 'react';
import { ShieldCheck, Cpu, Layers, Wrench, Award } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { COMPANY_CONFIG } from '../../config/company';

export const EngineeringCapabilities: React.FC = () => {
  const capabilities = [
    {
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      title: 'IS 800 Code Structural Drafting',
      description: 'All solar module structures and street lighting poles are engineered strictly complying with Indian Standard IS 800 structural steel design parameters.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      title: 'Hot-Dip Galvanizing (>80 Microns)',
      description: 'Continuous immersion hot-dip galvanizing protects raw steel components against tropical atmospheric oxidation and coastal corrosion for 25+ years.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      title: 'Wind Speed Engineering (up to 180 km/h)',
      description: 'Polygonal high mast shafts and module tilt racks designed with 3D CAD finite element modeling to endure peak cyclone wind loads.',
    },
    {
      icon: <Wrench className="w-6 h-6 text-amber-400" />,
      title: 'Precision CNC Metal Fabrication',
      description: 'Advanced CNC plasma plate cutting, hydraulic press braking, and submerged arc welding in our Coimbatore manufacturing facilities.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Manufacturing Excellence"
          title="Engineering & Infrastructure Capabilities"
          subtitle="Precision fabrication and rigorous quality assurance in Coimbatore, Tamil Nadu."
          dark
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row gap-5"
            >
              <div className="p-3.5 bg-amber-500/10 rounded-2xl border border-amber-500/20 h-fit w-fit flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Standards Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/80 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Award className="w-8 h-8 text-amber-400 flex-shrink-0" />
            <div>
              <h4 className="text-base font-bold text-white">Quality Assurance & Compliance</h4>
              <p className="text-xs text-slate-400">Strict dimension checking, weld inspection, and galvanizing thickness verification on every production lot.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-amber-300">
            {COMPANY_CONFIG.manufacturing.standards.map((std, idx) => (
              <span key={idx} className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                {std}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
