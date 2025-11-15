import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/forms/site/ContactForm';
import { cardSurface, sectionHeading, sectionSubheading, smallLabel } from '@/components/layout/styles';

export const metadata: Metadata = {
  title: 'Contact Rab Noor Pvt Ltd',
  description: 'Reach our India sourcing office in Kishangarh or Europe desk in Athens / Thessaloniki.',
  openGraph: {
    title: 'Contact Rab Noor Pvt Ltd',
    description: 'Direct phone, email, and address details for our India and Europe teams with a fully validated contact form.'
  }
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" description="Global offices ready to support your marble requirements." />
      <Container className="grid gap-12 py-16 sm:py-20 lg:py-24 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-8">
          <section className={cardSurface}>
            <p className={smallLabel}>India</p>
            <h2 className={sectionHeading}>India Office</h2>
            <p className={`${sectionSubheading} mt-2`}>Rab Noor Pvt Ltd · RIICO Industrial Area, Kishangarh, Rajasthan 305801</p>
            <p className="text-sm text-slate-600">Phone: +91 98271 12345</p>
            <p className="text-sm text-slate-600">Email: india@marblesnearme.com</p>
            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-slate-500">Services</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>Quarry inspections & block reservations</li>
              <li>Fabrication scheduling & ISPM 15 packing</li>
              <li>FOB shipments ex Mundra & Nhava Sheva</li>
            </ul>
          </section>
          <section className={cardSurface}>
            <p className={smallLabel}>Europe</p>
            <h2 className={sectionHeading}>Europe Office</h2>
            <p className={`${sectionSubheading} mt-2`}>Athens Warehouse · 12 Lavriou Ave, Koropi · Thessaloniki Satellite Office</p>
            <p className="text-sm text-slate-600">Phone: +30 210 220 7788</p>
            <p className="text-sm text-slate-600">Email: europe@marblesnearme.com</p>
            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-slate-500">Services</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>Bonded warehousing & EU-wide trucking</li>
              <li>Sample dispatch to EU design studios</li>
              <li>Customs/EORI advisory for importers</li>
            </ul>
          </section>
        </div>
        <div className={cardSurface}>
          <h2 className={sectionHeading}>Send us a message</h2>
          <p className={`${sectionSubheading} mt-2`}>Share your requirements and we will follow up with the right specialist.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
