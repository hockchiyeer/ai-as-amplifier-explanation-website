import fs from 'fs';
import { i18n } from './client/src/lib/i18n';

// Helper to get data-i18n tags
function bi(keyPath: string) {
  return `<span data-i18n="${keyPath}"></span>`;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI as an Amplifier, Multiplier, and Compounder</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
  
  <!-- Content Data -->
  <script src="content.js"></script>

  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom Configuration -->
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
          },
          colors: {
            slate: {
              50: '#f8fafc',
              100: '#f1f5f9',
              200: '#e2e8f0',
              600: '#475569',
              700: '#334155',
              800: '#1e293b',
              900: '#0f172a',
            },
            blue: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              600: '#2563eb',
              700: '#1d4ed8',
            }
          }
        }
      }
    }
  </script>

  <!-- Custom Styles processed by Tailwind CDN -->
  <style type="text/tailwindcss">
` + fs.readFileSync('./client/src/index.css', 'utf-8').replace('@import "tailwindcss";', '').replace(/@import url[^;]+;/, '') + `
  </style>
  <style>
    /* Additional Vanilla JS classes */
    .reveal-up {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease-out;
    }
    .reveal-up.active {
      opacity: 1;
      transform: translateY(0);
    }
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    html {
      scroll-behavior: smooth;
    }
    
    /* Editor UI Styles */
    #editor-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(255, 255, 255, 0.95);
      z-index: 1000;
      overflow-y: auto;
      padding: 2rem;
      display: none;
    }
    #editor-overlay.active {
      display: block;
    }
    .editor-container {
      max-w: 1200px;
      margin: 0 auto;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    .editor-header {
      padding: 1.5rem;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      background: white;
      z-index: 10;
      border-radius: 0.5rem 0.5rem 0 0;
    }
    .editor-content {
      padding: 1.5rem;
    }
    .editor-field {
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px dashed #e2e8f0;
    }
    .editor-field:last-child {
      border-bottom: none;
    }
    .editor-field-label {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #334155;
      font-family: monospace;
      font-size: 0.875rem;
    }
    .editor-inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .editor-input-wrapper {
      display: flex;
      flex-direction: column;
    }
    .editor-input-wrapper label {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: #64748b;
      margin-bottom: 0.25rem;
    }
    .editor-input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #cbd5e1;
      border-radius: 0.25rem;
      font-family: inherit;
      font-size: 0.875rem;
    }
    textarea.editor-input {
      min-height: 80px;
      resize: vertical;
    }
  </style>
