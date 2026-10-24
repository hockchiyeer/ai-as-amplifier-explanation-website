// Tri-lingual content configuration for the AI Amplifier website (EN, ZH, BM)
export type Language = "en" | "zh" | "bm";

export const i18n = {
  en: {
  "nav": {
    "home": "Home",
    "threeEffects": "Three Effects",
    "mirrorPrinciple": "Mirror Principle",
    "aiParadigms": "AI Paradigms",
    "caseStudies": "Case Studies",
    "useCases": "Use Cases",
    "promptingGuide": "Prompting Guide",
    "vibeCoding": "Vibe Coding",
    "strategicInsights": "Strategy",
    "crossModelValidation": "Validation",
    "aiRedTeaming": "Red Teaming",
    "productionObservations": "Observations",
    "subtractPrinciple": "Subtract Principle",
    "aiMoats": "AI Moats",
    "keyTakeaways": "Takeaways",
    "pptShowcase": "Slides",
    "language": "English"
  },
  "learningStatus": {
    "tutorialTitle": "Interactive Step-by-Step AI Strategy Tutorial",
    "badge": "Self-Paced Step-by-Step Tutorial · 15 Modules",
    "module": "Module",
    "step": "Step",
    "of": "of",
    "progress": "Tutorial Progress",
    "completed": "Completed",
    "markUnderstood": "Mark as Understood",
    "understood": "Understood",
    "slideEvidence": "Slide Evidence",
    "viewSlide": "View Authentic Slide",
    "closeSlide": "Close Slide Preview",
    "startLearning": "Start Step 1: Three Effects",
    "continueLearning": "Continue to Step",
    "nextModule": "Next Step",
    "prevModule": "Previous Step",
    "resetProgress": "Reset Progress",
    "allModulesCompleted": "All 15 Modules Completed! You have mastered the AI strategy framework."
  },
  "hero": {
    "mainHeading": "AI as an Amplifier, Multiplier, and Compounder",
    "subheading": "How AI magnifies your competitive advantage—or accelerates your strategic mistakes.",
    "description": "In the age of abundant computing resources, AI doesn't make you smarter. It amplifies what you already do—for better or worse. Learn how to harness AI as a strategic multiplier while avoiding the pitfalls that turn competitive advantages into compounded failures.",
    "cta": "Explore the Three Effects"
  },
  "threeEffects": {
    "title": "The Three Effects of AI Deployment",
    "subtitle": "How AI amplifies, multiplies, and compounds your organizational capabilities",
    "amplifier": {
      "title": "The Amplifier Effect",
      "icon": "⚡",
      "description": "AI magnifies every action's impact—whether good or bad. A correct strategy produces outsized returns; a flawed strategy accelerates failure. AI doesn't create strategy; it exposes and amplifies what's already there.",
      "keyPoint": "Faster · Cheaper · More Efficient—in the direction you're already heading"
    },
    "multiplier": {
      "title": "The Multiplier Effect",
      "icon": "✖",
      "description": "AI multiplies your team's output and reach across channels, markets, and skill domains—operating where humans cannot. But when AI goes wrong, it also multiplies errors, misinformation, and poor decisions across the entire organization.",
      "keyPoint": "10× the output · 10× the risk if strategy is flawed"
    },
    "compounder": {
      "title": "The Compounder Effect",
      "icon": "📈",
      "description": "AI advantages compound over time. Teams building AI systems today gain exponential competitive advantage over rivals still relying on linear human processes. But if built on flawed strategy, AI compounds errors just as relentlessly—pushing organizations toward increasingly costly, irreversible outcomes.",
      "keyPoint": "Exponential advantage or exponential decline—compounding works both ways"
    }
  },
  "mirrorPrinciple": {
    "title": "The Mirror Principle",
    "subtitle": "AI Reflects What You Already Are",
    "description": "AI is a mirror of your organization's operating model. It doesn't fix weak strategies—it exposes them faster and at greater scale. The same AI system produces radically different outcomes depending on the quality of the strategy it amplifies.",
    "rule": "AI does not repair weak business strategy. It only makes consequences appear faster—for better or worse.",
    "inputLabel": "INPUT",
    "outputLabel": "OUTPUT",
    "scenarios": {
      "smart": {
        "title": "Smart Organization",
        "emoji": "✅",
        "label": "AI Accelerates Success",
        "input": "Clear positioning, sound processes, quality data, good judgment",
        "output": "Faster clarity, accelerated learning, compounding growth"
      },
      "mediocre": {
        "title": "Mediocre Organization",
        "emoji": "⚠️",
        "label": "AI Copies Mediocrity",
        "input": "Unclear positioning, average processes, mixed data quality",
        "output": "More output, but not necessarily more advantage"
      },
      "defective": {
        "title": "Defective Organization",
        "emoji": "❌",
        "label": "AI Amplifies Failure",
        "input": "Flawed positioning, broken processes, poor data, weak judgment",
        "output": "Faster failure, amplified waste, compounded internal friction"
      }
    }
  },
  "aiParadigms": {
    "title": "Two AI Paradigms",
    "subtitle": "Understanding Language Generators vs. Task Executors",
    "bestForLabel": "Best For",
    "promptingTipLabel": "Prompting Tip",
    "paradigm1": {
      "title": "Language Generator",
      "tools": [
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com"
        },
        {
          "name": "Google Gemini",
          "url": "https://gemini.google.com"
        },
        {
          "name": "DeepSeek",
          "url": "https://www.deepseek.com"
        }
      ],
      "bestFor": [
        "Brainstorming and strategic ideation",
        "Long-form writing: reports, analysis, narrative articles",
        "Interpretation and expansion within long conversation threads",
        "More economical alternative to IDE-embedded agents"
      ],
      "promptingTip": "Detailed, conversational, context-rich prompts → richer, more comprehensive output"
    },
    "paradigm2": {
      "title": "Task Executor",
      "tools": [
        {
          "name": "Claude AI",
          "url": "https://claude.ai"
        },
        {
          "name": "Manus AI",
          "url": "https://manus.im"
        },
        {
          "name": "Cursor Agents",
          "url": "https://cursor.com"
        }
      ],
      "bestFor": [
        "Autonomous execution of multi-step workflows",
        "Coordinating tools, APIs, files, and systems",
        "Programming, automation, and agentic operations",
        "Tasks with clear end states"
      ],
      "promptingTip": "Concise, task-focused, explicit output format → maximizes agent output quality"
    }
  },
  "caseStudies": {
    "title": "Real-World Case Studies",
    "subtitle": "How AI amplifies both success and failure",
    "scenarioLabel": "Scenario",
    "outcomeLabel": "Outcome",
    "lessonLabel": "Core Business Lesson",
    "case1": {
      "title": "Case Study #1: Competitive Attack Content × AI Batch Production",
      "scenario": "A marketing team deployed AI to batch-produce attack-competitor content across LinkedIn and social channels. However, the underlying strategy had already triggered strong industry backlash.",
      "outcome": "The more content they produced with AI, the more the negative effects amplified. More content ≠ more influence—it became larger-scale damage.",
      "lesson": "If your strategy is already triggering backlash, using AI to produce more content only magnifies the problem tenfold. Wrong direction × faster speed = faster failure."
    },
    "case2": {
      "title": "Case Study #2: Premium Product Meets Negative Brand Association",
      "scenario": "A high-quality product or executive becomes associated with a negatively perceived brand. AI-generated content then amplifies the wrong signal at massive scale.",
      "outcome": "The product's strong track record and real customer value cannot overcome the brand association barrier. More AI content = faster rejection from key market segments.",
      "lesson": "AI content amplifies existing perceptions—both positive and negative. A strong product attached to a weak brand signal will see AI accelerate the rejection, not overcome it."
    }
  },
  "useCases": {
    "title": "Where AI Creates Leverage",
    "subtitle": "Business functions where AI delivers maximum value",
    "sales": {
      "title": "Sales",
      "cases": [
        "Customer research and discovery",
        "Call preparation and strategy",
        "Follow-up email drafting",
        "Objection handling and rebuttals"
      ]
    },
    "marketing": {
      "title": "Marketing",
      "cases": [
        "Message testing and validation",
        "Audience segmentation and targeting",
        "Content variant generation",
        "Campaign ideation and strategy"
      ]
    },
    "operations": {
      "title": "Operations",
      "cases": [
        "Process documentation and summarization",
        "SOP (Standard Operating Procedure) drafting",
        "Knowledge retrieval and management",
        "Workflow automation and optimization"
      ]
    },
    "product": {
      "title": "Product",
      "cases": [
        "User feedback integration and analysis",
        "Roadmap assumptions and validation",
        "Feature prioritization and ranking",
        "Product strategy refinement"
      ]
    },
    "qa": {
      "title": "QA",
      "cases": [
        "Test framework and skeleton generation",
        "Edge case identification",
        "Regression testing strategy",
        "Defect summarization and reporting"
      ]
    },
    "competitiveIntelligence": {
      "title": "Competitive Intelligence",
      "cases": [
        "Market scanning and monitoring",
        "Scenario planning and forecasting",
        "Competitor positioning analysis",
        "Industry trend identification"
      ]
    }
  },
  "promptingGuide": {
    "title": "Strategic Prompting Guide",
    "subtitle": "Eliciting Honest, High-Quality AI Output",
    "introduction": "The best AI results come from asking the right strategic questions—not just requesting content production. Here's how to prompt for genuine insight.",
    "keyInsight": "Request honest, clear strategic judgment from AI—not content production. This is where AI's true value emerges.",
    "doLabel": "✓ DO",
    "dontLabel": "✗ DON'T",
    "examples": [
      {
        "correct": "What customer needs are we currently overlooking?",
        "incorrect": "Write a product launch press release"
      },
      {
        "correct": "Which strategic bets have the highest impact-to-investment ratio?",
        "incorrect": "Generate 20 social media posts for our brand"
      },
      {
        "correct": "Where are we most vulnerable to competitive disruption?",
        "incorrect": "Draft attack content against competitors"
      },
      {
        "correct": "Be honest: what are the blind spots in our strategy?",
        "incorrect": "Write 10 email templates for the sales team"
      },
      {
        "correct": "What are the most viable quick-win opportunities in the next 90 days?",
        "incorrect": "Create a Q3 investor newsletter"
      }
    ]
  },
  "vibeCoding": {
    "title": "Vibe Coding: AI-Augmented Development",
    "subtitle": "Using AI to amplify coding productivity and quality",
    "description": "Vibe Coding is the practice of using AI as a collaborative partner to amplify development velocity, code quality, and problem-solving capability. Rather than replacing developers, AI augments their judgment and accelerates their output.",
    "usefulTip": "<strong>Useful Tip:</strong> Always develop a fully functioning application skeleton using an agentic tool (such as <a href=\"https://manus.im/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Manus AI</a> or <a href=\"https://claude.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Claude AI</a>), a canvas/AI coding tool (<a href=\"https://gemini.google.com/canvas\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google Gemini Canvas</a>, <a href=\"https://chatgpt.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">ChatGPT Canvas</a>), or even ask <a href=\"https://deepseek.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">DeepSeek</a> to write a Single Page Application skeleton that is downloadable or runnable on the Web. Then, download the entire application source code to further vibe-code, refactor and expand the application features using different AI models' IDE plugins or extensions (<a href=\"https://antigravity.google/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Antigravity</a>, <a href=\"https://github.com/features/copilot\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">VS Code MS Copilot</a>, <a href=\"https://openai.com/codex/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">VS Code Codex Extension</a>, etc.). This allows the AI to fully leverage its \"Compounding Effect\" on a solid foundation, rather than attempting to generate every feature you envision in the absence of sufficient context, data, or system development and design details.",
    "tools": {
      "title": "Real-World AI Tools in Action",
      "bugGenie": {
        "name": "BugGenie AI",
        "subtitle": "Bug Ticket Drafting tool driven by <a href=\"https://gemini.google.com/canvas\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google Gemini's built-in Canvas feature</a>",
        "description": "Transforms screenshots and supporting artifacts into structured, professional bug reports directly in the browser—no backend or installation required.",
        "features": [
          "Driven by <a href=\"https://gemini.google.com/canvas\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google Gemini's Canvas feature</a> or via <a href=\"https://aistudio.google.com/apps\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google AI Studio's Build Apps</a> feature",
          "Browser-based—no install, no build step",
          "Accepts screenshots & supporting artifacts",
          "Outputs structured, ready-to-file bug tickets"
        ],
        "githubLink": {
          "label": "Github Source Code",
          "url": "https://github.com/hockchiyeer/ai-powered-auto-bug-ticket-logger"
        },
        "aiStudioLink": {
          "label": "Google AI Studio-enabled Application",
          "url": "https://aistudio.google.com/apps/ce12cbda-aa17-405d-9018-96a8ef249d29?showPreview=true&showAssistant=true"
        },
        "canvasLink": {
          "label": "Google Gemini Canvas-enabled Application",
          "url": "https://gemini.google.com/share/5a9916e135f0"
        }
      },
      "agileMaturity": {
        "name": "Agile Maturity Assessment App",
        "subtitle": "Browser-Native Static JavaScript Application",
        "description": "A fully self-contained assessment app that runs by opening index.html—no build step, no package install, no dev server required.",
        "features": [
          "100% browser-native—pure HTML, CSS & JS",
          "Zero-dependency: no npm, no bundler, no server",
          "Open index.html directly to run locally",
          "Deployable to GitHub Pages in one step"
        ],
        "githubLink": {
          "label": "Github Source Code",
          "url": "https://github.com/hockchiyeer/google-ai-studio-generated-agile-maturity-assessment-app"
        },
        "appLink": {
          "label": "Application",
          "url": "https://hockchiyeer.github.io/google-ai-studio-generated-agile-maturity-assessment-app"
        }
      }
    },
    "toolRankings": {
      "title": "AI Tool Rankings for Coding Tasks",
      "subtitle": "Efficiency, accuracy & output quality (personal experience)",
      "tools": [
        {
          "rank": 1,
          "name": "OpenAI Codex - GPT-5.5 Ultra High Thinking",
          "url": "https://openai.com/codex/",
          "score": "9.0/10"
        },
        {
          "rank": 2,
          "name": "Google Antigravity - Claude Sonnet 4.6 High Thinking",
          "url": "https://antigravity.google/",
          "score": "7.8/10"
        },
        {
          "rank": 3,
          "name": "Cursor Agents",
          "url": "https://cursor.com/agents",
          "score": "6.8/10"
        },
        {
          "rank": 4,
          "name": "GitHub Copilot Free - GPT-4.1 mini model",
          "url": "https://github.com/features/copilot",
          "score": "5.8/10"
        },
        {
          "rank": 5,
          "name": "Google Antigravity - Gemini Pro 3.1 High Thinking",
          "url": "https://antigravity.google/",
          "score": "5.6/10"
        }
      ]
    }
  },
  "strategicInsights": {
    "title": "The Critical Strategic Question",
    "subtitle": "Reframe competitive advantage through AI capacity reallocation",
    "question": "If your team completely stopped spending time on reactive tasks—responding to competitor announcements, generating routine reports, managing low-value communications—and redirected that freed capacity to AI-augmented strategic work, what investment opportunities would you pursue?",
    "insight": "This question is often closer to the real source of competitive advantage than: \"How do we respond to our competitor's latest product launch?\"",
    "keyPoint": "The real competitive advantage lies not in doing more, but in redirecting human capacity from reactive work to strategic thinking—amplified by AI."
  },
  "subtractPrinciple": {
    "title": "The Subtract Principle",
    "subtitle": "When AI spirals, reset—don't amplify",
    "description": "When an AI trajectory becomes unproductive or misaligned, the solution is not to apply more compute or push harder. Instead, reset to a clean state, switch models, or inject fresh perspective.",
    "corePrinciplesLabel": "Core Principles:",
    "principles": [
      "More compute on a flawed trajectory is brute-force in the wrong direction",
      "Reset to clean state when AI output quality degrades",
      "Switch models to gain fresh perspective and approach",
      "Inject human judgment to redirect the trajectory",
      "Recognize when amplification is making things worse, not better"
    ]
  },
  "keyTakeaways": {
    "title": "Key Takeaways",
    "subtitle": "Core principles for AI deployment success",
    "takeaways": [
      {
        "icon": "⚡",
        "title": "AI Is an Amplifier—Direction Matters Most",
        "description": "AI doesn't determine outcome—your strategy does. Correct strategy gets amplified to produce outsized returns. Flawed strategy gets amplified to accelerate failure. Fix direction first."
      },
      {
        "icon": "✖",
        "title": "The Multiplier Works Both Ways",
        "description": "Every AI deployment is a force multiplier. Mass-producing flawed messaging at scale is not strength—it is weakness at volume. Strategic clarity multiplied by AI is the only path to durable advantage."
      },
      {
        "icon": "📈",
        "title": "The Compounder Rewards Early Movers",
        "description": "AI advantages compound via data, workflow, and speed moats. Teams building AI systems today create leads that late adopters cannot close—regardless of budget."
      },
      {
        "icon": "◆",
        "title": "Own the Strategy—Use AI to Accelerate",
        "description": "Generate frameworks, retrieve knowledge, analyze data, and scale execution with AI. But always own the strategic logic, core assumptions, and quality bar yourself."
      },
      {
        "icon": "−",
        "title": "The Subtract Principle: Reset, Not Amplify",
        "description": "When AI spirals—reset to clean state, switch models, inject fresh perspective. More compute on a flawed trajectory is brute-force in the wrong direction."
      }
    ]
  },
  "aiJourney": {
    "title": "Your AI Journey",
    "subtitle": "Starts here",
    "tagline": "Not by using AI to say more, but by using AI to see more clearly what you are actually doing",
    "steps": [
      {
        "step": 1,
        "title": "Amplify",
        "description": "the right strategy"
      },
      {
        "step": 2,
        "title": "Multiply",
        "description": "effective execution"
      },
      {
        "step": 3,
        "title": "Compound",
        "description": "competitive advantages"
      }
    ],
    "cta": "Start your transformation today",
    "author": "Er Hock Chiye | AI Use Case Practitioner"
  },
  "crossModelValidation": {
    "title": "Cross-Model Validation Workflow",
    "subtitle": "Reducing hallucinations and expanding context with <a href=\"https://notebooklm.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google NotebookLM</a>",
    "description": "Never stop at a single AI model's conclusion. Use the same prompt across multiple models to cross-validate and synthesize deeper insights.",
    "steps": [
      {
        "title": "Establish Baseline",
        "description": "Build an initial knowledge base by importing PDFs, reports, and data into NotebookLM."
      },
      {
        "title": "Parallel Testing",
        "description": "Send the identical prompt to multiple models (e.g., <a href=\"https://chatgpt.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">ChatGPT</a>, <a href=\"https://gemini.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Gemini</a>, <a href=\"https://claude.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Claude</a>, <a href=\"https://deepseek.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">DeepSeek</a>, <a href=\"https://chat.qwen.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Qwen</a>)."
      },
      {
        "title": "Synthesize & Align",
        "description": "Export the responses and import them back into NotebookLM to summarize agreements and pinpoint divergence."
      },
      {
        "title": "Final Judgment",
        "description": "Use the consolidated insights to form a robust strategy—always retaining human accountability."
      }
    ]
  },
  "aiRedTeaming": {
    "title": "AI Red Teaming",
    "subtitle": "Let AI play your competitor's CEO",
    "description": "Force AI to find the vulnerabilities you are most likely to be exploited on, before your competitors do.",
    "questions": [
      "If our top competitor launched an aggressive campaign next quarter, what would be their most destructive angle?",
      "What are the top 3 undefended weaknesses a well-funded rival could exploit right now?",
      "Which market segment is most vulnerable to being poached by a competitor's offer?",
      "What are the strategic assumptions we hold that are most likely to be wrong?"
    ]
  },
  "productionObservations": {
    "title": "4 Key Observations from AI in Production",
    "subtitle": "Hard-earned lessons from long-term, multi-model AI deployment",
    "observations": [
      {
        "title": "Requirement Drift",
        "description": "Context fragments over long threads. Models deviate from the initial strategic goal. Always reset to first principles."
      },
      {
        "title": "Not Optimized for Quality",
        "description": "Models confidently produce flawed logic. Establish explicit human validation for high-stakes decisions."
      },
      {
        "title": "Breadth Without Depth",
        "description": "AI outputs offer impressive coverage but miss critical edge cases that determine real-world success."
      },
      {
        "title": "The Delegation Trap",
        "description": "Outsourcing strategy to AI might yield fast results, but speed without accuracy is a liability."
      }
    ]
  },
  "aiMoats": {
    "title": "Building Long-Term AI Moats",
    "subtitle": "The compounding effect of early AI adoption",
    "description": "AI advantages compound over time. Early movers build data and workflow moats that late adopters cannot overcome, regardless of budget.",
    "timeline": [
      {
        "period": "Months 1-3",
        "title": "Adoption",
        "description": "Deploying tools, building prompt libraries, and capturing early efficiency gains."
      },
      {
        "period": "Months 4-6",
        "title": "Integration",
        "description": "AI becomes embedded in core processes. Organizational knowledge begins to compound."
      },
      {
        "period": "Months 7-12",
        "title": "Systematization",
        "description": "AI systems feed each other. Customer data refines product strategy; sales data informs marketing."
      },
      {
        "period": "Year 2+",
        "title": "Compounding",
        "description": "Exponential data moats and self-reinforcing feedback loops are established."
      }
    ]
  },
  "pptShowcase": {
    "title": "Slide Decks on AI Applications",
    "subtitle": "Bilingual previews and downloads",
    "description": "Three example slide decks demonstrating how a single AI application framework transfers across testing, politics, and business strategy.",
    "conclusionText": "In the era of increasingly abundant compute, models, and knowledge resources, mastering an AI application framework often allows rapid migration across multiple industries and domains.",
    "caseLabel": "Case",
    "caseExample": "Test Automation → Politics Maneuver → Business Strategy",
    "items": [
      {
        "id": "amplifier",
        "filename": "AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides.pptx",
        "title": "AI as Amplifier — Chinese Edition",
        "caption": "在算力、模型与知识资源日益充裕的时代，掌握一种 AI 应用框架可以快速迁移到多个行业与领域。"
      },
      {
        "id": "testing",
        "filename": "AI_in_Software_Test_Automation_ByErHockChiye.pptx",
        "title": "AI in Software Test Automation",
        "caption": "AI 在软件测试自动化中的实战应用与框架迁移示例。"
      },
      {
        "id": "politics",
        "filename": "AI政治策略课程_完整版.pptx",
        "title": "AI Political Strategy Course",
        "caption": "选举与政治组织动员的 AI 应用案例与策略框架。"
      }
    ],
    "preview": "Preview",
    "download": "Download"
  },
  "footer": {
    "aboutTitle": "About This Site",
    "aboutText": "This educational resource explores how AI amplifies organizational capabilities—for better or worse. The strategic principles presented here are drawn from real-world case studies and best practices in AI deployment.",
    "keyTakeaway": "Key Takeaway",
    "keyTakeawayText": "AI doesn't make you smarter. It amplifies what you already do. The question isn't whether to use AI—it's whether your strategy is strong enough to be amplified."
  }
},
  zh: {
  "nav": {
    "home": "首页",
    "threeEffects": "三大效应",
    "mirrorPrinciple": "镜像原理",
    "aiParadigms": "AI范式",
    "caseStudies": "案例研究",
    "useCases": "应用场景",
    "promptingGuide": "提示指南",
    "vibeCoding": "敏捷编码",
    "strategicInsights": "战略洞察",
    "crossModelValidation": "交叉验证",
    "aiRedTeaming": "红队分析",
    "productionObservations": "实战观察",
    "subtractPrinciple": "减法原则",
    "aiMoats": "AI 护城河",
    "keyTakeaways": "核心要点",
    "pptShowcase": "幻灯片",
    "language": "中文"
  },
  "learningStatus": {
    "tutorialTitle": "AI 战略核心认知交互式分步教程",
    "badge": "自主掌控节奏 · 15 大核心模块逐步进阶",
    "module": "模块",
    "step": "步骤",
    "of": "/",
    "progress": "教程总进度",
    "completed": "已掌握",
    "markUnderstood": "标记为已掌握",
    "understood": "已掌握",
    "slideEvidence": "原版幻灯片实证",
    "viewSlide": "查看原版幻灯片",
    "closeSlide": "关闭幻灯片预览",
    "startLearning": "开始第一步：三大效应",
    "continueLearning": "继续学习：第",
    "nextModule": "下一模块",
    "prevModule": "上一模块",
    "resetProgress": "重置学习进度",
    "allModulesCompleted": "恭喜！全部 15 个模块已掌握。你已完整建立现代 AI 战略思维框架！"
  },
  "hero": {
    "mainHeading": "AI 作为放大器、倍增器与复利器",
    "subheading": "AI 如何放大你的竞争优势——或加速你的战略失误。",
    "description": "在算力充裕的时代，AI 不会让你变得更聪明。它只会放大你已经在做的事——无论好坏。学习如何将 AI 作为战略倍增器，同时避免那些将竞争优势转化为复利失败的陷阱。",
    "cta": "探索三大效应"
  },
  "threeEffects": {
    "title": "AI 部署的三大效应",
    "subtitle": "AI 如何放大、倍增并复利你的组织能力",
    "amplifier": {
      "title": "放大器效应",
      "icon": "⚡",
      "description": "AI 放大每一个行动的影响——无论好坏。正确的战略会产生超额回报；有缺陷的战略则会加速失败。AI 不会创造战略；它只会暴露并放大你原本已有的战略。",
      "keyPoint": "更快 · 更便宜 · 更高效——沿着你已经前进的方向"
    },
    "multiplier": {
      "title": "倍增器效应",
      "icon": "✖",
      "description": "AI 能倍增团队在各渠道、市场和职能领域的有效产出与覆盖范围——在人力无法兼顾之处同时运作。但当 AI 出错时，也会在整个组织中复制错误、错误信息和糟糕的决策。",
      "keyPoint": "产出增加 10 倍 · 如果战略有缺陷，风险也增加 10 倍"
    },
    "compounder": {
      "title": "复利器效应",
      "icon": "📈",
      "description": "AI 带来的优势会随时间复利累积。今天构建 AI 系统的团队，将比仍依赖线性人工流程的竞争对手获得指数级领先优势。但若建立在有缺陷的战略之上，AI 同样会让错误随时间复利累积，把组织推向代价越来越高、越来越难以逆转的结局。",
      "keyPoint": "指数级优势或指数级衰退——复利在两个方向都起作用"
    }
  },
  "mirrorPrinciple": {
    "title": "镜像原理",
    "subtitle": "AI 反映你已有的样子",
    "description": "AI 是你组织运作模式的一面镜子。它不会修复薄弱的商业战略，它只会让后果更快显现——无论好坏。同样的 AI 系统根据它放大的战略质量而产生截然不同的结果。",
    "rule": "AI 不会修复薄弱的商业战略。它只会让后果更快显现——无论好坏。",
    "inputLabel": "输入",
    "outputLabel": "产出",
    "scenarios": {
      "smart": {
        "title": "聪慧组织",
        "emoji": "✅",
        "label": "AI 加速成功",
        "input": "清晰定位、健全流程、优质数据、良好判断",
        "output": "更快的清晰度、加速学习、复利增长"
      },
      "mediocre": {
        "title": "平庸组织",
        "emoji": "⚠️",
        "label": "AI 复制平庸",
        "input": "模糊定位、平均流程、混合数据质量",
        "output": "更多产出，但不一定带来更多优势"
      },
      "defective": {
        "title": "有缺陷的组织",
        "emoji": "❌",
        "label": "AI 放大失败",
        "input": "有缺陷的定位、破碎流程、劣质数据、薄弱判断",
        "output": "更快失败、放大浪费、复合内部摩擦"
      }
    }
  },
  "aiParadigms": {
    "title": "两种 AI 范式",
    "subtitle": "理解语言生成器与任务执行者",
    "bestForLabel": "最佳应用场景",
    "promptingTipLabel": "提示词技巧",
    "paradigm1": {
      "title": "语言生成器",
      "tools": [
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com"
        },
        {
          "name": "Google Gemini",
          "url": "https://gemini.google.com"
        },
        {
          "name": "DeepSeek",
          "url": "https://www.deepseek.com"
        }
      ],
      "bestFor": [
        "头脑风暴与战略构思",
        "长篇写作：报告、分析、叙述性文章",
        "在长对话线程中进行解读与扩展",
        "比 IDE 内置智能体更经济的替代方案"
      ],
      "promptingTip": "详细、对话式、上下文丰富的提示 → 更丰富、更全面的输出"
    },
    "paradigm2": {
      "title": "任务执行者",
      "tools": [
        {
          "name": "Claude AI",
          "url": "https://claude.ai"
        },
        {
          "name": "Manus AI",
          "url": "https://manus.im"
        },
        {
          "name": "Cursor Agents",
          "url": "https://cursor.com"
        }
      ],
      "bestFor": [
        "自主执行多步骤工作流",
        "协调工具、API、文件与系统",
        "编程、自动化与智能体操作",
        "具有明确终态的任务"
      ],
      "promptingTip": "简洁、聚焦任务、明确输出格式 → 最大化智能体输出质量"
    }
  },
  "caseStudies": {
    "title": "真实案例研究",
    "subtitle": "AI 如何放大成功与失败",
    "scenarioLabel": "情境",
    "outcomeLabel": "后果",
    "lessonLabel": "核心商业启示",
    "case1": {
      "title": "案例研究 #1：竞争对手攻击型内容 × AI 批量生产",
      "scenario": "某企业营销团队部署 AI，在领英及社交渠道上批量生产攻击竞争对手的内容。而其底层战略本身已经引发了业内的强烈反弹。",
      "outcome": "他们用 AI 生产得越多，负面效应只会被放大十倍。更多内容不等于更多影响力——而是更大规模的损害。",
      "lesson": "如果你的战略本就已经引发反弹，用 AI 生产得越多，负面效应只会被放大十倍。方向错误 × 速度更快 = 更快走向失败。"
    },
    "case2": {
      "title": "案例研究 #2：优质产品遭遇负面品牌联想",
      "scenario": "一个优质产品或高管与一个负面感知的品牌产生关联。AI 内容会把错误的信号大规模放大。",
      "outcome": "产品出色的业绩记录和真实的客户价值无法克服品牌联想障碍。更多 AI 内容 = 关键细分群体更快拒绝。",
      "lesson": "AI 内容放大现有认知——无论积极还是消极。一个强产品附带弱品牌信号将看到 AI 加速拒绝，而不是克服它。"
    }
  },
  "useCases": {
    "title": "AI 创造杠杆的地方",
    "subtitle": "AI 价值最大的业务职能",
    "sales": {
      "title": "销售",
      "cases": [
        "客户调研与发现",
        "通话准备与策略",
        "跟进邮件起草",
        "异议处理与反驳"
      ]
    },
    "marketing": {
      "title": "市场营销",
      "cases": [
        "信息测试与验证",
        "受众细分与定位",
        "内容变体生成",
        "活动创意与策略"
      ]
    },
    "operations": {
      "title": "运营",
      "cases": [
        "流程文档与总结",
        "SOP（标准操作程序）起草",
        "知识检索与管理",
        "工作流自动化与优化"
      ]
    },
    "product": {
      "title": "产品",
      "cases": [
        "用户反馈整合与分析",
        "路线图假设与验证",
        "功能优先级排序",
        "产品战略优化"
      ]
    },
    "qa": {
      "title": "质量保证",
      "cases": [
        "测试框架与骨架生成",
        "边界场景识别",
        "回归测试策略",
        "缺陷总结与报告"
      ]
    },
    "competitiveIntelligence": {
      "title": "竞争情报",
      "cases": [
        "市场扫描与监控",
        "情景规划与预测",
        "竞争对手定位分析",
        "行业趋势识别"
      ]
    }
  },
  "promptingGuide": {
    "title": "战略提示指南",
    "subtitle": "引出诚实、高质量的 AI 输出",
    "introduction": "最好的 AI 结果来自提出正确的战略问题——而不仅仅是要求内容生产。以下是如何提示以获得真正洞察的方法。",
    "keyInsight": "要求 AI 给出诚实、清晰的战略判断——而不是内容生产。这是 AI 真正价值所在。",
    "doLabel": "✓ 推荐做法（宜）",
    "dontLabel": "✗ 避免做法（忌）",
    "examples": [
      {
        "correct": "我们目前忽视了哪些客户需求？",
        "incorrect": "写一份产品发布新闻稿"
      },
      {
        "correct": "哪些战略押注的影响力/投入比最高？",
        "incorrect": "为我们的品牌生成 20 条社媒帖文"
      },
      {
        "correct": "我们最容易受到竞争颠覆的地方在哪里？",
        "incorrect": "为领英起草攻击竞争对手的内容"
      },
      {
        "correct": "老实告诉我，我们的战略有哪些盲点。",
        "incorrect": "为销售团队制作 10 份邮件模板"
      },
      {
        "correct": "未来 90 天内最可行的速赢机会是什么？",
        "incorrect": "写我们的 Q3 投资者通讯"
      }
    ]
  },
  "vibeCoding": {
    "title": "敏捷编码：AI 增强开发",
    "subtitle": "使用 AI 放大编码生产力和质量",
    "description": "敏捷编码是将 AI 作为协作伙伴来放大开发速度、代码质量和问题解决能力的实践。AI 不是替代开发者，而是增强他们的判断力并加速他们的输出。",
    "usefulTip": "<strong>实用技巧：</strong> 起步时，优先使用AI代理（<a href=\"https://manus.im/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Manus AI</a>、<a href=\"https://claude.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Claude AI</a>）或Canvas等AI辅助编码工具（<a href=\"https://gemini.google.com/canvas\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google Gemini Canvas</a>、<a href=\"https://chatgpt.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">ChatGPT Canvas</a>），甚至干脆让<a href=\"https://deepseek.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">DeepSeek</a>生成可运行的单页应用原型，确保能在网页端直接预览。之后，下载完整源代码，结合本地IDE的各类AI编程助手插件（如 <a href=\"https://github.com/features/copilot\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Microsoft Copilot</a>、<a href=\"https://openai.com/codex/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">OpenAI Codex</a>、<a href=\"https://antigravity.google/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google Antigravity</a>等），快速扩展应用功能、以及优化用户体验。这能让AI在一个稳固的基础上充分发挥其“复利效应”（Compounding Effect），而不是在缺乏足够上下文、数据或系统开发设计细节的情况下，尝试生成你所设想的每一个功能。",
    "tools": {
      "title": "实际应用中的 AI 工具",
      "bugGenie": {
        "name": "BugGenie AI",
        "subtitle": "由 <a href=\"https://gemini.google.com/canvas\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google Gemini内置Canvas功能</a> 驱动的程序漏洞报告起草工具",
        "description": "将屏幕截图和支持文件转换为结构化的专业错误报告——直接在浏览器中进行，无需后端或安装。",
        "features": [
          "由 <a href=\"https://gemini.google.com/canvas\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google Gemini的Canvas功能</a> 或通过 <a href=\"https://aistudio.google.com/apps\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google AI Studio的Build Apps功能</a> 所驱动",
          "基于浏览器——无需安装、无需构建步骤",
          "接受屏幕截图和支持文件",
          "输出结构化的、可直接提交的错误单据"
        ],
        "githubLink": {
          "label": "Github代码链接",
          "url": "https://github.com/hockchiyeer/ai-powered-auto-bug-ticket-logger"
        },
        "aiStudioLink": {
          "label": "基于Google AI Studio的应用链接",
          "url": "https://aistudio.google.com/apps/ce12cbda-aa17-405d-9018-96a8ef249d29?showPreview=true&showAssistant=true"
        },
        "canvasLink": {
          "label": "基于Google Gemini Canvas的应用链接",
          "url": "https://gemini.google.com/share/5a9916e135f0"
        }
      },
      "agileMaturity": {
        "name": "敏捷成熟度评估应用",
        "subtitle": "浏览器原生静态 JavaScript 应用",
        "description": "一个完全自包含的评估应用，通过打开 index.html 即可运行——无需构建步骤、无需包安装、无需开发服务器。",
        "features": [
          "100% 浏览器原生——纯 HTML、CSS 和 JS",
          "零依赖：无 npm、无打包工具、无服务器",
          "直接打开 index.html 即可本地运行",
          "可一步部署到 GitHub Pages"
        ],
        "githubLink": {
          "label": "Github代码链接",
          "url": "https://github.com/hockchiyeer/google-ai-studio-generated-agile-maturity-assessment-app"
        },
        "appLink": {
          "label": "应用链接",
          "url": "https://hockchiyeer.github.io/google-ai-studio-generated-agile-maturity-assessment-app"
        }
      }
    },
    "toolRankings": {
      "title": "编码任务 AI 工具排名",
      "subtitle": "效率、准确性和输出质量（个人经验）",
      "tools": [
        {
          "rank": 1,
          "name": "OpenAI Codex - GPT-5.5 Ultra High Thinking",
          "url": "https://openai.com/codex/",
          "score": "9.0/10"
        },
        {
          "rank": 2,
          "name": "Google Antigravity - Claude Sonnet 4.6 High Thinking",
          "url": "https://antigravity.google/",
          "score": "7.8/10"
        },
        {
          "rank": 3,
          "name": "Cursor Agents",
          "url": "https://cursor.com/agents",
          "score": "6.8/10"
        },
        {
          "rank": 4,
          "name": "GitHub Copilot Free - GPT-4.1 mini model",
          "url": "https://github.com/features/copilot",
          "score": "5.8/10"
        },
        {
          "rank": 5,
          "name": "Google Antigravity - Gemini Pro 3.1 High Thinking",
          "url": "https://antigravity.google/",
          "score": "5.6/10"
        }
      ]
    }
  },
  "strategicInsights": {
    "title": "关键战略问题",
    "subtitle": "通过 AI 容量重新分配重新框架竞争优势",
    "question": "如果你的团队完全停止花时间在反应性任务上——回应竞争对手公告、生成例行报告、管理低价值沟通——并将释放的容量重新投入到 AI 增强的战略工作中，你会追求什么投资机会？",
    "insight": "这个问题通常比\"我们如何应对竞争对手的最新产品发布？\"更接近真正的竞争优势来源。",
    "keyPoint": "真正的竞争优势不在于做得更多，而在于将人力容量从反应性工作重新分配到战略思维——由 AI 增强。"
  },
  "subtractPrinciple": {
    "title": "减法原理",
    "subtitle": "当 AI 偏离轨道时，重置——不要放大",
    "description": "当 AI 轨迹变得低效或不对齐时，解决方案不是应用更多计算或更用力推动。相反，应该重置到干净状态、切换模型或注入新的视角。",
    "corePrinciplesLabel": "核心原则：",
    "principles": [
      "在有缺陷的轨迹上应用更多计算是在错误方向上的蛮力",
      "AI 输出质量下降时重置到干净状态",
      "切换模型以获得新的视角和方法",
      "注入人类判断力以重定向轨迹",
      "认识到何时放大会使事情变得更糟而不是更好"
    ]
  },
  "keyTakeaways": {
    "title": "核心要点",
    "subtitle": "AI 部署成功的核心原则",
    "takeaways": [
      {
        "icon": "⚡",
        "title": "AI 是放大器——方向最重要",
        "description": "AI 不决定结果——你的战略才决定。正确的战略会被放大以产生超额回报。有缺陷的战略会被放大以加速失败。首先修复方向。"
      },
      {
        "icon": "✖",
        "title": "倍增器双向工作",
        "description": "每个 AI 部署都是一个力量倍增器。大规模生产有缺陷的信息不是力量——而是大规模的弱点。战略清晰度乘以 AI 是唯一的持久优势之路。"
      },
      {
        "icon": "📈",
        "title": "复利器奖励早期采用者",
        "description": "AI 优势通过数据、工作流和速度护城河复利累积。今天构建 AI 系统的团队创造的领先优势是后来者无法弥补的——无论预算多少。"
      },
      {
        "icon": "◆",
        "title": "拥有战略——使用 AI 加速",
        "description": "用 AI 生成框架、检索知识、分析数据并扩展执行。但始终拥有战略逻辑、核心假设和质量标准。"
      },
      {
        "icon": "−",
        "title": "减法原理：重置，不要放大",
        "description": "当 AI 偏离轨道时——重置到干净状态、切换模型、注入新视角。在有缺陷的轨迹上应用更多计算是在错误方向上的蛮力。"
      }
    ]
  },
  "aiJourney": {
    "title": "你的 AI 之旅",
    "subtitle": "从这里开始",
    "tagline": "不是用 AI 说得更多，而是用 AI 更清楚地看到你实际在做什么",
    "steps": [
      {
        "step": 1,
        "title": "放大",
        "description": "正确的战略"
      },
      {
        "step": 2,
        "title": "倍增",
        "description": "有效的执行"
      },
      {
        "step": 3,
        "title": "复利",
        "description": "竞争优势"
      }
    ],
    "cta": "立即开始你的转变",
    "author": "Er Hock Chiye | AI 用例实践者"
  },
  "crossModelValidation": {
    "title": "多模型交叉验证工作流",
    "subtitle": "使用 <a href=\"https://notebooklm.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google NotebookLM</a> 减少幻觉并扩展上下文",
    "description": "不要止步于单一AI模型的总结与结论——用同一提示词在多个模型间交叉验证，才能拓宽内容的广度与深度。",
    "steps": [
      {
        "title": "建立基准",
        "description": "在NotebookLM新建笔记本，导入PDF、研究报告等资料作为基准数据源。"
      },
      {
        "title": "多模型并行测试",
        "description": "使用同一Prompt，同时发给多个大语言模型（如 <a href=\"https://chatgpt.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">ChatGPT</a>、<a href=\"https://gemini.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Gemini</a>、<a href=\"https://claude.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Claude</a>、<a href=\"https://deepseek.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">DeepSeek</a>、<a href=\"https://chat.qwen.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Qwen</a>）。"
      },
      {
        "title": "汇总与对齐",
        "description": "将模型答复导入NotebookLM，一键摘要梳理各模型脉络，提炼共识与分歧。"
      },
      {
        "title": "最终判断",
        "description": "多模型加上多来源文档辅以人工验证，提炼出更客观、全面的深度洞察。"
      }
    ]
  },
  "aiRedTeaming": {
    "title": "AI 红队分析",
    "subtitle": "让AI扮演你竞争对手的CEO",
    "description": "在竞争对手之前，强迫AI找出你最容易被利用的弱点。",
    "questions": [
      "如果我们的头号竞争对手下季度发起一场攻势性的campaign，他们最具破坏力的角度会是什么？",
      "资金充足的对手现在就能利用的三个最该被防守的弱点是什么？",
      "当下哪个市场细分群体最容易被竞争对手的报价拿下？",
      "我们正在做的哪些战略假设最有可能是错的？"
    ]
  },
  "productionObservations": {
    "title": "来自AI生产环境使用的4个关键观察",
    "subtitle": "在长期、多模型AI辅助运营中得来的宝贵经验",
    "observations": [
      {
        "title": "需求会随时间漂移",
        "description": "上下文会在长对话中碎片化，模型逐渐偏离最初目标。务必时常回到第一原则。"
      },
      {
        "title": "天生并非为质量而优化",
        "description": "模型会自信地产出有缺陷的结果。务必在每一个高风险决策节点建立人工验证。"
      },
      {
        "title": "有广度没有深度",
        "description": "AI的输出覆盖面广，却常遗漏具体边界场景。深度需要独立验证。"
      },
      {
        "title": "完全放手的陷阱",
        "description": "把战略外包给AI或许很快，但无法保证正确性。没有正确性的速度是一种负担。"
      }
    ]
  },
  "aiMoats": {
    "title": "复利效应：构建长期的AI护城河",
    "subtitle": "AI带来的优势并非一成不变，它会复利累积",
    "description": "先行者建立的领先优势，后来者即便投入再多预算也难以追平。",
    "timeline": [
      {
        "period": "第 1-3 个月",
        "title": "AI 采用",
        "description": "部署AI工具，建立提示词库，搭建初始工作流。小而可见的收益显现。"
      },
      {
        "period": "第 4-6 个月",
        "title": "AI 融合",
        "description": "AI被嵌入核心流程，组织知识被沉淀下来，团队能力开始复利累积。"
      },
      {
        "period": "第 7-12 个月",
        "title": "AI 系统化",
        "description": "各AI系统相互反哺。客户数据反哺产品，销售数据反哺内容战略。"
      },
      {
        "period": "第 2 年以上",
        "title": "AI 复利",
        "description": "指数级的数据护城河，自我强化的反馈循环。对手难以用合理成本追平。"
      }
    ]
  },
  "pptShowcase": {
    "title": "AI 主题幻灯片集",
    "subtitle": "双语预览与下载",
    "description": "三份示例幻灯片，演示同一 AI 应用框架如何在测试、政治与企业战略间迁移与变通。",
    "conclusionText": "在算力、模型与知识资源日益充裕(Abundance of Resources)的时代,掌握一种AI应用框架,往往能够快速迁移到多个行业与领域。",
    "caseLabel": "应用案例",
    "caseExample": "测试自动化 → 政治博弈 → 商业战略",
    "items": [
      {
        "id": "amplifier",
        "filename": "AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides.pptx",
        "title": "AI 作为放大器（中文）",
        "caption": "在算力、模型与知识资源日益充裕的时代，掌握一种 AI 应用框架可以快速迁移到多个行业与领域。"
      },
      {
        "id": "testing",
        "filename": "AI_in_Software_Test_Automation_ByErHockChiye.pptx",
        "title": "软件测试自动化中的 AI",
        "caption": "AI 在软件测试自动化中的实战应用与框架迁移示例。"
      },
      {
        "id": "politics",
        "filename": "AI政治策略课程_完整版.pptx",
        "title": "AI 政治策略课程",
        "caption": "选举与政治组织动员的 AI 应用案例与策略框架。"
      }
    ],
    "preview": "预览",
    "download": "下载"
  },
  "footer": {
    "aboutTitle": "关于本站",
    "aboutText": "这个教育资源探讨了 AI 如何放大组织能力——无论好坏。本站呈现的战略原则来自真实案例研究和 AI 部署最佳实践。",
    "keyTakeaway": "核心要点",
    "keyTakeawayText": "AI 不会让你变得更聪明。它只会放大你已经在做的事。问题不是是否使用 AI——而是你的战略是否足够强大，能够被放大。"
  }
},
  bm: {
  "nav": {
    "home": "Laman Utama",
    "threeEffects": "Tiga Kesan",
    "mirrorPrinciple": "Prinsip Cermin",
    "aiParadigms": "Paradigma AI",
    "caseStudies": "Kajian Kes",
    "useCases": "Kes Penggunaan",
    "promptingGuide": "Panduan Gesaan",
    "vibeCoding": "Pengekodan Vibe",
    "strategicInsights": "Strategi",
    "crossModelValidation": "Pengesahan",
    "aiRedTeaming": "Pasukan Merah",
    "productionObservations": "Pemerhatian",
    "subtractPrinciple": "Prinsip Tolak",
    "aiMoats": "Kubu Parit AI",
    "keyTakeaways": "Rumusan Utama",
    "pptShowcase": "Slaid",
    "language": "Bahasa Melayu"
  },
  "learningStatus": {
    "tutorialTitle": "Tutorial Kendiri Strategi AI Langkah Demi Langkah",
    "badge": "Tutorial Pembelajaran Kendiri · 15 Modul Berurutan",
    "module": "Modul",
    "step": "Langkah",
    "of": "daripada",
    "progress": "Kemajuan Tutorial",
    "completed": "Selesai",
    "markUnderstood": "Tandakan Sudah Faham",
    "understood": "Sudah Difahami",
    "slideEvidence": "Bukti Slaid Tulen",
    "viewSlide": "Lihat Slaid Asal",
    "closeSlide": "Tutup Pra-tonton Slaid",
    "startLearning": "Mulakan Langkah 1: Tiga Kesan",
    "continueLearning": "Teruskan Pembelajaran: Langkah",
    "nextModule": "Langkah Seterusnya",
    "prevModule": "Langkah Sebelumnya",
    "resetProgress": "Set Semula Kemajuan",
    "allModulesCompleted": "Tahniah! Semua 15 modul selesai difahami. Anda kini menguasai kerangka kerja strategi AI sepenuhnya."
  },
  "hero": {
    "mainHeading": "AI sebagai Penguat, Pengganda, dan Pengkompaun",
    "subheading": "Bagaimana AI Membentuk Keupayaan Organisasi Anda",
    "description": "Ketahui bagaimana AI bertindak sebagai penguat, pengganda dan pengkompaun dalam perniagaan anda—mempercepatkan kejayaan jika hala tuju betul, atau membesarkan kerugian jika strategi tersasar.",
    "cta": "Terokai Rangka Kerja AI"
  },
  "threeEffects": {
    "title": "Tiga Kesan Penggunaan AI",
    "subtitle": "Bagaimana AI menguatkan, menggandakan, dan mengkompaun keupayaan organisasi anda",
    "amplifier": {
      "icon": "⚡",
      "title": "Kesan Penguat",
      "description": "AI membesarkan kesan setiap tindakan yang anda ambil. Strategi yang baik menjadi hebat; strategi yang pincang membawa kemusnahan lebih pantas.",
      "keyPoint": "Lebih pantas, lebih murah, lebih cekap—ke mana sahaja hala tuju anda"
    },
    "multiplier": {
      "icon": "✖",
      "title": "Kesan Pengganda",
      "description": "AI bertindak sebagai pengganda daya untuk proses sedia ada anda. Menghasilkan mesej cacat secara besar-besaran bukanlah kekuatan—ia kelemahan dalam kuantiti besar.",
      "keyPoint": "Kejelasan strategi didarabkan dengan AI menghasilkan kelebihan berdaya tahan"
    },
    "compounder": {
      "icon": "📈",
      "title": "Kesan Pengkompaun",
      "description": "Penggunaan awal membina parit data dan aliran kerja yang mustahil dikejar oleh pesaing yang lewat, tanpa mengira saiz belanjawan mereka.",
      "keyPoint": "Kelebihan AI terkumpul secara eksponen dari semasa ke semasa"
    }
  },
  "mirrorPrinciple": {
    "title": "Prinsip Cermin",
    "subtitle": "AI Mencerminkan Keadaan Sebenar Organisasi Anda",
    "description": "AI ialah cermin kepada model operasi organisasi anda. Ia tidak membaiki strategi yang lemah—ia mendedahkannya dengan lebih pantas dan pada skala yang lebih besar.",
    "inputLabel": "INPUT",
    "outputLabel": "OUTPUT",
    "scenarios": {
      "smart": {
        "emoji": "🧠",
        "title": "Strategi Pintar",
        "label": "AI Menguatkan Kecemerlangan",
        "input": "Wawasan tajam, data berkualiti, cadangan nilai unik",
        "output": "Hasil luar biasa, penguasaan pasaran, pertumbuhan pantas"
      },
      "mediocre": {
        "emoji": "😐",
        "title": "Strategi Sederhana",
        "label": "AI Menguatkan Kesederhanaan",
        "input": "Kandungan generik, kedudukan kabur, mesej umum",
        "output": "Kandungan biasa dalam kuantiti melimpah, keletihan audiens"
      },
      "defective": {
        "emoji": "💥",
        "title": "Strategi Cacat",
        "label": "AI Menguatkan Kegagalan",
        "input": "Mesej toksik, serangan lawan, kedudukan songsang",
        "output": "Skandal reputasi berskala besar, penolakan pasaran pantas"
      }
    },
    "rule": "Peraturan Emas: Perbetulkan hala tuju dan logik bisnes anda sebelum membesarkannya dengan AI."
  },
  "aiParadigms": {
    "title": "Dua Paradigma AI",
    "subtitle": "Memahami Penjana Bahasa lwn Pelaksana Tugasan",
    "bestForLabel": "Paling Sesuai Untuk",
    "promptingTipLabel": "Petua Gesaan",
    "paradigm1": {
      "title": "Penjana Bahasa",
      "tools": [
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com"
        },
        {
          "name": "Google Gemini",
          "url": "https://gemini.google.com"
        },
        {
          "name": "DeepSeek",
          "url": "https://www.deepseek.com"
        }
      ],
      "bestFor": [
        "Percambahan fikiran dan penjanaan idea strategik",
        "Penulisan format panjang: laporan, analisis, artikel naratif",
        "Tafsiran dan pengembangan dalam perbualan panjang",
        "Alternatif lebih jimat berbanding ejen IDE berbayar"
      ],
      "promptingTip": "Gesaan terperinci, berbentuk perbualan, kaya konteks → output lebih mendalam dan komprehensif"
    },
    "paradigm2": {
      "title": "Pelaksana Tugasan",
      "tools": [
        {
          "name": "Claude AI",
          "url": "https://claude.ai"
        },
        {
          "name": "Manus AI",
          "url": "https://manus.im"
        },
        {
          "name": "Cursor Agents",
          "url": "https://cursor.com"
        }
      ],
      "bestFor": [
        "Pelaksanaan autonomi untuk aliran kerja pelbagai langkah",
        "Menyelaraskan alatan, API, fail dan sistem komputer",
        "Pengaturcaraan, automasi dan operasi ejen pintar",
        "Tugasan dengan kriteria penamat yang jelas"
      ],
      "promptingTip": "Ringkas, fokus tugasan, format output eksplisit → memaksimumkan kualiti output ejen"
    }
  },
  "caseStudies": {
    "title": "Kajian Kes Dunia Sebenar",
    "subtitle": "Bagaimana AI menguatkan kejayaan dan kegagalan",
    "scenarioLabel": "Situasi",
    "outcomeLabel": "Akibat",
    "lessonLabel": "Pengajaran Utama Perniagaan",
    "case1": {
      "title": "Kajian Kes #1: Kandungan Serangan Lawan × Pengeluaran Pukal AI",
      "scenario": "Pasukan pemasaran menggunakan AI untuk menghasilkan kandungan serangan terhadap pesaing secara pukal di LinkedIn. Walau bagaimanapun, strategi asas itu telah mencetuskan reaksi negatif dalam industri.",
      "outcome": "Semakin banyak kandungan dihasilkan oleh AI, kesan buruknya meningkat sepuluh kali ganda. Lebih banyak kandungan tidak bererti lebih pengaruh—ia sekadar kerosakan berskala mega.",
      "lesson": "Jika strategi anda sedia menimbulkan bantahan, melipatgandakannya dengan AI hanya mempercepatkan kejatuhan. Arah salah × kelajuan pantas = muflis lebih cepat."
    },
    "case2": {
      "title": "Kajian Kes #2: Produk Premium Terperangkap dengan Persepsi Jenama Negatif",
      "scenario": "Produk hebat atau eksekutif berkualiti dikaitkan dengan jenama yang mempunyai persepsi awam negatif. AI digunakan untuk menghasilkan kandungan secara besar-besaran.",
      "outcome": "Rekod prestasi produk yang cemerlang gagal mengatasi halangan persepsi jenama. Kandungan AI yang banyak mempercepatkan penolakan oleh segmen pasaran utama.",
      "lesson": "Kandungan AI menguatkan persepsi sedia ada—sama ada positif atau negatif. Produk kuat dengan isyarat jenama lemah akan ditolak pasaran lebih pantas apabila dikuatkan AI."
    }
  },
  "useCases": {
    "title": "Di Mana AI Menghasilkan Tuasan Tertinggi",
    "subtitle": "Fungsi perniagaan yang memanfaatkan AI secara optimum",
    "sales": {
      "title": "Jualan",
      "cases": [
        "Penyelidikan dan penemuan profil prospek pelanggan",
        "Penyediaan strategi dan simulasi panggilan jualan",
        "Penggubalan e-mel susulan yang diperibadikan",
        "Pengendalian bantahan dan hujah balas masa nyata"
      ]
    },
    "marketing": {
      "title": "Pemasaran",
      "cases": [
        "Ujian mesej dan pengesahan sudut komunikasi",
        "Pensegmentasian audiens dan sasaran mikro",
        "Penjanaan variasi kandungan kreatif berbeza",
        "Percambahan idea kempen dan strategi jenama"
      ]
    },
    "operations": {
      "title": "Operasi",
      "cases": [
        "Analisis data dan ringkasan corak kecenderungan",
        "Penulisan draf dan pengoptimuman SOP organisasi",
        "Penyelarasan laporan mingguan antara jabatan",
        "Automasi aliran kerja harian berulang"
      ]
    },
    "product": {
      "title": "Produk",
      "cases": [
        "Sintesis maklum balas pengguna daripada pelbagai saluran",
        "Penyelidikan mendalam ciri dan tawaran pesaing",
        "Penggubalan dokumen spesifikasi keperluan produk (PRD)",
        "Ujian kebolehgunaan dan reka bentuk senario interaksi"
      ]
    },
    "qa": {
      "title": "Jaminan Kualiti (QA)",
      "cases": [
        "Penjanaan senario kes ujian dan matriks liputan",
        "Penggubalan tiket pepijat secara automatik daripada log/tangkapan skrin",
        "Semakan kualiti data dan dokumentasi sistem",
        "Pengujian keselamatan dan pengesahan titik integriti"
      ]
    },
    "competitiveIntelligence": {
      "title": "Perisikan Persaingan",
      "cases": [
        "Pemantauan perubahan harga dan kedudukan pasaran",
        "Analisis jurang ciri produk berbanding pesaing",
        "Penjejakan pergerakan bakat utama dan strategi pengambilan",
        "Simulasi tindak balas strategi langkah demi langkah"
      ]
    }
  },
  "promptingGuide": {
    "title": "Panduan Gesaan Strategik",
    "subtitle": "Mendapatkan Output AI yang Jujur dan Berkualiti Tinggi",
    "introduction": "Hasil AI terbaik lahir daripada bertanyakan soalan strategik yang betul—bukan sekadar meminta penjanaan kandungan semata-mata.",
    "keyInsight": "Minta pertimbangan strategik yang jujur dan tajam daripada AI—bukan sekadar teks. Di situlah terletaknya nilai sebenar AI.",
    "doLabel": "✓ DIGALAKKAN",
    "dontLabel": "✗ ELAKKAN",
    "examples": [
      {
        "correct": "Apakah keperluan pelanggan yang sedang kami terlepas pandang?",
        "incorrect": "Tulis siaran akhbar pelancaran produk"
      },
      {
        "correct": "Pertaruhan strategik manakah yang mempunyai nisbah impak/pelaburan tertinggi?",
        "incorrect": "Jana 20 siaran media sosial untuk jenama kami"
      },
      {
        "correct": "Di manakah kami paling terdedah kepada gangguan pesaing?",
        "incorrect": "Draf kandungan serangan lawan di LinkedIn"
      },
      {
        "correct": "Jujurlah: apakah titik buta dalam strategi syarikat kami?",
        "incorrect": "Tulis 10 templat e-mel untuk pasukan jualan"
      },
      {
        "correct": "Apakah peluang kemenangan pantas paling berdaya maju dalam tempoh 90 hari akan datang?",
        "incorrect": "Cipta buletin pelabur suku tahun ketiga"
      }
    ]
  },
  "vibeCoding": {
    "title": "Pengekodan Vibe: Pembangunan Diperkasa AI",
    "subtitle": "Menggunakan AI untuk Menggandakan Produktiviti dan Kualiti Kod",
    "description": "Pengekodan Vibe ialah amalan menjadikan AI sebagai rakan kolaborasi untuk mempercepatkan kepantasan pembangunan, mutu kod, dan kebolehan menyelesaikan masalah. AI bukan menggantikan pembangun, sebaliknya meningkatkan pertimbangan mereka.",
    "usefulTip": "<strong>Petua Berguna:</strong> Sentiasa bangunkan rangka aplikasi yang berfungsi sepenuhnya menggunakan alat ejen (seperti <a href=\"https://manus.im/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Manus AI</a> atau <a href=\"https://claude.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Claude AI</a>), alat kanvas/pengekodan AI (<a href=\"https://gemini.google.com/canvas\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google Gemini Canvas</a>, <a href=\"https://chatgpt.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">ChatGPT Canvas</a>), atau minta <a href=\"https://deepseek.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">DeepSeek</a> menulis rangka Aplikasi Halaman Tunggal (SPA) yang boleh dimuat turun atau dijalankan di web. Kemudian, muat turun keseluruhan kod sumber aplikasi untuk vibe-code seterusnya, refaktor dan kembangkan ciri aplikasi menggunakan pemalam atau sambungan IDE pelbagai model AI (<a href=\"https://antigravity.google/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Antigravity</a>, <a href=\"https://github.com/features/copilot\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">VS Code MS Copilot</a>, <a href=\"https://openai.com/codex/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">VS Code Codex Extension</a>, dll.). Ini membolehkan AI memanfaatkan sepenuhnya \"Kesan Pengkompaunan\" (Compounding Effect) di atas asas yang kukuh, berbanding cuba menjana setiap ciri tanpa konteks, data, atau perincian reka bentuk sistem yang mencukupi.",
    "tools": {
      "title": "Alat AI Dunia Sebenar dalam Tindakan",
      "bugGenie": {
        "name": "BugGenie AI",
        "subtitle": "Alat Draf Tiket Pepijat yang dipacu oleh <a href=\"https://gemini.google.com/canvas\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">fungsi Canvas terbina dalam Google Gemini</a>",
        "description": "Menukar tangkapan skrin dan artifak sokongan kepada laporan pepijat profesional yang berstruktur terus di dalam pelayar—tanpa memerlukan pelayan belakang atau pemasangan.",
        "features": [
          "Dipacu oleh <a href=\"https://gemini.google.com/canvas\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">fungsi Canvas Google Gemini</a> atau melalui <a href=\"https://aistudio.google.com/apps\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">ciri Bina Aplikasi Google AI Studio</a>",
          "Berasaskan pelayar—tiada pemasangan, tiada langkah pembinaan",
          "Menerima tangkapan skrin dan fail artifak sokongan",
          "Menghasilkan tiket pepijat berstruktur sedia untuk difailkan"
        ],
        "githubLink": {
          "label": "Pautan Kod Sumber GitHub",
          "url": "https://github.com/hockchiyeer/ai-powered-auto-bug-ticket-logger"
        },
        "aiStudioLink": {
          "label": "Aplikasi Didayakan Google AI Studio",
          "url": "https://aistudio.google.com/apps/ce12cbda-aa17-405d-9018-96a8ef249d29?showPreview=true&showAssistant=true"
        },
        "canvasLink": {
          "label": "Aplikasi Didayakan Google Gemini Canvas",
          "url": "https://gemini.google.com/share/5a9916e135f0"
        }
      },
      "agileMaturity": {
        "name": "Aplikasi Penilaian Kematangan Agile",
        "subtitle": "Aplikasi JavaScript Statik Asli Pelayar",
        "description": "Aplikasi penilaian serba lengkap yang beroperasi dengan hanya membuka fail index.html—tanpa langkah binaan, tanpa pemasangan pakej, dan tanpa pelayan pembangunan.",
        "features": [
          "100% asli pelayar—HTML, CSS & JS tulen",
          "Sifar kebergantungan: tanpa npm, pemproses, atau pelayan",
          "Buka index.html terus untuk dijalankan secara setempat",
          "Boleh didepani ke GitHub Pages dalam satu langkah mudah"
        ],
        "githubLink": {
          "label": "Pautan Kod Sumber GitHub",
          "url": "https://github.com/hockchiyeer/google-ai-studio-generated-agile-maturity-assessment-app"
        },
        "appLink": {
          "label": "Pautan Aplikasi",
          "url": "https://hockchiyeer.github.io/google-ai-studio-generated-agile-maturity-assessment-app"
        }
      }
    },
    "toolRankings": {
      "title": "Kedudukan Alat AI untuk Tugasan Pengekodan",
      "subtitle": "Kecekapan, ketepatan & kualiti output (pengalaman peribadi)",
      "tools": [
        {
          "rank": 1,
          "name": "OpenAI Codex - GPT-5.5 Ultra High Thinking",
          "url": "https://openai.com/codex/",
          "score": "9.0/10"
        },
        {
          "rank": 2,
          "name": "Google Antigravity - Claude Sonnet 4.6 High Thinking",
          "url": "https://antigravity.google/",
          "score": "7.8/10"
        },
        {
          "rank": 3,
          "name": "Cursor Agents",
          "url": "https://cursor.com/agents",
          "score": "6.8/10"
        },
        {
          "rank": 4,
          "name": "GitHub Copilot Free - GPT-4.1 mini model",
          "url": "https://github.com/features/copilot",
          "score": "5.8/10"
        },
        {
          "rank": 5,
          "name": "Google Antigravity - Gemini Pro 3.1 High Thinking",
          "url": "https://antigravity.google/",
          "score": "5.6/10"
        }
      ]
    }
  },
  "crossModelValidation": {
    "title": "Aliran Kerja Pengesahan Rentas Model",
    "subtitle": "Mengurangkan halusinasi dan meluaskan konteks dengan <a href=\"https://notebooklm.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Google NotebookLM</a>",
    "description": "Jangan berhenti pada kesimpulan satu model AI sahaja. Gunakan gesaan yang sama merentasi pelbagai model untuk mengesahkan silang dan mensintesis wawasan yang lebih mendalam.",
    "steps": [
      {
        "title": "Bina Garis Dasar",
        "description": "Bina pangkalan pengetahuan awal dengan mengimport PDF, laporan penyelidikan, dan data ke dalam NotebookLM."
      },
      {
        "title": "Ujian Selari Pelbagai Model",
        "description": "Hantar arahan yang sama kepada pelbagai model bahasa (seperti <a href=\"https://chatgpt.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">ChatGPT</a>, <a href=\"https://gemini.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Gemini</a>, <a href=\"https://claude.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Claude</a>, <a href=\"https://deepseek.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">DeepSeek</a>, <a href=\"https://chat.qwen.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-violet-600 underline font-semibold hover:text-violet-800\">Qwen</a>)."
      },
      {
        "title": "Sintesis & Selaraskan",
        "description": "Eksport jawapan model dan import semula ke dalam NotebookLM untuk meringkaskan persetujuan dan mengenal pasti perbezaan pandangan."
      },
      {
        "title": "Penilaian Strategik Akhir",
        "description": "Gunakan pandangan yang telah disatukan untuk merangka strategi yang mantap—dengan akauntabiliti manusia sentiasa dikekalkan."
      }
    ]
  },
  "strategicInsights": {
    "title": "Persoalan Strategik Paling Kritikal",
    "subtitle": "Bingkaikan semula kelebihan daya saing melalui pengagihan semula kapasiti AI",
    "question": "Jika pasukan anda berhenti sepenuhnya daripada membuang masa untuk tugas-tugas reaktif—menjawab pengumuman pesaing, menjana laporan rutin, mengurus komunikasi bernilai rendah—dan mengalihkan kapasiti terluang itu ke kerja-kerja strategik diperkasa AI, apakah peluang pelaburan yang akan anda kejar?",
    "insight": "Persoalan ini memisahkan syarikat yang menggunakan AI untuk kecekapan semata-mata daripada syarikat yang menggunakan AI untuk pembentukan semula strategi perniagaan secara menyeluruh. Jawapannya sering kali mendedahkan di mana kelebihan daya saing sebenar anda berada.",
    "keyPoint": "AI tidak mencipta strategi baharu. Ia membebaskan kapasiti minda dan masa untuk melaksanakannya."
  },
  "aiRedTeaming": {
    "title": "Pasukan Merah AI (Red Teaming)",
    "subtitle": "Biar AI melakonkan watak CEO pesaing anda",
    "description": "Paksa AI mencari kelemahan dan titik buta yang paling mudah dieksploitasi dalam perniagaan anda, sebelum pesaing anda menemuinya.",
    "questions": [
      "Jika pesaing utama kami melancarkan kempen ofensif pada suku hadapan, apakah sudut serangan mereka yang paling memusnahkan?",
      "Apakah tiga kelemahan paling tidak dipertahankan yang boleh dieksploitasi oleh pesaing yang mempunyai modal besar sekarang?",
      "Segmen pasaran manakah yang paling mudah dirampas oleh tawaran promosi pesaing kami hari ini?",
      "Apakah andaian strategik teras yang kami buat yang paling mungkin terbukti salah?"
    ]
  },
  "productionObservations": {
    "title": "4 Pemerhatian Utama daripada Penggunaan AI dalam Pengeluaran",
    "subtitle": "Pengajaran berharga daripada pelaksanaan AI jangka panjang dan pelbagai model",
    "observations": [
      {
        "title": "Pelepasan Keperluan (Requirement Drift)",
        "description": "Konteks menjadi berpecah-belah dalam perbualan panjang. Model mula menyimpang daripada matlamat asal. Sentiasa kembali kepada prinsip pertama."
      },
      {
        "title": "Bukan Secara Semula Jadi Dioptimumkan untuk Kualiti",
        "description": "Model boleh menghasilkan output yang cacat dengan nada yang sangat meyakinkan. Wajibkan pengesahan manusia pada setiap titik keputusan berisiko tinggi."
      },
      {
        "title": "Luas Skop tetapi Kurang Kedalaman",
        "description": "Liputan output AI sangat luas, namun sering mengabaikan senario tepi yang kritikal. Kedalaman memerlukan pengesahan bebas yang teliti."
      },
      {
        "title": "Perangkap Lepas Tangan Sepenuhnya",
        "description": "Menyerahkan strategi kepada AI mungkin kelihatan pantas, tetapi tiada jaminan ketepatan. Kelajuan tanpa ketepatan adalah satu bebanan besar."
      }
    ]
  },
  "subtractPrinciple": {
    "title": "Prinsip Tolak",
    "subtitle": "Apabila AI menyimpang, set semula—jangan kuatkan lagi",
    "description": "Apabila trajektori AI menjadi tidak produktif atau terpesong, penyelesaiannya bukan dengan menambah kuasa pengiraan atau mendesak lebih kuat. Sebaliknya, set semula ke keadaan bersih, tukar model, atau suntik perspektif segar.",
    "corePrinciplesLabel": "Prinsip Teras:",
    "principles": [
      "Menggunakan lebih banyak komputasi pada trajektori yang cacat ibarat menggunakan kekerasan ke arah yang salah",
      "Set semula ke keadaan bersih apabila kualiti output AI mula merosot",
      "Tukar model untuk memperoleh perspektif dan pendekatan yang segar",
      "Suntik pertimbangan manusia untuk membetulkan semula hala tuju",
      "Ketahui bila masa penguatan AI memburukkan keadaan dan bukannya memperbaikinya"
    ]
  },
  "aiMoats": {
    "title": "Membina Kubu Parit AI Jangka Panjang",
    "subtitle": "Kesan pengkompaunan daripada penggunaan AI peringkat awal",
    "description": "Kelebihan AI terkumpul secara kompaun dari semasa ke semasa. Penggerak awal membina parit data dan aliran kerja yang tidak dapat dikejar oleh pengikut lewat, tanpa mengira saiz bajet mereka.",
    "timeline": [
      {
        "period": "Bulan 1-3",
        "title": "Penggunaan Awal",
        "description": "Mengerahkan alatan AI, membina pustaka gesaan, dan merakam peningkatan kecekapan awal."
      },
      {
        "period": "Bulan 4-6",
        "title": "Integrasi Mendalam",
        "description": "AI diserap ke dalam proses teras. Pengetahuan organisasi mula menghasilkan kesan pengkompaunan."
      },
      {
        "period": "Bulan 7-12",
        "title": "Penyistematan",
        "description": "Sistem-sistem AI saling membekalkan data. Maklumat pelanggan memperhalusi strategi produk; data jualan memacu pemasaran."
      },
      {
        "period": "Tahun ke-2+",
        "title": "Pengkompaunan Eksponen",
        "description": "Kubu parit data eksponen dan kitaran maklum balas yang memperkukuh diri terbentuk dengan teguh."
      }
    ]
  },
  "keyTakeaways": {
    "title": "Rumusan Utama",
    "subtitle": "Prinsip teras bagi kejayaan penggunaan AI",
    "takeaways": [
      {
        "icon": "⚡",
        "title": "AI Ialah Penguat—Hala Tuju Paling Utama",
        "description": "AI tidak menentukan hasil—strategi anda yang menentukannya. Strategi betul dikuatkan untuk pulangan luar biasa. Strategi cacat dikuatkan untuk mempercepatkan kegagalan. Baiki hala tuju terlebih dahulu."
      },
      {
        "icon": "✖",
        "title": "Pengganda Berfungsi Kedua-dua Arah",
        "description": "Setiap penggunaan AI ialah pengganda daya. Menghasilkan mesej cacat secara pukal bukan tanda kekuatan—ia kelemahan dalam jumlah besar. Kejelasan strategi didarabkan dengan AI adalah satu-satunya jalan menuju kelebihan berkekalan."
      },
      {
        "icon": "📈",
        "title": "Pengkompaun Memberi Ganjaran kepada Penggerak Awal",
        "description": "Kelebihan AI terkumpul melalui parit data, aliran kerja, dan kepantasan. Pasukan yang membina sistem AI hari ini mencipta jurang kelebihan yang mustahil dirapatkan oleh pesaing lewat—tanpa mengira bajet."
      },
      {
        "icon": "◆",
        "title": "Kuasai Strategi—Gunakan AI untuk Mempercepatkan",
        "description": "Jana kerangka kerja, capai pengetahuan, analisis data, dan skalakan pelaksanaan menggunakan AI. Tetapi sentiasa pegang sendiri logik strategik, andaian asas, dan piawaian kualiti."
      },
      {
        "icon": "−",
        "title": "Prinsip Tolak: Set Semula, Bukan Kuatkan Kesalahan",
        "description": "Apabila AI mula merapu—set semula ke keadaan bersih, tukar model, suntik perspektif segar. Menambah komputasi pada trajektori yang cacat hanyalah desakan membuta tuli ke arah yang salah."
      }
    ]
  },
  "pptShowcase": {
    "title": "Koleksi Slaid Pembentangan AI",
    "subtitle": "Pra-tonton interaktif dan muat turun percuma",
    "description": "Tiga set slaid contoh yang menunjukkan bagaimana kerangka kerja AI yang sama boleh dipindahkan dan disesuaikan merentasi automasi ujian, analisis politik, dan strategi perniagaan.",
    "conclusionText": "Dalam era kelimpahan sumber (Abundance of Resources) komputasi, model, dan ilmu pengetahuan, menguasai satu kerangka kerja AI yang mantap membolehkan pemindahan pantas ke pelbagai industri dan domain berbeza.",
    "caseLabel": "Kes Penggunaan",
    "caseExample": "Automasi Ujian → Percaturan Politik → Strategi Perniagaan",
    "items": [
      {
        "id": "amplifier",
        "filename": "AI_As_Amplifier_Multiplier_Compounder_Chinese_version_35_slides.pptx",
        "title": "AI sebagai Penguat (Versi Bahasa Cina 35 Slaid)",
        "caption": "Dalam era kelimpahan sumber komputasi dan model, menguasai satu kerangka kerja AI membolehkan pemindahan pantas merentasi pelbagai industri."
      },
      {
        "id": "testing",
        "filename": "AI在软件测试自动化中的应用_2026.pptx",
        "title": "AI dalam Automasi Ujian Perisian",
        "caption": "Aplikasi kejuruteraan praktikal AI dalam automasi ujian perisian dan pemindahan kerangka kerja oleh Er Hock Chiye."
      },
      {
        "id": "politics",
        "filename": "AI政治策略课程_完整版.pptx",
        "title": "Kursus Strategi Politik AI",
        "caption": "Kajian kes analitik pilihan raya dan mobilisasi organisasi politik yang membuktikan keanjalan strategi AI."
      }
    ],
    "preview": "Pra-tonton",
    "download": "Muat Turun"
  },
  "aiJourney": {
    "title": "Perjalanan AI Anda",
    "subtitle": "Bermula di sini",
    "tagline": "Bukan dengan menggunakan AI untuk bercakap lebih banyak, tetapi dengan menggunakan AI untuk melihat dengan lebih jelas apa yang sebenarnya sedang anda lakukan",
    "steps": [
      {
        "step": 1,
        "title": "Kuatkan (Amplify)",
        "description": "strategi yang betul"
      },
      {
        "step": 2,
        "title": "Gandakan (Multiply)",
        "description": "pelaksanaan yang berkesan"
      },
      {
        "step": 3,
        "title": "Kompaunkan (Compound)",
        "description": "kelebihan daya saing"
      }
    ],
    "cta": "Mulakan Transformasi Anda Hari Ini",
    "author": "Er Hock Chiye | Pengamal Kes Penggunaan AI"
  },
  "footer": {
    "aboutTitle": "Mengenai Laman Ini",
    "aboutText": "Sumber pendidikan ini meneroka bagaimana AI menguatkan keupayaan organisasi—sama ada ke arah kejayaan atau kerugian. Prinsip strategik yang dibentangkan di sini diambil daripada kajian kes dunia sebenar dan amalan terbaik penggunaan AI.",
    "keyTakeaway": "Rumusan Utama",
    "keyTakeawayText": "AI tidak menjadikan anda lebih bijak. Ia sekadar melipatgandakan apa yang sedia anda lakukan. Soalannya bukan sama ada mahu menggunakan AI—tetapi sama ada strategi anda cukup kukuh untuk dikuatkan oleh AI."
  }
}
};

export type Content = typeof i18n.en;

export function getContent(language: Language): Content {
  return (i18n[language] || i18n.en) as Content;
}
