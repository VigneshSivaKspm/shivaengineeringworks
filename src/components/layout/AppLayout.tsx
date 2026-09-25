import React, { useState, createContext, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileMenu } from './MobileMenu';
import { QuoteModal } from '../forms/QuoteModal';
import { CallbackModal } from '../forms/CallbackModal';
import { WhatsAppButton } from '../forms/WhatsAppButton';

// Global Modal Context for triggering Quote/Callback from any product or page
interface ModalContextType {
  openQuoteModal: (productName?: string, productSlug?: string) => void;
  openCallbackModal: (productInterest?: string) => void;
}

const ModalContext = createContext<ModalContextType>({
  openQuoteModal: () => {},
  openCallbackModal: () => {},
});

export const useModals = () => useContext(ModalContext);

export const AppLayout: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [selectedProductName, setSelectedProductName] = useState<string>('');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string>('');
  const [selectedProductInterest, setSelectedProductInterest] = useState<string>('');

  const openQuoteModal = (productName?: string, productSlug?: string) => {
    setSelectedProductName(productName || '');
    setSelectedProductSlug(productSlug || '');
    setIsQuoteOpen(true);
  };

  const openCallbackModal = (productInterest?: string) => {
    setSelectedProductInterest(productInterest || '');
    setIsCallbackOpen(true);
  };

  return (
    <ModalContext.Provider value={{ openQuoteModal, openCallbackModal }}>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-500 selection:text-slate-950">
        <Header
          onOpenQuote={() => openQuoteModal()}
          onOpenCallback={() => openCallbackModal()}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />

        {/* Global Modals & Floating Actions */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          productName={selectedProductName}
          productSlug={selectedProductSlug}
        />

        <CallbackModal
          isOpen={isCallbackOpen}
          onClose={() => setIsCallbackOpen(false)}
          productInterest={selectedProductInterest}
        />

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onOpenQuote={() => openQuoteModal()}
        />

        <WhatsAppButton productName={selectedProductName} />
      </div>
    </ModalContext.Provider>
  );
};
