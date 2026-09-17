import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackText?: string;
  className?: string;
  aspectRatio?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackText = 'Shivaa Engineering Solutions',
  className = '',
  aspectRatio = 'aspect-video',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-slate-800 ${aspectRatio} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
          {...props}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-4 text-center border border-slate-700/50">
          <ImageOff className="w-8 h-8 text-amber-500/70 mb-2" />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
            {fallbackText}
          </span>
          <span className="text-[10px] text-slate-500 mt-1">Shivaa Engineering Works</span>
        </div>
      )}

      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-slate-800/80 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};
