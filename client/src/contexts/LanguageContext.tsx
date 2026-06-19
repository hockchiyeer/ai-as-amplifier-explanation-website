import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Language, Content } from '@/lib/i18n';
import { getContent } from '@/lib/i18nHelpers';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);
  const [contentVersion, setContentVersion] = useState(0);

  // Initialize language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguageState(savedLanguage);
    }
    setMounted(true);
    
    const handleContentUpdate = () => {
      setContentVersion(v => v + 1);
    };
    window.addEventListener('contentUpdated', handleContentUpdate);
    return () => window.removeEventListener('contentUpdated', handleContentUpdate);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    // use merged content ensuring defaults are present
    t: getContent(language),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
