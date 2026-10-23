import React, { useEffect } from 'react';
import { useLearningProgress } from '@/contexts/LearningProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { X, ExternalLink } from 'lucide-react';

export function SlideLightboxModal() {
  const { activeSlide, closeSlide } = useLearningProgress();
  const { t } = useLanguage();
  const ls = t.learningStatus;

  useEffect(() => {
    if (!activeSlide) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeSlide();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, closeSlide]);

  if (!activeSlide) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={closeSlide}
      role="dialog"
      aria-modal="true"
      aria-label={activeSlide.title || ls.slideEvidence}
    >
      <div
        className="relative max-w-5xl w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800 text-white">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              {ls.slideEvidence}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs font-semibold text-slate-200 truncate max-w-md">
              {activeSlide.title || ls.viewSlide}
            </span>
          </div>
          <button
            onClick={closeSlide}
            className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label={ls.closeSlide}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Display */}
        <div className="p-2 sm:p-4 bg-black flex items-center justify-center max-h-[78vh] overflow-auto">
          <img
            src={activeSlide.image}
            alt={activeSlide.title || ls.slideEvidence}
            className="max-h-[72vh] w-auto max-w-full object-contain rounded shadow-lg"
          />
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>{activeSlide.title}</span>
          <Button
            size="sm"
            variant="secondary"
            onClick={closeSlide}
            className="h-7 text-xs"
          >
            {ls.closeSlide}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SlideLightboxModal;
