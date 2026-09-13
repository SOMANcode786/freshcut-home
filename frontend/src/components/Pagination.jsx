export default function Pagination({ currentPage, totalPages, onPageChange, scrollToId = 'products' }) {
  if (totalPages <= 0) return null;

  const handlePageClick = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        end = 4;
      } else if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
      }

      if (start > 2) pages.push('...');
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <nav className="my-10 flex flex-wrap items-center justify-center gap-2" aria-label="Product pagination navigation">
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage <= 1}
        className="flex items-center gap-1 rounded-xl border border-forest px-4 py-2 text-sm font-bold text-forest transition hover:bg-forest hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-forest focus-visible:outline-2 focus-visible:outline-forest cursor-pointer"
        aria-label="Go to previous page"
      >
        ← Prev
      </button>

      {/* Numbered Page Buttons */}
      <div className="flex items-center gap-1.5">
        {getPageNumbers().map((p, idx) =>
          typeof p === 'number' ? (
            <button
              key={p}
              onClick={() => handlePageClick(p)}
              aria-current={currentPage === p ? 'page' : undefined}
              aria-label={`Page ${p}`}
              className={`h-10 w-10 rounded-xl text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-forest cursor-pointer ${
                currentPage === p
                  ? 'bg-forest text-white shadow-xs'
                  : 'border border-forest/30 text-forest hover:bg-forest/10'
              }`}
            >
              {p}
            </button>
          ) : (
            <span key={`ellipsis-${idx}`} className="px-1 text-slate-400 font-bold">
              …
            </span>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="flex items-center gap-1 rounded-xl border border-forest px-4 py-2 text-sm font-bold text-forest transition hover:bg-forest hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-forest focus-visible:outline-2 focus-visible:outline-forest cursor-pointer"
        aria-label="Go to next page"
      >
        Next →
      </button>
    </nav>
  );
}
