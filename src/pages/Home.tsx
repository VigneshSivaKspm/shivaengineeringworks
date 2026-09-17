import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { EngineeringCapabilities } from '../components/home/EngineeringCapabilities';
import { ApplicationsSection } from '../components/home/ApplicationsSection';
import { useSEO } from '../utils/seo';
import { getOrganizationSchema } from '../utils/structuredData';
import { useModals } from '../components/layout/AppLayout';
import { Send, PhoneCall } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const Home: React.FC = () => {
  useSEO({
    title: 'Shivaa Engineering Works | Solar Lighting Solutions & Mounting Structures Coimbatore',
    description: 'Leading manufacturer of Solar Lighting Solutions, Solar Street Light Poles, High Mast Towers, and Solar Panel Mounting Structures in Coimbatore, Tamil Nadu.',
    keywords: 'Solar Lighting Solutions, Solar Street Light Pole, High Mast Pole, Solar Panel Mounting Structure, Coimbatore, Shivaa Engineering Works',
  });

  const { openQuoteModal } = useModals();
  const orgSchema = getOrganizationSchema();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <Hero />
      <TrustStrip />
      <EngineeringCapabilities />
      <ApplicationsSection />

      <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Direct Manufacturer Quotes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Planning a Commercial Solar Lighting or Structural Project?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Get technical consultation, CAD layout assistance, and factory direct quotes from our engineering team in Coimbatore.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl text-sm transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Request Custom Quote</span>
            </button>
            <a
              href={`tel:${COMPANY_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition-colors border border-slate-700 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call Us: {COMPANY_CONFIG.contact.phonePrimary}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
