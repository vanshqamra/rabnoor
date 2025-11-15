import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/sourcing-from-india', label: 'Sourcing From India' },
  { href: '/importing-to-europe', label: 'Importing to Europe' },
  { href: '/logistics-shipping', label: 'Logistics & Shipping' },
  { href: '/projects', label: 'Projects' },
  { href: '/for-architects', label: 'For Architects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/quote-builder', label: 'Quote Builder' },
  { href: '/b2b/login', label: 'B2B Portal (Login)' }
];

export const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-gray-900">
          marblesnearme.com
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium text-slate-700 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-emerald-600 ${
                router.pathname === link.href ? 'text-emerald-600' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote-builder"
            className="rounded-full bg-emerald-600 px-4 py-2 text-white shadow-lg shadow-emerald-600/30"
          >
            Request a Quote
          </Link>
        </nav>
        <button
          aria-label="Toggle menu"
          className="rounded-full border border-gray-300 p-2 text-gray-700 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-gray-900" />
            <span className="block h-0.5 w-6 bg-gray-900" />
            <span className="block h-0.5 w-6 bg-gray-900" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden">
          <div className="space-y-3 border-t border-neutral-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote-builder"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-emerald-600 px-4 py-2 text-center text-white"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
