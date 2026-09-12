import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [weight, setWeight] = useState(Object.keys(product.prices)[0]);
  const { add } = useCart();
  const imageSrc = '/' + product.image.replace(/\.png$/i, '.webp');

  return (
    <article className="panel overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/product/${product.slug}`} className="relative block h-48 w-full bg-green-50">
        <img
          src={imageSrc}
          alt={`${product.name} fresh cut vegetable`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {product.sale && (
          <span className="absolute left-3 top-3 rounded-full bg-tomato px-3 py-1 text-xs font-bold text-white">
            Sale
          </span>
        )}
      </Link>
      <div className="bg-[#302b3b] p-4 text-white">
        <span className="text-xs font-bold uppercase tracking-wider text-lime">{product.cat}</span>
        <Link to={`/product/${product.slug}`} className="mt-2 block text-left">
          <h3 className="text-lg font-bold underline decoration-white/40">
            {product.name} {weight}
          </h3>
          <p className="text-sm text-slate-300" lang="ur">
            {product.urdu}
          </p>
        </Link>
        <strong className="my-3 block text-xl">Rs. {product.prices[weight]}</strong>
        <div className="flex gap-2">
          <select
            className="field text-slate-900"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          >
            {Object.keys(product.prices).map(w => (
              <option key={w}>{w}</option>
            ))}
          </select>
          <button
            onClick={() => add(product, weight)}
            className="rounded-xl bg-lime px-3 font-bold text-forest"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
