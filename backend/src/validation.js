export function badRequest(message) { return Object.assign(new Error(message), {status:400}); }
export function productId(value) {
  if (!/^\d+$/.test(String(value)) || !Number.isSafeInteger(Number(value)) || Number(value) < 1 || Number(value) > 2147483647) throw badRequest('Invalid product ID');
  return Number(value);
}
export function productChanges(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw badRequest('Invalid product details');
  const data = {};
  for (const key of ['name','slug','urdu','cat','icon','image','description']) {
    if (key in body) {
      if (typeof body[key] !== 'string' || !body[key].trim()) throw badRequest(`Invalid ${key}`);
      data[key] = body[key].trim();
    }
  }
  for (const key of ['altText','shortDescription','cutDescription','storageInstructions','hygieneInformation']) {
    if (key in body) {
      if (typeof body[key] !== 'string') throw badRequest(`Invalid ${key}`);
      data[key] = body[key].trim();
    }
  }
  for (const key of ['nutritionSummary','nutrients','healthBenefits','cookingUses','faq']) {
    if (key in body) {
      data[key] = body[key];
    }
  }
  for (const key of ['active','sale']) {
    if (key in body) { if (typeof body[key] !== 'boolean') throw badRequest(`Invalid ${key}`); data[key] = body[key]; }
  }
  if ('prices' in body) {
    if (!body.prices || typeof body.prices !== 'object' || Array.isArray(body.prices) || !Object.keys(body.prices).length) throw badRequest('At least one price is required');
    for (const [weight, price] of Object.entries(body.prices)) {
      if (!weight.trim() || !Number.isSafeInteger(price) || price < 1 || price > 2147483647) throw badRequest('Prices must be positive whole rupees');
    }
    data.prices = body.prices;
  }
  if (!Object.keys(data).length) throw badRequest('No product changes supplied');
  return data;
}
function parseWeightToQuantity(weightStr) {
  if (!weightStr) return null;
  const str = String(weightStr).trim().toLowerCase();
  const gMatch = str.match(/^(\d+(?:\.\d+)?)\s*(?:g|gram|grams)$/);
  if (gMatch) return { value: parseFloat(gMatch[1]), unit: 'g' };
  const kgMatch = str.match(/^(\d+(?:\.\d+)?)\s*(?:kg|kgs|kilo|kilogram|kilograms)$/);
  if (kgMatch) return { value: parseFloat(kgMatch[1]) * 1000, unit: 'g' };
  const pcsMatch = str.match(/^(\d+(?:\.\d+)?)\s*(?:pc|pcs|piece|pieces)$/);
  if (pcsMatch) return { value: parseFloat(pcsMatch[1]), unit: 'pcs' };
  return null;
}

function calculatePriceForWeight(prices, targetWeight) {
  if (!prices || typeof prices !== 'object') return 0;
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
  return Number(Object.values(prices)[0]) || 0;
}

export async function priceOrder(body, findProduct) {
  const customer = {};
  for (const key of ['name','phone','address']) {
    if (typeof body?.customer?.[key] !== 'string' || !body.customer[key].trim()) throw badRequest('Required customer details are missing');
    customer[key] = body.customer[key].trim();
  }
  for (const key of ['area','notes','payment']) {
    const value = body.customer[key];
    if (value !== undefined && typeof value !== 'string') throw badRequest(`Invalid ${key}`);
    customer[key] = value?.trim() || (key === 'payment' ? 'Cash on delivery' : '');
  }
  if (!['Cash on delivery','Bank transfer'].includes(customer.payment)) throw badRequest('Invalid payment method');
  if (!Array.isArray(body.items) || !body.items.length || body.items.length > 100) throw badRequest('Supply between 1 and 100 order items');
  const items = [];
  let total = 0;
  for (const item of body.items) {
    if (!item || !Number.isSafeInteger(item.qty) || item.qty < 1 || item.qty > 100 || typeof item.weight !== 'string') throw badRequest('Invalid item quantity or weight');
    const product = await findProduct(productId(item.id));
    if (!product || product.active === false) throw badRequest('An item or weight is unavailable');
    
    let price = product.prices[item.weight];
    if (price === undefined || !Number.isSafeInteger(price)) {
      price = calculatePriceForWeight(product.prices, item.weight);
    }
    if (!Number.isSafeInteger(price) || price < 1) throw badRequest('An item price is unavailable');

    total += price * item.qty;
    if (!Number.isSafeInteger(total) || total > 2147483647) throw badRequest('Order total is too large');
    items.push({id:product.id,name:product.name,image:product.image || '',weight:item.weight,price,qty:item.qty});
  }
  return {customer, items, total};
}
