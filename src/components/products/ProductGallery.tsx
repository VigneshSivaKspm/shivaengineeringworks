import React, { useState } from 'react';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const displayImages = images.length > 0 ? images : ['/images/ss05-single-arm.jpg'];

  return (
    <div className="space-y-4">
      {/* Main Large Product Image */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md">
        <ImageWithFallback
          src={displayImages[selectedImageIndex]}
          alt={`${productName} - View ${selectedImageIndex + 1}`}
          aspectRatio="aspect-[4/3]"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Selector */}
      {displayImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={`relative rounded-xl overflow-hidden w-20 h-20 flex-shrink-0 border-2 transition-all ${
                selectedImageIndex === idx
                  ? 'border-amber-500 scale-105 shadow-md ring-2 ring-amber-500/30'
                  : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-400'
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
