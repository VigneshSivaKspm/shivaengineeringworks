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
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shivaa Engineering Works on WhatsApp"
      className={`fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-xl hover:shadow-emerald-600/40 transition-all duration-300 flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${className}`}
    >
      <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-300 text-xs font-bold uppercase tracking-wider">
        WhatsApp Inquiry
      </span>
    </a>
  );
};
