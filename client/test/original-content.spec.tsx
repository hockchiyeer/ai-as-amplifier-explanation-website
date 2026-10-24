// @vitest-environment jsdom
// Guards the tips, real-world examples and links that exist on the original EN / ZH pages
// ("AI as an Amplifier, Multiplier, and Compounder") so they cannot silently disappear again.
import React, { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import fs from 'node:fs';
import path from 'node:path';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import Home from '../src/pages/Home';
import { RichText, stripRichText } from '../src/components/RichText';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { ProgressProvider } from '../src/contexts/ProgressContext';
import { SlideViewerProvider } from '../src/components/SlideViewer';
import { TooltipProvider } from '../src/components/ui/tooltip';
import { i18n, LANGUAGES, type Language } from '../src/lib/i18n';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

let host: HTMLDivElement;
let root: Root;

beforeAll(() => {
  (Element.prototype as any).scrollIntoView = function () {};
  window.scrollTo = vi.fn() as any;
  (window as any).matchMedia ??= (q: string) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} });
  (globalThis as any).ResizeObserver ??= class { observe() {} unobserve() {} disconnect() {} };
  (window as any).requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(() => cb(0), 0);
});

async function mount(lang: Language) {
  host = document.createElement('div');
  document.body.appendChild(host);
  root = createRoot(host);
  await act(async () => {
    root.render(
      <LanguageProvider initialLanguage={lang}>
        <ProgressProvider>
          <SlideViewerProvider>
            <TooltipProvider>
              <Home />
            </TooltipProvider>
          </SlideViewerProvider>
        </ProgressProvider>
      </LanguageProvider>
    );
  });
}

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState(null, '', '/');
});
afterEach(async () => {
  await act(async () => root.unmount());
  host.remove();
  document.body.innerHTML = '';
});

/** Every external link on the original pages (same set in EN and ZH). */
const ORIGINAL_LINKS = [
  'https://chatgpt.com',
  'https://gemini.google.com',
  'https://www.deepseek.com',
  'https://claude.ai',
  'https://manus.im',
  'https://cursor.com',
  'https://gemini.google.com/canvas',
  'https://deepseek.com',
  'https://antigravity.google',
  'https://github.com/features/copilot',
  'https://openai.com/codex',
  'https://aistudio.google.com/apps',
  'https://github.com/hockchiyeer/ai-powered-auto-bug-ticket-logger',
  'https://aistudio.google.com/apps/ce12cbda-aa17-405d-9018-96a8ef249d29?showPreview=true&showAssistant=true',
  'https://gemini.google.com/share/5a9916e135f0',
  'https://github.com/hockchiyeer/google-ai-studio-generated-agile-maturity-assessment-app',
  'https://hockchiyeer.github.io/google-ai-studio-generated-agile-maturity-assessment-app',
  'https://cursor.com/agents',
  'https://notebooklm.google.com',
  'https://chat.qwen.ai',
];
const norm = (u: string) => u.replace(/\/(?=$|\?)/, '');

