import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../services/api';
import Seo from '../components/Seo';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import ProductSearch from '../components/ProductSearch';
import ProductSort from '../components/ProductSort';
import { calculatePriceForWeight } from '../utils/weightUtils';

export default function AllProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Read state from URL query parameters for SEO & direct shareable links
  const categoryParam = searchParams.get('category') || 'All';
  const searchParam = searchParams.get('search') || '';
  const sortParam = searchParams.get('sort') || 'featured';

  function fetchProducts() {
    setLoading(true);
    setError(null);
    api('/products')
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Failed to load products. Please try again.');
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // Update query params helper
  const updateParams = (newParams) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (!value || value === 'All' || value === 'featured') {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    setSearchParams(params, { replace: true });
  };

  const categories = useMemo(() => {
    const set = new Set(products.map(p => p.cat).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [products]);

  // Filter, search, and sort logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter(
      p =>
        p.active !== false &&
        (categoryParam === 'All' || p.cat === categoryParam) &&
        `${p.name} ${p.urdu}`.toLowerCase().includes(searchParam.toLowerCase())
    );

    if (sortParam === 'price-asc') {
      result.sort((a, b) => {
        const pA = calculatePriceForWeight(a.prices, Object.keys(a.prices)[0] || '250g');
        const pB = calculatePriceForWeight(b.prices, Object.keys(b.prices)[0] || '250g');
        return pA - pB;
      });
    } else if (sortParam === 'price-desc') {
      result.sort((a, b) => {
        const pA = calculatePriceForWeight(a.prices, Object.keys(a.prices)[0] || '250g');
        const pB = calculatePriceForWeight(b.prices, Object.keys(b.prices)[0] || '250g');
        return pB - pA;
      });
    } else if (sortParam === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [products, categoryParam, searchParam, sortParam]);

  // Filter change handlers
  const handleCategoryChange = (cat) => {
    updateParams({ category: cat });
  };

  const handleSearchChange = (query) => {
    updateParams({ search: query });
  };

  const handleSortChange = (sort) => {
    updateParams({ sort });
  };

  const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');
  const canonicalUrl = `${siteUrl}/products`;

  return (
    <>
      <Seo
        title="All Fresh-Cut Vegetables in Karachi | FreshCut Home"
        description="Browse our complete catalogue of clean, hygienically pre-cut vegetables ready for your kitchen. Fast daily delivery across Karachi."
        canonicalUrl={canonicalUrl}
        type="website"
      />

      {/* Hero Banner for All Products */}
      <section className="bg-forest py-12 px-6 text-white text-center">
        <div className="mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-widest text-lime text-xs sm:text-sm">
            Complete Product Catalogue
          </p>
          <h1 className="mt-2 font-serif text-4xl sm:text-6xl font-bold">
            All Fresh Cuts, <span className="text-lime">Ready to Cook.</span>
          </h1>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-xl mx-auto">
            Hygienically washed, cut, and portioned daily for homes across Karachi.
          </p>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <main id="catalog-section" className="mx-auto max-w-7xl px-5 py-12">
        {/* Controls Bar: Search & Sort */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-6">
          <ProductSearch value={searchParam} onChange={handleSearchChange} />
          
          <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-end">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Showing all {filteredAndSortedProducts.length} items
            </span>
            <ProductSort value={sortParam} onChange={handleSortChange} />
          </div>
        </div>

        {/* Category Pills */}
        <ProductFilters
          categories={categories}
          selectedCategory={categoryParam}
          onSelectCategory={handleCategoryChange}
        />

        {/* Complete Product Grid (All 50 Products on One Page) */}
        <ProductGrid
          products={filteredAndSortedProducts}
          loading={loading}
          error={error}
          onRetry={fetchProducts}
        />
      </main>
    </>
  );
}
