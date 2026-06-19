import React from 'react';

export default function NeuralMockPreview() {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Neural Mock Preview</h2>
        <iframe src="/neural-mock/neural-learning-comparison.html" title="Neural Mock" style={{ width: '100%', height: '80vh', border: '1px solid #e5e7eb' }} />
      </div>
    </div>
  );
}
