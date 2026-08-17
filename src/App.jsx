import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/portafolio" element={<PortfolioPage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/privacidad" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (
    <ThemeProvider>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <SmoothScroll>
          <Navbar />
          <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
              <AnimatedRoutes />
            </div>
          </main>
          <Footer />
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
