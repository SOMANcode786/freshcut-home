import fallbackProducts from '../../../backend/src/data/products.js';

const base = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function api(path, options = {}) {
  const token = localStorage.getItem('freshcut-token');
  try {
    const response = await fetch(base + path, {
      ...options,
      headers: {
        'content-type': 'application/json',
        ...(token ? { authorization: `Bearer ${token}` } : {}),
        ...options.headers
      }
    });
    const data = await response.json();
    if (!response.ok) throw Object.assign(new Error(data.message || 'Request failed'), { status: response.status });
    return data;
  } catch (error) {
    if (path === '/products' || path === '/products/') {
      console.warn('API fetch failed. Falling back to local static product catalog.');
      return fallbackProducts;
    }
    throw error;
  }
}
