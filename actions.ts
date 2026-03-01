'use server';

import { createClient } from '@supabase/supabase-js';
import { ContactFormData } from './supabase';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type FormState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };

  // Basic validation
  if (!raw.name || !raw.email || !raw.subject || !raw.message) {
    return { status: 'error', message: 'All fields are required.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.email)) {
    return { status: 'error', message: 'Please enter a valid email address.' };
  }

  const { error } = await supabase.from('contact_submissions').insert([
    {
      name: raw.name,
      email: raw.email,
      subject: raw.subject,
      message: raw.message,
      submitted_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error('Supabase error:', error);
    return {
      status: 'error',
      message: 'Something went wrong. Please try again later.',
    };
  }

  return {
    status: 'success',
    message: "Message received. I'll get back to you soon.",
  };
}

export async function getProjectBySlug(slug: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) return null;
  return data;
}

export async function getAllProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('year', { ascending: false });

  if (error) return [];
  return data;
}
