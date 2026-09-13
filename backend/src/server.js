import 'dotenv/config';
import app from './app.js';
import { prisma } from './config/prisma.js';

const required = ['DATABASE_URL', 'JWT_SECRET', 'ADMIN_EMAIL', 'ADMIN_PASSWORD'];
const missing = required.filter(key => !process.env[key]);
if (missing.length) throw new Error(`Missing environment values: ${missing.join(', ')}`);

const port = process.env.PORT || 5000;

prisma.$connect()
  .then(() => {
    console.log('Connected to Neon PostgreSQL database successfully.');
    app.listen(port, () => console.log(`FreshCut API running at http://localhost:${port}`));
  })
  .catch(err => {
    console.error('Failed to connect to database on startup:', err.message);
    app.listen(port, () => console.log(`FreshCut API running at http://localhost:${port}`));
  });
