import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import ProductSearch from '../components/ProductSearch';
import Pagination from '../components/Pagination';

const HOME_PAGE_SIZE = 8;

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

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

  const categories = useMemo(() => {
    const set = new Set(products.map(p => p.cat).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [products]);

  // Filter products
  const filteredList = useMemo(
    () =>
      products.filter(
        p =>
          p.active !== false &&
          (category === 'All' || p.cat === category) &&
          `${p.name} ${p.urdu}`.toLowerCase().includes(query.toLowerCase())
      ),
    [products, query, category]
  );

  // Pagination for homepage
  const totalProducts = filteredList.length;
  const totalPages = Math.ceil(totalProducts / HOME_PAGE_SIZE) || 1;
  const activePage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedList = useMemo(() => {
    const start = (activePage - 1) * HOME_PAGE_SIZE;
    return filteredList.slice(start, start + HOME_PAGE_SIZE);
  }, [filteredList, activePage]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (q) => {
    setQuery(q);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[560px] overflow-hidden bg-forest">
        <img
          src="/assets/hero.png"
          alt="FreshCut vegetables background hero"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 text-white">
          <p className="font-bold uppercase tracking-[.2em] text-lime">
            Prepared fresh every morning
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-6xl font-bold md:text-8xl">
            Less chopping.<br />
            <span className="text-lime">More living.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-green-50">
            Clean, hygienically cut vegetables—ready for your karahi.
          </p>
          <a href="#products" className="btn mt-8 inline-block bg-lime text-forest font-bold">
            Shop fresh cuts →
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-slate-50 py-16 px-6 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">Hassle-Free Cooking</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">How FreshCut Works</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">From farm-fresh selection to your kitchen doorstep in 3 simple steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl font-bold text-emerald-800 mb-4">1</span>
              <h3 className="text-lg font-bold text-slate-800">Choose Your Cut & Portion</h3>
              <p className="text-slate-600 text-sm mt-2">Select your vegetables, custom pack weights (from 250g), and preferred cutting style.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl font-bold text-emerald-800 mb-4">2</span>
              <h3 className="text-lg font-bold text-slate-800">Fresh Morning Prep</h3>
              <p className="text-slate-600 text-sm mt-2">Our kitchen team washes, peels, and cuts your vegetables fresh every morning under strict hygiene.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl font-bold text-emerald-800 mb-4">3</span>
              <h3 className="text-lg font-bold text-slate-800">Doorstep Delivery in Karachi</h3>
              <p className="text-slate-600 text-sm mt-2">Delivered to your home in temperature-safe, food-grade packaging ready to cook.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-widest text-leaf">Today’s fresh picks</p>
            <h2 className="font-serif text-4xl font-bold md:text-6xl">What are you cooking?</h2>
          </div>
          <ProductSearch value={query} onChange={handleSearchChange} />
        </div>

        <ProductFilters
          categories={categories}
          selectedCategory={category}
          onSelectCategory={handleCategoryChange}
        />

        <ProductGrid
          products={paginatedList}
          loading={loading}
          error={error}
          onRetry={fetchProducts}
        />

        <Pagination
          currentPage={activePage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          scrollToId="products"
        />

        {/* View All Products CTA Button */}
        <div className="mt-12 text-center border-t border-slate-200 pt-8">
          <p className="text-slate-600 font-medium mb-3">Explore our complete range of hygienically cut vegetables</p>
          <Link
            to="/products"
            className="btn inline-flex items-center gap-2 bg-forest text-white px-8 py-4 rounded-2xl text-base font-bold shadow-md hover:bg-emerald-950 transition"
          >
            <span>View All {products.length || 47} Products</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
