import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Send, CheckCircle2 } from 'lucide-react';
import { useModals } from '../layout/AppLayout';

export const Hero: React.FC = () => {
  const { openQuoteModal, openCallbackModal } = useModals();

  return (
    <section className="relative hero-gradient text-white py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-800">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 tracking-wider uppercase backdrop-blur-md">
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Coimbatore’s Premier Solar Engineering Manufacturer</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Engineering Smarter <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                Solar & Pole Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Shivaa Engineering Works manufactures industrial-grade Solar Lighting Systems, Single & Double Arm Street Light Poles, High Mast Towers, and IS 800 compliant Solar Panel Mounting Structures since 2009.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>IS 800 Steel Design</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Hot-Dip Galvanized</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Coimbatore Facility</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/products/solar-lighting-solutions"
                className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl text-sm transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => openQuoteModal()}
                className="px-7 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all border border-slate-700/80 flex items-center justify-center gap-2 hover:border-amber-400/50"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Request a Quote</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl p-2 dark-glass-panel">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial Solar Lighting Solution Pole Installation"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider block">
                      Featured Industrial Series
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5">
                      Single & Double Arm Solar Street Poles
                    </h3>
                  </div>
                  <button
                    onClick={() => openCallbackModal('Solar Street Light Poles')}
                    className="p-2 bg-amber-500 text-slate-950 rounded-lg text-xs font-bold hover:bg-amber-400 transition-colors"
                  >
                    Callback
                  </button>
                </div>
              </div>

              <div className="p-4 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 bg-slate-950/60 rounded-xl border border-slate-800">
                  <span className="font-extrabold text-amber-400 text-sm block">2009</span>
                  <span className="text-[10px] text-slate-400 uppercase">Established</span>
                </div>
                <div className="p-2 bg-slate-950/60 rounded-xl border border-slate-800">
                  <span className="font-extrabold text-amber-400 text-sm block">IS 800</span>
                  <span className="text-[10px] text-slate-400 uppercase">Design Code</span>
                </div>
                <div className="p-2 bg-slate-950/60 rounded-xl border border-slate-800">
                  <span className="font-extrabold text-amber-400 text-sm block">100%</span>
                  <span className="text-[10px] text-slate-400 uppercase">Galvanized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
