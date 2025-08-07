# 🧠 Study Buddy – AI-Powered Exam Prep Website

![Next.js](https://img.shields.io/badge/Framework-Next.js-black?logo=nextdotjs)
![Tailwind](https://img.shields.io/badge/Style-TailwindCSS-06B6D4?logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/UI-shadcn%2Fui-orange)
![Clerk](https://img.shields.io/badge/Auth-Clerk-blueviolet?logo=clerk)
![Stripe](https://img.shields.io/badge/Payments-Stripe-635bff?logo=stripe)
![Database](https://img.shields.io/badge/Database-Neon-blue?logo=postgresql)
![AI](https://img.shields.io/badge/AI-Gemini%20AI-red?logo=google)
![Jobs](https://img.shields.io/badge/Background-Inngest-purple)
![Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![Status](https://img.shields.io/badge/Status-Live-success)
![License](https://img.shields.io/badge/License-MIT-green)

**Study Buddy** is an **AI-powered exam preparation platform** that allows students to generate intelligent study materials like notes, flashcards, and quizzes based on their topics or syllabus using **Google Gemini AI**. It features secure user authentication, a clean responsive UI, and background task handling — all built with modern full-stack tools.

---

## 🌐 Live Website

🔗 [Live Website](https://study-buddy-ai-powered-exam-prep-website-3azblxazv.vercel.app/) 

---

## 🚀 Tech Stack

| Layer              | Technology                                                             |
|--------------------|------------------------------------------------------------------------|
| **Frontend**        | Next.js, React 18, Tailwind CSS, shadcn/ui                            |
| **Backend**         | Next.js API Routes, Node.js, Drizzle ORM                              |
| **Database**        | Neon (PostgreSQL)                                                     |
| **Authentication**  | Clerk                                                                 |
| **AI Integration**  | Gemini AI via `@google/generative-ai`                                 |
| **Payments**        | Stripe                                                                |
| **Background Jobs** | Inngest                                                               |
| **Deployment**      | Vercel                                                                |

---

## ✨ Key Features

### 🧠 AI Study Tools
- Generate study notes using Gemini AI
- Create flashcards and quizzes instantly
- Store and access previous generations

### 👤 User System
- Auth with Clerk (Email, OAuth)
- Role-based logic (Free vs Premium)
- User profile with subscription management

### 💳 Monetization
- Stripe integration for subscription
- Secure checkout and webhook handling

### ⚙️ Developer Experience
- Background jobs with **Inngest**
- Fully responsive & accessible UI (shadcn/ui)
- Styled using **Tailwind CSS**
- Hosted on **Vercel**

---
###Set these in .env.local:
-CLERK_SECRET_KEY=
-CLERK_PUBLISHABLE_KEY=
-NEXT_PUBLIC_CLERK_FRONTEND_API=

-OPENAI_API_KEY=          # Or Gemini AI key
-GOOGLE_API_KEY=          # For Gemini
-DATABASE_URL=            # Neon Postgres connection string
-STRIPE_SECRET_KEY=
-NEXT_PUBLIC_STRIPE_KEY=
-INGGEST_EVENT_KEY=
