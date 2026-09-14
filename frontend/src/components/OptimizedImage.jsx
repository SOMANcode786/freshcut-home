import { useState, useEffect } from 'react';
import { getOptimizedImageUrl, getCloudinarySrcSet, FALLBACK_PRODUCT_IMAGE } from '../utils/imageUtils';

export default function OptimizedImage({
  src,
  srcSet: customSrcSet,
  alt = 'FreshCut vegetable product',
  width = 600,
  height = 600,
  loading = 'lazy',
  fetchPriority = 'auto',
  variant = 'card',
  crop = 'fill',
  sizes,
  className = 'h-full w-full object-cover',
  aspectRatio = 'aspect-square',
  fallbackSrc = FALLBACK_PRODUCT_IMAGE,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentErrorSrc, setCurrentErrorSrc] = useState(null);

  // Compute optimized primary URL
  const activeUrl = currentErrorSrc || getOptimizedImageUrl(src, { width, height, crop, variant });
  const computedSrcSet = customSrcSet || (!currentErrorSrc ? getCloudinarySrcSet(src, { crop }) : null);

  useEffect(() => {
    // Reset load & error states if src changes
    setIsLoaded(false);
    setCurrentErrorSrc(null);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (!currentErrorSrc) {
      setCurrentErrorSrc(fallbackSrc);
      setIsLoaded(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${!isLoaded ? 'bg-slate-200 animate-pulse' : ''}`}>
      <img
        src={activeUrl}
        srcSet={computedSrcSet || undefined}
        sizes={sizes || (computedSrcSet ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw' : undefined)}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} transition-opacity duration-300 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
}
