export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">Projects</div>
      <h2>Things I&apos;ve built</h2>
      <div className="projects-grid">

        <div className="project-card featured fade-in">
          <div>
            <div className="project-num">01 — Featured</div>
            <div className="project-title">CalConnect — UC Berkeley Resource Platform</div>
            <div className="project-desc">
              Identified a campus-wide gap in resource discoverability and shipped a full-stack platform
              centralizing all UC Berkeley student resources. AI-powered search uses a Gemini agent to
              scrape live pages and synthesize summaries with cited sources in real time.
            </div>
            <div className="exp-tags">
              <span className="tag">React</span>
              <span className="tag">FastAPI</span>
              <span className="tag">Gemini API</span>
              <span className="tag">Groq</span>
              <span className="tag">Supabase</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="video-embed" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.loom.com/embed/d1b5f0cfd7504d05b2dcd2bc53338234"
                allowFullScreen
              />
            </div>
            <a
              href="https://calconnect-eta.vercel.app/search"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Live ↗
            </a>
          </div>
        </div>

        <div className="project-card fade-in">
          <div className="video-embed" style={{ paddingBottom: '57.82%' }}>
            <iframe
              src="https://www.loom.com/embed/c668adc502924687a48ebe00c9205b5d"
              allowFullScreen
            />
          </div>
          <div className="project-num">02</div>
          <div className="project-title">ULSSA Sustainability Data Platform</div>
          <div className="project-desc">
            Dual-view web app for 8 hospitals to log monthly energy, water, and waste data.
            Automated utility bill ingestion pipeline reduced report prep time by 98%.
          </div>
          <div className="exp-tags" style={{ marginTop: '1rem' }}>
            <span className="tag">Next.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">PostgreSQL</span>
          </div>
        </div>

        <div className="project-card fade-in">
          <div className="project-num">03</div>
          <div className="project-title">AI-Powered Data Enrichment Platform</div>
          <div className="project-desc">
            Multi-agent system that automatically fills missing product specifications across large
            datasets — integrating OpenAI API, web scraping, and Google Search with circuit breakers
            and async processing.
          </div>
          <div className="exp-tags" style={{ marginTop: '1rem' }}>
            <span className="tag">Python</span>
            <span className="tag">CrewAI</span>
            <span className="tag">OpenAI API</span>
          </div>
        </div>

        <div className="project-card fade-in">
          <div className="video-embed" style={{ paddingBottom: '59.21%' }}>
            <iframe
              src="https://www.loom.com/embed/21a5eadf10f543ad917eb57608b6e76f"
              allowFullScreen
            />
          </div>
          <div className="project-num">04</div>
          <div className="project-title">Financial Risk Predictor Dashboard</div>
          <div className="project-desc">
            Credit risk prediction models (logistic regression, decision trees) deployed as an
            interactive Streamlit dashboard — letting non-technical users explore forecasting
            scenarios and customize model parameters in real time.
          </div>
          <div className="exp-tags" style={{ marginTop: '1rem' }}>
            <span className="tag">Python</span>
            <span className="tag">sklearn</span>
            <span className="tag">pandas</span>
            <span className="tag">Streamlit</span>
          </div>
        </div>

      </div>
    </section>
  )
}
