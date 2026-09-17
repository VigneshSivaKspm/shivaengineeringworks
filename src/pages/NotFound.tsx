import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Grid, AlertTriangle } from 'lucide-react';
import { useSEO } from '../utils/seo';

export const NotFound: React.FC = () => {
  useSEO({
    title: '404 Page Not Found | Shivaa Engineering Works',
    description: 'The requested page could not be found.',
  });

  return (
    <div className="min-h-[70vh] bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/30">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Error 404</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Page Not Found</h1>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            The page or product specification you are looking for may have been moved, renamed, or is unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <Home className="w-4 h-4" />
            <span>Back Home</span>
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs transition-colors border border-slate-700 flex items-center justify-center gap-1.5"
          >
            <Grid className="w-4 h-4 text-amber-400" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
