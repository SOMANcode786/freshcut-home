import React, { useState } from 'react';

export default function ProductFAQ({ faq, productName }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faq || !faq.length) return null;

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="my-10 rounded-3xl bg-white p-6 md:p-8 border border-slate-200/80 shadow-xs" aria-labelledby="faq-heading">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 text-xl font-bold">
          ❓
        </span>
        <div>
          <h2 id="faq-heading" className="text-2xl font-bold text-slate-900 font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500">Everything you need to know about preparing and cooking our fresh {productName || 'cut vegetables'}</p>
        </div>
      </div>

      <div className="space-y-3">
        {faq.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="rounded-2xl border border-slate-200/80 overflow-hidden transition-colors">
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                <span className="text-base pr-4">{item.question}</span>
                <span className={`text-xl transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`}>
                  ▾
                </span>
              </button>
              {isOpen && (
                <div className="p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
