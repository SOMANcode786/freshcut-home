import ProductCard from './ProductCard';

export default function ProductGrid({ products = [], loading = false, error = null, onRetry }) {
  if (error) {
    return (
      <div className="my-8 rounded-2xl bg-red-50 p-6 text-center text-red-700 shadow-sm border border-red-200" role="alert">
        <p className="text-lg font-bold">Unable to load fresh cuts</p>
        <p className="mt-1 text-sm">{error}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-4 rounded-xl bg-red-600 px-5 py-2 font-bold text-white transition hover:bg-red-700 cursor-pointer"
          >
            Try Again
          </button>
        )}
      </div>
    );
  }

  if (loading) {
    return (
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
    );
  }

  if (!products.length) {
    return (
      <div className="my-12 text-center p-8 rounded-2xl bg-slate-50 border border-slate-200">
        <span className="text-4xl">🥬</span>
        <h3 className="mt-3 text-xl font-bold text-slate-800">No matching products found</h3>
        <p className="mt-1 text-sm text-slate-500">Try adjusting your search terms or category filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
