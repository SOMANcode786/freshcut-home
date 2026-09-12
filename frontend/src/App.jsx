import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import SeoContent from './components/SeoContent';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return <AdminPage />;
  }

  return (
    <CartProvider>
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
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <footer className="flex flex-col justify-between gap-4 bg-[#0c281d] px-8 py-8 text-slate-300 md:flex-row">
        <span>FreshCut Home</span>
        <a href="https://wa.me/923112605525">WhatsApp: 0311-2605525</a>
        <span>© 2026 FreshCut Home</span>
      </footer>
    </CartProvider>
  );
}
