import { useState, useEffect } from 'react';
import { Menu, X, Edit3 } from 'lucide-react';
import { ContentEditor } from '@/components/ContentEditor';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

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

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header
        className={cn(
        // ensure nav is isolated and above page content (fixes click-blocking overlays)
        'fixed top-0 left-0 right-0 isolate z-[9999] transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      )}
      style={{ pointerEvents: 'auto' }}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            AI Amplifier
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                activeSection === section.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              )}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditorOpen(true)}
            className="hidden md:flex gap-2 text-blue-600 border-blue-200 hover:bg-blue-50"
          >
            <Edit3 className="w-4 h-4" />
            Edit Content
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-sm font-medium"
          >
            {nav.language}
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-slide-in-down">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={cn(
                  'w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  activeSection === section.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                )}
              >
                {section.label}
              </button>
            ))}
            
            <button
              onClick={() => {
                setIsEditorOpen(true);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-blue-600 bg-blue-50 mt-2"
            >
              ✏️ Edit Content
            </button>
          </div>
        </div>
      )}
      
      {/* Editor Modal */}
      {isEditorOpen && (
        <ContentEditor onClose={() => setIsEditorOpen(false)} />
      )}
    </header>
  );
}
