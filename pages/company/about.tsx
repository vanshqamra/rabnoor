import Link from 'next/link';
import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';

export default function CompanyAboutPage() {
  return (
    <div>
      <PageHeader title="Company Overview" description="Learn more about Rab Noor Pvt Ltd and marblesnearme.com." />
      <Section>
        <p className="text-lg text-slate-600">
          Rab Noor Pvt Ltd blends Indian quarry expertise with European distribution. Visit our detailed <Link href="/about" className="text-emerald-600 underline">About page</Link> for the full story, certifications, and sustainability commitments.
        </p>
      </Section>
    </div>
  );
}
