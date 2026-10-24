// Interface-chrome strings (labels, ARIA text, viewer controls) for the tutorial layer.
// These are NEW strings added around the original content; they never replace it.
// Placeholders use {name} and are filled by `fmt()` in ./format.ts.
import type { Language } from './i18n';

export interface UiStrings {
  meta: { title: string; description: string };
  skipToContent: string;
  mainNav: string;
  contents: string;
  contentsTitle: string;
  contentsHint: string;
  close: string;
  openMenu: string;
  closeMenu: string;
  languageLabel: string;
  languageNames: { en: string; zh: string; ms: string };
  intro: string;
  stepOf: string;
  previous: string;
  next: string;
  backToTop: string;
  markDone: string;
  markedDone: string;
  progressSummary: string;
  resetProgress: string;
  readingProgress: string;
  expandDetails: string;
  collapseDetails: string;
  slideRefs: string;
  slideWord: string;
  opensInNewTab: string;
  slideOf: string;
  viewSlide: string;
  slideCount: string;
  openViewer: string;
  closeViewer: string;
  prevSlide: string;
  nextSlide: string;
  thumbnails: string;
  textVersion: string;
  noSlideText: string;
  loadFailed: string;
  retry: string;
  noPreview: string;
  slidesNote: string;
  copyright: string;
}

