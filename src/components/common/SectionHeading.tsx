import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
            dark
              ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
              : 'bg-amber-100 text-amber-900 border border-amber-300/60'
          }`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {/* Decorative Amber Accent Line */}
      <div
        className={`h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-3 ${
          centered ? 'mx-auto' : ''
        }`}
      ></div>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base max-w-3xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${dark ? 'text-slate-300' : 'text-slate-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
