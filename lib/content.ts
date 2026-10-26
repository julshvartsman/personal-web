export type Job = {
  company: string
  role: string
  location: string
  dates: string
  points: string[]
  stack: string[]
}

export type Project = {
  name: string
  context: string
  stack: string[]
  description: string[]
  video?: { src: string; ratio: string }
  wide?: boolean
}

export const jobs: Job[] = [
  {
    company: 'Capital One',
    role: 'Software Engineer Intern',
    location: 'Chicago, IL',
    dates: 'Jun – Aug 2026',
    points: [
      'Built an AI pipeline on AWS that pulls log context and traces linked-list call chains for on-call engineers, saving about 30 minutes of manual digging per incident.',
      'Generalized an LLM-powered CloudWatch summarization service into a context-enrichment platform that handles multiple production log formats, so other teams can reuse it for incident triage.',
      'Wrote a CI evaluation framework, combining deterministic Python/regex checks with LLM-as-a-judge scoring, that blocks pull requests when summary quality regresses on 30 historical CloudWatch logs.',
    ],
    stack: ['Python', 'Go', 'AWS', 'CloudWatch', 'CI/CD'],
  },
  {
    company: 'Oracle',
    role: 'AI/ML Engineer (Contract)',
    location: 'Berkeley, CA',
    dates: 'Jan – May 2026',
    points: [
      'Built a production platform that generates Strategic Briefs for Oracle account executives from real-time financial data, news, and macroeconomic indicators.',
      'Designed the agent architecture: a Planner Agent fans out to parallel Financial and News agents, which feed a Synthesis Agent that produces SWOT analysis and opportunity signals.',
      'Ran EDA on Alpha Vantage data to choose which signals were worth ingesting, and modeled them into Oracle AI Database 26ai tables.',
    ],
    stack: ['Python', 'Agent orchestration', 'Oracle AI Database 26ai'],
  },
  {
    company: 'Santo António Hospital (ULSSA)',
    role: 'Technical Lead / Lead Consultant',
    location: 'Porto, Portugal',
    dates: 'Jul – Aug 2025',
    points: [
      'Traced stalled sustainability reporting across 8 hospitals to unreliable data capture, manual bottlenecks, and inconsistent KPI definitions.',
      "Led a 10-person team and set a two-phase roadmap (a web app now, smart meters and IoT later) aligned to Porto's 2030 carbon-neutrality target and EU funding requirements.",
      'Designed and built the Phase 1 MVP: a data-entry view and admin dashboard with role-based access, schema constraints, validation, and an email-ingest ETL for utility bills.',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase'],
  },
  {
    company: 'DataStory Consulting',
    role: 'VP of Professional Development · previously VP of Operations',
    location: 'Berkeley, CA',
    dates: 'Jan 2025 – Present',
    points: [
      'Since Aug 2026, lead professional development for all 70+ members, preparing them for the job market across technical, soft, and public-facing skills.',
      'Support members day to day with mock interviews and resume reviews, and run behavioral and technical workshops.',
      'As VP of Operations (Jan 2025 – Aug 2026), oversaw a $40K+ operating budget across a 50+ member organization with zero overruns.',
      'Delivered a GCP-hosted staffing allocation prediction tool, applying feature engineering to historical project data to automate assignment recommendations for client engagements.',
    ],
    stack: ['GCP', 'scikit-learn'],
  },
]

export const projects: Project[] = [
  {
    name: 'CalConnect',
    context: 'Co-founder · Jan 2026',
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Auth.js'],
    description: [
      "UC Berkeley's student services are scattered across department websites. CalConnect puts them in one searchable place, with structured pages for eligibility, hours, locations, and next steps, plus personalized recommendations and a campus map.",
      'An ingestion pipeline finds official university sources, extracts and standardizes them, and routes every record through human review before it goes live. In user testing, lookups dropped from 10–15 minutes to about 30 seconds.',
    ],
    video: { src: 'https://www.loom.com/embed/d1b5f0cfd7504d05b2dcd2bc53338234', ratio: '56.25%' },
    wide: true,
  },
  {
    name: 'tot',
    context: 'Cal Hacks · Oct 2026',
    stack: ['TypeScript', 'React', 'Node.js', 'Anthropic API', 'SpacetimeDB', 'Chrome MV3'],
    description: [
      "A Chrome extension that sits alongside Claude and notices when you're using it to skip the learning. It classifies prompts in real time and answers shortcuts with Socratic questions that push you to work the problem yourself.",
      'Three-stage LLM pipeline, a fail-open turn-coordination state machine, and a Shadow DOM UI. Used by 10 people, covered by 70 automated tests and Puppeteer browser tests.',
    ],
  },
  {
    name: 'AI Data Enrichment Platform',
    context: 'Jun 2025',
    stack: ['Python', 'OpenAI API', 'CrewAI', 'BeautifulSoup'],
    description: [
      'Agents that fill in missing product specifications across large datasets by combining the OpenAI API, web scraping, and Google Search.',
      'Circuit breakers, retries, rate limiting, and async processing keep it running at volume.',
    ],
  },
  {
    name: 'ULSSA Sustainability Data Platform',
    context: 'Santo António Hospital · 2025',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    description: [
      'A dual-view web app where 8 hospitals log monthly energy, water, and waste data, with an admin dashboard for oversight. Automated utility bill ingestion cut report prep time by 98%.',
    ],
    video: { src: 'https://www.loom.com/embed/c668adc502924687a48ebe00c9205b5d', ratio: '57.82%' },
    wide: true,
  },
  {
    name: 'Financial Risk Predictor',
    context: 'Dashboard',
    stack: ['Python', 'scikit-learn', 'pandas', 'Streamlit'],
    description: [
      'Credit risk models (logistic regression, decision trees) in a Streamlit dashboard, so non-technical users can try forecasting scenarios and adjust model parameters themselves.',
    ],
    video: { src: 'https://www.loom.com/embed/21a5eadf10f543ad917eb57608b6e76f', ratio: '59.21%' },
    wide: true,
  },
]

// `usedIn` shows up when you hover a skill
export const skillGroups: { label: string; skills: { name: string; usedIn?: string }[] }[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', usedIn: 'Capital One, Oracle, data enrichment' },
      { name: 'TypeScript', usedIn: 'tot, CalConnect, ULSSA' },
      { name: 'Go', usedIn: 'Capital One' },
      { name: 'SQL' },
      { name: 'Java' },
    ],
  },
  {
    label: 'AI / ML',
    skills: [
      { name: 'LLMs', usedIn: 'Capital One, Oracle, tot' },
      { name: 'Agent orchestration', usedIn: 'Oracle, data enrichment' },
      { name: 'LLM evaluation', usedIn: 'Capital One' },
      { name: 'RAG pipelines' },
      { name: 'PyTorch' },
      { name: 'scikit-learn', usedIn: 'DataStory, risk predictor' },
      { name: 'Anthropic API', usedIn: 'tot' },
      { name: 'OpenAI API', usedIn: 'data enrichment' },
      { name: 'Gemini API' },
    ],
  },
  {
    label: 'Web & data',
    skills: [
      { name: 'Next.js', usedIn: 'CalConnect, ULSSA' },
      { name: 'React', usedIn: 'tot, CalConnect' },
      { name: 'Supabase', usedIn: 'ULSSA' },
      { name: 'SpacetimeDB', usedIn: 'tot' },
      { name: 'Oracle AI Database 26ai', usedIn: 'Oracle' },
      { name: 'pandas' },
      { name: 'matplotlib' },
      { name: 'Streamlit', usedIn: 'risk predictor' },
    ],
  },
  {
    label: 'Infra',
    skills: [
      { name: 'AWS', usedIn: 'Lambda, ECS, S3, CloudWatch at Capital One' },
      { name: 'CI/CD', usedIn: 'Capital One' },
      { name: 'Git & GitHub' },
      { name: 'Weights & Biases' },
    ],
  },
]

export const coursework = [
  'Computational Structures in Data Science',
  'Data Structures',
  'Database Systems',
  'Full Stack Web Development',
  'Probability for Data Science',
  'Principles and Techniques of Data Science',
  'Data, Inference, and Decisions',
  'Healthcare Machine Learning',
]
