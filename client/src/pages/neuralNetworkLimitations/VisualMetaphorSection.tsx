import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSectionContent } from '@/lib/i18nHelpers';

export default function VisualMetaphorSection() {
  const { t } = useLanguage();
  const [chart, setChart] = React.useState('/neural-assets/comparison-chart.svg');
  const [loaded, setLoaded] = React.useState(false);
  const content = getSectionContent(t, 'neuralLimitations', { sections: { visualMetaphor: { title: 'A Visual Metaphor', text: '' } } });

  React.useEffect(() => {
    fetch('/neural-assets/original/manifest.json').then(r => {
      if (!r.ok) throw new Error('no manifest');
      return r.json();
    }).then((m: any) => {
      if (m && m.chart) setChart(`/neural-assets/original/${m.chart}`);
    }).catch(() => {});
  }, []);

  return (
    <section
      aria-labelledby="visual-metaphor-title"
      className="py-12 md:py-20 bg-slate-50"
    >
      <div className="container">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3
              id="visual-metaphor-title"
              className="text-2xl md:text-3xl font-semibold mb-4 animate-fade-in-up"
              style={{ animationDelay: '0s' }}
            >
              {content.sections.visualMetaphor.title}
            </h3>

            <p
              id="visual-metaphor-desc"
              className="text-slate-700 mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.06s' }}
            >
              {content.sections.visualMetaphor.text}
            </p>

            <figure className="bg-white rounded-lg shadow-sm p-6 w-full md:w-3/4 animate-flip1 perspective-1000" aria-hidden={loaded ? 'false' : 'true'}>
              <div className="page-front will-change-transform transform-origin-left">
                {!loaded && (
                  <div
                    className="w-full aspect-video bg-gradient-to-r from-slate-100 to-slate-50 rounded-md flex items-center justify-center text-slate-300"
                    aria-hidden="true"
                  >
                    <span className="sr-only">Loading diagram</span>
                    <svg
                      className="h-8 w-8 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v4m0 8v4M4 12h4m8 0h4" />
                    </svg>
                  </div>
                )}

                <img
                  src={chart}
                  alt={content.sections.visualMetaphor.title}
                  aria-describedby="visual-metaphor-desc"
                  className={`w-full max-w-xl rounded transition-opacity duration-500 ${loaded ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setLoaded(true)}
                />
                <figcaption className="sr-only">{content.sections.visualMetaphor.title}</figcaption>
              </div>
            </figure>
          </div>

          <aside className="md:col-span-1 animate-slide-in-down" style={{ animationDelay: '0.08s' }}>
            <div className="p-6 bg-white rounded-lg shadow" role="article" aria-labelledby="why-this-matters">
              <h4 id="why-this-matters" className="font-semibold text-slate-900 mb-3">Why this matters</h4>
              <p className="text-slate-700">Neural nets are excellent at filling in believable details but lack the causal "seams" that humans use to reason about why something happens.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
