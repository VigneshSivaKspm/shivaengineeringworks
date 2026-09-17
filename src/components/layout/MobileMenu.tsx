import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Sun, ChevronRight, PhoneCall, Mail, MapPin } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  // Body scroll lock and Escape key listener
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products Catalogue', path: '/products' },
    { name: 'Solar Lighting Solutions', path: '/products/solar-lighting-solutions', highlight: true },
    { name: 'Engineering Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden bg-slate-950/80 backdrop-blur-md transition-opacity animate-fade-in"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile Navigation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-slate-900 text-white shadow-2xl flex flex-col border-l border-slate-800">
        {/* Header */}
        <div className="p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Sun className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-tight text-white leading-none">
                SHIVAA
              </span>
              <span className="text-[10px] text-amber-400 uppercase font-semibold">
                Engineering Works
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto p-5 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : link.highlight
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </NavLink>
          ))}
        </div>

        {/* CTA & Company Contact Footer */}
        <div className="p-5 border-t border-slate-800 bg-slate-950/60 space-y-4">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
          >
            <span>Get Best Quote</span>
          </button>

          <div className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
            <a
              href={`tel:${COMPANY_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_CONFIG.contact.phonePrimary}</span>
            </a>
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_CONFIG.contact.emailPrimary}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span className="leading-tight">Chinnavedampatty, Coimbatore - 641049</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
