import { ReactNode } from 'react';
import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export const PageHeader = ({ title, description, action }: PageHeaderProps) => (
  <header className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
    <Container className="py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Rab Noor Pvt Ltd</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">{title}</h1>
          {description ? (
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 max-w-2xl">{description}</p>
          ) : null}
        </div>
        <div className="w-full lg:max-w-sm">
          {action ?? <div className="h-32 rounded-2xl bg-slate-100" aria-hidden />}
        </div>
      </div>
    </Container>
  </header>
);
