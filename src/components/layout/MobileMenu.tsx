import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, ChevronRight, PhoneCall, Mail, MapPin } from 'lucide-react';
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
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden bg-slate-900/60 backdrop-blur-md transition-opacity animate-fade-in"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile Navigation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white text-slate-900 shadow-2xl flex flex-col border-l border-slate-200">
        {/* Header */}
        <div className="p-5 flex items-center justify-between border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/shivaa-logo.png"
              alt="Shivaa Engineering Works Logo"
              className="h-9 w-auto object-contain rounded-lg bg-white p-1 border border-slate-200"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-tight text-slate-900 leading-none">
                SHIVAA
              </span>
              <span className="text-[10px] text-amber-700 uppercase font-bold">
                Engineering Works
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
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
                `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`
              }
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </NavLink>
          ))}
        </div>

        {/* CTA & Company Contact Footer */}
        <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-4">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
          >
            <span>Get Best Quote</span>
          </button>

          <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-200">
            <a
              href={`tel:${COMPANY_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 hover:text-amber-700 transition-colors font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
              <span>{COMPANY_CONFIG.contact.phonePrimary}</span>
            </a>
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <span>{COMPANY_CONFIG.contact.emailPrimary}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span className="leading-tight">Chinnavedampatty, Coimbatore - 641049</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
