import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import HeroSection from '../src/pages/neuralNetworkLimitations/HeroSection';
import ComparisonSection from '../src/pages/neuralNetworkLimitations/ComparisonSection';
import DetailedExplanationSection from '../src/pages/neuralNetworkLimitations/DetailedExplanationSection';
import VisualMetaphorSection from '../src/pages/neuralNetworkLimitations/VisualMetaphorSection';
import ResourceComparisonSection from '../src/pages/neuralNetworkLimitations/ResourceComparisonSection';
import ConclusionSection from '../src/pages/neuralNetworkLimitations/ConclusionSection';

// Minimal mock LanguageProvider which supplies a `t` object
import { getContent } from '../src/lib/i18nHelpers';
import { Language } from '../src/lib/i18n';
import { createContext } from 'react';

const MockLanguageContext = createContext<any>(null);

function MockProvider({ children, lang = 'en' }: { children: any; lang?: Language }) {
  const t = getContent(lang);
  return (
    <MockLanguageContext.Provider value={{ language: lang, setLanguage: () => {}, t }}>
      {children}
    </MockLanguageContext.Provider>
  );
}

// To avoid changing components under test, we wrap them in a context shim by
// monkey-patching React's require cache (simple approach for small test).
import * as LanguageModule from '../src/contexts/LanguageContext';

// Replace useLanguage to read from our mock context
(LanguageModule as any).useLanguage = function useLanguageMock() {
  const ctx = React.useContext(MockLanguageContext);
  if (!ctx) throw new Error('MockLanguageContext not provided');
  return ctx;
};

describe('Neural sections smoke test', () => {
  const components = [
    HeroSection,
    ComparisonSection,
    DetailedExplanationSection,
    VisualMetaphorSection,
    ResourceComparisonSection,
    ConclusionSection,
  ];

  for (const C of components) {
    it(`renders ${C.name} without throwing`, () => {
      expect(() => renderToStaticMarkup(<MockProvider><C /></MockProvider>)).not.toThrow();
    });
  }
});
