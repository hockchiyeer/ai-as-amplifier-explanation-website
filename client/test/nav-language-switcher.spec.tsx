// @vitest-environment jsdom
// Regression: on desktop the EN / 中文 / BM switcher was squeezed by the long link row and BM got clipped.
// Layout can't be measured in jsdom, so this pins the classes that keep the switcher intact
// (verified in a real browser at 1280–1920px in EN, 中文 and BM).
import React, { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { Navigation } from '../src/components/Navigation';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { ProgressProvider } from '../src/contexts/ProgressContext';
import { SlideViewerProvider } from '../src/components/SlideViewer';
import { TooltipProvider } from '../src/components/ui/tooltip';
import { LANGUAGES } from '../src/lib/i18n';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
let host: HTMLDivElement;
let root: Root;

beforeAll(() => {
  window.scrollTo = vi.fn() as any;
  (window as any).matchMedia ??= (q: string) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} });
  (globalThis as any).ResizeObserver ??= class { observe() {} unobserve() {} disconnect() {} };
});
afterEach(async () => {
  await act(async () => root.unmount());
  host.remove();
});

describe('desktop language switcher', () => {
  it('always renders one non-shrinking, non-wrapping button per language', async () => {
    host = document.createElement('div');
    document.body.appendChild(host);
    root = createRoot(host);
    await act(async () => {
      root.render(
        <LanguageProvider initialLanguage="en">
          <ProgressProvider>
            <SlideViewerProvider>
              <TooltipProvider>
                <Navigation activeSection="home" />
              </TooltipProvider>
            </SlideViewerProvider>
          </ProgressProvider>
        </LanguageProvider>
      );
    });
    const group = host.querySelector('header [role="group"]') as HTMLElement;
    expect(group.className).toContain('flex-shrink-0');
    const buttons = Array.from(group.querySelectorAll('button'));
    expect(buttons.map(b => b.textContent)).toEqual(['EN', '中文', 'BM']);
    expect(buttons.length).toBe(LANGUAGES.length);
    for (const b of buttons) expect(b.className, b.textContent!).toContain('whitespace-nowrap');
  });
});
