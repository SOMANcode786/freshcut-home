export default function MarketPriceNotice({ variant = 'full', className = '' }) {
  const isFull = variant === 'full';

  const fullNoticeText = "سبزیوں کی قیمتیں مارکیٹ ریٹ کے مطابق تبدیل ہو سکتی ہیں۔ براہِ کرم آرڈر دینے سے پہلے واٹس ایپ پر موجودہ قیمت کی تصدیق کر لیں۔";
  const shortNoticeText = "قیمتیں مارکیٹ ریٹ کے مطابق تبدیل ہو سکتی ہیں۔ موجودہ قیمت کی تصدیق واٹس ایپ پر کریں۔";

  const noticeText = isFull ? fullNoticeText : shortNoticeText;
  const whatsappUrl = "https://wa.me/923112605525";

  return (
    <aside
      dir="rtl"
      lang="ur"
      aria-label="مارکیٹ کی قیمت کی اطلاع"
      className={`rounded-2xl border border-amber-200/90 bg-amber-50/95 p-3.5 sm:p-4 text-amber-950 shadow-xs transition-all ${
        isFull ? 'my-3' : 'my-2 text-xs sm:text-sm'
      } ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        {/* Info Icon & Notice Text */}
        <div className="flex items-start sm:items-center gap-2.5 flex-1 min-w-0">
          <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-200/70 text-amber-800 mt-0.5 sm:mt-0">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </span>
          <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-amber-950 tracking-wide text-right">
            {noticeText}
          </p>
        </div>

        {/* WhatsApp Link Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-700 px-3.5 py-1.5 text-[13px] sm:text-[14px] font-bold text-white shadow-xs hover:bg-emerald-800 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-700 self-start sm:self-auto cursor-pointer"
        >
          <span>💬</span>
          <span>واٹس ایپ پر قیمت معلوم کریں</span>
        </a>
      </div>
    </aside>
  );
}
