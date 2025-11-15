import { FormEvent, useState } from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { products } from '../data/products';

interface LineItem {
  marble: string;
  finish: string;
  thickness: string;
  quantity: string;
  destination: string;
}

const contactFields = [
  { key: 'name', label: 'Name', required: true, type: 'text' },
  { key: 'email', label: 'Email', required: true, type: 'email' },
  { key: 'phone', label: 'Phone/WhatsApp', required: false, type: 'text' },
  { key: 'company', label: 'Company', required: false, type: 'text' },
  { key: 'country', label: 'Country', required: false, type: 'text' },
  { key: 'city', label: 'City', required: false, type: 'text' }
] as const;

type ContactFieldKey = (typeof contactFields)[number]['key'];

const emptyLineItem: LineItem = {
  marble: products[0].slug,
  finish: 'Polished',
  thickness: '20mm',
  quantity: '',
  destination: ''
};

export default function QuoteBuilderPage() {
  const [contactInfo, setContactInfo] = useState<Record<ContactFieldKey, string>>({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    city: ''
  });
  const [lineItems, setLineItems] = useState<LineItem[]>([{ ...emptyLineItem }]);
  const [details, setDetails] = useState({
    timeline: '',
    projectType: '',
    notes: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleLineItemChange = (index: number, field: keyof LineItem, value: string) => {
    setLineItems((items) => items.map((item, idx) => (idx === index ? { ...item, [field]: value } : item)));
  };

  const addLineItem = () => setLineItems((items) => [...items, { ...emptyLineItem }]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('submitting');
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contactInfo, lineItems, details })
      });
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  return (
    <div>
      <PageHeader
        title="Quote Builder"
        description="Configure your marble requirements and receive a tailored proposal from Rab Noor Pvt Ltd."
      />
      <Section>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold">1. Contact Info</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {contactFields.map((field) => (
                <input
                  key={field.key}
                  required={field.required}
                  type={field.type}
                  placeholder={field.label}
                  className="rounded-2xl border border-slate-200 px-4 py-3"
                  value={contactInfo[field.key]}
                  onChange={(e) => setContactInfo({ ...contactInfo, [field.key]: e.target.value })}
                />
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold">2. Marble Selection</h3>
            {lineItems.map((item, index) => (
              <div key={index} className="mt-4 grid gap-4 md:grid-cols-5">
                <select
                  className="rounded-2xl border border-slate-200 px-4 py-3"
                  value={item.marble}
                  onChange={(e) => handleLineItemChange(index, 'marble', e.target.value)}
                >
                  {products.map((product) => (
                    <option key={product.slug} value={product.slug}>
                      {product.name}
                    </option>
                  ))}
                </select>
                <select
                  className="rounded-2xl border border-slate-200 px-4 py-3"
                  value={item.finish}
                  onChange={(e) => handleLineItemChange(index, 'finish', e.target.value)}
                >
                  {['Polished', 'Honed', 'Leather', 'Brushed'].map((finish) => (
                    <option key={finish}>{finish}</option>
                  ))}
                </select>
                <select
                  className="rounded-2xl border border-slate-200 px-4 py-3"
                  value={item.thickness}
                  onChange={(e) => handleLineItemChange(index, 'thickness', e.target.value)}
                >
                  {['18mm', '20mm', '30mm'].map((thickness) => (
                    <option key={thickness}>{thickness}</option>
                  ))}
                </select>
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3"
                  placeholder="Quantity (m² / slabs)"
                  value={item.quantity}
                  onChange={(e) => handleLineItemChange(index, 'quantity', e.target.value)}
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3"
                  placeholder="Destination port"
                  value={item.destination}
                  onChange={(e) => handleLineItemChange(index, 'destination', e.target.value)}
                />
              </div>
            ))}
            <button type="button" onClick={addLineItem} className="mt-4 rounded-full border border-emerald-500 px-4 py-2 text-emerald-600">
              + Add another marble
            </button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold">3. Additional Details</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input
                className="rounded-2xl border border-slate-200 px-4 py-3"
                placeholder="Desired delivery timeline"
                value={details.timeline}
                onChange={(e) => setDetails({ ...details, timeline: e.target.value })}
              />
              <input
                className="rounded-2xl border border-slate-200 px-4 py-3"
                placeholder="Project type"
                value={details.projectType}
                onChange={(e) => setDetails({ ...details, projectType: e.target.value })}
              />
            </div>
            <textarea
              className="mt-4 h-32 rounded-2xl border border-slate-200 px-4 py-3"
              placeholder="Special notes"
              value={details.notes}
              onChange={(e) => setDetails({ ...details, notes: e.target.value })}
            />
          </div>
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6">
            <h3 className="text-2xl font-semibold text-emerald-900">Summary</h3>
            <ul className="mt-4 space-y-3 text-emerald-800">
              {lineItems.map((item, index) => (
                <li key={index}>
                  <span className="font-semibold">{products.find((product) => product.slug === item.marble)?.name}</span> — {item.quantity || 'TBD'} @ {item.finish} {item.thickness} to {item.destination || 'Destination TBD'}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">Indicative grade and price will be provided after review.</p>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-emerald-600 py-3 text-white text-lg font-semibold"
            disabled={status === 'submitting'}
          >
            {status === 'success' ? 'Quote requested – we will reply shortly' : status === 'submitting' ? 'Submitting…' : 'Request Detailed Quote'}
          </button>
        </form>
      </Section>
    </div>
  );
}
