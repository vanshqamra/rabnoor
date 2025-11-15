import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export const CTASection = ({ title, description, primary, secondary }: CTAProps) => (
  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-12 text-white">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="mt-3 text-emerald-100">{description}</p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <Link href={primary.href} className="rounded-full bg-white/90 px-6 py-3 text-emerald-800 font-semibold">
          {primary.label}
        </Link>
        {secondary && (
          <Link href={secondary.href} className="rounded-full border border-white/70 px-6 py-3 text-white font-semibold">
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  </div>
);
