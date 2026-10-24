// Bahasa Melayu (Malaysia) content — faithful translation of the English source in i18n.ts.
// Keys MUST mirror `base.en`; `client/test/i18n-parity.spec.tsx` enforces this.
import type { BaseContent } from './i18n';

export const ms: BaseContent = {
  // Navigation
  nav: {
    home: 'Laman Utama',
    threeEffects: 'Tiga Kesan',
    mirrorPrinciple: 'Prinsip Cermin',
    aiParadigms: 'Paradigma AI',
    caseStudies: 'Kajian Kes',
    useCases: 'Kes Penggunaan',
    promptingGuide: 'Panduan Gesaan',
    vibeCoding: 'Vibe Coding',
    strategicInsights: 'Strategi',
    crossModelValidation: 'Pengesahan',
    aiRedTeaming: 'Red Teaming',
    productionObservations: 'Pemerhatian',
    aiMoats: 'Benteng AI',
    keyTakeaways: 'Rumusan',
    pptShowcase: 'Slaid',
    subtractPrinciple: 'Pengurangan',
    aiJourney: 'Perjalanan',
    language: 'Bahasa Melayu',
  },

  // Hero Section
  hero: {
    mainHeading: 'AI sebagai Penguat, Pengganda dan Pengkompaun',
    subheading:
      'Bagaimana AI membesarkan kelebihan daya saing anda—atau mempercepatkan kesilapan strategi anda.',
    description:
      'Dalam era sumber pengkomputeran yang melimpah, AI tidak menjadikan anda lebih bijak. Ia memperkuat apa yang sudah anda lakukan—sama ada baik atau buruk. Pelajari cara memanfaatkan AI sebagai pengganda strategik sambil mengelakkan perangkap yang mengubah kelebihan daya saing menjadi kegagalan yang berkompaun.',
    cta: 'Terokai Tiga Kesan',
  },

  // Three Effects Section
  threeEffects: {
    title: 'Tiga Kesan Pelaksanaan AI',
    subtitle: 'Bagaimana AI memperkuat, menggandakan dan mengkompaunkan keupayaan organisasi anda',
    amplifier: {
      title: 'Kesan Penguat',
      icon: '⚡',
      description:
        'AI membesarkan kesan setiap tindakan—sama ada baik atau buruk. Strategi yang betul menghasilkan pulangan yang jauh lebih besar; strategi yang cacat mempercepatkan kegagalan. AI tidak mencipta strategi; ia mendedahkan dan memperkuat apa yang sudah ada.',
      keyPoint: 'Lebih Pantas · Lebih Murah · Lebih Cekap—ke arah yang sudah anda tuju',
    },
    multiplier: {
      title: 'Kesan Pengganda',
      icon: '✖',
      description:
        'AI menggandakan output dan capaian pasukan anda merentasi saluran, pasaran dan bidang kemahiran—beroperasi di tempat yang manusia tidak mampu. Namun apabila AI tersilap, ia juga menggandakan ralat, maklumat palsu dan keputusan yang lemah ke seluruh organisasi.',
      keyPoint: 'Output 10× · Risiko 10× jika strategi cacat',
    },
    compounder: {
      title: 'Kesan Pengkompaun',
      icon: '📈',
      description:
        'Kelebihan AI berkompaun dari semasa ke semasa. Pasukan yang membina sistem AI hari ini memperoleh kelebihan daya saing secara eksponen berbanding pesaing yang masih bergantung pada proses manusia yang linear. Tetapi jika dibina atas strategi yang cacat, AI turut mengkompaunkan ralat tanpa henti—mendorong organisasi ke arah hasil yang semakin mahal dan tidak boleh dipulihkan.',
      keyPoint: 'Kelebihan eksponen atau kemerosotan eksponen—pengkompaunan berfungsi dua hala',
    },
  },

  // Mirror Principle Section
  mirrorPrinciple: {
    title: 'Prinsip Cermin',
    subtitle: 'AI Mencerminkan Diri Anda yang Sebenar',
    description:
      'AI ialah cermin kepada model operasi organisasi anda. Ia tidak membaiki strategi yang lemah—ia mendedahkannya dengan lebih pantas dan pada skala yang lebih besar. Sistem AI yang sama menghasilkan keputusan yang sangat berbeza bergantung pada kualiti strategi yang diperkuatkannya.',
    rule: 'AI tidak membaiki strategi perniagaan yang lemah. Ia hanya menjadikan akibatnya muncul lebih cepat—sama ada baik atau buruk.',
    inputLabel: 'Input',
    outputLabel: 'Output',
    scenarios: {
      smart: {
        title: 'Organisasi Bijak',
        emoji: '✅',
        label: 'AI Mempercepat Kejayaan',
        input: 'Kedudukan yang jelas, proses yang kukuh, data berkualiti, pertimbangan yang baik',
        output: 'Kejelasan lebih pantas, pembelajaran dipercepat, pertumbuhan berkompaun',
      },
      mediocre: {
        title: 'Organisasi Sederhana',
        emoji: '⚠️',
        label: 'AI Meniru Kesederhanaan',
        input: 'Kedudukan tidak jelas, proses purata, kualiti data bercampur',
        output: 'Lebih banyak output, tetapi belum tentu lebih banyak kelebihan',
      },
      defective: {
        title: 'Organisasi Cacat',
        emoji: '❌',
        label: 'AI Memperkuat Kegagalan',
        input: 'Kedudukan cacat, proses rosak, data lemah, pertimbangan lemah',
        output: 'Kegagalan lebih pantas, pembaziran diperkuat, geseran dalaman berkompaun',
      },
    },
  },

  // Two AI Paradigms Section
  aiParadigms: {
    title: 'Dua Paradigma AI',
    subtitle: 'Memahami Penjana Bahasa berbanding Pelaksana Tugas',
    bestForLabel: 'Terbaik Untuk',
    promptingTipLabel: 'Petua Gesaan',
    paradigm1: {
      title: 'Penjana Bahasa',
      tools: [
        { name: 'ChatGPT', url: 'https://chatgpt.com' },
        { name: 'Google Gemini', url: 'https://gemini.google.com' },
        { name: 'DeepSeek', url: 'https://www.deepseek.com' },
      ],
      bestFor: [
        'Sumbang saran dan pemikiran idea strategik',
        'Penulisan panjang: laporan, analisis, artikel naratif',
        'Tafsiran dan pengembangan dalam utas perbualan yang panjang',
        'Alternatif yang lebih menjimatkan berbanding ejen terbenam dalam IDE',
      ],
      promptingTip:
        'Gesaan yang terperinci, berbentuk perbualan dan kaya konteks → output yang lebih kaya dan menyeluruh',
    },
    paradigm2: {
      title: 'Pelaksana Tugas',
      tools: [
        { name: 'Claude AI', url: 'https://claude.ai' },
        { name: 'Manus AI', url: 'https://manus.im' },
        { name: 'Cursor Agents', url: 'https://cursor.com' },
      ],
      bestFor: [
        'Pelaksanaan autonomi aliran kerja berbilang langkah',
        'Penyelarasan alat, API, fail dan sistem',
        'Pengaturcaraan, automasi dan operasi berejen',
        'Tugas dengan keadaan akhir yang jelas',
      ],
      promptingTip:
        'Ringkas, tertumpu pada tugas, format output yang jelas → memaksimumkan kualiti output ejen',
    },
  },

  // Case Studies Section
  caseStudies: {
    title: 'Kajian Kes Dunia Sebenar',
    subtitle: 'Bagaimana AI memperkuat kejayaan dan kegagalan',
    scenarioLabel: 'Senario',
    outcomeLabel: 'Hasil',
    lessonLabel: 'Pengajaran Perniagaan Utama',
    case1: {
      title: 'Kajian Kes #1: Kandungan Serangan terhadap Pesaing × Pengeluaran Berkelompok oleh AI',
      scenario:
        'Pasukan pemasaran menggunakan AI untuk menghasilkan kandungan serangan terhadap pesaing secara berkelompok di LinkedIn dan saluran sosial. Namun, strategi asasnya sudah pun mencetuskan reaksi balas yang kuat dalam industri.',
      outcome:
        'Semakin banyak kandungan yang mereka hasilkan dengan AI, semakin besar kesan negatif diperkuatkan. Lebih banyak kandungan ≠ lebih banyak pengaruh—ia menjadi kerosakan berskala lebih besar.',
      lesson:
        'Jika strategi anda sudah mencetuskan reaksi balas, menggunakan AI untuk menghasilkan lebih banyak kandungan hanya membesarkan masalah itu sepuluh kali ganda. Arah yang salah × kelajuan lebih tinggi = kegagalan lebih pantas.',
    },
    case2: {
      title: 'Kajian Kes #2: Produk Premium Bertemu Perkaitan Jenama yang Negatif',
      scenario:
        'Produk atau eksekutif berkualiti tinggi dikaitkan dengan jenama yang dipandang negatif. Kandungan yang dijana AI kemudian memperkuat isyarat yang salah itu pada skala besar.',
      outcome:
        'Rekod prestasi yang kukuh dan nilai pelanggan sebenar produk itu tidak dapat mengatasi halangan perkaitan jenama. Lebih banyak kandungan AI = penolakan lebih pantas daripada segmen pasaran utama.',
      lesson:
        'Kandungan AI memperkuat persepsi sedia ada—sama ada positif atau negatif. Produk yang kukuh yang dikaitkan dengan isyarat jenama yang lemah akan menyaksikan AI mempercepatkan penolakan, bukan mengatasinya.',
    },
  },

  // Business Use Cases
  useCases: {
    title: 'Di Mana AI Mencipta Daya Ungkit',
    subtitle: 'Fungsi perniagaan di mana AI memberikan nilai maksimum',
    sales: {
      title: 'Jualan',
      cases: [
        'Penyelidikan dan penemuan pelanggan',
        'Persediaan dan strategi panggilan',
        'Penggubalan e-mel susulan',
        'Pengendalian bantahan dan sanggahan',
      ],
    },
    marketing: {
      title: 'Pemasaran',
      cases: [
        'Pengujian dan pengesahan mesej',
        'Segmentasi dan penyasaran audiens',
        'Penjanaan varian kandungan',
        'Penjanaan idea dan strategi kempen',
      ],
    },
    operations: {
      title: 'Operasi',
      cases: [
        'Dokumentasi dan ringkasan proses',
        'Penggubalan SOP (Prosedur Operasi Standard)',
        'Perolehan semula dan pengurusan pengetahuan',
        'Automasi dan pengoptimuman aliran kerja',
      ],
    },
    product: {
      title: 'Produk',
      cases: [
        'Integrasi dan analisis maklum balas pengguna',
        'Andaian dan pengesahan peta jalan',
        'Penentuan keutamaan dan kedudukan ciri',
        'Penambahbaikan strategi produk',
      ],
    },
    qa: {
      title: 'QA',
      cases: [
        'Penjanaan rangka kerja dan kerangka ujian',
        'Pengenalpastian kes pinggir',
        'Strategi ujian regresi',
        'Ringkasan dan pelaporan kecacatan',
      ],
    },
    competitiveIntelligence: {
      title: 'Perisikan Persaingan',
      cases: [
        'Pengimbasan dan pemantauan pasaran',
        'Perancangan senario dan peramalan',
        'Analisis kedudukan pesaing',
        'Pengenalpastian trend industri',
      ],
    },
  },

  // Prompting Guide Section
  promptingGuide: {
    title: 'Panduan Gesaan Strategik',
    subtitle: 'Mendapatkan Output AI yang Jujur dan Berkualiti Tinggi',
    introduction:
      'Hasil AI yang terbaik datang daripada soalan strategik yang tepat—bukan sekadar meminta penghasilan kandungan. Inilah cara memberi gesaan untuk mendapatkan pandangan yang sebenar.',
    keyInsight:
      'Minta pertimbangan strategik yang jujur dan jelas daripada AI—bukan penghasilan kandungan. Di sinilah nilai sebenar AI muncul.',
    doLabel: '✓ LAKUKAN',
    dontLabel: '✗ JANGAN',
    examples: [
      {
        correct: 'Apakah keperluan pelanggan yang kini kita abaikan?',
        incorrect: 'Tulis siaran akhbar pelancaran produk',
      },
      {
        correct: 'Pertaruhan strategik manakah yang mempunyai nisbah impak-kepada-pelaburan tertinggi?',
        incorrect: 'Jana 20 hantaran media sosial untuk jenama kita',
      },
      {
        correct: 'Di manakah kita paling terdedah kepada gangguan persaingan?',
        incorrect: 'Gubah kandungan serangan terhadap pesaing',
      },
      {
        correct: 'Berterus terang: apakah titik buta dalam strategi kita?',
        incorrect: 'Tulis 10 templat e-mel untuk pasukan jualan',
      },
      {
        correct: 'Apakah peluang kemenangan pantas yang paling boleh dilaksanakan dalam 90 hari akan datang?',
        incorrect: 'Cipta surat berita pelabur Q3',
      },
    ],
  },

  // Vibe Coding Section
  vibeCoding: {
    title: 'Vibe Coding: Pembangunan Dipertingkat AI',
    subtitle: 'Menggunakan AI untuk memperkuat produktiviti dan kualiti pengekodan',
    description:
      'Vibe Coding ialah amalan menggunakan AI sebagai rakan kerjasama untuk memperkuat kelajuan pembangunan, kualiti kod dan keupayaan menyelesaikan masalah. Daripada menggantikan pembangun, AI menambah baik pertimbangan mereka dan mempercepatkan output mereka.',
    usefulTip:
      '**Petua Berguna:** Sentiasa bangunkan rangka aplikasi yang berfungsi sepenuhnya menggunakan alat berejen (seperti [Manus AI](https://manus.im/) atau [Claude AI](https://claude.ai/)), alat pengekodan AI berasaskan kanvas ([Google Gemini Canvas](https://gemini.google.com/canvas), [ChatGPT Canvas](https://chatgpt.com/)), atau minta [DeepSeek](https://deepseek.com/) menulis rangka Aplikasi Satu Halaman (Single Page Application) yang boleh dimuat turun atau dijalankan di Web. Kemudian, muat turun keseluruhan kod sumber aplikasi untuk meneruskan vibe-coding, pemfaktoran semula dan pengembangan ciri aplikasi menggunakan pemalam atau sambungan IDE daripada pelbagai model AI ([Antigravity](https://antigravity.google/), [VS Code MS Copilot](https://github.com/features/copilot), [VS Code Codex Extension](https://openai.com/codex/), dll.). Ini membolehkan AI memanfaatkan sepenuhnya "Kesan Pengkompaun" (Compounding Effect) di atas asas yang kukuh, dan bukannya cuba menjana setiap ciri yang anda bayangkan tanpa konteks, data atau butiran pembangunan dan reka bentuk sistem yang mencukupi.',
    tools: {
      title: 'Alat AI Dunia Sebenar dalam Tindakan',
      bugGenie: {
        name: 'BugGenie AI',
        subtitle:
          'Alat Penggubalan Tiket Pepijat yang dikuasakan oleh [ciri Canvas terbina dalam Google Gemini](https://gemini.google.com/canvas)',
        description:
          'Menukar tangkapan skrin dan artifak sokongan kepada laporan pepijat yang berstruktur dan profesional terus dalam pelayar—tiada bahagian belakang atau pemasangan diperlukan.',
        features: [
          'Dikuasakan oleh [ciri Canvas Google Gemini](https://gemini.google.com/canvas) atau melalui [Build Apps Google AI Studio](https://aistudio.google.com/apps)',
          'Berasaskan pelayar—tiada pemasangan, tiada langkah binaan',
          'Menerima tangkapan skrin & artifak sokongan',
          'Menghasilkan tiket pepijat berstruktur yang sedia difailkan',
        ],
        githubLink: { label: 'Kod Sumber Github', url: 'https://github.com/hockchiyeer/ai-powered-auto-bug-ticket-logger' },
        aiStudioLink: { label: 'Aplikasi Berasaskan Google AI Studio', url: 'https://aistudio.google.com/apps/ce12cbda-aa17-405d-9018-96a8ef249d29?showPreview=true&showAssistant=true' },
        canvasLink: { label: 'Aplikasi Berasaskan Google Gemini Canvas', url: 'https://gemini.google.com/share/5a9916e135f0' },
      },
      agileMaturity: {
        name: 'Aplikasi Penilaian Kematangan Agile',
        subtitle: 'Aplikasi JavaScript Statik Natif Pelayar',
        description:
          'Aplikasi penilaian yang berdiri sendiri sepenuhnya dan berjalan dengan membuka index.html—tiada langkah binaan, tiada pemasangan pakej, tiada pelayan pembangunan diperlukan.',
        features: [
          '100% natif pelayar—HTML, CSS & JS tulen',
          'Tanpa kebergantungan: tiada npm, tiada pembungkus, tiada pelayan',
          'Buka index.html secara terus untuk dijalankan setempat',
          'Boleh dilancarkan ke GitHub Pages dalam satu langkah',
        ],
        githubLink: { label: 'Kod Sumber Github', url: 'https://github.com/hockchiyeer/google-ai-studio-generated-agile-maturity-assessment-app' },
        appLink: { label: 'Aplikasi', url: 'https://hockchiyeer.github.io/google-ai-studio-generated-agile-maturity-assessment-app' },
      },
    },
    toolRankings: {
      title: 'Kedudukan Alat AI untuk Tugas Pengekodan',
      subtitle: 'Kecekapan, ketepatan & kualiti output (pengalaman peribadi)',
      tools: [
        { rank: 1, name: 'OpenAI Codex - GPT-5.5 Ultra High Thinking', score: '9.0/10', url: 'https://openai.com/codex/' },
        { rank: 2, name: 'Google Antigravity - Claude Sonnet 4.6 High Thinking', score: '7.8/10', url: 'https://antigravity.google/' },
        { rank: 3, name: 'Cursor Agents', score: '6.8/10', url: 'https://cursor.com/agents' },
        { rank: 4, name: 'GitHub Copilot Free - GPT-4.1 mini model', score: '5.8/10', url: 'https://github.com/features/copilot' },
        { rank: 5, name: 'Google Antigravity - Gemini Pro 3.1 High Thinking', score: '5.6/10', url: 'https://antigravity.google/' },
      ],
    },
  },

  // Strategic Insights Section
  strategicInsights: {
    title: 'Soalan Strategik yang Kritikal',
    subtitle: 'Bingkaikan semula kelebihan daya saing melalui pengagihan semula kapasiti oleh AI',
    question:
      'Jika pasukan anda berhenti sepenuhnya menghabiskan masa untuk tugas reaktif—menjawab pengumuman pesaing, menjana laporan rutin, mengurus komunikasi bernilai rendah—dan mengalihkan kapasiti yang dibebaskan itu kepada kerja strategik yang dipertingkat AI, apakah peluang pelaburan yang akan anda ceburi?',
    insight:
      'Soalan ini sering lebih hampir dengan sumber sebenar kelebihan daya saing berbanding: "Bagaimana kita bertindak balas terhadap pelancaran produk terkini pesaing kita?"',
    keyPoint:
      'Kelebihan daya saing yang sebenar bukan terletak pada melakukan lebih banyak, tetapi pada mengalihkan kapasiti manusia daripada kerja reaktif kepada pemikiran strategik—diperkuat oleh AI.',
  },

  // Subtract Principle Section
  subtractPrinciple: {
    title: 'Prinsip Pengurangan',
    subtitle: 'Apabila AI tersasar, tetapkan semula—jangan diperkuatkan',
    description:
      'Apabila trajektori AI menjadi tidak produktif atau tidak selari, penyelesaiannya bukan menggunakan lebih banyak kuasa pengkomputeran atau menolak dengan lebih keras. Sebaliknya, tetapkan semula kepada keadaan bersih, tukar model atau suntik perspektif baharu.',
    corePrinciplesLabel: 'Prinsip Teras:',
    principles: [
      'Lebih banyak kuasa pengkomputeran pada trajektori yang cacat ialah kekerasan ke arah yang salah',
      'Tetapkan semula kepada keadaan bersih apabila kualiti output AI merosot',
      'Tukar model untuk mendapatkan perspektif dan pendekatan baharu',
      'Suntik pertimbangan manusia untuk mengubah arah trajektori',
      'Sedari bila pengukuhan menjadikan keadaan lebih buruk, bukan lebih baik',
    ],
  },

  // Key Takeaways Section
  keyTakeaways: {
    title: 'Rumusan Utama',
    subtitle: 'Prinsip teras untuk kejayaan pelaksanaan AI',
    takeaways: [
      {
        icon: '⚡',
        title: 'AI Ialah Penguat—Arah Paling Penting',
        description:
          'AI tidak menentukan hasil—strategi anda yang menentukannya. Strategi yang betul diperkuat untuk menghasilkan pulangan yang jauh lebih besar. Strategi yang cacat diperkuat untuk mempercepatkan kegagalan. Betulkan arah dahulu.',
      },
      {
        icon: '✖',
        title: 'Pengganda Berfungsi Dua Hala',
        description:
          'Setiap pelaksanaan AI ialah pengganda daya. Menghasilkan mesej yang cacat secara besar-besaran bukanlah kekuatan—ia kelemahan dalam kuantiti yang besar. Kejelasan strategik didarab dengan AI ialah satu-satunya jalan ke arah kelebihan yang tahan lama.',
      },
      {
        icon: '📈',
        title: 'Pengkompaun Memberi Ganjaran kepada Pelopor',
        description:
          'Kelebihan AI berkompaun melalui benteng data, aliran kerja dan kelajuan. Pasukan yang membina sistem AI hari ini mencipta pendahuluan yang tidak dapat dikejar oleh pengguna lewat—walau apa pun bajetnya.',
      },
      {
        icon: '◆',
        title: 'Miliki Strategi—Gunakan AI untuk Mempercepat',
        description:
          'Jana rangka kerja, dapatkan semula pengetahuan, analisis data dan kembangkan pelaksanaan dengan AI. Tetapi sentiasa miliki sendiri logik strategik, andaian teras dan standard kualiti.',
      },
      {
        icon: '−',
        title: 'Prinsip Pengurangan: Tetapkan Semula, Jangan Diperkuatkan',
        description:
          'Apabila AI tersasar—tetapkan semula kepada keadaan bersih, tukar model, suntik perspektif baharu. Lebih banyak kuasa pengkomputeran pada trajektori yang cacat ialah kekerasan ke arah yang salah.',
      },
    ],
  },

  // Your AI Journey Section
  aiJourney: {
    title: 'Perjalanan AI Anda',
    subtitle: 'Bermula di sini',
    tagline:
      'Bukan dengan menggunakan AI untuk bercakap lebih banyak, tetapi dengan menggunakan AI untuk melihat dengan lebih jelas apa yang sebenarnya anda lakukan',
    steps: [
      { step: 1, title: 'Perkuat', description: 'strategi yang betul' },
      { step: 2, title: 'Gandakan', description: 'pelaksanaan yang berkesan' },
      { step: 3, title: 'Kompaunkan', description: 'kelebihan daya saing' },
    ],
    cta: 'Mulakan transformasi anda hari ini',
    author: 'Er Hock Chiye | Pengamal Kes Penggunaan AI',
  },

  // Cross-Model Validation Section
  crossModelValidation: {
    title: 'Aliran Kerja Pengesahan Silang Model',
    subtitle:
      'Mengurangkan halusinasi dan meluaskan konteks dengan [Google NotebookLM](https://notebooklm.google.com/)',
    description:
      'Jangan berhenti pada kesimpulan satu model AI sahaja. Gunakan gesaan yang sama merentasi beberapa model untuk mengesahkan silang dan menyintesis pandangan yang lebih mendalam.',
    steps: [
      {
        title: 'Wujudkan Garis Asas',
        description:
          'Bina pangkalan pengetahuan awal dengan mengimport PDF, laporan dan data ke dalam NotebookLM.',
      },
      {
        title: 'Ujian Selari',
        description:
          'Hantar gesaan yang sama kepada beberapa model (cth., [ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com/), [Claude](https://claude.ai/), [DeepSeek](https://deepseek.com/), [Qwen](https://chat.qwen.ai/)).',
      },
      {
        title: 'Sintesis & Selaraskan',
        description:
          'Eksport jawapan tersebut dan import semula ke dalam NotebookLM untuk meringkaskan persetujuan dan menentukan perbezaan.',
      },
      {
        title: 'Pertimbangan Akhir',
        description:
          'Gunakan pandangan yang disatukan untuk membentuk strategi yang teguh—sentiasa mengekalkan akauntabiliti manusia.',
      },
    ],
  },

  // AI Red Teaming Section
  aiRedTeaming: {
    title: 'AI Red Teaming',
    subtitle: 'Biarkan AI memainkan peranan CEO pesaing anda',
    description:
      'Paksa AI mencari kelemahan yang paling mungkin dieksploitasi terhadap anda, sebelum pesaing anda melakukannya.',
    questions: [
      'Jika pesaing utama kita melancarkan kempen agresif pada suku hadapan, apakah sudut yang paling merosakkan yang akan mereka gunakan?',
      'Apakah 3 kelemahan teratas yang tidak dipertahankan yang boleh dieksploitasi oleh pesaing bermodal besar sekarang?',
      'Segmen pasaran manakah yang paling terdedah untuk direbut oleh tawaran pesaing?',
      'Apakah andaian strategik yang kita pegang yang paling mungkin salah?',
    ],
  },

  // Production Observations Section
  productionObservations: {
    title: '4 Pemerhatian Utama daripada AI dalam Pengeluaran',
    subtitle: 'Pengajaran yang diperoleh dengan susah payah daripada pelaksanaan AI berbilang model jangka panjang',
    observations: [
      {
        title: 'Hanyutan Keperluan',
        description:
          'Konteks berpecah-pecah dalam utas yang panjang. Model menyimpang daripada matlamat strategik awal. Sentiasa tetapkan semula kepada prinsip asas.',
      },
      {
        title: 'Tidak Dioptimumkan untuk Kualiti',
        description:
          'Model menghasilkan logik yang cacat dengan penuh keyakinan. Wujudkan pengesahan manusia yang jelas untuk keputusan berisiko tinggi.',
      },
      {
        title: 'Keluasan Tanpa Kedalaman',
        description:
          'Output AI menawarkan liputan yang mengagumkan tetapi terlepas kes pinggir kritikal yang menentukan kejayaan dunia sebenar.',
      },
      {
        title: 'Perangkap Delegasi',
        description:
          'Menyerahkan strategi kepada AI mungkin memberi hasil yang pantas, tetapi kelajuan tanpa ketepatan ialah liabiliti.',
      },
    ],
  },

  // AI Moats Section
  aiMoats: {
    title: 'Membina Benteng AI Jangka Panjang',
    subtitle: 'Kesan pengkompaunan daripada penerimaan awal AI',
    description:
      'Kelebihan AI berkompaun dari semasa ke semasa. Pelopor membina benteng data dan aliran kerja yang tidak dapat diatasi oleh pengguna lewat, walau apa pun bajetnya.',
    timeline: [
      {
        period: 'Bulan 1-3',
        title: 'Penerimaan',
        description: 'Melaksanakan alat, membina pustaka gesaan dan memperoleh keuntungan kecekapan awal.',
      },
      {
        period: 'Bulan 4-6',
        title: 'Integrasi',
        description: 'AI menjadi sebati dalam proses teras. Pengetahuan organisasi mula berkompaun.',
      },
      {
        period: 'Bulan 7-12',
        title: 'Pensistematikan',
        description:
          'Sistem AI saling menyuap. Data pelanggan memperhalusi strategi produk; data jualan memaklumkan pemasaran.',
      },
      {
        period: 'Tahun 2+',
        title: 'Pengkompaunan',
        description: 'Benteng data secara eksponen dan gelung maklum balas yang mengukuh diri terbentuk.',
      },
    ],
  },

  // PPTX Showcase (Bahasa Melayu)
  pptShowcase: {
    title: 'Dek Slaid tentang Aplikasi AI',
    subtitle: 'Pratonton dan muat turun dwibahasa',
    description:
      'Tiga dek slaid contoh yang menunjukkan bagaimana satu rangka kerja aplikasi AI boleh dipindahkan merentasi pengujian, politik dan strategi perniagaan.',
    conclusionText:
      'Dalam era sumber pengkomputeran, model dan pengetahuan yang semakin melimpah, menguasai satu rangka kerja aplikasi AI sering membolehkan perpindahan pantas merentasi pelbagai industri dan bidang.',
    caseLabel: 'Kes',
    caseExample: 'Automasi Ujian → Muslihat Politik → Strategi Perniagaan',
    items: [
      {
        id: 'amplifier',
        filename: 'AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides.pptx',
        title: 'AI sebagai Penguat — Edisi Cina',
        caption:
          'Dalam era sumber pengkomputeran, model dan pengetahuan yang semakin melimpah, menguasai satu rangka kerja aplikasi AI membolehkan perpindahan pantas ke pelbagai industri dan bidang.',
      },
      {
        id: 'testing',
        filename: 'AI_in_Software_Test_Automation_ByErHockChiye.pptx',
        title: 'AI dalam Automasi Ujian Perisian',
        caption: 'Contoh aplikasi praktikal AI dalam automasi ujian perisian dan perpindahan rangka kerja.',
      },
      {
        id: 'politics',
        filename: 'AI政治策略课程_完整版.pptx',
        title: 'Kursus Strategi Politik AI',
        caption:
          'Kes aplikasi AI dan rangka kerja strategi untuk pilihan raya dan penggerakan organisasi politik.',
      },
    ],
    preview: 'Pratonton',
    download: 'Muat Turun',
  },

  // Footer
  footer: {
    aboutTitle: 'Tentang Laman Ini',
    aboutText:
      'Sumber pendidikan ini meneroka bagaimana AI memperkuat keupayaan organisasi—sama ada baik atau buruk. Prinsip strategik yang dibentangkan di sini diambil daripada kajian kes dunia sebenar dan amalan terbaik dalam pelaksanaan AI.',
    keyTakeaway: 'Rumusan Utama',
    keyTakeawayText:
      'AI tidak menjadikan anda lebih bijak. Ia memperkuat apa yang sudah anda lakukan. Persoalannya bukan sama ada untuk menggunakan AI—tetapi sama ada strategi anda cukup kukuh untuk diperkuatkan.',
  },
};
