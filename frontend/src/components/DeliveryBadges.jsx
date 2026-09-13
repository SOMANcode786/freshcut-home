import React from 'react';

export default function DeliveryBadges({ className = '' }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 ${className}`}>
      {/* Badge 1: Next Day Delivery */}
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100/80 shadow-2xs transition-all hover:bg-emerald-50">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-white p-1.5 border border-emerald-200/60 flex items-center justify-center">
          <img
            src="/assets/products/deliver.avif"
            alt="Next Day Delivery in Karachi"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-base leading-snug">
            Next Day Delivery
          </h4>
          <p className="text-xs text-slate-600 font-medium mt-0.5">
            For orders received before 10pm
          </p>
        </div>
      </div>

      {/* Badge 2: 100% Fresh & Hygienic */}
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100/80 shadow-2xs transition-all hover:bg-emerald-50">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-white p-1.5 border border-emerald-200/60 flex items-center justify-center">
          <img
            src="/assets/products/fresh.avif"
            alt="100% Fresh & Hygienic"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-base leading-snug">
            100% Fresh &amp; Hygienic
          </h4>
          <p className="text-xs text-slate-600 font-medium mt-0.5">
            All natural preservatives free
          </p>
        </div>
      </div>
    </div>
  );
}
