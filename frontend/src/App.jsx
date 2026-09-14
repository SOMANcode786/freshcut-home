import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import MarketPricePopup from './components/MarketPricePopup';
import SeoContent from './components/SeoContent';
import ShopPage from './pages/ShopPage';

// Lazy-loaded route components for bundle optimization
const AllProductsPage = lazy(() => import('./pages/AllProductsPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LoadingFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center p-8">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-700" />
        <span className="text-sm font-semibold text-slate-600">Loading fresh content…</span>
      </div>
    </div>
  );
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <AdminPage />
      </Suspense>
    );
  }

  return (
    <CartProvider>
      <ScrollToTop />
      <Header setCartOpen={setCartOpen} />
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
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
