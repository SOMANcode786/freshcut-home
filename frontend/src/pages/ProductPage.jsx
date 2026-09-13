import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { useCart } from '../context/CartContext';
import { calculatePriceForWeight, sanitizeWeightValue } from '../utils/weightUtils';
import Seo from '../components/Seo';
import NutritionSection from '../components/NutritionSection';
import BenefitsSection from '../components/BenefitsSection';
import CookingUsesSection from '../components/CookingUsesSection';
import StorageSection from '../components/StorageSection';
import ProductFAQ from '../components/ProductFAQ';
import OrderCallToAction from '../components/OrderCallToAction';
import DeliveryBadges from '../components/DeliveryBadges';

export default function ProductPage({ product: initialProduct }) {
  const { slug } = useParams();
  const [product, setProduct] = useState(initialProduct || null);
  const [loading, setLoading] = useState(!initialProduct);
  const [error, setError] = useState(null);

  const [selectedWeight, setSelectedWeight] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [customVal, setCustomVal] = useState('250');
  const [customUnit, setCustomUnit] = useState('g');

  const [qty, setQty] = useState(1);
  const { add } = useCart();

  useEffect(() => {
    if (initialProduct && initialProduct.slug === slug) {
      setProduct(initialProduct);
      setSelectedWeight(Object.keys(initialProduct.prices)[0] || '250g');
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
          setSelectedWeight(Object.keys(found.prices)[0] || '250g');
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

  // Weight Calculation Logic
  const baseKeys = Object.keys(product.prices);
  const isPcs = baseKeys.some(k => k.includes('pc'));
  const presetList = isPcs
    ? Array.from(new Set([...baseKeys, '2 pcs', '4 pcs', '6 pcs', '10 pcs']))
    : Array.from(new Set([...baseKeys, '250g', '500g', '750g', '1kg', '1.5kg', '2kg', '5kg']));

  const activeWeightString = isCustom ? `${customVal || (customUnit === 'kg' ? '0.25' : '250')}${customUnit}` : selectedWeight;
  const unitPrice = calculatePriceForWeight(product.prices, activeWeightString);
  const totalPrice = unitPrice * qty;

  const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');
  const imagePath = '/' + product.image.replace(/\.png$/i, '.webp').replace(/^\//, '');
  const fullImageUrl = `${siteUrl}${imagePath}`;
  const canonicalUrl = `${siteUrl}/product/${product.slug}`;

  // SEO Title & Description
  const seoTitle = `${product.name} (${product.urdu}) - Ready-to-Cook Fresh-Cut Vegetables Karachi | FreshCut`;
  const seoDescription = `Order fresh-cut ${product.name.toLowerCase()} (${product.urdu}) online in Karachi starting at Rs. ${unitPrice}. ${product.shortDescription || product.description} Triple-washed, ready-to-cook vegetables with free next-day delivery in Karachi.`;

  // Schemas: Product + FAQPage
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: fullImageUrl,
    description: product.shortDescription || product.description,
    category: product.cat,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PKR',
      price: unitPrice,
      availability: product.active !== false ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: canonicalUrl
    }
  };

  const schemas = [productSchema];

  if (product.faq && Array.isArray(product.faq) && product.faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: product.faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    });
  }

  const handleCustomBlur = () => {
    if (isPcs) return;
    const sanitized = sanitizeWeightValue(customVal, customUnit);
    setCustomVal(sanitized);
  };

  const handleUnitChange = (newUnit) => {
    setCustomUnit(newUnit);
    if (!isPcs) {
      setCustomVal(newUnit === 'kg' ? '0.25' : '250');
    }
  };

  const handleAddToBag = () => {
    let finalWeight = activeWeightString;
    if (isCustom && !isPcs) {
      const sanitizedVal = sanitizeWeightValue(customVal, customUnit);
      setCustomVal(sanitizedVal);
      finalWeight = `${sanitizedVal}${customUnit}`;
    }
    const finalPrice = calculatePriceForWeight(product.prices, finalWeight);

    for (let i = 0; i < qty; i++) {
      add(product, finalWeight, finalPrice);
    }
  };

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDescription}
        image={imagePath}
        type="product"
        schema={schemas}
      />

      <main className="mx-auto max-w-6xl px-5 py-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-slate-500">
            <li>
              <Link to="/" className="hover:text-emerald-700 hover:underline">
                Storefront
              </Link>
            </li>
            <li>/</li>
            <li>
              <span className="text-slate-400">{product.cat}</span>
            </li>
            <li>/</li>
            <li className="font-semibold text-slate-800" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Hero / Introduction */}
        <section className="grid gap-10 md:grid-cols-2 items-start" aria-labelledby="product-title">
          <div className="overflow-hidden rounded-3xl bg-green-50 border border-emerald-100/60 shadow-xs">
            <img
              src={imagePath}
              alt={`Hygienically prepped ${product.name} (${product.urdu}) - ready-to-cook fresh-cut vegetables delivery in Karachi`}
              loading="eager"
              className="h-full w-full object-cover max-h-[480px]"
            />
          </div>

          <div className="self-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                {product.cat}
              </span>
              <span className="text-xs text-slate-500 font-medium">• Fresh-Cut Vegetables Karachi</span>
            </div>

            <h1 id="product-title" className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              {product.name}
            </h1>

            <p className="mt-2 text-2xl font-bold text-emerald-700" lang="ur">
              {product.urdu}
            </p>

            <p className="my-5 text-lg leading-relaxed text-slate-600">
              {product.shortDescription || product.description}
            </p>

            {/* Pack Sizes & Custom Weight Selection */}
            <div className="my-6 rounded-2xl bg-slate-50 p-5 border border-slate-200/80">
              <div className="flex justify-between items-center mb-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Select Pack Weight (Min. 250g)
                </label>
                <button
                  type="button"
                  onClick={() => setIsCustom(!isCustom)}
                  className="text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
                >
                  {isCustom ? '← Back to Presets' : '✏️ Enter Custom Weight'}
                </button>
              </div>

              {/* Weight Pill Buttons */}
              {!isCustom ? (
                <div className="flex flex-wrap gap-2 mb-4">
                  {presetList.map(w => {
                    const price = calculatePriceForWeight(product.prices, w);
                    const isSelected = selectedWeight === w;
                    return (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setSelectedWeight(w)}
                        className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500'
                        }`}
                      >
                        {w} — Rs. {price}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setIsCustom(true)}
                    className="px-3.5 py-2 rounded-xl text-sm font-bold text-emerald-800 bg-emerald-100/60 hover:bg-emerald-100 border border-emerald-300/60 cursor-pointer"
                  >
                    + Custom
                  </button>
                </div>
              ) : (
                /* Custom Weight Input Mode */
                <div className="mb-4 bg-white p-4 rounded-xl border border-emerald-200 shadow-xs">
                  <label className="block text-xs font-bold text-slate-600 mb-2">
                    Custom Weight (Minimum 250g / 0.25kg):
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      min={customUnit === 'kg' ? '0.25' : '250'}
                      step="any"
                      placeholder={customUnit === 'kg' ? 'e.g. 0.75 or 1.5' : 'e.g. 250 or 750'}
                      className="field flex-1 text-base font-bold text-slate-900"
                      value={customVal}
                      onChange={e => setCustomVal(e.target.value)}
                      onBlur={handleCustomBlur}
                    />
                    <select
                      className="field w-32 text-base font-bold text-slate-900"
                      value={customUnit}
                      onChange={e => handleUnitChange(e.target.value)}
                    >
                      <option value="g">Grams (g)</option>
                      <option value="kg">Kilograms (kg)</option>
                      <option value="pcs">Pieces (pcs)</option>
                    </select>
                  </div>
                  <p className="mt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <span>💡</span> Minimum portion order is 250g. Calculated price for {activeWeightString}: <b>Rs. {unitPrice}</b>
                  </p>
                </div>
              )}

              {/* Quantity Selector & Total */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-200/80">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Pack Quantity</span>
                  <div className="mt-1 flex justify-around items-center bg-white border border-slate-200 rounded-xl w-32 py-1">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      aria-label="Decrease quantity"
                      className="px-3 text-lg font-bold text-slate-600 hover:text-emerald-700 cursor-pointer"
                    >
                      −
                    </button>
                    <b className="text-slate-800 text-base">{qty}</b>
                    <button
                      onClick={() => setQty(qty + 1)}
                      aria-label="Increase quantity"
                      className="px-3 text-lg font-bold text-slate-600 hover:text-emerald-700 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Total Price</span>
                  <span className="text-3xl font-bold text-emerald-700">Rs. {totalPrice}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleAddToBag}
              className="btn w-full bg-forest text-white py-4 rounded-2xl text-lg font-bold shadow-md hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Add to Bag — Rs. {totalPrice}
            </button>

            {/* Delivery & Freshness Trust Badges */}
            <DeliveryBadges />
          </div>
        </section>

        {/* Nutritional Overview */}
        <NutritionSection
          nutritionSummary={product.nutritionSummary}
          nutrients={product.nutrients}
        />

        {/* Health Benefits */}
        <BenefitsSection
          healthBenefits={product.healthBenefits}
        />

        {/* Cutting Style & Cooking Uses */}
        <CookingUsesSection
          cutDescription={product.cutDescription}
          cookingUses={product.cookingUses}
        />

        {/* Storage & Hygiene */}
        <StorageSection
          storageInstructions={product.storageInstructions}
          hygieneInformation={product.hygieneInformation}
        />

        {/* Product FAQs */}
        <ProductFAQ
          faq={product.faq}
          productName={product.name}
        />

        {/* Order Fresh CTA */}
        <OrderCallToAction
          product={product}
          activeWeight={activeWeightString}
          qty={qty}
          onAddToBag={handleAddToBag}
        />
      </main>
    </>
  );
}
