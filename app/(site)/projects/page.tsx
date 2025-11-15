import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { cardSurface, sectionSubheading, smallLabel } from '@/components/layout/styles';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Global Marble Projects | Rab Noor Pvt Ltd',
  description: 'Reference villas, hotels, and commercial towers supplied with our marble across India, Europe, and the Middle East.',
  openGraph: {
    title: 'Marble Case Studies — Rab Noor Pvt Ltd',
    description: 'Discover how Makrana White, Thassos, Statuario, and Pietra Grey elevate villas, resorts, and towers worldwide.'
  }
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" description="Sample installations to inspire future case studies." />
      <Container className="space-y-12 py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Projects' }]} />
        <p className={sectionSubheading}>Each gallery acts as a mood board — final case studies will showcase on-site imagery in a future release.</p>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className={`${cardSurface} flex flex-col space-y-4`}>
              <div className="h-48 rounded-2xl bg-slate-100" aria-hidden />
              <p className={smallLabel}>{project.location}</p>
              <h2 className="text-2xl font-semibold text-slate-900">{project.name}</h2>
              <p className="text-sm text-slate-500">{project.area}</p>
              <p className="text-base text-slate-700 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                {project.marblesUsed.map((marble) => (
                  <span key={marble} className="rounded-full bg-slate-100 px-3 py-1">
                    {marble}
                  </span>
                ))}
              </div>
              <Button href="/quote-builder" variant="ghost" className="justify-start px-0">
                Plan a similar project →
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
