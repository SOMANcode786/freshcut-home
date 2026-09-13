export default function ProductSort({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="product-sort-select" className="text-xs font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">
        Sort by:
      </label>
      <select
        id="product-sort-select"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="field py-2 text-sm font-semibold text-slate-800 bg-white cursor-pointer focus-visible:ring-2 focus-visible:ring-forest"
        aria-label="Sort products list"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A–Z</option>
      </select>
    </div>
  );
}
