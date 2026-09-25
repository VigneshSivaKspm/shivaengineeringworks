import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PhoneCall, Menu, MapPin, Clock } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenCallback: () => void;
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuote,
  onOpenCallback,
  onOpenMobileMenu,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Sticky header background transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar (Desktop only) */}
      <div className="hidden lg:block bg-slate-100 text-slate-700 border-b border-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>{COMPANY_CONFIG.contact.workingHours}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-amber-700 hover:text-amber-800 transition-colors font-bold"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
              <span>{COMPANY_CONFIG.contact.phonePrimary}</span>
            </a>
            <button
              onClick={onOpenCallback}
              className="text-slate-600 hover:text-slate-900 transition-colors underline underline-offset-2 font-medium"
            >
              Request Call Back
            </button>
          </div>
        </div>
      </div>

      {/* Main Responsive Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
          >
            <img
              src="/images/shivaa-logo.png"
              alt="Shivaa Engineering Works Logo"
              className="h-11 w-auto object-contain rounded-xl bg-slate-50 border border-slate-200 p-1 shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                SHIVAA <span className="text-amber-600 font-light">ENGINEERING</span>
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-widest font-bold mt-0.5">
                Solar & Pole Solutions • Coimbatore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'text-amber-700 bg-amber-50 font-bold border border-amber-200/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'text-amber-700 bg-amber-50 font-bold border border-amber-200/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'text-amber-700 bg-amber-50 font-bold border border-amber-200/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'text-amber-700 bg-amber-50 font-bold border border-amber-200/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'text-amber-700 bg-amber-50 font-bold border border-amber-200/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Actions & Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg shadow-sm"
            >
              Quote
            </button>

            <button
              onClick={onOpenMobileMenu}
              className="p-2 text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
