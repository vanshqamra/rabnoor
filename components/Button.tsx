'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold tracking-tight transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:pointer-events-none disabled:opacity-60';

const variants: Record<string, string> = {
  primary: 'bg-black text-white hover:bg-neutral-900',
  secondary: 'border border-black text-black hover:bg-slate-100',
  ghost: 'text-slate-700 hover:text-black'
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
}

export const Button = ({ href, variant = 'primary', children, className = '', ...rest }: ButtonProps) => {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
