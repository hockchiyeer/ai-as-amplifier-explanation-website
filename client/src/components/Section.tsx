import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, children, className, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 transition-colors duration-300',
        dark ? 'bg-slate-50' : 'bg-white',
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-6xl">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16 animate-slide-in-up', centered && 'text-center')}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-blue-600 font-semibold mb-4">{subtitle}</p>}
      {description && <p className="text-base text-slate-600 max-w-2xl mx-auto">{description}</p>}
    </div>
  );
}
