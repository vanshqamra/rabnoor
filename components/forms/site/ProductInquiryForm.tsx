'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { QuoteRequestPayload, SubmissionStatus, submitForm } from '@/lib/forms';

interface ProductInquiryFormProps {
  productName: string;
}

const defaultState = {
  name: '',
  email: '',
  company: '',
  quantity: '',
  destination: '',
  notes: ''
};

export const ProductInquiryForm = ({ productName }: ProductInquiryFormProps) => {
  const [formState, setFormState] = useState(defaultState);
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (field: keyof typeof formState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
      setStatus('idle');
      setFeedback('');
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.quantity) {
      setStatus('error');
      setFeedback('Please share your name, email, and desired quantity.');
      return;
    }
    const payload: QuoteRequestPayload = { ...formState, product: productName };
    setStatus('submitting');
    setFeedback('');
    try {
      const response = await submitForm<QuoteRequestPayload>('/api/quote-request', payload);
      setStatus('success');
      setFeedback(`Request logged. Reference ${response.id}. Our sourcing desk will respond shortly.`);
      setFormState(defaultState);
    } catch (error) {
      setStatus('error');
      setFeedback(error instanceof Error ? error.message : 'Unable to submit your request.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name*
          <input
            value={formState.name}
            onChange={handleChange('name')}
            required
            className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
            placeholder="Full name"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email*
          <input
            type="email"
            value={formState.email}
            onChange={handleChange('email')}
            required
            className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="text-sm font-medium text-slate-700">
        Company
        <input
          value={formState.company}
          onChange={handleChange('company')}
          className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
          placeholder="Studio / developer"
        />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Quantity*
          <input
            value={formState.quantity}
            onChange={handleChange('quantity')}
            required
            className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
            placeholder="e.g. 650 m² slabs"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Destination Port
          <input
            value={formState.destination}
            onChange={handleChange('destination')}
            className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
            placeholder="Rotterdam / Mundra / etc."
          />
        </label>
      </div>
      <label className="text-sm font-medium text-slate-700">
        Notes
        <textarea
          rows={4}
          value={formState.notes}
          onChange={handleChange('notes')}
          className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
          placeholder="Finishes, inspection requests, delivery timing"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting…' : 'Request Availability'}
      </button>
      {feedback ? (
        <p className={`text-sm ${status === 'error' ? 'text-rose-500' : 'text-emerald-700'}`} aria-live="polite">
          {feedback}
        </p>
      ) : null}
    </form>
  );
};
