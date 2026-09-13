import { Link } from 'react-router-dom';

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

export default function MobileNavigation({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <nav id="fresh-mobile-menu" className="fresh-mobile-menu" aria-label="Mobile navigation">
      <Link to="/" onClick={onClose}>
        Home <ArrowIcon />
      </Link>
      <Link to="/products" onClick={onClose}>
        All Products <ArrowIcon />
      </Link>
      <a href="/#how-it-works" onClick={onClose}>
        How It Works <ArrowIcon />
      </a>
      <a href="https://wa.me/923112605525" target="_blank" rel="noopener noreferrer" onClick={onClose}>
        Contact / WhatsApp <ArrowIcon />
      </a>
      <Link to="/admin" onClick={onClose}>
        Admin Workspace <ArrowIcon />
      </Link>
      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-300 border-t border-white/10 pt-4">
        <PinIcon /> Freshly prepared for Karachi
      </p>
    </nav>
  );
}
