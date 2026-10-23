/* @vitest-environment jsdom */
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { EffectCard } from '../src/components/EffectCard';
import { CaseStudyCard } from '../src/components/CaseStudyCard';
import { UseCaseCard } from '../src/components/UseCaseCard';
import { getContent } from '../src/lib/i18nHelpers';

describe('Educational components smoke tests', () => {
  it('loads en, zh, and bm i18n content without errors', () => {
    const en = getContent('en');
    const zh = getContent('zh');
    const bm = getContent('bm');

    expect(en.hero.mainHeading).toBeTruthy();
    expect(zh.hero.mainHeading).toBeTruthy();
    expect(bm.hero.mainHeading).toBeTruthy();
  });

  it('renders EffectCard without throwing', () => {
    const { container } = render(
      <LanguageProvider>
        <EffectCard
          icon="⚡"
          title="The Amplifier Effect"
          description="AI magnifies every action impact."
          keyPoint="Faster and cheaper"
          index={0}
        />
      </LanguageProvider>
    );
    expect(container).toBeTruthy();
  });

  it('renders CaseStudyCard and UseCaseCard', () => {
    const { container } = render(
      <LanguageProvider>
        <CaseStudyCard
          title="Case Study #1"
          scenario="Marketing team deployed AI."
          outcome="Negative effects amplified."
          lesson="Wrong direction = faster failure."
          scenarioLabel="Scenario"
          outcomeLabel="Outcome"
          lessonLabel="Lesson"
          index={0}
        />
        <UseCaseCard
          title="Sales"
          cases={['Customer research', 'Call prep']}
          index={0}
        />
      </LanguageProvider>
    );
    expect(container).toBeTruthy();
  });
});
