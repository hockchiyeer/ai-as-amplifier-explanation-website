import raw from './slides-data.json';
import { slidesBase } from './assets';

export type DeckId = 'amplifier' | 'testing' | 'politics';

export interface SlideInfo {
  n: number;
  title: string;
  text: string[];
}
export interface DeckInfo {
  file: string;
  count: number;
  slides: SlideInfo[];
}

const decks = raw as unknown as Record<DeckId, DeckInfo>;

export function isDeckId(id: string): id is DeckId {
  return id in decks;
}
export function getDeck(id: DeckId): DeckInfo {
  return decks[id];
}


/** Static, self-contained screenshot URL (client/public/slides, or ./resources/slides in the standalone build). */
export function slideUrl(deck: DeckId, n: number): string {
  return `${slidesBase()}${deck}/slide-${String(n).padStart(2, '0')}.png`;
}

/**
 * Which slides of the 35-slide master deck illustrate each tutorial step.
 * Chosen by matching each slide's own title to the section it supports.
 */
export const SLIDE_REFS: Record<string, number[]> = {
  'three-effects': [2, 6],
  'mirror-principle': [4, 5],
  'ai-paradigms': [8, 9],
  'case-studies': [14, 15],
  'use-cases': [11, 12],
  'prompting-guide': [7, 21],
  'vibe-coding': [30, 31],
  'cross-model-validation': [18, 19, 20],
  'strategic-insights': [32, 23],
  'ai-red-teaming': [22],
  'production-observations': [24, 25],
  'subtract-principle': [26],
  'ai-moats': [27, 28],
  'key-takeaways': [33, 34],
  'ai-journey': [35],
};

/** Language the slide text is written in (for lang attributes on slide titles / text alternatives). */
export const DECK_LANG: Record<DeckId, string> = {
  amplifier: 'zh-Hans',
  testing: 'en',
  politics: 'zh-Hans',
};
