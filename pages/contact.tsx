import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { ContactForm } from '../components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact Rab Noor Pvt Ltd" description="India + Europe teams ready to support your marble requirement." />
      <Section eyebrow="Offices" title="Reach our teams">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold">India HQ – Kishangarh, Rajasthan</h3>
            <p className="mt-3 text-slate-600">Plot 21, Industrial Area, Kishangarh, Rajasthan, India</p>
            <p className="mt-2 text-sm text-slate-500">Phone: +91 98290 00000 · WhatsApp: +91 98290 00000</p>
            <p className="text-sm text-slate-500">Email: sales@marblesnearme.com</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold">Europe Office – Athens, Greece</h3>
            <p className="mt-3 text-slate-600">35 Poseidonos Ave, Athens Riviera, Greece</p>
            <p className="mt-2 text-sm text-slate-500">Phone: +30 210 000 0000 · WhatsApp: +30 698 000 0000</p>
            <p className="text-sm text-slate-500">Email: europe@marblesnearme.com</p>
          </div>
        </div>
      </Section>
      <Section eyebrow="Map" title="Locations">
        <div className="grid gap-6 md:grid-cols-2">
          {['India', 'Greece'].map((location) => (
            <div key={location} className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-emerald-200 bg-white text-emerald-700">
              Map placeholder – {location}
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Send a message" title="We respond within 24 hours">
        <ContactForm />
      </Section>
      <Section eyebrow="Business hours" title="Availability">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">India (IST)</h3>
            <p className="mt-2 text-slate-600">Monday – Saturday: 9:00 – 19:00</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Europe (EET/EET)</h3>
            <p className="mt-2 text-slate-600">Monday – Friday: 9:00 – 18:00</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
