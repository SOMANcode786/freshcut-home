# FreshCut Home — React + Express

A beginner-friendly full-stack vegetable ordering application. It keeps the FreshCut storefront, 47 products, free delivery, next-day delivery before 12:00 AM, WhatsApp confirmation, detail pages, cart, checkout and editable admin dashboard.

## Technology

- Frontend: React SPA, Vite and Tailwind CSS
- Backend: Express.js using MVC architecture
- Authentication: JWT for admin routes
- Database: Neon PostgreSQL with Prisma ORM

## Run the project

1. Create a Neon project and copy its PostgreSQL connection string.
2. In `backend`, copy `.env.example` to `.env` and paste the URL into `DATABASE_URL`.
3. Run `npm install`, `npm run db:generate`, `npm run db:migrate -- --name init`, and `npm run db:seed` in `backend`.
4. Run `npm run dev` in `backend`.
5. In `frontend`, copy `.env.example` to `.env`, run `npm install`, then `npm run dev`.
6. Open `http://localhost:5173`.

## MVC folders

- `backend/src/models`: Neon data access through Prisma
- `backend/src/controllers`: request handling and validation
- `backend/src/routes`: API URL definitions
- `backend/src/middleware`: JWT and error handling
- `frontend/src/components`: reusable interface modules
- `frontend/src/pages`: shop, product and admin screens
- `frontend/src/services`: API communication
- `frontend/src/context`: cart state

## Neon deployment

Set `DATABASE_URL` on the backend hosting service using Neon's pooled connection string. Run `npm run db:deploy` during deployment. Never commit `.env` or your Neon password.

## SEO and Vercel

Set `VITE_SITE_URL` and `SITE_URL` to your final `https://` domain in Vercel. The build generates `robots.txt` and `sitemap.xml`. The React app includes canonical metadata, Open Graph tags, LocalBusiness structured data, descriptive image text, semantic headings and Karachi-focused customer content. After launch, submit `/sitemap.xml` in Google Search Console.

## Main API routes

- `POST /api/auth/login`
- `GET /api/products`
- `PATCH /api/products/:id` (admin JWT)
- `POST /api/orders`
- `GET /api/orders` (admin JWT)
- `PATCH /api/orders/:id/status` (admin JWT)
