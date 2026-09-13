import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { calculatePriceForWeight, sanitizeWeightValue } from '../utils/weightUtils';

export default function ProductCard({ product }) {
  const initialWeight = Object.keys(product.prices)[0] || '250g';
  const [selectedWeight, setSelectedWeight] = useState(initialWeight);
  const [isCustom, setIsCustom] = useState(false);
  const [customVal, setCustomVal] = useState('250');
  const [customUnit, setCustomUnit] = useState('g');
  const { add } = useCart();

  const imageSrc = '/' + product.image.replace(/\.png$/i, '.webp').replace(/^\//, '');

  const baseKeys = Object.keys(product.prices);
  const isPcs = baseKeys.some(k => k.includes('pc'));
  const presetList = isPcs
    ? Array.from(new Set([...baseKeys, '2 pcs', '4 pcs', '6 pcs', '10 pcs']))
    : Array.from(new Set([...baseKeys, '250g', '500g', '750g', '1kg', '1.5kg', '2kg']));

  const activeWeightString = isCustom ? `${customVal || (customUnit === 'kg' ? '0.25' : '250')}${customUnit}` : selectedWeight;
  const currentPrice = calculatePriceForWeight(product.prices, activeWeightString);

  const handleWeightChange = (e) => {
    const val = e.target.value;
    if (val === 'custom') {
      setIsCustom(true);
    } else {
      setIsCustom(false);
      setSelectedWeight(val);
    }
  };

  const handleBlur = () => {
    if (isPcs) return;
    setCustomVal(sanitizeWeightValue(customVal, customUnit));
  };

  const handleAdd = () => {
    let finalWeight = activeWeightString;
    if (isCustom && !isPcs) {
      const sanitized = sanitizeWeightValue(customVal, customUnit);
      setCustomVal(sanitized);
      finalWeight = `${sanitized}${customUnit}`;
    }
    const finalPrice = calculatePriceForWeight(product.prices, finalWeight);
    add(product, finalWeight, finalPrice);
  };

  return (
    <article className="panel overflow-hidden transition hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
      <div>
        <Link to={`/products/${product.id}/${product.slug}`} className="relative block h-48 w-full bg-green-50 focus-visible:outline-2 focus-visible:outline-forest">
          <img
            src={imageSrc}
            alt={product.altText || `Fresh ${product.name} packed by FreshCut Home`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          {product.sale && (
            <span className="absolute left-3 top-3 rounded-full bg-tomato px-3 py-1 text-xs font-bold text-white shadow-xs">
              Sale
            </span>
          )}
        </Link>
        <div className="bg-[#302b3b] p-4 text-white">
          <span className="text-xs font-bold uppercase tracking-wider text-lime">{product.cat}</span>
          <Link to={`/products/${product.id}/${product.slug}`} className="mt-1 block text-left focus-visible:outline-2 focus-visible:outline-lime">
            <h3 className="text-lg font-bold underline decoration-white/40 hover:text-lime transition-colors">
              {product.name} <span className="text-lime/90 font-normal">({activeWeightString})</span>
            </h3>
            <p className="text-sm text-slate-300 font-medium" lang="ur" dir="rtl">
              {product.urdu}
            </p>
          </Link>
          <strong className="my-2 block text-2xl text-lime">Rs. {currentPrice}</strong>

          {/* Weight Selection Controls */}
          <div className="space-y-2 mt-3">
            <select
              aria-label="Select pack weight"
              className="field text-slate-900 bg-white font-medium text-sm w-full"
              value={isCustom ? 'custom' : selectedWeight}
              onChange={handleWeightChange}
            >
              <optgroup label="Preset Weights (Min 250g)">
                {presetList.map(w => {
                  const p = calculatePriceForWeight(product.prices, w);
                  return (
                    <option key={w} value={w}>
                      {w} — Rs. {p}
                    </option>
                  );
                })}
              </optgroup>
              <option value="custom">✏️ Custom Weight (Min 250g)...</option>
            </select>

            {/* Custom Weight Input */}
            {isCustom && (
              <div className="flex gap-2 items-center bg-slate-800/80 p-2 rounded-xl border border-slate-700">
                <input
                  type="number"
                  min={customUnit === 'kg' ? '0.25' : '250'}
                  step="any"
                  placeholder="Min 250g"
                  className="w-full rounded-lg bg-slate-900 px-2 py-1.5 text-sm text-white font-bold border border-slate-600 focus:outline-none focus:border-lime"
                  value={customVal}
                  onChange={e => setCustomVal(e.target.value)}
                  onBlur={handleBlur}
                />
                <select
                  className="rounded-lg bg-slate-900 px-2 py-1.5 text-sm text-white font-bold border border-slate-600 focus:outline-none focus:border-lime"
                  value={customUnit}
                  onChange={e => {
                    setCustomUnit(e.target.value);
                    setCustomVal(e.target.value === 'kg' ? '0.25' : '250');
                  }}
                >
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                  <option value="pcs">pcs</option>
                </select>
              </div>
            )}

            <button
              onClick={handleAdd}
              className="w-full py-2.5 rounded-xl bg-lime font-bold text-forest hover:bg-lime/90 transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-1 mt-2"
            >
              <span>🛍️</span> Add to Bag — Rs. {currentPrice}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
