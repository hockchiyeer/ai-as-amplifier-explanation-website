/** Fill {placeholders} in a UI string, e.g. fmt('Step {n} of {total}', { n: 2, total: 16 }). */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => (k in values ? String(values[k]) : `{${k}}`));
}
