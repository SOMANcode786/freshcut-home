import { prisma } from '../config/prisma.js';
import defaultReviews from '../data/reviews.js';

let inMemoryReviews = [...defaultReviews];
let nextId = 2;

export const Review = {
  async all(isAdmin = false) {
    try {
      const where = isAdmin ? {} : { published: true };
      const reviews = await prisma.review.findMany({
        where,
        orderBy: { id: 'desc' }
      });
      if (reviews && reviews.length > 0) return reviews;
    } catch (err) {
      console.warn('Prisma review fetch warning, falling back to memory state:', err.message);
    }
    return isAdmin ? inMemoryReviews : inMemoryReviews.filter(r => r.published !== false);
  },

  async find(id) {
    const numId = Number(id);
    try {
      const review = await prisma.review.findUnique({ where: { id: numId } });
      if (review) return review;
    } catch {
      // Fallback
    }
    return inMemoryReviews.find(r => Number(r.id) === numId) || null;
  },

  async create(data) {
    const cleanData = {
      customer: String(data.customer || 'Customer').trim(),
      city: String(data.city || 'Karachi').trim(),
      rating: Math.min(5, Math.max(1, Number(data.rating) || 5)),
      text: String(data.text || '').trim(),
      date: data.date ? String(data.date).trim() : new Date().toISOString().split('T')[0],
      verified: data.verified !== undefined ? Boolean(data.verified) : true,
      published: data.published !== undefined ? Boolean(data.published) : true
    };

    try {
      return await prisma.review.create({ data: cleanData });
    } catch (err) {
      console.warn('Prisma review create fallback to in-memory:', err.message);
      const newReview = {
        id: nextId++,
        ...cleanData,
        createdAt: new Date().toISOString()
      };
      inMemoryReviews.unshift(newReview);
      return newReview;
    }
  },

  async update(id, changes) {
    const numId = Number(id);
    const allowed = ['customer', 'city', 'rating', 'text', 'date', 'verified', 'published'];
    const data = {};

    for (const key of allowed) {
      if (changes[key] !== undefined) {
        if (key === 'rating') data.rating = Math.min(5, Math.max(1, Number(changes.rating) || 5));
        else if (key === 'verified' || key === 'published') data[key] = Boolean(changes[key]);
        else data[key] = String(changes[key]).trim();
      }
    }

    try {
      return await prisma.review.update({
        where: { id: numId },
        data
      });
    } catch (err) {
      console.warn('Prisma review update fallback to in-memory:', err.message);
      const idx = inMemoryReviews.findIndex(r => Number(r.id) === numId);
      if (idx !== -1) {
        inMemoryReviews[idx] = { ...inMemoryReviews[idx], ...data };
        return inMemoryReviews[idx];
      }
      throw new Error('Review not found');
    }
  },

  async delete(id) {
    const numId = Number(id);
    try {
      return await prisma.review.delete({ where: { id: numId } });
    } catch (err) {
      console.warn('Prisma review delete fallback to in-memory:', err.message);
      inMemoryReviews = inMemoryReviews.filter(r => Number(r.id) !== numId);
      return { id: numId, deleted: true };
    }
  }
};
