import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Products } from './pages/Products';
import { CategoryDetail } from './pages/CategoryDetail';
import { ProductDetail } from './pages/ProductDetail';
import { SolarLightingSolutions } from './pages/SolarLightingSolutions';
import { Services } from './pages/Services';
import { NotFound } from './pages/NotFound';

// Helper component to reset scroll position on route navigation
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/solar-lighting-solutions" element={<SolarLightingSolutions />} />
          <Route path="products/:categorySlug" element={<CategoryDetail />} />
          <Route path="products/:categorySlug/:slug" element={<ProductDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
