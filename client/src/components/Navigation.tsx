import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const nav = t.nav;
  const sections = [
    { id: 'home', label: nav.home },
    { id: 'three-effects', label: nav.threeEffects },
    { id: 'mirror-principle', label: nav.mirrorPrinciple },
    { id: 'ai-paradigms', label: nav.aiParadigms },
    { id: 'case-studies', label: nav.caseStudies },
    { id: 'use-cases', label: nav.useCases },
    { id: 'prompting-guide', label: nav.promptingGuide },
    { id: 'vibe-coding', label: nav.vibeCoding },
    { id: 'strategic-insights', label: nav.strategicInsights },
    { id: 'ppt-showcase', label: nav.pptShowcase },
    { id: 'key-takeaways', label: nav.keyTakeaways },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 isolate z-[9999] transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs'
      )}
      style={{ pointerEvents: 'auto' }}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity flex items-center gap-1.5"
          >
            <span>AI Amplifier</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 overflow-x-auto py-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={cn(
                'px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors duration-150 whitespace-nowrap',
                activeSection === section.id
                  ? 'text-blue-600 bg-blue-50 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              )}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Tri-Lingual Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* Accessible Segmented Tri-Lingual Control */}
          <div
            className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200"
            role="group"
            aria-label="Language selection / Pemilihan Bahasa / 语言选择"
          >
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={cn(
                'px-2 py-1 text-xs font-bold rounded transition-colors whitespace-nowrap',
                language === 'en'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              )}
              aria-pressed={language === 'en'}
              title="English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('zh')}
              className={cn(
                'px-2 py-1 text-xs font-bold rounded transition-colors whitespace-nowrap',
                language === 'zh'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              )}
              aria-pressed={language === 'zh'}
              title="中文 (Chinese)"
            >
              中文
            </button>
            <button
              type="button"
              onClick={() => setLanguage('bm')}
              className={cn(
                'px-2 py-1 text-xs font-bold rounded transition-colors whitespace-nowrap',
                language === 'bm'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              )}
              aria-pressed={language === 'bm'}
              title="Bahasa Melayu (Malay)"
            >
              BM
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors text-slate-700"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 animate-slide-in-down max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {language === 'zh' ? '语言切换' : language === 'bm' ? 'Pilih Bahasa' : 'Language'}
              </span>
              <div className="flex items-center gap-1">
                {(['en', 'zh', 'bm'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={cn(
                      'px-2.5 py-1 text-xs font-bold rounded uppercase',
                      language === lang ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    )}
                  >
                    {lang === 'zh' ? '中文' : lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={cn(
                  'w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150',
                  activeSection === section.id
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navigation;