describe('original tips, examples and links are present in every language', () => {
  for (const lang of LANGUAGES) {
    it(`${lang}: the rendered page links to every tool/app/repo the original page links to`, async () => {
      await mount(lang);
      const hrefs = new Set(Array.from(document.querySelectorAll('a[href]')).map(a => norm(a.getAttribute('href')!)));
      const missing = ORIGINAL_LINKS.filter(u => !hrefs.has(norm(u)));
      expect(missing).toEqual([]);
    });

    it(`${lang}: external links open safely in a new tab`, async () => {
      await mount(lang);
      const external = Array.from(document.querySelectorAll<HTMLAnchorElement>('main a[href^="http"]'));
      expect(external.length).toBeGreaterThan(20);
      for (const a of external) {
        expect(a.target, a.href).toBe('_blank');
        expect(a.rel, a.href).toContain('noopener');
      }
    });

    it(`${lang}: shows the Vibe Coding "Useful Tip" callout`, async () => {
      await mount(lang);
      const note = document.querySelector('#vibe-coding [role="note"]');
      expect(note).not.toBeNull();
      expect(note!.querySelectorAll('a').length).toBe(8);
      expect(note!.textContent).toContain('Compounding Effect');
      expect(note!.querySelector('strong')).not.toBeNull();
    });

    it(`${lang}: keeps the original look & hover colours (yellow tip that turns blue, violet links)`, async () => {
      await mount(lang);
      const note = document.querySelector('#vibe-coding [role="note"]') as HTMLElement;
      for (const cls of ['bg-yellow-200', 'hover:bg-blue-100', 'border-yellow-300', 'hover:border-blue-200', 'shadow-md', 'hover:shadow-lg', 'transition-colors', 'group'])
        expect(note.className, cls).toContain(cls);
      expect(note.querySelector('.group-hover\\:animate-shimmer')).not.toBeNull();
      const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('main a[href^="http"]'));
      for (const a of links) {
        expect(a.className, a.href).toContain('text-violet-600');
        expect(a.className, a.href).toContain('hover:text-violet-800');
      }
    });

    it(`${lang}: lists Qwen in the cross-model workflow`, async () => {
      await mount(lang);
      expect(document.querySelector('#cross-model-validation')!.textContent).toContain('Qwen');
    });

    it(`${lang}: Task Executor lists Claude AI, Manus AI and Cursor Agents (not GitHub Copilot)`, async () => {
      await mount(lang);
      const text = document.querySelector('#ai-paradigms')!.textContent!;
      for (const name of ['ChatGPT', 'Google Gemini', 'DeepSeek', 'Claude AI', 'Manus AI', 'Cursor Agents']) {
        expect(text, name).toContain(name);
      }
      expect(text).not.toContain('GitHub Copilot');
    });

    it(`${lang}: tool rankings use the full tool + model names from the original`, async () => {
      await mount(lang);
      const text = document.querySelector('#vibe-coding')!.textContent!;
      for (const name of [
        'OpenAI Codex - GPT-5.5 Ultra High Thinking',
        'Google Antigravity - Claude Sonnet 4.6 High Thinking',
        'GitHub Copilot Free - GPT-4.1 mini model',
        'Google Antigravity - Gemini Pro 3.1 High Thinking',
      ]) {
        expect(text, name).toContain(name);
      }
    });
  }

  it('every language shares identical URLs for the same item (translations never change a link)', () => {
    // compared as sets: the original ZH tip lists the IDE tools in a different order than EN
    const urls = (lang: Language) => Array.from(new Set(JSON.stringify(i18n[lang]).match(/https?:\/\/[^\s)'"\\]+/g))).sort();
    expect(urls('zh')).toEqual(urls('en'));
    expect(urls('ms')).toEqual(urls('en'));
  });
});

describe('RichText', () => {
  it('renders [label](url) as a safe external link and **x** as bold', async () => {
    host = document.createElement('div');
    document.body.appendChild(host);
    root = createRoot(host);
    await act(async () => {
      root.render(
        <LanguageProvider initialLanguage="en">
          <RichText text={'**Tip:** try [Claude](https://claude.ai/) now'} />
        </LanguageProvider>
      );
    });
    const a = host.querySelector('a')!;
    expect(a.getAttribute('href')).toBe('https://claude.ai/');
    expect(a.target).toBe('_blank');
    expect(a.rel).toBe('noopener noreferrer');
    expect(host.querySelector('strong')!.textContent).toBe('Tip:');
    expect(host.textContent).toContain('try Claude');
  });

  it('never turns non-http(s) links or HTML into live markup', async () => {
    host = document.createElement('div');
    document.body.appendChild(host);
    root = createRoot(host);
    await act(async () => {
      root.render(
        <LanguageProvider initialLanguage="en">
          <RichText text={'[x](javascript:alert(1)) <img src=x onerror=alert(1)>'} />
        </LanguageProvider>
      );
    });
    expect(host.querySelector('a')).toBeNull();
    expect(host.querySelector('img')).toBeNull();
  });

  it('stripRichText returns the plain text', () => {
    expect(stripRichText('**A** [b](https://x.y/) c')).toBe('A b c');
  });
});

describe('original animations are defined in the stylesheet', () => {
  it('index.css defines the shimmer keyframes + .animate-shimmer used by the Useful Tip', () => {
    const css = fs.readFileSync(path.resolve(__dirname, '../src/index.css'), 'utf8');
    expect(css).toMatch(/@keyframes shimmer/);
    expect(css).toMatch(/\.animate-shimmer\s*\{[^}]*shimmer 2\.5s infinite/);
  });
});
