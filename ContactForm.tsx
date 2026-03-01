'use client';

import { useActionState, useEffect, useRef } from 'react';
import { submitContactForm, FormState } from '@/lib/actions';

const initialState: FormState = { status: 'idle' };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
  }, [state.status]);

  const inputClass =
    'w-full bg-transparent border-b border-white/15 py-3 text-[#e8e2d6] placeholder:text-[#5a5245] text-sm focus:outline-none focus:border-[#c9a96e] transition-colors';

  return (
    <form ref={formRef} action={formAction} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-xs tracking-[0.3em] uppercase text-[#8a7f6e] mb-3">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.3em] uppercase text-[#8a7f6e] mb-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.3em] uppercase text-[#8a7f6e] mb-3">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="What's this about?"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs tracking-[0.3em] uppercase text-[#8a7f6e] mb-3">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          rows={6}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Status message */}
      {state.status !== 'idle' && (
        <p
          className={`text-sm ${
            state.status === 'success' ? 'text-[#c9a96e]' : 'text-red-400'
          }`}
        >
          {state.message}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={isPending}
          className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#c9a96e] text-[#c9a96e] text-sm tracking-[0.3em] uppercase overflow-hidden transition-all duration-300 hover:text-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="absolute inset-0 bg-[#c9a96e] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          <span className="relative z-10">
            {isPending ? 'Sending…' : 'Send Message'}
          </span>
          {!isPending && (
            <svg
              className="relative z-10 transition-transform group-hover:translate-x-1"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
