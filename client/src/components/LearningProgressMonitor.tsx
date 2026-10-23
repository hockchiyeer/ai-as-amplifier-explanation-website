import React, { useState } from 'react';
import { useLearningProgress, TUTORIAL_STEPS } from '@/contexts/LearningProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  ArrowRight,
  ExternalLink,
  Award
} from 'lucide-react';

export function LearningProgressMonitor() {
  const {
    completedSteps,
    isCompleted,
    toggleComplete,
    resetProgress,
    totalSteps,
    completedCount,
    progressPercent,
    nextIncompleteId,
  } = useLearningProgress();

  const { t } = useLanguage();
  const ls = t.learningStatus;
  const nav = t.nav;

  const [isExpanded, setIsExpanded] = useState(false);

  const getStepTitle = (id: string): string => {
    switch (id) {
      case 'three-effects':
        return nav.threeEffects;
      case 'mirror-principle':
        return nav.mirrorPrinciple;
      case 'ai-paradigms':
        return nav.aiParadigms;
      case 'case-studies':
        return nav.caseStudies;
      case 'use-cases':
        return nav.useCases;
      case 'prompting-guide':
        return nav.promptingGuide;
      case 'vibe-coding':
        return nav.vibeCoding;
      case 'cross-model-validation':
        return nav.crossModelValidation || 'Validation';
      case 'strategic-insights':
        return nav.strategicInsights;
      case 'ai-red-teaming':
        return nav.aiRedTeaming || 'Red Teaming';
      case 'production-observations':
        return nav.productionObservations || 'Observations';
      case 'subtract-principle':
        return nav.subtractPrinciple;
      case 'ai-moats':
        return nav.aiMoats || 'AI Moats';
      case 'key-takeaways':
        return nav.keyTakeaways;
      case 'ppt-showcase':
        return nav.pptShowcase;
      default:
        return id;
    }
  };

  const scrollToStep = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextStepInfo = TUTORIAL_STEPS.find((s) => s.id === nextIncompleteId);

  return (
    <aside
      aria-label={ls.tutorialTitle}
      className="fixed bottom-4 right-4 z-40 max-w-sm sm:max-w-md w-[calc(100vw-2rem)] select-none pointer-events-auto"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-300">
        {/* Floating Bar Header (Always visible) */}
        <div className="p-3.5 flex items-center justify-between gap-3 bg-gradient-to-r from-slate-50 via-white to-blue-50/40 border-b border-slate-100">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              {progressPercent === 100 ? (
                <Award className="w-4 h-4 text-amber-300" />
              ) : (
                <BookOpen className="w-4 h-4" />
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900 truncate">
                  {ls.progress}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-700">
                  {completedCount}/{totalSteps} ({progressPercent}%)
                </span>
              </div>

              {/* Next step quick link (when collapsed) */}
              {!isExpanded && (
                <p className="text-[11px] text-slate-500 truncate">
                  {completedCount === totalSteps
                    ? ls.understood
                    : `${ls.step} ${nextStepInfo?.stepNumber}: ${getStepTitle(nextIncompleteId)}`}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Quick Next Button when collapsed and incomplete */}
            {!isExpanded && completedCount < totalSteps && (
              <Button
                size="sm"
                variant="default"
                onClick={() => scrollToStep(nextIncompleteId)}
                className="h-7 px-2.5 text-xs bg-blue-600 hover:bg-blue-700 text-white font-medium gap-1"
                title={`${ls.continueLearning} ${nextStepInfo?.stepNumber}`}
              >
                <span>{ls.nextModule}</span>
                <ArrowRight className="w-3 h-3" />
              </Button>
            )}

            {/* Toggle Drawer Button */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Collapse learning progress monitor' : 'Expand learning progress monitor'}
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Linear Progress Bar */}
        <div className="h-1.5 w-full bg-slate-100 overflow-hidden">
          <div
            className={cn(
              'h-full transition-all duration-500 ease-out',
              progressPercent === 100
                ? 'bg-emerald-500'
                : 'bg-gradient-to-r from-blue-500 to-indigo-600'
            )}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Expanded Drawer Details */}
        {isExpanded && (
          <div className="p-3.5 space-y-3 max-h-[60vh] overflow-y-auto animate-in slide-in-from-bottom-2 duration-200">
            {/* Congratulations Banner if all done */}
            {progressPercent === 100 && (
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium leading-snug">{ls.allModulesCompleted}</span>
              </div>
            )}

            {/* 15 Modules Step Checklist */}
            <div className="space-y-1.5">
              {TUTORIAL_STEPS.map((step) => {
                const done = isCompleted(step.id);
                return (
                  <div
                    key={step.id}
                    className={cn(
                      'flex items-center justify-between p-2 rounded-lg border transition-all text-xs',
                      done
                        ? 'bg-emerald-50/50 border-emerald-200 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    )}
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <button
                        type="button"
                        onClick={() => toggleComplete(step.id)}
                        className="text-slate-400 hover:text-emerald-600 transition-colors flex-shrink-0"
                        title={done ? ls.understood : ls.markUnderstood}
                        aria-pressed={done}
                      >
                        <CheckCircle2
                          className={cn(
                            'w-4 h-4 transition-colors',
                            done ? 'text-emerald-600 fill-emerald-100' : 'text-slate-300'
                          )}
                        />
                      </button>

                      <span
                        onClick={() => scrollToStep(step.id)}
                        className={cn(
                          'cursor-pointer truncate hover:text-blue-600 transition-colors font-medium',
                          done && 'text-slate-600'
                        )}
                      >
                        <span className="font-bold text-slate-400 mr-1.5">
                          {String(step.stepNumber).padStart(2, '0')}.
                        </span>
                        {getStepTitle(step.id)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => scrollToStep(step.id)}
                      className="p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors flex-shrink-0"
                      title={`${ls.step} ${step.stepNumber}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <button
                type="button"
                onClick={resetProgress}
                className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-red-600 transition-colors"
                title={ls.resetProgress}
              >
                <RotateCcw className="w-3 h-3" />
                <span>{ls.resetProgress}</span>
              </button>

              <span className="text-[11px] text-slate-400">
                {completedCount} / {totalSteps} {ls.completed}
              </span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default LearningProgressMonitor;
