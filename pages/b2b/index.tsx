import Link from 'next/link';
import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';

export default function B2BLanding() {
  return (
    <div>
      <PageHeader title="B2B Portal" description="Exclusive access for distributors and retailers on marblesnearme.com." />
      <Section eyebrow="Benefits" title="Why join the Rab Noor B2B network?">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            'Real-time inventory visibility and reserved bundles.',
            'Special pricing tiers and finance options for loyal partners.',
            'Priority logistics planning and consolidated shipments.'
          ].map((benefit) => (
            <div key={benefit} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600">
              {benefit}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/b2b/login" className="rounded-full bg-emerald-600 px-6 py-3 text-white">
            Login to B2B Portal
          </Link>
          <Link href="/contact" className="rounded-full border border-emerald-500 px-6 py-3 text-emerald-600">
            Request B2B Access
          </Link>
        </div>
      </Section>
    </div>
  );
}
