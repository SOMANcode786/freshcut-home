import { useEffect, useState } from 'react';
import { api } from '../services/api';
import './admin.css';

const statuses = ['New', 'Confirmed', 'Preparing', 'Out for delivery', 'Delivered', 'Cancelled'];
const money = value =>
  new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumFractionDigits: 0 }).format(value);

function Glyph({ kind = 'grid' }) {
  const paths = {
    grid: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
    bag: 'M5 7h14l2 14H3L5 7 M9 8V6a3 3 0 0 1 6 0v2',
    leaf: 'M20 4C9 2 3 8 5 15s15 7 15-11 M5 20 16 9',
    arrow: 'M4 12h16 M14 6l6 6-6 6',
    logout: 'M10 4H4v16h6 M10 12h11 M16 7l5 5-5 5',
    search: 'M21 21l-6-6 M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0',
    clock: 'M12 8v5l3 2 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0'
  };
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[kind] || paths.grid} />
    </svg>
  );
}

export default function AdminPage() {
  const [logged, setLogged] = useState(Boolean(localStorage.getItem('freshcut-token')));
  const [adminUser, setAdminUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('freshcut-user')) } catch { return null }
  });
  const [tab, setTab] = useState('orders');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState('');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [showPassword, setShowPassword] = useState(false);

  function failure(error) {
    if (error.status === 401) {
      localStorage.removeItem('freshcut-token');
      localStorage.removeItem('freshcut-user');
      setLogged(false);
      setAdminUser(null);
      setProducts([]);
      setOrders([]);
      setNotice({ error: true, text: 'Your session has expired. Please sign in again.' });
    } else {
      setNotice({ error: true, text: error.message || 'Unable to connect. Please try again.' });
    }
  }

  async function load() {
    setLoading(true);
    setNotice(null);
    try {
      const [p, o, u] = await Promise.all([
        api('/products'),
        api('/orders'),
        api('/auth/me').catch(() => null)
      ]);
      setProducts(p);
      setOrders(o);
      if (u?.user) {
        setAdminUser(u.user);
        localStorage.setItem('freshcut-user', JSON.stringify(u.user));
      }
    } catch (error) {
      failure(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (logged) load();
  }, [logged]);

  async function login(event) {
    event.preventDefault();
    setBusy('login');
    setNotice(null);
    try {
      const data = await api('/auth/login', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget)))
      });
      localStorage.setItem('freshcut-token', data.token);
      if (data.user) {
        localStorage.setItem('freshcut-user', JSON.stringify(data.user));
        setAdminUser(data.user);
      }
      setLogged(true);
    } catch (error) {
      setNotice({ error: true, text: error.message || 'Invalid email or password' });
    } finally {
      setBusy('');
    }
  }

  function logout() {
    localStorage.removeItem('freshcut-token');
    localStorage.removeItem('freshcut-user');
    setLogged(false);
    setAdminUser(null);
    setProducts([]);
    setOrders([]);
    setNotice(null);
    setQuery('');
    setFilter('All');
  }

  function switchTab(next) {
    setTab(next);
    setQuery('');
    setFilter('All');
    setNotice(null);
  }

  async function saveProduct(event, product) {
    event.preventDefault();
    setBusy(`product-${product.id}`);
    setNotice(null);
    try {
      const payload = {
        name: product.name,
        prices: product.prices,
        active: product.active,
        shortDescription: product.shortDescription || '',
        cutDescription: product.cutDescription || '',
        storageInstructions: product.storageInstructions || '',
        hygieneInformation: product.hygieneInformation || ''
      };

      const parseJsonField = (field, label) => {
        if (product[field] === undefined || product[field] === null) return;
        if (typeof product[field] === 'string') {
          if (!product[field].trim()) {
            payload[field] = null;
          } else {
            try {
              payload[field] = JSON.parse(product[field]);
            } catch {
              throw new Error(`Invalid JSON syntax in ${label}. Please enter valid JSON.`);
            }
          }
        } else {
          payload[field] = product[field];
        }
      };

      parseJsonField('nutritionSummary', 'Nutritional Overview');
      parseJsonField('nutrients', 'Nutrients List');
      parseJsonField('healthBenefits', 'Health Benefits');
      parseJsonField('cookingUses', 'Cooking Uses');
      parseJsonField('faq', 'FAQ List');

      const updated = await api(`/products/${product.id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload)
      });
      setProducts(items => items.map(p => (p.id === product.id ? updated : p)));
      setNotice({ text: `${updated.name} updated and saved successfully.` });
    } catch (error) {
      failure(error);
    } finally {
      setBusy('');
    }
  }

  async function updateStatus(id, status) {
    setBusy(`order-${id}`);
    setNotice(null);
    try {
      const updated = await api(`/orders/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status })
      });
      setOrders(items => items.map(o => (o.id === id ? updated : o)));
      setNotice({ text: 'Order status updated.' });
    } catch (error) {
      failure(error);
    } finally {
      setBusy('');
    }
  }

  function editProduct(id, changes) {
    setProducts(items => items.map(p => (p.id === id ? { ...p, ...changes } : p)));
  }

  const feedback = notice && (
    <div className={`admin-notice ${notice.error ? 'is-error' : ''}`} role={notice.error ? 'alert' : 'status'}>
      {notice.text}
    </div>
  );

  if (!logged) {
    return (
      <main className="admin-login">
        <section className="admin-login-story">
          <a href="/" className="admin-wordmark">
            <img src="/assets/freshcut-logo.png" alt="" />
            FreshCut <span>Home</span>
          </a>
          <div>
            <span className="admin-eyebrow">THE FRESHCUT WORKSPACE</span>
            <h1>A fresh start.<br />Every single day.</h1>
            <p>Good food begins with thoughtful preparation. Keep your orders, fresh cuts and kitchen running smoothly.</p>
            <div className="admin-login-tags">
              <span>Orders, organised</span>
              <span>Freshness, managed</span>
            </div>
          </div>
          <small>Made for happier kitchens in Karachi.</small>
        </section>

        <section className="admin-login-panel">
          <a href="/" className="admin-back">
            ← Back to store
          </a>
          <form onSubmit={login}>
            <span className="admin-login-icon">
              <Glyph kind="leaf" />
            </span>
            <span className="admin-eyebrow">ADMIN ACCESS</span>
            <h2>Welcome back.</h2>
            <p>Sign in to take care of your store.</p>
            <label>
              Email address
              <input name="email" type="email" autoComplete="username" required placeholder="admin@freshcut.pk" />
            </label>
            <label>
              Password
              <div style={{ position: 'relative' }}>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.75rem',
                    color: '#64748b',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </label>
            {feedback}
            <button className="admin-primary" disabled={busy === 'login'}>
              {busy === 'login' ? 'Signing in…' : 'Sign in to dashboard'}
              <Glyph kind="arrow" />
            </button>
            <small className="admin-login-note">Authorised team members only.</small>
          </form>
          <small className="admin-login-footer">FreshCut Home · Store management</small>
        </section>
      </main>
    );
  }

  const active = orders.filter(o => !['Delivered', 'Cancelled'].includes(o.status)).length;
  const revenue = orders.filter(o => o.status === 'Delivered').reduce((sum, o) => sum + o.total, 0);
  const visibleOrders = orders.filter(
    o =>
      (filter === 'All' || o.status === filter) &&
      `${o.orderNumber} ${o.customer.name} ${o.customer.phone}`.toLowerCase().includes(query.toLowerCase())
  );
  const visibleProducts = products.filter(p => `${p.name} ${p.cat}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <a className="admin-wordmark" href="/">
          <img src="/assets/freshcut-logo.png" alt="" />
          FreshCut<span>Home</span>
        </a>
        <span className="admin-workspace-label">STORE WORKSPACE</span>
        <nav aria-label="Admin navigation">
          <button
            onClick={() => switchTab('orders')}
            aria-current={tab === 'orders' ? 'page' : undefined}
            className={tab === 'orders' ? 'selected' : ''}
          >
            <Glyph kind="bag" />
            Orders<span>{orders.length}</span>
          </button>
          <button
            onClick={() => switchTab('products')}
            aria-current={tab === 'products' ? 'page' : undefined}
            className={tab === 'products' ? 'selected' : ''}
          >
            <Glyph kind="leaf" />
            Products<span>{products.length}</span>
          </button>
          <a href="/">
            <Glyph kind="arrow" />
            View storefront
          </a>
        </nav>
        <div className="admin-sidebar-bottom">
          <div className="admin-fresh-note">
            <Glyph kind="leaf" />
            <strong>A little prep.<br />A lot of possibility.</strong>
            <p>Your next fresh order starts here.</p>
          </div>
          <button className="admin-logout" onClick={logout}>
            <Glyph kind="logout" />
            Sign out
          </button>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <span>
            Workspace <span>/</span> <strong>{tab === 'orders' ? 'Orders' : 'Products'}</strong>
          </span>
          <div className="admin-profile">
            <span className="admin-avatar">FC</span>
            <span>
              Store Admin
              <small>{adminUser?.email || 'freshcut2@gmail.com'}</small>
            </span>
          </div>
        </header>

        <div className="admin-content">
          <div className="admin-page-heading">
            <div>
              <span className="admin-eyebrow">A LITTLE FRESHNESS, EVERY DAY</span>
              <h1>{tab === 'orders' ? 'Your store, at a glance.' : 'Fresh cuts, thoughtfully curated.'}</h1>
              <p>
                {tab === 'orders'
                  ? 'Keep every order moving, from your kitchen to their doorstep.'
                  : 'Manage your catalog, pricing and availability in one place.'}
              </p>
            </div>
            <button className="admin-secondary" onClick={load} disabled={loading || Boolean(busy)}>
              {loading ? 'Refreshing…' : 'Refresh data'}
            </button>
          </div>

          <section className="admin-stats" aria-label="Store statistics">
            {[
              ['Total orders', orders.length, 'All orders received', 'bag'],
              ['Active orders', active, 'Awaiting preparation or delivery', 'clock'],
              ['Delivered revenue', money(revenue), 'Excludes cancelled and pending orders', 'arrow'],
              ['Available products', products.filter(p => p.active !== false).length, `${products.length} products in catalog`, 'leaf']
            ].map(([label, value, detail, icon], index) => (
              <article key={label} className={index === 2 ? 'admin-stat featured' : 'admin-stat'}>
                <div>
                  <span>{label}</span>
                  <Glyph kind={icon} />
                </div>
                <strong>{loading ? '—' : value}</strong>
                <small>{detail}</small>
              </article>
            ))}
          </section>

          {feedback}

          <section className="admin-data-panel">
            <div className="admin-panel-heading">
              <div>
                <h2>
                  {tab === 'orders' ? 'Order management' : 'Product catalog'}
                  <span>{tab === 'orders' ? orders.length : products.length}</span>
                </h2>
                <p>
                  {tab === 'orders'
                    ? 'Track, review and update your customer orders.'
                    : 'Make your next fresh selection ready to shop.'}
                </p>
              </div>
              <div className="admin-search">
                <Glyph kind="search" />
                <input
                  aria-label={tab === 'orders' ? 'Search orders' : 'Search products'}
                  placeholder={tab === 'orders' ? 'Search order, name or phone…' : 'Search products or category…'}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </div>
            </div>

            {tab === 'orders' && (
              <div className="admin-filters" aria-label="Filter by status">
                {['All', ...statuses].map(status => (
                  <button
                    key={status}
                    aria-pressed={filter === status}
                    className={filter === status ? 'selected' : ''}
                    onClick={() => setFilter(status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}

            {loading ? (
              <div className="admin-empty" role="status">
                <Glyph kind="clock" />
                <h3>Loading your store…</h3>
                <p>Getting your latest orders and products.</p>
              </div>
            ) : tab === 'orders' ? (
              <>
                {visibleOrders.length ? (
                  <div className="admin-table-scroll">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Order</th>
                          <th>Customer & delivery</th>
                          <th>Items</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visibleOrders.map(order => (
                          <tr key={order.id}>
                            <td>
                              <strong>{order.orderNumber}</strong>
                              <small>
                                {new Date(order.createdAt).toLocaleDateString('en-GB', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })}
                              </small>
                            </td>
                            <td>
                              <strong>{order.customer.name}</strong>
                              <small>{order.customer.phone}</small>
                              <p>{order.customer.address}{order.customer.area ? `, ${order.customer.area}` : ''}</p>
                              {order.customer.notes && <small>Note: {order.customer.notes}</small>}
                            </td>
                            <td>
                              <details>
                                <summary>{order.items.reduce((sum, item) => sum + item.qty, 0)} items</summary>
                                {order.items.map((item, index) => (
                                  <small key={index}>
                                    {item.qty} × {item.name} · {item.weight}
                                  </small>
                                ))}
                              </details>
                            </td>
                            <td>
                              <strong>{money(order.total)}</strong>
                              <small>{order.customer.payment}</small>
                            </td>
                            <td>
                              <span className={`admin-status status-${order.status.toLowerCase().replaceAll(' ', '-')}`}>
                                {order.status}
                              </span>
                              <select
                                aria-label={`Status for ${order.orderNumber}`}
                                value={order.status}
                                disabled={Boolean(busy)}
                                onChange={e => updateStatus(order.id, e.target.value)}
                              >
                                {statuses.map(status => (
                                  <option key={status}>{status}</option>
                                ))}
                              </select>
                              {busy === `order-${order.id}` && <small>Saving…</small>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="admin-empty">
                    <Glyph kind="bag" />
                    <h3>{orders.length ? 'No matching orders' : 'A fresh slate.'}</h3>
                    <p>{orders.length ? 'Try another search or status filter.' : 'New customer orders will appear here.'}</p>
                  </div>
                )}
                <div className="admin-panel-footer">
                  Showing {visibleOrders.length} of {orders.length} orders
                  <span>Free delivery. Fresh beginnings.</span>
                </div>
              </>
            ) : (
              <div className="admin-product-grid">
                {visibleProducts.map(product => (
                  <form key={product.id} className="admin-product-card" onSubmit={event => saveProduct(event, product)}>
                    <div className="admin-product-image">
                      <img src={'/' + product.image.replace(/^\//, '')} alt={product.name} loading="lazy" />
                      <span className={product.active !== false ? '' : 'unavailable'}>
                        {product.active !== false ? 'In stock' : 'Out of stock'}
                      </span>
                    </div>
                    <div className="admin-product-fields">
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <label>
                          Category
                          <input
                            required
                            value={product.cat || ''}
                            onChange={e => editProduct(product.id, { cat: e.target.value })}
                          />
                        </label>
                        <label>
                          Availability
                          <select
                            value={product.active === false ? '0' : '1'}
                            onChange={e => editProduct(product.id, { active: e.target.value === '1' })}
                          >
                            <option value="1">In stock</option>
                            <option value="0">Out of stock</option>
                          </select>
                        </label>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <label>
                          Product Name
                          <input
                            required
                            value={product.name}
                            onChange={e => editProduct(product.id, { name: e.target.value })}
                          />
                        </label>
                        <label>
                          Urdu Name
                          <input
                            dir="rtl"
                            style={{ textAlign: 'right' }}
                            value={product.urdu || ''}
                            onChange={e => editProduct(product.id, { urdu: e.target.value })}
                          />
                        </label>
                      </div>
                      <div className="admin-prices">
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', gridColumn: '1 / -1' }}>
                          Weights &amp; Prices (PKR)
                        </span>
                        {Object.entries(product.prices).map(([wKey, price]) => (
                          <div key={wKey} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <label style={{ flex: 1, margin: 0 }}>
                              {wKey}
                              <input
                                type="number"
                                required
                                min="1"
                                step="1"
                                value={price}
                                onChange={e =>
                                  editProduct(product.id, {
                                    prices: {
                                      ...product.prices,
                                      [wKey]: e.target.value === '' ? '' : Number(e.target.value)
                                    }
                                  })
                                }
                              />
                            </label>
                            {Object.keys(product.prices).length > 1 && (
                              <button
                                type="button"
                                title="Remove this weight option"
                                onClick={() => {
                                  const nextPrices = { ...product.prices };
                                  delete nextPrices[wKey];
                                  editProduct(product.id, { prices: nextPrices });
                                }}
                                style={{
                                  background: '#fef2f2',
                                  color: '#dc2626',
                                  border: '1px solid #fecaca',
                                  borderRadius: '6px',
                                  padding: '4px 8px',
                                  cursor: 'pointer',
                                  fontSize: '0.75rem',
                                  fontWeight: 'bold',
                                  marginTop: '16px'
                                }}
                              >
                                ✕
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => {
                            const newWeight = prompt('Enter new weight label (e.g. 750g, 1kg, 2kg, 6 pcs):', '750g');
                            if (newWeight && newWeight.trim()) {
                              const label = newWeight.trim();
                              editProduct(product.id, {
                                prices: {
                                  ...product.prices,
                                  [label]: 100
                                }
                              });
                            }
                          }}
                          style={{
                            gridColumn: '1 / -1',
                            padding: '6px 12px',
                            background: '#f0fdf4',
                            border: '1px dashed #86efac',
                            color: '#166534',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            cursor: 'pointer'
                          }}
                        >
                          + Add New Weight Option
                        </button>
                      </div>
                      
                      <details className="admin-product-details-toggle">
                        <summary style={{ cursor: 'pointer', fontWeight: 600, color: '#15803d', margin: '8px 0', fontSize: '0.875rem' }}>
                          ✏️ Edit Slug, Image &amp; SEO Info
                        </summary>
                        <div style={{ display: 'grid', gap: '10px', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #e2e8f0' }}>
                          <label>
                            Slug
                            <input
                              required
                              value={product.slug || ''}
                              onChange={e => editProduct(product.id, { slug: e.target.value })}
                            />
                          </label>
                          <label>
                            Image Path
                            <input
                              value={product.image || ''}
                              onChange={e => editProduct(product.id, { image: e.target.value })}
                            />
                          </label>
                          <label>
                            Image Alt Text
                            <input
                              value={product.altText || ''}
                              onChange={e => editProduct(product.id, { altText: e.target.value })}
                            />
                          </label>
                          <label>
                            Short Description
                            <textarea
                              rows={2}
                              value={product.shortDescription || ''}
                              onChange={e => editProduct(product.id, { shortDescription: e.target.value })}
                            />
                          </label>
                          <label>
                            Cutting Style & Purpose
                            <textarea
                              rows={2}
                              value={product.cutDescription || ''}
                              onChange={e => editProduct(product.id, { cutDescription: e.target.value })}
                            />
                          </label>
                          <label>
                            Storage Instructions
                            <textarea
                              rows={2}
                              value={product.storageInstructions || ''}
                              onChange={e => editProduct(product.id, { storageInstructions: e.target.value })}
                            />
                          </label>
                          <label>
                            Hygiene & Preparation Info
                            <textarea
                              rows={2}
                              value={product.hygieneInformation || ''}
                              onChange={e => editProduct(product.id, { hygieneInformation: e.target.value })}
                            />
                          </label>
                          <label>
                            Nutritional Overview (JSON)
                            <textarea
                              rows={3}
                              style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}
                              value={typeof product.nutritionSummary === 'object' ? JSON.stringify(product.nutritionSummary, null, 2) : (product.nutritionSummary || '')}
                              onChange={e => editProduct(product.id, { nutritionSummary: e.target.value })}
                            />
                          </label>
                          <label>
                            Nutrients List (JSON)
                            <textarea
                              rows={3}
                              style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}
                              value={typeof product.nutrients === 'object' ? JSON.stringify(product.nutrients, null, 2) : (product.nutrients || '')}
                              onChange={e => editProduct(product.id, { nutrients: e.target.value })}
                            />
                          </label>
                          <label>
                            Health Benefits (JSON)
                            <textarea
                              rows={3}
                              style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}
                              value={typeof product.healthBenefits === 'object' ? JSON.stringify(product.healthBenefits, null, 2) : (product.healthBenefits || '')}
                              onChange={e => editProduct(product.id, { healthBenefits: e.target.value })}
                            />
                          </label>
                          <label>
                            Best Cooking Uses (JSON)
                            <textarea
                              rows={3}
                              style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}
                              value={typeof product.cookingUses === 'object' ? JSON.stringify(product.cookingUses, null, 2) : (product.cookingUses || '')}
                              onChange={e => editProduct(product.id, { cookingUses: e.target.value })}
                            />
                          </label>
                          <label>
                            FAQs List (JSON)
                            <textarea
                              rows={4}
                              style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}
                              value={typeof product.faq === 'object' ? JSON.stringify(product.faq, null, 2) : (product.faq || '')}
                              onChange={e => editProduct(product.id, { faq: e.target.value })}
                            />
                          </label>
                        </div>
                      </details>

                      <button className="admin-primary" disabled={Boolean(busy)}>
                        {busy === `product-${product.id}` ? 'Saving…' : 'Save changes'}
                        <Glyph kind="arrow" />
                      </button>
                    </div>
                  </form>
                ))}
                {!visibleProducts.length && (
                  <div className="admin-empty">
                    <h3>No products found</h3>
                    <p>Try another name or category.</p>
                  </div>
                )}
              </div>
            )}
          </section>
          <footer className="admin-footer">
            FreshCut Home <span>Thoughtfully prepared. Seamlessly managed.</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
