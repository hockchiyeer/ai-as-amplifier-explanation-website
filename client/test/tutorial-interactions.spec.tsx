// @vitest-environment jsdom
import React, { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import Home from '../src/pages/Home';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { ProgressProvider } from '../src/contexts/ProgressContext';
import { SlideViewerProvider } from '../src/components/SlideViewer';
import { TooltipProvider } from '../src/components/ui/tooltip';
import { i18n, type Language } from '../src/lib/i18n';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

let host: HTMLDivElement;
let root: Root;
const scrolled: string[] = [];

beforeAll(() => {
  (Element.prototype as any).scrollIntoView = function () {
    scrolled.push((this as HTMLElement).id);
  };
  window.scrollTo = vi.fn() as any;
  (window as any).matchMedia ??= (q: string) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} });
  (globalThis as any).ResizeObserver ??= class { observe() {} unobserve() {} disconnect() {} };
  (window as any).requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(() => cb(0), 0);
});

async function mount(lang: Language) {
  host = document.createElement('div');
  document.body.appendChild(host);
  root = createRoot(host);
  await act(async () => {
    root.render(
      <LanguageProvider initialLanguage={lang}>
        <ProgressProvider>
          <SlideViewerProvider>
            <TooltipProvider>
              <Home />
            </TooltipProvider>
          </SlideViewerProvider>
        </ProgressProvider>
      </LanguageProvider>
    );
  });
}

beforeEach(() => {
  localStorage.clear();
  scrolled.length = 0;
  window.history.replaceState(null, '', '/');
});
afterEach(async () => {
  await act(async () => root.unmount());
  host.remove();
  document.body.innerHTML = '';
});

const q = <T extends Element = HTMLElement>(sel: string) => document.querySelector(sel) as T | null;
const byLabel = (label: string) => q(`[aria-label="${label}"]`)!;
const buttonByText = (re: RegExp) =>
  Array.from(document.querySelectorAll('button')).find(b => re.test(b.textContent ?? ''))!;
const click = (el: Element) => act(async () => { (el as HTMLElement).click(); });
const key = (el: Element, k: string) =>
  act(async () => { el.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true })); });

