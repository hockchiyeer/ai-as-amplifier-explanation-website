import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EffectCardProps {
  icon: string;
  title: string;
  description: string;
  keyPoint: string;
  index: number;
}

export function EffectCard({ icon, title, description, keyPoint, index }: EffectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'w-full text-left transition-all duration-300 ease-out',
          'border border-slate-200 rounded-lg p-6',
          'hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100',
          'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2',
          isExpanded ? 'bg-blue-50 border-blue-300' : 'bg-white hover:bg-slate-50'
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{icon}</span>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="text-sm text-slate-600 line-clamp-2">{description}</p>
          </div>
          <ChevronDown
            className={cn(
              'w-5 h-5 text-slate-600 transition-transform duration-300 flex-shrink-0 mt-1',
              isExpanded && 'rotate-180'
            )}
          />
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-3 animate-slide-in-down">
            <p className="text-sm text-slate-900 leading-relaxed">{description}</p>
            <div className="bg-blue-50 border border-blue-200 rounded p-3">
              <p className="text-sm font-medium text-blue-700">{keyPoint}</p>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}
