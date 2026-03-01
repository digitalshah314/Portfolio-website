import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getAllProjects } from '@/lib/actions';
import type { Project } from '@/lib/supabase';

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p: Project) => ({ id: p.slug }));
}

type Props = { params: Promise<{ id: string }> };

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project: Project | null = await getProjectBySlug(id);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e2d6] font-['Georgia',serif]">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
        <Link
          href="/"
          className="text-xs tracking-[0.3em] uppercase text-[#8a7f6e] hover:text-[#e8e2d6] transition-colors"
        >
          ← Back
        </Link>
        <span className="text-xs tracking-[0.4em] uppercase text-[#8a7f6e]">
          Portfolio
        </span>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
        {/* Decorative year */}
        <span className="block text-[10rem] font-bold text-[#ffffff04] select-none leading-none absolute top-16 right-8 md:right-16">
          {project.year}
        </span>

        <div className="relative z-10">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a96e] mb-4">
            {project.category}
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#8a7f6e] font-light leading-relaxed max-w-2xl">
            {project.tagline}
          </p>

          {/* CTA links */}
          <div className="flex flex-wrap gap-4 mt-10">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#c9a96e] text-[#c9a96e] text-sm tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-300"
              >
                Live Site
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-[#8a7f6e] text-sm tracking-[0.2em] uppercase hover:border-white/50 hover:text-[#e8e2d6] transition-all duration-300"
              >
                View Code
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Cover Image ── */}
      {project.cover_image && (
        <section className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto mb-24">
          <div className="relative w-full aspect-[16/9] bg-[#141414] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.cover_image}
              alt={`${project.title} cover`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 to-transparent pointer-events-none" />
          </div>
        </section>
      )}

      {/* ── Content grid ── */}
      <section className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16">
          {/* Left: Description */}
          <div>
            <h2 className="text-xs tracking-[0.4em] uppercase text-[#8a7f6e] mb-6">
              Overview
            </h2>
            <p className="text-lg leading-[1.85] text-[#c8c0b0] font-light whitespace-pre-line">
              {project.description}
            </p>

            {/* Highlights */}
            {project.highlights?.length > 0 && (
              <div className="mt-14">
                <h2 className="text-xs tracking-[0.4em] uppercase text-[#8a7f6e] mb-8">
                  Key Highlights
                </h2>
                <ul className="space-y-4">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-2 flex-shrink-0 w-px h-4 bg-[#c9a96e]" />
                      <span className="text-[#c8c0b0] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: Meta sidebar */}
          <aside className="space-y-10">
            {/* Tech stack */}
            <div>
              <h3 className="text-xs tracking-[0.4em] uppercase text-[#8a7f6e] mb-5">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs tracking-wider uppercase border border-white/10 text-[#8a7f6e] hover:border-[#c9a96e]/50 hover:text-[#c9a96e] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Year */}
            <div>
              <h3 className="text-xs tracking-[0.4em] uppercase text-[#8a7f6e] mb-3">
                Year
              </h3>
              <p className="text-2xl font-light text-[#e8e2d6]">{project.year}</p>
            </div>

            {/* Category */}
            <div>
              <h3 className="text-xs tracking-[0.4em] uppercase text-[#8a7f6e] mb-3">
                Category
              </h3>
              <p className="text-[#c8c0b0]">{project.category}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Gallery ── */}
      {project.gallery_images && project.gallery_images.length > 0 && (
        <section className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto mb-24">
          <h2 className="text-xs tracking-[0.4em] uppercase text-[#8a7f6e] mb-10">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery_images.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] bg-[#141414] overflow-hidden group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Footer nav ── */}
      <footer className="border-t border-white/5 px-8 md:px-16 lg:px-24 py-12 max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          href="/"
          className="text-xs tracking-[0.3em] uppercase text-[#8a7f6e] hover:text-[#e8e2d6] transition-colors"
        >
          ← All Projects
        </Link>
        <Link
          href="/about"
          className="text-xs tracking-[0.3em] uppercase text-[#8a7f6e] hover:text-[#c9a96e] transition-colors"
        >
          About me →
        </Link>
      </footer>
    </main>
  );
}
