// @vitest-environment jsdom
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { describe, it, expect } from 'vitest';
import PptShowcase from '../src/components/PptShowcase';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { ProgressProvider } from '../src/contexts/ProgressContext';
import { SlideViewerProvider } from '../src/components/SlideViewer';
import { i18n } from '../src/lib/i18n';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

describe('PptShowcase', () => {
  it('renders a preview and a download button for each deck', async () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const root = createRoot(host);
    await act(async () => {
      root.render(
        <LanguageProvider initialLanguage="en">
          <ProgressProvider>
            <SlideViewerProvider>
              <PptShowcase />
            </SlideViewerProvider>
          </ProgressProvider>
        </LanguageProvider>
      );
    });
    const labels = Array.from(host.querySelectorAll('button')).map(b => b.textContent);
    expect(labels.filter(l => l === i18n.en.pptShowcase.preview).length).toBe(3);
    expect(labels.filter(l => l === i18n.en.pptShowcase.download).length).toBe(3);
    await act(async () => root.unmount());
  });
});
