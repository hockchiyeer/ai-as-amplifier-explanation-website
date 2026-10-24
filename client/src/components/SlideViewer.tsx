import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fmt } from '@/lib/format';
import { DECK_LANG, getDeck, slideUrl, type DeckId } from '@/lib/slides';

interface OpenArgs {
  deck: DeckId;
  index?: number; // 0-based
  title?: string;
}

const SlideViewerContext = createContext<{ open: (a: OpenArgs) => void } | undefined>(undefined);

export function useSlideViewer() {
  const ctx = useContext(SlideViewerContext);
  if (!ctx) throw new Error('useSlideViewer must be used within SlideViewerProvider');
  return ctx;
}

/**
 * One shared, accessible slide viewer (focus-trapped dialog, Esc to close, ←/→/Home/End to navigate,
 * swipe on touch, thumbnails, text alternative for every slide, retry when an image fails to load).
 */
export function SlideViewerProvider({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();
  const ui = t.ui;
  const [state, setState] = useState<{ deck: DeckId; index: number; title?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activeThumb = useRef<HTMLButtonElement | null>(null);

  const open = useCallback(({ deck, index = 0, title }: OpenArgs) => {
    setState({ deck, index, title });
  }, []);

  const count = state ? getDeck(state.deck).count : 0;

  const go = useCallback(
    (delta: number) => {
      setState(s => (s ? { ...s, index: (s.index + delta + count) % count } : s));
    },
    [count]
  );
  const goTo = (i: number) => setState(s => (s ? { ...s, index: i } : s));

  // Reset loading state whenever the visible slide changes
  useEffect(() => {
    if (!state) return;
    setLoading(true);
    setFailed(false);
  }, [state?.deck, state?.index, attempt]);

  // Prefetch neighbouring slides (±2) for smoother paging
  useEffect(() => {
    if (!state) return;
    const imgs: HTMLImageElement[] = [];
    for (const d of [-2, -1, 1, 2]) {
      const n = ((state.index + d + count) % count) + 1;
      const img = new Image();
      img.src = slideUrl(state.deck, n);
      imgs.push(img);
    }
    return () => imgs.forEach(i => (i.src = ''));
  }, [state?.deck, state?.index, count]);

  // Keep the active thumbnail in view
  useEffect(() => {
    activeThumb.current?.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [state?.index]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goTo(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goTo(count - 1);
    }
  };

  const deck = state ? getDeck(state.deck) : null;
  const slide = deck && state ? deck.slides[state.index] : null;
  const n = state ? state.index + 1 : 0;
  const alt = slide ? `${fmt(ui.slideOf, { n, total: count })}${slide.title ? ` — ${slide.title}` : ''}` : '';

  return (
    <SlideViewerContext.Provider value={{ open }}>
      {children}
      <DialogPrimitive.Root open={!!state} onOpenChange={o => !o && setState(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 bg-black/70 z-[10000]" />
          <DialogPrimitive.Content
            className="fixed inset-0 z-[10001] flex flex-col items-center justify-center px-2 md:px-4 py-3 outline-none"
            onKeyDown={onKeyDown}
            onPointerDownOutside={() => setState(null)}
            onTouchStart={e => {
              touchStartX.current = e.touches?.[0]?.clientX ?? null;
            }}
            onTouchEnd={e => {
              const endX = e.changedTouches?.[0]?.clientX ?? null;
              if (touchStartX.current != null && endX != null) {
                const dx = endX - touchStartX.current;
                if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
              }
              touchStartX.current = null;
            }}
          >
            <DialogPrimitive.Title className="sr-only">
              {state?.title ?? ''} — {alt}
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">{ui.slidesNote}</DialogPrimitive.Description>
            <div className="sr-only" aria-live="polite">
              {alt}
            </div>

            {state && deck && slide && (
              <>
                <DialogPrimitive.Close
                  className="absolute top-3 right-3 md:top-6 md:right-6 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 z-20 transition-colors"
                  aria-label={ui.closeViewer}
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                </DialogPrimitive.Close>

                <div className="relative w-full max-w-[96%] flex-1 min-h-0 flex items-center justify-center">
                  <button
                    type="button"
                    className="absolute left-0 md:left-2 bg-white/80 hover:bg-white text-slate-800 rounded-full w-10 h-10 flex items-center justify-center z-10"
                    onClick={() => go(-1)}
                    aria-label={ui.prevSlide}
                  >
                    <span aria-hidden="true">◀</span>
                  </button>

                  <div className="relative flex items-center justify-center max-h-full">
                    {failed ? (
                      <div
                        role="alert"
                        className="bg-white rounded p-8 text-center text-slate-700 text-sm space-y-3"
                      >
                        <p>{ui.loadFailed}</p>
                        <button
                          type="button"
                          className="px-3 py-1.5 rounded border border-slate-300 hover:bg-slate-100"
                          onClick={() => setAttempt(a => a + 1)}
                        >
                          {ui.retry}
                        </button>
                      </div>
                    ) : (
                      <img
                        key={`${state.deck}-${n}-${attempt}`}
                        src={`${slideUrl(state.deck, n)}${attempt ? `?r=${attempt}` : ''}`}
                        alt={alt}
                        width={960}
                        height={540}
                        onLoad={() => setLoading(false)}
                        onError={() => {
                          setLoading(false);
                          setFailed(true);
                        }}
                        className="max-h-[62vh] md:max-h-[68vh] w-auto max-w-full object-contain shadow-lg rounded bg-white"
                      />
                    )}
                    {loading && !failed && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 rounded">
                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    className="absolute right-0 md:right-2 bg-white/80 hover:bg-white text-slate-800 rounded-full w-10 h-10 flex items-center justify-center z-10"
                    onClick={() => go(1)}
                    aria-label={ui.nextSlide}
                  >
                    <span aria-hidden="true">▶</span>
                  </button>
                </div>

                <div className="mt-2 bg-black/50 text-white text-sm px-3 py-1 rounded">
                  {state.title ? <span className="font-medium mr-2">{state.title}</span> : null}
                  <span>
                    {n}/{count}
                  </span>
                </div>

                <div
                  className="mt-2 w-full max-w-[96%] overflow-x-auto flex gap-2 pb-1"
                  role="group"
                  aria-label={ui.thumbnails}
                >
                  {deck.slides.map((s, i) => (
                    <button
                      key={s.n}
                      type="button"
                      ref={i === state.index ? activeThumb : undefined}
                      onClick={() => goTo(i)}
                      aria-label={fmt(ui.viewSlide, { n: s.n, title: s.title })}
                      aria-current={i === state.index ? 'true' : undefined}
                      className={`flex-shrink-0 rounded overflow-hidden border-2 ${
                        i === state.index ? 'border-blue-400' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={slideUrl(state.deck, s.n)}
                        alt=""
                        loading="lazy"
                        width={96}
                        height={54}
                        className="w-24 h-[54px] object-cover bg-white"
                      />
                    </button>
                  ))}
                </div>

                <details className="mt-2 w-full max-w-[96%] bg-white/95 rounded text-sm text-slate-800">
                  <summary className="cursor-pointer px-3 py-2 font-medium">{ui.textVersion}</summary>
                  <div className="px-3 pb-3 max-h-[22vh] overflow-y-auto" lang={DECK_LANG[state.deck]}>
                    {slide.text.length > 0 ? (
                      <ul className="space-y-1 list-disc pl-5">
                        {slide.text.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{ui.noSlideText}</p>
                    )}
                  </div>
                </details>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </SlideViewerContext.Provider>
  );
}
