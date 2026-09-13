export default function ProductFilters({ categories = [], selectedCategory = 'All', onSelectCategory }) {
  return (
    <div className="my-6 flex flex-wrap gap-2" role="group" aria-label="Product categories">
      {categories.map(cat => {
        const isSelected = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`rounded-full px-4 py-2 font-semibold text-sm transition-all focus-visible:outline-2 focus-visible:outline-forest cursor-pointer ${
              isSelected
                ? 'bg-forest text-white shadow-xs'
                : 'border border-forest/30 text-forest hover:bg-forest/10 hover:border-forest'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
