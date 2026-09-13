import React from 'react';

export default function OrderCallToAction({ product, activeWeight, qty, onAddToBag }) {
  if (!product) return null;

  const currentPrice = product.prices[activeWeight] || Object.values(product.prices)[0];
  const totalPrice = currentPrice * qty;

  const whatsappMessage = encodeURIComponent(
    `Hello FreshCut! I would like to order ${qty}x ${product.name} (${activeWeight}) for Rs. ${totalPrice}. Please deliver to Karachi.`
  );
  const whatsappUrl = `https://wa.me/923112605525?text=${whatsappMessage}`;

  return (
    <section className="my-12 rounded-3xl bg-gradient-to-br from-emerald-800 to-teal-900 text-white p-8 md:p-10 shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-500/10 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-3xl">
        <span className="inline-block px-3 py-1 rounded-full bg-emerald-700/60 text-emerald-200 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-500/30">
          Order Fresh in Karachi
        </span>
        
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
          Ready to save prep time with fresh-cut {product.name.toLowerCase()}?
        </h2>
        
        <p className="text-emerald-100 text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
          Triple-washed, hygienically cut, and sealed in eco packaging. Order online now for free next-day delivery across Karachi.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            type="button"
            onClick={onAddToBag}
            className="px-8 py-4 rounded-2xl bg-white text-emerald-950 font-bold text-base hover:bg-emerald-50 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🛍️</span> Add {qty}x ({activeWeight}) to Bag — Rs. {totalPrice}
          </button>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-colors flex items-center justify-center gap-2 border border-emerald-400/40"
          >
            <span>💬</span> Order via WhatsApp
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-emerald-200/90 font-medium">
          <span className="flex items-center gap-1.5">✓ Cash on Delivery available</span>
          <span className="flex items-center gap-1.5">✓ Free next-day Karachi delivery</span>
          <span className="flex items-center gap-1.5">✓ 100% Satisfaction Guarantee</span>
        </div>
      </div>
    </section>
  );
}
