# PropVista

A modern real estate listing platform for property discovery, agent listings, buyer inquiries, and admin review workflows.

## Features

- Public property marketplace with search and filters
- Property detail pages with gallery, amenities, agent info, and inquiry form
- Agent/admin dashboard for listing performance and approval status
- Inquiry API route with validation
- Prisma schema for users, agents, properties, images, favorites, and inquiries
- Responsive UI built for a professional portfolio demo

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- Zod
- Vercel-ready deployment

## Getting Started

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

Open `http://localhost:3000`.

## Database

Set `DATABASE_URL` in `.env` to your PostgreSQL database, then run:

```bash
npm run prisma:push
```

## Portfolio Pitch

PropVista is a marketplace-style real estate app that demonstrates full-stack product development: searchable listings, role-based workflows, database modeling, API validation, and polished dashboard UI.
# -PropVista
