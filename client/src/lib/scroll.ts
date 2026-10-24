/** Smooth-scroll to a section, update the URL hash, and move keyboard / screen-reader focus to its heading. */
export function goToSection(id: string) {
  const reduce =
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior: ScrollBehavior = reduce ? 'auto' : 'smooth';
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior });
    history.replaceState(null, '', window.location.pathname + window.location.search);
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior });
  try {
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${id}`);
  } catch {
    /* ignore */
  }
  const heading = document.getElementById(`${id}-title`);
  if (heading) {
    heading.setAttribute('tabindex', '-1');
    (heading as HTMLElement).focus({ preventScroll: true });
  }
}
