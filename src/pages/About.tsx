import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { COMPANY_CONFIG } from '../config/company';
import { useSEO } from '../utils/seo';
import { Calendar, Factory, ShieldCheck, Wrench, CheckCircle2, Award, Send } from 'lucide-react';
import { useModals } from '../components/layout/AppLayout';

export const About: React.FC = () => {
  useSEO({
    title: 'About Us | Shivaa Engineering Works Coimbatore',
    description: 'Learn about Shivaa Engineering Works, established 2009 in Coimbatore, Tamil Nadu. Leading manufacturer of IS 800 compliant solar panel mounting structures and solar lighting poles.',
  });

  const { openQuoteModal } = useModals();

  const breadcrumbs = [{ label: 'About Us' }];

  return (
    <div>
      <PageHero
        title="About Shivaa Engineering Works"
        subtitle="Coimbatore's trusted manufacturer and service provider for industrial solar lighting and module mounting structures since 2009."
        breadcrumbItems={breadcrumbs}
      />

      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Pioneering Industrial Solar Engineering in Coimbatore
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Founded in 2009 in Chinnavedampatty, Coimbatore (Tamil Nadu), <strong>Shivaa Engineering Works</strong> has established itself as a premier industrial manufacturer specializing in solar lighting poles, module support structures, high mast lighting towers, and turnkey solar installations.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                We combine structural engineering design with modern CNC metal fabrication and hot-dip galvanizing technology. Our product range caters to rural Gram Panchayats, state highway infrastructure, industrial factory campuses, and commercial solar projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">15+ Years Track Record</h4>
                    <p className="text-xs text-slate-500">Established in 2009 in Coimbatore</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <Factory className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Manufacturing Plant</h4>
                    <p className="text-xs text-slate-500">Chinnavedampatty, Coimbatore</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80"
                  alt="Shivaa Engineering Works Solar Structure Facility"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6 bg-slate-900 text-white space-y-2">
                  <h3 className="font-bold text-lg text-white">Manufacturing Standards</h3>
                  <ul className="text-xs text-slate-300 space-y-1.5">
                    {COMPANY_CONFIG.manufacturing.standards.map((std, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{std}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Technical Excellence"
            title="Our Engineering Capabilities"
            subtitle="Factual manufacturing capabilities supporting solar projects across Tamil Nadu and India."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit border border-amber-200">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Precision Pole Fabrication</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manufacturing single-arm, double-arm, tubular swaged poles, and octagonal tapered poles in standard heights from 3 meters to 12 meters with custom anchor flanges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit border border-amber-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Module Mounting Structures</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Engineering rooftop (1kW to 1MW) and ground-mounted solar structural framing compliant with IS 800 code, rated for wind speeds up to 150 km/h.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit border border-amber-200">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Hot-Dip Galvanizing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Applying uniform zinc coating exceeding 80 microns thickness to safeguard steel structures against outdoor corrosion, rain, and humidity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-2xl font-bold text-amber-400">Verified Business Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
              <div className="space-y-2">
                <div>
                  <span className="font-semibold text-slate-400 block text-xs uppercase">Company Name</span>
                  <span className="text-white font-bold">{COMPANY_CONFIG.name}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-400 block text-xs uppercase">Year of Establishment</span>
                  <span className="text-white font-bold">{COMPANY_CONFIG.establishedYear}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-400 block text-xs uppercase">Business Nature</span>
                  <span className="text-white font-bold">Manufacturer & Service Provider</span>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <span className="font-semibold text-slate-400 block text-xs uppercase">Factory & Office Address</span>
                  <span className="text-white font-bold">{COMPANY_CONFIG.location.address}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-400 block text-xs uppercase">Primary Contact</span>
                  <span className="text-amber-400 font-bold">{COMPANY_CONFIG.contact.phonePrimary}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => openQuoteModal()}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Contact Engineering Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
