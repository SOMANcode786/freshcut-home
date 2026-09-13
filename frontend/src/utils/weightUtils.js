/**
 * Utility functions for parsing weights and calculating prices for standard and custom weights.
 */

// Parse weight strings like "250g", "1.5kg", "500 grams", "2 pcs" into value and unit
export function parseWeightToQuantity(weightStr) {
  if (!weightStr) return null;
  const str = String(weightStr).trim().toLowerCase();

  // Grams (e.g. "250g", "500 grams", "750g")
  const gMatch = str.match(/^(\d+(?:\.\d+)?)\s*(?:g|gram|grams)$/);
  if (gMatch) return { value: parseFloat(gMatch[1]), unit: 'g' };

  // Kilograms (e.g. "1.5kg", "2.5 kgs", "1 kg")
  const kgMatch = str.match(/^(\d+(?:\.\d+)?)\s*(?:kg|kgs|kilo|kilogram|kilograms)$/);
  if (kgMatch) return { value: parseFloat(kgMatch[1]) * 1000, unit: 'g' };

  // Pieces (e.g. "2 pcs", "4 pieces")
  const pcsMatch = str.match(/^(\d+(?:\.\d+)?)\s*(?:pc|pcs|piece|pieces)$/);
  if (pcsMatch) return { value: parseFloat(pcsMatch[1]), unit: 'pcs' };

  return null;
}

// Format numeric value + unit back into readable string
export function formatWeightString(value, unit = 'g') {
  const num = parseFloat(value);
  if (isNaN(num) || num <= 0) return '';

  if (unit === 'kg') {
    return num >= 1 ? `${num}kg` : `${num * 1000}g`;
  }
  if (unit === 'g') {
    return num >= 1000 ? `${num / 1000}kg` : `${num}g`;
  }
  return `${num} ${unit}`;
}

// Calculate price for a target weight string based on a product's base prices map
export function calculatePriceForWeight(prices, targetWeight) {
  if (!prices || typeof prices !== 'object') return 0;

  // Direct match in prices object
  if (prices[targetWeight] !== undefined && Number.isFinite(Number(prices[targetWeight]))) {
    return Number(prices[targetWeight]);
  }

  const target = parseWeightToQuantity(targetWeight);
  if (!target || target.value <= 0) return 0;

  let bestRatePerUnit = null;
  let minDiff = Infinity;

  for (const [wKey, wPrice] of Object.entries(prices)) {
    const p = Number(wPrice);
    if (!Number.isFinite(p) || p <= 0) continue;

    const base = parseWeightToQuantity(wKey);
    if (base && base.unit === target.unit && base.value > 0) {
      const rate = p / base.value;
      const diff = Math.abs(target.value - base.value);
      if (diff < minDiff || !bestRatePerUnit) {
        minDiff = diff;
        bestRatePerUnit = rate;
      }
    }
  }

  if (bestRatePerUnit) {
    return Math.max(1, Math.round(bestRatePerUnit * target.value));
  }

  // Fallback to first price in map
  return Number(Object.values(prices)[0]) || 0;
}
