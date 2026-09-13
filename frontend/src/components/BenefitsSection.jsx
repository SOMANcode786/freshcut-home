import React from 'react';

export default function BenefitsSection({ healthBenefits }) {
  if (!healthBenefits || !healthBenefits.length) return null;

  return (
    <section className="my-10 rounded-3xl bg-emerald-900/5 p-6 md:p-8 border border-emerald-100" aria-labelledby="benefits-heading">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white text-xl font-bold">
          💚
        </span>
        <div>
          <h2 id="benefits-heading" className="text-2xl font-bold text-slate-900 font-serif">
            Potential Health Benefits
          </h2>
          <p className="text-sm text-slate-600">How incorporating this fresh-cut vegetable into your daily diet can support overall wellness</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {healthBenefits.map((benefit, idx) => (
          <div key={idx} className="rounded-2xl bg-white p-5 border border-emerald-100/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <h3 className="font-bold text-slate-900 text-base">{benefit.title}</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
