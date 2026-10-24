import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLearningProgress } from '@/contexts/LearningProgressContext';
import { Navigation } from '@/components/Navigation';
import { Section, SectionHeader } from '@/components/Section';
import { EffectCard } from '@/components/EffectCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { UseCaseCard } from '@/components/UseCaseCard';
import { Button } from '@/components/ui/button';
import PptShowcase from '@/components/PptShowcase';
import SlideLightboxModal from '@/components/SlideLightboxModal';
import LearningProgressMonitor from '@/components/LearningProgressMonitor';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const { totalSteps, completedCount, progressPercent, nextIncompleteId } = useLearningProgress();
  const [activeSection, setActiveSection] = useState('home');
  const ls = t.learningStatus;

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'three-effects',
        'mirror-principle',
        'ai-paradigms',
        'case-studies',
        'use-cases',
        'prompting-guide',
        'vibe-coding',
        'cross-model-validation',
        'strategic-insights',
        'ai-red-teaming',
        'production-observations',
        'subtract-principle',
        'ai-moats',
        'key-takeaways',
        'ppt-showcase',
        'ai-journey',
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} />

      {/* Hero Section */}
      <Section id="home" className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Tutorial Progress Pill */}
          <div className="animate-fade-in-up flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-semibold shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>{ls.badge}</span>
              <span className="text-blue-300">|</span>
              <span className="font-bold">
                {completedCount}/{totalSteps} {ls.completed} ({progressPercent}%)
              </span>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              {t.hero.mainHeading}
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold">{t.hero.subheading}</p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              onClick={() => handleScrollToSection(nextIncompleteId)}
              className="gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium cursor-pointer shadow-sm"
            >
              <span>
                {completedCount === 0
                  ? ls.startLearning
                  : completedCount === totalSteps
                  ? ls.understood
                  : `${ls.continueLearning} ${completedCount + 1}`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScrollToSection('three-effects')}
              className="gap-2 text-slate-700 border-slate-300 hover:bg-slate-50 cursor-pointer"
            >
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </Section>

      {/* Three Effects Section */}
      <Section id="three-effects" dark className="bg-slate-50">
        <SectionHeader
          title={t.threeEffects.title}
          subtitle={t.threeEffects.subtitle}
          stepNumber={1}
          sectionId="three-effects"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide3.PNG"
          slideTitle="Slide 3: Faster, Cheaper, More Efficient"
        />
        <div className="grid md:grid-cols-3 gap-6">
          <EffectCard
            icon={t.threeEffects.amplifier.icon}
            title={t.threeEffects.amplifier.title}
            description={t.threeEffects.amplifier.description}
            keyPoint={t.threeEffects.amplifier.keyPoint}
            index={0}
          />
          <EffectCard
            icon={t.threeEffects.multiplier.icon}
            title={t.threeEffects.multiplier.title}
            description={t.threeEffects.multiplier.description}
            keyPoint={t.threeEffects.multiplier.keyPoint}
            index={1}
          />
          <EffectCard
            icon={t.threeEffects.compounder.icon}
            title={t.threeEffects.compounder.title}
            description={t.threeEffects.compounder.description}
            keyPoint={t.threeEffects.compounder.keyPoint}
            index={2}
          />
        </div>
      </Section>

      {/* Mirror Principle Section */}
      <Section id="mirror-principle" className="bg-white">
        <SectionHeader
          title={t.mirrorPrinciple.title}
          subtitle={t.mirrorPrinciple.subtitle}
          description={t.mirrorPrinciple.description}
          stepNumber={2}
          sectionId="mirror-principle"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide10.PNG"
          slideTitle="Slide 10: Three Scenarios (Smart, Mediocre, Defective)"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              scenario: t.mirrorPrinciple.scenarios.smart,
              color: 'from-green-500/20 to-green-500/5',
              borderColor: 'border-green-500/30',
            },
            {
              scenario: t.mirrorPrinciple.scenarios.mediocre,
              color: 'from-yellow-500/20 to-yellow-500/5',
              borderColor: 'border-yellow-500/30',
            },
            {
              scenario: t.mirrorPrinciple.scenarios.defective,
              color: 'from-red-500/20 to-red-500/5',
              borderColor: 'border-red-500/30',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-b ${item.color} border ${item.borderColor} rounded-lg p-6 space-y-4 animate-fade-in-up hover:shadow-lg hover:scale-[1.01] transition-all duration-300`}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{item.scenario.emoji}</span>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.scenario.title}</h3>
                  <p className="text-xs text-slate-600">{item.scenario.label}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-semibold text-slate-600 uppercase tracking-wide text-xs mb-1">
                    {t.mirrorPrinciple.inputLabel}
                  </p>
                  <p className="text-slate-900">{item.scenario.input}</p>
                </div>
                <div className="border-t border-slate-200 pt-2">
                  <p className="font-semibold text-slate-600 uppercase tracking-wide text-xs mb-1">
                    {t.mirrorPrinciple.outputLabel}
                  </p>
                  <p className="text-slate-900">{item.scenario.output}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
          <p className="text-lg font-semibold text-blue-700">{t.mirrorPrinciple.rule}</p>
        </div>
      </Section>

      {/* Two AI Paradigms Section */}
      <Section id="ai-paradigms" dark className="bg-slate-50">
        <SectionHeader
          title={t.aiParadigms.title}
          subtitle={t.aiParadigms.subtitle}
          stepNumber={3}
          sectionId="ai-paradigms"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide17.PNG"
          slideTitle="Slide 17: Two AI Paradigms (Generator vs Executor)"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              paradigm: t.aiParadigms.paradigm1,
              index: 0,
            },
            {
              paradigm: t.aiParadigms.paradigm2,
              index: 1,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-lg p-6 bg-white hover:shadow-lg hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * item.index}s` }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.paradigm.title}</h3>
              {item.paradigm.tools && item.paradigm.tools.length > 0 ? (
                <div className="flex flex-wrap gap-2 text-sm text-blue-600 font-semibold mb-4 items-center">
                  {item.paradigm.tools.map((tool: any, toolIdx: number) => (
                    <span key={toolIdx} className="flex gap-2 items-center">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-600 underline font-semibold hover:text-violet-800 transition-colors"
                      >
                        {tool.name}
                      </a>
                      {toolIdx < item.paradigm.tools.length - 1 && <span className="text-blue-300">·</span>}
                    </span>
                  ))}
                </div>
              ) : (
                Boolean((item.paradigm as any).subtitle) && (
                  <p className="text-sm text-blue-600 font-semibold mb-4">{(item.paradigm as any).subtitle}</p>
                )
              )}

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-3">
                    {t.aiParadigms.bestForLabel}
                  </h4>
                  <ul className="space-y-2">
                    {item.paradigm.bestFor.map((use, useIdx) => (
                      <li key={useIdx} className="flex gap-2 items-start text-sm text-slate-900">
                        <span className="text-blue-600 font-bold mt-0.5">·</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                    {t.aiParadigms.promptingTipLabel}
                  </h4>
                  <p className="text-sm text-slate-900 italic">{item.paradigm.promptingTip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section id="case-studies" className="bg-white">
        <SectionHeader
          title={t.caseStudies.title}
          subtitle={t.caseStudies.subtitle}
          stepNumber={4}
          sectionId="case-studies"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide13.PNG"
          slideTitle="Slide 13: Case Studies & Failure Traps"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <CaseStudyCard
            title={t.caseStudies.case1.title}
            scenario={t.caseStudies.case1.scenario}
            outcome={t.caseStudies.case1.outcome}
            lesson={t.caseStudies.case1.lesson}
            scenarioLabel={t.caseStudies.scenarioLabel}
            outcomeLabel={t.caseStudies.outcomeLabel}
            lessonLabel={t.caseStudies.lessonLabel}
            index={0}
          />
          <CaseStudyCard
            title={t.caseStudies.case2.title}
            scenario={t.caseStudies.case2.scenario}
            outcome={t.caseStudies.case2.outcome}
            lesson={t.caseStudies.case2.lesson}
            scenarioLabel={t.caseStudies.scenarioLabel}
            outcomeLabel={t.caseStudies.outcomeLabel}
            lessonLabel={t.caseStudies.lessonLabel}
            index={1}
          />
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section id="use-cases" dark className="bg-slate-50">
        <SectionHeader
          title={t.useCases.title}
          subtitle={t.useCases.subtitle}
          stepNumber={5}
          sectionId="use-cases"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide18.PNG"
          slideTitle="Slide 18: Business Functions & Value Drivers"
        />

        <div className="grid md:grid-cols-3 gap-6">
          <UseCaseCard
            title={t.useCases.sales.title}
            cases={t.useCases.sales.cases}
            index={0}
          />
          <UseCaseCard
            title={t.useCases.marketing.title}
            cases={t.useCases.marketing.cases}
            index={1}
          />
          <UseCaseCard
            title={t.useCases.operations.title}
            cases={t.useCases.operations.cases}
            index={2}
          />
          <UseCaseCard
            title={t.useCases.product.title}
            cases={t.useCases.product.cases}
            index={3}
          />
          <UseCaseCard
            title={t.useCases.qa.title}
            cases={t.useCases.qa.cases}
            index={4}
          />
          <UseCaseCard
            title={t.useCases.competitiveIntelligence.title}
            cases={t.useCases.competitiveIntelligence.cases}
            index={5}
          />
        </div>
      </Section>

      {/* Prompting Guide Section */}
      <Section id="prompting-guide" className="bg-white">
        <SectionHeader
          title={t.promptingGuide.title}
          subtitle={t.promptingGuide.subtitle}
          description={t.promptingGuide.introduction}
          stepNumber={6}
          sectionId="prompting-guide"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide26.PNG"
          slideTitle="Slide 26: Strategic Prompting Guide"
        />

        <div className="space-y-6">
          {t.promptingGuide.examples.map((example, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: `${0.05 * idx}s` }}>
              {/* Correct Approach */}
              <div className="border border-green-300 bg-green-50 rounded-lg p-4 hover:border-green-400 hover:shadow-md transition-all duration-200">
                <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">
                  {t.promptingGuide.doLabel}
                </h4>
                <p className="text-sm text-slate-900 italic">{example.correct}</p>
              </div>

              {/* Incorrect Approach */}
              <div className="border border-red-300 bg-red-50 rounded-lg p-4 hover:border-red-400 hover:shadow-md transition-all duration-200">
                <h4 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">
                  {t.promptingGuide.dontLabel}
                </h4>
                <p className="text-sm text-slate-900 italic">{example.incorrect}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center hover:shadow-md hover:border-blue-300 transition-all duration-300">
          <p className="text-lg font-semibold text-blue-700">{t.promptingGuide.keyInsight}</p>
        </div>
      </Section>

      {/* Vibe Coding Section */}
      <Section id="vibe-coding" className="bg-white">
        <SectionHeader
          title={t.vibeCoding.title}
          subtitle={t.vibeCoding.subtitle}
          description={t.vibeCoding.description}
          stepNumber={7}
          sectionId="vibe-coding"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide29.PNG"
          slideTitle="Slide 29: Vibe Coding & Tool Rankings"
        />

        {/* Useful Tip Callout Banner with Original Mouse-Over Color Change and Shimmer Effect */}
        {t.vibeCoding.usefulTip && (
          <div className="max-w-4xl mx-auto -mt-6 mb-12 p-6 bg-yellow-200 hover:bg-blue-100 border border-yellow-300 hover:border-blue-200 transition-colors duration-300 rounded-xl shadow-md relative overflow-hidden group hover:shadow-lg">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent group-hover:animate-shimmer skew-x-12 pointer-events-none"></div>
            <p
              className="text-base md:text-lg text-slate-900 leading-relaxed relative z-10 font-medium"
              dangerouslySetInnerHTML={{ __html: t.vibeCoding.usefulTip }}
            />
          </div>
        )}

        {/* AI Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{t.vibeCoding.tools.title}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* BugGenie AI */}
            <div className="border border-slate-200 rounded-lg p-6 bg-white hover:shadow-lg hover:shadow-blue-100 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{t.vibeCoding.tools.bugGenie.name}</h4>
                <p
                  className="text-sm text-blue-600 font-semibold mb-3"
                  dangerouslySetInnerHTML={{ __html: t.vibeCoding.tools.bugGenie.subtitle }}
                />
                <p className="text-sm text-slate-600 mb-4">{t.vibeCoding.tools.bugGenie.description}</p>
                <ul className="space-y-2">
                  {t.vibeCoding.tools.bugGenie.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-700 flex items-start">
                      <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* BugGenie Links */}
              <div className="mt-5 space-y-2 text-sm border-t border-slate-100 pt-4">
                {t.vibeCoding.tools.bugGenie.githubLink && (
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-700">{t.vibeCoding.tools.bugGenie.githubLink.label}: </span>
                    <a
                      href={t.vibeCoding.tools.bugGenie.githubLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 underline font-semibold hover:text-violet-800 break-all transition-colors"
                    >
                      {t.vibeCoding.tools.bugGenie.githubLink.url.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
                {t.vibeCoding.tools.bugGenie.aiStudioLink && (
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-700">{t.vibeCoding.tools.bugGenie.aiStudioLink.label}: </span>
                    <a
                      href={t.vibeCoding.tools.bugGenie.aiStudioLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 underline font-semibold hover:text-violet-800 break-all transition-colors"
                    >
                      {t.vibeCoding.tools.bugGenie.aiStudioLink.url.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
                {t.vibeCoding.tools.bugGenie.canvasLink && (
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-700">{t.vibeCoding.tools.bugGenie.canvasLink.label}: </span>
                    <a
                      href={t.vibeCoding.tools.bugGenie.canvasLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 underline font-semibold hover:text-violet-800 break-all transition-colors"
                    >
                      {t.vibeCoding.tools.bugGenie.canvasLink.url.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Agile Maturity */}
            <div className="border border-slate-200 rounded-lg p-6 bg-white hover:shadow-lg hover:shadow-blue-100 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{t.vibeCoding.tools.agileMaturity.name}</h4>
                <p
                  className="text-sm text-blue-600 font-semibold mb-3"
                  dangerouslySetInnerHTML={{ __html: t.vibeCoding.tools.agileMaturity.subtitle }}
                />
                <p className="text-sm text-slate-600 mb-4">{t.vibeCoding.tools.agileMaturity.description}</p>
                <ul className="space-y-2">
                  {t.vibeCoding.tools.agileMaturity.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-700 flex items-start">
                      <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agile Maturity Links */}
              <div className="mt-5 space-y-2 text-sm border-t border-slate-100 pt-4">
                {t.vibeCoding.tools.agileMaturity.githubLink && (
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-700">{t.vibeCoding.tools.agileMaturity.githubLink.label}: </span>
                    <a
                      href={t.vibeCoding.tools.agileMaturity.githubLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 underline font-semibold hover:text-violet-800 break-all transition-colors"
                    >
                      {t.vibeCoding.tools.agileMaturity.githubLink.url.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
                {t.vibeCoding.tools.agileMaturity.appLink && (
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-700">{t.vibeCoding.tools.agileMaturity.appLink.label}: </span>
                    <a
                      href={t.vibeCoding.tools.agileMaturity.appLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 underline font-semibold hover:text-violet-800 break-all transition-colors"
                    >
                      {t.vibeCoding.tools.agileMaturity.appLink.url.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tool Rankings */}
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">{t.vibeCoding.toolRankings.title}</h3>
          <p className="text-sm text-slate-600 text-center mb-6">{t.vibeCoding.toolRankings.subtitle}</p>
          <div className="space-y-3">
            {t.vibeCoding.toolRankings.tools.map((tool: any, idx: number) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-blue-600 w-8 text-center">#{tool.rank}</span>
                  {tool.url ? (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-slate-900 underline text-violet-600 hover:text-violet-800 transition-colors"
                    >
                      {tool.name}
                    </a>
                  ) : (
                    <span className="font-medium text-slate-900">{tool.name}</span>
                  )}
                </div>
                <span className="text-lg font-bold text-blue-600">{tool.score}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Cross-Model Validation Section */}
      <Section id="cross-model-validation" className="bg-slate-50">
        <SectionHeader
          title={t.crossModelValidation?.title || 'Cross-Model Validation'}
          subtitle={t.crossModelValidation?.subtitle || 'Reducing hallucinations'}
          description={t.crossModelValidation?.description}
          stepNumber={8}
          sectionId="cross-model-validation"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide23.PNG"
          slideTitle="Slide 23: Cross-Model Validation with NotebookLM"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.crossModelValidation?.steps?.map((step: any, idx: number) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="text-3xl font-bold text-blue-200 mb-4">{idx + 1}</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
              <p
                className="text-sm text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Strategic Insights Section */}
      <Section id="strategic-insights" className="bg-blue-50">
        <SectionHeader
          title={t.strategicInsights.title}
          subtitle={t.strategicInsights.subtitle}
          stepNumber={9}
          sectionId="strategic-insights"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide32.PNG"
          slideTitle="Slide 32: The Critical Strategic Question"
        />

        <div className="bg-white rounded-lg border border-blue-200 p-8 mb-6 hover:shadow-lg hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300">
          <p className="text-lg text-slate-900 font-semibold mb-4 italic">"{t.strategicInsights.question}"</p>
          <p className="text-sm text-slate-600 leading-relaxed">{t.strategicInsights.insight}</p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-300">
          <p className="text-lg font-semibold">{t.strategicInsights.keyPoint}</p>
        </div>
      </Section>

      {/* AI Red Teaming Section */}
      <Section id="ai-red-teaming" className="bg-red-50/50">
        <SectionHeader
          title={t.aiRedTeaming?.title || 'AI Red Teaming'}
          subtitle={t.aiRedTeaming?.subtitle}
          description={t.aiRedTeaming?.description}
          stepNumber={10}
          sectionId="ai-red-teaming"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide24.PNG"
          slideTitle="Slide 24: AI Red Teaming & Competitor Simulation"
        />
        <div className="space-y-4 max-w-3xl mx-auto">
          {t.aiRedTeaming?.questions?.map((q: string, idx: number) => (
            <div
              key={idx}
              className="flex gap-4 items-start bg-white p-5 rounded-lg border border-red-100 shadow-sm hover:border-red-300 hover:shadow-md hover:bg-red-50/20 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <span className="text-red-500 font-bold text-xl flex-shrink-0">🔴</span>
              <p className="text-slate-800 font-medium">{q}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Production Observations Section */}
      <Section id="production-observations" className="bg-white">
        <SectionHeader
          title={t.productionObservations?.title || 'Observations'}
          subtitle={t.productionObservations?.subtitle}
          stepNumber={11}
          sectionId="production-observations"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide27.PNG"
          slideTitle="Slide 27: 4 Production Lessons"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {t.productionObservations?.observations?.map((obs: any, idx: number) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl p-6 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="text-blue-600 font-bold text-lg mb-2">0{idx + 1}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{obs.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{obs.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Subtract Principle Section */}
      <Section id="subtract-principle" className="bg-white">
        <SectionHeader
          title={t.subtractPrinciple.title}
          subtitle={t.subtractPrinciple.subtitle}
          description={t.subtractPrinciple.description}
          stepNumber={12}
          sectionId="subtract-principle"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide33.PNG"
          slideTitle="Slide 33: The Subtract Principle"
        />

        <div className="bg-red-50 border border-red-200 rounded-lg p-8 hover:border-red-300 hover:shadow-md transition-all duration-300">
          <h3 className="text-lg font-bold text-slate-900 mb-6">{t.subtractPrinciple.corePrinciplesLabel}</h3>
          <ul className="space-y-4">
            {t.subtractPrinciple.principles.map((principle, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-red-600 font-bold text-lg flex-shrink-0">−</span>
                <span className="text-slate-700">{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* AI Moats Section */}
      <Section id="ai-moats" className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <SectionHeader
          title={t.aiMoats?.title || 'Building Long-Term AI Moats'}
          subtitle={t.aiMoats?.subtitle}
          description={t.aiMoats?.description}
          stepNumber={13}
          sectionId="ai-moats"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide34.PNG"
          slideTitle="Slide 34: 12-Month Compounding Roadmap"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.aiMoats?.timeline?.map((item: any, idx: number) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur rounded-lg p-6 border border-blue-100 relative overflow-hidden group hover:shadow-md hover:border-blue-300 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:bg-blue-200 group-hover:scale-110 transition-all"></div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">{item.period}</h5>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Takeaways Section */}
      <Section id="key-takeaways" className="bg-slate-50">
        <SectionHeader
          title={t.keyTakeaways.title}
          subtitle={t.keyTakeaways.subtitle}
          stepNumber={14}
          sectionId="key-takeaways"
          slideImage="/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide33.PNG"
          slideTitle="Slide 33: Key Strategic Takeaways"
        />

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {t.keyTakeaways.takeaways.map((takeaway, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.05 * idx}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{takeaway.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{takeaway.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{takeaway.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Your AI Journey Section */}
      <PptShowcase />

      <Section id="ai-journey" className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.aiJourney.title}</h2>
          <p className="text-lg text-slate-300 mb-6">{t.aiJourney.subtitle}</p>
          <p className="text-xl font-semibold text-blue-300 italic max-w-3xl mx-auto">{t.aiJourney.tagline}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.aiJourney.steps.map((step, idx) => (
            <div key={idx} className="text-center p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors animate-fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
              <div className="text-4xl font-bold text-blue-400 mb-3">{step.step}</div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {t.aiJourney.cta}
          </Button>
          <p className="text-slate-400 text-sm mt-6">{t.aiJourney.author}</p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t.footer.aboutTitle}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{t.footer.aboutText}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t.footer.keyTakeaway}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{t.footer.keyTakeawayText}</p>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-xs text-slate-600">
            <p>© 2026 AI Amplifier. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Interactive Modal Lightbox for High-Res Slide Evidence Inspection */}
      <SlideLightboxModal />

      {/* Persistent Step-by-Step Self-Learning Status & Monitor UI */}
      <LearningProgressMonitor />
    </div>
  );
}
