import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/contexts/ProgressContext';
import { Button } from '@/components/ui/button';
import { fmt } from '@/lib/format';
import { goToSection } from '@/lib/scroll';
import { DECK_LANG, SLIDE_REFS, getDeck, slideUrl } from '@/lib/slides';
import { STEP_IDS, getStepTitle, stepNumber } from '@/lib/steps';
import { useSlideViewer } from '@/components/SlideViewer';

/** Small "Step 3 of 16" pill shown above a section title. */
export function StepBadge({ id }: { id: string }) {
  const { t } = useLanguage();
  const { isDone } = useProgress();
  const n = stepNumber(id);
  if (!n) return null;
  const done = isDone(id);
  return (
    <p className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-700 mb-3">
      <span>{fmt(t.ui.stepOf, { n, total: STEP_IDS.length })}</span>
      {done && (
        <>
          <Check className="w-3.5 h-3.5 text-green-600" aria-hidden="true" />
          <span className="sr-only">{t.ui.markedDone}</span>
        </>
      )}
    </p>
  );
}

/** Screenshots (slides) that illustrate this step. Each opens the shared slide viewer. */
export function SlideRefs({ id }: { id: string }) {
  const { t } = useLanguage();
  const viewer = useSlideViewer();
  const refs = SLIDE_REFS[id];
  if (!refs || refs.length === 0) return null;
  const deck = getDeck('amplifier');
  const deckTitle = t.pptShowcase.items[0]?.title ?? '';
  return (
    <div className="mt-10 max-w-3xl mx-auto">
      <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-3 text-center">
        {t.ui.slideRefs}
      </h3>
      <ul className="flex flex-wrap justify-center gap-4">
        {refs.map(n => {
          const info = deck.slides[n - 1];
          return (
            <li key={n} className="w-44 sm:w-52">
              <button
                type="button"
                onClick={() => viewer.open({ deck: 'amplifier', index: n - 1, title: deckTitle })}
                aria-label={fmt(t.ui.viewSlide, { n, title: info?.title ?? '' })}
                className="group block w-full text-left rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400 transition"
              >
                <img
                  src={slideUrl('amplifier', n)}
                  alt=""
                  loading="lazy"
                  width={960}
                  height={540}
                  className="w-full aspect-video object-cover bg-slate-50"
                />
                <span className="block px-2 py-1.5 text-xs text-slate-700">
                  <span className="font-semibold text-blue-700">
                    {t.ui.slideWord} {n}
                  </span>
                  <span className="block truncate" lang={DECK_LANG.amplifier}>
                    {info?.title}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Previous / Mark done / Next controls at the end of a step. */
export function StepFooter({ id }: { id: string }) {
  const { t } = useLanguage();
  const { isDone, toggle } = useProgress();
  const n = stepNumber(id);
  if (!n) return null;
  const prevId = n === 1 ? 'home' : STEP_IDS[n - 2];
  const nextId = n === STEP_IDS.length ? null : STEP_IDS[n];
  const done = isDone(id);
  return (
    <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
      <Button variant="outline" size="sm" onClick={() => goToSection(prevId)} className="gap-1">
        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        <span>
          <span className="font-semibold">{t.ui.previous}</span>
          <span className="hidden sm:inline text-slate-600">: {getStepTitle(t, prevId)}</span>
        </span>
      </Button>

      <button
        type="button"
        aria-pressed={done}
        onClick={() => toggle(id)}
        className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
          done
            ? 'bg-green-50 border-green-300 text-green-800'
            : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
        }`}
      >
        <span
          aria-hidden="true"
          className={`w-4 h-4 rounded border flex items-center justify-center ${
            done ? 'bg-green-600 border-green-600 text-white' : 'border-slate-400'
          }`}
        >
          {done && <Check className="w-3 h-3" />}
        </span>
        {done ? t.ui.markedDone : t.ui.markDone}
      </button>

      {nextId ? (
        <Button size="sm" onClick={() => goToSection(nextId)} className="gap-1">
          <span>
            <span className="font-semibold">{t.ui.next}</span>
            <span className="hidden sm:inline">: {getStepTitle(t, nextId)}</span>
          </span>
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </Button>
      ) : (
        <Button size="sm" variant="outline" onClick={() => goToSection('home')}>
          {t.ui.backToTop}
        </Button>
      )}
    </div>
  );
}

/** Convenience: screenshots + step controls, appended to the end of each section. */
export function StepExtras({ id }: { id: string }) {
  return (
    <>
      <SlideRefs id={id} />
      <StepFooter id={id} />
    </>
  );
}
