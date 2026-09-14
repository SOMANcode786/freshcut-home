import { useEffect, useState } from 'react';
import { api } from '../services/api';
import OptimizedImage from '../components/OptimizedImage';
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
    clock: 'M12 8v5l3 2 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
    star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
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
  const [reviews, setReviews] = useState([]);
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState('');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [showPassword, setShowPassword] = useState(false);

  // New review form state
  const [showAddReview, setShowAddReview] = useState(false);
  const [newReview, setNewReview] = useState({
    customer: '',
    city: 'Karachi',
    rating: 5,
    text: '',
    date: new Date().toISOString().split('T')[0],
    verified: true,
    published: true
  });
  const [editingReviewId, setEditingReviewId] = useState(null);

  function failure(error) {
    if (error.status === 401) {
      localStorage.removeItem('freshcut-token');
      localStorage.removeItem('freshcut-user');
      setLogged(false);
      setAdminUser(null);
      setProducts([]);
      setOrders([]);
      setReviews([]);
      setNotice({ error: true, text: 'Your session has expired. Please sign in again.' });
    } else {
      setNotice({ error: true, text: error.message || 'Unable to connect. Please try again.' });
    }
  }

  async function load() {
    setLoading(true);
    setNotice(null);
    try {
      const [p, o, r, u] = await Promise.all([
        api('/products'),
        api('/orders'),
        api('/reviews').catch(() => []),
        api('/auth/me').catch(() => null)
      ]);
      setProducts(p);
      setOrders(o);
      setReviews(r);
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
      localStorage.setItem('freshcut-user', JSON.stringify(data.user));
      setAdminUser(data.user);
      setLogged(true);
    } catch (error) {
      setNotice({ error: true, text: error.message || 'Invalid credentials' });
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
    setReviews([]);
    setNotice({ error: false, text: 'You have signed out safely.' });
  }

  async function saveProduct(event, product) {
    event.preventDefault();
    setBusy(`product-${product.id}`);
    setNotice(null);
    try {
      const updated = await api(`/products/${product.id}`, {
        method: 'PATCH',
        body: JSON.stringify(product)
      });
      setProducts(products.map(item => (item.id === product.id ? updated : item)));
      setNotice({ error: false, text: `${product.name} saved successfully!` });
    } catch (error) {
      failure(error);
    } finally {
      setBusy('');
    }
  }

  async function updateOrderStatus(orderId, nextStatus) {
    setBusy(`order-${orderId}`);
    setNotice(null);
    try {
      const updated = await api(`/orders/${orderId}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: nextStatus })
      });
      setOrders(orders.map(item => (item.id === orderId ? updated : item)));
      setNotice({ error: false, text: `Order ${updated.orderNumber} updated to ${updated.status}.` });
    } catch (error) {
      failure(error);
    } finally {
      setBusy('');
    }
  }

  function editProduct(id, changes) {
    setProducts(products.map(item => (item.id === id ? { ...item, ...changes } : item)));
  }

  function editReviewState(id, changes) {
    setReviews(reviews.map(item => (item.id === id ? { ...item, ...changes } : item)));
  }

  // Review CRUD Actions
  async function handleAddReview(e) {
    e.preventDefault();
    if (!newReview.customer.trim() || !newReview.text.trim()) {
      setNotice({ error: true, text: 'Please fill in customer name and review text.' });
      return;
    }
    setBusy('add-review');
    setNotice(null);
    try {
      const created = await api('/reviews', {
        method: 'POST',
        body: JSON.stringify(newReview)
      });
      setReviews([created, ...reviews]);
      setNewReview({
        customer: '',
        city: 'Karachi',
        rating: 5,
        text: '',
        date: new Date().toISOString().split('T')[0],
        verified: true,
        published: true
      });
      setShowAddReview(false);
      setNotice({ error: false, text: 'Customer review added successfully!' });
    } catch (error) {
      failure(error);
    } finally {
      setBusy('');
    }
  }

  async function handleTogglePublishReview(review) {
    setBusy(`review-publish-${review.id}`);
    setNotice(null);
    try {
      const updated = await api(`/reviews/${review.id}`, {
        method: 'PUT',
        body: JSON.stringify({ published: !review.published })
      });
      setReviews(reviews.map(r => (r.id === review.id ? updated : r)));
      setNotice({
        error: false,
        text: `Review by ${updated.customer} set to ${updated.published ? 'Published' : 'Hidden'}.`
      });
    } catch (error) {
      failure(error);
    } finally {
      setBusy('');
    }
  }

  async function handleSaveReview(e, review) {
    e.preventDefault();
    setBusy(`review-${review.id}`);
    setNotice(null);
    try {
      const updated = await api(`/reviews/${review.id}`, {
        method: 'PUT',
        body: JSON.stringify(review)
      });
      setReviews(reviews.map(r => (r.id === review.id ? updated : r)));
      setEditingReviewId(null);
      setNotice({ error: false, text: `Review by ${updated.customer} updated!` });
    } catch (error) {
      failure(error);
    } finally {
      setBusy('');
    }
  }

  async function handleDeleteReview(review) {
    const confirmed = window.confirm(
      `Are you sure you want to delete the review by "${review.customer}"?\n\nThis action cannot be undone.`
    );
    if (!confirmed) return;

    setBusy(`review-del-${review.id}`);
    setNotice(null);
    try {
      await api(`/reviews/${review.id}`, { method: 'DELETE' });
      setReviews(reviews.filter(r => r.id !== review.id));
      setNotice({ error: false, text: 'Review deleted successfully.' });
    } catch (error) {
      failure(error);
    } finally {
      setBusy('');
    }
  }

  const switchTab = nextTab => {
    setTab(nextTab);
    setQuery('');
    setFilter('All');
  };

  const revenue = orders
    .filter(order => order.status !== 'Cancelled')
    .reduce((sum, order) => sum + Number(order.total || 0), 0);
  const active = orders.filter(
    order => order.status === 'New' || order.status === 'Confirmed' || order.status === 'Preparing' || order.status === 'Out for delivery'
  ).length;

  const visibleOrders = orders.filter(order => {
    const matchesFilter = filter === 'All' || order.status === filter;
    const matchesQuery =
      !query ||
      order.orderNumber.toLowerCase().includes(query.toLowerCase()) ||
      order.customerName.toLowerCase().includes(query.toLowerCase()) ||
      order.phone.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  const visibleProducts = products.filter(
    product =>
      !query ||
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      (product.cat || '').toLowerCase().includes(query.toLowerCase())
  );

  const visibleReviews = reviews.filter(
    review =>
      !query ||
      review.customer.toLowerCase().includes(query.toLowerCase()) ||
      (review.city || '').toLowerCase().includes(query.toLowerCase()) ||
      review.text.toLowerCase().includes(query.toLowerCase())
  );

  if (!logged) {
    return (
      <main className="admin-login">
        <section className="admin-login-story">
          <div>
            <span className="admin-eyebrow" style={{ color: '#d9ef75' }}>
              FRESHCUT HOME ADMINISTRATIVE PORTAL
            </span>
            <h1>Clean prep.<br />Seamless operations.</h1>
            <p style={{ marginTop: '16px', color: '#e2e8f0', maxWidth: '480px' }}>
              Access live orders, update vegetable catalog pricing, and curate genuine customer reviews for home kitchens across Karachi.
            </p>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            Protected access. Authorized FreshCut Home personnel only.
          </p>
        </section>

        <section className="admin-login-panel">
          <a className="admin-back" href="/">
            ← Back to Storefront
          </a>
          <div className="admin-login-icon">
            <Glyph kind="leaf" />
          </div>
          <h2>Welcome back</h2>
          <p>Please enter your administrator credentials to continue.</p>

          {notice && (
            <div className={`admin-alert ${notice.error ? 'error' : 'success'}`} role="alert">
              {notice.text}
            </div>
          )}

          <form onSubmit={login}>
            <label>
              Email Address
              <input
                type="email"
                name="email"
                required
                placeholder="freshcut2@gmail.com"
                defaultValue="freshcut2@gmail.com"
              />
            </label>

            <label>
              Password
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  placeholder="••••••••"
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
                    color: '#64748b',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </label>

            <button className="admin-primary" disabled={busy === 'login'}>
              {busy === 'login' ? 'Authenticating…' : 'Sign in to dashboard'}
              <Glyph kind="arrow" />
            </button>
          </form>
          <div className="admin-login-footer">
            FreshCut Home Operations Portal
          </div>
        </section>
      </main>
    );
  }

  const feedback = notice ? (
    <div className={`admin-alert ${notice.error ? 'error' : 'success'}`} role="alert">
      <span>{notice.text}</span>
      <button onClick={() => setNotice(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
        ✕
      </button>
    </div>
  ) : null;

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <a className="admin-wordmark" href="/">
          <img src="/assets/freshcut-logo.webp" alt="" width={32} height={32} />
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
          <button
            onClick={() => switchTab('reviews')}
            aria-current={tab === 'reviews' ? 'page' : undefined}
            className={tab === 'reviews' ? 'selected' : ''}
          >
            <Glyph kind="star" />
            Reviews<span>{reviews.length}</span>
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
            Workspace <span>/</span> <strong>{tab === 'orders' ? 'Orders' : tab === 'products' ? 'Products' : 'Customer Reviews'}</strong>
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
              <h1>
                {tab === 'orders'
                  ? 'Your store, at a glance.'
                  : tab === 'products'
                  ? 'Fresh cuts, thoughtfully curated.'
                  : 'Customer Reviews & Feedback'}
              </h1>
              <p>
                {tab === 'orders'
                  ? 'Keep every order moving, from your kitchen to their doorstep.'
                  : tab === 'products'
                  ? 'Manage your catalog, pricing and availability in one place.'
                  : 'Curate, publish and manage authentic customer reviews.'}
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
              ['Customer reviews', reviews.length, `${reviews.filter(r => r.published !== false).length} published on store`, 'star']
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
                  {tab === 'orders'
                    ? 'Order management'
                    : tab === 'products'
                    ? 'Product catalog'
                    : 'Reviews management'}
                  <span>
                    {tab === 'orders' ? orders.length : tab === 'products' ? products.length : reviews.length}
                  </span>
                </h2>
                <p>
                  {tab === 'orders'
                    ? 'Track, review and update your customer orders.'
                    : tab === 'products'
                    ? 'Make your next fresh selection ready to shop.'
                    : 'Publish verified WhatsApp/customer feedback to your website.'}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                {tab === 'reviews' && (
                  <button
                    type="button"
                    onClick={() => setShowAddReview(!showAddReview)}
                    style={{
                      background: '#123c2b',
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {showAddReview ? '✕ Close Form' : '+ Add New Review'}
                  </button>
                )}

                <div className="admin-search">
                  <Glyph kind="search" />
                  <input
                    aria-label={tab === 'orders' ? 'Search orders' : tab === 'products' ? 'Search products' : 'Search reviews'}
                    placeholder={
                      tab === 'orders'
                        ? 'Search order, name or phone…'
                        : tab === 'products'
                        ? 'Search products or category…'
                        : 'Search customer name, city or review text…'
                    }
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Add Review Form for Admin */}
            {tab === 'reviews' && showAddReview && (
              <form onSubmit={handleAddReview} style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '24px', display: 'grid', gap: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#123c2b' }}>
                  ✏️ Add New Customer Review
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                  <label>
                    Customer Name *
                    <input
                      required
                      placeholder="e.g. Verified Customer or Mrs. Ahmed"
                      value={newReview.customer}
                      onChange={e => setNewReview({ ...newReview, customer: e.target.value })}
                    />
                  </label>
                  <label>
                    City
                    <input
                      required
                      placeholder="Karachi"
                      value={newReview.city}
                      onChange={e => setNewReview({ ...newReview, city: e.target.value })}
                    />
                  </label>
                  <label>
                    Rating (1 to 5 Stars)
                    <select
                      value={newReview.rating}
                      onChange={e => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    >
                      <option value="5">5 Stars (★★★★★)</option>
                      <option value="4">4 Stars (★★★★☆)</option>
                      <option value="3">3 Stars (★★★☆☆)</option>
                      <option value="2">2 Stars (★★☆☆☆)</option>
                      <option value="1">1 Star (★☆☆☆☆)</option>
                    </select>
                  </label>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                  <label>
                    Review Date
                    <input
                      type="date"
                      value={newReview.date}
                      onChange={e => setNewReview({ ...newReview, date: e.target.value })}
                    />
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginTop: '24px' }}>
                    <input
                      type="checkbox"
                      checked={newReview.verified}
                      onChange={e => setNewReview({ ...newReview, verified: e.target.checked })}
                    />
                    <b>Verified Customer</b>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginTop: '24px' }}>
                    <input
                      type="checkbox"
                      checked={newReview.published}
                      onChange={e => setNewReview({ ...newReview, published: e.target.checked })}
                    />
                    <b style={{ color: newReview.published ? '#15803d' : '#dc2626' }}>
                      {newReview.published ? 'Published on Website' : 'Hidden (Draft)'}
                    </b>
                  </label>
                </div>

                <label>
                  Review Text *
                  <textarea
                    rows={3}
                    required
                    placeholder="Enter genuine customer feedback (e.g. JazakAllah, bohat zabardast.)"
                    value={newReview.text}
                    onChange={e => setNewReview({ ...newReview, text: e.target.value })}
                  />
                </label>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setShowAddReview(false)}
                    style={{ padding: '8px 16px', background: '#e2e8f0', color: '#475569', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Cancel
                  </button>
                  <button
                    className="admin-primary"
                    disabled={busy === 'add-review'}
                    style={{ padding: '8px 24px' }}
                  >
                    {busy === 'add-review' ? 'Saving…' : 'Publish Review'}
                  </button>
                </div>
              </form>
            )}

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
                <p>Getting your latest orders and data.</p>
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
                              <strong>{order.customerName}</strong>
                              <small>{order.phone}</small>
                              <small style={{ color: '#64748b' }}>
                                {order.address}, {order.area}
                              </small>
                            </td>
                            <td>
                              {order.items.map(item => (
                                <div key={item.id + item.weight} style={{ fontSize: '0.85rem' }}>
                                  • {item.name} ({item.weight}) × {item.qty}
                                </div>
                              ))}
                            </td>
                            <td>
                              <strong>{money(order.total)}</strong>
                              <small>{order.payment}</small>
                            </td>
                            <td>
                              <select
                                className={`admin-status-select ${order.status.toLowerCase().replace(/\s+/g, '-')}`}
                                value={order.status}
                                disabled={busy === `order-${order.id}`}
                                onChange={e => updateOrderStatus(order.id, e.target.value)}
                              >
                                {statuses.map(s => (
                                  <option key={s} value={s}>
                                    {s}
                                  </option>
                                ))}
                              </select>
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
            ) : tab === 'products' ? (
              <div className="admin-product-grid">
                {visibleProducts.map(product => (
                  <form key={product.id} className="admin-product-card" onSubmit={event => saveProduct(event, product)}>
                    <div className="admin-product-image">
                      <OptimizedImage
                        src={product.image}
                        alt={product.name}
                        variant="thumbnail"
                        width={160}
                        height={160}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
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
                      </div>

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
            ) : (
              /* Customer Reviews Admin Tab */
              <div style={{ display: 'grid', gap: '16px' }}>
                {visibleReviews.map(review => {
                  const isEditing = editingReviewId === review.id;
                  return (
                    <div
                      key={review.id}
                      style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        border: '1px solid #e2e8f0',
                        padding: '20px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                      }}
                    >
                      {isEditing ? (
                        /* Edit Review Mode */
                        <form onSubmit={e => handleSaveReview(e, review)} style={{ display: 'grid', gap: '12px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                            <label>
                              Customer Name
                              <input
                                required
                                value={review.customer}
                                onChange={e => editReviewState(review.id, { customer: e.target.value })}
                              />
                            </label>
                            <label>
                              City
                              <input
                                value={review.city || ''}
                                onChange={e => editReviewState(review.id, { city: e.target.value })}
                              />
                            </label>
                            <label>
                              Rating
                              <select
                                value={review.rating || 5}
                                onChange={e => editReviewState(review.id, { rating: Number(e.target.value) })}
                              >
                                <option value="5">5 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="2">2 Stars</option>
                                <option value="1">1 Star</option>
                              </select>
                            </label>
                          </div>
                          <label>
                            Review Text
                            <textarea
                              rows={2}
                              required
                              value={review.text}
                              onChange={e => editReviewState(review.id, { text: e.target.value })}
                            />
                          </label>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                              <input
                                type="checkbox"
                                checked={review.published !== false}
                                onChange={e => editReviewState(review.id, { published: e.target.checked })}
                              />
                              <b>Published on Storefront</b>
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                              <input
                                type="checkbox"
                                checked={review.verified !== false}
                                onChange={e => editReviewState(review.id, { verified: e.target.checked })}
                              />
                              <b>Verified Badge</b>
                            </label>
                            <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                              <button
                                type="button"
                                onClick={() => setEditingReviewId(null)}
                                style={{ padding: '6px 12px', background: '#e2e8f0', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
                              >
                                Cancel
                              </button>
                              <button className="admin-primary" style={{ padding: '6px 16px' }}>
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </form>
                      ) : (
                        /* Read / Action Mode */
                        <>
                          <div style={{ display: 'flex', justifyBetween: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', pb: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <span style={{ color: '#f59e0b', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                {'★'.repeat(Number(review.rating) || 5)}
                              </span>
                              <strong style={{ fontSize: '1rem', color: '#0f172a' }}>{review.customer}</strong>
                              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>({review.city || 'Karachi'})</span>
                              {review.verified !== false && (
                                <span style={{ fontSize: '0.75rem', background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold' }}>
                                  ✓ Verified
                                </span>
                              )}
                            </div>
                            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ fontSize: '0.8rem', color: review.published !== false ? '#15803d' : '#dc2626', fontWeight: 'bold', background: review.published !== false ? '#f0fdf4' : '#fef2f2', padding: '4px 10px', borderRadius: '8px' }}>
                                {review.published !== false ? '● Published' : '○ Hidden'}
                              </span>
                            </div>
                          </div>

                          <blockquote style={{ margin: 0, fontSize: '0.95rem', color: '#334155', fontStyle: 'italic', lineHeight: 1.5 }}>
                            “{review.text}”
                          </blockquote>

                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: '8px', borderTop: '1px solid #f8fafc' }}>
                            <small style={{ color: '#94a3b8' }}>
                              Date: {review.date || review.createdAt?.split('T')[0] || 'N/A'}
                            </small>
                            <div style={{ display: 'flex', gap: '8px' }}>
                              <button
                                type="button"
                                onClick={() => handleTogglePublishReview(review)}
                                disabled={busy === `review-publish-${review.id}`}
                                style={{
                                  padding: '6px 12px',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: 'bold',
                                  cursor: 'pointer',
                                  border: '1px solid #cbd5e1',
                                  background: review.published !== false ? '#f8fafc' : '#f0fdf4',
                                  color: review.published !== false ? '#475569' : '#15803d'
                                }}
                              >
                                {review.published !== false ? 'Hide Review' : 'Publish Review'}
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingReviewId(review.id)}
                                style={{
                                  padding: '6px 12px',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: 'bold',
                                  cursor: 'pointer',
                                  border: '1px solid #cbd5e1',
                                  background: '#ffffff',
                                  color: '#0f172a'
                                }}
                              >
                                ✏️ Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteReview(review)}
                                disabled={busy === `review-del-${review.id}`}
                                style={{
                                  padding: '6px 12px',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: 'bold',
                                  cursor: 'pointer',
                                  border: '1px solid #fecaca',
                                  background: '#fef2f2',
                                  color: '#dc2626'
                                }}
                              >
                                🗑 Delete
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
                {!visibleReviews.length && (
                  <div className="admin-empty">
                    <Glyph kind="star" />
                    <h3>{reviews.length ? 'No matching reviews' : 'No customer reviews yet.'}</h3>
                    <p>{reviews.length ? 'Try another search query.' : 'Click "+ Add New Review" above to add your first customer review.'}</p>
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
