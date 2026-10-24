import { Fragment, type ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

/**
 * Tiny, safe inline markup used by the content files (i18n.ts / i18n.ms.ts):
 *   [label](https://example.com)  → external link (opens in a new tab)
 *   **text**                      → bold
 * Everything else is rendered as plain text. Only http(s) URLs become links and no HTML is
 * ever injected, so translated strings can carry the original page's tool links safely.
 */
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g;
const LINK = /^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/;

export const LINK_CLASS =
  'text-violet-600 underline font-semibold hover:text-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm';

/** An external link that announces "(opens in a new tab)" to screen readers. */
export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn(LINK_CLASS, className)}>
      {children}
      <span className="sr-only"> {t.ui.opensInNewTab}</span>
    </a>
  );
}

/** Strip the markup, e.g. for aria-labels or plain-text fallbacks. */
export function stripRichText(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\(https?:\/\/[^\s)]+\)/g, '$1');
}

export function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(TOKEN).filter(part => part !== '');
  const nodes = parts.map((part, i) => {
    const link = LINK.exec(part);
    if (link) {
      return (
        <ExternalLink key={i} href={link[2]}>
          {link[1]}
        </ExternalLink>
      );
    }
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
  return className ? <span className={className}>{nodes}</span> : <>{nodes}</>;
}
