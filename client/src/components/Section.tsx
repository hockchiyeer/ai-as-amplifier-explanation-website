import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useLearningProgress } from '@/contexts/LearningProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, CheckCircle2, Image as ImageIcon } from 'lucide-react';

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
        'py-16 md:py-24 transition-colors duration-300 relative',
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
  stepNumber?: number;
  sectionId?: string;
  slideImage?: string;
  slideTitle?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  stepNumber,
  sectionId,
  slideImage,
  slideTitle,
}: SectionHeaderProps) {
  const { isCompleted, toggleComplete, openSlide, totalSteps } = useLearningProgress();
  const { t, language } = useLanguage();
  const ls = t.learningStatus;

  const completed = sectionId ? isCompleted(sectionId) : false;

  return (
    <div className={cn('mb-12 md:mb-16 animate-slide-in-up', centered && 'text-center')}>
      {/* Self-Learning Module Header & Status Controls */}
      {stepNumber && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
          {/* Step Pill */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>
              {ls.module} {String(stepNumber).padStart(2, '0')} {ls.of} {totalSteps}
            </span>
          </span>

          {/* Mark as Completed / Understood Button */}
          {sectionId && (
            <button
              type="button"
              onClick={() => toggleComplete(sectionId)}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold border transition-all cursor-pointer',
                completed
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800 shadow-xs'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              )}
              title={completed ? ls.understood : ls.markUnderstood}
              aria-pressed={completed}
            >
              {completed ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                  <span>{ls.understood}</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{ls.markUnderstood}</span>
                </>
              )}
            </button>
          )}

          {/* Slide Evidence Button */}
          {slideImage && (
            <button
              type="button"
              onClick={() => openSlide(slideImage, slideTitle || title)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors cursor-pointer"
              title={ls.viewSlide}
            >
              <ImageIcon className="w-3.5 h-3.5 text-blue-500" />
              <span>{ls.slideEvidence}</span>
            </button>
          )}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{title}</h2>
      {subtitle && (
        subtitle.includes('<') ? (
          <p className="text-lg text-blue-600 font-semibold mb-4" dangerouslySetInnerHTML={{ __html: subtitle }} />
        ) : (
          <p className="text-lg text-blue-600 font-semibold mb-4">{subtitle}</p>
        )
      )}
      {description && (
        description.includes('<') ? (
          <p className="text-base text-slate-600 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          <p className="text-base text-slate-600 max-w-2xl mx-auto">{description}</p>
        )
      )}
    </div>
  );
}

export default Section;
