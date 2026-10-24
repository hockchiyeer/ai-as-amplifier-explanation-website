import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { LANGUAGES, type Language, type Content } from '@/lib/i18n';
import { getContent } from '@/lib/i18nHelpers';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/** BCP 47 tag written to <html lang> so screen readers pick the right voice and browsers the right CJK font. */
const HTML_LANG: Record<Language, string> = { en: 'en', zh: 'zh-Hans', ms: 'ms' };

function isLanguage(v: unknown): v is Language {
  return typeof v === 'string' && (LANGUAGES as string[]).includes(v);
}

/** Priority: ?lang= in the URL → saved choice → browser language → English. */
function detectInitialLanguage(): Language {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (isLanguage(fromUrl)) return fromUrl;
  } catch {
    /* ignore */
  }
  try {
    const saved = localStorage.getItem('language');
    if (isLanguage(saved)) return saved;
  } catch {
    /* storage can be blocked */
  }
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en').toLowerCase();
  if (nav.startsWith('zh')) return 'zh';
  if (nav.startsWith('ms') || nav.startsWith('id')) return 'ms';
  return 'en';
}

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  /** Only for tests / server rendering: skips URL, storage and browser detection. */
  initialLanguage?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage ?? 'en');

  // Initialise from URL / localStorage / browser on mount
  useEffect(() => {
    if (!initialLanguage) setLanguageState(detectInitialLanguage());
  }, [initialLanguage]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useMemo(() => getContent(language), [language]);

  // Keep <html lang>, the tab title and the meta description in step with the chosen language
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language];
    document.title = t.ui.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.ui.meta.description);
  }, [language, t]);

  const value: LanguageContextType = { language, setLanguage, t };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
