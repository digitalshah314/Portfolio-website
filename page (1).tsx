import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Supabase', 'REST APIs', 'GraphQL'] },
  { category: 'Tools', items: ['Git', 'Figma', 'Vercel', 'Docker', 'Linear'] },
];

const timeline = [
  { year: '2024–Now', role: 'Senior Product Engineer', company: 'Freelance' },
  { year: '2021–2024', role: 'Full-Stack Engineer', company: 'Scale AI' },
  { year: '2019–2021', role: 'Frontend Developer', company: 'Acme Studio' },
  { year: '2017–2019', role: 'Junior Developer', company: 'StartupXYZ' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e2d6] font-['Georgia',serif]">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
        <Link
          href="/"
          className="text-xs tracking-[0.3em] uppercase text-[#8a7f6e] hover:text-[#e8e2d6] transition-colors"
        >
          ← Home
        </Link>
        <span className="text-xs tracking-[0.4em] uppercase text-[#8a7f6e]">
          About
        </span>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 px-8 md:px-16 lg:px-24 max-w-6xl mx-auto overflow-hidden">
        {/* Large decorative letter */}
        <span className="absolute -top-4 -left-4 text-[20rem] font-bold leading-none text-white/[0.02] select-none pointer-events-none">
          A
        </span>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a96e] mb-4">
              About me
            </p>
            <h1 className="text-5xl md:text-7xl font-light leading-[1.05] mb-8 tracking-tight">
              Crafting digital<br />
              <em className="not-italic text-[#8a7f6e]">experiences</em>
            </h1>
            <p className="text-lg text-[#c8c0b0] leading-[1.85] font-light max-w-xl">
              I&apos;m a full-stack engineer who believes the gap between
              design and engineering should be invisible. I build products
              that feel inevitable — where every interaction is considered,
              every transition purposeful.
            </p>
            <p className="mt-6 text-lg text-[#c8c0b0] leading-[1.85] font-light max-w-xl">
              With over seven years building for the web, I&apos;ve shipped
              products used by millions, led small teams, and obsessed over
              the details that make software memorable.
            </p>
          </div>

          {/* Avatar / portrait placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-[#141414] relative overflow-hidden">
              {/* Noise texture overlay */}
              <div className="absolute inset-0 opacity-30"
                   style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")' }} />
              {/* Replace with <Image> once you have a real photo */}
              <div className="absolute bottom-6 left-6">
                <p className="text-xs tracking-[0.3em] uppercase text-[#5a5245]">
                  Your Name
                </p>
                <p className="text-xs text-[#3a3530] mt-1">
                  Replace with your photo
                </p>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#c9a96e]/20" />
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Skills ── */}
      <section className="py-24 px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-[#8a7f6e] mb-12">
          Skills &amp; Tools
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-sm tracking-[0.25em] uppercase text-[#c9a96e] mb-6">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#8a7f6e] text-sm"
                  >
                    <span className="w-px h-3 bg-white/20 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Timeline ── */}
      <section className="py-24 px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-[#8a7f6e] mb-12">
          Experience
        </p>
        <div className="space-y-0">
          {timeline.map(({ year, role, company }, i) => (
            <div
              key={i}
              className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-6 py-7 border-b border-white/5 group hover:border-white/10 transition-colors"
            >
              <span className="text-xs tracking-wider text-[#5a5245] pt-1 font-light">
                {year}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="text-[#e8e2d6] font-light group-hover:text-white transition-colors">
                  {role}
                </span>
                <span className="text-sm text-[#8a7f6e]">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="py-24 px-8 md:px-16 lg:px-24 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left copy */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a96e] mb-4">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6">
              Let&apos;s build something together
            </h2>
            <p className="text-[#8a7f6e] leading-relaxed text-sm">
              Whether you have a project in mind, a question, or just want
              to say hello — my inbox is open.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href="mailto:hello@yourname.com"
                className="block text-xs tracking-[0.3em] uppercase text-[#8a7f6e] hover:text-[#c9a96e] transition-colors"
              >
                hello@yourname.com
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs tracking-[0.3em] uppercase text-[#8a7f6e] hover:text-[#c9a96e] transition-colors"
              >
                @yourhandle
              </a>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 px-8 md:px-16 py-10 max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-[#3a3530]">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <Link
          href="/"
          className="text-xs tracking-[0.3em] uppercase text-[#8a7f6e] hover:text-[#e8e2d6] transition-colors"
        >
          ← Portfolio
        </Link>
      </footer>
    </main>
  );
}
