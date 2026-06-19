import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Download, Upload, Check } from 'lucide-react';
import { getContent } from '@/lib/i18nHelpers';
import { useLanguage } from '@/contexts/LanguageContext';

export function ContentEditor({ onClose }: { onClose: () => void }) {
  const { language } = useLanguage();
  const [editedContent, setEditedContent] = useState<any>(null);

  useEffect(() => {
    // Deep clone current content or fallback to get full structure
    const current = (typeof window !== 'undefined' && (window as any).APP_CONTENT) 
      ? JSON.parse(JSON.stringify((window as any).APP_CONTENT))
      : JSON.parse(JSON.stringify(require('@/lib/i18n').i18n));
    setEditedContent(current);
  }, []);

  if (!editedContent) return null;

  const setNestedValue = (obj: any, path: string, value: string) => {
    const parts = path.split('.');
    const last = parts.pop()!;
    let current = obj;
    for (const part of parts) {
      if (!current[part]) current[part] = isNaN(parts[parts.indexOf(part)+1] as any) ? {} : [];
      current = current[part];
    }
    current[last] = value;
    setEditedContent({ ...editedContent });
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        let text = event.target?.result as string;
        let parsed;
        if (file.name.endsWith('.js')) {
          // Extract JSON part from content.js (window.APP_CONTENT = {...};)
          const match = text.match(/window\.APP_CONTENT\s*=\s*(\{[\s\S]*?\});?\s*$/);
          if (match) {
            parsed = JSON.parse(match[1]);
          } else {
            // Try evaluating as last resort if it's pure JSON assignment
            text = text.replace('window.APP_CONTENT =', '').replace(/;$/, '').trim();
            parsed = JSON.parse(text);
          }
        } else {
          // Assume .json
          parsed = JSON.parse(text);
        }
        
        if (parsed && parsed.en) {
          setEditedContent(parsed);
          alert('Content imported successfully!');
        } else {
          throw new Error('Invalid content format. Missing "en" key.');
        }
      } catch (err) {
        alert('Failed to parse imported file. Please ensure it is a valid JSON or content.js file.');
        console.error(err);
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  const handleApply = () => {
    // Apply changes immediately to the current view
    (window as any).APP_CONTENT = editedContent;
    window.dispatchEvent(new Event('contentUpdated'));
    onClose();
  };

  const handleDownload = () => {
    const jsCode = "window.APP_CONTENT = " + JSON.stringify(editedContent, null, 2) + ";";
    const blob = new Blob([jsCode], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "content.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Helper to render fields recursively
  const renderFields = (objEn: any, objZh: any, prefix = '') => {
    const fields: React.ReactNode[] = [];
    
    for (const key in objEn) {
      const valEn = objEn[key];
      const valZh = objZh ? objZh[key] : '';
      const currentPath = prefix ? `${prefix}.${key}` : key;
      
      if (typeof valEn === 'object' && valEn !== null && !Array.isArray(valEn)) {
        fields.push(...renderFields(valEn, valZh, currentPath));
      } else if (Array.isArray(valEn)) {
        if (typeof valEn[0] === 'string') {
          for (let i = 0; i < valEn.length; i++) {
            fields.push(renderField(`${currentPath}.${i}`, valEn[i], valZh ? valZh[i] : ''));
          }
        } else {
          for (let i = 0; i < valEn.length; i++) {
            fields.push(...renderFields(valEn[i], valZh ? valZh[i] : null, `${currentPath}.${i}`));
          }
        }
      } else {
        fields.push(renderField(currentPath, String(valEn), String(valZh || '')));
      }
    }
    return fields;
  };

  const renderField = (path: string, enVal: string, zhVal: string) => {
    const isLong = enVal.length > 60 || zhVal.length > 60;
    
    return (
      <div key={path} className="mb-6 pb-6 border-b border-slate-200 border-dashed last:border-0">
        <div className="font-mono text-sm font-semibold text-slate-700 mb-2">{path}</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">English</label>
            {isLong ? (
              <textarea 
                className="w-full p-2 border border-slate-300 rounded text-sm min-h-[80px]"
                value={enVal}
                onChange={(e) => setNestedValue(editedContent, `en.${path}`, e.target.value)}
              />
            ) : (
              <input 
                type="text" 
                className="w-full p-2 border border-slate-300 rounded text-sm"
                value={enVal}
                onChange={(e) => setNestedValue(editedContent, `en.${path}`, e.target.value)}
              />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Chinese (中文)</label>
            {isLong ? (
              <textarea 
                className="w-full p-2 border border-slate-300 rounded text-sm min-h-[80px]"
                value={zhVal}
                onChange={(e) => setNestedValue(editedContent, `zh.${path}`, e.target.value)}
              />
            ) : (
              <input 
                type="text" 
                className="w-full p-2 border border-slate-300 rounded text-sm"
                value={zhVal}
                onChange={(e) => setNestedValue(editedContent, `zh.${path}`, e.target.value)}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-white/95 z-[100] overflow-y-auto p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 rounded-t-xl sticky top-0 z-10">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            ✏️ Edit Website Content
          </h2>
          <div className="flex items-center gap-3">
            <div className="relative overflow-hidden inline-block">
              <Button variant="outline" className="gap-2" onClick={() => document.getElementById('import-upload')?.click()}>
                <Upload className="w-4 h-4" />
                Import JSON/JS
              </Button>
              <input 
                id="import-upload" 
                type="file" 
                accept=".json,.js" 
                className="hidden" 
                onChange={handleImport}
              />
            </div>
            
            <Button onClick={handleApply} className="gap-2 bg-slate-800 hover:bg-slate-900 text-white">
              <Check className="w-4 h-4" />
              Apply Changes
            </Button>
            
            <Button onClick={handleDownload} className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="w-4 h-4" />
              Download content.js
            </Button>
            
            <Button variant="ghost" size="icon" onClick={onClose} className="ml-2 text-slate-500 hover:text-slate-900">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Editor Body */}
        <div className="p-6 overflow-y-auto bg-white">
          {renderFields(editedContent.en, editedContent.zh)}
        </div>
      </div>
    </div>
  );
}
