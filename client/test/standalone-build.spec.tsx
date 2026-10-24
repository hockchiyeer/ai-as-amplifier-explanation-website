// @vitest-environment node
// esbuild (used by the build script) cannot run inside jsdom, so this spec runs in plain Node.
import { describe, expect, it } from 'vitest';
import { i18n } from '../src/lib/i18n';

describe('scripts/build-standalone.mjs', () => {
  it('extracts the full EN / 中文 / BM dictionary into a valid content.js', async () => {
    // @ts-ignore - plain .mjs build script
    const { extractContent, renderContentJs } = await import('../../scripts/build-standalone.mjs');
    const text: string = renderContentJs(await extractContent());
    const win: any = {};
    new Function('window', text)(win);
    for (const lang of ['en', 'zh', 'ms'] as const) {
      expect(win.AI_AMPLIFIER_CONTENT[lang]).toEqual(JSON.parse(JSON.stringify(i18n[lang])));
    }
    // restored content is part of what gets exported
    expect(win.AI_AMPLIFIER_CONTENT.en.vibeCoding.usefulTip).toContain('Useful Tip');
  }, 60_000);
});
