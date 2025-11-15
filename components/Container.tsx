import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`mx-auto w-full max-w-7xl px-4 md:px-8 ${className}`}>
    {children}
  </div>
);
