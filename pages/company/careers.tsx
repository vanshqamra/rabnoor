import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';

const roles = [
  {
    title: 'EU Sales Consultant',
    location: 'Athens / Remote Europe',
    description: 'Support architects and distributors across Europe with marble selection and logistics planning.'
  },
  {
    title: 'Quality Control Engineer',
    location: 'Kishangarh, India',
    description: 'Inspect slabs, document grades, and coordinate packaging standards at partner factories.'
  }
];

export default function CareersPage() {
  return (
    <div>
      <PageHeader title="Careers" description="Join Rab Noor Pvt Ltd and help us connect India and Europe through marble." />
      <Section>
        <div className="space-y-6">
          {roles.map((role) => (
            <div key={role.title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-2xl font-semibold">{role.title}</h3>
              <p className="text-sm text-slate-500">{role.location}</p>
              <p className="mt-3 text-slate-600">{role.description}</p>
              <a href="mailto:careers@marblesnearme.com" className="mt-3 inline-block text-emerald-600 font-semibold">
                Apply via careers@marblesnearme.com →
              </a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
