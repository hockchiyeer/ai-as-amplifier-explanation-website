import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NNFooter() {
  const { t } = useLanguage();
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 text-sm text-slate-600">
        <p>© 2026 AI Amplifier — Neural Network Limitations educational content</p>
      </div>
    </footer>
  );
}
