// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { i18n, LANGUAGES } from '../src/lib/i18n';
import { getDeck, SLIDE_REFS } from '../src/lib/slides';
import { STEP_IDS, getStepTitle, getNavLabel } from '../src/lib/steps';
import { getContent } from '../src/lib/i18nHelpers';

/** Flatten an object to { 'a.b.0.c': value } so two languages can be compared key-for-key. */
function flatten(obj: unknown, prefix = '', out: Record<string, unknown> = {}) {
  if (Array.isArray(obj)) {
    out[`${prefix}.length`] = obj.length;
    obj.forEach((v, i) => flatten(v, `${prefix}.${i}`, out));
  } else if (obj && typeof obj === 'object') {
    Object.entries(obj).forEach(([k, v]) => flatten(v, prefix ? `${prefix}.${k}` : k, out));
  } else {
    out[prefix] = obj;
  }
  return out;
}

const en = flatten(i18n.en);

describe('tri-lingual content', () => {
  for (const lang of LANGUAGES.filter(l => l !== 'en')) {
    it(`${lang} has exactly the same keys and list lengths as English`, () => {
      const other = flatten(i18n[lang]);
      expect(Object.keys(other).sort()).toEqual(Object.keys(en).sort());
    });

    it(`${lang} has no empty strings`, () => {
      const other = flatten(i18n[lang]);
      const empty = Object.entries(other).filter(([, v]) => typeof v === 'string' && v.trim() === '');
      expect(empty).toEqual([]);
    });

    it(`${lang} keeps non-text values (icons, ranks, scores, filenames) identical to English`, () => {
      const other = flatten(i18n[lang]);
      const mismatches = Object.keys(en).filter(k => {
        const last = k.split('.').pop() as string;
        return ['icon', 'emoji', 'rank', 'score', 'filename', 'id', 'step'].includes(last) && en[k] !== other[k];
      });
      expect(mismatches).toEqual([]);
    });

    it(`${lang} keeps every {placeholder} used by the UI strings`, () => {
      const other = flatten(i18n[lang]);
      for (const k of Object.keys(en).filter(k => k.startsWith('ui.'))) {
        const a = String(en[k]).match(/\{\w+\}/g)?.sort() ?? [];
        const b = String(other[k]).match(/\{\w+\}/g)?.sort() ?? [];
        expect(b, k).toEqual(a);
      }
    });
  }

  it('English slide captions are English, not Chinese', () => {
    for (const item of i18n.en.pptShowcase.items) {
      expect(/[\u4e00-\u9fff]/.test(item.caption), item.id).toBe(false);
    }
  });

  it('every step has a title and nav label in every language', () => {
    for (const lang of LANGUAGES) {
      const t = getContent(lang);
      for (const id of STEP_IDS) {
        expect(getStepTitle(t, id).length, `${lang}/${id}`).toBeGreaterThan(0);
        expect(getNavLabel(t, id).length, `${lang}/${id}`).toBeGreaterThan(0);
      }
    }
  });
});

describe('slide screenshots', () => {
  it('every referenced slide exists in the master deck', () => {
    const deck = getDeck('amplifier');
    for (const [step, refs] of Object.entries(SLIDE_REFS)) {
      for (const n of refs) {
        expect(n, step).toBeGreaterThanOrEqual(1);
        expect(n, step).toBeLessThanOrEqual(deck.count);
      }
    }
  });

  it('every deck has a text alternative for each slide image', () => {
    for (const id of ['amplifier', 'testing', 'politics'] as const) {
      const deck = getDeck(id);
      expect(deck.slides.length).toBe(deck.count);
    }
  });
});
