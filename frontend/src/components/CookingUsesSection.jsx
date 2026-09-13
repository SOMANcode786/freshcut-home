import React from 'react';

export default function CookingUsesSection({ cutDescription, cookingUses }) {
  if (!cutDescription && (!cookingUses || !cookingUses.length)) return null;

  return (
    <section className="my-10 rounded-3xl bg-white p-6 md:p-8 border border-slate-200/80 shadow-xs" aria-labelledby="cooking-heading">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 text-xl font-bold">
          🍳
        </span>
        <div>
          <h2 id="cooking-heading" className="text-2xl font-bold text-slate-900 font-serif">
            Cutting Style & Culinary Uses
          </h2>
          <p className="text-sm text-slate-500">Thoughtfully prepared cuts to save kitchen prep time and elevate every recipe</p>
        </div>
      </div>

      {cutDescription && (
        <div className="mb-8 rounded-2xl bg-amber-50/60 p-5 border border-amber-200/60">
          <h3 className="font-bold text-amber-900 text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
            <span>✂️</span> Description & Purpose of Cut
          </h3>
          <p className="text-slate-700 leading-relaxed text-base">{cutDescription}</p>
        </div>
      )}

      {cookingUses && cookingUses.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4">Best Cooking Uses & Dish Ideas</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {cookingUses.map((use, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-50 p-5 border border-slate-200/70">
                <h4 className="font-bold text-slate-900 mb-2 text-base flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> {typeof use === 'string' ? use : use.title}
                </h4>
                {typeof use !== 'string' && use.description && (
                  <p className="text-sm text-slate-600 leading-relaxed">{use.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
