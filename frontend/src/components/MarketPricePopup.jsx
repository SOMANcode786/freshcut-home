import { useState } from 'react';

export default function MarketPricePopup() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      dir="rtl"
      lang="ur"
      role="region"
      aria-label="مارکیٹ قیمت اطلاع پاپ اپ"
      className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] max-w-md rounded-2xl border border-amber-300/90 bg-amber-50/95 p-4 text-amber-950 shadow-2xl backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start justify-between gap-3 border-b border-amber-200/80 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-200 text-amber-800 font-bold text-xs">
            💡
          </span>
          <h3 className="font-bold text-sm text-amber-950">
            مارکیٹ قیمت اطلاع <span className="text-xs font-semibold text-amber-700">(Daily Rate Update)</span>
          </h3>
        </div>
        <button
          onClick={handleClose}
          className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-amber-200/50 hover:text-amber-900 transition-colors font-bold text-lg cursor-pointer"
          aria-label="Close notification popup"
        >
          ×
        </button>
      </div>

      <div className="mt-3 space-y-3">
        <p className="text-[14px] sm:text-[15px] leading-relaxed font-medium text-amber-950 text-right">
          سبزیوں کی قیمتیں روزانہ مارکیٹ ریٹ کے مطابق تبدیل ہو سکتی ہیں۔ براہِ کرم آرڈر دینے سے پہلے واٹس ایپ پر موجودہ قیمت کی تصدیق کر لیں۔
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <a
            href="https://wa.me/923112605525"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-700 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            <span>💬</span>
            <span>واٹس ایپ پر قیمت معلوم کریں</span>
          </a>
          <button
            onClick={handleClose}
            className="px-3 py-2 text-xs font-semibold text-amber-800 hover:text-amber-950 underline cursor-pointer"
          >
            بند کریں
          </button>
        </div>
      </div>
    </div>
  );
}
