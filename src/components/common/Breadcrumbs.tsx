import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2 px-1">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-400">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded px-1"
          >
            <Home className="w-3.5 h-3.5 text-amber-500" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
              {isLast || !item.path ? (
                <span
                  className="font-medium text-amber-400 truncate max-w-[200px] sm:max-w-xs"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded px-1 truncate max-w-[150px] sm:max-w-xs"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
