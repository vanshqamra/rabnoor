import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/projects', label: 'Projects' },
  { href: '/for-architects', label: 'For Architects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/quote-builder', label: 'Quote Builder' },
  { href: '/b2b/login', label: 'B2B Portal' }
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="text-xl font-semibold">marblesnearme.com</p>
          <p className="mt-3 text-sm text-slate-400">
            Rab Noor Pvt Ltd orchestrates marble export–import corridors between India and Europe, ensuring quality, compliance,
            and on-time deliveries for architects, distributors, and hospitality brands.
          </p>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-widest text-sm text-slate-400">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-emerald-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 text-sm">
          <p className="font-semibold uppercase tracking-widest text-sm text-slate-400">Contact</p>
          <div>
            <p className="font-semibold text-slate-100">India HQ – Kishangarh, Rajasthan</p>
            <p>Phone: +91 98290 00000</p>
            <p>WhatsApp: +91 98290 00000</p>
            <p>Email: sales@marblesnearme.com</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Europe Office – Athens, Greece</p>
            <p>Phone: +30 210 000 0000</p>
            <p>WhatsApp: +30 698 000 0000</p>
            <p>Email: europe@marblesnearme.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {year} Rab Noor Pvt Ltd – marblesnearme.com | All Rights Reserved.
      </div>
    </footer>
  );
};
