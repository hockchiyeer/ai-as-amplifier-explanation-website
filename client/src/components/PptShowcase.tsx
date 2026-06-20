import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSectionContent } from '@/lib/i18nHelpers';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
export function PptShowcase() {
  const { t } = useLanguage();
  const data = getSectionContent(t, 'pptShowcase', { title: '', description: '', items: [], preview: 'Preview', download: 'Download' });

  const SLIDE_COUNTS: Record<string, number> = {
    'AI_in_Software_Test_Automation_ByErHockChiye.pptx': 25,
    'AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides.pptx': 35,
    'AI政治策略课程_完整版.pptx': 21
  };
  const [imagesMap, setImagesMap] = useState<Record<string, string[]>>({});
  const [modal, setModal] = useState<{
    images: string[];
    index: number;
    filename: string;
    title?: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const prefetchedUrlsRef = useRef<Set<string>>(new Set());
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const staticMap: Record<string, string[]> = {};
    data.items.forEach((item: any) => {
      const count = SLIDE_COUNTS[item.filename] || 0;
      if (count > 0) {
        const folder = item.filename.replace('.pptx', '');
        staticMap[item.filename] = Array.from({ length: count }, (_, i) =>
          `./resources/data/pptx_images/${folder}/Slide${i + 1}.PNG`
        );
      }
    });
    setImagesMap(staticMap);
  }, [data.items]);

  // keyboard navigation when modal is open
  useEffect(() => {
    if (!modal) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') return setModal(null);
      if (e.key === 'ArrowLeft') {
        setModal(m => m ? { ...m, index: (m.index - 1 + m.images.length) % m.images.length } : m);
      }
      if (e.key === 'ArrowRight') {
        setModal(m => m ? { ...m, index: (m.index + 1) % m.images.length } : m);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal]);

  // Prefetch adjacent images for smoother navigation
  useEffect(() => {
    if (!modal) return;
    const { images, index } = modal;
    const toPrefetch: string[] = [];
    if (images.length <= 1) return;
    const prev = (index - 1 + images.length) % images.length;
    const next = (index + 1) % images.length;
    // prefetch current, prev and next
    [prev, next].forEach(i => {
      const url = images[i];
      if (!url) return;
      toPrefetch.push(url);
    });

    const imgs: HTMLImageElement[] = [];
    toPrefetch.forEach(u => {
      try {
        const img = new Image();
        img.src = u;
        imgs.push(img);
      } catch (e) {
        // ignore
      }
    });

    return () => {
      // release references
      imgs.forEach(i => { i.src = ''; });
    };
  }, [modal?.index, modal?.images]);

  // Prefetch N slides ahead/behind with concurrency limit
  useEffect(() => {
    if (!modal) return;

    const PREFETCH_AHEAD = 3; // configurable: how many slides ahead/behind to prefetch
    const CONCURRENCY = 2; // configurable: max parallel image loads

    const { images, index } = modal;
    if (!images || images.length <= 1) return;

    // track created Image objects so we can cleanup
    const created: HTMLImageElement[] = [];

    // set of URLs already prefetched in this component lifetime
    const prefetched = prefetchedUrlsRef.current;

    // gather target indices (next 1..PREFETCH_AHEAD and prev 1..PREFETCH_AHEAD)
    const targets: string[] = [];
    for (let i = 1; i <= PREFETCH_AHEAD; i++) {
      const nxt = (index + i) % images.length;
      const prv = (index - i + images.length) % images.length;
      targets.push(images[nxt]);
      targets.push(images[prv]);
    }

    // filter out already prefetched or invalid
    const toLoad = targets.filter(u => !!u && !prefetched.has(u));
    if (toLoad.length === 0) return;

    let cancelled = false;

    const loadImage = (url: string) => new Promise<void>((resolve) => {
      if (cancelled) return resolve();
      try {
        const img = new Image();
        created.push(img);
        img.onload = () => {
          prefetched.add(url);
          resolve();
        };
        img.onerror = () => {
          prefetched.add(url); // mark attempted so we don't keep retrying
          resolve();
        };
        img.src = url;
      } catch (e) {
        prefetched.add(url);
        resolve();
      }
    });

    // simple concurrency-limited runner
    const runAll = async () => {
      const queue = toLoad.slice();
      const workers: Promise<void>[] = [];
      const startNext = async () => {
        if (cancelled) return;
        const url = queue.shift();
        if (!url) return;
        await loadImage(url);
        await startNext();
      };
      for (let i = 0; i < Math.min(CONCURRENCY, toLoad.length); i++) {
        workers.push(startNext());
      }
      await Promise.all(workers);
    };

    runAll().catch(() => { /* swallow */ });

    return () => {
      cancelled = true;
      created.forEach(img => { try { img.src = ''; } catch { } });
    };
  }, [modal?.index, modal?.images]);

  // manage loading state for the current modal image
  useEffect(() => {
    if (!modal) return;
    setLoading(true);
    const img = new Image();
    img.src = modal.images[modal.index];
    const onLoad = () => setLoading(false);
    const onErr = () => setLoading(false);
    img.addEventListener('load', onLoad);
    img.addEventListener('error', onErr);
    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onErr);
    };
  }, [modal?.index, modal?.images]);

  return (
    <section id="ppt-showcase" className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">{data.title}</h2>
          <p className="text-sm text-slate-600 mt-2">{data.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.items.map((item: any) => {
            const imgs = imagesMap[item.filename] ?? [];
            const thumb = imgs[0] ?? null;
            return (
              <div key={item.id} className="border rounded-lg p-4 bg-slate-50 flex flex-col">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.caption}</p>

                {thumb ? (
                  <div className="mb-3 rounded overflow-hidden bg-white shadow-sm cursor-pointer" onClick={() => setModal({ images: imgs, index: 0, filename: item.filename, title: item.title })}>
                    <img src={thumb} alt={item.title} className="w-full h-44 md:h-40 object-contain bg-slate-50" />
                  </div>
                ) : (
                  <div className="w-full h-44 md:h-40 bg-slate-100 rounded mb-3 flex items-center justify-center text-sm text-slate-500">No preview</div>
                )}

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (imgs && imgs.length > 0) {
                        setModal({ images: imgs, index: 0, filename: item.filename, title: item.title });
                      } else {
                        window.open(`./resources/data/pptx/${item.filename}`, '_blank');
                      }
                    }}
                  >
                    {data.preview}
                  </Button>

                  <Button
                    size="sm"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = `./resources/data/pptx/${item.filename}`;
                      link.download = item.filename;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    {data.download}
                  </Button>
                </div>

                <div className="mt-3">
                  <small className="text-xs text-slate-500 block w-full truncate" title={item.filename}>{item.filename}</small>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>{data.conclusionText}</p>
          <p className="mt-1">{data.caseLabel} : {data.caseExample}</p>
        </div>

        {modal && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            onClick={() => setModal(null)}
          >
            <div
              className="relative max-w-[96%] max-h-[92%] w-full flex items-center justify-center"
              onClick={e => e.stopPropagation()}
              onTouchStart={(e) => { touchStartX.current = e.touches?.[0]?.clientX ?? null; }}
              onTouchEnd={(e) => {
                const endX = e.changedTouches?.[0]?.clientX ?? null;
                if (touchStartX.current != null && endX != null) {
                  const dx = endX - touchStartX.current;
                  if (Math.abs(dx) > 40) {
                    if (dx > 0) {
                      // swipe right -> prev
                      setModal(m => m ? { ...m, index: (m.index - 1 + m.images.length) % m.images.length } : m);
                    } else {
                      // swipe left -> next
                      setModal(m => m ? { ...m, index: (m.index + 1) % m.images.length } : m);
                    }
                  }
                }
                touchStartX.current = null;
              }}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 z-50 transition-colors"
                onClick={() => setModal(null)}
                aria-label="close"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Prev button */}
              <button
                className="absolute left-2 md:left-4 bg-white/80 hover:bg-white text-slate-800 rounded-full p-1 md:p-2 z-20"
                onClick={() => setModal(m => m ? { ...m, index: (m.index - 1 + m.images.length) % m.images.length } : m)}
                aria-label="previous"
              >
                ◀
              </button>

              {/* Image */}
              <div className="flex-1 flex items-center justify-center relative">
                <img src={modal.images[modal.index]} alt={modal.title ?? 'slide'} className="max-h-[85vh] max-w-full object-contain shadow-lg rounded bg-white" />

                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 rounded">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </div>

              {/* Next button */}
              <button
                className="absolute right-2 md:right-4 bg-white/80 hover:bg-white text-slate-800 rounded-full p-1 md:p-2 z-20"
                onClick={() => setModal(m => m ? { ...m, index: (m.index + 1) % m.images.length } : m)}
                aria-label="next"
              >
                ▶
              </button>

              {/* Footer: index and title */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded">
                {modal.title ? <span className="font-medium mr-2">{modal.title}</span> : null}
                <span>{modal.index + 1}/{modal.images.length}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PptShowcase;
