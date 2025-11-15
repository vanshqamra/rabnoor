import { FormEvent, useState } from 'react';
import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';

export default function B2BLoginPage() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitted');
  };
  return (
    <div>
      <PageHeader title="B2B Portal Login" description="Placeholder UI – future integration with secure auth." />
      <Section>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6">
          <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Email" type="email" required />
          <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Password" type="password" required />
          <button className="w-full rounded-full bg-emerald-600 py-3 text-white font-semibold">
            {status === 'submitted' ? 'Login disabled – coming soon' : 'Login'}
          </button>
        </form>
      </Section>
    </div>
  );
}
