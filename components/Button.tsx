'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-tight transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:pointer-events-none disabled:opacity-60 sm:text-base';

const variants: Record<string, string> = {
  primary: 'bg-slate-900 text-white hover:bg-slate-800',
  secondary: 'border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
  ghost: 'text-slate-700 hover:text-slate-900'
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
