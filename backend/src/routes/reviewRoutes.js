import { Router } from 'express';
import { listReviews, getReview, createReview, updateReview, deleteReview } from '../controllers/reviewController.js';
import { requireAdmin } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', listReviews);
router.get('/:id', getReview);
router.post('/', requireAdmin, createReview);
router.put('/:id', requireAdmin, updateReview);
router.delete('/:id', requireAdmin, deleteReview);

export default router;
