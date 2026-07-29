# Amaze PMS

A premium dark‑mode hotel Property Management System built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **NextAuth** for secure authentication. This project showcases a sleek UI with glass‑morphism, framer‑motion animations, and AI‑enabled features.

## Features
- Dark‑mode only design with vibrant neon accents
- Room catalog, booking flow, and detailed management dashboards
- Authentication (Google OAuth & credentials) via NextAuth
- MongoDB integration with Mongoose models (`User`, `Room`, `Booking`)
- AI‑powered recommendations (Gemini/Claude) – ready to plug in
- Real‑time toast notifications and custom cursor interactions

## Getting Started
```bash
npm install
# ensure .env.local has MONGODB_URI, NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

## Author
**Ashik** – Developed the full‑stack integration, premium UI, and AI features.

---
*Built with love for modern hospitality tech.*

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
