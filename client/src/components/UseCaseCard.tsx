interface UseCaseCardProps {
  title: string;
  cases: string[];
  index: number;
}

export function UseCaseCard({ title, cases, index }: UseCaseCardProps) {
  return (
    <div
      className="h-full animate-slide-in-up"
      style={{
        animationDelay: `${0.05 * index}s`,
      }}
    >
      <div className="border border-slate-200 rounded-lg p-6 bg-white hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 h-full hover:border-blue-400 group">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <ul className="space-y-3">
          {cases.map((useCase, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <span className="text-blue-600 font-bold text-lg leading-none mt-0.5 flex-shrink-0">
                ·
              </span>
              <span className="text-sm text-slate-900 leading-relaxed">{useCase}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
