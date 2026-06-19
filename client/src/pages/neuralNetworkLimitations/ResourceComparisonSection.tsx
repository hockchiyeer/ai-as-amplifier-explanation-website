import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSectionContent } from '@/lib/i18nHelpers';

export default function ResourceComparisonSection() {
  const { t } = useLanguage();
  const content = getSectionContent(t, 'neuralLimitations', { sections: { resourceComparison: { title: 'When Humans Still Win', bullets: [] } } });
  const bullets = content.sections.resourceComparison.bullets || [];

  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-6">{content.sections.resourceComparison.title}</h3>
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {bullets.map((b: string, i: number) => (
            <li key={i} className="p-4 bg-white rounded shadow-sm">
              <p className="text-sm text-slate-700">{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
