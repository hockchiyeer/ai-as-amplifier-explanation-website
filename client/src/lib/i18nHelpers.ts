import { Language, Content } from './i18n';
import { i18n } from './i18n';

// Simple deep merge for defaults (shallow merge for objects and arrays only)
function deepMerge(target: any, source: any): any {
  if (Array.isArray(target) && Array.isArray(source)) return source;
  if (typeof target !== 'object' || target === null) return source;
  if (typeof source !== 'object' || source === null) return target;
  const out: any = { ...target };
  for (const key of Object.keys(source)) {
    out[key] = deepMerge(target[key], source[key]);
  }
  return out;
}

export function getContent(language: Language) {
  // merge with English defaults to ensure complete shape is present
  const base = i18n.en;
  const localized = i18n[language] || {};
  return deepMerge(base, localized) as Content;
}

// Helper to get nested sections safely by path like 'neuralLimitations.sections.visualMetaphor'
const missingPaths = new Set<string>();

export function getMissingPaths() {
  return Array.from(missingPaths);
}

export function getSectionContent<T = any>(t: Content | undefined, path: string, fallback?: T): T {
  if (!t) {
    missingPaths.add(path);
    return fallback as T;
  }
  const parts = path.split('.');
  let cur: any = t;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
      cur = cur[p];
    } else {
      // dev-only warning to help locate missing i18n keys
      missingPaths.add(path);
      try {
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.warn(`i18n: missing path "${path}" — using fallback`);
        }
      } catch (e) {
        // ignore in environments without process
      }
      return fallback as T;
    }
  }
  return cur as T;
}
