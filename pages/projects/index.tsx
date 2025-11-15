import Link from 'next/link';
import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';
import { CTASection } from '../../components/shared/CTASection';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        description="A selection of hospitality, residential, and commercial spaces powered by Rab Noor marble."
      />
      <Section eyebrow="Gallery" title="Case studies">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-3xl border border-slate-200 bg-white p-5">
              <div
                className="h-48 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${project.images[0]})` }}
              />
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">{project.location}</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-slate-600">Marbles: {project.marblesUsed.join(', ')}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection
        title="Want your project featured?"
        description="Partner with Rab Noor Pvt Ltd for sourcing, logistics, and storytelling support."
        primary={{ label: 'Share Project Brief', href: '/quote-builder' }}
        secondary={{ label: 'Contact Team', href: '/contact' }}
      />
    </div>
  );
}
