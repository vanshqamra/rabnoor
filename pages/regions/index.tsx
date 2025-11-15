import Link from 'next/link';
import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';
import { regionLandings } from '../../data/regions';

export default function RegionsPage() {
  return (
    <div>
      <PageHeader title="Regional Landing Pages" description="Targeted information for specific corridors." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {regionLandings.map((region) => (
            <Link key={region.slug} href={`/regions/${region.slug}`} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">{region.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{region.intro}</p>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
