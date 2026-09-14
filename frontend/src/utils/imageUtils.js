/**
 * Image transformation and optimization utilities for FreshCut Home.
 */

// Local fallback SVG image path
export const FALLBACK_PRODUCT_IMAGE = '/assets/placeholder-product.svg';

/**
 * Transforms an image URL or local asset path into an optimized URL.
 * Handles Cloudinary URL transformations and normalizes local WebP asset paths.
 *
 * @param {string} src - The original image URL or relative path
 * @param {Object} options - Transformation options
 * @param {number} [options.width] - Target image width
 * @param {number} [options.height] - Target image height
 * @param {string} [options.crop='fill'] - Cloudinary crop mode ('fill', 'fit', 'limit', etc.)
 * @param {string} [options.variant='card'] - Preset variant ('card', 'detail', 'thumbnail')
 * @returns {string} - The optimized image URL
 */
export function getOptimizedImageUrl(src, { width, height, crop, variant = 'card' } = {}) {
  if (!src) return FALLBACK_PRODUCT_IMAGE;

  // Determine width, height, and crop defaults based on variant if not explicitly passed
  let targetWidth = width;
  let targetHeight = height;
  let targetCrop = crop;

  if (variant === 'thumbnail') {
    targetWidth = targetWidth || 160;
    targetHeight = targetHeight || 160;
    targetCrop = targetCrop || 'fill';
  } else if (variant === 'detail') {
    targetWidth = targetWidth || 1000;
    targetHeight = targetHeight || 1000;
    targetCrop = targetCrop || 'limit';
  } else {
    // Default / card
    targetWidth = targetWidth || 600;
    targetHeight = targetHeight || 600;
    targetCrop = targetCrop || 'fill';
  }

  // 1. Cloudinary URL optimization
  // Safe Cloudinary pattern matching: res.cloudinary.com/.../upload/...
  if (typeof src === 'string' && src.includes('res.cloudinary.com/') && src.includes('/upload/')) {
    const transformationStr = `f_auto,q_auto,w_${targetWidth},h_${targetHeight},c_${targetCrop}`;

    const uploadIndex = src.indexOf('/upload/');
    const prefix = src.substring(0, uploadIndex + 8); // includes '/upload/'
    const rest = src.substring(uploadIndex + 8);

    const restParts = rest.split('/');
    let cleanRestParts = [];

    if (restParts[0] && (restParts[0].includes('f_') || restParts[0].includes('q_') || restParts[0].includes('w_') || restParts[0].includes('c_'))) {
      cleanRestParts = restParts.slice(1);
    } else {
      cleanRestParts = restParts;
    }

    return `${prefix}${transformationStr}/${cleanRestParts.join('/')}`;
  }

  // 2. Handle HTTPS/HTTP external non-Cloudinary URLs without altering them
  if (typeof src === 'string' && (src.startsWith('http://') || src.startsWith('https://'))) {
    return src;
  }

  // 3. Local asset path normalization
  let cleanPath = String(src).trim();
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  // Automatically prefer WebP for PNG asset paths in public directory
  cleanPath = cleanPath.replace(/\.png$/i, '.webp');

  return cleanPath;
}

/**
 * Generates Cloudinary srcSet string for responsive images.
 * Returns null for non-Cloudinary images.
 */
export function getCloudinarySrcSet(src, { crop = 'fill', widths = [300, 600, 900, 1200] } = {}) {
  if (!src || typeof src !== 'string' || !src.includes('res.cloudinary.com/') || !src.includes('/upload/')) {
    return null;
  }

  return widths
    .map(w => {
      const url = getOptimizedImageUrl(src, { width: w, height: w, crop });
      return `${url} ${w}w`;
    })
    .join(', ');
}
