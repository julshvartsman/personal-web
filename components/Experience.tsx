export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">Experience</div>
      <h2>Where I&apos;ve worked</h2>

      <div className="exp-item fade-in">
        <div className="exp-meta">
          <div className="exp-date">Jun 2026 — Aug 2026</div>
          <div className="exp-company">Capital One</div>
        </div>
        <div>
          <div className="exp-role">Software Engineer Intern</div>
          <div className="exp-desc">
            Incoming software engineering intern.
          </div>
          <div className="exp-tags">
            <span className="tag">Software Engineering</span>
          </div>
        </div>
      </div>

      <div className="exp-item fade-in">
        <div className="exp-meta">
          <div className="exp-date">Jan 2026 — May 2026</div>
          <div className="exp-company">Oracle</div>
        </div>
        <div>
          <div className="exp-role">AI / ML Engineer</div>
          <div className="exp-desc">
            Designed and deployed a production multi-agent AI platform that auto-generates Strategic
            Briefs for Oracle AEs — synthesizing real-time financial data, news intelligence, and
            macroeconomic signals into competitive insights. Architected a Planner Agent orchestrating
            parallel Financial and News Agents into a structured SWOT synthesis pipeline.
          </div>
          <div className="exp-tags">
            <span className="tag">Multi-Agent AI</span>
            <span className="tag">Python</span>
            <span className="tag">Oracle AI DB 26ai</span>
            <span className="tag">Prompt Engineering</span>
            <span className="tag">EDA</span>
          </div>
        </div>
      </div>

      <div className="exp-item fade-in">
        <div className="exp-meta">
          <div className="exp-date">Jul 2025 — Aug 2025</div>
          <div className="exp-company">ULSSA · Porto, PT</div>
        </div>
        <div>
          <div className="exp-role">Lead Consultant</div>
          <div className="exp-desc">
            Directed a 10-person team to ship a Phase-1 MVP sustainability dashboard in under 6 weeks
            for Santo António Hospital. Diagnosed root causes of stalled reporting across 8 hospitals
            and defined a two-phase roadmap aligned to Porto&apos;s 2030 neutrality target and EU
            funding requirements.
          </div>
          <div className="exp-tags">
            <span className="tag">Next.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Supabase</span>
            <span className="tag">ETL</span>
            <span className="tag">RBAC</span>
          </div>
        </div>
      </div>

      <div className="exp-item fade-in">
        <div className="exp-meta">
          <div className="exp-date">Jan 2025 — Present</div>
          <div className="exp-company">DataStory Consulting</div>
        </div>
        <div>
          <div className="exp-role">VP of Operations &amp; Consultant</div>
          <div className="exp-desc">
            Oversee $40K+ operating budget across a 50+ member organization with zero overruns.
            Delivered a GCP-hosted staffing allocation prediction tool — applying feature engineering
            on historical project data to automate assignment recommendations for client engagements.
          </div>
          <div className="exp-tags">
            <span className="tag">GCP</span>
            <span className="tag">sklearn</span>
            <span className="tag">Feature Engineering</span>
            <span className="tag">Operations</span>
          </div>
        </div>
      </div>
    </section>
  )
}
