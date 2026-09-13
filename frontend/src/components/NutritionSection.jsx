import React from 'react';

export default function NutritionSection({ nutritionSummary, nutrients }) {
  if (!nutritionSummary && (!nutrients || !nutrients.length)) return null;

  return (
    <section className="my-10 rounded-3xl bg-slate-50 p-6 md:p-8 border border-slate-100 shadow-sm" aria-labelledby="nutrition-heading">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 text-xl font-bold">
          🥗
        </span>
        <div>
          <h2 id="nutrition-heading" className="text-2xl font-bold text-slate-900 font-serif">
            Nutritional Overview
          </h2>
          <p className="text-sm text-slate-500">Key macronutrients and beneficial micronutrients per 100g serving</p>
        </div>
      </div>

      {nutritionSummary && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 mb-8">
          <div className="rounded-2xl bg-white p-4 text-center border border-slate-200/60 shadow-xs">
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Calories</span>
            <span className="mt-1 block text-xl font-extrabold text-emerald-700">{nutritionSummary.calories || 'N/A'}</span>
          </div>
          <div className="rounded-2xl bg-white p-4 text-center border border-slate-200/60 shadow-xs">
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Carbs</span>
            <span className="mt-1 block text-xl font-extrabold text-slate-800">{nutritionSummary.carbs || 'N/A'}</span>
          </div>
          <div className="rounded-2xl bg-white p-4 text-center border border-slate-200/60 shadow-xs">
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Protein</span>
            <span className="mt-1 block text-xl font-extrabold text-slate-800">{nutritionSummary.protein || 'N/A'}</span>
          </div>
          <div className="rounded-2xl bg-white p-4 text-center border border-slate-200/60 shadow-xs">
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Fat</span>
            <span className="mt-1 block text-xl font-extrabold text-slate-800">{nutritionSummary.fat || 'N/A'}</span>
          </div>
          <div className="rounded-2xl bg-white p-4 text-center border border-slate-200/60 shadow-xs col-span-2 sm:col-span-1">
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Fiber</span>
            <span className="mt-1 block text-xl font-extrabold text-emerald-600">{nutritionSummary.fiber || 'N/A'}</span>
          </div>
        </div>
      )}

      {nutrients && nutrients.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800">Important Nutrients & Compounds</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {nutrients.map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-4 border border-slate-200/60 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-900">{item.name}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/50">
                      {item.amount}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 italic">
        * Disclaimer: Nutritional values are approximate and may vary based on seasonal harvests and preparation. This information is for educational purposes and is not medical advice.
      </div>
    </section>
  );
}
