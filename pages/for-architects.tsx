import { FormEvent, useState } from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';

export default function ForArchitectsPage() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitted');
  };

  return (
    <div>
      <PageHeader
        title="For Architects & Interior Designers"
        description="Digital libraries, samples, and specification assistance tailored to design studios across India and Europe."
      />
      <Section eyebrow="Resources" title="Digital tools">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            'CAD / BIM textures and downloadable boards (coming soon).',
            'High-resolution slab photography and book-match mockups.',
            'Sample boards and storytelling kits for client presentations.'
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Specification assistance" title="Support across project stages">
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>Material recommendations by zone: bathrooms, kitchens, lobbies, exteriors.</li>
          <li>Slip resistance, maintenance, and sealing guidance.</li>
          <li>Mockups, color approvals, and custom finishes (honed, leather, brushed).</li>
        </ul>
      </Section>
      <Section eyebrow="Samples & mockups" title="Get tangible materials">
        <p className="text-lg text-slate-600">
          Rab Noor ships curated sample kits and small-format boards to your studio or project site. For flagship projects, we can
          create full mockup rooms in India or Europe before mass production.
        </p>
      </Section>
      <Section eyebrow="Architect partner program" title="Register for access">
        <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Name" required />
            <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Firm" required />
            <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Email" type="email" required />
            <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Phone" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Country" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Project types (villa, hotel, etc.)" />
          </div>
          <button className="w-full rounded-full bg-emerald-600 py-3 text-white font-semibold">
            {status === 'submitted' ? 'Registered – team will reach out' : 'Register as Architect Partner'}
          </button>
        </form>
      </Section>
    </div>
  );
}
