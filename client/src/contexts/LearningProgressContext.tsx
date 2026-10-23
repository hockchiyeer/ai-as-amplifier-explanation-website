import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ModuleStepInfo {
  id: string;
  stepNumber: number;
  slideImage: string;
  slideTitle?: string;
}

export const TUTORIAL_STEPS: ModuleStepInfo[] = [
  { id: 'three-effects', stepNumber: 1, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide3.PNG', slideTitle: 'Slide 3: Faster, Cheaper, More Efficient' },
  { id: 'mirror-principle', stepNumber: 2, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide10.PNG', slideTitle: 'Slide 10: Three Scenarios (Smart, Mediocre, Defective)' },
  { id: 'ai-paradigms', stepNumber: 3, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide17.PNG', slideTitle: 'Slide 17: Two AI Paradigms (Generator vs Executor)' },
  { id: 'case-studies', stepNumber: 4, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide13.PNG', slideTitle: 'Slide 13: Case Studies & Failure Traps' },
  { id: 'use-cases', stepNumber: 5, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide18.PNG', slideTitle: 'Slide 18: Business Functions & Value Drivers' },
  { id: 'prompting-guide', stepNumber: 6, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide26.PNG', slideTitle: 'Slide 26: Strategic Prompting Guide' },
  { id: 'vibe-coding', stepNumber: 7, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide29.PNG', slideTitle: 'Slide 29: Vibe Coding & Tool Rankings' },
  { id: 'cross-model-validation', stepNumber: 8, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide23.PNG', slideTitle: 'Slide 23: Cross-Model Validation with NotebookLM' },
  { id: 'strategic-insights', stepNumber: 9, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide32.PNG', slideTitle: 'Slide 32: The Critical Strategic Question' },
  { id: 'ai-red-teaming', stepNumber: 10, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide24.PNG', slideTitle: 'Slide 24: AI Red Teaming & Competitor Simulation' },
  { id: 'production-observations', stepNumber: 11, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide27.PNG', slideTitle: 'Slide 27: 4 Production Lessons' },
  { id: 'subtract-principle', stepNumber: 12, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide33.PNG', slideTitle: 'Slide 33: The Subtract Principle' },
  { id: 'ai-moats', stepNumber: 13, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide34.PNG', slideTitle: 'Slide 34: 12-Month Compounding Roadmap' },
  { id: 'key-takeaways', stepNumber: 14, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide33.PNG', slideTitle: 'Slide 33: Key Takeaways' },
  { id: 'ppt-showcase', stepNumber: 15, slideImage: '/pptx-images/AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides/Slide1.PNG', slideTitle: 'Slide 1: Authentic Presentation Slide Decks' },
];

interface LearningProgressContextType {
  completedSteps: Record<string, boolean>;
  isCompleted: (sectionId: string) => boolean;
  toggleComplete: (sectionId: string) => void;
  resetProgress: () => void;
  totalSteps: number;
  completedCount: number;
  progressPercent: number;
  nextIncompleteId: string;
  activeSlide: { image: string; title?: string } | null;
  openSlide: (image: string, title?: string) => void;
  closeSlide: () => void;
}

const LearningProgressContext = createContext<LearningProgressContextType | undefined>(undefined);

export function LearningProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [activeSlide, setActiveSlide] = useState<{ image: string; title?: string } | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ai_tutorial_progress');
      if (saved) {
        setCompletedSteps(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleComplete = (sectionId: string) => {
    setCompletedSteps((prev) => {
      const next = { ...prev, [sectionId]: !prev[sectionId] };
      try {
        localStorage.setItem('ai_tutorial_progress', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const resetProgress = () => {
    setCompletedSteps({});
    try {
      localStorage.removeItem('ai_tutorial_progress');
    } catch {
      // ignore
    }
  };

  const isCompleted = (sectionId: string) => !!completedSteps[sectionId];

  const totalSteps = TUTORIAL_STEPS.length;
  const completedCount = TUTORIAL_STEPS.filter((s) => completedSteps[s.id]).length;
  const progressPercent = Math.round((completedCount / totalSteps) * 100);

  const nextIncompleteStep = TUTORIAL_STEPS.find((s) => !completedSteps[s.id]);
  const nextIncompleteId = nextIncompleteStep ? nextIncompleteStep.id : TUTORIAL_STEPS[0].id;

  const openSlide = (image: string, title?: string) => {
    setActiveSlide({ image, title });
  };

  const closeSlide = () => {
    setActiveSlide(null);
  };

  return (
    <LearningProgressContext.Provider
      value={{
        completedSteps,
        isCompleted,
        toggleComplete,
        resetProgress,
        totalSteps,
        completedCount,
        progressPercent,
        nextIncompleteId,
        activeSlide,
        openSlide,
        closeSlide,
      }}
    >
      {children}
    </LearningProgressContext.Provider>
  );
}

const defaultFallback: LearningProgressContextType = {
  completedSteps: {},
  isCompleted: () => false,
  toggleComplete: () => {},
  resetProgress: () => {},
  totalSteps: TUTORIAL_STEPS.length,
  completedCount: 0,
  progressPercent: 0,
  nextIncompleteId: TUTORIAL_STEPS[0].id,
  activeSlide: null,
  openSlide: () => {},
  closeSlide: () => {},
};

export function useLearningProgress() {
  const context = useContext(LearningProgressContext);
  return context || defaultFallback;
}
