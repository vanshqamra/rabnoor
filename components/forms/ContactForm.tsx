import { FormEvent, useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  subject: '',
  message: ''
};

export const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('submitting');
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
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
          placeholder="Phone"
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
          placeholder="Subject"
          className="rounded-2xl border border-slate-200 px-4 py-3"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />
      </div>
      <textarea
        placeholder="Message"
        className="h-32 rounded-2xl border border-slate-200 px-4 py-3"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button
        type="submit"
        className="w-full rounded-full bg-emerald-600 py-3 text-white font-semibold"
        disabled={status === 'submitting'}
      >
        {status === 'success' ? 'Thank you! We will reply soon.' : status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
};
