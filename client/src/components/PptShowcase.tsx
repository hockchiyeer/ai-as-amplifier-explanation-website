import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { fmt } from '@/lib/format';
import { getDeck, isDeckId, slideUrl } from '@/lib/slides';
import { isStandalone, pptxUrl } from '@/lib/assets';
import { useSlideViewer } from '@/components/SlideViewer';
import { StepBadge, StepFooter } from '@/components/StepKit';

/** Trigger a browser download; prefers the server's protected route, falls back to the public file. */
async function downloadDeck(filename: string) {
  const direct = () => {
    const link = document.createElement('a');
    link.href = pptxUrl(filename);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // The standalone build has no server: link straight to ./resources/data/pptx/<file>.
  if (isStandalone()) {
    direct();
    return;
  }
  try {
    const r = await fetch(`/pptx/${encodeURIComponent(filename)}/protected-download`, { method: 'GET' });
    if (r.ok) {
      const blob = await r.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      direct();
    }
  } catch {
    direct();
  }
}

export function PptShowcase() {
  const { t } = useLanguage();
  const viewer = useSlideViewer();
  const data = t.pptShowcase;

  return (
    <section id="ppt-showcase" aria-labelledby="ppt-showcase-title" className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <StepBadge id="ppt-showcase" />
          <h2 id="ppt-showcase-title" className="text-2xl font-bold text-slate-900 focus:outline-none">
            {data.title}
          </h2>
          <p className="text-sm text-slate-600 mt-2">{data.description}</p>
          <p className="text-xs text-slate-600 mt-1">{t.ui.slidesNote}</p>
        </div>

        <ul className="grid md:grid-cols-3 gap-6">
          {data.items.map(item => {
            const deckId = isDeckId(item.id) ? item.id : null;
            const deck = deckId ? getDeck(deckId) : null;
            const open = () => deckId && viewer.open({ deck: deckId, index: 0, title: item.title });
            return (
              <li key={item.id} className="border rounded-lg p-4 bg-slate-50 flex flex-col">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.caption}</p>

                {deckId && deck ? (
                  <button
                    type="button"
                    onClick={open}
                    aria-label={`${t.ui.openViewer}: ${item.title} (${fmt(t.ui.slideCount, { n: deck.count })})`}
                    className="mb-3 rounded overflow-hidden bg-white shadow-sm cursor-pointer block w-full focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <img
                      src={slideUrl(deckId, 1)}
                      alt={`${t.ui.slideWord} 1 — ${deck.slides[0]?.title ?? item.title}`}
                      width={960}
                      height={540}
                      loading="lazy"
                      className="w-full h-44 md:h-40 object-contain bg-slate-50"
                    />
                  </button>
                ) : (
                  <div className="w-full h-44 md:h-40 bg-slate-100 rounded mb-3 flex items-center justify-center text-sm text-slate-600">
                    {t.ui.noPreview}
                  </div>
                )}

                <div className="flex gap-2 items-center">
                  <Button variant="outline" size="sm" onClick={open}>
                    {data.preview}
                  </Button>
                  <Button size="sm" onClick={() => downloadDeck(item.filename)}>
                    {data.download}
                  </Button>
                  {deck && (
                    <span className="ml-auto text-xs text-slate-600">{fmt(t.ui.slideCount, { n: deck.count })}</span>
                  )}
                </div>

                <div className="mt-3">
                  <small className="text-xs text-slate-600 block w-full truncate" title={item.filename}>
                    {item.filename}
                  </small>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 text-center text-sm text-slate-600">
          <p>{data.conclusionText}</p>
          <p className="mt-1">
            {data.caseLabel}: {data.caseExample}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <StepFooter id="ppt-showcase" />
        </div>
      </div>
    </section>
  );
}

export default PptShowcase;
