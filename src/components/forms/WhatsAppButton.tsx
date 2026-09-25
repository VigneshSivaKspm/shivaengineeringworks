import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

interface WhatsAppButtonProps {
  productName?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  productName,
  className = '',
}) => {
  const whatsappNumber = COMPANY_CONFIG.contact.whatsappNumber;

  if (!whatsappNumber) return null;

  const message = productName
    ? `Hello Shivaa Engineering Works, I would like to inquire about "${productName}". Please share pricing and technical specifications.`
    : `Hello Shivaa Engineering Works, I am interested in your Solar Lighting Solutions and Mounting Structures. Please share details.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shivaa Engineering Works on WhatsApp"
        className="relative group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 border border-emerald-400/40"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
          <MessageCircle className="w-5 h-5 text-white fill-white/20" />
        </div>

        {/* Floating Label Text */}
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-100 leading-none">
            Chat on WhatsApp
          </span>
          <span className="text-xs font-extrabold text-white tracking-tight mt-0.5">
            {COMPANY_CONFIG.contact.whatsappFormatted}
          </span>
        </div>
      </a>
    </div>
  );
};
