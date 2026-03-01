import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  tech_stack: string[];
  live_url?: string;
  github_url?: string;
  cover_image?: string;
  gallery_images?: string[];
  year: number;
  category: string;
  highlights: string[];
  created_at: string;
};
