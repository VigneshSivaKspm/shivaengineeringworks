import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Column (2 cols width on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <img
                src="/images/shivaa-logo.png"
                alt="Shivaa Engineering Works Logo"
                className="h-11 w-auto object-contain rounded-xl bg-white p-1 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                  SHIVAA <span className="text-amber-400 font-light">ENGINEERING</span>
                </span>
                <span className="text-[10px] text-amber-400 uppercase tracking-widest font-semibold mt-1">
                  Works • Coimbatore, Tamil Nadu
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Established in 2009, Shivaa Engineering Works is a leading Coimbatore-based manufacturer specializing in IS 800 compliant Solar Panel Mounting Structures, High-Performance Solar Street Light Poles, Single & Double Arm Lighting assemblies, and turnkey solar energy systems.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-amber-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>IS 800 Compliant • Hot-Dip Galvanized • Made in India</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Factual Address & Contact Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Factory & Sales Office
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">{COMPANY_CONFIG.location.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-amber-400 font-semibold">
                  {COMPANY_CONFIG.contact.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.contact.emailPrimary}`} className="hover:text-amber-400">
                  {COMPANY_CONFIG.contact.emailPrimary}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Location Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <span className="text-white font-semibold">Shivaa Engineering Works</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Coimbatore, Tamil Nadu, India</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-amber-400 transition-colors">
              Direct Sales Inquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
