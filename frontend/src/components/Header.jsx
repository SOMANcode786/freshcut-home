import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Icon({ name, ...props }) {
  const paths = {
    bag: <><path d="M6 7h12l2 14H4L6 7Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></>,
    truck: <><path d="M3 5h11v12H3zM14 9h4l3 4v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <path d="m6 6 12 12M18 6 6 18"/>,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5"/>,
  };
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {paths[name]}
    </svg>
  );
}

export default function Header({ setCartOpen }) {
  const { cart } = useCart();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    if (!menuOpen) return;
    const close = event => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menuOpen]);

  function openBag() {
    setMenuOpen(false);
    setCartOpen(true);
  }

  const isHome = location.pathname === '/';

  return (
    <>
      <div className="fresh-announcement">
        <span><Icon name="truck"/> Free delivery across Karachi</span>
        <span className="fresh-announcement-detail">Freshly prepared. Delivered tomorrow. <span className="fresh-announcement-dot">•</span> Order before 12 AM</span>
      </div>
      <header className="fresh-header">
        <div className="fresh-nav">
          <Link to="/" onClick={() => setMenuOpen(false)} className="fresh-brand" aria-label="FreshCut Home — home">
            <span className="fresh-logo"><img src="/assets/freshcut-logo.png" alt="FreshCut Logo"/></span>
            <span><span className="fresh-brand-name">FreshCut<span> Home</span></span><span className="fresh-brand-tagline">FRESH CUTS. HAPPY KITCHENS.</span></span>
          </Link>
          <nav className="fresh-desktop-links" aria-label="Main navigation">
            <Link to="/" className={isHome ? 'fresh-nav-link is-active' : 'fresh-nav-link'} aria-current={isHome ? 'page' : undefined}>Home</Link>
            <a className="fresh-nav-link" href="/#products">Shop fresh cuts</a>
            <a className="fresh-nav-link" href="https://wa.me/923112605525">Contact us <Icon name="arrow" width="15" height="15"/></a>
          </nav>
          <div className="fresh-nav-actions">
            <div className="fresh-location"><Icon name="pin"/><span><small>Delivering in</small><strong>Karachi</strong></span></div>
            <button className="fresh-bag" onClick={openBag} aria-label={`Open shopping bag, ${count} items`}><Icon name="bag"/><span className="fresh-bag-label">My bag</span><span className="fresh-bag-count">{count}</span></button>
            <button className="fresh-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="fresh-mobile-menu" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}><Icon name={menuOpen ? 'close' : 'menu'}/></button>
          </div>
        </div>
        {menuOpen && (
          <nav id="fresh-mobile-menu" className="fresh-mobile-menu" aria-label="Mobile navigation">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home <Icon name="arrow"/></Link>
            <a href="/#products" onClick={() => setMenuOpen(false)}>Shop fresh cuts <Icon name="arrow"/></a>
            <a href="https://wa.me/923112605525" onClick={() => setMenuOpen(false)}>Contact us <Icon name="arrow"/></a>
            <p><Icon name="pin"/> Freshly prepared for Karachi</p>
          </nav>
        )}
      </header>
    </>
  );
}
