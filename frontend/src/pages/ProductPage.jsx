import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { useCart } from '../context/CartContext';
import Seo from '../components/Seo';

export default function ProductPage({ product: initialProduct }) {
  const { slug } = useParams();
  const [product, setProduct] = useState(initialProduct || null);
  const [loading, setLoading] = useState(!initialProduct);
  const [error, setError] = useState(null);
  const [weight, setWeight] = useState('');
  const [qty, setQty] = useState(1);
  const { add } = useCart();

  useEffect(() => {
    if (initialProduct && initialProduct.slug === slug) {
      setProduct(initialProduct);
      setWeight(Object.keys(initialProduct.prices)[0]);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    api('/products')
      .then(data => {
        const found = data.find(p => p.slug === slug);
        if (found) {
          setProduct(found);
          setWeight(Object.keys(found.prices)[0]);
        } else {
          setError('Product not found.');
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Failed to load product details.');
        setLoading(false);
      });
  }, [slug, initialProduct]);

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 animate-pulse">
          <div className="h-96 w-full rounded-3xl bg-slate-200" />
          <div className="space-y-4 self-center">
            <div className="h-4 w-1/4 bg-slate-200 rounded" />
            <div className="h-10 w-3/4 bg-slate-200 rounded" />
            <div className="h-6 w-1/2 bg-slate-200 rounded" />
            <div className="h-24 w-full bg-slate-200 rounded" />
            <div className="h-12 w-full bg-slate-200 rounded" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-800">Product Not Found</h1>
        <p className="mt-3 text-slate-600">The product you are looking for does not exist or has been removed.</p>
        <Link to="/" className="btn mt-6 inline-block bg-forest text-white">
          ← Back to Shop
        </Link>
      </main>
    );
  }

  const activeWeight = weight || Object.keys(product.prices)[0];
  const minPrice = product.prices[activeWeight] || Object.values(product.prices)[0];
  const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');
  const imagePath = '/' + product.image.replace(/\.png$/i, '.webp');
  const fullImageUrl = `${siteUrl}${imagePath}`;
  const canonicalUrl = `${siteUrl}/product/${product.slug}`;

  const seoTitle = `${product.name} (${product.cat}) | FreshCut Home Karachi`;
  const seoDescription = `Buy fresh ${product.name} (${product.cat}) online in Karachi starting at Rs. ${minPrice}. Hygienically washed, ready to cook with free next-day delivery.`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: fullImageUrl,
    description: product.description,
    category: product.cat,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PKR',
      price: minPrice,
      availability: product.active !== false ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: canonicalUrl
    }
  };

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDescription}
        image={imagePath}
        type="product"
        schema={productSchema}
      />
      <main className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-green-50">
          <img
            src={imagePath}
            alt={`${product.name} ${product.cat} fresh cut ready to cook vegetable`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="self-center">
          <Link to="/" className="mb-7 inline-block text-leaf font-semibold hover:underline">
            ← Back to products
          </Link>
          <p className="font-bold uppercase tracking-widest text-leaf">
            {product.cat} · Prepared fresh
          </p>
          <h1 className="mt-3 font-serif text-5xl font-bold">{product.name}</h1>
          <p className="mt-2 text-xl text-slate-500" lang="ur">
            {product.urdu}
          </p>
          <p className="my-6 text-lg leading-8 text-slate-600">{product.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <select
              className="field"
              value={activeWeight}
              onChange={e => setWeight(e.target.value)}
            >
              {Object.keys(product.prices).map(w => (
                <option key={w}>{w}</option>
              ))}
            </select>
            <div className="field flex justify-around items-center">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">
                −
              </button>
              <b>{qty}</b>
              <button onClick={() => setQty(qty + 1)} aria-label="Increase quantity">
                +
              </button>
            </div>
          </div>
          <div className="my-6 flex justify-between text-2xl">
            <span>Total</span>
            <b>Rs. {minPrice * qty}</b>
          </div>
          <button
            onClick={() => {
              for (let i = 0; i < qty; i++) add(product, activeWeight);
            }}
            className="btn w-full bg-forest text-white"
          >
            Add to bag
          </button>
        </div>
      </main>
    </>
  );
}
