import React from 'react';
import { getMissingPaths } from '@/lib/i18nHelpers';

export default function I18nDebug() {
  const [open, setOpen] = React.useState(false);
  const [paths, setPaths] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;
    const id = setInterval(() => {
      setPaths(getMissingPaths());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div style={{ position: 'fixed', right: 12, bottom: 12, zIndex: 9999 }}>
      <div>
        <button
          onClick={() => setOpen(o => !o)}
          style={{ background: '#111827', color: 'white', padding: '8px 12px', borderRadius: 6 }}
        >
          i18n ({paths.length})
        </button>
      </div>
      {open ? (
        <div style={{ width: 360, maxHeight: 420, overflow: 'auto', background: 'white', color: '#111827', boxShadow: '0 6px 18px rgba(0,0,0,0.2)', borderRadius: 8, marginTop: 8 }}>
          <div style={{ padding: 12, borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>Missing i18n paths</strong>
            <button onClick={() => { setPaths([]); }} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>Clear</button>
          </div>
          <div style={{ padding: 12 }}>
            {paths.length === 0 ? (
              <div style={{ color: '#6b7280' }}>No missing keys detected</div>
            ) : (
              <ol style={{ paddingLeft: 16 }}>
                {paths.map((p, i) => (
                  <li key={i} style={{ marginBottom: 6 }} title={p}>{p}</li>
                ))}
              </ol>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
