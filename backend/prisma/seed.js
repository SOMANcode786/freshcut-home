import {PrismaClient} from '@prisma/client';import products from '../src/data/products.js';
const prisma=new PrismaClient();
try{for(const product of products){await prisma.product.upsert({where:{id:product.id},update:{...product,active:true},create:{...product,active:true}})}console.log(`Seeded ${products.length} FreshCut products`)}finally{await prisma.$disconnect()}
