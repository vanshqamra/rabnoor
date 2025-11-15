import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';
import { teamMembers } from '../../data/team';

export default function CompanyTeamPage() {
  return (
    <div>
      <PageHeader title="Team" description="Leadership and operational experts powering Rab Noor Pvt Ltd." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{member.location}</p>
              <h3 className="mt-2 text-2xl font-semibold">{member.name}</h3>
              <p className="text-sm font-semibold text-slate-500">{member.role}</p>
              <p className="mt-3 text-slate-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
