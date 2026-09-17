import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, PhoneCall, ChevronDown, Menu, MapPin, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { PRODUCT_CATEGORIES } from '../../data/categories';

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
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

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

  // Close dropdown on route change
  useEffect(() => {
    setIsProductsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar (Desktop only) */}
      <div className="hidden lg:block bg-slate-950 text-slate-300 border-b border-slate-800 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_CONFIG.contact.workingHours}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{COMPANY_CONFIG.contact.phonePrimary}</span>
            </a>
            <button
              onClick={onOpenCallback}
              className="text-slate-300 hover:text-white transition-colors underline underline-offset-2"
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
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-800'
            : 'bg-slate-900 py-4 border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-500/20 group-hover:bg-amber-400 transition-colors">
              <Sun className="w-6 h-6 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                SHIVAA <span className="text-amber-400 font-light">ENGINEERING</span>
              </span>
              <span className="text-[11px] text-slate-400 uppercase tracking-widest font-bold mt-0.5">
                Solar & Pole Solutions • Coimbatore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'text-amber-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'text-amber-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${
                    isActive || location.pathname.startsWith('/products')
                      ? 'text-amber-400 bg-slate-800/80'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                  }`
                }
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </NavLink>

              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-3 grid gap-1.5 z-50 animate-fade-in backdrop-blur-xl">
                  <div className="px-3 py-1.5 border-b border-slate-800 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Product Categories
                  </div>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products/${cat.slug}`}
                      className="px-3 py-2.5 rounded-xl hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-amber-400 transition-colors flex items-center justify-between group"
                    >
                      <span>{cat.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-800 mt-1">
                    <Link
                      to="/products"
                      className="w-full py-2 px-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-bold rounded-xl flex items-center justify-between transition-colors"
                    >
                      <span>View Complete Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Specialized High Priority Link */}
            <NavLink
              to="/products/solar-lighting-solutions"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20'
                }`
              }
            >
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Solar Solutions</span>
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'text-amber-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'text-amber-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
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
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Actions & Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg shadow-md"
            >
              Quote
            </button>

            <button
              onClick={onOpenMobileMenu}
              className="p-2 text-slate-200 hover:text-white rounded-lg hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
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
