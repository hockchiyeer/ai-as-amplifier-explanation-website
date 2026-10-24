import { useEffect, useState } from 'react';
import { ListOrdered, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LANGUAGES, type Language } from '@/lib/i18n';
import { goToSection } from '@/lib/scroll';
import { TOP_NAV_IDS, getNavLabel } from '@/lib/steps';
import { ContentsPanel } from '@/components/ContentsPanel';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeSection: string;
}

const SHORT_LABEL: Record<Language, string> = { en: 'EN', zh: '中文', ms: 'BM' };
const HTML_LANG: Record<Language, string> = { en: 'en', zh: 'zh-Hans', ms: 'ms' };

export function Navigation({ activeSection }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [contentsOpen, setContentsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [readPct, setReadPct] = useState(0);

  const sections = TOP_NAV_IDS.map(id => ({ id, label: getNavLabel(t, id) }));

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setIsScrolled(window.scrollY > 10);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setReadPct(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);
    };
    const handleScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Escape closes the mobile menu
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    goToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        // ensure nav is isolated and above page content (fixes click-blocking overlays)
        'fixed top-0 left-0 right-0 isolate z-[9999] transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm' : 'bg-transparent'
      )}
      style={{ pointerEvents: 'auto' }}
    >
      <nav
        aria-label={t.ui.mainNav}
        className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-2 xl:gap-3"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="text-lg sm:text-xl font-bold whitespace-nowrap bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            AI Amplifier
          </button>
        </div>

        {/* Desktop Navigation (original links) */}
        <ul className="hidden xl:flex flex-1 min-w-0 items-center justify-center gap-0.5">
          {sections.map(section => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => handleNavClick(section.id)}
                aria-current={activeSection === section.id ? 'location' : undefined}
                className={cn(
                  'px-2 2xl:px-3 py-2 rounded-md text-sm font-medium text-center leading-tight transition-colors duration-200',
                  activeSection === section.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                )}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Contents, language switcher & mobile menu */}
        <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setContentsOpen(true)}
            aria-haspopup="dialog"
            aria-label={t.ui.contentsTitle}
            className="inline-flex flex-shrink-0 items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 border border-slate-200 bg-white/80"
          >
            <ListOrdered className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline xl:hidden 2xl:inline whitespace-nowrap">{t.ui.contents}</span>
          </button>

          <div
            role="group"
            aria-label={t.ui.languageLabel}
            className="flex flex-shrink-0 items-center rounded-md border border-slate-200 bg-white/80 overflow-hidden"
          >
            {LANGUAGES.map(code => (
              <button
                key={code}
                type="button"
                lang={HTML_LANG[code]}
                aria-pressed={language === code}
                aria-label={t.ui.languageNames[code]}
                title={t.ui.languageNames[code]}
                onClick={() => setLanguage(code)}
                className={cn(
                  'px-2 sm:px-2.5 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors',
                  language === code ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'
                )}
              >
                {SHORT_LABEL[code]}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t.ui.closeMenu : t.ui.openMenu}
            className="xl:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Reading progress */}
      <div
        className="absolute left-0 bottom-0 h-0.5 w-full bg-transparent"
        role="progressbar"
        aria-label={t.ui.readingProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={readPct}
      >
        <div className="h-full bg-blue-600 transition-[width] duration-150" style={{ width: `${readPct}%` }} />
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="xl:hidden bg-white border-b border-slate-200 animate-slide-in-down max-h-[calc(100vh-4.5rem)] overflow-y-auto"
        >
          <ul className="container mx-auto px-4 py-4 space-y-2">
            {sections.map(section => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(section.id)}
                  aria-current={activeSection === section.id ? 'location' : undefined}
                  className={cn(
                    'w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                    activeSection === section.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  )}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ContentsPanel open={contentsOpen} onOpenChange={setContentsOpen} activeSection={activeSection} />
    </header>
  );
}
