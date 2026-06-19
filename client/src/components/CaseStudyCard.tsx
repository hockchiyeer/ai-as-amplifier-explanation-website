interface CaseStudyCardProps {
  title: string;
  scenario: string;
  outcome: string;
  lesson: string;
  index: number;
}

export function CaseStudyCard({ title, scenario, outcome, lesson, index }: CaseStudyCardProps) {
  return (
    <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
      <div className="border border-slate-200 rounded-lg p-6 bg-white hover:shadow-lg hover:shadow-blue-100 transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">{title}</h3>

        <div className="space-y-4">
          {/* Scenario */}
          <div>
            <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
              Scenario
            </h4>
            <p className="text-sm text-slate-900 leading-relaxed">{scenario}</p>
          </div>

          {/* Outcome */}
          <div>
            <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
              Outcome
            </h4>
            <p className="text-sm text-slate-900 leading-relaxed">{outcome}</p>
          </div>

          {/* Lesson */}
          <div className="bg-red-50 border border-red-200 rounded p-3">
            <h4 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">
              Core Business Lesson
            </h4>
            <p className="text-sm text-red-600 leading-relaxed">{lesson}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
