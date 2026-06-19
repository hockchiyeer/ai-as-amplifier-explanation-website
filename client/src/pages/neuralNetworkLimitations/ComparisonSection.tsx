import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSectionContent } from '@/lib/i18nHelpers';

export default function ComparisonSection() {
  const { t } = useLanguage();
  const content = getSectionContent(t, 'neuralLimitations', { sections: { comparison: { title: 'Comparison: Neural Models vs. Humans', points: [] } } });
  const points = content.sections.comparison.points || [];
  const [diagram, setDiagram] = React.useState('/neural-assets/neural-diagram.svg');

  React.useEffect(() => {
    fetch('/neural-assets/original/manifest.json').then(r => {
      if (!r.ok) throw new Error('no manifest');
      return r.json();
    }).then((m: any) => {
      if (m && m.diagram) setDiagram(`/neural-assets/original/${m.diagram}`);
    }).catch(() => {});
  }, []);

  return (
    <section className="comparison-section py-20 md:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-container">
          <h2 className="section-title text-2xl md:text-3xl font-bold text-center mb-12">{content.sections.comparison.title}</h2>

          <div className="comparison-container flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="comparison-side human-side flex-1 p-6 rounded-xl bg-white shadow transition-all">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-[var(--human-color)]">Human learning</h3>

              <div className="comparison-visual h-48 mb-6 flex items-center justify-center">
                {/* simplified book flip visual */}
                <div className="book-visual relative w-48 h-36 perspective-1000">
                  <div className="page page-1 absolute w-44 h-28 bg-zinc-50 border border-zinc-200 rounded p-3 transform-origin-left animate-flip1"></div>
                  <div className="page page-2 absolute w-44 h-28 bg-zinc-50 border border-zinc-200 rounded p-3 transform-origin-left animate-flip2"></div>
                  <div className="page page-3 absolute w-44 h-28 bg-zinc-50 border border-zinc-200 rounded p-3 transform-origin-left animate-flip3"></div>
                </div>
              </div>

              <ul className="comparison-points list-none p-0 text-zinc-700">
                {points.slice(0, Math.ceil(points.length / 2)).map((p: string, i: number) => (
                  <li key={i} className="mb-4 pl-6 relative">
                    <span className="absolute left-0 text-2xl leading-none text-[var(--highlight-color)]">•</span>
                    <span className="block font-semibold">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="comparison-divider flex items-center justify-center text-lg font-bold text-zinc-900">VS</div>

            <div className="comparison-side machine-side flex-1 p-6 rounded-xl bg-white shadow transition-all">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-[var(--machine-color)]">Machine learning</h3>

              <div className="comparison-visual h-48 mb-6 flex items-center justify-center">
                {/* simplified dataset / network visual */}
                <div className="dataset-visual w-48 h-36 rounded-lg border-2 border-[var(--machine-color)] p-2 relative overflow-hidden">
                  <div className="data-item absolute w-4 h-4 bg-[var(--machine-color)] rounded animate-process1" style={{ top: '20px', left: '20px' }} />
                  <div className="data-item absolute w-4 h-4 bg-[var(--machine-color)] rounded animate-process2" style={{ top: '20px', right: '20px' }} />
                  <div className="data-item absolute w-4 h-4 bg-[var(--machine-color)] rounded animate-process3" style={{ top: '60px', left: '50px' }} />
                </div>
              </div>

              <ul className="comparison-points list-none p-0 text-zinc-700">
                {points.slice(Math.ceil(points.length / 2)).map((p: string, i: number) => (
                  <li key={i} className="mb-4 pl-6 relative">
                    <span className="absolute left-0 text-2xl leading-none text-[var(--highlight-color)]">•</span>
                    <span className="block font-semibold">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
