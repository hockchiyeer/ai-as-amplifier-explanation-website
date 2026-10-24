import type { Content } from './i18n';

/** Tutorial steps, in page order. 'home' (the hero) is the introduction, not a numbered step. */
export const STEP_IDS = [
  'three-effects',
  'mirror-principle',
  'ai-paradigms',
  'case-studies',
  'use-cases',
  'prompting-guide',
  'vibe-coding',
  'cross-model-validation',
  'strategic-insights',
  'ai-red-teaming',
  'production-observations',
  'subtract-principle',
  'ai-moats',
  'key-takeaways',
  'ppt-showcase',
  'ai-journey',
] as const;

export type StepId = (typeof STEP_IDS)[number];
export const SECTION_IDS: string[] = ['home', ...STEP_IDS];

export function stepNumber(id: string): number {
  return (STEP_IDS as readonly string[]).indexOf(id) + 1; // 0 when not a step
}

/** The existing section title (already translated) is used as the step name, so no content is duplicated. */
export function getStepTitle(t: Content, id: string): string {
  switch (id) {
    case 'home':
      return t.ui.intro;
    case 'three-effects':
      return t.threeEffects.title;
    case 'mirror-principle':
      return t.mirrorPrinciple.title;
    case 'ai-paradigms':
      return t.aiParadigms.title;
    case 'case-studies':
      return t.caseStudies.title;
    case 'use-cases':
      return t.useCases.title;
    case 'prompting-guide':
      return t.promptingGuide.title;
    case 'vibe-coding':
      return t.vibeCoding.title;
    case 'cross-model-validation':
      return t.crossModelValidation.title;
    case 'strategic-insights':
      return t.strategicInsights.title;
    case 'ai-red-teaming':
      return t.aiRedTeaming.title;
    case 'production-observations':
      return t.productionObservations.title;
    case 'subtract-principle':
      return t.subtractPrinciple.title;
    case 'ai-moats':
      return t.aiMoats.title;
    case 'key-takeaways':
      return t.keyTakeaways.title;
    case 'ppt-showcase':
      return t.pptShowcase.title;
    case 'ai-journey':
      return t.aiJourney.title;
    default:
      return id;
  }
}

/** Short top-bar label for a section id. */
export function getNavLabel(t: Content, id: string): string {
  const n = t.nav;
  const map: Record<string, string> = {
    home: n.home,
    'three-effects': n.threeEffects,
    'mirror-principle': n.mirrorPrinciple,
    'ai-paradigms': n.aiParadigms,
    'case-studies': n.caseStudies,
    'use-cases': n.useCases,
    'prompting-guide': n.promptingGuide,
    'vibe-coding': n.vibeCoding,
    'cross-model-validation': n.crossModelValidation,
    'strategic-insights': n.strategicInsights,
    'ai-red-teaming': n.aiRedTeaming,
    'production-observations': n.productionObservations,
    'subtract-principle': n.subtractPrinciple,
    'ai-moats': n.aiMoats,
    'key-takeaways': n.keyTakeaways,
    'ppt-showcase': n.pptShowcase,
    'ai-journey': n.aiJourney,
  };
  return map[id] ?? id;
}

/** The original top-bar items (unchanged set), now in the same order as the page. */
export const TOP_NAV_IDS: string[] = [
  'home',
  'three-effects',
  'mirror-principle',
  'ai-paradigms',
  'case-studies',
  'use-cases',
  'prompting-guide',
  'vibe-coding',
  'strategic-insights',
  'key-takeaways',
  'ppt-showcase',
];
