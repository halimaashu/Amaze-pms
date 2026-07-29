# 🏨 Amaze PMS

A premium **Hotel Property Management System** built with Next.js 16, TypeScript, Tailwind CSS, MongoDB, and NextAuth. Featuring a stunning dark-mode UI with glassmorphism, smooth animations, and AI-powered interactions.

## 🚀 Live Demo

**👉 [https://amaze-pms-livid.vercel.app/](https://amaze-pms-livid.vercel.app/)**

---

## ✨ Features

- 🌑 Dark-mode design with vibrant neon accents & glassmorphism
- 🏠 Room catalog, booking flow, and management dashboards
- 🔐 Authentication via NextAuth (Google OAuth + Credentials)
- 🗄️ MongoDB with Mongoose models (`User`, `Room`, `Booking`)
- 🤖 AI-powered chat & recommendations (Gemini/Claude ready)
- 🔔 Real-time toast notifications and custom animated cursor
- 🧮 Built-in rent/pricing calculator
- 📱 Fully responsive across all devices

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 16 (App Router + Turbopack) |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS + Framer Motion        |
| Auth        | NextAuth.js (Google + Credentials)  |
| Database    | MongoDB + Mongoose                  |
| Deployment  | Vercel                              |

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/amaze-pms.git
cd amaze-pms
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

This project is deployed on **Vercel**.

**Live URL:** [https://amaze-pms-livid.vercel.app/](https://amaze-pms-livid.vercel.app/)

To deploy your own instance:
1. Push your code to GitHub
2. Import the repo on [Vercel](https://vercel.com)
3. Add the environment variables in the Vercel dashboard
4. Deploy 🚀

---

## 👨‍💻 Author

**Ashik** — Full-stack development, premium UI design, and AI integration.

---

*Built with ❤️ for modern hospitality technology.*
