import { GetStaticPaths, GetStaticProps } from 'next';
import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';
import { projects, Project } from '../../data/projects';

interface Props {
  project: Project;
}

export default function ProjectDetailPage({ project }: Props) {
  return (
    <div>
      <PageHeader
        title={project.name}
        description={`${project.location} · ${project.area}`}
        actions={<p className="rounded-full border border-white/50 px-4 py-2 text-sm">Marbles: {project.marblesUsed.join(', ')}</p>}
      />
      <Section eyebrow="Story" title="Project narrative">
        <p className="text-lg text-slate-600">{project.description}</p>
      </Section>
      <Section eyebrow="Gallery" title="Visuals">
        <div className="grid gap-4 md:grid-cols-2">
          {project.images.map((image) => (
            <div key={image} className="h-64 rounded-3xl bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
          ))}
        </div>
      </Section>
      <Section eyebrow="Marbles used" title="Featured stones">
        <ul className="grid gap-3 md:grid-cols-2">
          {project.marblesUsed.map((marble) => (
            <li key={marble} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700">
              {marble}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((item) => item.slug === params?.slug);
  if (!project) {
    return { notFound: true };
  }
  return { props: { project } };
};
