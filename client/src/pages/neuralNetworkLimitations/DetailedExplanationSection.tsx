import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSectionContent } from '@/lib/i18nHelpers';

export default function DetailedExplanationSection() {
  const { t } = useLanguage();
  const content = getSectionContent(t, 'neuralLimitations', { sections: { detailed: { title: 'Detailed Explanation', paragraphs: [] } } });
  const paragraphs = content.sections.detailed.paragraphs || [];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">{content.sections.detailed.title}</h3>
        {paragraphs.map((p: string, i: number) => (
          <p key={i} className="text-slate-700 mb-4">{p}</p>
        ))}
      </div>
    </section>
  );
}
