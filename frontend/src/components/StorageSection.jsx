import React from 'react';

export default function StorageSection({ storageInstructions, hygieneInformation }) {
  if (!storageInstructions && !hygieneInformation) return null;

  return (
    <section className="my-10 rounded-3xl bg-slate-900 text-white p-6 md:p-8 shadow-md" aria-labelledby="storage-heading">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-800 text-emerald-300 text-xl font-bold">
          🧊
        </span>
        <div>
          <h2 id="storage-heading" className="text-2xl font-bold text-white font-serif">
            Storage & Hygiene Assurance
          </h2>
          <p className="text-sm text-slate-300">How we ensure 100% kitchen safety and maximum freshness from farm to door</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {storageInstructions && (
          <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700/80">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🌡️</span>
              <h3 className="font-bold text-emerald-400 text-base">Storage Instructions</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{storageInstructions}</p>
          </div>
        )}

        {hygieneInformation && (
          <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700/80">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">✨</span>
              <h3 className="font-bold text-emerald-400 text-base">Preparation & Hygiene Guarantee</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{hygieneInformation}</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-4 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span> Triple-washed in sanitized water
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span> 100% Preservative Free
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span> Ready to cook upon delivery
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span> Free Next-Day Karachi Delivery
        </span>
      </div>
    </section>
  );
}