describe('tri-lingual tutorial: interaction', () => {
  it('switches between English, 中文 and Bahasa Melayu and updates <html lang>, title and storage', async () => {
    await mount('en');
    expect(q('h1')!.textContent).toBe(i18n.en.hero.mainHeading);
    expect(document.documentElement.lang).toBe('en');

    await click(byLabel(i18n.en.ui.languageNames.ms));
    expect(q('h1')!.textContent).toBe(i18n.ms.hero.mainHeading);
    expect(document.documentElement.lang).toBe('ms');
    expect(document.title).toBe(i18n.ms.ui.meta.title);
    expect(localStorage.getItem('language')).toBe('ms');

    await click(byLabel(i18n.ms.ui.languageNames.zh));
    expect(q('h1')!.textContent).toBe(i18n.zh.hero.mainHeading);
    expect(document.documentElement.lang).toBe('zh-Hans');

    await click(byLabel(i18n.zh.ui.languageNames.en));
    expect(q('h1')!.textContent).toBe(i18n.en.hero.mainHeading);
    expect(q('[aria-pressed="true"][aria-label="English"]')).not.toBeNull();
  });

  for (const lang of ['en', 'zh', 'ms'] as Language[]) {
    it(`[${lang}] renders all 16 numbered steps, every original section, and no English UI leftovers`, async () => {
      await mount(lang);
      const text = document.body.textContent ?? '';
      const total = 16;
      for (let n = 1; n <= total; n++) {
        const label = i18n[lang].ui.stepOf.replace('{n}', String(n)).replace('{total}', String(total));
        expect(text, label).toContain(label);
      }
      // original content is all present
      expect(text).toContain(i18n[lang].threeEffects.amplifier.description);
      expect(text).toContain(i18n[lang].aiMoats.timeline[3].description);
      expect(text).toContain(i18n[lang].footer.keyTakeawayText);
      expect(text).toContain(i18n[lang].ui.copyright);
      if (lang !== 'en') {
        for (const leak of ['Previous', 'Mark step as done', 'See it in the slides', 'All rights reserved', 'No preview']) {
          expect(text, leak).not.toContain(leak);
        }
      }
    });

    it(`[${lang}] basic accessibility smoke test: names, alts, landmarks, headings`, async () => {
      await mount(lang);
      expect(document.querySelectorAll('main').length).toBe(1);
      expect(document.querySelectorAll('h1').length).toBe(1);
      expect(q('nav')!.getAttribute('aria-label')).toBe(i18n[lang].ui.mainNav);
      const unnamedButtons = Array.from(document.querySelectorAll('button')).filter(
        b => !(b.textContent ?? '').trim() && !b.getAttribute('aria-label')
      );
      expect(unnamedButtons.length).toBe(0);
      const noAlt = Array.from(document.querySelectorAll('img')).filter(i => !i.hasAttribute('alt'));
      expect(noAlt.length).toBe(0);
      // every section is labelled by an existing heading
      for (const s of Array.from(document.querySelectorAll('section[aria-labelledby]'))) {
        expect(document.getElementById(s.getAttribute('aria-labelledby')!), s.id).not.toBeNull();
      }
      // duplicate ids break aria-labelledby / anchors
      const ids = Array.from(document.querySelectorAll('[id]')).map(e => e.id);
      expect(ids.length).toBe(new Set(ids).size);
    });
  }

  it('Next / Previous move between steps and focus the target heading', async () => {
    await mount('en');
    const section = q('#three-effects')!;
    const next = Array.from(section.querySelectorAll('button')).find(b => /^Next/.test(b.textContent ?? ''))!;
    await click(next);
    expect(scrolled).toContain('mirror-principle');
    expect(document.activeElement?.id).toBe('mirror-principle-title');
    expect(window.location.hash).toBe('#mirror-principle');

    const prev = Array.from(q('#mirror-principle')!.querySelectorAll('button')).find(b => /^Previous/.test(b.textContent ?? ''))!;
    await click(prev);
    expect(scrolled).toContain('three-effects');
  });

  it('"Mark step as done" toggles, persists, and shows in the contents panel', async () => {
    await mount('en');
    const done = buttonByText(/Mark step as done/);
    expect(done.getAttribute('aria-pressed')).toBe('false');
    await click(done);
    expect(done.getAttribute('aria-pressed')).toBe('true');
    expect(JSON.parse(localStorage.getItem('ai-amplifier-progress')!)).toEqual(['three-effects']);

    await click(byLabel('Tutorial contents'));
    const dlg = q('[role="dialog"]')!;
    expect(dlg).not.toBeNull();
    expect(dlg.textContent).toContain('1 of 16 steps done');
    expect(dlg.querySelectorAll('ol li').length).toBe(17); // intro + 16 steps

    const step5 = Array.from(dlg.querySelectorAll('ol li button'))[5]; // 5th step (index 0 = intro)
    await click(step5);
    await act(async () => { await new Promise(r => setTimeout(r, 120)); });
    expect(q('[role="dialog"]')).toBeNull();
    expect(scrolled).toContain('use-cases');
  });

  it('slide screenshots open in an accessible viewer with keyboard navigation and text alternative', async () => {
    await mount('en');
    const ref = q('#three-effects')!.querySelector('button[aria-label^="View slide 2"]')!;
    expect(ref).not.toBeNull();
    await click(ref);
    const dlg = q('[role="dialog"]')!;
    expect(dlg).not.toBeNull();
    const big = dlg.querySelector('img[width="960"]') as HTMLImageElement;
    expect(big.alt).toContain('Slide 2 of 35');
    expect(big.src).toContain('/slides/amplifier/slide-02.png');
    expect(dlg.textContent).toContain('Text version of this slide');

    await key(dlg, 'ArrowRight');
    expect((dlg.querySelector('img[width="960"]') as HTMLImageElement).alt).toContain('Slide 3 of 35');
    await key(dlg, 'End');
    expect((dlg.querySelector('img[width="960"]') as HTMLImageElement).alt).toContain('Slide 35 of 35');
    await key(dlg, 'ArrowRight'); // wraps
    expect((dlg.querySelector('img[width="960"]') as HTMLImageElement).alt).toContain('Slide 1 of 35');

    // load failure shows a retry control instead of a blank box
    await act(async () => { dlg.querySelector('img[width="960"]')!.dispatchEvent(new Event('error')); });
    expect(q('[role="alert"]')!.textContent).toContain('could not be loaded');
    await key(dlg, 'Escape');
    await act(async () => { await new Promise(r => setTimeout(r, 50)); });
    expect(q('[role="dialog"]')).toBeNull();
  });

  it('all three decks have a preview thumbnail and a Download button', async () => {
    await mount('ms');
    const cards = document.querySelectorAll('#ppt-showcase ul > li');
    expect(cards.length).toBe(3);
    cards.forEach(c => {
      expect(c.querySelector('img')!.getAttribute('src')).toMatch(/\/slides\/(amplifier|testing|politics)\/slide-01\.png$/);
      expect(c.textContent).toContain(i18n.ms.pptShowcase.download);
    });
  });

  it('EffectCard exposes expanded state to assistive tech', async () => {
    await mount('en');
    const card = q('#three-effects button[aria-expanded]')!;
    expect(card.getAttribute('aria-expanded')).toBe('false');
    await click(card);
    expect(card.getAttribute('aria-expanded')).toBe('true');
    expect(document.getElementById(card.getAttribute('aria-controls')!)).not.toBeNull();
  });
});
