// @vitest-environment jsdom
// The developer "Missing i18n paths" panel must stay hidden by default (it floats over the page content)
// and only appear when explicitly requested with ?i18nDebug=1.
import React, { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, describe, expect, it } from 'vitest';
import I18nDebug from '../src/components/I18nDebug';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
let host: HTMLDivElement;
let root: Root;

async function mount(search: string) {
  window.history.replaceState(null, '', '/' + search);
  host = document.createElement('div');
  document.body.appendChild(host);
  root = createRoot(host);
  await act(async () => root.render(<I18nDebug />));
}
afterEach(async () => {
  await act(async () => root.unmount());
  host.remove();
  window.history.replaceState(null, '', '/');
});

describe('I18nDebug (developer helper)', () => {
  it('renders nothing by default', async () => {
    await mount('');
    expect(host.innerHTML).toBe('');
  });

  it('renders nothing for other query strings or values', async () => {
    await mount('?foo=1&i18nDebug=0');
    expect(host.innerHTML).toBe('');
  });

  it('shows the badge and the panel when ?i18nDebug=1 is present', async () => {
    await mount('?i18nDebug=1');
    const badge = host.querySelector('button')!;
    expect(badge.textContent).toMatch(/^i18n \(\d+\)$/);
    await act(async () => badge.click());
    expect(host.textContent).toContain('Missing i18n paths');
  });
});
