import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import MarketPricePopup from './components/MarketPricePopup';
import SeoContent from './components/SeoContent';
import ShopPage from './pages/ShopPage';
import AllProductsPage from './pages/AllProductsPage';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return <AdminPage />;
  }

  return (
    <CartProvider>
      <ScrollToTop />
      <Header setCartOpen={setCartOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ShopPage />
              <SeoContent />
            </>
          }
        />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products/:id/:slug" element={<ProductPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <MarketPricePopup />
      <footer className="flex flex-col justify-between gap-4 bg-[#0c281d] px-8 py-8 text-slate-300 md:flex-row">
        <span>FreshCut Home</span>
        <a href="https://wa.me/923112605525">WhatsApp: 0311-2605525</a>
        <span>© 2026 FreshCut Home</span>
      </footer>
    </CartProvider>
  );
}
