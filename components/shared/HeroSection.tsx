import Link from 'next/link';

interface HeroProps {
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export const HeroSection = ({ title, description, primaryAction, secondaryAction }: HeroProps) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-24 text-white">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-emerald-900/40 to-transparent" />
    <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-[0.5em] text-emerald-300">Rab Noor Pvt Ltd</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-6 text-lg text-emerald-100">{description}</p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <Link
            href={primaryAction.href}
            className="rounded-full bg-emerald-500 px-6 py-3 text-white shadow-xl shadow-emerald-500/40"
          >
            {primaryAction.label}
          </Link>
          {secondaryAction && (
            <Link href={secondaryAction.href} className="rounded-full border border-white/50 px-6 py-3 text-white">
              {secondaryAction.label}
            </Link>
          )}
        </div>
      </div>
      <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Global Presence</p>
        <h3 className="mt-3 text-2xl font-semibold">India + Europe Logistics Spine</h3>
        <p className="mt-4 text-emerald-100">
          Sourcing teams in Rajasthan pair with EU warehouse operations in Athens/Thessaloniki to ship to Greece, Germany,
          Netherlands, Belgium, Italy, and clients worldwide.
        </p>
        <ul className="mt-6 space-y-3 text-emerald-100">
          <li>• Ports: Mundra, Nhava Sheva, Piraeus, Rotterdam, Antwerp, Hamburg</li>
          <li>• Certifications: ISPM 15, CE-ready documentation, radiation checks</li>
          <li>• Services: Sourcing, QC, packaging, customs advisory, B2B portal</li>
        </ul>
      </div>
    </div>
  </div>
);
