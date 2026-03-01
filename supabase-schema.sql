-- ============================================================
-- Portfolio App — Supabase Schema
-- Run this in your Supabase SQL editor
-- ============================================================

-- Projects table
create table if not exists public.projects (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  slug          text not null unique,
  tagline       text,
  description   text,
  tech_stack    text[] default '{}',
  live_url      text,
  github_url    text,
  cover_image   text,
  gallery_images text[] default '{}',
  year          int,
  category      text,
  highlights    text[] default '{}',
  created_at    timestamptz default now()
);

-- Enable RLS on projects (read-only for anon)
alter table public.projects enable row level security;

create policy "Public read" on public.projects
  for select using (true);

-- Contact submissions table
create table if not exists public.contact_submissions (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  email        text not null,
  subject      text not null,
  message      text not null,
  submitted_at timestamptz default now()
);

-- Enable RLS: anon can insert only
alter table public.contact_submissions enable row level security;

create policy "Allow insert" on public.contact_submissions
  for insert with check (true);

-- ============================================================
-- Optional: seed one example project
-- ============================================================
insert into public.projects
  (title, slug, tagline, description, tech_stack, live_url, github_url,
   cover_image, year, category, highlights)
values
  (
    'Radiant Dashboard',
    'radiant-dashboard',
    'A real-time analytics platform for modern teams',
    'Radiant is a full-stack analytics dashboard built for teams that need fast, reliable insight into their data without the complexity of enterprise tooling.

Designed from the ground up for performance, it streams live data via Supabase Realtime, renders 60fps charts, and adapts to any screen size.',
    ARRAY['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Recharts'],
    'https://example.com',
    'https://github.com/example/radiant',
    NULL,
    2024,
    'Web Application',
    ARRAY[
      'Sub-100ms query latency using Postgres materialized views',
      'Real-time updates with zero-polling via Supabase channels',
      'Accessibility-first — WCAG AA compliant throughout'
    ]
  )
on conflict (slug) do nothing;
