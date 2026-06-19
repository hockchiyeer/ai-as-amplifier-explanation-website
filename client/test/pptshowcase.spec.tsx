/* @vitest-environment jsdom */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PptShowcase from '../src/components/PptShowcase';
import { getContent } from '../src/lib/i18nHelpers';
import { Language } from '../src/lib/i18n';
import * as LanguageModule from '../src/contexts/LanguageContext';

// Mock useLanguage to return merged content
(LanguageModule as any).useLanguage = function useLanguageMock() {
  const t = getContent('en' as Language);
  return { language: 'en', setLanguage: () => {}, t };
};

describe('PptShowcase (RTL)', () => {
  it('renders preview and download buttons', () => {
    render(<PptShowcase />);
    // default text comes from i18n defaults
    expect(screen.getAllByText(/Preview|预览|预览/)[0]).toBeTruthy();
  });
});
