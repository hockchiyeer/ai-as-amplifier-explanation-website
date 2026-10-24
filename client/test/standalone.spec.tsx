// @vitest-environment jsdom
// Guards `npm run build:standalone`: asset URL switching, the content.js override and content.js generation.
import { afterEach, describe, expect, it, vi } from 'vitest';
import { isStandalone, pptxUrl, slidesBase } from '../src/lib/assets';
import { slideUrl } from '../src/lib/slides';
import { getContent } from '../src/lib/i18nHelpers';
import { i18n } from '../src/lib/i18n';

afterEach(() => {
  vi.unstubAllEnvs();
  delete (window as any).AI_AMPLIFIER_CONTENT;
});

describe('asset URLs', () => {
  it('normal app: slides from /slides and PPTX from the /pptx server route (unchanged)', () => {
    expect(isStandalone()).toBe(false);
    expect(slidesBase()).toBe('/slides/');
    expect(slideUrl('amplifier', 3)).toBe('/slides/amplifier/slide-03.png');
    expect(pptxUrl('a b.pptx')).toBe('/pptx/a b.pptx');
  });

  it('standalone build: everything is relative to index.html under ./resources/', () => {
    vi.stubEnv('VITE_STANDALONE', 'true');
    vi.stubEnv('BASE_URL', './');
    expect(isStandalone()).toBe(true);
    expect(slideUrl('testing', 12)).toBe('./resources/slides/testing/slide-12.png');
    expect(pptxUrl('AI政治策略课程_完整版.pptx')).toBe(
      './resources/data/pptx/' + encodeURIComponent('AI政治策略课程_完整版.pptx')
    );
  });
});

describe('content.js override (window.AI_AMPLIFIER_CONTENT)', () => {
  it('is a no-op when content.js is absent', () => {
    expect(getContent('en').hero.title).toBe(i18n.en.hero.title);
  });

  it('overrides only what it defines, per language, and keeps everything else', () => {
    (window as any).AI_AMPLIFIER_CONTENT = { en: { hero: { title: 'Edited title' } } };
    const en = getContent('en');
    expect(en.hero.title).toBe('Edited title');
    expect(en.hero.subtitle).toBe(i18n.en.hero.subtitle);
    expect(en.threeEffects).toEqual(i18n.en.threeEffects);
    expect(getContent('ms').hero.title).toBe(i18n.ms.hero.title);
  });

  it('replaces arrays instead of merging them', () => {
    (window as any).AI_AMPLIFIER_CONTENT = { en: { keyTakeaways: { items: ['only one'] } } };
    expect((getContent('en') as any).keyTakeaways.items).toEqual(['only one']);
  });
});
