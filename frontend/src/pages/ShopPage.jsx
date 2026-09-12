import { useEffect, useMemo, useState } from 'react';
import { api } from '../services/api';
import ProductCard from '../components/ProductCard';

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

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

  const cats = ['All', ...new Set(products.map(p => p.cat))];
  const list = useMemo(
    () =>
      products.filter(
        p =>
          p.active !== false &&
          (category === 'All' || p.cat === category) &&
          `${p.name} ${p.urdu}`.toLowerCase().includes(query.toLowerCase())
      ),
    [products, query, category]
  );

  return (
    <>
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
          <a href="#products" className="btn mt-8 inline-block bg-lime text-forest">
            Shop fresh cuts →
          </a>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-widest text-leaf">Today’s fresh picks</p>
            <h2 className="font-serif text-4xl font-bold md:text-6xl">What are you cooking?</h2>
          </div>
          <input
            className="field max-w-sm"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search vegetables…"
          />
        </div>

        <div className="my-7 flex flex-wrap gap-2">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 font-semibold ${
                category === c ? 'bg-forest text-white' : 'border border-forest text-forest'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {error && (
          <div className="my-8 rounded-2xl bg-red-50 p-6 text-center text-red-700 shadow-sm border border-red-200" role="alert">
            <p className="text-lg font-bold">Unable to load fresh cuts</p>
            <p className="mt-1 text-sm">{error}</p>
            <button
              onClick={fetchProducts}
              className="mt-4 rounded-xl bg-red-600 px-5 py-2 font-bold text-white transition hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" aria-label="Loading products skeleton">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="panel overflow-hidden animate-pulse">
                <div className="h-48 w-full bg-slate-200" />
                <div className="bg-[#302b3b] p-4 space-y-3">
                  <div className="h-3 w-16 bg-slate-600 rounded" />
                  <div className="h-5 w-3/4 bg-slate-600 rounded" />
                  <div className="h-4 w-1/2 bg-slate-700 rounded" />
                  <div className="h-6 w-20 bg-slate-600 rounded" />
                  <div className="flex gap-2">
                    <div className="h-10 w-full bg-slate-700 rounded" />
                    <div className="h-10 w-16 bg-slate-600 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !error && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {list.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )
        )}
      </section>
    </>
  );
}
