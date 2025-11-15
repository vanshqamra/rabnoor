import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  children: ReactNode;
  background?: 'light' | 'dark' | 'white';
}

export const Section = ({ id, title, eyebrow, subtitle, children, background = 'white' }: SectionProps) => (
  <section id={id} className={`${background === 'dark' ? 'bg-slate-900 text-white' : background === 'light' ? 'bg-slate-100' : 'bg-white'} py-12 md:py-16`}>
    <div className="mx-auto max-w-7xl px-4">
      {(eyebrow || title) && (
        <div className="mb-8 max-w-3xl">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">{eyebrow}</p>}
          {title && <h2 className="mt-2 text-3xl font-semibold text-slate-900">{title}</h2>}
          {subtitle && <p className="mt-3 text-lg text-slate-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);
