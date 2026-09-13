export default function ProductSearch({ value, onChange, placeholder = 'Search vegetables…' }) {
  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        className="field w-full pr-9 text-sm focus-visible:ring-2 focus-visible:ring-forest"
        aria-label="Search vegetables by English or Urdu name"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 font-bold text-xs cursor-pointer"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
