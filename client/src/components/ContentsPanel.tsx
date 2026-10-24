import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Check, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/contexts/ProgressContext';
import { fmt } from '@/lib/format';
import { goToSection } from '@/lib/scroll';
import { STEP_IDS, getStepTitle } from '@/lib/steps';
import { cn } from '@/lib/utils';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeSection: string;
}

/** Full list of every tutorial step (the top bar keeps its original, shorter set of links). */
export function ContentsPanel({ open, onOpenChange, activeSection }: Props) {
  const { t } = useLanguage();
  const { done, total, isDone, reset } = useProgress();
  const doneCount = STEP_IDS.filter(id => done.has(id)).length;
  const pct = Math.round((doneCount / total) * 100);

  const jump = (id: string) => {
    onOpenChange(false);
    // wait for the dialog to unmount so focus is not pulled back to the trigger
    window.setTimeout(() => goToSection(id), 60);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-[10000]" />
        <DialogPrimitive.Content
          onCloseAutoFocus={e => e.preventDefault()}
          className="fixed right-0 top-0 h-full w-[min(92vw,24rem)] bg-white shadow-xl z-[10001] flex flex-col outline-none"
        >
          <div className="flex items-start justify-between gap-4 p-5 border-b border-slate-200">
            <div>
              <DialogPrimitive.Title className="text-lg font-bold text-slate-900">
                {t.ui.contentsTitle}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-sm text-slate-600 mt-1">
                {t.ui.contentsHint}
              </DialogPrimitive.Description>
            </div>
            <DialogPrimitive.Close
              aria-label={t.ui.close}
              className="p-2 rounded-md hover:bg-slate-100 flex-shrink-0"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </DialogPrimitive.Close>
          </div>

          <div className="px-5 pt-4">
            <p className="text-sm font-medium text-slate-700">
              {fmt(t.ui.progressSummary, { done: doneCount, total })}
            </p>
            <div
              className="mt-2 h-2 rounded-full bg-slate-200 overflow-hidden"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={doneCount}
              aria-label={fmt(t.ui.progressSummary, { done: doneCount, total })}
            >
              <div className="h-full bg-green-600 transition-all" style={{ width: `${pct}%` }} />
            </div>
          </div>

          <ol className="flex-1 overflow-y-auto p-3 mt-2 space-y-1">
            <li>
              <button
                type="button"
                onClick={() => jump('home')}
                aria-current={activeSection === 'home' ? 'location' : undefined}
                className={cn(
                  'w-full text-left rounded-md px-3 py-2 text-sm flex items-center gap-3',
                  activeSection === 'home' ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-100 text-slate-800'
                )}
              >
                <span className="w-6 text-center text-xs text-slate-500" aria-hidden="true">
                  ◎
                </span>
                {t.ui.intro}
              </button>
            </li>
            {STEP_IDS.map((id, i) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => jump(id)}
                  aria-current={activeSection === id ? 'location' : undefined}
                  className={cn(
                    'w-full text-left rounded-md px-3 py-2 text-sm flex items-center gap-3',
                    activeSection === id ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-100 text-slate-800'
                  )}
                >
                  <span className="w-6 text-center font-semibold text-slate-500 flex-shrink-0">{i + 1}</span>
                  <span className="flex-1">{getStepTitle(t, id)}</span>
                  {isDone(id) && (
                    <>
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" aria-hidden="true" />
                      <span className="sr-only">{t.ui.markedDone}</span>
                    </>
                  )}
                </button>
              </li>
            ))}
          </ol>

          <div className="p-4 border-t border-slate-200">
            <button
              type="button"
              onClick={reset}
              disabled={doneCount === 0}
              className="text-sm text-slate-600 underline underline-offset-2 hover:text-slate-900 disabled:opacity-40 disabled:no-underline"
            >
              {t.ui.resetProgress}
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
