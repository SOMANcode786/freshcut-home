import { PrismaClient } from '@prisma/client';
import products from '../src/data/products.js';
import reviews from '../src/data/reviews.js';

const prisma = new PrismaClient();

try {
  for (const product of products) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: { ...product, active: true },
      create: { ...product, active: true }
    });
  }
  console.log(`Seeded ${products.length} FreshCut products`);

  for (const review of reviews) {
    await prisma.review.upsert({
      where: { id: review.id },
      update: { ...review },
      create: { ...review }
    });
  }
  console.log(`Seeded ${reviews.length} genuine customer reviews`);
} finally {
  await prisma.$disconnect();
}

