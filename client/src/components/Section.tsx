import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { StepBadge } from '@/components/StepKit';
import { RichText } from '@/components/RichText';

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
      aria-labelledby={`${id}-title`}
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
  /** Section id: labels the heading for assistive tech and shows the "Step n of N" badge. */
  stepId?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  stepId,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16 animate-slide-in-up', centered && 'text-center')}>
      {stepId && <StepBadge id={stepId} />}
      <h2
        id={stepId ? `${stepId}-title` : undefined}
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 focus:outline-none"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-blue-600 font-semibold mb-4">
          <RichText text={subtitle} />
        </p>
      )}
      {description && <p className="text-base text-slate-600 max-w-2xl mx-auto">{description}</p>}
    </div>
  );
}
