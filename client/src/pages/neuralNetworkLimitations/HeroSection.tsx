import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSectionContent } from '@/lib/i18nHelpers';
import { heroPlaceholder } from './heroPlaceholder';

export default function HeroSection() {
  const { t } = useLanguage();
  const topHero = t?.hero;
  const content = getSectionContent(t, 'neuralLimitations', { hero: { heading: topHero?.mainHeading || 'Neural Network Limitations', lead: topHero?.subheading || '' } });
  const [heroImg, setHeroImg] = React.useState('/neural-assets/neural-diagram.svg');
  const [loaded, setLoaded] = React.useState(false);
  const heroSrcSet = '/neural-assets/neural-diagram.png 1x, /neural-assets/neural-diagram@2x.png 2x, /neural-assets/neural-diagram@3x.png 3x';

  React.useEffect(() => {
    fetch('/neural-assets/original/manifest.json').then(r => {
      if (!r.ok) throw new Error('no manifest');
      return r.json();
    }).then((m: any) => {
      if (m && m.hero) setHeroImg(`/neural-assets/original/${m.hero}`);
    }).catch(() => {
      // ignore and use default
    });
  }, []);

  return (
    <section aria-labelledby="nn-hero-heading" className="hero-section relative overflow-hidden">
      {/* subtle decorative background (kept for visual fidelity) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden>
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#ffffffe6" />
              <stop offset="100%" stopColor="#f0f0f5e6" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)" />
        </svg>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hero-content max-w-2xl text-center md:text-left">
            <h2 id="nn-hero-heading" className="hero-title font-extrabold mb-4 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[var(--human-color)] to-[var(--machine-color)] bg-clip-text text-transparent">{content.hero.heading}</span>
            </h2>
            <p className="hero-subtitle text-lg md:text-xl text-zinc-700 leading-relaxed mb-6 max-w-2xl">{content.hero.lead}</p>

            <div className="hero-toggle-container mb-12">
              <div className="flex items-center justify-center md:justify-start">
                <button
                  className="hero-cta inline-flex items-center rounded-lg bg-[var(--mode-accent,#4a6fa5)] text-white px-5 py-3 text-base font-semibold shadow-md hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--mode-accent,#4a6fa5)]"
                  onClick={() => (window.location.href = '/neural-network-limits')}
                >
                  Read the full analysis
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg bg-white ring-1 ring-zinc-100">
              <div className="relative w-full hero-visualization h-[300px] md:h-[300px]">
                {/* placeholder blur layer */}
                <img src={heroPlaceholder} alt="placeholder" aria-hidden className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100 blur-sm'}`} />

                <picture>
                  <source srcSet={heroSrcSet} type="image/png" />
                  <img
                    src={heroImg}
                    alt={content.hero.heading + ' diagram'}
                    className={`w-full h-full object-contain block transition-transform duration-700 ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
