import { FormEvent, useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  quantity: '',
  finish: '',
  deadline: ''
};

export const QuoteRequestForm = ({ marble }: { marble: string }) => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('submitting');
    try {
      await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, marble })
      });
      setStatus('success');
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          placeholder="Name"
          className="rounded-2xl border border-slate-200 px-4 py-3"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="rounded-2xl border border-slate-200 px-4 py-3"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Phone / WhatsApp"
          className="rounded-2xl border border-slate-200 px-4 py-3"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          placeholder="Company"
          className="rounded-2xl border border-slate-200 px-4 py-3"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
        <input
          placeholder="Country"
          className="rounded-2xl border border-slate-200 px-4 py-3"
          value={form.country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
        />
        <input
          placeholder="Quantity (m² / slabs)"
          className="rounded-2xl border border-slate-200 px-4 py-3"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <input
          placeholder="Preferred Finish"
          className="rounded-2xl border border-slate-200 px-4 py-3"
          value={form.finish}
          onChange={(e) => setForm({ ...form, finish: e.target.value })}
        />
        <input
          placeholder="Deadline / Delivery"
          className="rounded-2xl border border-slate-200 px-4 py-3"
          value={form.deadline}
          onChange={(e) => setForm({ ...form, deadline: e.target.value })}
        />
      </div>
      <button type="submit" className="w-full rounded-full bg-emerald-600 py-3 text-white font-semibold" disabled={status === 'submitting'}>
        {status === 'success' ? 'Request submitted' : status === 'submitting' ? 'Sending…' : 'Request a Quote'}
      </button>
    </form>
  );
};
