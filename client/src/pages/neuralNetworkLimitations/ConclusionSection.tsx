import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSectionContent } from '@/lib/i18nHelpers';

export default function ConclusionSection() {
  const { t } = useLanguage();
  const content = getSectionContent(t, 'neuralLimitations', { sections: { conclusion: { title: 'Conclusion', text: '' } } });
  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">{content.sections.conclusion.title}</h3>
        <p className="text-slate-700">{content.sections.conclusion.text}</p>
      </div>
    </section>
  );
}
