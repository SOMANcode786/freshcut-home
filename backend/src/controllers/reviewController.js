import { Review } from '../models/reviewModel.js';
import jwt from 'jsonwebtoken';

function isUserAdmin(req) {
  const match = /^Bearer\s+(\S+)$/i.exec(req.headers.authorization || '');
  if (!match) return false;
  try {
    const user = jwt.verify(match[1], process.env.JWT_SECRET || 'fallback_secret', { algorithms: ['HS256'] });
    return user.role === 'admin';
  } catch {
    return false;
  }
}

export async function listReviews(req, res, next) {
  try {
    const isAdmin = isUserAdmin(req);
    const reviews = await Review.all(isAdmin);
    res.json(reviews);
  } catch (error) {
    next(error);
  }
}

export async function getReview(req, res, next) {
  try {
    const review = await Review.find(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.json(review);
  } catch (error) {
    next(error);
  }
}

export async function createReview(req, res, next) {
  try {
    const { customer, text } = req.body;
    if (!customer || !text) {
      return res.status(400).json({ message: 'Customer name and review text are required.' });
    }
    const created = await Review.create(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
}

export async function updateReview(req, res, next) {
  try {
    const updated = await Review.update(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

export async function deleteReview(req, res, next) {
  try {
    await Review.delete(req.params.id);
    res.json({ message: 'Review deleted successfully', id: req.params.id });
  } catch (error) {
    next(error);
  }
}