</head>
<body class="font-sans text-slate-900 bg-slate-50 transition-colors duration-300">

  <!-- Navigation -->
  <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="flex items-center justify-between h-16">
        <div class="font-serif font-bold text-xl text-slate-900 cursor-pointer" onclick="window.scrollTo(0,0)">AI Amplifier</div>
        
        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-1 overflow-x-auto no-scrollbar py-2">
          <a href="#home" class="nav-link px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">` + bi('nav.home') + `</a>
          <a href="#three-effects" class="nav-link px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">` + bi('nav.threeEffects') + `</a>
          <a href="#mirror-principle" class="nav-link px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">` + bi('nav.mirrorPrinciple') + `</a>
          <a href="#ai-paradigms" class="nav-link px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">` + bi('nav.aiParadigms') + `</a>
          <a href="#case-studies" class="nav-link px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">` + bi('nav.caseStudies') + `</a>
          <a href="#use-cases" class="nav-link px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">` + bi('nav.useCases') + `</a>
          <a href="#takeaways" class="nav-link px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">` + bi('nav.keyTakeaways') + `</a>
          
          <button id="lang-toggle" class="ml-4 px-3 py-1.5 border border-slate-200 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors">
            <span class="lang-en">中文</span>
            <span class="lang-zh hidden">English</span>
          </button>
          
          <button id="edit-mode-btn" class="ml-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 cursor-pointer transition-colors">
            ✏️ Edit Content
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-blue-50 to-slate-50">
    <div class="max-w-3xl mx-auto px-4 text-center space-y-6">
      <div class="reveal-up">
        <h1 class="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">` + bi('hero.mainHeading') + `</h1>
      </div>
      <div class="reveal-up" style="transition-delay: 100ms">
        <p class="text-xl md:text-2xl text-blue-600 font-semibold">` + bi('hero.subheading') + `</p>
      </div>
      <div class="reveal-up" style="transition-delay: 200ms">
        <p class="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">` + bi('hero.description') + `</p>
      </div>
      <div class="reveal-up" style="transition-delay: 300ms">
        <a href="#three-effects" class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800 transition-colors">
          ` + bi('hero.cta') + `
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- Three Effects Section -->
  <section id="three-effects" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-12 reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('threeEffects.title') + `</h2>
        <p class="text-lg text-slate-600">` + bi('threeEffects.subtitle') + `</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6">
        ` + ['amplifier', 'multiplier', 'compounder'].map((effect, idx) => 
        '<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1 reveal-up" style="transition-delay: ' + (100 * idx) + 'ms">' +
          '<div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4">' +
            bi('threeEffects.' + effect + '.icon') +
          '</div>' +
          '<h3 class="text-xl font-bold text-slate-900 mb-3">' + bi('threeEffects.' + effect + '.title') + '</h3>' +
          '<p class="text-sm text-slate-600 leading-relaxed mb-6">' + bi('threeEffects.' + effect + '.description') + '</p>' +
          '<div class="pt-4 border-t border-slate-200 mt-auto">' +
            '<p class="text-xs font-semibold text-blue-600 uppercase tracking-wide">Key Point</p>' +
            '<p class="text-sm text-slate-900 mt-1 font-medium">' + bi('threeEffects.' + effect + '.keyPoint') + '</p>' +
          '</div>' +
        '</div>'
        ).join('') + `
      </div>
    </div>
  </section>

  <!-- Mirror Principle Section -->
  <section id="mirror-principle" class="py-16 md:py-24 bg-slate-50">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-12 reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('mirrorPrinciple.title') + `</h2>
        <p class="text-lg text-slate-600 mb-4">` + bi('mirrorPrinciple.subtitle') + `</p>
        <p class="text-slate-600 max-w-3xl mx-auto">` + bi('mirrorPrinciple.description') + `</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        ` + ['smart', 'mediocre', 'defective'].map((scenario, idx) => {
          const colors = ['green', 'yellow', 'red'];
          const color = colors[idx];
          return '<div class="bg-white border-l-4 border-' + color + '-500 shadow-sm rounded-r-lg p-6 space-y-4 hover:shadow-md transition-shadow reveal-up" style="transition-delay: ' + (100 * idx) + 'ms">' +
            '<div class="flex items-center gap-2">' +
              '<span class="text-2xl">' + bi('mirrorPrinciple.scenarios.' + scenario + '.emoji') + '</span>' +
              '<div>' +
                '<h3 class="font-semibold text-slate-900">' + bi('mirrorPrinciple.scenarios.' + scenario + '.title') + '</h3>' +
                '<p class="text-xs text-slate-600">' + bi('mirrorPrinciple.scenarios.' + scenario + '.label') + '</p>' +
              '</div>' +
            '</div>' +
            '<div class="space-y-2 text-sm bg-slate-50 p-4 rounded-md">' +
              '<div>' +
                '<p class="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Input</p>' +
                '<p class="text-slate-900">' + bi('mirrorPrinciple.scenarios.' + scenario + '.input') + '</p>' +
              '</div>' +
              '<div class="border-t border-slate-200 pt-2 mt-2">' +
                '<p class="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Output</p>' +
                '<p class="text-slate-900 font-medium">' + bi('mirrorPrinciple.scenarios.' + scenario + '.output') + '</p>' +
              '</div>' +
            '</div>' +
          '</div>';
        }).join('') + `
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center reveal-up shadow-sm">
        <p class="text-lg font-semibold text-blue-700">` + bi('mirrorPrinciple.rule') + `</p>
      </div>
    </div>
  </section>

  <!-- AI Paradigms Section -->
  <section id="ai-paradigms" class="py-16 md:py-24 bg-white border-y border-slate-200">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-12 reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('aiParadigms.title') + `</h2>
        <p class="text-lg text-slate-600">` + bi('aiParadigms.subtitle') + `</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        ` + ['paradigm1', 'paradigm2'].map((paradigm, idx) => 
        '<div class="bg-slate-50 rounded-xl p-8 border border-slate-200 reveal-up" style="transition-delay: ' + (100 * idx) + 'ms">' +
          '<div class="mb-6">' +
            '<h3 class="text-2xl font-bold text-slate-900 mb-2">' + bi('aiParadigms.' + paradigm + '.title') + '</h3>' +
            '<p class="text-sm font-medium text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-100">' +
              bi('aiParadigms.' + paradigm + '.subtitle') +
            '</p>' +
          '</div>' +
          '<div class="space-y-4 mb-6">' +
            '<p class="text-sm font-semibold text-slate-500 uppercase tracking-wide">Best For:</p>' +
            '<ul class="space-y-2">' +
              Array.from({length: 4}).map((_, i) => 
                '<li class="flex items-start gap-2 text-slate-700 text-sm">' +
                  '<svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>' +
                  '<span>' + bi('aiParadigms.' + paradigm + '.bestFor.' + i) + '</span>' +
                '</li>'
              ).join('') +
            '</ul>' +
          '</div>' +
          '<div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">' +
            '<p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Prompting Tip</p>' +
            '<p class="text-sm font-medium text-slate-900">' + bi('aiParadigms.' + paradigm + '.promptingTip') + '</p>' +
          '</div>' +
        '</div>'
        ).join('') + `
      </div>
    </div>
  </section>

  <!-- Case Studies Section -->
  <section id="case-studies" class="py-16 md:py-24 bg-slate-900 text-slate-50">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-16 reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-white mb-4">` + bi('caseStudies.title') + `</h2>
        <p class="text-lg text-slate-400">` + bi('caseStudies.subtitle') + `</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        ` + ['case1', 'case2'].map((c, idx) => 
        '<div class="bg-slate-800 rounded-xl border border-slate-700 p-8 reveal-up" style="transition-delay: ' + (100 * idx) + 'ms">' +
          '<h3 class="text-xl font-bold text-white mb-6 pb-4 border-b border-slate-700">' + bi('caseStudies.' + c + '.title') + '</h3>' +
          '<div class="space-y-6">' +
            '<div>' +
              '<p class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Scenario</p>' +
              '<p class="text-sm text-slate-300 leading-relaxed">' + bi('caseStudies.' + c + '.scenario') + '</p>' +
            '</div>' +
            '<div class="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">' +
              '<p class="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">Outcome</p>' +
              '<p class="text-sm text-slate-300 leading-relaxed">' + bi('caseStudies.' + c + '.outcome') + '</p>' +
            '</div>' +
            '<div class="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">' +
              '<p class="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Lesson</p>' +
              '<p class="text-sm text-blue-100 font-medium leading-relaxed">' + bi('caseStudies.' + c + '.lesson') + '</p>' +
            '</div>' +
          '</div>' +
        '</div>'
        ).join('') + `
      </div>
    </div>
  </section>

  <!-- Use Cases Section -->
  <section id="use-cases" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-12 reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('useCases.title') + `</h2>
        <p class="text-lg text-slate-600">` + bi('useCases.subtitle') + `</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        ` + ['sales', 'marketing', 'operations', 'product', 'qa', 'competitiveIntelligence'].map((uc, idx) => 
        '<div class="border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all group reveal-up" style="transition-delay: ' + (50 * (idx % 3)) + 'ms">' +
          '<h3 class="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">' + bi('useCases.' + uc + '.title') + '</h3>' +
          '<ul class="space-y-3">' +
            Array.from({length: 4}).map((_, i) => 
              '<li class="flex items-start gap-3 text-sm text-slate-600">' +
                '<span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>' +
                '<span>' + bi('useCases.' + uc + '.cases.' + i) + '</span>' +
              '</li>'
            ).join('') +
          '</ul>' +
        '</div>'
        ).join('') + `
      </div>
    </div>
  </section>

  <!-- Vibe Coding Section -->
  <section id="vibe-coding" class="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-12 reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('vibeCoding.title') + `</h2>
        <p class="text-lg text-slate-600 mb-4">` + bi('vibeCoding.subtitle') + `</p>
        <p class="text-slate-600 max-w-3xl mx-auto">` + bi('vibeCoding.description') + `</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        ` + ['bugGenie', 'agileMaturity'].map((tool, idx) => 
        '<div class="bg-white rounded-xl p-8 border border-slate-200 reveal-up shadow-sm" style="transition-delay: ' + (100 * idx) + 'ms">' +
          '<h3 class="text-xl font-bold text-slate-900 mb-2">' + bi('vibeCoding.tools.' + tool + '.name') + '</h3>' +
          '<p class="text-sm font-medium text-blue-600 mb-4">' + bi('vibeCoding.tools.' + tool + '.subtitle') + '</p>' +
          '<p class="text-sm text-slate-600 mb-6">' + bi('vibeCoding.tools.' + tool + '.description') + '</p>' +
          '<ul class="space-y-2">' +
            Array.from({length: 4}).map((_, i) => 
              '<li class="flex items-start gap-2 text-slate-700 text-sm">' +
                '<span class="text-blue-500 mt-0.5">•</span>' +
                '<span>' + bi('vibeCoding.tools.' + tool + '.features.' + i) + '</span>' +
              '</li>'
            ).join('') +
          '</ul>' +
        '</div>'
        ).join('') + `
      </div>
      <div class="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto text-center border border-blue-100 reveal-up">
        <h3 class="text-xl font-bold text-slate-900 mb-2">` + bi('vibeCoding.toolRankings.title') + `</h3>
        <p class="text-sm text-slate-600 mb-6">` + bi('vibeCoding.toolRankings.subtitle') + `</p>
        <div class="space-y-3">
          ` + Array.from({length: 5}).map((_, i) => 
          '<div class="flex items-center justify-between bg-white p-3 rounded border border-blue-100">' +
            '<div class="flex items-center gap-4">' +
              '<span class="font-bold text-slate-400">#' + (i+1) + '</span>' +
              '<span class="font-medium text-slate-900">' + bi('vibeCoding.toolRankings.tools.' + i + '.name') + '</span>' +
            '</div>' +
            '<span class="text-blue-600 font-bold">' + bi('vibeCoding.toolRankings.tools.' + i + '.score') + '</span>' +
          '</div>'
          ).join('') + `
        </div>
      </div>
    </div>
  </section>

  <!-- Cross-Model Validation Section -->
  <section id="validation" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-12 reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('crossModelValidation.title') + `</h2>
        <p class="text-lg text-slate-600 mb-4">` + bi('crossModelValidation.subtitle') + `</p>
        <p class="text-slate-600 max-w-3xl mx-auto">` + bi('crossModelValidation.description') + `</p>
      </div>
      <div class="grid md:grid-cols-4 gap-6">
        ` + Array.from({length: 4}).map((_, i) => 
        '<div class="bg-slate-50 p-6 rounded-lg border border-slate-200 reveal-up" style="transition-delay: ' + (100 * i) + 'ms">' +
          '<div class="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center font-bold mb-4">' + (i+1) + '</div>' +
          '<h3 class="font-bold text-slate-900 mb-2">' + bi('crossModelValidation.steps.' + i + '.title') + '</h3>' +
          '<p class="text-sm text-slate-600">' + bi('crossModelValidation.steps.' + i + '.description') + '</p>' +
        '</div>'
        ).join('') + `
      </div>
    </div>
  </section>

  <!-- AI Red Teaming Section -->
  <section id="red-teaming" class="py-16 md:py-24 bg-slate-900 text-white">
    <div class="container mx-auto px-4 max-w-4xl text-center">
      <div class="reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-rose-500 mb-4">` + bi('aiRedTeaming.title') + `</h2>
        <p class="text-lg text-slate-300 mb-4">` + bi('aiRedTeaming.subtitle') + `</p>
        <p class="text-slate-400 mb-12">` + bi('aiRedTeaming.description') + `</p>
        <div class="space-y-4 text-left">
          ` + Array.from({length: 4}).map((_, i) => 
          '<div class="bg-slate-800 p-4 rounded-lg border border-slate-700">' +
            '<p class="text-slate-200">' + bi('aiRedTeaming.questions.' + i) + '</p>' +
          '</div>'
          ).join('') + `
        </div>
      </div>
    </div>
  </section>

  <!-- Production Observations Section -->
  <section id="observations" class="py-16 md:py-24 bg-slate-50">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-12 reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('productionObservations.title') + `</h2>
        <p class="text-lg text-slate-600">` + bi('productionObservations.subtitle') + `</p>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        ` + Array.from({length: 4}).map((_, i) => 
        '<div class="p-6 border border-slate-200 rounded-xl bg-white reveal-up shadow-sm" style="transition-delay: ' + (100 * i) + 'ms">' +
          '<h3 class="font-bold text-slate-900 mb-2">' + bi('productionObservations.observations.' + i + '.title') + '</h3>' +
          '<p class="text-slate-600 text-sm">' + bi('productionObservations.observations.' + i + '.description') + '</p>' +
        '</div>'
        ).join('') + `
      </div>
    </div>
  </section>

  <!-- Subtract Principle Section -->
  <section id="subtract-principle" class="py-16 md:py-24 bg-white border-y border-slate-200">
    <div class="container mx-auto px-4 max-w-4xl text-center">
      <div class="reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('subtractPrinciple.title') + `</h2>
        <p class="text-lg text-slate-600 mb-4">` + bi('subtractPrinciple.subtitle') + `</p>
        <p class="text-slate-600 mb-12">` + bi('subtractPrinciple.description') + `</p>
        <div class="text-left bg-slate-50 p-8 rounded-xl border border-slate-200">
          <p class="font-bold text-slate-900 mb-4">` + bi('subtractPrinciple.corePrinciplesLabel') + `</p>
          <ul class="space-y-3">
            ` + Array.from({length: 5}).map((_, i) => 
            '<li class="flex items-start gap-3">' +
              '<span class="text-rose-500 mt-1">-</span>' +
              '<span class="text-slate-700">' + bi('subtractPrinciple.principles.' + i) + '</span>' +
            '</li>'
            ).join('') + `
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- AI Moats Section -->
  <section id="ai-moats" class="py-16 md:py-24 bg-slate-50">
    <div class="container mx-auto px-4 max-w-5xl">
      <div class="text-center mb-12 reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('aiMoats.title') + `</h2>
        <p class="text-lg text-slate-600 mb-4">` + bi('aiMoats.subtitle') + `</p>
        <p class="text-slate-600 mb-12 max-w-3xl mx-auto">` + bi('aiMoats.description') + `</p>
      </div>
      <div class="space-y-6">
        ` + Array.from({length: 4}).map((_, i) => 
        '<div class="flex gap-6 p-6 border border-slate-200 rounded-xl bg-white shadow-sm reveal-up" style="transition-delay: ' + (100 * i) + 'ms">' +
          '<div class="w-24 shrink-0 font-bold text-blue-600 text-sm">' + bi('aiMoats.timeline.' + i + '.period') + '</div>' +
          '<div>' +
            '<h3 class="font-bold text-slate-900 mb-2">' + bi('aiMoats.timeline.' + i + '.title') + '</h3>' +
            '<p class="text-slate-600 text-sm">' + bi('aiMoats.timeline.' + i + '.description') + '</p>' +
          '</div>' +
        '</div>'
        ).join('') + `
      </div>
    </div>
  </section>

  <!-- PPT Showcase Section -->
  <section id="ppt-showcase" class="py-16 md:py-24 bg-white border-y border-slate-200">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-12 reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('pptShowcase.title') + `</h2>
        <p class="text-lg text-slate-600 mb-4">` + bi('pptShowcase.subtitle') + `</p>
        <p class="text-slate-600 max-w-3xl mx-auto">` + bi('pptShowcase.description') + `</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        ` + Array.from({length: 3}).map((_, i) => 
        '<div class="bg-slate-50 rounded-xl p-6 border border-slate-200 reveal-up" style="transition-delay: ' + (100 * i) + 'ms">' +
          '<div class="w-12 h-12 bg-rose-100 text-rose-600 rounded flex items-center justify-center mb-4"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v14h16V5H4zm8 11l-4-5h3V8h2v3h3l-4 5z"></path></svg></div>' +
          '<h3 class="font-bold text-slate-900 mb-2">' + bi('pptShowcase.items.' + i + '.title') + '</h3>' +
          '<p class="text-sm text-slate-600 mb-6">' + bi('pptShowcase.items.' + i + '.caption') + '</p>' +
          '<button class="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors">' + bi('pptShowcase.download') + '</button>' +
        '</div>'
        ).join('') + `
      </div>
    </div>
  </section>

  <!-- Neural Limitations Section -->
  <section id="neural-limitations" class="py-16 md:py-24 bg-slate-50">
    <div class="container mx-auto px-4 max-w-4xl text-center">
      <div class="reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('neuralLimitations.title') + `</h2>
        <p class="text-lg text-slate-600 mb-8">` + bi('neuralLimitations.subtitle') + `</p>
        <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-left">
          <h3 class="font-bold text-xl text-slate-900 mb-4">` + bi('neuralLimitations.sections.visualMetaphor.title') + `</h3>
          <p class="text-slate-700 leading-relaxed mb-6">` + bi('neuralLimitations.sections.visualMetaphor.text') + `</p>
          <h3 class="font-bold text-xl text-slate-900 mb-4">` + bi('neuralLimitations.sections.resourceComparison.title') + `</h3>
          <ul class="space-y-2 mb-6">
            ` + Array.from({length: 3}).map((_, i) => 
            '<li class="flex items-start gap-2">' +
              '<span class="text-blue-500 mt-1">•</span>' +
              '<span class="text-slate-700">' + bi('neuralLimitations.sections.resourceComparison.bullets.' + i) + '</span>' +
            '</li>'
            ).join('') + `
          </ul>
          <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 class="font-bold text-blue-900 mb-2">` + bi('neuralLimitations.sections.conclusion.title') + `</h4>
            <p class="text-blue-800 text-sm">` + bi('neuralLimitations.sections.conclusion.text') + `</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- AI Journey Section -->
  <section id="ai-journey" class="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
    <div class="container mx-auto px-4 max-w-4xl text-center">
      <div class="reveal-up">
        <h2 class="text-4xl font-serif font-bold mb-4">` + bi('aiJourney.title') + `</h2>
        <p class="text-xl text-blue-400 mb-12">` + bi('aiJourney.subtitle') + `</p>
        <div class="flex flex-wrap justify-center gap-8 mb-16">
          ` + Array.from({length: 3}).map((_, i) => 
          '<div class="flex flex-col items-center">' +
            '<div class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold mb-4">' + bi('aiJourney.steps.' + i + '.step') + '</div>' +
            '<h3 class="text-xl font-bold">' + bi('aiJourney.steps.' + i + '.title') + '</h3>' +
            '<p class="text-slate-400">' + bi('aiJourney.steps.' + i + '.description') + '</p>' +
          '</div>'
          ).join('') + `
        </div>
        <button class="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors mb-12">` + bi('aiJourney.cta') + `</button>
        <div class="text-slate-400 font-serif italic text-lg max-w-2xl mx-auto mb-8">` + bi('aiJourney.tagline') + `</div>
        <p class="text-sm text-slate-500 font-medium">` + bi('aiJourney.author') + `</p>
      </div>
    </div>
  </section>

  <!-- Takeaways Section -->
  <section id="takeaways" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 max-w-5xl">
      <div class="text-center mb-16 reveal-up">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">` + bi('keyTakeaways.title') + `</h2>
        <p class="text-lg text-slate-600">` + bi('keyTakeaways.subtitle') + `</p>
      </div>

      <div class="space-y-6">
        ` + Array.from({length: 5}).map((_, i) => 
        '<div class="flex gap-6 p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow bg-slate-50 reveal-up" style="transition-delay: ' + (100 * i) + 'ms">' +
          '<div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0 font-bold">' +
            bi('keyTakeaways.takeaways.' + i + '.icon') +
          '</div>' +
          '<div>' +
            '<h3 class="text-lg font-bold text-slate-900 mb-2">' + bi('keyTakeaways.takeaways.' + i + '.title') + '</h3>' +
            '<p class="text-slate-600 leading-relaxed">' + bi('keyTakeaways.takeaways.' + i + '.description') + '</p>' +
          '</div>' +
        '</div>'
        ).join('') + `
      </div>
    </div>
  </section>

  <!-- Footer Section -->
  <footer class="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="grid md:grid-cols-2 gap-12 mb-8">
        <div>
          <h3 class="text-white font-serif font-bold text-xl mb-4">` + bi('footer.aboutTitle') + `</h3>
          <p class="leading-relaxed mb-6">` + bi('footer.aboutText') + `</p>
        </div>
        <div class="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <p class="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">` + bi('footer.keyTakeaway') + `</p>
          <p class="text-white font-medium leading-relaxed">` + bi('footer.keyTakeawayText') + `</p>
        </div>
      </div>
      <div class="pt-8 border-t border-slate-800 text-center text-sm">
        <p>© 2026 AI Amplifier. Open Source Educational Content.</p>
      </div>
    </div>
  </footer>

  <!-- Editor Modal -->
  <div id="editor-overlay">
    <div class="editor-container">
      <div class="editor-header">
        <h2 class="text-xl font-bold text-slate-900">✏️ Edit Website Content</h2>
        <div class="flex gap-2">
          <button id="editor-cancel" class="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors">Cancel</button>
          <button id="editor-save" class="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md font-medium transition-colors">Download Changes</button>
        </div>
      </div>
      <div class="editor-content" id="editor-fields">
        <!-- Fields generated dynamically -->
      </div>
    </div>
  </div>

  <!-- Application Logic -->
  <script>
    // --- Modular Content Rendering System --- //
    
    // Helper to extract nested values
    function getNestedValue(obj, path) {
      return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    }
    
    // Function to render all data-i18n tags using window.APP_CONTENT
    function renderContent() {
      if (!window.APP_CONTENT) {
        console.error("APP_CONTENT not found. Make sure content.js is loaded.");
        return;
      }
      
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const enVal = getNestedValue(window.APP_CONTENT.en, key) || '';
        const zhVal = getNestedValue(window.APP_CONTENT.zh, key) || '';
        
        el.innerHTML = '<span class="lang-en">' + enVal + '</span><span class="lang-zh hidden">' + zhVal + '</span>';
      });
      
      // Re-apply language selection after rendering
      setLanguage(currentLang);
    }

    // --- Language Toggle Logic --- //
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('language') || 'en';
    
    function setLanguage(lang) {
      document.querySelectorAll('.lang-en').forEach(el => {
        if (lang === 'en') el.classList.remove('hidden');
        else el.classList.add('hidden');
      });
      document.querySelectorAll('.lang-zh').forEach(el => {
        if (lang === 'zh') el.classList.remove('hidden');
        else el.classList.add('hidden');
      });
      localStorage.setItem('language', lang);
      currentLang = lang;
    }

    // --- Editor UI System --- //
    const editorOverlay = document.getElementById('editor-overlay');
    const editorFieldsContainer = document.getElementById('editor-fields');
    let editedContent = {}; // To store cloned state during editing

    // Recursively build form fields
    function buildEditorFields(objEn, objZh, prefix = '', container) {
      for (const key in objEn) {
        const valEn = objEn[key];
        const valZh = objZh ? objZh[key] : '';
        const currentPath = prefix ? prefix + '.' + key : key;
        
        if (typeof valEn === 'object' && valEn !== null && !Array.isArray(valEn)) {
          buildEditorFields(valEn, valZh, currentPath, container);
        } else if (Array.isArray(valEn)) {
          // If it's an array of strings
          if (typeof valEn[0] === 'string') {
             for (let i = 0; i < valEn.length; i++) {
               createField(currentPath + '.' + i, valEn[i], valZh ? valZh[i] : '', container);
             }
          } else {
             // Array of objects
             for (let i = 0; i < valEn.length; i++) {
               buildEditorFields(valEn[i], valZh ? valZh[i] : null, currentPath + '.' + i, container);
             }
          }
        } else {
          // Primitive value
          createField(currentPath, valEn, valZh, container);
        }
      }
    }
    
    function createField(path, enVal, zhVal, container) {
      const fieldDiv = document.createElement('div');
      fieldDiv.className = 'editor-field';
      
      const labelDiv = document.createElement('div');
      labelDiv.className = 'editor-field-label';
      labelDiv.textContent = path;
      fieldDiv.appendChild(labelDiv);
      
      const inputsDiv = document.createElement('div');
      inputsDiv.className = 'editor-inputs';
      
      // Determine if it should be textarea based on length
      const isLong = String(enVal).length > 60 || String(zhVal).length > 60;
      const inputTag = isLong ? 'textarea' : 'input';
      
      // English input
      const wrapEn = document.createElement('div');
      wrapEn.className = 'editor-input-wrapper';
      wrapEn.innerHTML = '<label>English</label>';
      const inputEn = document.createElement(inputTag);
      inputEn.className = 'editor-input';
      if (!isLong) inputEn.type = 'text';
      inputEn.value = enVal;
      inputEn.setAttribute('data-path', 'en.' + path);
      wrapEn.appendChild(inputEn);
      inputsDiv.appendChild(wrapEn);
      
      // Chinese input
      const wrapZh = document.createElement('div');
      wrapZh.className = 'editor-input-wrapper';
      wrapZh.innerHTML = '<label>Chinese (\u4E2D\u6587)</label>';
      const inputZh = document.createElement(inputTag);
      inputZh.className = 'editor-input';
      if (!isLong) inputZh.type = 'text';
      inputZh.value = zhVal || '';
      inputZh.setAttribute('data-path', 'zh.' + path);
      wrapZh.appendChild(inputZh);
      inputsDiv.appendChild(wrapZh);
      
      fieldDiv.appendChild(inputsDiv);
      container.appendChild(fieldDiv);
      
      // Add event listeners to update state
      const updateState = (e) => {
         const fullPath = e.target.getAttribute('data-path');
         setNestedValue(editedContent, fullPath, e.target.value);
      };
      inputEn.addEventListener('input', updateState);
      inputZh.addEventListener('input', updateState);
    }
    
    // Helper to set nested values
    function setNestedValue(obj, path, value) {
      const parts = path.split('.');
      const last = parts.pop();
      let current = obj;
      for (const part of parts) {
        if (!current[part]) current[part] = isNaN(parts[parts.indexOf(part)+1]) ? {} : [];
        current = current[part];
      }
      current[last] = value;
    }

    function openEditor() {
      // Deep clone current content into editedContent
      editedContent = JSON.parse(JSON.stringify(window.APP_CONTENT));
      editorFieldsContainer.innerHTML = '';
      buildEditorFields(editedContent.en, editedContent.zh, '', editorFieldsContainer);
      editorOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // prevent background scroll
    }

    function closeEditor() {
      editorOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    function saveChanges() {
      // Serialize back to JS
      const jsCode = "window.APP_CONTENT = " + JSON.stringify(editedContent, null, 2) + ";";
      
      // Create a blob and trigger download
      const blob = new Blob([jsCode], { type: "text/javascript" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "content.js";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      // Apply immediately
      window.APP_CONTENT = editedContent;
      renderContent();
      closeEditor();
      
      alert("Updated content.js has been downloaded! Please replace your local content.js file with this new one.");
    }

    // --- Initialization & Event Listeners --- //
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Render initial content
      renderContent();
      
      // 2. Setup language toggle
      if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
          setLanguage(currentLang === 'en' ? 'zh' : 'en');
        });
      }
      
      // 3. Setup Editor buttons
      document.getElementById('edit-mode-btn').addEventListener('click', openEditor);
      document.getElementById('editor-cancel').addEventListener('click', closeEditor);
      document.getElementById('editor-save').addEventListener('click', saveChanges);

      // 4. Reveal on scroll
      const revealElements = document.querySelectorAll('.reveal-up');
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      revealElements.forEach(el => {
        revealObserver.observe(el);
      });

      // 5. Scroll spy navigation
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');

      window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 100;
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('text-blue-600', 'bg-blue-50');
          if (link.getAttribute('href') === '#' + current) {
            link.classList.add('text-blue-600', 'bg-blue-50');
          }
        });
      });
    });
  </script>
</body>
</html>`;

fs.writeFileSync('./index.html', html);
console.log('index.html generated successfully.');
