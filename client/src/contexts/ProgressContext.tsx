import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { STEP_IDS } from '@/lib/steps';

const KEY = 'ai-amplifier-progress';

interface ProgressContextType {
  done: Set<string>;
  total: number;
  isDone: (id: string) => boolean;
  toggle: (id: string) => void;
  reset: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const ids = JSON.parse(raw) as string[];
        setDone(new Set(ids.filter(id => (STEP_IDS as readonly string[]).includes(id))));
      }
    } catch {
      /* ignore corrupt or blocked storage */
    }
  }, []);

  const persist = (next: Set<string>) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(Array.from(next)));
    } catch {
      /* ignore */
    }
  };

  const toggle = useCallback((id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      persist(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    const next = new Set<string>();
    persist(next);
    setDone(next);
  }, []);

  const value = useMemo<ProgressContextType>(
    () => ({ done, total: STEP_IDS.length, isDone: id => done.has(id), toggle, reset }),
    [done, toggle, reset]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within a ProgressProvider');
  return ctx;
}
