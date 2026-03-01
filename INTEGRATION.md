# Portfolio Additions — Integration Guide

Three new screens + Supabase form handling, ready to drop into your Next.js 15 app.

---

## Files Added

```
src/
├── app/
│   ├── portfolio/[id]/page.tsx   ← Project detail screen
│   └── about/page.tsx            ← About + contact screen
├── components/
│   └── ContactForm.tsx           ← Client-side form (useActionState)
└── lib/
    ├── supabase.ts               ← Supabase client + shared types
    └── actions.ts                ← Server actions (form submit, data fetch)

supabase-schema.sql               ← Run once in Supabase SQL editor
.env.local.example                ← Copy → .env.local, fill in your keys
```

---

## 1. Install Supabase client

```bash
npm install @supabase/supabase-js
```

---

## 2. Create your Supabase project

1. Go to [supabase.com](https://supabase.com) → New project
2. In **SQL Editor**, paste and run `supabase-schema.sql`
3. Copy your **Project URL** and **anon public key** from  
   Settings → API

---

## 3. Set environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
```

---

## 4. Update placeholder content

| File | What to update |
|------|---------------|
| `about/page.tsx` | Name, bio, skills array, timeline, email/social links |
| `about/page.tsx` (avatar) | Replace `<div>` placeholder with `<Image src="..." />` |
| `portfolio/[id]/page.tsx` | Styling is ready — data comes from Supabase |

---

## 5. Add projects via Supabase dashboard

Navigate to **Table Editor → projects** and insert rows, or use the  
SQL seed at the bottom of `supabase-schema.sql` as a template.

---

## Routes

| URL | Screen |
|-----|--------|
| `/portfolio/[slug]` | Project detail (slug matches `projects.slug` in DB) |
| `/about` | About page with contact form |

---

## How the contact form works

1. User fills form on `/about`
2. `ContactForm.tsx` calls `submitContactForm` server action via `useActionState`
3. Server action validates input and inserts into `contact_submissions` table
4. Row-level security allows anonymous inserts; only you (authenticated) can read them