export const ui: Record<Language, UiStrings> = {
  en: {
    meta: {
      title: 'AI as an Amplifier, Multiplier, and Compounder',
      description:
        'Learn how AI amplifies, multiplies, and compounds your organizational capabilities. An interactive educational resource on AI strategy for business leaders.',
    },
    skipToContent: 'Skip to main content',
    mainNav: 'Main navigation',
    contents: 'Contents',
    contentsTitle: 'Tutorial contents',
    contentsHint: 'Pick any step to jump straight to it. Your progress is saved on this device.',
    close: 'Close',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Language',
    languageNames: { en: 'English', zh: '中文 (Chinese)', ms: 'Bahasa Melayu' },
    intro: 'Introduction',
    stepOf: 'Step {n} of {total}',
    previous: 'Previous',
    next: 'Next',
    backToTop: 'Back to top',
    markDone: 'Mark step as done',
    markedDone: 'Done',
    progressSummary: '{done} of {total} steps done',
    resetProgress: 'Reset progress',
    readingProgress: 'Reading progress',
    expandDetails: 'Expand details',
    collapseDetails: 'Collapse details',
    slideRefs: 'See it in the slides',
    slideWord: 'Slide',
    opensInNewTab: '(opens in a new tab)',
    slideOf: 'Slide {n} of {total}',
    viewSlide: 'View slide {n}: {title}',
    slideCount: '{n} slides',
    openViewer: 'Open slide viewer',
    closeViewer: 'Close slide viewer',
    prevSlide: 'Previous slide',
    nextSlide: 'Next slide',
    thumbnails: 'Slide thumbnails',
    textVersion: 'Text version of this slide',
    noSlideText: 'This slide contains no extractable text.',
    loadFailed: 'This slide image could not be loaded.',
    retry: 'Try again',
    noPreview: 'No preview',
    slidesNote: 'Slide images and their text are shown in the language of the original decks.',
    copyright: '© 2026 AI Amplifier. All rights reserved.',
  },
  zh: {
    meta: {
      title: 'AI 作为放大器、倍增器与复利器',
      description:
        '了解 AI 如何放大、倍增并复利你的组织能力。一份面向企业领导者的 AI 战略互动教育资源。',
    },
    skipToContent: '跳到主要内容',
    mainNav: '主导航',
    contents: '目录',
    contentsTitle: '教程目录',
    contentsHint: '点击任一步骤即可直接跳转。学习进度会保存在本设备上。',
    close: '关闭',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    languageLabel: '语言',
    languageNames: { en: 'English（英文）', zh: '中文', ms: 'Bahasa Melayu（马来文）' },
    intro: '简介',
    stepOf: '第 {n} 步，共 {total} 步',
    previous: '上一步',
    next: '下一步',
    backToTop: '回到顶部',
    markDone: '标记此步骤为已完成',
    markedDone: '已完成',
    progressSummary: '已完成 {done}/{total} 步',
    resetProgress: '重置进度',
    readingProgress: '阅读进度',
    expandDetails: '展开详情',
    collapseDetails: '收起详情',
    slideRefs: '在幻灯片中查看',
    slideWord: '幻灯片',
    opensInNewTab: '（在新标签页中打开）',
    slideOf: '第 {n} 张，共 {total} 张',
    viewSlide: '查看第 {n} 张幻灯片：{title}',
    slideCount: '共 {n} 张',
    openViewer: '打开幻灯片查看器',
    closeViewer: '关闭幻灯片查看器',
    prevSlide: '上一张幻灯片',
    nextSlide: '下一张幻灯片',
    thumbnails: '幻灯片缩略图',
    textVersion: '本张幻灯片的文字版',
    noSlideText: '这张幻灯片没有可提取的文字。',
    loadFailed: '无法加载这张幻灯片图片。',
    retry: '重试',
    noPreview: '暂无预览',
    slidesNote: '幻灯片图片及其文字以原始幻灯片的语言显示。',
    copyright: '© 2026 AI Amplifier。保留所有权利。',
  },
  ms: {
    meta: {
      title: 'AI sebagai Penguat, Pengganda dan Pengkompaun',
      description:
        'Ketahui bagaimana AI memperkuat, menggandakan dan mengkompaunkan keupayaan organisasi anda. Sumber pendidikan interaktif tentang strategi AI untuk pemimpin perniagaan.',
    },
    skipToContent: 'Langkau ke kandungan utama',
    mainNav: 'Navigasi utama',
    contents: 'Kandungan',
    contentsTitle: 'Kandungan tutorial',
    contentsHint: 'Pilih mana-mana langkah untuk terus ke situ. Kemajuan anda disimpan pada peranti ini.',
    close: 'Tutup',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    languageLabel: 'Bahasa',
    languageNames: { en: 'English (Inggeris)', zh: '中文 (Cina)', ms: 'Bahasa Melayu' },
    intro: 'Pengenalan',
    stepOf: 'Langkah {n} daripada {total}',
    previous: 'Sebelumnya',
    next: 'Seterusnya',
    backToTop: 'Kembali ke atas',
    markDone: 'Tandakan langkah ini selesai',
    markedDone: 'Selesai',
    progressSummary: '{done} daripada {total} langkah selesai',
    resetProgress: 'Tetapkan semula kemajuan',
    readingProgress: 'Kemajuan bacaan',
    expandDetails: 'Kembangkan butiran',
    collapseDetails: 'Kuncupkan butiran',
    slideRefs: 'Lihat dalam slaid',
    slideWord: 'Slaid',
    opensInNewTab: '(dibuka dalam tab baharu)',
    slideOf: 'Slaid {n} daripada {total}',
    viewSlide: 'Lihat slaid {n}: {title}',
    slideCount: '{n} slaid',
    openViewer: 'Buka pemapar slaid',
    closeViewer: 'Tutup pemapar slaid',
    prevSlide: 'Slaid sebelumnya',
    nextSlide: 'Slaid seterusnya',
    thumbnails: 'Gambar kecil slaid',
    textVersion: 'Versi teks slaid ini',
    noSlideText: 'Slaid ini tidak mengandungi teks yang boleh diekstrak.',
    loadFailed: 'Imej slaid ini tidak dapat dimuatkan.',
    retry: 'Cuba lagi',
    noPreview: 'Tiada pratonton',
    slidesNote: 'Imej slaid dan teksnya dipaparkan dalam bahasa dek asal.',
    copyright: '© 2026 AI Amplifier. Hak cipta terpelihara.',
  },
};
