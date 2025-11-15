import { GetStaticPaths, GetStaticProps } from 'next';
import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';
import { CTASection } from '../../components/shared/CTASection';
import { regionLandings, RegionLanding } from '../../data/regions';

interface Props {
  region: RegionLanding;
}

export default function RegionPage({ region }: Props) {
  return (
    <div>
      <PageHeader title={region.title} description={region.intro} />
      <Section eyebrow="Demand" title="Market outlook">
        <p className="text-lg text-slate-600">{region.demand}</p>
      </Section>
      <Section eyebrow="How Rab Noor supports" title="Corridor expertise">
        <p className="text-lg text-slate-600">{region.corridorSupport}</p>
      </Section>
      <Section eyebrow="Popular marbles" title="Top picks for this corridor">
        <ul className="grid gap-3 md:grid-cols-2">
          {region.popularMarbles.map((marble) => (
            <li key={marble} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">{marble}</li>
          ))}
        </ul>
      </Section>
      <CTASection
        title={region.cta}
        description="Share your next project requirements to receive a tailored plan."
        primary={{ label: 'Request Quote', href: '/quote-builder' }}
        secondary={{ label: 'Contact Team', href: '/contact' }}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: regionLandings.map((region) => ({ params: { slug: region.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const region = regionLandings.find((entry) => entry.slug === params?.slug);
  if (!region) return { notFound: true };
  return { props: { region } };
};
