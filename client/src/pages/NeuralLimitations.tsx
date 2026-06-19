import React from 'react';
import HeroSection from './neuralNetworkLimitations/HeroSection';
import ComparisonSection from './neuralNetworkLimitations/ComparisonSection';
import DetailedExplanationSection from './neuralNetworkLimitations/DetailedExplanationSection';
import VisualMetaphorSection from './neuralNetworkLimitations/VisualMetaphorSection';
import ResourceComparisonSection from './neuralNetworkLimitations/ResourceComparisonSection';
import ConclusionSection from './neuralNetworkLimitations/ConclusionSection';
import NNFooter from './neuralNetworkLimitations/Footer';

export default function NeuralLimitations() {
  // Standalone responsive container to approximate provided design
  return (
    <main id="neural-network-limits" className="min-h-screen bg-white text-slate-900 pt-24 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ComparisonSection />
        <DetailedExplanationSection />
        <VisualMetaphorSection />
        <ResourceComparisonSection />
        <ConclusionSection />
        <NNFooter />
      </div>
    </main>
  );
}
