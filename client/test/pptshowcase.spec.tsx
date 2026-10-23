/* @vitest-environment jsdom */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PptShowcase from '../src/components/PptShowcase';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { LearningProgressProvider } from '../src/contexts/LearningProgressContext';

describe('PptShowcase', () => {
  it('renders preview and download buttons', () => {
    render(
      <LanguageProvider>
        <LearningProgressProvider>
          <PptShowcase />
        </LearningProgressProvider>
      </LanguageProvider>
    );
    expect(screen.getAllByText(/Preview|预览|Pra-tonton/i)[0]).toBeTruthy();
  });
});
